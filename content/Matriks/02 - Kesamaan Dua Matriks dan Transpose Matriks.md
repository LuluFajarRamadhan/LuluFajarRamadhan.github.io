---
title:
---
# Kesamaan Dua Matriks dan Transpose Matriks

Dua konsep penting dalam matriks adalah **transpose matriks** dan **kesamaan dua matriks**.

Transpose matriks berkaitan dengan perubahan posisi elemen dari baris menjadi kolom. Kesamaan dua matriks digunakan untuk menentukan apakah dua matriks mempunyai ukuran dan elemen-elemen yang sama.

### 1. Transpose Matriks $(A^T)$

Transpose dari matriks $A$ adalah matriks baru yang diperoleh dengan cara ==**mengubah setiap baris pada matriks $A$ menjadi kolom pada matriks transpose**==.

Transpose matriks $A$ ditulis sebagai:

$$
A^T
$$

Huruf $T$ pada $A^T$ berasal dari kata *transpose*.

Jika matriks $A$ mempunyai ordo $m \times n$, maka matriks transpose $A^T$ mempunyai ordo:

$$
n \times m
$$

Artinya:

- Banyak baris matriks $A$ menjadi banyak kolom matriks $A^T$.
- Banyak kolom matriks $A$ menjadi banyak baris matriks $A^T$.

Sebagai contoh, perhatikan matriks berikut.

$$
A =
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

Baris pertama matriks $A$, yaitu $\begin{bmatrix}a & b\end{bmatrix}$, berubah menjadi kolom pertama matriks $A^T$.

Baris kedua matriks $A$, yaitu $\begin{bmatrix}c & d\end{bmatrix}$, berubah menjadi kolom kedua matriks $A^T$.

Dengan demikian:

$$
A^T =
\begin{bmatrix}
a & c \\
b & d
\end{bmatrix}
$$

Secara umum, jika:

$$
A =
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
$$

maka:

$$
A^T =
\begin{bmatrix}
a_{11} & a_{21} & \cdots & a_{m1} \\
a_{12} & a_{22} & \cdots & a_{m2} \\
\vdots & \vdots & \ddots & \vdots \\
a_{1n} & a_{2n} & \cdots & a_{mn}
\end{bmatrix}
$$

Hubungan antara elemen matriks $A$ dan elemen matriks $A^T$ dapat dituliskan sebagai:

$$
(A^T)_{ij}=a_{ji}
$$

Artinya, elemen pada baris ke-$i$ dan kolom ke-$j$ dalam matriks transpose berasal dari elemen pada baris ke-$j$ dan kolom ke-$i$ dalam matriks awal.

#### Contoh Transpose Matriks Persegi Panjang

Diketahui:

$$
B =
\begin{bmatrix}
2 & -1 & 4 \\
5 & 0 & 7
\end{bmatrix}
$$

Matriks $B$ mempunyai 2 baris dan 3 kolom, sehingga ordonya adalah $2 \times 3$.

Baris-baris matriks $B$ adalah:

- Baris pertama, yaitu $\begin{bmatrix}2 & -1 & 4\end{bmatrix}$.
- Baris kedua, yaitu $\begin{bmatrix}5 & 0 & 7\end{bmatrix}$.

Setelah ditranspose, kedua baris tersebut berubah menjadi kolom:

$$
B^T =
\begin{bmatrix}
2 & 5 \\
-1 & 0 \\
4 & 7
\end{bmatrix}
$$

Matriks $B^T$ mempunyai 3 baris dan 2 kolom, sehingga ordonya adalah $3 \times 2$.

> [!important] Cara Menentukan Transpose
> Untuk menentukan transpose suatu matriks, ubahlah setiap baris menjadi kolom dengan tetap mempertahankan urutan elemennya.

