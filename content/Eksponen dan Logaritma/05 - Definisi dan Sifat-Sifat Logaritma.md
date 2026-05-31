---
title:
---
# Definisi dan Sifat-Sifat Logaritma

Logaritma adalah operasi matematika yang merupakan ==**invers (kebalikan) dari operasi eksponen.**== Secara sederhana, logaritma mencari pangkat yang tepat untuk suatu bilangan pokok (basis) agar menghasilkan nilai tertentu. Jika $a^c = b$, maka bentuk logaritmanya adalah:
$$
^a\log b = c
$$
Dengan syarat: bilangan pokok (basis) $a > 0$ dan $a \neq 1$, serta numerus $b > 0$.

Untuk menyederhanakan perhitungan, berikut adalah sifat-sifat utama logaritma yang sering digunakan:
* $^a\log 1 = 0$
* $^a\log a = 1$
* $^a\log (b \times c) = ^a\log b + ^a\log c$
* $^a\log \left(\frac{b}{c}\right) = ^a\log b - ^a\log c$
* $^a\log b^n = n \times ^a\log b$
* $^{a^m}\log b^n = \frac{n}{m} \times ^a\log b$
* $^a\log b = \frac{^c\log b}{^c\log a} = \frac{1}{^b\log a}$
* $^a\log b \times ^b\log c = ^a\log c$
* $a^{^a\log b} = b$

---
## Contoh Soal
Diketahui nilai dari $^2\log 3 = p$. Tentukan nilai dari $^8\log 12$ dalam bentuk $p$!

> [!success]- Klik untuk Lihat Jawaban
> Kita pecah terlebih dahulu numerus 12 menjadi perkalian faktor-faktor prima, lalu ubah basis 8 menjadi bentuk pangkat dari 2:
> $$
> \begin{aligned} ^8\log 12 &= ^{2^3}\log (4 \times 3) \\ &= ^{2^3}\log (2^2 \times 3) \end{aligned}
> $$
> Gunakan sifat penjumlahan dan penarikan pangkat logaritma keluar:
> $$
> \begin{aligned} ^{2^3}\log (2^2 \times 3) &= \frac{1}{3} \times ^2\log (2^2 \times 3) \\ &= \frac{1}{3} \times \left( ^2\log 2^2 + ^2\log 3 \right) \\ &= \frac{1}{3} \times (2 + p) \\ &= \frac{2 + p}{3} \end{aligned}
> $$
> Jadi, nilai dari $^8\log 12$ jika dinyatakan dalam $p$ adalah $\frac{2 + p}{3}$.

---

## Konsep Terkait

- [[Eksponen dan Logaritma/01 - Definisi dan Sifat-Sifat Eksponen]]
- [[Eksponen dan Logaritma/06 - Grafik Fungsi Logaritma]]