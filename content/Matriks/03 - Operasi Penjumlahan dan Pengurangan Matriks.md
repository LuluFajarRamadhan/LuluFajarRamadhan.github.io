---
title:
---
# Operasi Penjumlahan dan Pengurangan Matriks

Operasi penjumlahan dan pengurangan matriks dilakukan dengan cara mengoperasikan elemen-elemen yang mempunyai posisi sama.

Namun, operasi tersebut hanya dapat dilakukan jika matriks-matriks yang terlibat ==**mempunyai ordo yang sama**==.

Sebagai contoh, matriks berordo $2 \times 3$ hanya dapat dijumlahkan atau dikurangkan dengan matriks lain yang juga berordo $2 \times 3$.

Jika kedua matriks mempunyai ordo yang berbeda, penjumlahan atau pengurangan matriks tidak dapat dilakukan.

### 1. Syarat Penjumlahan dan Pengurangan Matriks

Misalkan matriks $A$ mempunyai ordo $m \times n$ dan matriks $B$ mempunyai ordo $p \times q$.

Operasi:

$$
A+B
$$

atau:

$$
A-B
$$

hanya dapat dilakukan jika:

$$
m=p
$$

dan:

$$
n=q
$$

Dengan kata lain:

$$
\operatorname{ordo}(A)=\operatorname{ordo}(B)
$$

Contoh matriks yang dapat dijumlahkan:

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
7 & 8 & 9 \\
1 & 2 & 3
\end{bmatrix}
$$

Matriks $A$ dan $B$ sama-sama berordo $2 \times 3$, sehingga operasi $A+B$ dan $A-B$ dapat dilakukan.

Contoh matriks yang tidak dapat dijumlahkan:

$$
P=
\begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
$$

dan:

$$
Q=
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{bmatrix}
$$

Matriks $P$ berordo $2 \times 2$, sedangkan matriks $Q$ berordo $2 \times 3$.

Karena ordonya berbeda, operasi berikut tidak dapat dilakukan:

$$
P+Q
$$

dan:

$$
P-Q
$$

> [!important] Syarat Utama
> Kesamaan jumlah elemen saja tidak cukup. Kedua matriks harus mempunyai jumlah baris dan jumlah kolom yang sama.

### 2. Penjumlahan Matriks

Penjumlahan matriks dilakukan dengan cara menjumlahkan elemen-elemen yang seletak atau bersesuaian.

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
A+B=
\begin{bmatrix}
a+e & b+f \\
c+g & d+h
\end{bmatrix}
$$

Setiap elemen matriks hasil diperoleh sebagai berikut:

$$
(A+B)_{ij}=a_{ij}+b_{ij}
$$

Artinya:

- Elemen baris ke-1 kolom ke-1 pada $A$ dijumlahkan dengan elemen baris ke-1 kolom ke-1 pada $B$.
- Elemen baris ke-1 kolom ke-2 pada $A$ dijumlahkan dengan elemen baris ke-1 kolom ke-2 pada $B$.
- Proses yang sama dilakukan untuk semua elemen lainnya.

#### Contoh Penjumlahan Matriks

Diketahui:

$$
A=
\begin{bmatrix}
2 & -1 \\
3 & 4
\end{bmatrix}
$$

dan:

$$
B=
\begin{bmatrix}
5 & 6 \\
-2 & 1
\end{bmatrix}
$$

Maka:

$$
\begin{aligned}
A+B
&=
\begin{bmatrix}
2 & -1 \\
3 & 4
\end{bmatrix}
+
\begin{bmatrix}
5 & 6 \\
-2 & 1
\end{bmatrix}
\\
&=
\begin{bmatrix}
2+5 & -1+6 \\
3+(-2) & 4+1
\end{bmatrix}
\\
&=
\begin{bmatrix}
7 & 5 \\
1 & 5
\end{bmatrix}
\end{aligned}
$$

Jadi:

$$
A+B=
\begin{bmatrix}
7 & 5 \\
1 & 5
\end{bmatrix}
$$

### 3. Pengurangan Matriks

Pengurangan matriks dilakukan dengan cara mengurangkan elemen-elemen yang seletak atau bersesuaian.

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
A-B=
\begin{bmatrix}
a-e & b-f \\
c-g & d-h
\end{bmatrix}
$$