> [!warning] Kesalahan yang Sering Terjadi
> Transpose tidak mengubah nilai atau tanda suatu elemen. Transpose hanya mengubah posisi elemen. Bilangan negatif tetap negatif dan bilangan positif tetap positif.

#### Transpose Matriks Baris

Diketahui matriks baris:

$$
C =
\begin{bmatrix}
3 & -2 & 5
\end{bmatrix}
$$

Transpose dari matriks $C$ adalah:

$$
C^T =
\begin{bmatrix}
3 \\
-2 \\
5
\end{bmatrix}
$$

Matriks yang semula berordo $1 \times 3$ berubah menjadi matriks kolom berordo $3 \times 1$.

#### Transpose Matriks Kolom

Diketahui matriks kolom:

$$
D =
\begin{bmatrix}
4 \\
0 \\
-1
\end{bmatrix}
$$

Transpose dari matriks $D$ adalah:

$$
D^T =
\begin{bmatrix}
4 & 0 & -1
\end{bmatrix}
$$

Matriks yang semula berordo $3 \times 1$ berubah menjadi matriks baris berordo $1 \times 3$.

### 2. Sifat-Sifat Transpose Matriks

Transpose matriks mempunyai beberapa sifat penting.

#### A. Transpose dari Transpose

Jika suatu matriks ditranspose sebanyak dua kali, hasilnya kembali menjadi matriks semula.

$$
(A^T)^T=A
$$

Contoh:

$$
A =
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{bmatrix}
$$

Transpose pertama:

$$
A^T =
\begin{bmatrix}
1 & 4 \\
2 & 5 \\
3 & 6
\end{bmatrix}
$$

Transpose kedua:

$$
(A^T)^T =
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{bmatrix}
=A
$$

#### B. Transpose Penjumlahan Matriks

Jika matriks $A$ dan $B$ mempunyai ordo yang sama, maka:

$$
(A+B)^T=A^T+B^T
$$

#### C. Transpose Pengurangan Matriks

Jika matriks $A$ dan $B$ mempunyai ordo yang sama, maka:

$$
(A-B)^T=A^T-B^T
$$

#### D. Transpose Perkalian dengan Skalar

Jika $k$ merupakan suatu bilangan, maka:

$$
(kA)^T=kA^T
$$

#### E. Transpose Perkalian Dua Matriks

Untuk dua matriks yang dapat dikalikan, berlaku:

$$
(AB)^T=B^TA^T
$$

Perhatikan bahwa urutan perkalian berubah. Matriks $B^T$ ditulis lebih dahulu, kemudian matriks $A^T$.

> [!note]
> Sifat transpose perkalian matriks akan dibahas lebih lanjut setelah mempelajari operasi perkalian matriks.

### 3. Hubungan Transpose dengan Matriks Simetris

Suatu matriks persegi $A$ disebut matriks simetris apabila transpose matriks tersebut sama dengan matriks semula.

$$
A^T=A
$$

Contoh:

$$
A =
\begin{bmatrix}
2 & 3 & -1 \\
3 & 4 & 5 \\
-1 & 5 & 6
\end{bmatrix}
$$

Transpose dari matriks $A$ adalah:

$$
A^T =
\begin{bmatrix}
2 & 3 & -1 \\
3 & 4 & 5 \\
-1 & 5 & 6
\end{bmatrix}
$$

Karena $A^T=A$, matriks $A$ merupakan matriks simetris.

Pada matriks simetris berlaku:

$$
a_{ij}=a_{ji}
$$

### 4. Kesamaan Dua Matriks

Dua matriks dikatakan sama apabila kedua matriks mempunyai ukuran yang sama dan elemen-elemen yang terletak pada posisi yang bersesuaian mempunyai nilai yang sama.

Matriks $A$ dan $B$ dikatakan sama, ditulis:

$$
A=B
$$

jika dan hanya jika memenuhi dua syarat berikut:

