(() => {
'use strict';
const VERSION = '1.3';

/* ---------- ikon (garis) ---------- */
const P = {
  lungs:'<path d="M12 3v8M12 11l-2.5 2M12 11l2.5 2"/><path d="M8.5 6.5C6 6.5 4 10 4 14v3.5a2 2 0 0 0 2.6 1.9L9 18.7a1 1 0 0 0 .7-1V8.2a1.7 1.7 0 0 0-1.2-1.7z"/><path d="M15.5 6.5C18 6.5 20 10 20 14v3.5a2 2 0 0 1-2.6 1.9L15 18.7a1 1 0 0 1-.7-1V8.2a1.7 1.7 0 0 1 1.2-1.7z"/>',
  zap:'<path d="M13 2.5 4.5 14h6.5l-1 7.5L18.5 10H12z"/>',
  cup:'<path d="M5 8h12v6a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M8 2.5v3M11 2.5v3M14 2.5v3"/>',
  bed:'<path d="M3 6v13M3 15h18v4M21 15v-3a3 3 0 0 0-3-3h-7v6"/><circle cx="7" cy="11" r="2"/>',
  smile:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2a5 5 0 0 1 5.5 4.8"/>',
  pencil:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>',
  back:'<path d="M15 18l-6-6 6-6"/>',
  speaker:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  x:'<path d="M6 6l12 12M18 6L6 18"/>',
  hand:'<path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12M11 11V4.5a1.5 1.5 0 0 1 3 0V12M14 11.5V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 8-7 8-3 0-4.5-1.5-6-4l-1.8-3a1.5 1.5 0 0 1 2.5-1.6L8 15"/>',
  bell:'<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/><path d="M12 3v2"/>',
  scan:'<path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3"/><circle cx="12" cy="12" r="3"/>',
  sliders:'<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>',
  wind:'<path d="M3 8h11a3 3 0 1 0-3-3"/><path d="M3 12h15a3 3 0 1 1-3 3"/><path d="M3 16h7"/>',
  cough:'<circle cx="9" cy="11" r="6"/><path d="M7 13.5h4"/><path d="M17 8.5l3-1.5M17.5 11.5H21M17 14.5l3 1.5"/>',
  phlegm:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/><path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5"/>',
  suction:'<path d="M4 20c4 0 4-6 8-6s4-6 8-6"/><path d="M16 4h5v5"/><path d="M21 4l-4 4"/>',
  tube:'<path d="M9 3v7a3 3 0 0 0 6 0V3"/><path d="M6 16h12"/><path d="M12 13v8"/>',
  mask:'<path d="M5 9c0-3 3-5 7-5s7 2 7 5v4c0 4-3 7-7 7s-7-3-7-7z"/><path d="M9 13h6M10 16h4"/><path d="M5 10H2M19 10h3"/>',
  glass:'<path d="M6 3h12l-1.5 17a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1z"/><path d="M6.5 9h11"/>',
  bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M8 7.5c0-1.5 1.5-1.5 1.5-3M12.5 7.5c0-1.5 1.5-1.5 1.5-3"/>',
  lips:'<path d="M3 12c3-4 6-5 9-3 3-2 6-1 9 3-3 5-6 6-9 6s-6-1-9-6z"/><path d="M3 12h18"/>',
  nausea:'<circle cx="12" cy="12" r="9"/><path d="M8 16.5c1.5-1.5 6.5-1.5 8 0"/><path d="M8 9l2 1.2M16 9l-2 1.2"/>',
  drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  toilet:'<path d="M6 3h5v8H6z"/><path d="M4 11h16a8 8 0 0 1-8 8"/><path d="M10 19v2h6v-3"/>',
  snow:'<path d="M12 2v20M4 6.5l16 11M20 6.5 4 17.5"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5"/>',
  turn:'<path d="M4 12a8 8 0 0 1 14-5.3"/><path d="M18 3v4h-4"/><path d="M20 12a8 8 0 0 1-14 5.3"/><path d="M6 21v-4h4"/>',
  pillow:'<path d="M4 8c0-2 1-3 3-3h10c2 0 3 1 3 3v8c0 2-1 3-3 3H7c-2 0-3-1-3-3z"/><path d="M4 8c2 1 2 7 0 8M20 8c-2 1-2 7 0 8"/>',
  blanket:'<path d="M3 6h18v12H3z"/><path d="M3 10h18M8 6v12M16 6v12"/>',
  itch:'<path d="M4 8c2-2 4 2 6 0s4 2 6 0 4 2 4 2"/><path d="M4 13c2-2 4 2 6 0s4 2 6 0 4 2 4 2"/><path d="M4 18c2-2 4 2 6 0s4 2 6 0 4 2 4 2"/>',
  bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z"/>',
  noisy:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9l5 6M21 9l-5 6"/>',
  moon:'<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>',
  restraint:'<path d="M7 21v-6l-2-4V6a1.5 1.5 0 0 1 3 0v4M8 9V4.5a1.5 1.5 0 0 1 3 0V9M11 9V5a1.5 1.5 0 0 1 3 0v4M14 9.5V7a1.5 1.5 0 0 1 3 0v6l-2 3v5"/><path d="M5 15h12"/>',
  mother:'<circle cx="12" cy="8" r="4"/><path d="M8 7c0-3 1.5-5 4-5s4 2 4 5c0 2 .5 4 2 5"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>',
  father:'<circle cx="12" cy="8" r="4"/><path d="M8.2 6.5C9 4.5 10.5 4 12 4s3 .5 3.8 2.5"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>',
  couple:'<circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M2 20a6 6 0 0 1 10-4.5A6 6 0 0 1 22 20"/>',
  child:'<circle cx="12" cy="10" r="3"/><path d="M7 21a5 5 0 0 1 10 0"/><path d="M10 4.5c1-1 3-1 4 0"/>',
  nurse:'<circle cx="12" cy="9" r="3.5"/><path d="M7.5 6.5V4h9v2.5"/><path d="M12 3.2v1.6M11.2 4h1.6"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>',
  steth:'<path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M10 13v3a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="12" r="2"/>',
  heart:'<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>',
  phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  bksp:'<path d="M9 5h11v14H9l-6-7z"/><path d="M12 9.5l5 5M17 9.5l-5 5"/>'
};
const svg = (n, s = 56, w = 1.8) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;
const STAR = (s) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 16.8l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" fill="#F2B33D"/></svg>`;
const BUBBLE = `<svg class="bubble" width="70" height="70" viewBox="30 6 204 226" aria-hidden="true"><defs><clipPath id="bubInner"><circle cx="130" cy="110" r="80"/></clipPath></defs>
<path d="M66 176C62 198 50 212 36 226 64 229 92 216 110 200Z" fill="#0E2A5A"/>
<circle cx="130" cy="110" r="100" fill="#0E2A5A"/>
<circle cx="130" cy="110" r="80" fill="#FFFFFF"/>
<path d="M40 168C84 150 122 176 162 160 192 148 206 128 220 118V210H40Z" fill="#C3DFF5" clip-path="url(#bubInner)"/>
<g transform="translate(130 104) scale(0.62) translate(-100 -108)">
<polygon points="100.0 38.0 120.0 80.5 166.6 86.4 132.3 118.5 141.1 164.6 100.0 142.0 58.9 164.6 67.7 118.5 33.4 86.4 80.0 80.5" fill="#F4B43F" stroke="#F4B43F" stroke-width="22" stroke-linejoin="round"/>
<ellipse cx="88" cy="102" rx="5.5" ry="8" fill="#0E2A5A"/><ellipse cx="112" cy="102" rx="5.5" ry="8" fill="#0E2A5A"/>
<path d="M86 120q14 12 28 0" fill="none" stroke="#0E2A5A" stroke-width="5.5" stroke-linecap="round"/></g></svg>`;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ---------- isi kalimat ---------- */
const BLUE = ['#E3EEF9', '#1F5FA8'], GREEN = ['#E2F2E9', '#1F7A4D'], PURPLE = ['#ECE7F6', '#5B3FA8'], YELLOW = ['#FDF0D5', '#9A5B00'], ORANGE = ['#FCE8D8', '#A8461B'], TEAL = ['#DFF0F2', '#13707C'], GRAY = ['#EFEBE2', '#3D4654'], ROSE = ['#FBE6E2', '#B42318'];

const SCREENS = {
  napas: { t: 'Pernapasan', e: 'Breathing', c: BLUE, i: 'lungs', cols: 3, ic: 108, lf: 28, items: [
    ['napas_sesak', 'Sesak napas', 'Short of breath', 'Saya sesak napas.', 'wind'],
    ['napas_batuk', 'Batuk', 'Cough', 'Saya ingin batuk.', 'cough'],
    ['napas_dahak', 'Ada dahak', 'Phlegm', 'Ada dahak.', 'phlegm'],
    ['napas_suction', 'Minta disedot', 'Need suction', 'Tolong sedot lendir saya.', 'suction'],
    ['napas_selang', 'Selang tidak nyaman', 'Tube (ETT/trach) hurts', 'Selang saya tidak nyaman.', 'tube'],
    ['napas_masker', 'Masker tidak nyaman', 'Mask discomfort', 'Masker saya tidak nyaman.', 'mask'] ] },
  kebutuhan: { t: 'Kebutuhan dasar', e: 'Basic needs', c: GREEN, i: 'cup', cols: 4, items: [
    ['kebutuhan_haus', 'Haus', 'Thirsty', 'Saya haus.', 'glass'],
    ['kebutuhan_lapar', 'Lapar', 'Hungry', 'Saya lapar.', 'bowl'],
    ['kebutuhan_mulut', 'Mulut kering', 'Dry mouth', 'Mulut saya kering.', 'lips'],
    ['kebutuhan_mual', 'Mual', 'Nauseous', 'Saya mual.', 'nausea'],
    ['kebutuhan_bak', 'Ingin BAK', 'Need to pee', 'Saya ingin buang air kecil.', 'drop'],
    ['kebutuhan_bab', 'Ingin BAB', 'Need to poo', 'Saya ingin buang air besar.', 'toilet'],
    ['kebutuhan_dingin', 'Dingin', 'Cold', 'Saya kedinginan.', 'snow'],
    ['kebutuhan_panas', 'Panas', 'Hot', 'Saya kepanasan.', 'sun'] ] },
  nyaman: { t: 'Kenyamanan', e: 'Comfort', c: PURPLE, i: 'bed', cols: 4, items: [
    ['nyaman_posisi', 'Ganti posisi', 'Reposition me', 'Saya ingin ganti posisi.', 'turn'],
    ['nyaman_bantal', 'Atur bantal', 'Fix my pillow', 'Tolong atur bantal saya.', 'pillow'],
    ['nyaman_selimut', 'Selimut', 'Blanket', 'Tolong atur selimut saya.', 'blanket'],
    ['nyaman_gatal', 'Gatal', 'Itchy', 'Saya gatal.', 'itch'],
    ['nyaman_terang', 'Terlalu terang', 'Too bright', 'Lampunya terlalu terang.', 'bulb'],
    ['nyaman_bising', 'Terlalu bising', 'Too noisy', 'Terlalu bising.', 'noisy'],
    ['nyaman_tidur', 'Ingin tidur', 'I want to sleep', 'Saya ingin tidur.', 'moon'],
    ['nyaman_ikatan', 'Ikatan terlalu kencang', 'Restraint too tight', 'Ikatan tangan saya terlalu kencang.', 'restraint'] ] },
  keluarga: { t: 'Keluarga & orang', e: 'People & family', c: ORANGE, i: 'users', cols: 4, items: [
    ['keluarga_ibu', 'Ibu / Mama', 'Mother', 'Saya ingin bertemu ibu.', 'mother'],
    ['keluarga_ayah', 'Ayah / Papa', 'Father', 'Saya ingin bertemu ayah.', 'father'],
    ['keluarga_pasangan', 'Suami / Istri', 'Husband / wife', 'Saya ingin bertemu suami atau istri saya.', 'couple'],
    ['keluarga_anak', 'Anak / Saudara', 'Child / sibling', 'Saya ingin bertemu anak atau saudara saya.', 'child'],
    ['keluarga_perawat', 'Perawat', 'Nurse', 'Tolong panggil perawat.', 'nurse', BLUE],
    ['keluarga_dokter', 'Dokter', 'Doctor', 'Saya ingin bicara dengan dokter.', 'steth', BLUE],
    ['keluarga_temui', 'Ingin ditemani', 'I want family here', 'Saya ingin ditemani keluarga.', 'heart'],
    ['keluarga_telepon', 'Telepon keluarga', 'Call my family', 'Tolong telepon keluarga saya.', 'phone'] ] },
  perasaan: { t: 'Perasaan', e: 'Feelings', c: YELLOW, i: 'smile', cols: 4, faces: true, items: [] }
};

const DOT = 'M23 27 L23 27.1 M41 27 L41 27.1', SLEEPY = 'M20 27 Q23 29 26 27 M38 27 Q41 29 44 27';
const MOODS = [
  ['rasa_takut', 'Takut', 'Scared', 'Saya takut.', '#E3E8F4', 'M21 26 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0 M39 26 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0', 'M17 19 Q22 15 27 18 M37 18 Q42 15 47 19', 'M25 45 Q32 38 39 45 Q32 50 25 45'],
  ['rasa_cemas', 'Cemas', 'Anxious', 'Saya cemas.', '#F3EBD8', DOT, 'M18 20 L27 18 M37 18 L46 20', 'M21 45 Q24 42 27 45 Q30 48 33 45 Q36 42 39 45 Q42 48 43 46'],
  ['rasa_sedih', 'Sedih', 'Sad', 'Saya sedih.', '#DCE7F2', DOT, 'M18 21 L27 18 M46 21 L37 18', 'M22 47 Q32 39 42 47'],
  ['rasa_marah', 'Marah', 'Angry', 'Saya marah.', '#F6D3CB', DOT, 'M17 18 L27 23 M47 18 L37 23', 'M22 46 L42 46'],
  ['rasa_bingung', 'Bingung', 'Confused', 'Saya bingung.', '#ECE5F5', DOT, 'M18 20 L27 20 M37 17 Q42 14 47 18', 'M22 45 Q27 42 32 45 Q37 48 42 44'],
  ['rasa_sepi', 'Kesepian', 'Lonely', 'Saya merasa kesepian.', '#E6E2DA', SLEEPY, '', 'M24 46 Q32 42 40 46'],
  ['rasa_tenang', 'Tenang', 'Calm', 'Saya merasa tenang.', '#D6ECDD', SLEEPY, '', 'M23 41 Q32 47 41 41'],
  ['rasa_senang', 'Senang', 'Happy', 'Saya senang.', '#FBEDBE', DOT, '', 'M20 39 Q32 52 44 39']
];

const PAIN = [
  [0, 'Tidak sakit', '#D3ECDA', 'M20 39 Q32 51 44 39', ''],
  [2, 'Sedikit', '#E6F1CB', 'M21 41 Q32 48 43 41', ''],
  [4, 'Agak sakit', '#FBEFC2', 'M21 44 L43 44', ''],
  [6, 'Sakit', '#FBDFC1', 'M21 46 Q32 40 43 46', 'M17 19 L27 21 M47 19 L37 21'],
  [8, 'Sangat sakit', '#F7CDC1', 'M20 48 Q32 37 44 48', 'M17 17 L27 21 M47 17 L37 21'],
  [10, 'Paling sakit', '#F1B5AD', 'M20 50 Q32 34 44 50', 'M16 16 L27 21 M48 16 L37 21']
];
const PAIN_TXT = { 0: 'Saya tidak merasa sakit.', 2: 'Saya merasa nyeri dua.', 4: 'Saya merasa nyeri empat.', 6: 'Saya merasa nyeri enam.', 8: 'Saya merasa nyeri delapan.', 10: 'Saya merasa nyeri sepuluh. Sakit sekali.' };
const PLACES = [
  ['kepala', 'Kepala', [50, 20]], ['leher', 'Leher', [50, 36]], ['dada', 'Dada', [50, 58]], ['perut', 'Perut', [50, 90]],
  ['punggung', 'Punggung', [50, 74]], ['lengan', 'Lengan', [19, 76]], ['kaki', 'Kaki', [40, 156]], ['luka', 'Luka operasi', [60, 98]]
];
const KINDS = [
  ['tajam', 'Tajam', 'Sharp', 'rasanya tajam.'], ['terbakar', 'Terbakar', 'Burning', 'rasanya seperti terbakar.'], ['berdenyut', 'Berdenyut', 'Throbbing', 'rasanya berdenyut.'],
  ['tertekan', 'Tertekan', 'Pressure', 'rasanya seperti ditekan.'], ['kram', 'Kram', 'Cramping', 'rasanya kram.'], ['perih', 'Perih', 'Stinging', 'rasanya perih.']
];

const HOME = [
  ['napas', 'Pernapasan', 'Breathing', 'lungs', BLUE],
  ['nyeri', 'Nyeri', 'Pain', 'zap', ROSE],
  ['kebutuhan', 'Kebutuhan', 'Basic needs', 'cup', GREEN],
  ['nyaman', 'Kenyamanan', 'Comfort', 'bed', PURPLE],
  ['perasaan', 'Perasaan', 'Feelings', 'smile', YELLOW],
  ['keluarga', 'Keluarga', 'People & family', 'users', ORANGE],
  ['huruf', 'Huruf & Angka', 'Letters & numbers', 'Aa', TEAL],
  ['papan', 'Papan Tulis', 'Write or draw', 'pencil', GRAY]
];

// kode suara -> teks cadangan
const PH = { umum_ya: 'Ya.', umum_tidak: 'Tidak.', umum_stop: 'Stop. Tolong hentikan.', umum_panggil: 'Perawat, tolong ke sini.' };
Object.values(SCREENS).forEach((s) => s.items.forEach((it) => { PH[it[0]] = it[3]; }));
MOODS.forEach((m) => { PH[m[0]] = m[3]; });
PAIN.forEach((p) => { PH['nyeri_' + p[0]] = PAIN_TXT[p[0]]; });
PLACES.forEach((p) => { PH['lokasi_' + p[0]] = 'di ' + p[1].toLowerCase() + '.'; });
KINDS.forEach((k) => { PH['jenis_' + k[0]] = k[3]; });

/* ---------- penyimpanan ---------- */
const store = {
  get(k, d) { try { const v = localStorage.getItem('stella_' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('stella_' + k, JSON.stringify(v)); } catch (e) {} }
};

/* ---------- keadaan ---------- */
const S = {
  screen: 'home', sel: null, last: null,
  scanning: false, scanMs: store.get('scanMs', 2000),
  pain: { level: 6, place: 'perut', kind: 'berdenyut' },
  text: '', pen: { color: '#1B2430', size: 6 }, drew: false,
  calling: false
};

/* ---------- suara ---------- */
const player = new Audio();
player.preload = 'auto';
const missing = new Set();
let token = 0;
let pending = null; // penutup untuk suara yang sedang berjalan, dipanggil saat dipotong
let voice = null;
function pickVoice() {
  try {
    const vs = speechSynthesis.getVoices();
    voice = vs.find((x) => /^id/i.test(x.lang) && /google|natural|neural|online|enhanced|premium/i.test(x.name)) || vs.find((x) => /^id/i.test(x.lang) || /indonesia|damayanti/i.test(x.name)) || null;
  } catch (e) { voice = null; }
  return voice;
}
try { speechSynthesis.onvoiceschanged = pickVoice; } catch (e) {}
pickVoice();
function tts(text) {
  return new Promise((res) => {
    let done = false; const fin = () => { if (!done) { done = true; res(); } };
    try {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'id-ID'; if (voice || pickVoice()) u.voice = voice; u.rate = 0.9;
      u.onend = fin; u.onerror = fin;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
      setTimeout(fin, 2500 + text.length * 160);
    } catch (e) { fin(); }
  });
}
function stopSound() {
  try { player.pause(); } catch (e) {}
  try { speechSynthesis.cancel(); } catch (e) {}
  if (pending) { const p = pending; pending = null; p(); }
}
function playKey(key, my) {
  const text = PH[key] || '';
  return new Promise((res) => {
    if (my !== undefined && my !== token) return res();
    let settled = false;
    const done = () => { if (settled) return; settled = true; pending = null; player.onended = player.onerror = null; res(); };
    const fallback = () => { if (settled) return; settled = true; player.onended = player.onerror = null; pending = res; tts(text).then(() => { if (pending === res) pending = null; res(); }); };
    pending = done;
    try { speechSynthesis.cancel(); } catch (e) {}
    if (missing.has(key)) return fallback();
    player.onended = done;
    player.onerror = () => { missing.add(key); fallback(); };
    player.src = 'audio/' + key + '.mp3';
    const p = player.play();
    if (p && p.catch) p.catch((err) => { if (!err || err.name !== 'AbortError') { if (err && err.name !== 'NotAllowedError') missing.add(key); fallback(); } });
  });
}
async function say(keys) {
  const my = ++token; stopSound();
  for (const k of [].concat(keys)) { if (my !== token) return; await playKey(k, my); }
}

let actx = null;
function ctx() {
  try { const AC = window.AudioContext || window.webkitAudioContext; if (!actx) actx = new AC(); if (actx.state === 'suspended') actx.resume(); } catch (e) {}
  return actx;
}
function tone(freqs, gap, len, vol) {
  const c = ctx(); if (!c) return;
  const t0 = c.currentTime + 0.02;
  freqs.forEach((f, i) => {
    [[1, vol], [4, vol * 0.15]].forEach(([h, v]) => {
      const o = c.createOscillator(), g = c.createGain(), s = t0 + i * gap, l = h === 1 ? len : len * 0.25;
      o.type = 'sine'; o.frequency.value = f * h;
      g.gain.setValueAtTime(0.0001, s); g.gain.exponentialRampToValueAtTime(v, s + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, s + l);
      o.connect(g); g.connect(c.destination); o.start(s); o.stop(s + l + 0.05);
    });
  });
}
// Bunyi dibuat sebagai file WAV di memori lalu diputar lewat <audio>, bukan Web Audio:
// di iPhone/iPad Web Audio ikut dibisukan tombol senyap, sedangkan <audio> tetap bunyi.
try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) {}
function makeWav(freqs, gap, len, vol) {
  const rate = 22050, total = Math.ceil(rate * ((freqs.length - 1) * gap + len + 0.05));
  const data = new Float32Array(total);
  freqs.forEach((f, i) => {
    const start = Math.floor(i * gap * rate);
    for (let n = 0; start + n < total && n < len * rate; n++) {
      const t = n / rate;
      const env = Math.min(1, t / 0.008) * Math.exp(-t * (5 / len));
      data[start + n] += env * (Math.sin(2 * Math.PI * f * t) + 0.15 * Math.sin(2 * Math.PI * f * 4 * t) * Math.exp(-t * 18));
    }
  });
  let peak = 0; for (let n = 0; n < total; n++) peak = Math.max(peak, Math.abs(data[n]));
  const buf = new ArrayBuffer(44 + total * 2), v = new DataView(buf);
  const w = (o, s) => { for (let k = 0; k < s.length; k++) v.setUint8(o + k, s.charCodeAt(k)); };
  w(0, 'RIFF'); v.setUint32(4, 36 + total * 2, true); w(8, 'WAVE'); w(12, 'fmt ');
  v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
  v.setUint32(24, rate, true); v.setUint32(28, rate * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true);
  w(36, 'data'); v.setUint32(40, total * 2, true);
  for (let n = 0; n < total; n++) v.setInt16(44 + n * 2, Math.round((data[n] / (peak || 1)) * vol * 32767), true);
  return URL.createObjectURL(new Blob([buf], { type: 'audio/wav' }));
}
const bellEl = new Audio(makeWav([523.25, 659.25, 783.99], 0.16, 0.7, 0.9));
const tickEl = new Audio(makeWav([1180], 0, 0.08, 0.35));
[bellEl, tickEl].forEach((el) => { el.preload = 'auto'; try { el.load(); } catch (e) {} });
// "Bangunkan" pemutar bunyi pada sentuhan pertama supaya bel tidak terlambat saat dibutuhkan.
let warmed = false;
function warmUp() {
  if (warmed) return; warmed = true;
  [bellEl, tickEl].forEach((el) => {
    try {
      el.muted = true;
      const p = el.play();
      const reset = () => { try { el.pause(); el.currentTime = 0; } catch (e) {} el.muted = false; };
      if (p && p.then) p.then(reset, reset); else reset();
    } catch (e) { el.muted = false; }
  });
  ctx();
}
document.addEventListener('pointerdown', warmUp, { once: true, capture: true });
function playEl(el, fallback) {
  try {
    el.currentTime = 0;
    const p = el.play();
    if (p && p.catch) p.catch(() => fallback());
  } catch (e) { fallback(); }
}
const bell = () => playEl(bellEl, () => tone([523.25, 659.25, 783.99], 0.16, 0.7, 0.34));
// Tiga nada naik ala marimba lalu suara "Perawat, tolong ke sini" —
// sengaja beda dari bel pintu (ding-dong turun) dan dari beep alarm monitor/ventilator.
function chime() {
  bell();
  try { if (navigator.vibrate) navigator.vibrate([200, 120, 200]); } catch (e) {}
  setTimeout(() => { if (S.calling) say('umum_panggil'); }, 950);
}
const tick = () => playEl(tickEl, () => tone([1180], 0, 0.08, 0.12));

/* ---------- tampilan ---------- */
const $ = (s, r = document) => r.querySelector(s);
const app = $('#app'), screen = $('#screen');
function fit() {
  const s = Math.min(innerWidth / 1194, innerHeight / 834);
  app.style.transform = `translate(-50%,-50%) scale(${s})`;
}
addEventListener('resize', fit); fit();
document.querySelectorAll('[data-icon]').forEach((el) => {
  const m = { bell96: svg('bell', 96), check40: svg('check', 40, 2.6) }; el.innerHTML = m[el.dataset.icon] || '';
});

const answers = () => `
<nav class="ans" aria-label="Jawaban cepat">
  <button type="button" class="a-ya" data-say="umum_ya" data-scan>${svg('check', 52, 2.6)}<span class="t"><b>YA</b><small>Yes</small></span></button>
  <button type="button" class="a-no" data-say="umum_tidak" data-scan>${svg('x', 48, 2.8)}<span class="t"><b>TIDAK</b><small>No</small></span></button>
  <button type="button" class="a-stop" data-say="umum_stop" data-scan>${svg('hand', 54, 1.9)}<span class="t"><b>STOP</b><small>Hentikan · Please stop</small></span></button>
</nav>`;

const innerHead = (t, e, c, icon, right) => `
<header class="hd">
  <button type="button" class="hbtn sq" data-go="home" data-scan aria-label="Kembali ke beranda">${svg('back', 30, 2.4)}</button>
  <div class="ttl"><span class="ti" style="background:${c[0]};color:${c[1]}">${icon === 'Aa' ? 'Aa' : svg(icon, 32)}</span><span><b>${t}</b><small>${e}</small></span></div>
  ${right}
</header>`;
const repeatBtn = () => `<button type="button" class="primary" data-action="repeat" data-scan>${svg('speaker', 26, 2)}Ucapkan lagi</button>`;

function viewHome() {
  return `
<header class="hd">
  <div class="brand">${BUBBLE}<div><div class="wm" role="img" aria-label="Stella"><span class="wm-s">S<span class="wm-so" aria-hidden="true">S</span></span><span class="wm-t">T</span><span class="wm-ell"><span class="wm-blob"></span><span class="wm-n">ell</span><span class="wm-a">a</span></span></div><div class="bs">Teman Bicara · pasien ICU &amp; PICU</div></div></div>
  <button type="button" class="callbtn" id="callBtn" data-scan="call" aria-label="Panggil perawat, tekan dan tahan"><span class="fill"></span>${svg('bell', 28, 2)}<span class="cl"><b>Panggil Perawat</b><small>tekan &amp; tahan</small></span></button>
  <button type="button" class="hbtn ${S.scanning ? 'on' : ''}" id="scanBtn" ${S.scanning ? '' : 'data-action="toggleScan"'} aria-pressed="${S.scanning}" aria-label="${S.scanning ? 'Tahan untuk mematikan mode pindai' : 'Nyalakan mode pindai'}">${svg('scan', 26, 2)}${S.scanning ? 'Tahan utk keluar' : 'Mode pindai'}</button>
  <button type="button" class="hbtn sq" data-action="settings" aria-label="Pengaturan">${svg('sliders', 28, 2)}</button>
</header>
<main class="mn">
  <div class="prompt"><h1>Apa yang ingin kamu sampaikan?</h1><span>What would you like to say?</span>${S.scanning ? '<b class="pill">Mode pindai aktif · ketuk di mana saja untuk memilih</b>' : ''}</div>
  <div class="grid" style="--c:4">
    ${HOME.map(([to, t, e, ic, c]) => `
    <button type="button" class="tile hometile" data-go="${to}" data-scan style="background:${c[0]};--ic:104px">
      <span class="ic" style="color:${c[1]}">${ic === 'Aa' ? '<span style="font-size:40px;font-weight:800;letter-spacing:-.02em">Aa</span>' : svg(ic, 58)}</span>
      <span class="lb"><b>${t}</b><small>${e}</small></span>
    </button>`).join('')}
  </div>
</main>${answers()}`;
}

function viewList(id) {
  const s = SCREENS[id];
  let tiles;
  if (s.faces) {
    tiles = MOODS.map(([k, t, e, , fill, eyes, brow, mouth]) => `
    <button type="button" class="tile ${S.sel === k ? 'sel' : ''}" data-say="${k}" data-scan>
      <svg width="100" height="100" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="29" fill="${fill}" stroke="#1B2430" stroke-width="2.5"/>${brow ? `<path d="${brow}" fill="none" stroke="#1B2430" stroke-width="2.5" stroke-linecap="round"/>` : ''}<path d="${eyes}" fill="none" stroke="#1B2430" stroke-width="3.2" stroke-linecap="round"/><path d="${mouth}" fill="none" stroke="#1B2430" stroke-width="3" stroke-linecap="round"/></svg>
      <span class="lb"><b>${t}</b><small>${e}</small></span>
    </button>`).join('');
  } else {
    tiles = s.items.map(([k, t, e, , ic, c]) => {
      const cc = c || s.c;
      return `
    <button type="button" class="tile ${S.sel === k ? 'sel' : ''}" data-say="${k}" data-scan>
      <span class="ic" style="background:${cc[0]};color:${cc[1]}">${svg(ic, Math.round((s.ic || 96) * 0.55))}</span>
      <span class="lb"><b>${t}</b><small>${e}</small></span>
    </button>`;
    }).join('');
  }
  return `${innerHead(s.t, s.e, s.c, s.i, repeatBtn())}
<main class="mn" style="padding-top:22px"><div class="grid" style="--c:${s.cols};--ic:${s.ic || 96}px;--lf:${s.lf || 26}px">${tiles}</div></main>${answers()}`;
}

function painSummary() {
  const p = S.pain, pl = PLACES.find((x) => x[0] === p.place), k = KINDS.find((x) => x[0] === p.kind);
  return `Nyeri ${p.level} · ${pl[1].toLowerCase()} · ${k[1].toLowerCase()}`;
}
function viewNyeri() {
  const p = S.pain, dot = PLACES.find((x) => x[0] === p.place)[2];
  return `${innerHead('Nyeri', 'Pain', ROSE, 'zap', `<output class="summary" aria-live="polite">${painSummary()}</output><button type="button" class="primary" data-action="speakPain" data-scan>${svg('speaker', 26, 2)}Ucapkan</button>`)}
<main class="mn" style="padding-top:18px">
  <section class="card" style="padding:18px 22px 20px;gap:14px">
    <div class="ch"><h2 style="font-size:24px">Seberapa sakit?</h2><span style="font-size:17px">How much does it hurt?</span></div>
    <div class="faces">${PAIN.map(([n, t, fill, mouth, brow]) => `
      <button type="button" class="face ${p.level === n ? 'on' : ''}" data-level="${n}" data-scan aria-pressed="${p.level === n}">
        <svg width="78" height="78" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="29" fill="${fill}" stroke="#1B2430" stroke-width="2.5"/>${brow ? `<path d="${brow}" fill="none" stroke="#1B2430" stroke-width="2.5" stroke-linecap="round"/>` : ''}<circle cx="23" cy="27" r="3.2" fill="#1B2430"/><circle cx="41" cy="27" r="3.2" fill="#1B2430"/><path d="${mouth}" fill="none" stroke="#1B2430" stroke-width="3" stroke-linecap="round"/></svg>
        <b>${n}</b><small>${t}</small>
      </button>`).join('')}</div>
  </section>
  <div style="flex:1;min-height:0;display:flex;gap:16px">
    <section class="card" style="flex:1.15 1 0;min-width:0">
      <div class="ch"><h2>Di mana?</h2><span>Where is the pain?</span></div>
      <div style="flex:1;min-height:0;display:flex;gap:18px;align-items:center">
        <svg width="104" height="200" viewBox="0 0 100 200" aria-hidden="true" style="flex:none">
          <g fill="#EAE4D8"><circle cx="50" cy="20" r="15"/><rect x="44" y="33" width="12" height="8"/><rect x="29" y="40" width="42" height="72" rx="14"/><rect x="13" y="44" width="13" height="64" rx="6.5"/><rect x="74" y="44" width="13" height="64" rx="6.5"/><rect x="32" y="114" width="15" height="80" rx="7.5"/><rect x="53" y="114" width="15" height="80" rx="7.5"/></g>
          <circle cx="${dot[0]}" cy="${dot[1]}" r="13" fill="#B42318" opacity=".18"/><circle cx="${dot[0]}" cy="${dot[1]}" r="6.5" fill="#B42318"/>
        </svg>
        <div style="flex:1;min-width:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:48px;gap:10px">
          ${PLACES.map(([k, t]) => `<button type="button" class="chip ${p.place === k ? 'on' : ''}" data-place="${k}" data-scan>${t}</button>`).join('')}
        </div>
      </div>
    </section>
    <section class="card" style="flex:1 1 0;min-width:0">
      <div class="ch"><h2>Rasanya seperti?</h2><span>What does it feel like?</span></div>
      <div style="flex:1;min-height:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:repeat(3,minmax(0,1fr));gap:10px">
        ${KINDS.map(([k, t, e]) => `<button type="button" class="chip ${p.kind === k ? 'on' : ''}" data-kind="${k}" data-scan><span style="font-size:19px;font-weight:800">${t}</span><small>${e}</small></button>`).join('')}
      </div>
    </section>
  </div>
</main>${answers()}`;
}

function viewHuruf() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return `${innerHead('Huruf & Angka', 'Letters & numbers', TEAL, 'Aa', `<button type="button" class="hbtn" data-action="clearText" data-scan>${svg('trash', 24, 2)}Bersihkan</button>`)}
<main class="mn" style="padding-top:18px;gap:14px">
  <div style="height:92px;display:flex;gap:14px;flex:none">
    <output class="out" aria-live="polite" id="out"></output>
    <button type="button" class="hbtn" data-action="bksp" data-scan aria-label="Hapus satu huruf" style="width:112px;height:auto;flex-direction:column;gap:4px;font-size:15px;border-radius:22px">${svg('bksp', 34, 2)}Hapus</button>
    <button type="button" class="primary" data-action="speakText" data-scan style="width:176px;height:auto;justify-content:center;font-size:20px;font-weight:800;border-radius:22px">${svg('speaker', 30, 2)}Ucapkan</button>
  </div>
  <div class="keys">${letters.map((c) => `<button type="button" class="key" data-key="${c}" data-scan>${c}</button>`).join('')}<button type="button" class="key space" data-key=" " data-scan>Spasi</button></div>
  <div class="digits">${'1234567890'.split('').map((c) => `<button type="button" class="key" data-key="${c}" data-scan>${c}</button>`).join('')}</div>
</main>${answers()}`;
}
function updateOut() {
  const o = $('#out'); if (!o) return;
  o.innerHTML = (S.text ? esc(S.text) : '<span class="ph">Ketuk huruf untuk menulis…</span>') + '<span class="caret"></span>';
}

const PENS = [['Hitam', '#1B2430'], ['Merah', '#B42318'], ['Biru', '#1F5FA8'], ['Hijau', '#1F7A4D']];
function viewPapan() {
  return `${innerHead('Papan Tulis', 'Write or draw', GRAY, 'pencil', `<button type="button" class="hbtn" data-action="clearBoard" data-scan>${svg('trash', 24, 2)}Bersihkan</button>`)}
<main class="mn" style="padding-top:18px;flex-direction:row;gap:18px">
  <div class="board"><canvas id="cv" width="1960" height="1124"></canvas><div class="hint" id="hint"><b>Tulis atau gambar di sini</b><small>Write or draw here</small></div></div>
  <div class="tools">
    <span class="lab">Warna</span>
    ${PENS.map(([n, h]) => `<button type="button" class="tool ${S.pen.color === h ? 'on' : ''}" data-color="${h}" aria-label="${n}"><span style="width:34px;height:34px;border-radius:999px;background:${h}"></span></button>`).join('')}
    <span class="lab" style="margin-top:6px">Tebal</span>
    ${[['Tipis', 6], ['Tebal', 14]].map(([n, v]) => `<button type="button" class="tool ${S.pen.size === v ? 'on' : ''}" data-size="${v}" aria-label="${n}"><span style="width:56px;height:${v}px;border-radius:999px;background:#1B2430"></span></button>`).join('')}
  </div>
</main>${answers()}`;
}
function initBoard() {
  const cv = $('#cv'); if (!cv) return;
  const c = cv.getContext('2d'); c.lineCap = 'round'; c.lineJoin = 'round';
  let drawing = false;
  const pos = (e) => { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left) * (cv.width / r.width), (e.clientY - r.top) * (cv.height / r.height)]; };
  cv.addEventListener('pointerdown', (e) => {
    drawing = true; try { cv.setPointerCapture(e.pointerId); } catch (er) {}
    const [x, y] = pos(e); c.strokeStyle = S.pen.color; c.lineWidth = S.pen.size * 2;
    c.beginPath(); c.moveTo(x, y); c.lineTo(x + 0.1, y); c.stroke();
    const h = $('#hint'); if (h) h.style.display = 'none';
  });
  cv.addEventListener('pointermove', (e) => { if (!drawing) return; const [x, y] = pos(e); c.lineTo(x, y); c.stroke(); });
  ['pointerup', 'pointercancel', 'pointerleave'].forEach((t) => cv.addEventListener(t, () => { drawing = false; }));
}

