"""Potong rekaman per kata berdasarkan waktu mulai dari transkrip ElevenLabs (Scribe).

Pakai: python3 potong_waktu.py <rekaman.mp3> <folder_keluar> <kode1,...> <mulai1,mulai2,...>
Batas tiap potongan = waktu mulai kata berikutnya - 0,06 s; hening di awal/akhir dibuang.
"""
import os, subprocess, sys
src, outdir, keys, starts = sys.argv[1], sys.argv[2], sys.argv[3].split(','), [float(x) for x in sys.argv[4].split(',')]
assert len(keys) == len(starts), (len(keys), len(starts))
os.makedirs(outdir, exist_ok=True)
dur = float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', src], capture_output=True, text=True).stdout)
flt = ('silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.08,'
       'areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.12,areverse')
for i, k in enumerate(keys):
    a = max(0.0, starts[i] - 0.06)
    b = starts[i + 1] - 0.06 if i + 1 < len(starts) else dur
    out = os.path.join(outdir, k + '.mp3')
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-ss', f'{a:.3f}', '-to', f'{b:.3f}', '-i', src, '-af', flt,
                    '-ac', '1', '-ar', '44100', '-b:a', '96k', out], check=True)
    d = float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', out], capture_output=True, text=True).stdout)
    print(f'{k.replace("huruf_", "").replace("angka_", "#")}={d:.2f}', end=' ')
print()