1. ==**Matriks $A$ dan matriks $B$ mempunyai ordo yang sama.**==
2. ==**Semua elemen yang seletak atau bersesuaian mempunyai nilai yang sama.**==

Secara matematis, syarat kedua dituliskan sebagai:

$$
a_{ij}=b_{ij}
$$

untuk setiap nilai $i$ dan $j$ yang bersesuaian.

Sebagai contoh:

$$
A =
\begin{bmatrix}
2 & -1 \\
3 & 4
\end{bmatrix}
$$

dan:

$$
B =
\begin{bmatrix}
2 & -1 \\
3 & 4
\end{bmatrix}
$$

Kedua matriks tersebut mempunyai ordo $2 \times 2$ dan seluruh elemen yang seletak mempunyai nilai sama.

Oleh karena itu:

$$
A=B
$$

#### Contoh Matriks yang Tidak Sama karena Elemennya Berbeda

Diketahui:

$$
C =
\begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
$$

dan:

$$
D =
\begin{bmatrix}
1 & 2 \\
4 & 3
\end{bmatrix}
$$

Matriks $C$ dan $D$ mempunyai ordo yang sama, yaitu $2 \times 2$. Namun, terdapat elemen yang seletak tetapi nilainya berbeda.

$$
c_{21}=3
$$

sedangkan:

$$
d_{21}=4
$$

Oleh karena itu:

$$
C \ne D
$$

#### Contoh Matriks yang Tidak Sama karena Ordonya Berbeda

Diketahui:

$$
P =
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{bmatrix}
$$

dan:

$$
Q =
\begin{bmatrix}
1 & 2 \\
3 & 4 \\
5 & 6
\end{bmatrix}
$$

Matriks $P$ berordo $2 \times 3$, sedangkan matriks $Q$ berordo $3 \times 2$.

Walaupun kedua matriks mempunyai elemen-elemen yang sama, posisi dan ordonya berbeda.

Oleh karena itu:

$$
P \ne Q
$$

> [!important] Prinsip Kesamaan Matriks
> Dua matriks tidak dapat dikatakan sama hanya karena memiliki elemen-elemen yang sama. Ordo dan posisi setiap elemen juga harus sama.

### 5. Menentukan Variabel Menggunakan Kesamaan Matriks

Kesamaan dua matriks dapat digunakan untuk menentukan nilai variabel yang belum diketahui.

Perhatikan persamaan berikut:

$$
\begin{bmatrix}
x & 2 \\
3 & y
\end{bmatrix}
=
\begin{bmatrix}
5 & 2 \\
3 & -1
\end{bmatrix}
$$

Karena kedua matriks sama, elemen-elemen yang seletak harus mempunyai nilai yang sama.

Dari elemen baris ke-1 dan kolom ke-1:

$$
x=5
$$

Dari elemen baris ke-2 dan kolom ke-2:

$$
y=-1
$$

Dengan demikian:

$$
x=5
\qquad \text{dan} \qquad
y=-1
$$

Dalam soal yang memuat transpose, tentukan terlebih dahulu transpose matriks yang diminta. Setelah itu, samakan elemen-elemen yang seletak.

---

## Contoh Soal

### Contoh Soal 1

Diketahui matriks:

$$
A =
\begin{bmatrix}
2 & 3 \\
-1 & 4
\end{bmatrix}
$$

Tentukan transpose dari matriks $A$!

> [!success]- Klik untuk Lihat Jawaban
> Transpose diperoleh dengan mengubah setiap baris menjadi kolom.
>
> Baris pertama matriks $A$ adalah:
>
> $$
> \begin{bmatrix}
> 2 & 3
> \end{bmatrix}
> $$
>
> Baris tersebut menjadi kolom pertama pada $A^T$.
>
> Baris kedua matriks $A$ adalah:
>
> $$
> \begin{bmatrix}
> -1 & 4
> \end{bmatrix}
> $$
>
> Baris tersebut menjadi kolom kedua pada $A^T$.
>
> Dengan demikian:
>
> $$
> A^T =
> \begin{bmatrix}
> 2 & -1 \\
> 3 & 4
> \end{bmatrix}
> $$
>
> Jadi, transpose dari matriks $A$ adalah:
>
> $$
> \boxed{
> A^T =
> \begin{bmatrix}
> 2 & -1 \\
> 3 & 4
> \end{bmatrix}
> }
> $$

