---
title:
---
# Operasi Perkalian Skalar dan Perkalian Antarmatriks

Operasi perkalian pada matriks dibagi menjadi dua jenis, yaitu:

1. Perkalian matriks dengan skalar.
2. Perkalian antara dua matriks.

Kedua operasi tersebut mempunyai aturan yang berbeda.

Pada perkalian skalar, setiap elemen matriks dikalikan dengan bilangan yang sama. Pada perkalian antarmatriks, perhitungan dilakukan menggunakan aturan ==**baris dikalikan kolom**==.

### 1. Perkalian Matriks dengan Skalar

Skalar adalah suatu bilangan real yang digunakan untuk mengalikan sebuah matriks.

Jika $k$ adalah suatu skalar dan $A$ adalah sebuah matriks, maka perkalian $kA$ dilakukan dengan cara ==**mengalikan setiap elemen matriks $A$ dengan skalar $k$**==.

Misalkan:

$$
A=
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

Maka:

$$
kA=
k
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
=
\begin{bmatrix}
ka & kb \\
kc & kd
\end{bmatrix}
$$

Secara umum, jika elemen matriks $A$ adalah $a_{ij}$, maka elemen matriks $kA$ adalah:

$$
(kA)_{ij}=ka_{ij}
$$

Perkalian dengan skalar tidak mengubah ordo matriks.

Jika matriks $A$ berordo $m \times n$, maka matriks $kA$ juga berordo:

$$
m \times n
$$

#### Contoh Perkalian Skalar

Diketahui:

$$
A=
\begin{bmatrix}
2 & -1 \\
3 & 4
\end{bmatrix}
$$

Tentukan $3A$.

$$
\begin{aligned}
3A
&=
3
\begin{bmatrix}
2 & -1 \\
3 & 4
\end{bmatrix}
\\
&=
\begin{bmatrix}
3(2) & 3(-1) \\
3(3) & 3(4)
\end{bmatrix}
\\
&=
\begin{bmatrix}
6 & -3 \\
9 & 12
\end{bmatrix}
\end{aligned}
$$

Jadi:

$$
3A=
\begin{bmatrix}
6 & -3 \\
9 & 12
\end{bmatrix}
$$

#### Perkalian dengan Skalar Negatif

Jika suatu matriks dikalikan dengan skalar negatif, nilai setiap elemen dikalikan dengan bilangan tersebut sehingga tandanya dapat berubah.

Contoh:

$$
B=
\begin{bmatrix}
1 & -2 \\
-3 & 4
\end{bmatrix}
$$

Maka:

$$
\begin{aligned}
-2B
&=
-2
\begin{bmatrix}
1 & -2 \\
-3 & 4
\end{bmatrix}
\\
&=
\begin{bmatrix}
-2 & 4 \\
6 & -8
\end{bmatrix}
\end{aligned}
$$

### 2. Sifat-Sifat Perkalian Skalar

Jika $A$ dan $B$ adalah matriks yang mempunyai ordo sama serta $k$ dan $l$ merupakan skalar, berlaku sifat-sifat berikut.

#### A. Sifat Distributif terhadap Penjumlahan Matriks

$$
k(A+B)=kA+kB
$$

#### B. Sifat Distributif terhadap Pengurangan Matriks

$$
k(A-B)=kA-kB
$$

#### C. Sifat Distributif terhadap Penjumlahan Skalar

$$
(k+l)A=kA+lA
$$

#### D. Sifat Asosiatif Perkalian Skalar

$$
k(lA)=(kl)A
$$

#### E. Perkalian dengan Skalar 1

$$
1A=A
$$

#### F. Perkalian dengan Skalar 0

$$
0A=O
$$

dengan $O$ merupakan matriks nol yang ordonya sama dengan matriks $A$.

#### G. Perkalian dengan Skalar $-1$

$$
(-1)A=-A
$$

### 3. Perkalian Antarmatriks

