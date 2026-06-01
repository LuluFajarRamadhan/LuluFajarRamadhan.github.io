---
title:
---
# Menentukan Rumus Fungsi Kuadrat dari Titik yang Diketahui

Jika pada materi sebelumnya kita menggambar grafik dari sebuah fungsi yang sudah jadi, subbab ini membahas proses kebalikannya (*reverse engineering*). Kita akan menyusun formula $f(x) = ax^2 + bx + c$ berdasarkan karakteristik titik-titik koordinat yang berhasil terekam pada grafik.

## Tiga Rumus Konstruksi Utama
Metode penyusunan fungsi kuadrat ditentukan berdasarkan jenis titik koordinat yang diketahui pada soal:

### Kondisi 1: Diketahui Titik Potong Sumbu $X$ dan Satu Titik Lain
Jika grafik memotong sumbu $X$ pada koordinat $(x_1, 0)$ dan $(x_2, 0)$ serta melewati satu titik bebas $(x, y)$, gunakan formula:
$$
s(x) = a(x - x_1)(x - x_2)
$$

### Kondisi 2: Diketahui Titik Puncak Kurva dan Satu Titik Lain
Jika grafik memiliki koordinat titik balik/puncak ekstrem yang spesifik di $(x_p, y_p)$ serta melewati satu titik bebas $(x, y)$, gunakan formula:
$$
f(x) = a(x - x_p)^2 + y_p
$$

### Kondisi 3: Diketahui Tiga Titik Sembarang pada Kurva
Jika grafik melalui tiga titik koordinat sembarang $(x_1, y_1), (x_2, y_2),$ dan $(x_3, y_3)$, kita wajib membentuk ==**Sistem Persamaan Linear Tiga Variabel (SPLTV)**== dengan mensubstitusikan ketiga titik tersebut ke dalam bentuk umum:
$$
y = ax^2 + bx + c
$$
Lakukan metode eliminasi-substitusi untuk mencari nilai parameter nilai $a, b,$ dan $c$.

---
## Contoh Soal

1. Tentukan rumus fungsi kuadrat yang memotong sumbu $X$ di titik $(-1, 0)$ dan $(3, 0)$, serta melalui titik koordinat $(0, -6)$!

> [!success]- Klik untuk Lihat Jawaban 1
> Gunakan pendekatan Kondisi 1 karena diketahui dua titik potong sumbu $X$, yakni $x_1 = -1$ dan $x_2 = 3$:
> $$
> \begin{aligned}
> y &= a(x - x_1)(x - x_2) \\
> y &= a(x - (-1))(x - 3) \\
> y &= a(x + 1)(x - 3)
> \end{aligned}
> $$
> Cari nilai $a$ dengan mensubstitusikan titik bantu $(0, -6)$ di mana $x = 0$ dan $y = -6$:
> $$
> \begin{aligned}
> -6 &= a(0 + 1)(0 - 3) \\
> -6 &= a(1)(-3) \\
> -6 &= -3a \\
> a &= 2
> \end{aligned}
> $$
> Kembalikan nilai $a = 2$ ke dalam persamaan awal:
> $$y = 2(x + 1)(x - 3) = 2(x^2 - 2x - 3) = 2x^2 - 4x - 6$$
> Jadi, rumus fungsi kuadrat tersebut adalah $f(x) = 2x^2 - 4x - 6$.

2. Sebuah fungsi kuadrat memiliki titik puncak di koordinat $(1, 4)$. Jika grafik fungsi tersebut memotong sumbu $Y$ di titik $(0, 3)$, susunlah formula fungsinya!

> [!success]- Klik untuk Lihat Jawaban 2
> Gunakan pendekatan Kondisi 2 karena diketahui titik puncak $x_p = 1$ dan $y_p = 4$:
> $$
> \begin{aligned}
> y &= a(x - x_p)^2 + y_p \\
> y &= a(x - 1)^2 + 4
> \end{aligned}
> $$
> Cari nilai $a$ dengan memasukkan titik potong sumbu $Y$ yaitu $(0, 3)$ di mana $x = 0$ dan $y = 3$:
> $$
> \begin{aligned}
> 3 &= a(0 - 1)^2 + 4 \\
> 3 &= a(-1)^2 + 4 \\
> 3 &= a + 4 \\
> a &= 3 - 4 = -1
> \end{aligned}
> $$
> Substitusikan nilai $a = -1$ ke persamaan konstruksi:
> $$
> \begin{aligned}
> y &= -1(x - 1)^2 + 4 \\
> y &= -1(x^2 - 2x + 1) + 4 \\
> y &= -x^2 + 2x - 1 + 4 \\
> y &= -x^2 + 2x + 3
> \end{aligned}
> $$
> Jadi, formula fungsi kuadrat yang terbentuk adalah $f(x) = -x^2 + 2x + 3$.

---

## Konsep Terkait

- [[Fungsi Kuadrat/01 - Definisi dan Bentuk Umum Fungsi Kuadrat]]
- [[Fungsi Kuadrat/05 - Langkah-Langkah Menggambar Grafik Fungsi Kuadrat]]