function render() {
  const v = S.screen;
  screen.innerHTML = v === 'home' ? viewHome() : v === 'nyeri' ? viewNyeri() : v === 'huruf' ? viewHuruf() : v === 'papan' ? viewPapan() : viewList(v);
  if (v === 'huruf') updateOut();
  if (v === 'papan') initBoard();
  bindCall();
  bindScanExit();
  $('#trap').classList.toggle('on', S.scanning);
  screen.classList.toggle('scanning', S.scanning);
}
function go(to) { S.screen = to; S.sel = null; S.last = null; render(); }

/* ---------- panggil perawat ---------- */
let holdT = null, loopT = null;
function bindCall() {
  const b = $('#callBtn'); if (!b) return;
  const cancel = () => { clearTimeout(holdT); b.classList.remove('holding'); };
  b.addEventListener('pointerdown', (e) => { e.preventDefault(); ctx(); b.classList.add('holding'); clearTimeout(holdT); holdT = setTimeout(() => { b.classList.remove('holding'); startCall(); }, 1000); });
  ['pointerup', 'pointerleave', 'pointercancel'].forEach((t) => b.addEventListener(t, cancel));
  b.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); startCall(); } });
}
let exitT = null;
function bindScanExit() {
  const b = $('#scanBtn'); if (!b || !S.scanning) return;
  const cancel = () => { clearTimeout(exitT); b.classList.remove('holding'); };
  b.addEventListener('pointerdown', (e) => { e.preventDefault(); b.classList.add('holding'); clearTimeout(exitT); exitT = setTimeout(() => { b.classList.remove('holding'); toggleScan(); }, 1500); });
  ['pointerup', 'pointerleave', 'pointercancel'].forEach((t) => b.addEventListener(t, cancel));
}
function startCall() {
  if (S.calling) return;
  S.calling = true; $('#call').classList.add('on');
  chime(); clearInterval(loopT); loopT = setInterval(chime, 4500);
}
function stopCall() {
  S.calling = false; clearInterval(loopT); stopSound(); token++;
  try { bellEl.pause(); } catch (e) {}
  $('#call').classList.remove('on');
  if (S.scanning) scanRestart(1200);
}