Perkalian antarmatriks berbeda dari penjumlahan dan pengurangan matriks.

Dua matriks tidak harus mempunyai ordo yang sama agar dapat dikalikan. Namun, terdapat syarat khusus yang harus dipenuhi.

Dua matriks $A$ dan $B$ dapat dikalikan dalam urutan $AB$ jika ==**banyak kolom matriks $A$ sama dengan banyak baris matriks $B$**==.

Jika:

$$
A_{m \times n}
$$

dan:

$$
B_{n \times p}
$$

maka perkalian $AB$ dapat dilakukan dan menghasilkan matriks $C$ berordo:

$$
C_{m \times p}
$$

Hubungan ordonya dapat diringkas sebagai berikut:

$$
A_{m \times n}B_{n \times p}=C_{m \times p}
$$

Dua ukuran yang berada di tengah harus sama.

$$
\boxed{
(m \times \cancel{n})(\cancel{n} \times p)=m \times p
}
$$

Ukuran yang berada di luar menentukan ordo matriks hasil.

> [!important] Syarat Perkalian Matriks
> Untuk menghitung $AB$, jumlah kolom matriks $A$ harus sama dengan jumlah baris matriks $B$.
>
> Syarat perkalian harus diperiksa sesuai urutannya. Bisa saja $AB$ dapat dilakukan, tetapi $BA$ tidak dapat dilakukan.

#### Contoh Menentukan Kemungkinan Perkalian

Jika matriks $A$ berordo $2 \times 3$ dan matriks $B$ berordo $3 \times 4$, maka:

$$
A_{2 \times 3}B_{3 \times 4}
$$

dapat dikalikan karena angka tengahnya sama, yaitu 3.

Hasil perkalian $AB$ berordo:

$$
2 \times 4
$$

Namun, untuk perkalian $BA$:

$$
B_{3 \times 4}A_{2 \times 3}
$$

angka tengahnya adalah 4 dan 2. Karena tidak sama, perkalian $BA$ tidak dapat dilakukan.

### 4. Aturan Baris Dikali Kolom

Perkalian antarmatriks dilakukan menggunakan aturan ==**baris matriks pertama dikalikan dengan kolom matriks kedua**==.

Misalkan:

$$
A=
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

dan:

$$
B=
\begin{bmatrix}
e & f \\
g & h
\end{bmatrix}
$$

Maka:

$$
AB=
\begin{bmatrix}
ae+bg & af+bh \\
ce+dg & cf+dh
\end{bmatrix}
$$

Setiap elemen pada matriks hasil diperoleh melalui proses berikut.

#### Elemen Baris ke-1 Kolom ke-1

Baris pertama matriks $A$ dikalikan dengan kolom pertama matriks $B$.

$$
(AB)_{11}=ae+bg
$$

#### Elemen Baris ke-1 Kolom ke-2

Baris pertama matriks $A$ dikalikan dengan kolom kedua matriks $B$.

$$
(AB)_{12}=af+bh
$$

#### Elemen Baris ke-2 Kolom ke-1

Baris kedua matriks $A$ dikalikan dengan kolom pertama matriks $B$.

$$
(AB)_{21}=ce+dg
$$

#### Elemen Baris ke-2 Kolom ke-2

Baris kedua matriks $A$ dikalikan dengan kolom kedua matriks $B$.

$$
(AB)_{22}=cf+dh
$$

Secara umum, elemen baris ke-$i$ dan kolom ke-$j$ pada matriks hasil $AB$ adalah:

$$
(AB)_{ij}
=
\sum_{k=1}^{n}a_{ik}b_{kj}
$$

Artinya, elemen-elemen pada baris ke-$i$ matriks $A$ dikalikan dengan elemen-elemen pada kolom ke-$j$ matriks $B$, kemudian seluruh hasil perkaliannya dijumlahkan.

### 5. Contoh Perkalian Matriks Ordo $2 \times 2$

Diketahui:

$$
A=
\begin{bmatrix}
2 & 3 \\
1 & 0
\end{bmatrix}
$$

dan:

$$
B=
\begin{bmatrix}
4 & -1 \\
2 & 5
\end{bmatrix}
$$

Matriks $A$ dan $B$ sama-sama berordo $2 \times 2$.

Perkalian $AB$ dapat dilakukan karena jumlah kolom matriks $A$ sama dengan jumlah baris matriks $B$, yaitu 2.

Matriks hasilnya berordo:

$$
2 \times 2
$$

Perhitungannya adalah:

$$
\begin{aligned}
AB
&=
\begin{bmatrix}
2 & 3 \\
1 & 0
\end{bmatrix}
\begin{bmatrix}
4 & -1 \\
2 & 5
\end{bmatrix}
\\
&=
\begin{bmatrix}
(2)(4)+(3)(2) & (2)(-1)+(3)(5) \\
(1)(4)+(0)(2) & (1)(-1)+(0)(5)
\end{bmatrix}
\\
&=
\begin{bmatrix}
8+6 & -2+15 \\
4+0 & -1+0
\end{bmatrix}
\\
&=
\begin{bmatrix}
14 & 13 \\
4 & -1
\end{bmatrix}
\end{aligned}
$$

Jadi:

$$
AB=
\begin{bmatrix}
14 & 13 \\
4 & -1
\end{bmatrix}
$$

### 6. Perkalian Matriks Persegi Panjang

Perkalian matriks tidak terbatas pada matriks persegi.

Misalkan:

$$
A=
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{bmatrix}
$$

Matriks $A$ berordo $2 \times 3$.

Diketahui pula:

$$
B=
\begin{bmatrix}
1 & 2 \\
0 & -1 \\
3 & 4
\end{bmatrix}
$$

Matriks $B$ berordo $3 \times 2$.

Karena jumlah kolom matriks $A$ sama dengan jumlah baris matriks $B$, perkalian $AB$ dapat dilakukan.

Ordo hasilnya adalah:

$$
(2 \times 3)(3 \times 2)=2 \times 2
$$

Perhitungannya:

$$
\begin{aligned}
AB
&=
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{bmatrix}
\begin{bmatrix}
1 & 2 \\
0 & -1 \\
3 & 4
\end{bmatrix}
\\
&=
\begin{bmatrix}
(1)(1)+(2)(0)+(3)(3) &
(1)(2)+(2)(-1)+(3)(4)
\\
(4)(1)+(5)(0)+(6)(3) &
(4)(2)+(5)(-1)+(6)(4)
\end{bmatrix}
\\
&=
\begin{bmatrix}
1+0+9 & 2-2+12 \\
4+0+18 & 8-5+24
\end{bmatrix}
\\
&=
\begin{bmatrix}
10 & 12 \\
22 & 27
\end{bmatrix}
\end{aligned}
$$

Jadi:

$$
AB=
\begin{bmatrix}
10 & 12 \\
22 & 27
\end{bmatrix}
$$

### 7. Perkalian Matriks Tidak Bersifat Komutatif

Pada perkalian bilangan real berlaku:

$$
ab=ba
$$

Namun, sifat tersebut secara umum tidak berlaku pada perkalian matriks.

Secara umum:

$$
AB \ne BA
$$

Bahkan, terdapat kemungkinan bahwa:

- $AB$ dapat dilakukan, tetapi $BA$ tidak dapat dilakukan.
- $AB$ dan $BA$ sama-sama dapat dilakukan, tetapi hasilnya berbeda.
- Dalam keadaan tertentu, $AB=BA$, tetapi hal ini bukan sifat umum.

#### Contoh $AB \ne BA$

Diketahui:

$$
A=
\begin{bmatrix}
1 & 2 \\
0 & 1
\end{bmatrix}
$$

dan:

$$
B=
\begin{bmatrix}
2 & 0 \\
3 & 1
\end{bmatrix}
$$

Hitung $AB$:

$$
\begin{aligned}
AB
&=
\begin{bmatrix}
1 & 2 \\
0 & 1
\end{bmatrix}
\begin{bmatrix}
2 & 0 \\
3 & 1
\end{bmatrix}
\\
&=
\begin{bmatrix}
(1)(2)+(2)(3) & (1)(0)+(2)(1) \\
(0)(2)+(1)(3) & (0)(0)+(1)(1)
\end{bmatrix}
\\
&=
\begin{bmatrix}
8 & 2 \\
3 & 1
\end{bmatrix}
\end{aligned}
$$

Hitung $BA$:

$$
\begin{aligned}
BA
&=
\begin{bmatrix}
2 & 0 \\
3 & 1
\end{bmatrix}
\begin{bmatrix}
1 & 2 \\
0 & 1
\end{bmatrix}
\\
&=
\begin{bmatrix}
(2)(1)+(0)(0) & (2)(2)+(0)(1) \\
(3)(1)+(1)(0) & (3)(2)+(1)(1)
\end{bmatrix}
\\
&=
\begin{bmatrix}
2 & 4 \\
3 & 7
\end{bmatrix}
\end{aligned}
$$

Karena:

$$
\begin{bmatrix}
8 & 2 \\
3 & 1
\end{bmatrix}
\ne
\begin{bmatrix}
2 & 4 \\
3 & 7
\end{bmatrix}
$$

maka:

$$
AB \ne BA
$$

> [!warning] Urutan Perkalian
> Dalam perkalian matriks, urutan matriks tidak boleh ditukar tanpa pemeriksaan. Mengubah $AB$ menjadi $BA$ dapat mengubah hasil atau membuat operasi tidak dapat dilakukan.

### 8. Matriks Identitas dalam Perkalian Matriks

Matriks identitas berperan seperti bilangan 1 dalam perkalian bilangan real.

Untuk matriks persegi $A$ dan matriks identitas $I$ dengan ordo yang sesuai, berlaku:

$$
AI=IA=A
$$

Contoh:

$$
A=
\begin{bmatrix}
2 & -1 \\
3 & 4
\end{bmatrix}
$$

dan:

$$
I=
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
$$

Maka:

$$
\begin{aligned}
AI
&=
\begin{bmatrix}
2 & -1 \\
3 & 4
\end{bmatrix}
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
\\
&=
\begin{bmatrix}
2 & -1 \\
3 & 4
\end{bmatrix}
\\
&=A
\end{aligned}
$$

### 9. Matriks Nol dalam Perkalian Matriks

Jika ukuran matriks sesuai, maka:

$$
AO=O
$$

dan:

$$
OA=O
$$

Namun, bentuk dan ordo matriks nol pada kedua operasi tersebut dapat berbeda, bergantung pada ordo matriks yang dikalikan.

Contoh:

Jika $A$ berordo $2 \times 3$ dan $O$ berordo $3 \times 4$, maka:

$$
AO
$$

menghasilkan matriks nol berordo:

$$
2 \times 4
$$

### 10. Sifat-Sifat Perkalian Antarmatriks

Sifat-sifat berikut berlaku jika semua operasi yang dituliskan dapat dilakukan.

#### A. Sifat Asosiatif

$$
(AB)C=A(BC)
$$

#### B. Sifat Distributif Kiri

$$
A(B+C)=AB+AC
$$

#### C. Sifat Distributif Kanan

$$
(A+B)C=AC+BC
$$

#### D. Perkalian dengan Skalar

$$
k(AB)=(kA)B=A(kB)
$$

#### E. Perkalian dengan Matriks Identitas

$$
AI=IA=A
$$

#### F. Perkalian dengan Matriks Nol

$$
AO=O
$$

dan:

$$
OA=O
$$

#### G. Perkalian Tidak Komutatif

Secara umum:

$$
AB \ne BA
$$

### 11. Pangkat Matriks

