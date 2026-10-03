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
| `audio/` | Tempat file rekaman suara (`.mp3`) |

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

## 3. Menambah atau mengganti suara rekaman

1. Beri nama file sesuai kolom `file` di `daftar_kalimat.csv`, misalnya `kebutuhan_haus.mp3`.
2. Taruh semua file di folder `audio/`.
3. Buka `sw.js`, ganti `const CACHE = 'stella-v1';` menjadi `stella-v2` (naikkan angkanya setiap kali ada perubahan).
4. Unggah ulang foldernya ke Netlify/GitHub.
5. Di tablet, buka Stella sekali saat ada internet, tutup, lalu buka lagi.

Kalimat yang belum punya rekaman otomatis memakai suara bawaan perangkat.

## 4. Pengaturan tablet yang disarankan

- **Suara Indonesia**: unduh paket suara bahasa Indonesia di pengaturan *Text-to-Speech* (dipakai untuk layar Huruf dan kalimat yang belum direkam).
- **Kunci aplikasi**: aktifkan *Sematkan layar / Screen pinning* (Android) atau *Akses Terpandu / Guided Access* (iPad) supaya pasien tidak keluar dari Stella tanpa sengaja.
- **Volume**: naikkan volume media. Bel Panggil Perawat memakai jalur suara media.
- Stella meminta layar tetap menyala selama dibuka. Kalau perangkat tidak mendukung, matikan *kunci otomatis* secara manual.

## 5. Batasan yang perlu diketahui

- Panggil Perawat adalah **tambahan**, bukan pengganti bel resmi rumah sakit.
- Di iPad, suara yang diputar otomatis berulang (misalnya bel panggilan) bisa dibatasi oleh Safari. Uji dulu di perangkat yang akan dipakai.
- Stella tidak menyimpan data pasien apa pun. Yang disimpan di tablet hanya pengaturan kecepatan mode pindai.