/* ---------- mode pindai ---------- */
let scanT = null, resumeT = null, idx = -1, prev = -1, movedAt = 0;
function scanItems() {
  const all = Array.from(screen.querySelectorAll('[data-scan]'));
  return all.filter((e) => e.dataset.scan !== 'call').concat(all.filter((e) => e.dataset.scan === 'call'));
}
function paint() {
  screen.querySelectorAll('.scan-hi').forEach((e) => e.classList.remove('scan-hi'));
  const it = scanItems(); if (idx >= 0 && it.length) it[idx % it.length].classList.add('scan-hi');
}
function scanStep() {
  if (S.calling || $('#settings').classList.contains('on')) return;
  const n = scanItems().length; if (!n) return;
  prev = idx; idx = (idx + 1) % n; movedAt = Date.now(); paint();
}
function scanRestart(delay) {
  clearInterval(scanT); clearTimeout(resumeT); idx = -1; prev = -1; paint();
  resumeT = setTimeout(() => { if (S.scanning) scanT = setInterval(scanStep, S.scanMs); }, delay || 0);
}
function scanStop() { clearInterval(scanT); clearTimeout(resumeT); idx = -1; paint(); }
function scanChoose() {
  if (S.calling) return;
  const it = scanItems(); if (idx < 0 || !it.length) return;
  let i = idx;
  if (Date.now() - movedAt < 400) { if (prev < 0) return; i = prev; }
  const el = it[i % it.length];
  ctx(); tick();
  clearInterval(scanT); idx = -1; paint();
  if (el.dataset.scan === 'call') startCall(); else el.click();
  if (S.scanning && !S.calling) scanRestart(1500);
}
function toggleScan() {
  S.scanning = !S.scanning;
  render();
  if (S.scanning) scanRestart(S.scanMs); else scanStop();
}
$('#trap').addEventListener('pointerdown', (e) => { e.preventDefault(); scanChoose(); });
document.addEventListener('keydown', (e) => {
  if (!S.scanning || $('#settings').classList.contains('on')) return;
  const keys = ['Enter', ' ', 'Spacebar', 'ArrowRight', 'ArrowDown', 'PageDown', 'AudioVolumeUp', 'MediaPlayPause'];
  if (keys.includes(e.key) || e.keyCode === 13 || e.keyCode === 32) { e.preventDefault(); scanChoose(); }
});

