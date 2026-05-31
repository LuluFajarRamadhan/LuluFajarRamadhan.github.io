---
title:
---
# Operasi Penjumlahan dan Pengurangan Matriks

Operasi penjumlahan dan pengurangan dua matriks atau lebih hanya dapat dilakukan jika matriks-matriks tersebut ==**memiliki ordo yang sama.**== Jika ordonya berbeda, maka operasi aljabar tersebut tidak dapat didefinisikan.

Teknik operasinya sangat sederhana, yaitu dengan cara ==**menjumlahkan atau mengurangi elemen-elemen yang seletak (bersesuaian)**== pada matriks-matriks tersebut.

Secara matematis, jika $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$ dan $B = \begin{bmatrix} e & f \\ g & h \end{bmatrix}$, maka:
$$
A + B = \begin{bmatrix} a+e & b+f \\ c+g & d+h \end{bmatrix} \quad \text{dan} \quad A - B = \begin{bmatrix} a-e & b-f \\ c-g & d-h \end{bmatrix}
$$

### Sifat-Sifat Operasi Penjumlahan Matriks:
* **Komutatif:** $A + B = B + A$
* **Asosiatif:** $(A + B) + C = A + (B + C)$
* **Elemen Identitas:** $A + O = O + A = A$ (di mana $O$ adalah matriks nol)

---
## Contoh Soal
Diketahui matriks $P = \begin{bmatrix} 5 & -2 \\ 3 & 4 \end{bmatrix}$ dan $Q = \begin{bmatrix} -1 & 6 \\ 2 & -3 \end{bmatrix}$. Hitunglah matriks hasil dari $2P - Q$!

> [!success]- Klik untuk Lihat Jawaban
> Kita kalikan terlebih dahulu semua elemen di dalam matriks $P$ dengan skalar 2, baru kemudian dikurangi dengan elemen seletak dari matriks $Q$:
> $$
> \begin{aligned} 2P - Q &= 2\begin{bmatrix} 5 & -2 \\ 3 & 4 \end{bmatrix} - \begin{bmatrix} -1 & 6 \\ 2 & -3 \end{bmatrix} \\ &= \begin{bmatrix} 10 & -4 \\ 6 & 8 \end{bmatrix} - \begin{bmatrix} -1 & 6 \\ 2 & -3 \end{bmatrix} \end{aligned}
> $$
> Lakukan operasi pengurangan antar elemen seletak:
> $$
> \begin{aligned} 2P - Q &= \begin{bmatrix} 10 - (-1) & -4 - 6 \\ 6 - 2 & 8 - (-3) \end{bmatrix} \\ &= \begin{bmatrix} 11 & -10 \\ 4 & 11 \end{bmatrix} \end{aligned}
> $$
> Jadi, hasil dari operasi matriks $2P - Q$ adalah $\begin{bmatrix} 11 & -10 \\ 4 & 11 \end{bmatrix}$.

---

## Konsep Terkait

- [[Matriks/02 - Kesamaan Dua Matriks dan Transpose Matriks]]
- [[Matriks/04 - Operasi Perkalian Skalar dan Perkalian Antarmatriks]]