Setiap elemen matriks hasil memenuhi:

$$
(A-B)_{ij}=a_{ij}-b_{ij}
$$

Urutan dalam pengurangan harus diperhatikan karena secara umum:

$$
A-B \ne B-A
$$

#### Contoh Pengurangan Matriks

Diketahui:

$$
A=
\begin{bmatrix}
7 & 3 \\
-1 & 5
\end{bmatrix}
$$

dan:

$$
B=
\begin{bmatrix}
2 & -4 \\
6 & 1
\end{bmatrix}
$$

Maka:

$$
\begin{aligned}
A-B
&=
\begin{bmatrix}
7 & 3 \\
-1 & 5
\end{bmatrix}
-
\begin{bmatrix}
2 & -4 \\
6 & 1
\end{bmatrix}
\\
&=
\begin{bmatrix}
7-2 & 3-(-4) \\
-1-6 & 5-1
\end{bmatrix}
\\
&=
\begin{bmatrix}
5 & 7 \\
-7 & 4
\end{bmatrix}
\end{aligned}
$$

Jadi:

$$
A-B=
\begin{bmatrix}
5 & 7 \\
-7 & 4
\end{bmatrix}
$$

> [!warning] Pengurangan Bilangan Negatif
> Jika suatu elemen dikurangi bilangan negatif, operasinya berubah menjadi penjumlahan.
>
> $$
> a-(-b)=a+b
> $$

### 4. Perkalian Matriks dengan Skalar dalam Operasi Campuran

Pada beberapa soal penjumlahan dan pengurangan matriks, terdapat bilangan yang mengalikan suatu matriks.

Bilangan tersebut disebut **skalar**.

Jika matriks $A$ dikalikan dengan skalar $k$, seluruh elemen matriks $A$ harus dikalikan dengan $k$.

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
\begin{bmatrix}
ka & kb \\
kc & kd
\end{bmatrix}
$$

Sebagai contoh:

$$
A=
\begin{bmatrix}
2 & -1 \\
3 & 4
\end{bmatrix}
$$

Maka:

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

Untuk menyelesaikan operasi seperti:

$$
2A-B
$$

lakukan langkah berikut:

1. Hitung terlebih dahulu $2A$.
2. Kurangkan hasil $2A$ dengan matriks $B$.
3. Operasikan setiap elemen yang seletak.

> [!note]
> Pembahasan lebih lengkap mengenai perkalian matriks dengan skalar terdapat pada materi berikutnya.

### 5. Matriks Nol dan Lawan Suatu Matriks

#### A. Matriks Nol sebagai Elemen Identitas

Matriks nol adalah matriks yang seluruh elemennya bernilai 0.

Jika matriks nol $O$ mempunyai ordo yang sama dengan matriks $A$, maka:

$$
A+O=A
$$

dan:

$$
O+A=A
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
O=
\begin{bmatrix}
0 & 0 \\
0 & 0
\end{bmatrix}
$$

Maka:

$$
\begin{aligned}
A+O
&=
\begin{bmatrix}
2 & -1 \\
3 & 4
\end{bmatrix}
+
\begin{bmatrix}
0 & 0 \\
0 & 0
\end{bmatrix}
\\
&=
\begin{bmatrix}
2 & -1 \\
3 & 4
\end{bmatrix}
\end{aligned}
$$

#### B. Lawan Suatu Matriks

Lawan dari matriks $A$ ditulis sebagai:

$$
-A
$$

Matriks $-A$ diperoleh dengan mengubah tanda setiap elemen pada matriks $A$.

Jika:

$$
A=
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

maka:

$$
-A=
\begin{bmatrix}
-a & -b \\
-c & -d
\end{bmatrix}
$$

Matriks $A$ dan $-A$ memenuhi:

$$
A+(-A)=O
$$

Contoh:

$$
A=
\begin{bmatrix}
2 & -3 \\
4 & 1
\end{bmatrix}
$$

Maka:

$$
-A=
\begin{bmatrix}
-2 & 3 \\
-4 & -1
\end{bmatrix}
$$

Sehingga:

$$
\begin{aligned}
A+(-A)
&=
\begin{bmatrix}
2 & -3 \\
4 & 1
\end{bmatrix}
+
\begin{bmatrix}
-2 & 3 \\
-4 & -1
\end{bmatrix}
\\
&=
\begin{bmatrix}
0 & 0 \\
0 & 0
\end{bmatrix}
\\
&=O
\end{aligned}
$$