/* ---------- klik ---------- */
app.addEventListener('click', (e) => {
  const b = e.target.closest('button, a'); if (!b) return;
  const d = b.dataset;
  ctx();
  if (d.go) return go(d.go);
  if (d.say) {
    S.last = d.say;
    if (!d.say.startsWith('umum_')) { S.sel = d.say; screen.querySelectorAll('.tile.sel').forEach((x) => x.classList.remove('sel')); b.classList.add('sel'); }
    return say(d.say);
  }
  if (d.level !== undefined) { S.pain.level = +d.level; render(); return say('nyeri_' + d.level); }
  if (d.place) { S.pain.place = d.place; render(); return say('lokasi_' + d.place); }
  if (d.kind) { S.pain.kind = d.kind; render(); return say('jenis_' + d.kind); }
  if (d.key !== undefined) { S.text = (S.text + d.key).slice(0, 40); return updateOut(); }
  if (d.color) { S.pen.color = d.color; screen.querySelectorAll('[data-color]').forEach((x) => x.classList.toggle('on', x === b)); return; }
  if (d.size) { S.pen.size = +d.size; screen.querySelectorAll('[data-size]').forEach((x) => x.classList.toggle('on', x === b)); return; }
  switch (d.action) {
    case 'repeat': if (S.last) say(S.last); break;
    case 'speakPain': say(['nyeri_' + S.pain.level, 'lokasi_' + S.pain.place, 'jenis_' + S.pain.kind]); break;
    case 'bksp': S.text = S.text.slice(0, -1); updateOut(); break;
    case 'clearText': S.text = ''; updateOut(); break;
    case 'speakText': if (S.text.trim()) { token++; stopSound(); tts(S.text.toLowerCase()); } break;
    case 'clearBoard': { const cv = $('#cv'); if (cv) cv.getContext('2d').clearRect(0, 0, cv.width, cv.height); const h = $('#hint'); if (h) h.style.display = ''; break; }
    case 'toggleScan': toggleScan(); break;
    case 'stopCall': stopCall(); break;
    case 'settings': openSettings(); break;
    case 'closeSettings': $('#settings').classList.remove('on'); break;
    case 'testVoice': say('umum_ya'); break;
    case 'testBell': bell(); break;
  }
});