Jika $A$ adalah matriks persegi, pangkat matriks didefinisikan sebagai perkalian matriks tersebut secara berulang.

$$
A^2=AA
$$

$$
A^3=AAA
$$

Secara umum:

$$
A^n=
\underbrace{A \cdot A \cdot A \cdots A}_{n\text{ faktor}}
$$

Pangkat matriks hanya didefinisikan secara langsung untuk matriks persegi karena matriks tersebut dapat dikalikan dengan dirinya sendiri.

Selain itu:

$$
A^1=A
$$

dan:

$$
A^0=I
$$

dengan $I$ merupakan matriks identitas yang ordonya sama dengan matriks $A$.

### 12. Langkah Menyelesaikan Perkalian Antarmatriks

Gunakan langkah berikut untuk menyelesaikan perkalian $AB$.

1. Tentukan ordo matriks $A$ dan matriks $B$.
2. Periksa apakah jumlah kolom $A$ sama dengan jumlah baris $B$.
3. Tentukan ordo matriks hasil.
4. Kalikan setiap baris matriks $A$ dengan setiap kolom matriks $B$.
5. Jumlahkan hasil perkalian pada setiap pasangan baris dan kolom.
6. Susun hasilnya sesuai posisi elemen.
7. Periksa kembali perhitungan dan tanda bilangan.

> [!warning] Kesalahan yang Sering Terjadi
> - Mengalikan elemen yang seletak seperti pada penjumlahan matriks.
> - Tidak memeriksa kesesuaian ordo sebelum mengalikan.
> - Salah menentukan ordo matriks hasil.
> - Menukar urutan $AB$ menjadi $BA$.
> - Tidak menjumlahkan hasil perkalian baris dengan kolom.
> - Salah menghitung perkalian yang melibatkan bilangan negatif.
> - Menganggap bahwa $AB=BA$.

---

## Contoh Soal

### Contoh Soal 1

Diketahui:

$$
A=
\begin{bmatrix}
2 & -3 \\
4 & 1
\end{bmatrix}
$$

Tentukan hasil dari $3A$!

> [!success]- Klik untuk Lihat Jawaban
> Perkalian skalar dilakukan dengan mengalikan setiap elemen matriks $A$ dengan 3.
>
> $$
> \begin{aligned}
> 3A
> &=
> 3
> \begin{bmatrix}
> 2 & -3 \\
> 4 & 1
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 3(2) & 3(-3) \\
> 3(4) & 3(1)
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 6 & -9 \\
> 12 & 3
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> 3A=
> \begin{bmatrix}
> 6 & -9 \\
> 12 & 3
> \end{bmatrix}
> }
> $$

### Contoh Soal 2

Diketahui matriks $P$ berordo $2 \times 3$ dan matriks $Q$ berordo $3 \times 4$.

Tentukan:

1. Apakah perkalian $PQ$ dapat dilakukan?
2. Ordo matriks hasil $PQ$.
3. Apakah perkalian $QP$ dapat dilakukan?

> [!success]- Klik untuk Lihat Jawaban
> Periksa perkalian $PQ$:
>
> $$
> P_{2 \times 3}Q_{3 \times 4}
> $$
>
> Jumlah kolom matriks $P$ adalah 3 dan jumlah baris matriks $Q$ juga 3. Oleh karena itu, perkalian $PQ$ dapat dilakukan.
>
> Ordo matriks hasil ditentukan oleh ukuran yang berada di luar:
>
> $$
> (2 \times 3)(3 \times 4)=2 \times 4
> $$
>
> Jadi, matriks $PQ$ berordo $2 \times 4$.
>
> Periksa perkalian $QP$:
>
> $$
> Q_{3 \times 4}P_{2 \times 3}
> $$
>
> Jumlah kolom matriks $Q$ adalah 4, sedangkan jumlah baris matriks $P$ adalah 2.
>
> Karena:
>
> $$
> 4 \ne 2
> $$
>
> maka perkalian $QP$ tidak dapat dilakukan.
>
> Jadi:
>
> 1. $PQ$ dapat dilakukan.
> 2. Ordo $PQ$ adalah $2 \times 4$.
> 3. $QP$ tidak dapat dilakukan.

