"""Potong rekaman panjang menjadi file per kalimat di N-1 jeda terpanjang.

Pakai: python3 potong.py <rekaman.mp3> <folder_keluar> <kode1,kode2,...>
"""
import re
import subprocess
import sys
import os

src, outdir, keys = sys.argv[1], sys.argv[2], sys.argv[3].split(',')
os.makedirs(outdir, exist_ok=True)
n = len(keys)

log = subprocess.run(
    ['ffmpeg', '-hide_banner', '-i', src, '-af', 'silencedetect=noise=%sdB:d=%s' % (os.environ.get('NOISE', '-40'), os.environ.get('MIN', '0.25')), '-f', 'null', '-'],
    capture_output=True, text=True).stderr
starts = [float(x) for x in re.findall(r'silence_start: ([\d.]+)', log)]
ends = [float(x) for x in re.findall(r'silence_end: ([\d.]+)', log)]
dur = float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', src],
                           capture_output=True, text=True).stdout)
sil = [(s, e) for s, e in zip(starts, ends) if s > 0.05 and e < dur - 0.05]  # jeda di tengah saja
if len(sil) < n - 1:
    sys.exit(f'GAGAL {src}: hanya {len(sil)} jeda, butuh {n - 1}')
ranked = sorted(sil, key=lambda x: x[1] - x[0], reverse=True)
cuts = sorted(ranked[:n - 1])
chosen_min = min(e - s for s, e in cuts)
unchosen_max = max([e - s for s, e in ranked[n - 1:]] or [0])
print(f'{os.path.basename(src)}: {n} kalimat | jeda terpendek yg dipotong {chosen_min:.2f}s | '
      f'jeda terpanjang yg TIDAK dipotong {unchosen_max:.2f}s')

bounds = [0.0] + [(s + e) / 2 for s, e in cuts] + [dur]
for i, k in enumerate(keys):
    a, b = bounds[i], bounds[i + 1]
    out = os.path.join(outdir, k + '.mp3')
    # buang hening di awal & akhir, sisakan 0,1 s supaya tidak terpotong kasar
    flt = ('silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.1,'
           'areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.15,areverse')
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-ss', f'{a:.3f}', '-to', f'{b:.3f}', '-i', src,
                    '-af', flt, '-ac', '1', '-ar', '44100', '-b:a', '96k', out], check=True)
    d = float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', out],
                             capture_output=True, text=True).stdout)
    print(f'  {k:22s} {d:5.2f}s')
