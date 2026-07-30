---
title:
---

# Determinan Matriks Ordo $2 \times 2$ dan $3 \times 3$

Determinan adalah suatu nilai skalar yang diperoleh dari perhitungan elemen-elemen suatu matriks persegi.

Nilai determinan dapat digunakan untuk mengetahui beberapa karakteristik penting suatu matriks, termasuk menentukan apakah matriks tersebut mempunyai invers.

Determinan matriks $A$ dapat ditulis menggunakan dua bentuk berikut:

$$
\det(A)
$$

atau:

$$
|A|
$$

Jika:

$$
\det(A)=0
$$

maka matriks $A$ tidak mempunyai invers dan disebut **matriks singular**.

Jika:

$$
\det(A)\ne 0
$$

maka matriks $A$ mempunyai invers dan disebut **matriks nonsingular**.

> [!important] Syarat Matriks Memiliki Determinan
> Determinan hanya didefinisikan untuk matriks persegi, yaitu matriks yang mempunyai jumlah baris dan jumlah kolom yang sama.
>
> Matriks berordo $2 \times 3$, $3 \times 2$, atau matriks persegi panjang lainnya tidak mempunyai determinan.

### 1. Determinan Matriks Ordo $2 \times 2$

Misalkan matriks $A$ berordo $2 \times 2$:

$$
A=
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

Determinan matriks $A$ ditulis sebagai:

$$
\det(A)
=
\begin{vmatrix}
a & b \\
c & d
\end{vmatrix}
$$

Nilai determinannya dihitung menggunakan rumus:

$$
\boxed{\det(A)=ad-bc}
$$

Rumus tersebut dapat dipahami sebagai:

$$
\text{hasil kali diagonal utama}
-
\text{hasil kali diagonal sekunder}
$$

Diagonal utama terdiri atas elemen $a$ dan $d$.

$$
a \times d=ad
$$

Diagonal sekunder terdiri atas elemen $b$ dan $c$.

$$
b \times c=bc
$$

Oleh karena itu:

$$
\det(A)=ad-bc
$$

#### Contoh Dasar

Diketahui:

$$
A=
\begin{bmatrix}
3 & 2 \\
1 & 4
\end{bmatrix}
$$

Maka:

$$
\begin{aligned}
\det(A)
&=
\begin{vmatrix}
3 & 2 \\
1 & 4
\end{vmatrix}
\\
&=(3)(4)-(2)(1)
\\
&=12-2
\\
&=10
\end{aligned}
$$

Jadi:

$$
\det(A)=10
$$

> [!warning] Urutan Pengurangan
> Determinan matriks ordo $2 \times 2$ dihitung dengan urutan diagonal utama dikurangi diagonal sekunder.
>
> $$
> ad-bc
> $$
>
> Jangan menukar urutannya menjadi $bc-ad$ karena hasilnya akan mempunyai tanda yang berbeda.

### 2. Determinan Matriks Ordo $3 \times 3$

Determinan matriks ordo $3 \times 3$ dapat dihitung menggunakan beberapa metode.

Salah satu metode yang umum digunakan pada tingkat SMA adalah **Metode Sarrus**.

Misalkan:

