---
title:
---
# Menyelesaikan Sistem Persamaan Linear Tiga Variabel dengan Metode Cramer

Sistem Persamaan Linear Tiga Variabel atau SPLTV adalah sistem yang terdiri atas tiga persamaan linear dengan tiga variabel.

Metode Cramer merupakan salah satu cara menyelesaikan SPLTV dengan memanfaatkan determinan matriks koefisien dan determinan matriks pengganti.

Metode ini digunakan untuk menentukan nilai $x$, $y$, dan $z$ secara sistematis.

### 1. Bentuk Umum SPLTV

Bentuk umum SPLTV adalah:

$$
\begin{cases}
a_1x+b_1y+c_1z=p_1 \\
a_2x+b_2y+c_2z=p_2 \\
a_3x+b_3y+c_3z=p_3
\end{cases}
$$

dengan:

- $x$, $y$, dan $z$ sebagai variabel.
- $a_1$, $a_2$, dan $a_3$ sebagai koefisien variabel $x$.
- $b_1$, $b_2$, dan $b_3$ sebagai koefisien variabel $y$.
- $c_1$, $c_2$, dan $c_3$ sebagai koefisien variabel $z$.
- $p_1$, $p_2$, dan $p_3$ sebagai konstanta.

### 2. Bentuk Matriks SPLTV

SPLTV:

$$
\begin{cases}
a_1x+b_1y+c_1z=p_1 \\
a_2x+b_2y+c_2z=p_2 \\
a_3x+b_3y+c_3z=p_3
\end{cases}
$$

dapat ditulis dalam bentuk matriks:

$$
\begin{bmatrix}
a_1 & b_1 & c_1 \\
a_2 & b_2 & c_2 \\
a_3 & b_3 & c_3
\end{bmatrix}
\begin{bmatrix}
x \\
y \\
z
\end{bmatrix}
=
\begin{bmatrix}
p_1 \\
p_2 \\
p_3
\end{bmatrix}
$$

Bentuk tersebut dapat ditulis secara ringkas sebagai:

$$
AX=B
$$

dengan:

$$
A=
\begin{bmatrix}
a_1 & b_1 & c_1 \\
a_2 & b_2 & c_2 \\
a_3 & b_3 & c_3
\end{bmatrix}
$$

sebagai matriks koefisien,

$$
X=
\begin{bmatrix}
x \\
y \\
z
\end{bmatrix}
$$

sebagai matriks variabel, dan:

$$
B=
\begin{bmatrix}
p_1 \\
p_2 \\
p_3
\end{bmatrix}
$$

sebagai matriks konstanta.

### 3. Syarat Penggunaan Metode Cramer

Metode Cramer dapat digunakan untuk memperoleh satu solusi tunggal jika determinan matriks koefisien tidak sama dengan nol.

$$
\boxed{D\ne0}
$$

Determinan utama $D$ diperoleh dari:

$$
D=
\begin{vmatrix}
a_1 & b_1 & c_1 \\
a_2 & b_2 & c_2 \\
a_3 & b_3 & c_3
\end{vmatrix}
$$

Jika:

$$
D\ne0
$$

maka SPLTV mempunyai satu solusi tunggal.

Jika:

$$
D=0
$$

maka rumus pembagian pada Metode Cramer tidak dapat digunakan karena pembagian dengan nol tidak didefinisikan.

SPLTV dengan $D=0$ dapat mempunyai:

- Tak hingga banyak solusi.
- Tidak mempunyai solusi.

> [!important] Syarat Utama
> Sebelum menghitung $D_x$, $D_y$, dan $D_z$, hitunglah determinan utama $D$ terlebih dahulu.
>
> Jika $D\ne0$, Metode Cramer dapat digunakan untuk menentukan solusi tunggal.

### 4. Menentukan Determinan Utama $D$

Determinan utama dibentuk dari seluruh koefisien variabel $x$, $y$, dan $z$.

Untuk SPLTV:

$$
\begin{cases}
a_1x+b_1y+c_1z=p_1 \\
a_2x+b_2y+c_2z=p_2 \\
a_3x+b_3y+c_3z=p_3
\end{cases}
$$

diperoleh:

$$
\boxed{
D=
\begin{vmatrix}
a_1 & b_1 & c_1 \\
a_2 & b_2 & c_2 \\
a_3 & b_3 & c_3
\end{vmatrix}
}
$$

Kolom pertama berisi koefisien $x$.

Kolom kedua berisi koefisien $y$.

Kolom ketiga berisi koefisien $z$.

### 5. Menentukan Determinan $D_x$

Untuk membentuk $D_x$, ganti kolom koefisien $x$ dengan kolom konstanta.

Kolom koefisien $y$ dan $z$ tetap.

$$
\boxed{
D_x=
\begin{vmatrix}
p_1 & b_1 & c_1 \\
p_2 & b_2 & c_2 \\
p_3 & b_3 & c_3
\end{vmatrix}
}
$$

### 6. Menentukan Determinan $D_y$

Untuk membentuk $D_y$, ganti kolom koefisien $y$ dengan kolom konstanta.

Kolom koefisien $x$ dan $z$ tetap.

$$
\boxed{
D_y=
\begin{vmatrix}
a_1 & p_1 & c_1 \\
a_2 & p_2 & c_2 \\
a_3 & p_3 & c_3
\end{vmatrix}
}
$$

### 7. Menentukan Determinan $D_z$

Untuk membentuk $D_z$, ganti kolom koefisien $z$ dengan kolom konstanta.

Kolom koefisien $x$ dan $y$ tetap.

$$
\boxed{
D_z=
\begin{vmatrix}
a_1 & b_1 & p_1 \\
a_2 & b_2 & p_2 \\
a_3 & b_3 & p_3
\end{vmatrix}
}
$$

> [!warning] Posisi Kolom Pengganti
> - Pada $D_x$, kolom pertama diganti.
> - Pada $D_y$, kolom kedua diganti.
> - Pada $D_z$, kolom ketiga diganti.
>
> Kolom yang tidak diganti harus tetap berada pada posisi semula.

### 8. Rumus Metode Cramer

Jika:

$$
D\ne0
$$

maka nilai masing-masing variabel adalah:

$$
\boxed{
x=\frac{D_x}{D}
}
$$

$$
\boxed{
y=\frac{D_y}{D}
}
$$

dan:

$$
\boxed{
z=\frac{D_z}{D}
}
$$

Ketiga rumus tersebut dapat ditulis sebagai:

$$
\boxed{
x=\frac{D_x}{D},
\qquad
y=\frac{D_y}{D},
\qquad
z=\frac{D_z}{D}
}
$$

### 9. Ringkasan Susunan Determinan Cramer

Untuk mempermudah mengingat posisi kolom, perhatikan tabel berikut.

| Determinan | Kolom pertama | Kolom kedua | Kolom ketiga |
|---|---|---|---|
| $D$ | Koefisien $x$ | Koefisien $y$ | Koefisien $z$ |
| $D_x$ | Konstanta | Koefisien $y$ | Koefisien $z$ |
| $D_y$ | Koefisien $x$ | Konstanta | Koefisien $z$ |
| $D_z$ | Koefisien $x$ | Koefisien $y$ | Konstanta |

### 10. Menghitung Determinan dengan Metode Sarrus

Determinan matriks ordo $3 \times 3$ dapat dihitung menggunakan Metode Sarrus.

Misalkan:

$$
A=
\begin{bmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{bmatrix}
$$

Maka:

$$
\det(A)
=
(aei+bfg+cdh)
-
(ceg+afh+bdi)
$$

atau:

$$
\boxed{
\det(A)
=
aei+bfg+cdh-ceg-afh-bdi
}
$$

Langkah Metode Sarrus:

1. Salin dua kolom pertama ke sebelah kanan.
2. Hitung tiga hasil kali diagonal dari kiri atas menuju kanan bawah.
3. Hitung tiga hasil kali diagonal dari kanan atas menuju kiri bawah.
4. Kurangkan jumlah diagonal kedua dari jumlah diagonal pertama.

> [!note]
> Penjelasan lebih lengkap mengenai Metode Sarrus terdapat pada materi determinan matriks ordo $3 \times 3$.

### 11. Langkah-Langkah Metode Cramer

Gunakan langkah berikut untuk menyelesaikan SPLTV.

1. Susun semua persamaan dalam urutan variabel $x$, $y$, dan $z$.
2. Pindahkan seluruh variabel ke ruas kiri.
3. Pindahkan seluruh konstanta ke ruas kanan.
4. Bentuk matriks koefisien.
5. Hitung determinan utama $D$.
6. Pastikan $D\ne0$.
7. Bentuk dan hitung $D_x$.
8. Bentuk dan hitung $D_y$.
9. Bentuk dan hitung $D_z$.
10. Hitung $x=\frac{D_x}{D}$.
11. Hitung $y=\frac{D_y}{D}$.
12. Hitung $z=\frac{D_z}{D}$.
13. Substitusikan hasilnya ke persamaan awal.

### 12. Contoh Penyelesaian Lengkap

Tentukan penyelesaian dari:

$$
\begin{cases}
2x+y-z=1 \\
x-y+2z=5 \\
3x+2y+z=10
\end{cases}
$$

#### Langkah 1: Menentukan $D$

Matriks koefisiennya adalah:

$$
A=
\begin{bmatrix}
2 & 1 & -1 \\
1 & -1 & 2 \\
3 & 2 & 1
\end{bmatrix}
$$

Determinan utama:

$$
D=
\begin{vmatrix}
2 & 1 & -1 \\
1 & -1 & 2 \\
3 & 2 & 1
\end{vmatrix}
$$

Gunakan Metode Sarrus:

$$
\begin{aligned}
D
&=
(2)(-1)(1)
+(1)(2)(3)
+(-1)(1)(2)
\\
&\quad
-(-1)(-1)(3)
-(2)(2)(2)
-(1)(1)(1)
\\
&=-2+6-2-3-8-1
\\
&=-10
\end{aligned}
$$

Karena:

$$
D=-10\ne0
$$

maka SPLTV mempunyai satu solusi tunggal.

#### Langkah 2: Menentukan $D_x$

Ganti kolom koefisien $x$ dengan kolom konstanta.

$$
D_x=
\begin{vmatrix}
1 & 1 & -1 \\
5 & -1 & 2 \\
10 & 2 & 1
\end{vmatrix}
$$

$$
\begin{aligned}
D_x
&=
(1)(-1)(1)
+(1)(2)(10)
+(-1)(5)(2)
\\
&\quad
-(-1)(-1)(10)
-(1)(2)(2)
-(1)(5)(1)
\\
&=-1+20-10-10-4-5
\\
&=-10
\end{aligned}
$$

#### Langkah 3: Menentukan $D_y$

Ganti kolom koefisien $y$ dengan kolom konstanta.

$$
D_y=
\begin{vmatrix}
2 & 1 & -1 \\
1 & 5 & 2 \\
3 & 10 & 1
\end{vmatrix}
$$

$$
\begin{aligned}
D_y
&=
(2)(5)(1)
+(1)(2)(3)
+(-1)(1)(10)
\\
&\quad
-(-1)(5)(3)
-(2)(2)(10)
-(1)(1)(1)
\\
&=10+6-10+15-40-1
\\
&=-20
\end{aligned}
$$

#### Langkah 4: Menentukan $D_z$

Ganti kolom koefisien $z$ dengan kolom konstanta.

$$
D_z=
\begin{vmatrix}
2 & 1 & 1 \\
1 & -1 & 5 \\
3 & 2 & 10
\end{vmatrix}
$$

$$
\begin{aligned}
D_z
&=
(2)(-1)(10)
+(1)(5)(3)
+(1)(1)(2)
\\
&\quad
-(1)(-1)(3)
-(2)(5)(2)
-(1)(1)(10)
\\
&=-20+15+2+3-20-10
\\
&=-30
\end{aligned}
$$

#### Langkah 5: Menentukan Nilai Variabel

$$
\begin{aligned}
x
&=
\frac{D_x}{D}
\\
&=
\frac{-10}{-10}
\\
&=1
\end{aligned}
$$

$$
\begin{aligned}
y
&=
\frac{D_y}{D}
\\
&=
\frac{-20}{-10}
\\
&=2
\end{aligned}
$$

$$
\begin{aligned}
z
&=
\frac{D_z}{D}
\\
&=
\frac{-30}{-10}
\\
&=3
\end{aligned}
$$

Jadi:

$$
\boxed{x=1,\qquad y=2,\qquad z=3}
$$

### 13. Memeriksa Hasil Penyelesaian

Diperoleh:

$$
x=1,
\qquad
y=2,
\qquad
z=3
$$

Periksa persamaan pertama:

$$
\begin{aligned}
2x+y-z
&=2(1)+2-3
\\
&=1
\end{aligned}
$$

Periksa persamaan kedua:

$$
\begin{aligned}
x-y+2z
&=1-2+2(3)
\\
&=5
\end{aligned}
$$

Periksa persamaan ketiga:

$$
\begin{aligned}
3x+2y+z
&=3(1)+2(2)+3
\\
&=10
\end{aligned}
$$

Ketiga persamaan terpenuhi. Jadi, solusi tersebut benar.

### 14. Persamaan yang Belum Tersusun Rapi

Sebelum membentuk determinan, susun semua persamaan dalam urutan variabel yang sama.

Contoh:

$$
\begin{cases}
2y+x-z=4 \\
3z+2x-y=7 \\
y+4x+2z=10
\end{cases}
$$

Susun kembali dalam urutan $x$, $y$, dan $z$:

$$
\begin{cases}
x+2y-z=4 \\
2x-y+3z=7 \\
4x+y+2z=10
\end{cases}
$$

Matriks koefisiennya adalah:

$$
\begin{bmatrix}
1 & 2 & -1 \\
2 & -1 & 3 \\
4 & 1 & 2
\end{bmatrix}
$$

> [!warning]
> Urutan kolom harus sama dengan urutan variabel.
>
> Jika urutan variabelnya:
>
> $$
> x,\ y,\ z
> $$
>
> maka kolom pertama harus berisi koefisien $x$, kolom kedua koefisien $y$, dan kolom ketiga koefisien $z$.

### 15. Variabel yang Tidak Muncul

Jika suatu variabel tidak muncul dalam persamaan, koefisiennya adalah 0.

Contoh:

$$
2x+y=4
$$

dapat ditulis sebagai:

$$
2x+y+0z=4
$$

Baris koefisiennya adalah:

$$
\begin{bmatrix}
2 & 1 & 0
\end{bmatrix}
$$

Persamaan:

$$
x+3z=10
$$

dapat ditulis sebagai:

$$
x+0y+3z=10
$$

Baris koefisiennya adalah:

$$
\begin{bmatrix}
1 & 0 & 3
\end{bmatrix}
$$

### 16. Kasus $D=0$

Jika:

$$
D=0
$$

maka rumus:

$$
x=\frac{D_x}{D},
\qquad
y=\frac{D_y}{D},
\qquad
z=\frac{D_z}{D}
$$

tidak dapat digunakan.

Terdapat dua kemungkinan.

#### A. Tak Hingga Banyak Solusi

Contoh:

$$
\begin{cases}
x+y+z=6 \\
2x+2y+2z=12 \\
x-y+z=2
\end{cases}
$$

Persamaan kedua merupakan 2 kali persamaan pertama.

Sistem tersebut hanya mempunyai dua persamaan yang saling bebas untuk tiga variabel. Oleh karena itu, terdapat satu variabel bebas dan SPLTV mempunyai tak hingga banyak solusi.

#### B. Tidak Mempunyai Solusi

Contoh:

$$
\begin{cases}
x+y+z=6 \\
2x+2y+2z=15 \\
x-y+z=2
\end{cases}
$$

Jika persamaan pertama dikalikan 2, diperoleh:

$$
2x+2y+2z=12
$$

Namun, persamaan kedua menyatakan:

$$
2x+2y+2z=15
$$

Kedua persamaan saling bertentangan. Oleh karena itu, SPLTV tidak mempunyai solusi.

> [!important]
> Nilai $D=0$ tidak selalu berarti tidak ada solusi. Sistem dapat mempunyai tak hingga banyak solusi atau tidak mempunyai solusi.

### 17. Penerapan Metode Cramer dalam Soal Cerita

Untuk menyelesaikan soal cerita:

1. Tentukan tiga besaran yang belum diketahui.
2. Nyatakan ketiga besaran tersebut sebagai $x$, $y$, dan $z$.
3. Bentuk tiga persamaan linear.
4. Susun matriks koefisien dan konstanta.
5. Hitung $D$, $D_x$, $D_y$, dan $D_z$.
6. Tentukan nilai setiap variabel.
7. Tafsirkan hasil sesuai konteks soal.

### 18. Kesalahan yang Sering Terjadi

> [!warning] Kesalahan yang Sering Terjadi
> - Tidak menyusun variabel dalam urutan yang sama.
> - Salah memasukkan koefisien negatif.
> - Menganggap variabel yang tidak muncul tidak mempunyai tempat dalam matriks.
> - Salah mengganti kolom ketika membentuk $D_x$, $D_y$, atau $D_z$.
> - Mengganti lebih dari satu kolom.
> - Memindahkan kolom yang tidak diganti.
> - Salah menghitung determinan menggunakan Metode Sarrus.
> - Tetap menggunakan rumus Cramer ketika $D=0$.
> - Tidak memeriksa jawaban pada persamaan awal.

---

## Contoh Soal

### Contoh Soal 1

Diketahui:

$$
D=4,
\qquad
D_x=8,
\qquad
D_y=-12,
\qquad
D_z=20
$$

Tentukan nilai $x$, $y$, dan $z$!

> [!success]- Klik untuk Lihat Jawaban
> Gunakan rumus Metode Cramer.
>
> $$
> \begin{aligned}
> x
> &=
> \frac{D_x}{D}
> \\
> &=
> \frac{8}{4}
> \\
> &=2
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> y
> &=
> \frac{D_y}{D}
> \\
> &=
> \frac{-12}{4}
> \\
> &=-3
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> z
> &=
> \frac{D_z}{D}
> \\
> &=
> \frac{20}{4}
> \\
> &=5
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{x=2,\qquad y=-3,\qquad z=5}
> $$

### Contoh Soal 2

Diketahui SPLTV:

$$
\begin{cases}
x+2y-z=4 \\
2x-y+3z=9 \\
3x+y+2z=10
\end{cases}
$$

Tuliskan bentuk $D$, $D_x$, $D_y$, dan $D_z$ tanpa menghitung nilainya!

> [!success]- Klik untuk Lihat Jawaban
> Determinan utama:
>
> $$
> D=
> \begin{vmatrix}
> 1 & 2 & -1 \\
> 2 & -1 & 3 \\
> 3 & 1 & 2
> \end{vmatrix}
> $$
>
> Untuk $D_x$, ganti kolom pertama dengan kolom konstanta:
>
> $$
> D_x=
> \begin{vmatrix}
> 4 & 2 & -1 \\
> 9 & -1 & 3 \\
> 10 & 1 & 2
> \end{vmatrix}
> $$
>
> Untuk $D_y$, ganti kolom kedua dengan kolom konstanta:
>
> $$
> D_y=
> \begin{vmatrix}
> 1 & 4 & -1 \\
> 2 & 9 & 3 \\
> 3 & 10 & 2
> \end{vmatrix}
> $$
>
> Untuk $D_z$, ganti kolom ketiga dengan kolom konstanta:
>
> $$
> D_z=
> \begin{vmatrix}
> 1 & 2 & 4 \\
> 2 & -1 & 9 \\
> 3 & 1 & 10
> \end{vmatrix}
> $$

### Contoh Soal 3

Tentukan nilai $x$, $y$, dan $z$ dari:

$$
\begin{cases}
x+y+z=6 \\
2x+y+z=7 \\
x+2y+z=8
\end{cases}
$$

> [!success]- Klik untuk Lihat Jawaban
> Determinan utama:
>
> $$
> D=
> \begin{vmatrix}
> 1 & 1 & 1 \\
> 2 & 1 & 1 \\
> 1 & 2 & 1
> \end{vmatrix}
> $$
>
> $$
> \begin{aligned}
> D
> &=
> (1)(1)(1)
> +(1)(1)(1)
> +(1)(2)(2)
> \\
> &\quad
> -(1)(1)(1)
> -(1)(1)(2)
> -(1)(2)(1)
> \\
> &=1+1+4-1-2-2
> \\
> &=1
> \end{aligned}
> $$
>
> Determinan $D_x$:
>
> $$
> D_x=
> \begin{vmatrix}
> 6 & 1 & 1 \\
> 7 & 1 & 1 \\
> 8 & 2 & 1
> \end{vmatrix}
> $$
>
> $$
> D_x=1
> $$
>
> Determinan $D_y$:
>
> $$
> D_y=
> \begin{vmatrix}
> 1 & 6 & 1 \\
> 2 & 7 & 1 \\
> 1 & 8 & 1
> \end{vmatrix}
> $$
>
> $$
> D_y=2
> $$
>
> Determinan $D_z$:
>
> $$
> D_z=
> \begin{vmatrix}
> 1 & 1 & 6 \\
> 2 & 1 & 7 \\
> 1 & 2 & 8
> \end{vmatrix}
> $$
>
> $$
> D_z=3
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> x
> &=
> \frac{D_x}{D}
> \\
> &=
> \frac{1}{1}
> \\
> &=1
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> y
> &=
> \frac{D_y}{D}
> \\
> &=
> \frac{2}{1}
> \\
> &=2
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> z
> &=
> \frac{D_z}{D}
> \\
> &=
> \frac{3}{1}
> \\
> &=3
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{x=1,\qquad y=2,\qquad z=3}
> $$

### Contoh Soal 4

Tentukan penyelesaian dari:

$$
\begin{cases}
x-2y+z=4 \\
2x+y-z=1 \\
-x+3y+2z=9
\end{cases}
$$

> [!success]- Klik untuk Lihat Jawaban
> Determinan utama:
>
> $$
> D=
> \begin{vmatrix}
> 1 & -2 & 1 \\
> 2 & 1 & -1 \\
> -1 & 3 & 2
> \end{vmatrix}
> $$
>
> Dengan Metode Sarrus diperoleh:
>
> $$
> D=18
> $$
>
> Determinan pengganti:
>
> $$
> D_x=
> \begin{vmatrix}
> 4 & -2 & 1 \\
> 1 & 1 & -1 \\
> 9 & 3 & 2
> \end{vmatrix}
> =36
> $$
>
> $$
> D_y=
> \begin{vmatrix}
> 1 & 4 & 1 \\
> 2 & 1 & -1 \\
> -1 & 9 & 2
> \end{vmatrix}
> =18
> $$
>
> $$
> D_z=
> \begin{vmatrix}
> 1 & -2 & 4 \\
> 2 & 1 & 1 \\
> -1 & 3 & 9
> \end{vmatrix}
> =72
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> x
> &=
> \frac{36}{18}
> \\
> &=2
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> y
> &=
> \frac{18}{18}
> \\
> &=1
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> z
> &=
> \frac{72}{18}
> \\
> &=4
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{x=2,\qquad y=1,\qquad z=4}
> $$

### Contoh Soal 5

Tentukan penyelesaian dari:

$$
\begin{cases}
2x+y=4 \\
x+3z=10 \\
y+2z=8
\end{cases}
$$

> [!success]- Klik untuk Lihat Jawaban
> Lengkapi koefisien variabel yang tidak muncul.
>
> $$
> \begin{cases}
> 2x+y+0z=4 \\
> x+0y+3z=10 \\
> 0x+y+2z=8
> \end{cases}
> $$
>
> Determinan utama:
>
> $$
> D=
> \begin{vmatrix}
> 2 & 1 & 0 \\
> 1 & 0 & 3 \\
> 0 & 1 & 2
> \end{vmatrix}
> =-8
> $$
>
> Determinan pengganti:
>
> $$
> D_x=-8,
> \qquad
> D_y=-16,
> \qquad
> D_z=-24
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> x
> &=
> \frac{-8}{-8}
> \\
> &=1
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> y
> &=
> \frac{-16}{-8}
> \\
> &=2
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> z
> &=
> \frac{-24}{-8}
> \\
> &=3
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{x=1,\qquad y=2,\qquad z=3}
> $$

### Contoh Soal 6

Tentukan penyelesaian dari:

$$
\begin{cases}
2x+y+z=5 \\
x+2y+3z=8 \\
3x-y+2z=4
\end{cases}
$$

> [!success]- Klik untuk Lihat Jawaban
> Determinan utama:
>
> $$
> D=
> \begin{vmatrix}
> 2 & 1 & 1 \\
> 1 & 2 & 3 \\
> 3 & -1 & 2
> \end{vmatrix}
> =14
> $$
>
> Determinan pengganti:
>
> $$
> D_x=15,
> \qquad
> D_y=23,
> \qquad
> D_z=17
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> x
> &=
> \frac{15}{14}
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> y
> &=
> \frac{23}{14}
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> z
> &=
> \frac{17}{14}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> x=\frac{15}{14},
> \qquad
> y=\frac{23}{14},
> \qquad
> z=\frac{17}{14}
> }
> $$

