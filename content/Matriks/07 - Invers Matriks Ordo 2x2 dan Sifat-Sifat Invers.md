---
title:
---
# Invers Matriks Ordo $2 \times 2$ dan Sifat-Sifat Invers

Invers matriks adalah matriks kebalikan dari suatu matriks persegi.

Jika matriks $A$ mempunyai invers, invers tersebut ditulis sebagai:

$$
A^{-1}
$$

Matriks $A$ dan inversnya memenuhi:

$$
AA^{-1}=A^{-1}A=I
$$

dengan $I$ merupakan matriks identitas yang ordonya sama dengan matriks $A$.

Konsep invers matriks menyerupai kebalikan suatu bilangan.

Sebagai contoh:

$$
5 \times \frac{1}{5}=1
$$

Pada matriks, bilangan 1 digantikan oleh matriks identitas.

$$
AA^{-1}=I
$$

> [!important]
> Hanya matriks persegi yang dapat mempunyai invers. Namun, tidak semua matriks persegi mempunyai invers.

### 1. Syarat Suatu Matriks Mempunyai Invers

Suatu matriks persegi $A$ mempunyai invers jika dan hanya jika determinannya tidak sama dengan nol.

$$
\boxed{
A^{-1}\text{ ada}
\iff
\det(A)\ne 0
}
$$

Jika:

$$
\det(A)=0
$$

maka matriks $A$ disebut matriks singular dan tidak mempunyai invers.

Jika:

$$
\det(A)\ne 0
$$

maka matriks $A$ disebut matriks nonsingular dan mempunyai invers.

Sebagai contoh:

$$
A=
\begin{bmatrix}
2 & 4 \\
1 & 2
\end{bmatrix}
$$

Determinan matriks $A$ adalah:

$$
\begin{aligned}
\det(A)
&=(2)(2)-(4)(1) \\
&=4-4 \\
&=0
\end{aligned}
$$

Karena $\det(A)=0$, matriks $A$ tidak mempunyai invers.

### 2. Rumus Invers Matriks Ordo $2 \times 2$

Misalkan:

$$
A=
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

Determinan matriks $A$ adalah:

$$
\det(A)=ad-bc
$$

Jika:

$$
ad-bc\ne 0
$$

maka invers matriks $A$ adalah:

$$
\boxed{
A^{-1}
=
\frac{1}{ad-bc}
\begin{bmatrix}
d & -b \\
-c & a
\end{bmatrix}
}
$$

Matriks:

$$
\begin{bmatrix}
d & -b \\
-c & a
\end{bmatrix}
$$

disebut **adjoin** atau **adjugat** dari matriks $A$.

Dengan demikian, rumus invers juga dapat ditulis sebagai:

$$
A^{-1}
=
\frac{1}{\det(A)}
\operatorname{adj}(A)
$$

### 3. Cara Menentukan Adjoin Matriks Ordo $2 \times 2$

Untuk membentuk adjoin dari:

$$
A=
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

lakukan langkah berikut:

1. Tukar posisi elemen $a$ dan $d$.
2. Ubah tanda elemen $b$ menjadi $-b$.
3. Ubah tanda elemen $c$ menjadi $-c$.

Hasilnya:

$$
\operatorname{adj}(A)
=
\begin{bmatrix}
d & -b \\
-c & a
\end{bmatrix}
$$

Sebagai contoh:

$$
A=
\begin{bmatrix}
3 & 5 \\
1 & 2
\end{bmatrix}
$$

Adjoin matriks $A$ adalah:

$$
\operatorname{adj}(A)
=
\begin{bmatrix}
2 & -5 \\
-1 & 3
\end{bmatrix}
$$

> [!warning] Kesalahan yang Sering Terjadi
> Elemen $b$ dan $c$ tidak ditukar posisinya. Keduanya tetap berada pada posisi semula, tetapi tandanya diubah.
>
> Bentuk yang benar:
>
> $$
> \begin{bmatrix}
> a & b \\
> c & d
> \end{bmatrix}
> \longrightarrow
> \begin{bmatrix}
> d & -b \\
> -c & a
> \end{bmatrix}
> $$