### Contoh Soal 2

Diketahui matriks:

$$
B =
\begin{bmatrix}
1 & -2 & 4 \\
3 & 0 & 5
\end{bmatrix}
$$

Tentukan ordo matriks $B$ dan $B^T$, kemudian tentukan $B^T$!

> [!success]- Klik untuk Lihat Jawaban
> Matriks $B$ mempunyai 2 baris dan 3 kolom, sehingga:
>
> $$
> \text{Ordo }B=2 \times 3
> $$
>
> Setelah ditranspose, jumlah baris dan kolomnya bertukar. Oleh karena itu:
>
> $$
> \text{Ordo }B^T=3 \times 2
> $$
>
> Ubah setiap baris matriks $B$ menjadi kolom:
>
> $$
> B^T =
> \begin{bmatrix}
> 1 & 3 \\
> -2 & 0 \\
> 4 & 5
> \end{bmatrix}
> $$
>
> Jadi, matriks $B$ berordo $2 \times 3$, sedangkan $B^T$ berordo $3 \times 2$.

### Contoh Soal 3

Diketahui matriks baris:

$$
C =
\begin{bmatrix}
4 & -1 & 0 & 6
\end{bmatrix}
$$

Tentukan transpose dan jenis matriks $C^T$ berdasarkan bentuknya!

> [!success]- Klik untuk Lihat Jawaban
> Matriks $C$ mempunyai 1 baris dan 4 kolom, sehingga merupakan matriks baris berordo $1 \times 4$.
>
> Transpose dari matriks $C$ adalah:
>
> $$
> C^T =
> \begin{bmatrix}
> 4 \\
> -1 \\
> 0 \\
> 6
> \end{bmatrix}
> $$
>
> Matriks $C^T$ mempunyai 4 baris dan 1 kolom.
>
> Jadi, $C^T$ merupakan matriks kolom berordo $4 \times 1$.

### Contoh Soal 4

Diketahui:

$$
P =
\begin{bmatrix}
2 & -1 \\
5 & 3
\end{bmatrix}
$$

dan:

$$
Q =
\begin{bmatrix}
2 & -1 \\
5 & 3
\end{bmatrix}
$$

Apakah matriks $P$ dan $Q$ sama? Jelaskan!

> [!success]- Klik untuk Lihat Jawaban
> Untuk menentukan kesamaan dua matriks, periksa ordo dan elemen-elemen yang seletak.
>
> Matriks $P$ dan $Q$ sama-sama mempunyai ordo:
>
> $$
> 2 \times 2
> $$
>
> Periksa elemen-elemen yang seletak:
>
> $$
> p_{11}=q_{11}=2
> $$
>
> $$
> p_{12}=q_{12}=-1
> $$
>
> $$
> p_{21}=q_{21}=5
> $$
>
> $$
> p_{22}=q_{22}=3
> $$
>
> Karena ordonya sama dan semua elemen yang seletak bernilai sama, maka:
>
> $$
> P=Q
> $$

### Contoh Soal 5

Perhatikan matriks berikut:

$$
R =
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{bmatrix}
$$

dan:

$$
S =
\begin{bmatrix}
1 & 2 \\
3 & 4 \\
5 & 6
\end{bmatrix}
$$

Apakah matriks $R$ dan $S$ sama? Jelaskan!

