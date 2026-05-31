---
title:
---
# Operasi Perkalian Skalar dan Perkalian Antarmatriks

Operasi perkalian pada matriks dibagi menjadi dua jenis dengan aturan dan karakteristik penyelesaian yang berbeda secara fundamental.

### 1. Perkalian Matriks dengan Skalar (Bilangan Real)
Jika $k$ adalah sebarang bilangan real (skalar) dan $A$ adalah sebuah matriks, maka perkalian $k \times A$ dilakukan dengan ==**mengalikan setiap elemen di dalam matriks $A$ dengan skalar $k$.**==

### 2. Perkalian Antarmatriks (Matriks $\times$ Matriks)
Dua buah matriks $A$ dan $B$ hanya dapat dikalikan ($A \times B$) jika ==**banyaknya kolom matriks pertama ($A$) sama dengan banyaknya baris matriks kedua ($B$).**==
Jika $A_{m \times n}$ dikalikan dengan $B_{n \times p}$, maka akan menghasilkan matriks baru $C$ yang berordo $m \times p$.

Teknik perkaliannya menggunakan aturan ==**"Baris dikali Kolom"**,== yaitu menjumlahkan hasil perkalian elemen-elemen pada baris matriks pertama dengan elemen-elemen pada kolom matriks kedua.
*Penting: Perkalian antarmatriks umumnya **TIDAK berlaku sifat komutatif** ($A \times B \neq B \times A$).*

---
## Contoh Soal
Diketahui matriks $A = \begin{bmatrix} 2 & 3 \\ 1 & 0 \end{bmatrix}$ dan $B = \begin{bmatrix} 4 & -1 \\ 2 & 5 \end{bmatrix}$. Tentukan hasil perkalian matriks $A \times B$!

> [!success]- Klik untuk Lihat Jawaban
> Karena matriks $A$ berordo $2 \times 2$ dan matriks $B$ juga berordo $2 \times 2$, syarat perkalian terpenuhi dan hasilnya akan berordo $2 \times 2$. Mari kita kalikan baris demi kolom:
> $$
> \begin{aligned} A \times B &= \begin{bmatrix} 2 & 3 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} 4 & -1 \\ 2 & 5 \end{bmatrix} \\ &= \begin{bmatrix} (2 \times 4) + (3 \times 2) & (2 \times -1) + (3 \times 5) \\ (1 \times 4) + (0 \times 2) & (1 \times -1) + (0 \times 5) \end{bmatrix} \end{aligned}
> $$
> Sederhanakan hasil perhitungan aritmetikanya:
> $$
> \begin{aligned} A \times B &= \begin{bmatrix} 8 + 6 & -2 + 15 \\ 4 + 0 & -1 + 0 \end{bmatrix} \\ &= \begin{bmatrix} 14 & 13 \\ 4 & -1 \end{bmatrix} \end \end{aligned}
> $$
> Jadi, hasil perkalian antarmatriks $A \times B$ adalah $\begin{bmatrix} 14 & 13 \\ 4 & -1 \end{bmatrix}$.

---

## Konsep Terkait

- [[Matriks/03 - Operasi Penjumlahan dan Pengurangan Matriks]]
- [[Matriks/05 - Determinan Matriks Ordo 2x2 dan 3x3]]