### 4. Langkah-Langkah Menentukan Invers

Untuk menentukan invers matriks ordo $2 \times 2$, gunakan langkah berikut:

1. Pastikan matriks berbentuk persegi.
2. Hitung determinan matriks.
3. Periksa apakah determinannya tidak sama dengan nol.
4. Bentuk adjoin matriks.
5. Kalikan adjoin dengan $\frac{1}{\det(A)}$.
6. Sederhanakan setiap elemen.
7. Periksa hasil dengan mengalikan $A$ dan $A^{-1}$.

#### Contoh Dasar

Diketahui:

$$
A=
\begin{bmatrix}
3 & 5 \\
1 & 2
\end{bmatrix}
$$

Hitung determinannya:

$$
\begin{aligned}
\det(A)
&=(3)(2)-(5)(1) \\
&=6-5 \\
&=1
\end{aligned}
$$

Karena:

$$
\det(A)=1\ne 0
$$

maka matriks $A$ mempunyai invers.

Bentuk adjoin matriks $A$:

$$
\operatorname{adj}(A)
=
\begin{bmatrix}
2 & -5 \\
-1 & 3
\end{bmatrix}
$$

Gunakan rumus invers:

$$
\begin{aligned}
A^{-1}
&=
\frac{1}{\det(A)}
\operatorname{adj}(A) \\
&=
\frac{1}{1}
\begin{bmatrix}
2 & -5 \\
-1 & 3
\end{bmatrix} \\
&=
\begin{bmatrix}
2 & -5 \\
-1 & 3
\end{bmatrix}
\end{aligned}
$$

Jadi:

$$
\boxed{
A^{-1}
=
\begin{bmatrix}
2 & -5 \\
-1 & 3
\end{bmatrix}
}
$$

### 5. Invers dengan Elemen Pecahan

Jika determinan matriks bukan 1 atau $-1$, elemen invers dapat berbentuk pecahan.

Diketahui:

$$
B=
\begin{bmatrix}
4 & 1 \\
2 & 3
\end{bmatrix}
$$

Determinan matriks $B$ adalah:

$$
\begin{aligned}
\det(B)
&=(4)(3)-(1)(2) \\
&=12-2 \\
&=10
\end{aligned}
$$

Adjoin matriks $B$ adalah:

$$
\operatorname{adj}(B)
=
\begin{bmatrix}
3 & -1 \\
-2 & 4
\end{bmatrix}
$$

Maka:

$$
\begin{aligned}
B^{-1}
&=
\frac{1}{10}
\begin{bmatrix}
3 & -1 \\
-2 & 4
\end{bmatrix} \\
&=
\begin{bmatrix}
\frac{3}{10} & -\frac{1}{10} \\
-\frac{1}{5} & \frac{2}{5}
\end{bmatrix}
\end{aligned}
$$

Kedua bentuk berikut sama-sama benar:

$$
B^{-1}
=
\frac{1}{10}
\begin{bmatrix}
3 & -1 \\
-2 & 4
\end{bmatrix}
$$

atau:

$$
B^{-1}
=
\begin{bmatrix}
\frac{3}{10} & -\frac{1}{10} \\
-\frac{1}{5} & \frac{2}{5}
\end{bmatrix}
$$

### 6. Memeriksa Hasil Invers

Invers yang telah diperoleh dapat diperiksa menggunakan:

$$
AA^{-1}=I
$$

atau:

$$
A^{-1}A=I
$$

Diketahui:

$$
A=
\begin{bmatrix}
3 & 5 \\
1 & 2
\end{bmatrix}
$$

dan:

$$
A^{-1}
=
\begin{bmatrix}
2 & -5 \\
-1 & 3
\end{bmatrix}
$$

Periksa perkalian $AA^{-1}$:

$$
\begin{aligned}
AA^{-1}
&=
\begin{bmatrix}
3 & 5 \\
1 & 2
\end{bmatrix}
\begin{bmatrix}
2 & -5 \\
-1 & 3
\end{bmatrix} \\
&=
\begin{bmatrix}
(3)(2)+(5)(-1) & (3)(-5)+(5)(3) \\
(1)(2)+(2)(-1) & (1)(-5)+(2)(3)
\end{bmatrix} \\
&=
\begin{bmatrix}
6-5 & -15+15 \\
2-2 & -5+6
\end{bmatrix} \\
&=
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix} \\
&=I
\end{aligned}
$$

Karena hasilnya merupakan matriks identitas, invers tersebut benar.

### 7. Invers Matriks Identitas

Matriks identitas merupakan invers bagi dirinya sendiri.

$$
\boxed{
I^{-1}=I
}
$$

Sebagai contoh:

$$
I_2=
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
$$

Maka:

$$
I_2^{-1}
=
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
$$

Hal ini karena:

$$
I_2I_2=I_2
$$

### 8. Invers dari Invers Matriks

Jika matriks $A$ mempunyai invers, maka invers dari $A^{-1}$ adalah matriks $A$ itu sendiri.

$$
\boxed{
\left(A^{-1}\right)^{-1}=A
}
$$

Hal tersebut terjadi karena:

$$
AA^{-1}=A^{-1}A=I
$$

### 9. Invers Perkalian Dua Matriks

Jika matriks $A$ dan $B$ mempunyai invers, maka:

$$
\boxed{
(AB)^{-1}=B^{-1}A^{-1}
}
$$

Urutan matriks pada ruas kanan dibalik.

Bukti singkat:

$$
\begin{aligned}
(AB)(B^{-1}A^{-1})
&=A(BB^{-1})A^{-1} \\
&=AIA^{-1} \\
&=AA^{-1} \\
&=I
\end{aligned}
$$

Demikian pula:

$$
\begin{aligned}
(B^{-1}A^{-1})(AB)
&=B^{-1}(A^{-1}A)B \\
&=B^{-1}IB \\
&=B^{-1}B \\
&=I
\end{aligned}
$$

Oleh karena itu:

$$
(AB)^{-1}=B^{-1}A^{-1}
$$

> [!warning] Urutan Harus Dibalik
> Secara umum, tidak berlaku:
>
> $$
> (AB)^{-1}=A^{-1}B^{-1}
> $$
>
> Bentuk yang benar adalah:
>
> $$
> (AB)^{-1}=B^{-1}A^{-1}
> $$

Untuk tiga matriks:

$$
(ABC)^{-1}
=
C^{-1}B^{-1}A^{-1}
$$

### 10. Invers Transpose Matriks

Jika matriks $A$ mempunyai invers, maka:

$$
\boxed{
(A^T)^{-1}=(A^{-1})^T
}
$$

Artinya, kita dapat:

- Mencari transpose terlebih dahulu, kemudian menentukan inversnya.
- Mencari invers terlebih dahulu, kemudian menentukan transposenya.

Kedua cara tersebut memberikan hasil yang sama.

### 11. Invers Perkalian Skalar

Jika $A$ mempunyai invers dan $k\ne 0$, maka:

$$
\boxed{
(kA)^{-1}
=
\frac{1}{k}A^{-1}
}
$$

Bukti:

$$
\begin{aligned}
(kA)
\left(
\frac{1}{k}A^{-1}
\right)
&=
k
\left(
\frac{1}{k}
\right)
AA^{-1} \\
&=1I \\
&=I
\end{aligned}
$$

Syarat $k\ne 0$ diperlukan karena jika $k=0$, diperoleh matriks nol yang tidak mempunyai invers.

### 12. Invers Pangkat Matriks

Jika matriks $A$ mempunyai invers, maka:

$$
\boxed{
(A^n)^{-1}
=
(A^{-1})^n
}
$$

Sebagai contoh:

$$
(A^3)^{-1}
=
(A^{-1})^3
$$

karena:

$$
A^3=AAA
$$

sehingga:

$$
\begin{aligned}
(A^3)^{-1}
&=(AAA)^{-1} \\
&=A^{-1}A^{-1}A^{-1} \\
&=(A^{-1})^3
\end{aligned}
$$

### 13. Determinan Invers Matriks

