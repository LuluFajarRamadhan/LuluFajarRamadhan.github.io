---
title:
---
# Aplikasi Kombinasi dalam Pemilihan Objek dan Soal Cerita

Di dalam soal cerita matematika tingkat lanjut, permasalahan kaidah pencacahan sering kali dikombinasikan dengan aturan pencacahan dasar (seperti aturan perkalian). Kondisi ini umumnya terjadi ketika kita diminta untuk ==**memilih beberapa objek dari kelompok atau kategori yang berbeda secara sekaligus.**==

Prinsip utamanya adalah menyelesaikan perhitungan kombinasi untuk masing-masing kategori secara terpisah, lalu mengalikan hasil-hasil kombinasi tersebut untuk mendapatkan total kemungkinan secara keseluruhan.

---
## Contoh Soal
Di dalam sebuah kotak terdapat 5 bola merah dan 4 bola hijau. Jika seorang anak diperintahkan untuk mengambil 3 bola sekaligus dari dalam kotak tersebut, tentukan banyaknya variasi pengambilan jika bola yang terambil harus terdiri dari **2 bola merah dan 1 bola hijau**!

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Identifikasi Masalah.**
> Karena bola diambil secara sekaligus, urutan warna bola yang keluar tidak diperhatikan (mengambil Merah1-Merah2 sama dengan Merah2-Merah1). Kita selesaikan kombinasi tiap warna secara terpisah, lalu kalikan hasilnya menggunakan aturan perkalian berkelanjutan.
> 
> **Langkah 2: Menghitung Kombinasi Bola Merah.**
> Memilih 2 bola merah dari total 5 bola merah yang tersedia ($_5C_2$):
> $$
> _5C_2 = \frac{5!}{2! \times (5 - 2)!} = \frac{5!}{2! \times 3!} = \frac{5 \times 4 \times \cancel{3!}}{(2 \times 1) \times \cancel{3!}} = \frac{20}{2} = 10 \text{ cara}
> $$
> 
> **Langkah 3: Menghitung Kombinasi Bola Hijau.**
> Memilih 1 bola hijau dari total 4 bola hijau yang tersedia ($_4C_1$):
> $$
> _4C_1 = \frac{4!}{1! \times (4 - 1)!} = \frac{4!}{1! \times 3!} = \frac{4 \times \cancel{3!}}{1 \times \cancel{3!}} = 4 \text{ cara}
> $$
> 
> **Langkah 4: Menghitung Total Variasi (Aturan Perkalian).**
> Gabungkan kedua hasil kombinasi di atas:
> $$
> \begin{aligned}
> \text{Total Cara} &= _5C_2 \times _4C_1 \\
> &= 10 \times 4 \\
> &= 40
> \end{aligned}
> $$
> Jadi, banyaknya variasi pengambilan bola yang memenuhi syarat tersebut adalah **40 cara**.

---

## Konsep Terkait

- [[Kombinatorika dan Teori Peluang Lanjutan/01 - Aturan Penjumlahan dan Aturan Perkalian]]
- [[Kombinatorika dan Teori Peluang Lanjutan/06 - Konsep Kombinasi dan Perbedaannya dengan Permutasi]]
- [[Kombinatorika dan Teori Peluang Lanjutan/08 - Pengantar Ekspansi Binomial Newton]]