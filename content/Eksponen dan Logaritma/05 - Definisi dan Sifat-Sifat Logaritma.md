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
1. Diketahui nilai dari $^2\log 3 = p$. Tentukan nilai dari $^8\log 12$ dalam bentuk $p$!
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

2. Jika $^5 \log 4 =m$, $^4 \log 3 = n$, nyatakan $^{12}\log 100$ dalam $m$ dan $n$ !
>[!success]- Klik untuk Lihat Jawaban
>
>Diketahui:
>- $^5 \log 4 = m \implies {^4} \log 5 = \frac{1}{m}$
>- $^4 \log 3 =n$
>Selanjutnya gunakan sifat logaritma $^a \log b =\frac{^c \log b}{^c \log a}$ dengan $c=4$ sebagai basis yang sama dari yang dipersyaratkan di awal.
>$$
>\begin{aligned}
>^{12}\log 100 &= \frac{^4 \log 100}{^4 \log 12} \\
>&= \frac{^4 \log 4 + ^4 \log 25}{^4 \log 4 + ^4\log 3} \\ 
>&= \frac{1+2\cdot ^4 \log 5}{1+ 4 \log3} \\
>&= \frac{1+2\frac{1}{m}}{1+n} \\
>^{12}\log 100 &= \frac{m+2}{m(m+n)}
>\end{aligned}
>$$
>Jadi, bentuk $^{12}\log 100$ jika dinyatakan dalam $m$ da$n$ menjadi $\frac{m+2}{m(m+n)}$



---

## Konsep Terkait

- [[Eksponen dan Logaritma/01 - Definisi dan Sifat-Sifat Eksponen]]
- [[Eksponen dan Logaritma/06 - Grafik Fungsi Logaritma]]