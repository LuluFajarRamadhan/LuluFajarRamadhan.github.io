---
title:
---
# Menyelesaikan Sistem Persamaan Linear Dua Variabel (SPLDV) dengan Matriks

Sistem Persamaan Linear Dua Variabel (SPLDV) dapat dikonversi menjadi persamaan matriks terstruktur sehingga nilai variabelnya bisa dicari menggunakan operasi invers.

Bentuk umum SPLDV:
$$
\begin{cases} ax + by = p \\ cx + dy = q \end{cases}
$$
Ubah sistem di atas menjadi bentuk persamaan matriks $A \times X = B$:
$$
\begin{bmatrix} a & b \\ c & d \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} p \\ q \end{bmatrix}
$$
Untuk mencari matriks variabel $X$, kita ==**kalikan kedua ruas dengan invers matriks koefisien ($A^{-1}$) dari arah kiri:**==
$$
X = A^{-1} \times B \implies \begin{bmatrix} x \\ y \end{bmatrix} = \frac{1}{ad - bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix} \begin{bmatrix} p \\ q \end{bmatrix}
$$

---
## Contoh Soal
Tentukan nilai $x$ dan $y$ dari sistem persamaan berikut menggunakan metode matriks:
$$
\begin{cases} 2x + 3y = 8 \\ x + 2y = 5 \end{cases}
$$

> [!success]- Klik untuk Lihat Jawaban
> Ubah SPLDV tersebut menjadi bentuk persamaan matriks $A \times X = B$:
> $$
> \begin{bmatrix} 2 & 3 \\ 1 & 2 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 8 \\ 5 \end{bmatrix}
> $$
> Pindahkan matriks koefisien ke ruas kanan menjadi operasi invers:
> $$
> \begin{aligned} \begin{bmatrix} x \\ y \end{bmatrix} &= \begin{bmatrix} 2 & 3 \\ 1 & 2 \end{bmatrix}^{-1} \begin{bmatrix} 8 \\ 5 \end{bmatrix} \\ &= \frac{1}{(2 \times 2) - (3 \times 1)} \begin{bmatrix} 2 & -3 \\ -1 & 2 \end{bmatrix} \begin{bmatrix} 8 \\ 5 \end{bmatrix} \\ &= \frac{1}{1} \begin{bmatrix} (2 \times 8) + (-3 \times 5) \\ (-1 \times 8) + (2 \times 5) \end{bmatrix} \\ &= \begin{bmatrix} 16 - 15 \\ -8 + 10 \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \end{bmatrix} \end{aligned}
> $$
> Dari kesamaan matriks diperoleh nilai $x = 1$ dan $y = 2$.

---

## Konsep Terkait

- [[Matriks/04 - Operasi Perkalian Skalar dan Perkalian Antarmatriks]]
- [[Matriks/07 - Invers Matriks Ordo 2x2 dan Sifat-Sifat Invers]]
- [[Matriks/09 - Menyelesaikan Sistem Persamaan Linear Tiga Variabel (SPLTV) dengan Metode Cramer]]