### Contoh Soal 3

Diketahui:

$$
A=
\begin{bmatrix}
2 & 3
\end{bmatrix}
$$

dan:

$$
B=
\begin{bmatrix}
4 \\
-1
\end{bmatrix}
$$

Tentukan hasil dari $AB$!

> [!success]- Klik untuk Lihat Jawaban
> Matriks $A$ berordo $1 \times 2$, sedangkan matriks $B$ berordo $2 \times 1$.
>
> Karena angka tengahnya sama, perkalian dapat dilakukan.
>
> Ordo hasilnya adalah:
>
> $$
> (1 \times 2)(2 \times 1)=1 \times 1
> $$
>
> Hitung perkaliannya:
>
> $$
> \begin{aligned}
> AB
> &=
> \begin{bmatrix}
> 2 & 3
> \end{bmatrix}
> \begin{bmatrix}
> 4 \\
> -1
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> (2)(4)+(3)(-1)
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 8-3
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 5
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{AB=\begin{bmatrix}5\end{bmatrix}}
> $$

### Contoh Soal 4

Diketahui:

$$
A=
\begin{bmatrix}
2 & 3 \\
1 & 0
\end{bmatrix}
$$

dan:

$$
B=
\begin{bmatrix}
4 & -1 \\
2 & 5
\end{bmatrix}
$$

Tentukan hasil dari $AB$!

> [!success]- Klik untuk Lihat Jawaban
> Kedua matriks berordo $2 \times 2$, sehingga perkalian $AB$ dapat dilakukan dan hasilnya berordo $2 \times 2$.
>
> $$
> \begin{aligned}
> AB
> &=
> \begin{bmatrix}
> 2 & 3 \\
> 1 & 0
> \end{bmatrix}
> \begin{bmatrix}
> 4 & -1 \\
> 2 & 5
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> (2)(4)+(3)(2) & (2)(-1)+(3)(5) \\
> (1)(4)+(0)(2) & (1)(-1)+(0)(5)
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 8+6 & -2+15 \\
> 4+0 & -1+0
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 14 & 13 \\
> 4 & -1
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> AB=
> \begin{bmatrix}
> 14 & 13 \\
> 4 & -1
> \end{bmatrix}
> }
> $$

### Contoh Soal 5

Diketahui:

$$
A=
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{bmatrix}
$$

dan:

$$
B=
\begin{bmatrix}
1 & 2 \\
0 & -1 \\
3 & 4
\end{bmatrix}
$$

Tentukan hasil dari $AB$!

> [!success]- Klik untuk Lihat Jawaban
> Matriks $A$ berordo $2 \times 3$ dan matriks $B$ berordo $3 \times 2$.
>
> Perkalian dapat dilakukan dan menghasilkan matriks berordo:
>
> $$
> (2 \times 3)(3 \times 2)=2 \times 2
> $$
>
> $$
> \begin{aligned}
> AB
> &=
> \begin{bmatrix}
> 1 & 2 & 3 \\
> 4 & 5 & 6
> \end{bmatrix}
> \begin{bmatrix}
> 1 & 2 \\
> 0 & -1 \\
> 3 & 4
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> (1)(1)+(2)(0)+(3)(3) &
> (1)(2)+(2)(-1)+(3)(4)
> \\
> (4)(1)+(5)(0)+(6)(3) &
> (4)(2)+(5)(-1)+(6)(4)
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 10 & 12 \\
> 22 & 27
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> AB=
> \begin{bmatrix}
> 10 & 12 \\
> 22 & 27
> \end{bmatrix}
> }
> $$

### Contoh Soal 6

Diketahui:

$$
A=
\begin{bmatrix}
1 & 2 \\
0 & 1
\end{bmatrix}
$$

dan:

