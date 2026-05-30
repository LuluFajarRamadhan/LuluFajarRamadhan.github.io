---
title: Deret Geometri
---

# Deret Geometri

**Deret Geometri** adalah penjumlahan dari suku-suku yang berurutan pada barisan geometri. Jika kita ingin mencari akumulasi total dari nilai-nilai yang tumbuh atau menyusut secara multiplikatif (berkelipatan), kita menggunakan formula deret geometri ($S_n$).

Bentuk umum deret geometri dituliskan sebagai:
$$S_n = a + ar + ar^2 + ar^3 + \dots + ar^{n-1}$$

---

## 1. Formulasi Rumus Jumlah $n$ Suku Pertama ($S_n$)

Untuk menghindari bias nilai negatif saat perhitungan aljabar, rumus $S_n$ dibagi menjadi dua kondisi berdasarkan nilai rasionya:

### Kondisi 1: Jika Rasio Lebih Besar dari Satu ($r > 1$)
Gunakan rumus ini untuk kasus pertumbuhan agar penyebut bernilai positif:
$$\bbox[10px,border:2px solid #2cc7b0]{S_n = \frac{a(r^n - 1)}{r - 1}}$$

### Kondisi 2: Jika Rasio Kurang dari Satu ($0 < r < 1$)
Gunakan rumus ini untuk kasus penyusutan/peluruhan agar penyebut bernilai positif:
$$\bbox[10px,border:2px solid #2cc7b0]{S_n = \frac{a(1 - r^n)}{1 - r}}$$

**Keterangan:**
- $S_n$ = Jumlah $n$ suku pertama
- $a$ = Suku pertama
- $r$ = Rasio
- $n$ = Banyaknya suku

---

## Contoh Soal

Seorang investor menanamkan modal di sebuah perusahaan teknologi pada awal tahun pertama sebesar Rp5.000.000. Keuntungan investasi tersebut digulung kembali (*compound*) sehingga nilai investasi meningkat menjadi 2 kali lipat dari nilai tahun sebelumnya di setiap akhir tahun. Berapakah total akumulasi nilai investasi tersebut setelah berjalan selama 5 tahun?

>[!Success]- Klik untuk Lihat Jawaban
> **Penyelesaian:**
> Berdasarkan informasi pada soal:
> - Nilai awal modal ($a$) = $5.000.000$
> - Faktor pengali pertumbuhan ($r$) = $2$ (karena $r > 1$, kita gunakan Kondisi 1)
> - Jangka waktu tahun ($n$) = $5$
> 
> Terapkan rumus deret geometri untuk $r > 1$:
> $$S_n = \frac{a(r^n - 1)}{r - 1}$$
> $$S_5 = \frac{5.000.000 \cdot (2^5 - 1)}{2 - 1}$$
> $$S_5 = \frac{5.000.000 \cdot (32 - 1)}{1}$$
> $$S_5 = 5.000.000 \cdot 31 = 155.000.000$$
> 
> Jadi, total akumulasi nilai investasi tersebut setelah berjalan selama 5 tahun adalah **Rp155.000.000**.

---

## Konsep Terkait
* [[Barisan dan Deret/05 - Barisan Geometri|05 - Barisan Geometri]]
* [[Barisan dan Deret/07 - Sisipan dan Suku Tengah Geometri]]
* [[Barisan dan Deret/08 - Deret Geometri Tak Hingga]]