Jika matriks $A$ mempunyai invers, maka:

$$
\boxed{
\det(A^{-1})
=
\frac{1}{\det(A)}
}
$$

Sebagai contoh, jika:

$$
\det(A)=5
$$

maka:

$$
\det(A^{-1})
=
\frac{1}{5}
$$

Sifat tersebut dapat diperoleh dari:

$$
AA^{-1}=I
$$

Dengan menggunakan sifat determinan:

$$
\begin{aligned}
\det(AA^{-1})
&=\det(I) \\
\det(A)\det(A^{-1})
&=1
\end{aligned}
$$

Sehingga:

$$
\det(A^{-1})
=
\frac{1}{\det(A)}
$$

### 14. Keunikan Invers Matriks

Jika matriks $A$ mempunyai invers, invers tersebut hanya satu.

Misalkan matriks $B$ dan $C$ sama-sama merupakan invers dari $A$.

Maka:

$$
AB=BA=I
$$

dan:

$$
AC=CA=I
$$

Selanjutnya:

$$
\begin{aligned}
B
&=BI \\
&=B(AC) \\
&=(BA)C \\
&=IC \\
&=C
\end{aligned}
$$

Dengan demikian, $B=C$.

Jadi, invers suatu matriks bersifat unik.

### 15. Menyelesaikan Persamaan Matriks dengan Invers

Invers dapat digunakan untuk menentukan matriks yang belum diketahui.

#### A. Persamaan $AX=B$

Diketahui:

$$
AX=B
$$

Kalikan kedua ruas dari sebelah kiri dengan $A^{-1}$:

$$
\begin{aligned}
A^{-1}AX
&=A^{-1}B \\
IX
&=A^{-1}B \\
X
&=A^{-1}B
\end{aligned}
$$

Jadi:

$$
\boxed{
X=A^{-1}B
}
$$

#### B. Persamaan $XA=B$

Diketahui:

$$
XA=B
$$

Kalikan kedua ruas dari sebelah kanan dengan $A^{-1}$:

$$
\begin{aligned}
XAA^{-1}
&=BA^{-1} \\
XI
&=BA^{-1} \\
X
&=BA^{-1}
\end{aligned}
$$

Jadi:

$$
\boxed{
X=BA^{-1}
}
$$

> [!important] Urutan Perkalian
> Dalam persamaan matriks, perkalian dari sebelah kiri dan sebelah kanan tidak dapat dipertukarkan.
>
> Untuk $AX=B$:
>
> $$
> X=A^{-1}B
> $$
>
> Untuk $XA=B$:
>
> $$
> X=BA^{-1}
> $$

### 16. Hubungan yang Tidak Berlaku

Secara umum, tidak berlaku:

$$
(A+B)^{-1}
=
A^{-1}+B^{-1}
$$

dan tidak berlaku:

$$
(A-B)^{-1}
=
A^{-1}-B^{-1}
$$

Invers penjumlahan atau pengurangan matriks harus dihitung dari matriks hasilnya.

### 17. Langkah Memeriksa Jawaban

Setelah memperoleh invers, lakukan pemeriksaan berikut:

1. Pastikan matriks awal merupakan matriks persegi.
2. Pastikan determinannya tidak sama dengan nol.
3. Periksa pertukaran elemen diagonal utama.
4. Periksa perubahan tanda elemen di luar diagonal utama.
5. Periksa faktor $\frac{1}{\det(A)}$.
6. Sederhanakan pecahan jika diperlukan.
7. Kalikan matriks awal dengan inversnya.
8. Pastikan hasil perkaliannya adalah matriks identitas.

> [!warning] Kesalahan yang Sering Terjadi
> - Menentukan invers matriks yang bukan matriks persegi.
> - Tidak memeriksa nilai determinan.
> - Tetap menggunakan rumus invers ketika determinannya nol.
> - Menukar elemen $b$ dan $c$.
> - Lupa mengubah tanda elemen $b$ dan $c$.
> - Salah menempatkan faktor $\frac{1}{\det(A)}$.
> - Tidak membalik urutan pada rumus $(AB)^{-1}$.
> - Menganggap $(A+B)^{-1}=A^{-1}+B^{-1}$.