> [!success]- Klik untuk Lihat Jawaban
> Matriks $R$ mempunyai 2 baris dan 3 kolom, sehingga:
>
> $$
> \text{Ordo }R=2 \times 3
> $$
>
> Matriks $S$ mempunyai 3 baris dan 2 kolom, sehingga:
>
> $$
> \text{Ordo }S=3 \times 2
> $$
>
> Karena ordo kedua matriks berbeda, kedua matriks tidak sama.
>
> $$
> R \ne S
> $$
>
> Kesamaan nilai-nilai elemennya tidak cukup untuk membuat kedua matriks sama. Posisi dan ordo setiap elemen harus sama.

### Contoh Soal 6

Diketahui:

$$
\begin{bmatrix}
x & 4 \\
-2 & y
\end{bmatrix}
=
\begin{bmatrix}
6 & 4 \\
-2 & 3
\end{bmatrix}
$$

Tentukan nilai $x+y$!

> [!success]- Klik untuk Lihat Jawaban
> Berdasarkan kesamaan dua matriks, elemen-elemen yang seletak mempunyai nilai yang sama.
>
> Dari elemen baris ke-1 dan kolom ke-1:
>
> $$
> x=6
> $$
>
> Dari elemen baris ke-2 dan kolom ke-2:
>
> $$
> y=3
> $$
>
> Hitung nilai $x+y$:
>
> $$
> \begin{aligned}
> x+y &= 6+3 \\
> &= 9
> \end{aligned}
> $$
>
> Jadi, nilai $x+y$ adalah:
>
> $$
> \boxed{9}
> $$

### Contoh Soal 7

Diketahui:

$$
\begin{bmatrix}
2x-1 & 5 \\
3 & y+4
\end{bmatrix}
=
\begin{bmatrix}
7 & 5 \\
3 & 10
\end{bmatrix}
$$

Tentukan nilai $x$ dan $y$!

> [!success]- Klik untuk Lihat Jawaban
> Samakan elemen-elemen yang seletak.
>
> Dari elemen baris ke-1 dan kolom ke-1:
>
> $$
> \begin{aligned}
> 2x-1 &= 7 \\
> 2x &= 8 \\
> x &= 4
> \end{aligned}
> $$
>
> Dari elemen baris ke-2 dan kolom ke-2:
>
> $$
> \begin{aligned}
> y+4 &= 10 \\
> y &= 6
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{x=4 \text{ dan } y=6}
> $$

### Contoh Soal 8

Diketahui matriks:

$$
A =
\begin{bmatrix}
2x & 4 \\
1 & 3z
\end{bmatrix}
$$

dan:

$$
B =
\begin{bmatrix}
8 & 1 \\
4 & 6
\end{bmatrix}
$$

Jika $A=B^T$, tentukan nilai $x+z$!

> [!success]- Klik untuk Lihat Jawaban
> Langkah pertama, tentukan transpose dari matriks $B$ dengan mengubah setiap baris menjadi kolom.
>
> $$
> B^T =
> \begin{bmatrix}
> 8 & 4 \\
> 1 & 6
> \end{bmatrix}
> $$
>
> Karena $A=B^T$, diperoleh:
>
> $$
> \begin{bmatrix}
> 2x & 4 \\
> 1 & 3z
> \end{bmatrix}
> =
> \begin{bmatrix}
> 8 & 4 \\
> 1 & 6
> \end{bmatrix}
> $$
>
> Samakan elemen-elemen yang seletak.
>
> **Mencari nilai $x$:**
>
> $$
> \begin{aligned}
> 2x &= 8 \\
> x &= 4
> \end{aligned}
> $$
>
> **Mencari nilai $z$:**
>
> $$
> \begin{aligned}
> 3z &= 6 \\
> z &= 2
> \end{aligned}
> $$
>
> Hitung nilai $x+z$:
>
> $$
> \begin{aligned}
> x+z &= 4+2 \\
> &= 6
> \end{aligned}
> $$
>
> Jadi, nilai $x+z$ adalah:
>
> $$
> \boxed{6}
> $$