Pengurangan matriks juga dapat dinyatakan sebagai penjumlahan dengan lawan matriks:

$$
A-B=A+(-B)
$$

### 6. Sifat-Sifat Operasi Penjumlahan Matriks

Sifat-sifat berikut berlaku jika matriks-matriks yang terlibat mempunyai ordo yang sama.

#### A. Sifat Komutatif

Urutan penjumlahan matriks dapat ditukar.

$$
A+B=B+A
$$

#### B. Sifat Asosiatif

Pengelompokan dalam penjumlahan matriks dapat diubah.

$$
(A+B)+C=A+(B+C)
$$

#### C. Elemen Identitas Penjumlahan

Matriks nol merupakan elemen identitas dalam penjumlahan matriks.

$$
A+O=O+A=A
$$

#### D. Elemen Invers Penjumlahan

Setiap matriks $A$ mempunyai lawan matriks $-A$.

$$
A+(-A)=O
$$

#### E. Sifat Distributif Perkalian Skalar

Untuk skalar $k$, berlaku:

$$
k(A+B)=kA+kB
$$

Selain itu:

$$
(k+l)A=kA+lA
$$

### 7. Sifat-Sifat Operasi Pengurangan Matriks

Berbeda dengan penjumlahan, pengurangan matriks tidak bersifat komutatif.

Secara umum:

$$
A-B \ne B-A
$$

Pengurangan matriks juga tidak bersifat asosiatif.

Secara umum:

$$
(A-B)-C \ne A-(B-C)
$$

Sebagai contoh, untuk bilangan biasa:

$$
(10-5)-2=3
$$

sedangkan:

$$
10-(5-2)=7
$$

Hal yang sama berlaku pada setiap elemen dalam operasi matriks.

Namun, berlaku hubungan berikut:

$$
A-B=-(B-A)
$$

### 8. Langkah Menyelesaikan Operasi Campuran Matriks

Untuk menyelesaikan operasi seperti:

$$
2A-3B+C
$$

gunakan urutan berikut:

1. Pastikan semua matriks mempunyai ordo yang sama.
2. Hitung perkalian skalar, yaitu $2A$ dan $3B$.
3. Susun operasi penjumlahan dan pengurangan.
4. Operasikan elemen-elemen yang seletak.
5. Periksa kembali tanda positif dan negatif.

Secara umum:

$$
(2A-3B+C)_{ij}=2a_{ij}-3b_{ij}+c_{ij}
$$

> [!warning] Kesalahan yang Sering Terjadi
> - Menjumlahkan matriks yang mempunyai ordo berbeda.
> - Mengoperasikan elemen yang tidak seletak.
> - Hanya mengalikan sebagian elemen ketika terdapat skalar.
> - Salah menghitung pengurangan bilangan negatif.
> - Menganggap bahwa $A-B=B-A$.

---

## Contoh Soal

### Contoh Soal 1

Diketahui:

$$
A=
\begin{bmatrix}
2 & 3 \\
4 & 1
\end{bmatrix}
$$

dan:

$$
B=
\begin{bmatrix}
5 & 1 \\
-2 & 6
\end{bmatrix}
$$

Tentukan hasil dari $A+B$!

> [!success]- Klik untuk Lihat Jawaban
> Matriks $A$ dan $B$ sama-sama berordo $2 \times 2$, sehingga dapat dijumlahkan.
>
> Jumlahkan elemen-elemen yang seletak:
>
> $$
> \begin{aligned}
> A+B
> &=
> \begin{bmatrix}
> 2 & 3 \\
> 4 & 1
> \end{bmatrix}
> +
> \begin{bmatrix}
> 5 & 1 \\
> -2 & 6
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 2+5 & 3+1 \\
> 4+(-2) & 1+6
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 7 & 4 \\
> 2 & 7
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> A+B=
> \begin{bmatrix}
> 7 & 4 \\
> 2 & 7
> \end{bmatrix}
> }
> $$

### Contoh Soal 2

Diketahui:

$$
P=
\begin{bmatrix}
7 & -2 \\
3 & 5
\end{bmatrix}
$$

dan:

$$
Q=
\begin{bmatrix}
4 & 6 \\
-1 & 2
\end{bmatrix}
$$

Tentukan hasil dari $P-Q$!

> [!success]- Klik untuk Lihat Jawaban
> Matriks $P$ dan $Q$ sama-sama berordo $2 \times 2$, sehingga dapat dikurangkan.
>
> Kurangkan elemen-elemen yang seletak:
>
> $$
> \begin{aligned}
> P-Q
> &=
> \begin{bmatrix}
> 7 & -2 \\
> 3 & 5
> \end{bmatrix}
> -
> \begin{bmatrix}
> 4 & 6 \\
> -1 & 2
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 7-4 & -2-6 \\
> 3-(-1) & 5-2
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 3 & -8 \\
> 4 & 3
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> P-Q=
> \begin{bmatrix}
> 3 & -8 \\
> 4 & 3
> \end{bmatrix}
> }
> $$

### Contoh Soal 3

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
2 & -1 & 4 \\
3 & 0 & 5
\end{bmatrix}
$$

Hitunglah $A+B$!

> [!success]- Klik untuk Lihat Jawaban
> Matriks $A$ dan $B$ sama-sama berordo $2 \times 3$.
>
> $$
> \begin{aligned}
> A+B
> &=
> \begin{bmatrix}
> 1 & 2 & 3 \\
> 4 & 5 & 6
> \end{bmatrix}
> +
> \begin{bmatrix}
> 2 & -1 & 4 \\
> 3 & 0 & 5
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 1+2 & 2+(-1) & 3+4 \\
> 4+3 & 5+0 & 6+5
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 3 & 1 & 7 \\
> 7 & 5 & 11
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> A+B=
> \begin{bmatrix}
> 3 & 1 & 7 \\
> 7 & 5 & 11
> \end{bmatrix}
> }
> $$

### Contoh Soal 4

Diketahui:

$$
A=
\begin{bmatrix}
2 & -1 \\
3 & 4
\end{bmatrix}
$$

Tentukan matriks $-A$ dan hasil dari $A+(-A)$!

> [!success]- Klik untuk Lihat Jawaban
> Matriks $-A$ diperoleh dengan mengubah tanda setiap elemen matriks $A$.
>
> $$
> -A=
> \begin{bmatrix}
> -2 & 1 \\
> -3 & -4
> \end{bmatrix}
> $$
>
> Kemudian:
>
> $$
> \begin{aligned}
> A+(-A)
> &=
> \begin{bmatrix}
> 2 & -1 \\
> 3 & 4
> \end{bmatrix}
> +
> \begin{bmatrix}
> -2 & 1 \\
> -3 & -4
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 0 & 0 \\
> 0 & 0
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> -A=
> \begin{bmatrix}
> -2 & 1 \\
> -3 & -4
> \end{bmatrix}
> }
> $$
>
> dan:
>
> $$
> \boxed{A+(-A)=O}
> $$

### Contoh Soal 5

Diketahui:

$$
A=
\begin{bmatrix}
3 & -2 \\
1 & 4
\end{bmatrix}
$$

dan:

$$
B=
\begin{bmatrix}
5 & 1 \\
-3 & 2
\end{bmatrix}
$$

Hitunglah $2A+B$!

> [!success]- Klik untuk Lihat Jawaban
> Hitung terlebih dahulu $2A$.
>
> $$
> \begin{aligned}
> 2A
> &=
> 2
> \begin{bmatrix}
> 3 & -2 \\
> 1 & 4
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 6 & -4 \\
> 2 & 8
> \end{bmatrix}
> \end{aligned}
> $$
>
> Selanjutnya, jumlahkan $2A$ dengan $B$.
>
> $$
> \begin{aligned}
> 2A+B
> &=
> \begin{bmatrix}
> 6 & -4 \\
> 2 & 8
> \end{bmatrix}
> +
> \begin{bmatrix}
> 5 & 1 \\
> -3 & 2
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 6+5 & -4+1 \\
> 2+(-3) & 8+2
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 11 & -3 \\
> -1 & 10
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> 2A+B=
> \begin{bmatrix}
> 11 & -3 \\
> -1 & 10
> \end{bmatrix}
> }
> $$

### Contoh Soal 6

Diketahui:

$$
P=
\begin{bmatrix}
5 & -2 \\
3 & 4
\end{bmatrix}
$$

