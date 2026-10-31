"""Potong rekaman kata-kata pendek (huruf/angka) yang jedanya rapat.

Transkrip ElevenLabs (Scribe) dipakai untuk mengetahui kira-kira di mana tiap kata,
tapi titik potongnya diambil dari jeda hening yang benar-benar ada di rekaman:
di antara kata i dan i+1 dipilih jeda terpanjang, lalu potongan kata i berakhir
sedikit setelah jeda itu dimulai (tidak ikut membawa awal kata berikutnya).

Pakai: python3 potong_waktu.py <rekaman.mp3> <folder_keluar> <kode1,...> <mulai1,...>
"""
import os
import re
import subprocess
import sys

src, outdir = sys.argv[1], sys.argv[2]
keys = sys.argv[3].split(',')
starts = [float(x) for x in sys.argv[4].split(',')]
assert len(keys) == len(starts), (len(keys), len(starts))
os.makedirs(outdir, exist_ok=True)


def probe(path):
    return float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', path],
                                capture_output=True, text=True).stdout)


dur = probe(src)
log = subprocess.run(['ffmpeg', '-hide_banner', '-i', src, '-af', 'silencedetect=noise=-38dB:d=0.06', '-f', 'null', '-'],
                     capture_output=True, text=True).stderr
sil = list(zip([float(x) for x in re.findall(r'silence_start: ([\d.]+)', log)],
               [float(x) for x in re.findall(r'silence_end: ([\d.]+)', log)]))

# Jeda pemisah tiap pasangan kata: jeda terpanjang yang dimulai setelah kata i mulai
# dan sebelum (perkiraan) kata i+1 mulai.
gaps = []
for i in range(len(keys) - 1):
    cand = [(s, e) for s, e in sil if starts[i] + 0.05 < s < starts[i + 1] + 0.05]
    if not cand:
        sys.exit(f'GAGAL: tidak ada jeda antara {keys[i]} dan {keys[i + 1]}')
    gaps.append(max(cand, key=lambda x: x[1] - x[0]))

for i, k in enumerate(keys):
    a = 0.0 if i == 0 else max(0.0, gaps[i - 1][1] - 0.04)
    b = dur if i == len(keys) - 1 else min(gaps[i][0] + 0.10, gaps[i][1] - 0.02)
    out = os.path.join(outdir, k + '.mp3')
    flt = 'silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05,afade=t=out:st=%.3f:d=0.03' % max(0, b - a - 0.03)
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-ss', f'{a:.3f}', '-to', f'{b:.3f}', '-i', src, '-af', flt,
                    '-ac', '1', '-ar', '44100', '-b:a', '96k', out], check=True)
    gap = gaps[i][1] - gaps[i][0] if i < len(gaps) else 0
    print(f'{k.replace("huruf_", "").replace("angka_", "#")}={probe(out):.2f}(jeda {gap:.2f})', end=' ')
print()