---

## Contoh Soal

### Contoh Soal 1

Tentukan invers dari matriks:

$$
A=
\begin{bmatrix}
3 & 5 \\
1 & 2
\end{bmatrix}
$$

> [!success]- Klik untuk Lihat Jawaban
> Hitung determinan matriks $A$:
>
> $$
> \begin{aligned}
> \det(A)
> &=(3)(2)-(5)(1) \\
> &=6-5 \\
> &=1
> \end{aligned}
> $$
>
> Karena $\det(A)\ne 0$, matriks $A$ mempunyai invers.
>
> Bentuk adjoin matriks $A$:
>
> $$
> \operatorname{adj}(A)
> =
> \begin{bmatrix}
> 2 & -5 \\
> -1 & 3
> \end{bmatrix}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> A^{-1}
> &=
> \frac{1}{1}
> \begin{bmatrix}
> 2 & -5 \\
> -1 & 3
> \end{bmatrix} \\
> &=
> \begin{bmatrix}
> 2 & -5 \\
> -1 & 3
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> A^{-1}
> =
> \begin{bmatrix}
> 2 & -5 \\
> -1 & 3
> \end{bmatrix}
> }
> $$

### Contoh Soal 2

Tentukan invers dari matriks:

$$
B=
\begin{bmatrix}
4 & 1 \\
2 & 3
\end{bmatrix}
$$

> [!success]- Klik untuk Lihat Jawaban
> Hitung determinan:
>
> $$
> \begin{aligned}
> \det(B)
> &=(4)(3)-(1)(2) \\
> &=12-2 \\
> &=10
> \end{aligned}
> $$
>
> Bentuk adjoin:
>
> $$
> \operatorname{adj}(B)
> =
> \begin{bmatrix}
> 3 & -1 \\
> -2 & 4
> \end{bmatrix}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> B^{-1}
> &=
> \frac{1}{10}
> \begin{bmatrix}
> 3 & -1 \\
> -2 & 4
> \end{bmatrix} \\
> &=
> \begin{bmatrix}
> \frac{3}{10} & -\frac{1}{10} \\
> -\frac{1}{5} & \frac{2}{5}
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> B^{-1}
> =
> \frac{1}{10}
> \begin{bmatrix}
> 3 & -1 \\
> -2 & 4
> \end{bmatrix}
> }
> $$

### Contoh Soal 3

Tentukan apakah matriks berikut mempunyai invers:

$$
C=
\begin{bmatrix}
2 & 6 \\
1 & 3
\end{bmatrix}
$$

> [!success]- Klik untuk Lihat Jawaban
> Hitung determinan matriks $C$:
>
> $$
> \begin{aligned}
> \det(C)
> &=(2)(3)-(6)(1) \\
> &=6-6 \\
> &=0
> \end{aligned}
> $$
>
> Karena $\det(C)=0$, matriks $C$ merupakan matriks singular.
>
> Jadi:
>
> $$
> \boxed{
> C^{-1}\text{ tidak ada}
> }
> $$

### Contoh Soal 4

Diketahui:

$$
D=
\begin{bmatrix}
x & 2 \\
3 & 4
\end{bmatrix}
$$

Tentukan syarat nilai $x$ agar matriks $D$ mempunyai invers!

> [!success]- Klik untuk Lihat Jawaban
> Matriks $D$ mempunyai invers jika:
>
> $$
> \det(D)\ne 0
> $$
>
> Hitung determinannya:
>
> $$
> \begin{aligned}
> \det(D)
> &=(x)(4)-(2)(3) \\
> &=4x-6
> \end{aligned}
> $$
>
> Syaratnya:
>
> $$
> 4x-6\ne 0
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> 4x&\ne 6 \\
> x&\ne \frac{3}{2}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> x\ne \frac{3}{2}
> }
> $$

### Contoh Soal 5

Diketahui:

$$
E=
\begin{bmatrix}
x+1 & 3 \\
2 & x
\end{bmatrix}
$$

