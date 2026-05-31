---
title:
---
# Determinan Matriks Ordo 2x2 dan 3x3

Determinan adalah sebuah nilai skalar yang dihasilkan dari perhitungan elemen-elemen suatu matriks persegi. Nilai determinan dari matriks $A$ biasa disimbolkan dengan $\det(A)$ atau $|A|$. Jika determinan suatu matriks bernilai nol, matriks tersebut tidak memiliki invers.

### 1. Determinan Matriks Ordo $2 \times 2$
Untuk matriks berordo $2 \times 2$, determinan dihitung dengan ==**selisih hasil kali elemen diagonal utama dengan diagonal sekunder.**==
Jika $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$, maka:
$$
|A| = ad - bc
$$

### 2. Determinan Matriks Ordo $3 \times 3$ (Metode Sarrus)
Untuk matriks berordo $3 \times 3$, metode yang paling mudah digunakan adalah **Metode Sarrus**, yaitu dengan ==**menyalin dua kolom pertama ke sebelah kanan matriks**==, lalu menjumlahkan hasil kali elemen searah diagonal utama dan menguranginya dengan hasil kali elemen searah diagonal sekunder.
Jika $B = \begin{bmatrix} a & b & c \\ d & e & f \\ g & h & i \end{bmatrix}$, maka penjabarannya:
$$
\begin{aligned}
|B| &= \begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} \begin{matrix} a & b \\ d & e \\ g & h \end{matrix} \\
|B| &= (aei + bfg + cdh) - (ceg + afh + bdi)
\end{aligned}
$$

---
## Contoh Soal
Tentukan nilai determinan dari matriks $P = \begin{bmatrix} 4 & 3 \\ 2 & 5 \end{bmatrix}$!

> [!success]- Klik untuk Lihat Jawaban
> Gunakan rumus determinan untuk matriks ordo $2 \times 2$:
> $$
> \begin{aligned} |P| &= (4 \times 5) - (3 \times 2) \\ &= 20 - 6 \\ &= 14 \end{aligned}
> $$
> Jadi, nilai determinan dari matriks $P$ adalah 14.

---

## Konsep Terkait

- [[Matriks/04 - Operasi Perkalian Skalar dan Perkalian Antarmatriks]]
- [[Matriks/06 - Matriks Singular dan Sifat-Sifat Determinan]]