$$
B=
\begin{bmatrix}
2 & 0 \\
3 & 1
\end{bmatrix}
$$

Tentukan $AB$ dan $BA$. Apakah $AB=BA$?

> [!success]- Klik untuk Lihat Jawaban
> Hitung $AB$:
>
> $$
> \begin{aligned}
> AB
> &=
> \begin{bmatrix}
> 1 & 2 \\
> 0 & 1
> \end{bmatrix}
> \begin{bmatrix}
> 2 & 0 \\
> 3 & 1
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 8 & 2 \\
> 3 & 1
> \end{bmatrix}
> \end{aligned}
> $$
>
> Hitung $BA$:
>
> $$
> \begin{aligned}
> BA
> &=
> \begin{bmatrix}
> 2 & 0 \\
> 3 & 1
> \end{bmatrix}
> \begin{bmatrix}
> 1 & 2 \\
> 0 & 1
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 2 & 4 \\
> 3 & 7
> \end{bmatrix}
> \end{aligned}
> $$
>
> Karena:
>
> $$
> \begin{bmatrix}
> 8 & 2 \\
> 3 & 1
> \end{bmatrix}
> \ne
> \begin{bmatrix}
> 2 & 4 \\
> 3 & 7
> \end{bmatrix}
> $$
>
> maka:
>
> $$
> \boxed{AB \ne BA}
> $$

### Contoh Soal 7

Diketahui:

$$
A=
\begin{bmatrix}
x & 2
\end{bmatrix}
$$

dan:

$$
B=
\begin{bmatrix}
3 \\
4
\end{bmatrix}
$$

Jika $AB=17$, tentukan nilai $x$!

> [!success]- Klik untuk Lihat Jawaban
> Hitung perkalian $AB$:
>
> $$
> \begin{aligned}
> AB
> &=
> \begin{bmatrix}
> x & 2
> \end{bmatrix}
> \begin{bmatrix}
> 3 \\
> 4
> \end{bmatrix}
> \\
> &=3x+8
> \end{aligned}
> $$
>
> Karena $AB=17$, diperoleh:
>
> $$
> \begin{aligned}
> 3x+8 &= 17 \\
> 3x &= 9 \\
> x &= 3
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{x=3}
> $$

### Contoh Soal 8

Diketahui:

$$
A=
\begin{bmatrix}
x & 1 \\
2 & y
\end{bmatrix}
$$

dan:

$$
B=
\begin{bmatrix}
2 \\
3
\end{bmatrix}
$$

Jika:

$$
AB=
\begin{bmatrix}
7 \\
10
\end{bmatrix}
$$

tentukan nilai $x+y$!

> [!success]- Klik untuk Lihat Jawaban
> Hitung perkalian $AB$:
>
> $$
> \begin{aligned}
> AB
> &=
> \begin{bmatrix}
> x & 1 \\
> 2 & y
> \end{bmatrix}
> \begin{bmatrix}
> 2 \\
> 3
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 2x+3 \\
> 4+3y
> \end{bmatrix}
> \end{aligned}
> $$
>
> Berdasarkan kesamaan matriks:
>
> $$
> \begin{bmatrix}
> 2x+3 \\
> 4+3y
> \end{bmatrix}
> =
> \begin{bmatrix}
> 7 \\
> 10
> \end{bmatrix}
> $$
>
> Dari elemen pertama:
>
> $$
> \begin{aligned}
> 2x+3 &= 7 \\
> 2x &= 4 \\
> x &= 2
> \end{aligned}
> $$
>
> Dari elemen kedua:
>
> $$
> \begin{aligned}
> 4+3y &= 10 \\
> 3y &= 6 \\
> y &= 2
> \end{aligned}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> x+y &= 2+2 \\
> &=4
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{x+y=4}
> $$

### Contoh Soal 9

Diketahui:

$$
A=
\begin{bmatrix}
1 & 2 \\
3 & 1
\end{bmatrix}
$$