Tentukan nilai $x$ agar matriks $E$ tidak mempunyai invers!

> [!success]- Klik untuk Lihat Jawaban
> Matriks tidak mempunyai invers jika determinannya sama dengan nol.
>
> $$
> \begin{aligned}
> \det(E)
> &=(x+1)(x)-(3)(2) \\
> &=x^2+x-6
> \end{aligned}
> $$
>
> Syarat singular:
>
> $$
> x^2+x-6=0
> $$
>
> Faktorkan:
>
> $$
> \begin{aligned}
> x^2+x-6
> &=(x+3)(x-2)
> \end{aligned}
> $$
>
> Maka:
>
> $$
> (x+3)(x-2)=0
> $$
>
> Sehingga:
>
> $$
> x=-3
> $$
>
> atau:
>
> $$
> x=2
> $$
>
> Jadi:
>
> $$
> \boxed{
> x=-3\text{ atau }x=2
> }
> $$

### Contoh Soal 6

Diketahui:

$$
A=
\begin{bmatrix}
2 & 1 \\
1 & 1
\end{bmatrix}
$$

Tentukan $A^{-1}$ dan buktikan bahwa $AA^{-1}=I$!

> [!success]- Klik untuk Lihat Jawaban
> Hitung determinan:
>
> $$
> \begin{aligned}
> \det(A)
> &=(2)(1)-(1)(1) \\
> &=2-1 \\
> &=1
> \end{aligned}
> $$
>
> Maka:
>
> $$
> A^{-1}
> =
> \begin{bmatrix}
> 1 & -1 \\
> -1 & 2
> \end{bmatrix}
> $$
>
> Periksa perkalian:
>
> $$
> \begin{aligned}
> AA^{-1}
> &=
> \begin{bmatrix}
> 2 & 1 \\
> 1 & 1
> \end{bmatrix}
> \begin{bmatrix}
> 1 & -1 \\
> -1 & 2
> \end{bmatrix} \\
> &=
> \begin{bmatrix}
> (2)(1)+(1)(-1) & (2)(-1)+(1)(2) \\
> (1)(1)+(1)(-1) & (1)(-1)+(1)(2)
> \end{bmatrix} \\
> &=
> \begin{bmatrix}
> 1 & 0 \\
> 0 & 1
> \end{bmatrix} \\
> &=I
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> A^{-1}
> =
> \begin{bmatrix}
> 1 & -1 \\
> -1 & 2
> \end{bmatrix}
> }
> $$

### Contoh Soal 7

Diketahui:

$$
A^{-1}
=
\begin{bmatrix}
2 & -1 \\
-3 & 2
\end{bmatrix}
$$

Tentukan matriks $A$!

> [!success]- Klik untuk Lihat Jawaban
> Gunakan sifat:
>
> $$
> \left(A^{-1}\right)^{-1}=A
> $$
>
> Misalkan:
>
> $$
> B=
> \begin{bmatrix}
> 2 & -1 \\
> -3 & 2
> \end{bmatrix}
> $$
>
> Maka $A=B^{-1}$.
>
> Hitung determinan $B$:
>
> $$
> \begin{aligned}
> \det(B)
> &=(2)(2)-(-1)(-3) \\
> &=4-3 \\
> &=1
> \end{aligned}
> $$
>
> Oleh karena itu:
>
> $$
> \begin{aligned}
> A
> &=B^{-1} \\
> &=
> \frac{1}{1}
> \begin{bmatrix}
> 2 & 1 \\
> 3 & 2
> \end{bmatrix} \\
> &=
> \begin{bmatrix}
> 2 & 1 \\
> 3 & 2
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> A=
> \begin{bmatrix}
> 2 & 1 \\
> 3 & 2
> \end{bmatrix}
> }
> $$

### Contoh Soal 8

Diketahui matriks $A$ mempunyai invers:

$$
A^{-1}
=
\begin{bmatrix}
1 & 2 \\
0 & 1
\end{bmatrix}
$$

Tentukan $(3A)^{-1}$!

