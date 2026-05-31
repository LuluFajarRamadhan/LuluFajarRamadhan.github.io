---
title:
---
# Kesamaan Dua Matriks dan Transpose Matriks

Dua konsep penting dalam analisis struktur matriks adalah mengubah posisi elemen (transpose) dan membandingkan dua buah matriks (kesamaan).

### 1. Transpose Matriks ($A^T$)
Transpose dari matriks $A$ adalah sebuah matriks baru yang diperoleh dengan cara ==**mengubah elemen baris menjadi elemen kolom**==, atau sebaliknya. Jika matriks awal berordo $m \times n$, maka setelah di-transpose ordonya berubah menjadi $n \times m$.
$$
A = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \implies A^T = \begin{bmatrix} a & c \\ b & d \end{bmatrix}
$$

### 2. Kesamaan Dua Matriks
Dua buah matriks dikatakan sama ($A = B$) jika dan hanya jika memenuhi dua syarat mutlak berikut:
1. ==**Kedua matriks memiliki ordo yang sama.**==
2. Semua elemen yang seletak (bersesuaian) memiliki nilai yang sama persis ($a_{ij} = b_{ij}$).

---
## Contoh Soal
Diketahui matriks $A = \begin{bmatrix} 2x & 4 \\ 1 & 3z \end{bmatrix}$ dan $B = \begin{bmatrix} 8 & 1 \\ 4 & 6 \end{bmatrix}$. Jika $A = B^T$, tentukan nilai dari $x + z$!

> [!success]- Klik untuk Lihat Jawaban
> Langkah pertama, cari terlebih dahulu bentuk transpose dari matriks $B$ dengan mengubah baris menjadi kolom:
> $$
> B^T = \begin{bmatrix} 8 & 4 \\ 1 & 6 \end{bmatrix}
> $$
> Berdasarkan syarat kesamaan dua matriks ($A = B^T$), kita samakan elemen-elemen yang seletak:
> $$
> \begin{bmatrix} 2x & 4 \\ 1 & 3z \end{bmatrix} = \begin{bmatrix} 8 & 4 \\ 1 & 6 \end{bmatrix}
> $$
> * **Mencari nilai $x$:**
>   $$2x = 8 \implies x = \frac{8}{2} = 4$$
> * **Mencari nilai $z$:**
>   $$3z = 6 \implies z = \frac{6}{3} = 2$$
> 
> Hitung nilai akhir dari $x + z$:
> $$
> \begin{aligned} x + z &= 4 + 2 \\ &= 6 \end{aligned}
> $$
> Jadi, nilai dari $x + z$ yang memenuhi persamaan tersebut adalah 6.

---

## Konsep Terkait

- [[Matriks/01 - Definisi, Ordo, dan Jenis-Jenis Matriks]]
- [[Matriks/03 - Operasi Penjumlahan dan Pengurangan Matriks]]