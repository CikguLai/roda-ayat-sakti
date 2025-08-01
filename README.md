# Roda Ayat Sakti

Projek ini merupakan permainan web **Roda Ayat Sakti** untuk membantu murid mengenal dan memahami penggunaan beberapa jenis kata (kata adjektif, kata ganti diri, kata hubung dan sebagainya) dalam bentuk kuiz berputar. Pemain menekan butang **Putar Roda** untuk menjawab soalan secara rawak. Skor akan dikira berdasarkan jawapan yang betul.

## Struktur Projek

```
roda_ayat_sakti_game/
├── index.html        # Halaman utama permainan
├── style.css         # Gaya tersuai tambahan (di samping TailwindCSS)
├── script.js         # Logik permainan (JavaScript)
├── README.md         # Fail dokumentasi ini
└── audio/
    └── background.mp3 # Muzik latar (fail audio yang dimuat naik)
```

## Cara Menjalankan Permainan

1. Pastikan kesemua fail di atas berada dalam direktori yang sama (kecuali fail audio di dalam folder `audio`).
2. Buka `index.html` menggunakan pelayar web moden seperti Chrome atau Firefox.
3. Klik pada **Putar Roda** untuk memulakan permainan. Soalan akan dipaparkan selepas roda berputar.
4. Tekan butang jawapan yang anda rasa betul. Skor anda akan bertambah jika jawapan betul, dan penjelasan akan diberikan.
5. Muzik latar akan dimainkan secara automatik apabila permainan bermula. Anda boleh menekan **▶️ Main** untuk memulakan muzik secara manual atau **⏸️ Jeda** untuk menghentikannya. Gelangsar kelantangan membolehkan anda melaras kelantangan muzik.
6. **Henti Masa** menghentikan pemasa tanpa menjejaskan permainan. **Reset Masa** mengosongkan pemasa semula ke 0.
7. Setelah semua soalan dijawab, keputusan akhir (skor dan masa) akan dipaparkan bersama pilihan untuk memulakan semula permainan.

## Menambah atau Mengubah Soalan

Senarai soalan disimpan di dalam `script.js` dalam pemboleh ubah `semuaSoalan`. Setiap objek mempunyai tiga sifat utama:

- `soalan`: Teks soalan.
- `pilihan`: Array pilihan jawapan yang dipaparkan kepada pemain.
- `jawapan`: Jawapan betul.
- `penjelasan`: Penjelasan ringkas mengenai jawapan.

Anda boleh menambah, mengubah atau membuang soalan mengikut keperluan. Jika anda ingin menambah lebih banyak soalan, pastikan struktur objek adalah sama.

## Kredit Muzik

Muzik latar `background.mp3` dimuatkan daripada fail audio yang anda berikan (contoh: *Sakura‑Girl‑Daisy*). Pastikan anda mempunyai hak untuk menggunakan fail tersebut. Jika ingin menukar muzik, gantikan fail di dalam `audio/background.mp3` dengan fail MP3 baharu.