> [!success]- Klik untuk Lihat Jawaban
> Gunakan sifat:
>
> $$
> (kA)^{-1}
> =
> \frac{1}{k}A^{-1}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> (3A)^{-1}
> &=
> \frac{1}{3}A^{-1} \\
> &=
> \frac{1}{3}
> \begin{bmatrix}
> 1 & 2 \\
> 0 & 1
> \end{bmatrix} \\
> &=
> \begin{bmatrix}
> \frac{1}{3} & \frac{2}{3} \\
> 0 & \frac{1}{3}
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> (3A)^{-1}
> =
> \begin{bmatrix}
> \frac{1}{3} & \frac{2}{3} \\
> 0 & \frac{1}{3}
> \end{bmatrix}
> }
> $$

### Contoh Soal 9

Diketahui:

$$
A^{-1}
=
\begin{bmatrix}
1 & -1 \\
0 & 2
\end{bmatrix}
$$

dan:

$$
B^{-1}
=
\begin{bmatrix}
2 & 0 \\
1 & 1
\end{bmatrix}
$$

Tentukan $(AB)^{-1}$!

> [!success]- Klik untuk Lihat Jawaban
> Gunakan sifat:
>
> $$
> (AB)^{-1}=B^{-1}A^{-1}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> (AB)^{-1}
> &=
> \begin{bmatrix}
> 2 & 0 \\
> 1 & 1
> \end{bmatrix}
> \begin{bmatrix}
> 1 & -1 \\
> 0 & 2
> \end{bmatrix} \\
> &=
> \begin{bmatrix}
> (2)(1)+(0)(0) & (2)(-1)+(0)(2) \\
> (1)(1)+(1)(0) & (1)(-1)+(1)(2)
> \end{bmatrix} \\
> &=
> \begin{bmatrix}
> 2 & -2 \\
> 1 & 1
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> (AB)^{-1}
> =
> \begin{bmatrix}
> 2 & -2 \\
> 1 & 1
> \end{bmatrix}
> }
> $$

### Contoh Soal 10

Diketahui:

$$
A=
\begin{bmatrix}
2 & 1 \\
1 & 1
\end{bmatrix}
$$

dan:

$$
B=
\begin{bmatrix}
5 & 2 \\
3 & 1
\end{bmatrix}
$$

Jika:

$$
AX=B
$$

tentukan matriks $X$!

> [!success]- Klik untuk Lihat Jawaban
> Dari persamaan:
>
> $$
> AX=B
> $$
>
> diperoleh:
>
> $$
> X=A^{-1}B
> $$
>
> Hitung invers matriks $A$.
>
> $$
> \begin{aligned}
> \det(A)
> &=(2)(1)-(1)(1) \\
> &=1
> \end{aligned}
> $$
>
> Maka:
>
> $$
> A^{-1}
> =
> \begin{bmatrix}
> 1 & -1 \\
> -1 & 2
> \end{bmatrix}
> $$
>
> Selanjutnya:
>
> $$
> \begin{aligned}
> X
> &=A^{-1}B \\
> &=
> \begin{bmatrix}
> 1 & -1 \\
> -1 & 2
> \end{bmatrix}
> \begin{bmatrix}
> 5 & 2 \\
> 3 & 1
> \end{bmatrix} \\
> &=
> \begin{bmatrix}
> (1)(5)+(-1)(3) & (1)(2)+(-1)(1) \\
> (-1)(5)+(2)(3) & (-1)(2)+(2)(1)
> \end{bmatrix} \\
> &=
> \begin{bmatrix}
> 2 & 1 \\
> 1 & 0
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> X=
> \begin{bmatrix}
> 2 & 1 \\
> 1 & 0
> \end{bmatrix}
> }
> $$

---

## Konsep Terkait

- [[Matriks/06 - Matriks Singular dan Sifat-Sifat Determinan]]
- [[Matriks/08 - Invers Matriks Ordo 3x3 dan Sifat-Sifat Invers|08 - Invers Matriks Ordo 3x3 dan Sifat-Sifat Invers]]
- [[Matriks/09 - Menyelesaikan Sistem Persamaan Linear Dua Variabel (SPLDV) dengan Matriks]]
```