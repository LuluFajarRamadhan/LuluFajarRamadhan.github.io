---
title:
---
# Invers Matriks Ordo 2x2 dan Sifat-Sifat Invers

Invers matriks adalah kebalikan dari sebuah matriks persegi. Jika suatu matriks $A$ dikalikan dengan inversnya ($A^{-1}$), maka akan menghasilkan matriks identitas ($A \times A^{-1} = I$).

### 1. Rumus Invers Matriks Ordo $2 \times 2$
Jika $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$ dengan syarat determinan $ad - bc \neq 0$, maka invers dari matriks $A$ diperoleh dengan ==**seperdeterminan dikali dengan adjoin matriksnya**== (tukar posisi $a$ dan $d$, serta kalikan $b$ dan $c$ dengan negatif):
$$
A^{-1} = \frac{1}{ad - bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}
$$

### 2. Sifat-Sifat Invers Matriks
* $(A^{-1})^{-1} = A$
* $(A \times B)^{-1} = B^{-1} \times A^{-1}$ *(Penting: Urutan matriks menjadi terbalik)*
* $(A^T)^{-1} = (A^{-1})^T$

---
## Contoh Soal
Tentukan invers dari matriks $A = \begin{bmatrix} 3 & 5 \\ 1 & 2 \end{bmatrix}$!

> [!success]- Klik untuk Lihat Jawaban
> Langkah pertama, hitung nilai determinan matriks $A$ terlebih dahulu:
> $$\det(A) = (3 \times 2) - (5 \times 1) = 6 - 5 = 1$$
> Selanjutnya masukkan ke dalam rumus invers dengan menyusun adjoinnya:
> $$
> \begin{aligned} A^{-1} &= \frac{1}{1} \begin{bmatrix} 2 & -5 \\ -1 & 3 \end{bmatrix} \\ &= \begin{bmatrix} 2 & -5 \\ -1 & 3 \end{bmatrix} \end{aligned}
> $$
> Jadi, invers dari matriks $A$ adalah $\begin{bmatrix} 2 & -5 \\ -1 & 3 \end{bmatrix}$.

---

## Konsep Terkait

- [[Matriks/05 - Determinan Matriks Ordo 2x2 dan 3x3]]
- [[Matriks/08 - Menyelesaikan Sistem Persamaan Linear Dua Variabel (SPLDV) dengan Matriks]]