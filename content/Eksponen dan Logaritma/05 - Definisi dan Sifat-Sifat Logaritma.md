---
title:
---
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
## Latihan Soal

1. Tentukan nilai dari $^2\log 32$!
> [!success]- Klik untuk Lihat Jawaban
> Gunakan definisi logaritma dengan mengubah 32 menjadi bilangan berpangkat dengan basis 2.
> $$
> \begin{aligned} ^2\log 32 &= ^2\log (2^5) \\ &= 5 \times ^2\log 2 \\ &= 5 \times 1 \\ &= 5 \end{aligned}
> $$
> Jadi, nilai dari $^2\log 32$ adalah 5.

2. Tentukan nilai dari $^3\log 18 - ^3\log 2$!
> [!success]- Klik untuk Lihat Jawaban
> Gunakan sifat pengurangan logaritma: $^a\log b - ^a\log c = ^a\log \left(\frac{b}{c}\right)$.
> $$
> \begin{aligned} ^3\log 18 - ^3\log 2 &= ^3\log \left(\frac{18}{2}\right) \\ &= ^3\log 9 \\ &= ^3\log (3^2) \\ &= 2 \times ^3\log 3 \\ &= 2 \end{aligned}
> $$
> Jadi, nilai dari $^3\log 18 - ^3\log 2$ adalah 2.

3. Tentukan nilai dari $^2\log 5 \times ^5\log 64$!
> [!success]- Klik untuk Lihat Jawaban
> Gunakan sifat perkalian logaritma berantai: $^a\log b \times ^b\log c = ^a\log c$.
> $$
> \begin{aligned} ^2\log 5 \times ^5\log 64 &= ^2\log 64 \\ &= ^2\log (2^6) \\ &= 6 \end{aligned}
> $$
> Jadi, nilai dari $^2\log 5 \times ^5\log 64$ adalah 6.

4. Tentukan nilai dari $^{27}\log 9$!
> [!success]- Klik untuk Lihat Jawaban
> Ubah basis dan numerus menjadi bentuk pangkat dari bilangan pokok 3, lalu gunakan sifat $^{a^m}\log b^n = \frac{n}{m} \times ^a\log b$.
> $$
> \begin{aligned} ^{27}\log 9 &= ^{3^3}\log (3^2) \\ &= \frac{2}{3} \times ^3\log 3 \\ &= \frac{2}{3} \times 1 \\ &= \frac{2}{3} \end{aligned}
> $$
> Jadi, nilai dari $^{27}\log 9$ adalah $\frac{2}{3}$.

5. Tentukan nilai dari $^2\log 48 + ^5\log 50 - ^2\log 3 - ^5\log 2$!
> [!success]- Klik untuk Lihat Jawaban
> Kelompokkan logaritma dengan basis yang sama terlebih dahulu, lalu gunakan sifat penjumlahan dan pengurangan.
> $$
> \begin{aligned} & (^2\log 48 - ^2\log 3) + (^5\log 50 - ^5\log 2) \\ &= ^2\log \left(\frac{48}{3}\right) + ^5\log \left(\frac{50}{2}\right) \\ &= ^2\log 16 + ^5\log 25 \\ &= ^2\log (2^4) + ^5\log (5^2) \\ &= 4 + 2 \\ &= 6 \end{aligned}
> $$
> Jadi, nilai akhir dari operasi tersebut adalah 6.

6. Diketahui nilai dari $^2\log 3 = p$. Tentukan nilai dari $^8\log 12$ dalam bentuk $p$!
> [!success]- Klik untuk Lihat Jawaban
> Kita pecah terlebih dahulu numerus 12 menjadi perkalian faktor-faktor prima, lalu ubah basis 8 menjadi bentuk pangkat dari 2[cite: 1]:
> $$
> \begin{aligned} ^8\log 12 &= ^{2^3}\log (4 \times 3) \\ &= ^{2^3}\log (2^2 \times 3) \end{aligned}
> $$
> Gunakan sifat penjumlahan dan penarikan pangkat logaritma keluar[cite: 1]:
> $$
> \begin{aligned} ^{2^3}\log (2^2 \times 3) &= \frac{1}{3} \times ^2\log (2^2 \times 3) \\ &= \frac{1}{3} \times \left( ^2\log 2^2 + ^2\log 3 \right) \\ &= \frac{1}{3} \times (2 + p) \\ &= \frac{2 + p}{3} \end{aligned}
> $$
> Jadi, nilai dari $^8\log 12$ jika dinyatakan dalam $p$ adalah $\frac{2 + p}{3}$[cite: 1].