dan:

$$
Q=
\begin{bmatrix}
-1 & 6 \\
2 & -3
\end{bmatrix}
$$

Hitunglah matriks hasil dari $2P-Q$!

> [!success]- Klik untuk Lihat Jawaban
> Kalikan terlebih dahulu setiap elemen matriks $P$ dengan skalar 2.
>
> $$
> \begin{aligned}
> 2P
> &=
> 2
> \begin{bmatrix}
> 5 & -2 \\
> 3 & 4
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 10 & -4 \\
> 6 & 8
> \end{bmatrix}
> \end{aligned}
> $$
>
> Selanjutnya:
>
> $$
> \begin{aligned}
> 2P-Q
> &=
> \begin{bmatrix}
> 10 & -4 \\
> 6 & 8
> \end{bmatrix}
> -
> \begin{bmatrix}
> -1 & 6 \\
> 2 & -3
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 10-(-1) & -4-6 \\
> 6-2 & 8-(-3)
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 11 & -10 \\
> 4 & 11
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> 2P-Q=
> \begin{bmatrix}
> 11 & -10 \\
> 4 & 11
> \end{bmatrix}
> }
> $$

### Contoh Soal 7

Diketahui:

$$
A=
\begin{bmatrix}
1 & 2 \\
-1 & 3
\end{bmatrix}
$$

$$
B=
\begin{bmatrix}
4 & -2 \\
5 & 1
\end{bmatrix}
$$

dan:

$$
C=
\begin{bmatrix}
2 & 3 \\
-4 & 6
\end{bmatrix}
$$

Tentukan hasil dari $A+B-C$!

> [!success]- Klik untuk Lihat Jawaban
> Ketiga matriks mempunyai ordo $2 \times 2$, sehingga operasi dapat dilakukan.
>
> Jumlahkan terlebih dahulu $A$ dan $B$.
>
> $$
> \begin{aligned}
> A+B
> &=
> \begin{bmatrix}
> 1 & 2 \\
> -1 & 3
> \end{bmatrix}
> +
> \begin{bmatrix}
> 4 & -2 \\
> 5 & 1
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 5 & 0 \\
> 4 & 4
> \end{bmatrix}
> \end{aligned}
> $$
>
> Kemudian kurangkan dengan matriks $C$.
>
> $$
> \begin{aligned}
> A+B-C
> &=
> \begin{bmatrix}
> 5 & 0 \\
> 4 & 4
> \end{bmatrix}
> -
> \begin{bmatrix}
> 2 & 3 \\
> -4 & 6
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 5-2 & 0-3 \\
> 4-(-4) & 4-6
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 3 & -3 \\
> 8 & -2
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> A+B-C=
> \begin{bmatrix}
> 3 & -3 \\
> 8 & -2
> \end{bmatrix}
> }
> $$

### Contoh Soal 8

Diketahui:

$$
A=
\begin{bmatrix}
x & 2 \\
3 & y
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

Jika:

$$
A+B=
\begin{bmatrix}
10 & 1 \\
5 & 12
\end{bmatrix}
$$

tentukan nilai $x+y$!

> [!success]- Klik untuk Lihat Jawaban
> Substitusikan matriks $A$ dan $B$ ke dalam persamaan.
>
> $$
> \begin{bmatrix}
> x & 2 \\
> 3 & y
> \end{bmatrix}
> +
> \begin{bmatrix}
> 4 & -1 \\
> 2 & 5
> \end{bmatrix}
> =
> \begin{bmatrix}
> 10 & 1 \\
> 5 & 12
> \end{bmatrix}
> $$
>
> Dari elemen baris ke-1 dan kolom ke-1:
>
> $$
> \begin{aligned}
> x+4 &= 10 \\
> x &= 6
> \end{aligned}
> $$
>
> Dari elemen baris ke-2 dan kolom ke-2:
>
> $$
> \begin{aligned}
> y+5 &= 12 \\
> y &= 7
> \end{aligned}
> $$
>
> Hitung nilai $x+y$.
>
> $$
> \begin{aligned}
> x+y &= 6+7 \\
> &= 13
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{x+y=13}
> $$

### Contoh Soal 9

Diketahui:

$$
A=
\begin{bmatrix}
2x & y-1 \\
3 & x+y
\end{bmatrix}
$$