/* ---------- pengaturan ---------- */
const speed = $('#speed'), speedVal = $('#speedVal');
function showSpeed() { speedVal.textContent = (S.scanMs / 1000).toString().replace('.', ',') + ' dtk'; }
function openSettings() {
  speed.value = S.scanMs / 1000; showSpeed();
  const v = pickVoice();
  $('#voiceInfo').textContent = v ? 'Suara bawaan yang dipakai: ' + v.name + '.' : 'Perangkat ini belum punya suara bahasa Indonesia. Unduh di pengaturan Text-to-Speech perangkat supaya suaranya tidak beraksen Inggris.';
  $('#ver').textContent = 'Stella versi ' + VERSION + (navigator.serviceWorker && navigator.serviceWorker.controller ? ' · siap dipakai offline' : ' · mode offline belum aktif');
  $('#settings').classList.add('on');
}
speed.addEventListener('input', () => {
  S.scanMs = Math.round(+speed.value * 1000); store.set('scanMs', S.scanMs); showSpeed();
  if (S.scanning) scanRestart(S.scanMs);
});

/* ---------- layar tetap menyala ---------- */
let lock = null;
async function keepAwake() { try { if ('wakeLock' in navigator && !lock) { lock = await navigator.wakeLock.request('screen'); lock.addEventListener('release', () => { lock = null; }); } } catch (e) {} }
document.addEventListener('pointerdown', () => { ctx(); keepAwake(); }, { passive: true });
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') keepAwake(); });

/* ---------- mode offline ---------- */
if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
  addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
}

render();
})();