7. Jika $^3\log 5 = a$, tentukan nilai dari $^{25}\log 27$ dalam bentuk $a$!
> [!success]- Klik untuk Lihat Jawaban
> Ubah bentuk logaritma ke dalam basis dan numerus dengan bilangan prima (3 dan 5).
> $$
> \begin{aligned} ^{25}\log 27 &= ^{5^2}\log (3^3) \\ &= \frac{3}{2} \times ^5\log 3 \end{aligned}
> $$
> Diketahui $^3\log 5 = a$, maka menurut sifat kebalikan logaritma, $^5\log 3 = \frac{1}{a}$.
> $$
> \begin{aligned} \frac{3}{2} \times ^5\log 3 &= \frac{3}{2} \times \frac{1}{a} \\ &= \frac{3}{2a} \end{aligned}
> $$
> Jadi, nilai $^{25}\log 27$ adalah $\frac{3}{2a}$.

8. Jika $^5 \log 4 =m$, $^4 \log 3 = n$, nyatakan $^{12}\log 100$ dalam $m$ dan $n$ !
> [!success]- Klik untuk Lihat Jawaban
> Diketahui:
> - $^5 \log 4 = m \implies {^4} \log 5 = \frac{1}{m}$
> - $^4 \log 3 =n$
> Selanjutnya gunakan sifat logaritma $^a \log b =\frac{^c \log b}{^c \log a}$ dengan $c=4$ sebagai basis yang sama dari yang dipersyaratkan di awal.
> $$
> \begin{aligned}
> ^{12}\log 100 &= \frac{^4 \log 100}{^4 \log 12} \\
> &= \frac{^4 \log 4 + ^4 \log 25}{^4 \log 4 + ^4\log 3} \\ 
> &= \frac{1+2\cdot ^4 \log 5}{1+ ^4 \log3} \\
> &= \frac{1+2\left(\frac{1}{m}\right)}{1+n} \\
> &= \frac{\frac{m+2}{m}}{1+n} \\
> ^{12}\log 100 &= \frac{m+2}{m(1+n)}
> \end{aligned}
> $$
> Jadi, bentuk $^{12}\log 100$ jika dinyatakan dalam $m$ dan $n$ menjadi $\frac{m+2}{m(1+n)}$.

9. Tentukan nilai $x$ yang memenuhi persamaan $^2\log(x+2) + ^2\log(x-2) = 5$!
> [!success]- Klik untuk Lihat Jawaban
> Gunakan sifat penjumlahan logaritma untuk menggabungkan numerus. Pastikan syarat numerus $x+2>0$ dan $x-2>0$ (sehingga syarat mutlaknya adalah $x>2$).
> $$
> \begin{aligned} ^2\log(x+2) + ^2\log(x-2) &= 5 \\ ^2\log ((x+2)(x-2)) &= 5 \\ ^2\log (x^2 - 4) &= 5 \end{aligned}
> $$
> Ubah bentuk logaritma ke bentuk eksponen:
> $$
> \begin{aligned} x^2 - 4 &= 2^5 \\ x^2 - 4 &= 32 \\ x^2 &= 36 \\ x &= \pm 6 \end{aligned}
> $$
> Karena syarat numerus adalah $x > 2$, maka $x = -6$ tidak memenuhi kriteria.
> Jadi, nilai $x$ yang memenuhi adalah $x = 6$.

10. Tentukan himpunan penyelesaian dari persamaan $(^3\log x)^2 - 3 \cdot (^3\log x) + 2 = 0$!
> [!success]- Klik untuk Lihat Jawaban
> Ini adalah bentuk persamaan logaritma yang dapat diselesaikan dengan pemisalan ke persamaan kuadrat. 
> Misalkan $y = ^3\log x$, maka persamaannya berubah menjadi:
> $$
> \begin{aligned} y^2 - 3y + 2 &= 0 \\ (y - 1)(y - 2) &= 0 \end{aligned}
> $$
> Maka, kita dapatkan dua kemungkinan nilai untuk $y$:
> $y = 1 \quad \text{atau} \quad y = 2$
> Kembalikan nilai $y$ ke dalam bentuk logaritma semula:
> - Untuk $y = 1 \implies ^3\log x = 1 \implies x = 3^1 = 3$
> - Untuk $y = 2 \implies ^3\log x = 2 \implies x = 3^2 = 9$
> Jadi, himpunan penyelesaiannya adalah $\{3, 9\}$.

---

## Konsep Terkait

- [[Eksponen dan Logaritma/01 - Definisi dan Sifat-Sifat Eksponen]][cite: 1]
- [[Eksponen dan Logaritma/06 - Grafik Fungsi Logaritma]][cite: 1]