dan:

$$
B=
\begin{bmatrix}
4 & 2 \\
-1 & 5
\end{bmatrix}
$$

Jika:

$$
A-B=
\begin{bmatrix}
6 & 3 \\
4 & 2
\end{bmatrix}
$$

tentukan nilai $x$, $y$, dan $x+y$!

> [!success]- Klik untuk Lihat Jawaban
> Substitusikan matriks $A$ dan $B$.
>
> $$
> \begin{bmatrix}
> 2x & y-1 \\
> 3 & x+y
> \end{bmatrix}
> -
> \begin{bmatrix}
> 4 & 2 \\
> -1 & 5
> \end{bmatrix}
> =
> \begin{bmatrix}
> 6 & 3 \\
> 4 & 2
> \end{bmatrix}
> $$
>
> Dari elemen baris ke-1 dan kolom ke-1:
>
> $$
> \begin{aligned}
> 2x-4 &= 6 \\
> 2x &= 10 \\
> x &= 5
> \end{aligned}
> $$
>
> Dari elemen baris ke-1 dan kolom ke-2:
>
> $$
> \begin{aligned}
> (y-1)-2 &= 3 \\
> y-3 &= 3 \\
> y &= 6
> \end{aligned}
> $$
>
> Periksa elemen baris ke-2 dan kolom ke-2:
>
> $$
> \begin{aligned}
> x+y-5 &= 2 \\
> 5+6-5 &= 6
> \end{aligned}
> $$
>
> Hasil pemeriksaan tidak sama dengan 2.
>
> Dengan demikian, data pada persamaan matriks tersebut tidak konsisten.
>
> Nilai $x=5$ dan $y=6$ memenuhi dua elemen pertama, tetapi tidak memenuhi elemen baris ke-2 dan kolom ke-2.
>
> Jadi, ==**tidak terdapat pasangan nilai $x$ dan $y$ yang memenuhi seluruh persamaan matriks tersebut**==.

### Contoh Soal 10

Diketahui:

$$
A=
\begin{bmatrix}
1 & -2 \\
3 & 4
\end{bmatrix}
$$

$$
B=
\begin{bmatrix}
2 & 1 \\
-1 & 5
\end{bmatrix}
$$

dan:

$$
C=
\begin{bmatrix}
4 & -3 \\
2 & 1
\end{bmatrix}
$$

Hitunglah:

$$
3A-2B+C
$$

> [!success]- Klik untuk Lihat Jawaban
> Hitung terlebih dahulu $3A$ dan $2B$.
>
> $$
> \begin{aligned}
> 3A
> &=
> 3
> \begin{bmatrix}
> 1 & -2 \\
> 3 & 4
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 3 & -6 \\
> 9 & 12
> \end{bmatrix}
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> 2B
> &=
> 2
> \begin{bmatrix}
> 2 & 1 \\
> -1 & 5
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 4 & 2 \\
> -2 & 10
> \end{bmatrix}
> \end{aligned}
> $$
>
> Selanjutnya, hitung $3A-2B$.
>
> $$
> \begin{aligned}
> 3A-2B
> &=
> \begin{bmatrix}
> 3 & -6 \\
> 9 & 12
> \end{bmatrix}
> -
> \begin{bmatrix}
> 4 & 2 \\
> -2 & 10
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> -1 & -8 \\
> 11 & 2
> \end{bmatrix}
> \end{aligned}
> $$
>
> Kemudian, tambahkan matriks $C$.
>
> $$
> \begin{aligned}
> 3A-2B+C
> &=
> \begin{bmatrix}
> -1 & -8 \\
> 11 & 2
> \end{bmatrix}
> +
> \begin{bmatrix}
> 4 & -3 \\
> 2 & 1
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> -1+4 & -8+(-3) \\
> 11+2 & 2+1
> \end{bmatrix}
> \\
> &=
> \begin{bmatrix}
> 3 & -11 \\
> 13 & 3
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> 3A-2B+C=
> \begin{bmatrix}
> 3 & -11 \\
> 13 & 3
> \end{bmatrix}
> }
> $$

---

## Konsep Terkait

- [[Matriks/02 - Kesamaan Dua Matriks dan Transpose Matriks]]
- [[Matriks/04 - Operasi Perkalian Skalar dan Perkalian Antarmatriks]]
```