### Contoh Soal 7

Diketahui SPLTV:

$$
\begin{cases}
kx+y+z=p_1 \\
x+ky+z=p_2 \\
x+y+kz=p_3
\end{cases}
$$

Tentukan syarat nilai $k$ agar SPLTV mempunyai satu solusi tunggal!

> [!success]- Klik untuk Lihat Jawaban
> Matriks koefisiennya adalah:
>
> $$
> A=
> \begin{bmatrix}
> k & 1 & 1 \\
> 1 & k & 1 \\
> 1 & 1 & k
> \end{bmatrix}
> $$
>
> Determinannya:
>
> $$
> \begin{aligned}
> D
> &=
> k^3+1+1-k-k-k
> \\
> &=k^3-3k+2
> \end{aligned}
> $$
>
> Faktorkan:
>
> $$
> \begin{aligned}
> k^3-3k+2
> &=(k-1)^2(k+2)
> \end{aligned}
> $$
>
> Agar SPLTV mempunyai satu solusi tunggal:
>
> $$
> D\ne0
> $$
>
> sehingga:
>
> $$
> (k-1)^2(k+2)\ne0
> $$
>
> Oleh karena itu:
>
> $$
> k\ne1
> $$
>
> dan:
>
> $$
> k\ne-2
> $$
>
> Jadi:
>
> $$
> \boxed{k\ne1\text{ dan }k\ne-2}
> $$