### Contoh Soal 9

Diketahui matriks:

$$
P =
\begin{bmatrix}
x+1 & 2y \\
3 & 5
\end{bmatrix}
$$

dan:

$$
Q =
\begin{bmatrix}
7 & 3 \\
8 & 5
\end{bmatrix}
$$

Jika $P=Q^T$, tentukan nilai $x-y$!

> [!success]- Klik untuk Lihat Jawaban
> Tentukan transpose dari matriks $Q$ terlebih dahulu.
>
> $$
> Q^T =
> \begin{bmatrix}
> 7 & 8 \\
> 3 & 5
> \end{bmatrix}
> $$
>
> Karena $P=Q^T$, diperoleh:
>
> $$
> \begin{bmatrix}
> x+1 & 2y \\
> 3 & 5
> \end{bmatrix}
> =
> \begin{bmatrix}
> 7 & 8 \\
> 3 & 5
> \end{bmatrix}
> $$
>
> Samakan elemen baris ke-1 dan kolom ke-1:
>
> $$
> \begin{aligned}
> x+1 &= 7 \\
> x &= 6
> \end{aligned}
> $$
>
> Samakan elemen baris ke-1 dan kolom ke-2:
>
> $$
> \begin{aligned}
> 2y &= 8 \\
> y &= 4
> \end{aligned}
> $$
>
> Hitung nilai $x-y$:
>
> $$
> \begin{aligned}
> x-y &= 6-4 \\
> &= 2
> \end{aligned}
> $$
>
> Jadi, nilai $x-y$ adalah:
>
> $$
> \boxed{2}
> $$

### Contoh Soal 10

Diketahui matriks:

$$
A =
\begin{bmatrix}
2x+y & 3 \\
5 & x-y
\end{bmatrix}
$$

dan:

$$
B =
\begin{bmatrix}
11 & 5 \\
3 & 1
\end{bmatrix}
$$

Jika $A=B^T$, tentukan nilai $x$, $y$, dan $x^2+y^2$!

> [!success]- Klik untuk Lihat Jawaban
> Langkah pertama, tentukan transpose dari matriks $B$.
>
> $$
> B^T =
> \begin{bmatrix}
> 11 & 3 \\
> 5 & 1
> \end{bmatrix}
> $$
>
> Karena $A=B^T$, diperoleh:
>
> $$
> \begin{bmatrix}
> 2x+y & 3 \\
> 5 & x-y
> \end{bmatrix}
> =
> \begin{bmatrix}
> 11 & 3 \\
> 5 & 1
> \end{bmatrix}
> $$
>
> Dari elemen baris ke-1 dan kolom ke-1:
>
> $$
> 2x+y=11
> $$
>
> Dari elemen baris ke-2 dan kolom ke-2:
>
> $$
> x-y=1
> $$
>
> Dari persamaan kedua:
>
> $$
> y=x-1
> $$
>
> Substitusikan $y=x-1$ ke persamaan pertama:
>
> $$
> \begin{aligned}
> 2x+(x-1) &= 11 \\
> 3x-1 &= 11 \\
> 3x &= 12 \\
> x &= 4
> \end{aligned}
> $$
>
> Tentukan nilai $y$:
>
> $$
> \begin{aligned}
> y &= x-1 \\
> y &= 4-1 \\
> y &= 3
> \end{aligned}
> $$
>
> Hitung nilai $x^2+y^2$:
>
> $$
> \begin{aligned}
> x^2+y^2 &= 4^2+3^2 \\
> &= 16+9 \\
> &= 25
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{x=4,\quad y=3,\quad x^2+y^2=25}
> $$

---

## Konsep Terkait

- [[Matriks/01 - Definisi, Ordo, dan Jenis-Jenis Matriks]]
- [[Matriks/03 - Operasi Penjumlahan dan Pengurangan Matriks]]
```