$$
B=
\begin{bmatrix}
2 & 0 \\
-1 & 4
\end{bmatrix}
$$

dan:

$$
C=
\begin{bmatrix}
1 & 3 \\
2 & -1
\end{bmatrix}
$$

Tentukan hasil dari $2AB-C$!

> [!success]- Klik untuk Lihat Jawaban
> Hitung $AB$ terlebih dahulu:
>
> $$
> \begin{aligned}
> AB
> &=
> \begin{bmatrix}
> 1 & 2 \\
> 3 & 1
> \end{bmatrix}
> \begin{bmatrix}
> 2 & 0 \\
> -1 & 4
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> (1)(2)+(2)(-1) & (1)(0)+(2)(4) \\
> (3)(2)+(1)(-1) & (3)(0)+(1)(4)
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 0 & 8 \\
> 5 & 4
> \end{bmatrix}
> \end{aligned}
> $$
>
> Hitung $2AB$:
>
> $$
> \begin{aligned}
> 2AB
> &=
> 2
> \begin{bmatrix}
> 0 & 8 \\
> 5 & 4
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 0 & 16 \\
> 10 & 8
> \end{bmatrix}
> \end{aligned}
> $$
>
> Kemudian kurangkan dengan matriks $C$:
>
> $$
> \begin{aligned}
> 2AB-C
> &=
> \begin{bmatrix}
> 0 & 16 \\
> 10 & 8
> \end{bmatrix}
> -
> \begin{bmatrix}
> 1 & 3 \\
> 2 & -1
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> -1 & 13 \\
> 8 & 9
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> 2AB-C=
> \begin{bmatrix}
> -1 & 13 \\
> 8 & 9
> \end{bmatrix}
> }
> $$

### Contoh Soal 10

Diketahui:

$$
A=
\begin{bmatrix}
1 & 2 \\
0 & 3
\end{bmatrix}
$$

dan matriks identitas:

$$
I=
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
$$

Tentukan hasil dari:

$$
A^2-3A+2I
$$

> [!success]- Klik untuk Lihat Jawaban
> Hitung $A^2$ terlebih dahulu:
>
> $$
> \begin{aligned}
> A^2
> &=
> AA
> \\
> &=
> \begin{bmatrix}
> 1 & 2 \\
> 0 & 3
> \end{bmatrix}
> \begin{bmatrix}
> 1 & 2 \\
> 0 & 3
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> (1)(1)+(2)(0) & (1)(2)+(2)(3) \\
> (0)(1)+(3)(0) & (0)(2)+(3)(3)
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 1 & 8 \\
> 0 & 9
> \end{bmatrix}
> \end{aligned}
> $$
>
> Hitung $3A$:
>
> $$
> 3A=
> \begin{bmatrix}
> 3 & 6 \\
> 0 & 9
> \end{bmatrix}
> $$
>
> Hitung $2I$:
>
> $$
> 2I=
> \begin{bmatrix}
> 2 & 0 \\
> 0 & 2
> \end{bmatrix}
> $$
>
> Selanjutnya:
>
> $$
> \begin{aligned}
> A^2-3A+2I
> &=
> \begin{bmatrix}
> 1 & 8 \\
> 0 & 9
> \end{bmatrix}
> -
> \begin{bmatrix}
> 3 & 6 \\
> 0 & 9
> \end{bmatrix}
> +
> \begin{bmatrix}
> 2 & 0 \\
> 0 & 2
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 1-3+2 & 8-6+0 \\
> 0-0+0 & 9-9+2
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 0 & 2 \\
> 0 & 2
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> A^2-3A+2I=
> \begin{bmatrix}
> 0 & 2 \\
> 0 & 2
> \end{bmatrix}
> }
> $$

---

## Konsep Terkait

- [[Matriks/03 - Operasi Penjumlahan dan Pengurangan Matriks]]
- [[Matriks/05 - Determinan Matriks Ordo 2x2 dan 3x3]]
```