### Contoh Soal 8

Tentukan banyaknya solusi dari:

$$
\begin{cases}
x+y+z=6 \\
2x+2y+2z=12 \\
x-y+z=2
\end{cases}
$$

> [!success]- Klik untuk Lihat Jawaban
> Determinan matriks koefisien adalah:
>
> $$
> D=
> \begin{vmatrix}
> 1 & 1 & 1 \\
> 2 & 2 & 2 \\
> 1 & -1 & 1
> \end{vmatrix}
> $$
>
> Baris kedua merupakan 2 kali baris pertama. Oleh karena itu:
>
> $$
> D=0
> $$
>
> Persamaan kedua juga merupakan 2 kali persamaan pertama:
>
> $$
> 2(x+y+z=6)
> $$
>
> menghasilkan:
>
> $$
> 2x+2y+2z=12
> $$
>
> Tidak terdapat pertentangan antar-persamaan. Namun, hanya terdapat dua persamaan bebas untuk tiga variabel.
>
> Jadi:
>
> $$
> \boxed{\text{SPLTV mempunyai tak hingga banyak solusi}}
> $$

### Contoh Soal 9

Tentukan banyaknya solusi dari:

$$
\begin{cases}
x+y+z=6 \\
2x+2y+2z=15 \\
x-y+z=2
\end{cases}
$$

