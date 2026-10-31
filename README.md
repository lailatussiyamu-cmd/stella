# Stella — panduan pasang dan perawatan

Stella adalah papan komunikasi (AAC) untuk pasien ICU dan PICU. Aplikasi ini berjalan di browser, bisa dipasang ke layar utama tablet, dan jalan tanpa internet setelah dibuka pertama kali.

## Isi folder

| File / folder | Fungsi |
| --- | --- |
| `index.html` | Kerangka halaman dan tampilan |
| `app.js` | Seluruh logika aplikasi (layar, suara, mode pindai, panggil perawat) |
| `sw.js` | Service worker: menyimpan semua file untuk mode offline |
| `audio-list.js` | Daftar kode file suara yang dicari di folder `audio/` |
| `manifest.webmanifest` | Nama, ikon, dan mode layar penuh saat dipasang |
| `icons/` | Ikon aplikasi |
| `fonts/` | Font Plus Jakarta Sans (disimpan lokal, tidak butuh internet) |
| `audio/` | Rekaman suara: `perempuan/` dan `laki/` (`.mp3`) |
| `alat/potong.py` | Memotong rekaman panjang menjadi file per kalimat |

## 1. Online-kan sekali (wajib HTTPS)

Service worker hanya jalan di alamat `https://`. Pilih salah satu:

- **Netlify**: buat akun gratis di netlify.com, buka menu *Add new site → Deploy manually*, lalu seret seluruh folder `stella-pwa` ke halaman itu.
- **GitHub Pages**: unggah isi folder ke repository GitHub, lalu aktifkan *Settings → Pages*.

Membuka file `index.html` langsung dari folder (alamat `file://`) tidak bisa dipakai offline.

## 2. Pasang di tablet

1. Buka alamat situsnya di **Chrome** (Android) atau **Safari** (iPad) saat ada internet.
2. Tunggu beberapa detik sampai semua file tersimpan. Di *Pengaturan* (ikon di pojok kanan atas Stella) akan tertulis "siap dipakai offline".
3. Android: menu ⋮ → *Tambahkan ke layar utama*. iPad: tombol Bagikan → *Tambahkan ke Layar Utama*.
4. Buka Stella dari ikon di layar utama. Sejak saat itu Stella jalan tanpa internet.

## 3. Suara rekaman

Semua kalimat sudah direkam dengan ElevenLabs (model eleven_v4), jadi tidak bergantung pada suara bawaan perangkat:

- `audio/perempuan/` — suara Nesah Paramitha
- `audio/laki/` — suara Akram

Pilih suaranya di *Pengaturan → Suara pasien*. Kalau satu kalimat belum ada rekamannya di suara yang dipilih, Stella memakai rekaman suara satunya, lalu suara bawaan perangkat.

Menambah atau mengganti kalimat:

1. Tambahkan barisnya di `daftar_kalimat.csv` dan kodenya di `audio-list.js`.
2. Rekam di ElevenLabs. Beberapa kalimat bisa digabung dalam satu rekaman dengan pemisah `[long pause]`, lalu dipotong otomatis: `python3 alat/potong.py rekaman.mp3 audio/perempuan kode1,kode2,...`
3. Buka `sw.js`, naikkan angka `const CACHE = 'stella-v5';` (misalnya ke `stella-v6`).
4. Unggah ulang ke GitHub. Di tablet, buka Stella sekali saat ada internet, tutup, lalu buka lagi.

Huruf yang diketik di layar Huruf tetap dibacakan suara bawaan perangkat.

## 4. Pengaturan tablet yang disarankan

- **Suara Indonesia**: unduh paket suara bahasa Indonesia di pengaturan *Text-to-Speech* (dipakai untuk layar Huruf dan kalimat yang belum direkam).
- **Kunci aplikasi**: aktifkan *Sematkan layar / Screen pinning* (Android) atau *Akses Terpandu / Guided Access* (iPad) supaya pasien tidak keluar dari Stella tanpa sengaja.
- **Volume**: naikkan volume media. Bel Panggil Perawat memakai jalur suara media.
- Stella meminta layar tetap menyala selama dibuka. Kalau perangkat tidak mendukung, matikan *kunci otomatis* secara manual.

## 5. Batasan yang perlu diketahui

- Panggil Perawat adalah **tambahan**, bukan pengganti bel resmi rumah sakit.
- Di iPad, suara yang diputar otomatis berulang (misalnya bel panggilan) bisa dibatasi oleh Safari. Uji dulu di perangkat yang akan dipakai.
- Stella tidak menyimpan data pasien apa pun. Yang disimpan di tablet hanya pengaturan kecepatan mode pindai.