$$
B=
\begin{bmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{bmatrix}
$$

Determinan matriks $B$ ditulis sebagai:

$$
\det(B)
=
\begin{vmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{vmatrix}
$$

### 3. Langkah-Langkah Metode Sarrus

Metode Sarrus dilakukan melalui langkah-langkah berikut.

#### Langkah 1

Tuliskan matriks ordo $3 \times 3$.

$$
\begin{vmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{vmatrix}
$$

#### Langkah 2

Salin dua kolom pertama ke sebelah kanan matriks.

$$
\begin{array}{ccc|cc}
a & b & c & a & b \\
d & e & f & d & e \\
g & h & i & g & h
\end{array}
$$

#### Langkah 3

Kalikan elemen-elemen pada tiga diagonal yang bergerak dari kiri atas menuju kanan bawah.

Hasil perkaliannya adalah:

$$
aei
$$

$$
bfg
$$

dan:

$$
cdh
$$

Jumlahkan ketiga hasil tersebut:

$$
aei+bfg+cdh
$$

#### Langkah 4

Kalikan elemen-elemen pada tiga diagonal yang bergerak dari kanan atas menuju kiri bawah.

Hasil perkaliannya adalah:

$$
ceg
$$

$$
afh
$$

dan:

$$
bdi
$$

Jumlahkan ketiga hasil tersebut:

$$
ceg+afh+bdi
$$

#### Langkah 5

Kurangkan jumlah diagonal kedua dari jumlah diagonal pertama.

$$
\boxed{
\det(B)
=
(aei+bfg+cdh)
-
(ceg+afh+bdi)
}
$$

Rumus tersebut juga dapat ditulis sebagai:

$$
\boxed{
\det(B)
=
aei+bfg+cdh-ceg-afh-bdi
}
$$

> [!important] Batas Penggunaan Metode Sarrus
> Metode Sarrus hanya dapat digunakan secara langsung untuk menghitung determinan matriks berordo $3 \times 3$.
>
> Metode ini tidak dapat diterapkan langsung pada matriks berordo $2 \times 2$, $4 \times 4$, atau ordo lainnya.

### 4. Contoh Perhitungan Metode Sarrus

Diketahui:

$$
B=
\begin{bmatrix}
1 & 2 & 3 \\
0 & 1 & 4 \\
5 & 6 & 0
\end{bmatrix}
$$

Salin dua kolom pertama ke sebelah kanan.

$$
\begin{array}{ccc|cc}
1 & 2 & 3 & 1 & 2 \\
0 & 1 & 4 & 0 & 1 \\
5 & 6 & 0 & 5 & 6
\end{array}
$$

Hasil kali diagonal dari kiri atas menuju kanan bawah:

$$
(1)(1)(0)=0
$$

$$
(2)(4)(5)=40
$$

$$
(3)(0)(6)=0
$$

Jumlahnya:

$$
0+40+0=40
$$

Hasil kali diagonal dari kanan atas menuju kiri bawah:

$$
(3)(1)(5)=15
$$

$$
(1)(4)(6)=24
$$

$$
(2)(0)(0)=0
$$

Jumlahnya:

$$
15+24+0=39
$$

Dengan demikian:

$$
\begin{aligned}
\det(B)
&=40-39
\\
&=1
\end{aligned}
$$

Jadi:

$$
\det(B)=1
$$

### 5. Determinan Matriks yang Memuat Bilangan Negatif

Ketika matriks memuat bilangan negatif, tanda setiap bilangan harus diperhatikan dengan teliti.

Misalkan:

$$
A=
\begin{bmatrix}
-2 & 3 \\
4 & -1
\end{bmatrix}
$$

Maka:

$$
\begin{aligned}
\det(A)
&=(-2)(-1)-(3)(4)
\\
&=2-12
\\
&=-10
\end{aligned}
$$

Perkalian dua bilangan negatif menghasilkan bilangan positif.

$$
(-2)(-1)=2
$$

Namun, hasil tersebut tetap harus dikurangi dengan hasil kali diagonal sekunder.

> [!warning] Kesalahan Tanda
> Kesalahan yang sering terjadi dalam menghitung determinan adalah:
>
> - Mengabaikan tanda negatif pada elemen matriks.
> - Salah menghitung perkalian dua bilangan negatif.
> - Salah mendistribusikan tanda negatif di depan tanda kurung.
> - Menjumlahkan semua hasil kali diagonal tanpa melakukan pengurangan.

### 6. Determinan Matriks yang Memuat Variabel

Determinan dapat digunakan untuk menentukan nilai variabel yang belum diketahui.

Misalkan:

$$
A=
\begin{bmatrix}
x & 2 \\
3 & 4
\end{bmatrix}
$$

Jika diketahui:

$$
\det(A)=10
$$

maka:

$$
\begin{aligned}
\det(A)
&=(x)(4)-(2)(3)
\\
4x-6&=10
\\
4x&=16
\\
x&=4
\end{aligned}
$$

Jadi:

$$
x=4
$$

### 7. Menentukan Matriks Singular

Matriks persegi disebut singular jika determinannya sama dengan nol.

$$
\det(A)=0
$$

Sebagai contoh:

$$
A=
\begin{bmatrix}
x & 6 \\
2 & 3
\end{bmatrix}
$$

Agar matriks $A$ singular, harus berlaku:

$$
\begin{aligned}
\det(A)&=0
\\
3x-(6)(2)&=0
\\
3x-12&=0
\\
3x&=12
\\
x&=4
\end{aligned}
$$

Jadi, matriks $A$ menjadi singular jika:

$$
x=4
$$

### 8. Hubungan Determinan dengan Invers Matriks

Suatu matriks persegi mempunyai invers jika dan hanya jika determinannya tidak sama dengan nol.

$$
A^{-1}\text{ ada}
\iff
\det(A)\ne 0
$$

Sebaliknya:

$$
A^{-1}\text{ tidak ada}
\iff
\det(A)=0
$$

Sebagai contoh:

$$
A=
\begin{bmatrix}
2 & 1 \\
4 & 2
\end{bmatrix}
$$

Maka:

$$
\begin{aligned}
\det(A)
&=(2)(2)-(1)(4)
\\
&=4-4
\\
&=0
\end{aligned}
$$

Karena determinannya sama dengan nol, matriks $A$ tidak mempunyai invers.

> [!note]
> Cara menentukan invers matriks akan dibahas pada materi tersendiri.

### 9. Penerapan Determinan pada Luas

Determinan matriks ordo $2 \times 2$ dapat digunakan untuk menentukan luas jajar genjang yang dibentuk oleh dua vektor.

Jika:

$$
\vec{u}=
\begin{bmatrix}
a \\
c
\end{bmatrix}
$$

dan:

$$
\vec{v}=
\begin{bmatrix}
b \\
d
\end{bmatrix}
$$

maka luas jajar genjang yang dibentuk oleh kedua vektor tersebut adalah:

$$
L=
\left|
\begin{vmatrix}
a & b \\
c & d
\end{vmatrix}
\right|
$$

atau:

$$
L=|ad-bc|
$$

Nilai mutlak digunakan karena luas tidak mungkin bernilai negatif.

Luas segitiga yang dibentuk oleh kedua vektor tersebut adalah:

$$
L_{\triangle}
=
\frac{1}{2}|ad-bc|
$$

### 10. Langkah Memeriksa Hasil Determinan

Setelah menghitung determinan, lakukan pemeriksaan berikut:

1. Pastikan matriks berbentuk persegi.
2. Periksa kembali posisi setiap elemen.
3. Periksa tanda positif dan negatif.
4. Untuk matriks $2 \times 2$, gunakan urutan $ad-bc$.
5. Untuk metode Sarrus, pastikan terdapat tiga diagonal positif dan tiga diagonal negatif.
6. Jangan memasukkan dua kolom salinan sebagai kolom baru dalam matriks asli.
7. Periksa kembali operasi penjumlahan dan pengurangan.
8. Jika determinan digunakan untuk menentukan invers, pastikan hasilnya benar-benar tidak sama dengan nol.

---

## Contoh Soal

### Contoh Soal 1

Tentukan determinan dari matriks:

$$
P=
\begin{bmatrix}
4 & 3 \\
2 & 5
\end{bmatrix}
$$

> [!success]- Klik untuk Lihat Jawaban
> Gunakan rumus determinan matriks ordo $2 \times 2$:
>
> $$
> \det(P)=ad-bc
> $$
>
> Substitusikan elemen-elemen matriks $P$:
>
> $$
> \begin{aligned}
> \det(P)
> &=(4)(5)-(3)(2)
> \\
> &=20-6
> \\
> &=14
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{\det(P)=14}
> $$

### Contoh Soal 2

Tentukan determinan dari matriks:

$$
A=
\begin{bmatrix}
-2 & 4 \\
3 & -5
\end{bmatrix}
$$

> [!success]- Klik untuk Lihat Jawaban
> Gunakan rumus:
>
> $$
> \det(A)=ad-bc
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> \det(A)
> &=(-2)(-5)-(4)(3)
> \\
> &=10-12
> \\
> &=-2
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{\det(A)=-2}
> $$

### Contoh Soal 3

Diketahui:

$$
B=
\begin{bmatrix}
x & 2 \\
3 & 4
\end{bmatrix}
$$

Jika $\det(B)=10$, tentukan nilai $x$!

> [!success]- Klik untuk Lihat Jawaban
> Hitung determinan matriks $B$:
>
> $$
> \begin{aligned}
> \det(B)
> &=(x)(4)-(2)(3)
> \\
> &=4x-6
> \end{aligned}
> $$
>
> Karena $\det(B)=10$, diperoleh:
>
> $$
> \begin{aligned}
> 4x-6&=10
> \\
> 4x&=16
> \\
> x&=4
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{x=4}
> $$

### Contoh Soal 4

Diketahui:

$$
C=
\begin{bmatrix}
x & 6 \\
2 & 3
\end{bmatrix}
$$

Tentukan nilai $x$ agar matriks $C$ menjadi matriks singular!

> [!success]- Klik untuk Lihat Jawaban
> Matriks singular mempunyai determinan sama dengan nol.
>
> $$
> \det(C)=0
> $$
>
> Hitung determinan matriks $C$:
>
> $$
> \begin{aligned}
> \det(C)
> &=(x)(3)-(6)(2)
> \\
> &=3x-12
> \end{aligned}
> $$
>
> Karena matriks $C$ harus singular:
>
> $$
> \begin{aligned}
> 3x-12&=0
> \\
> 3x&=12
> \\
> x&=4
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{x=4}
> $$

### Contoh Soal 5

Tentukan determinan matriks berikut menggunakan metode Sarrus:

$$
D=
\begin{bmatrix}
1 & 2 & 3 \\
0 & 1 & 4 \\
5 & 6 & 0
\end{bmatrix}
$$

> [!success]- Klik untuk Lihat Jawaban
> Gunakan rumus metode Sarrus:
>
> $$
> \det(D)
> =
> (aei+bfg+cdh)
> -
> (ceg+afh+bdi)
> $$
>
> Substitusikan elemen-elemen matriks:
>
> $$
> \begin{aligned}
> \det(D)
> &=
> (1)(1)(0)
> +(2)(4)(5)
> +(3)(0)(6)
> \\
> &\quad
> -(3)(1)(5)
> -(1)(4)(6)
> -(2)(0)(0)
> \\
> &=0+40+0-15-24-0
> \\
> &=40-39
> \\
> &=1
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{\det(D)=1}
> $$

### Contoh Soal 6

Tentukan determinan matriks:

$$
E=
\begin{bmatrix}
3 & 0 & 0 \\
2 & -1 & 0 \\
4 & 5 & 2
\end{bmatrix}
$$

menggunakan metode Sarrus!

> [!success]- Klik untuk Lihat Jawaban
> Gunakan metode Sarrus:
>
> $$
> \begin{aligned}
> \det(E)
> &=
> (3)(-1)(2)
> +(0)(0)(4)
> +(0)(2)(5)
> \\
> &\quad
> -(0)(-1)(4)
> -(3)(0)(5)
> -(0)(2)(2)
> \\
> &=-6+0+0-0-0-0
> \\
> &=-6
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{\det(E)=-6}
> $$

### Contoh Soal 7

Tentukan determinan matriks:

$$
F=
\begin{bmatrix}
2 & -1 & 3 \\
4 & 0 & -2 \\
1 & 5 & 2
\end{bmatrix}
$$

> [!success]- Klik untuk Lihat Jawaban
> Gunakan metode Sarrus:
>
> $$
> \begin{aligned}
> \det(F)
> &=
> (2)(0)(2)
> +(-1)(-2)(1)
> +(3)(4)(5)
> \\
> &\quad
> -(3)(0)(1)
> -(2)(-2)(5)
> -(-1)(4)(2)
> \\
> &=0+2+60-0-(-20)-(-8)
> \\
> &=62+20+8
> \\
> &=90
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{\det(F)=90}
> $$

### Contoh Soal 8

Diketahui:

$$
G=
\begin{bmatrix}
x & 1 & 0 \\
2 & 3 & 1 \\
0 & 4 & 2
\end{bmatrix}
$$

Jika $\det(G)=6$, tentukan nilai $x$!

> [!success]- Klik untuk Lihat Jawaban
> Gunakan metode Sarrus:
>
> $$
> \begin{aligned}
> \det(G)
> &=
> (x)(3)(2)
> +(1)(1)(0)
> +(0)(2)(4)
> \\
> &\quad
> -(0)(3)(0)
> -(x)(1)(4)
> -(1)(2)(2)
> \\
> &=6x+0+0-0-4x-4
> \\
> &=2x-4
> \end{aligned}
> $$
>
> Karena $\det(G)=6$:
>
> $$
> \begin{aligned}
> 2x-4&=6
> \\
> 2x&=10
> \\
> x&=5
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{x=5}
> $$

### Contoh Soal 9

Dua vektor dinyatakan sebagai:

$$
\vec{u}=
\begin{bmatrix}
3 \\
1
\end{bmatrix}
$$

dan:

$$
\vec{v}=
\begin{bmatrix}
2 \\
4
\end{bmatrix}
$$

Tentukan luas jajar genjang dan luas segitiga yang dibentuk oleh kedua vektor tersebut!

> [!success]- Klik untuk Lihat Jawaban
> Susun kedua vektor sebagai kolom suatu matriks:
>
> $$
> A=
> \begin{bmatrix}
> 3 & 2 \\
> 1 & 4
> \end{bmatrix}
> $$
>
> Hitung determinannya:
>
> $$
> \begin{aligned}
> \det(A)
> &=(3)(4)-(2)(1)
> \\
> &=12-2
> \\
> &=10
> \end{aligned}
> $$
>
> Luas jajar genjang adalah nilai mutlak determinan:
>
> $$
> \begin{aligned}
> L_{\text{jajar genjang}}
> &=|\det(A)|
> \\
> &=|10|
> \\
> &=10
> \end{aligned}
> $$
>
> Luas segitiga adalah setengah luas jajar genjang:
>
> $$
> \begin{aligned}
> L_{\triangle}
> &=
> \frac{1}{2}|\det(A)|
> \\
> &=
> \frac{1}{2}(10)
> \\
> &=5
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> L_{\text{jajar genjang}}=10
> }
> $$
>
> dan:
>
> $$
> \boxed{
> L_{\triangle}=5
> }
> $$

### Contoh Soal 10

Diketahui:

$$
H=
\begin{bmatrix}
x & 1 & 0 \\
2 & x & 1 \\
0 & 3 & x
\end{bmatrix}
$$

Jika $\det(H)=12$, tentukan nilai real $x$!

> [!success]- Klik untuk Lihat Jawaban
> Gunakan metode Sarrus:
>
> $$
> \begin{aligned}
> \det(H)
> &=
> (x)(x)(x)
> +(1)(1)(0)
> +(0)(2)(3)
> \\
> &\quad
> -(0)(x)(0)
> -(x)(1)(3)
> -(1)(2)(x)
> \\
> &=x^3+0+0-0-3x-2x
> \\
> &=x^3-5x
> \end{aligned}
> $$
>
> Karena $\det(H)=12$:
>
> $$
> \begin{aligned}
> x^3-5x&=12
> \\
> x^3-5x-12&=0
> \end{aligned}
> $$
>
> Faktorkan persamaan tersebut:
>
> $$
> \begin{aligned}
> x^3-5x-12
> &=(x-3)(x^2+3x+4)
> \end{aligned}
> $$
>
> Maka:
>
> $$
> (x-3)(x^2+3x+4)=0
> $$
>
> Faktor pertama memberikan:
>
> $$
> x-3=0
> $$
>
> sehingga:
>
> $$
> x=3
> $$
>
> Untuk faktor kedua:
>
> $$
> x^2+3x+4=0
> $$
>
> diskriminannya adalah:
>
> $$
> \begin{aligned}
> D
> &=b^2-4ac
> \\
> &=3^2-4(1)(4)
> \\
> &=9-16
> \\
> &=-7
> \end{aligned}
> $$
>
> Karena $D<0$, persamaan tersebut tidak mempunyai penyelesaian real.
>
> Jadi, nilai real $x$ yang memenuhi adalah:
>
> $$
> \boxed{x=3}
> $$

---

## Konsep Terkait

- [[Matriks/04 - Operasi Perkalian Skalar dan Perkalian Antarmatriks]]
- [[Matriks/06 - Matriks Singular dan Sifat-Sifat Determinan]]
```