> [!success]- Klik untuk Lihat Jawaban
> Matriks koefisiennya sama dengan soal sebelumnya sehingga:
>
> $$
> D=0
> $$
>
> Jika persamaan pertama dikalikan dengan 2:
>
> $$
> 2(x+y+z=6)
> $$
>
> diperoleh:
>
> $$
> 2x+2y+2z=12
> $$
>
> Namun, persamaan kedua menyatakan:
>
> $$
> 2x+2y+2z=15
> $$
>
> Kedua persamaan saling bertentangan.
>
> Jadi:
>
> $$
> \boxed{\text{SPLTV tidak mempunyai solusi}}
> $$

### Contoh Soal 10

Harga 2 buku, 1 pulpen, dan 1 penggaris adalah Rp13.000.

Harga 1 buku, 2 pulpen, dan 1 penggaris adalah Rp12.000.

Harga 1 buku, 1 pulpen, dan 2 penggaris adalah Rp11.000.

Tentukan harga masing-masing barang menggunakan Metode Cramer!

> [!success]- Klik untuk Lihat Jawaban
> Misalkan:
>
> $$
> x=\text{harga satu buku}
> $$
>
> $$
> y=\text{harga satu pulpen}
> $$
>
> $$
> z=\text{harga satu penggaris}
> $$
>
> Bentuk SPLTV:
>
> $$
> \begin{cases}
> 2x+y+z=13000 \\
> x+2y+z=12000 \\
> x+y+2z=11000
> \end{cases}
> $$
>
> Determinan utama:
>
> $$
> D=
> \begin{vmatrix}
> 2 & 1 & 1 \\
> 1 & 2 & 1 \\
> 1 & 1 & 2
> \end{vmatrix}
> =4
> $$
>
> Determinan $D_x$:
>
> $$
> D_x=
> \begin{vmatrix}
> 13000 & 1 & 1 \\
> 12000 & 2 & 1 \\
> 11000 & 1 & 2
> \end{vmatrix}
> =16000
> $$
>
> Determinan $D_y$:
>
> $$
> D_y=
> \begin{vmatrix}
> 2 & 13000 & 1 \\
> 1 & 12000 & 1 \\
> 1 & 11000 & 2
> \end{vmatrix}
> =12000
> $$
>
> Determinan $D_z$:
>
> $$
> D_z=
> \begin{vmatrix}
> 2 & 1 & 13000 \\
> 1 & 2 & 12000 \\
> 1 & 1 & 11000
> \end{vmatrix}
> =8000
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> x
> &=
> \frac{16000}{4}
> \\
> &=4000
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> y
> &=
> \frac{12000}{4}
> \\
> &=3000
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> z
> &=
> \frac{8000}{4}
> \\
> &=2000
> \end{aligned}
> $$
>
> Jadi, harga satu buku adalah Rp4.000, harga satu pulpen adalah Rp3.000, dan harga satu penggaris adalah Rp2.000.

---

## Konsep Terkait

- [[Matriks/05 - Determinan Matriks Ordo 2x2 dan 3x3]]
- [[Matriks/09 - Menyelesaikan Sistem Persamaan Linear Dua Variabel (SPLDV) dengan Matriks]]
```