---
title:
---
# Menyelesaikan Sistem Persamaan Linear Dua Variabel dengan Matriks

Sistem Persamaan Linear Dua Variabel atau SPLDV adalah sistem yang terdiri atas dua persamaan linear dengan dua variabel.

SPLDV dapat ditulis dalam bentuk persamaan matriks sehingga penyelesaiannya dapat dicari menggunakan invers matriks koefisien.

Bentuk umum SPLDV adalah:

$$
\begin{cases}
ax+by=p \\
cx+dy=q
\end{cases}
$$

dengan:

- $x$ dan $y$ sebagai variabel.
- $a$, $b$, $c$, dan $d$ sebagai koefisien.
- $p$ dan $q$ sebagai konstanta.

### 1. Mengubah SPLDV Menjadi Persamaan Matriks

SPLDV:

$$
\begin{cases}
ax+by=p \\
cx+dy=q
\end{cases}
$$

dapat diubah menjadi:

$$
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
=
\begin{bmatrix}
p \\
q
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
a & b \\
c & d
\end{bmatrix}
$$

sebagai matriks koefisien,

$$
X=
\begin{bmatrix}
x \\
y
\end{bmatrix}
$$

sebagai matriks variabel, dan:

$$
B=
\begin{bmatrix}
p \\
q
\end{bmatrix}
$$

sebagai matriks konstanta.

Jadi:

$$
AX=B
$$

berarti:

$$
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
=
\begin{bmatrix}
p \\
q
\end{bmatrix}
$$

### 2. Memeriksa Bentuk Persamaan Matriks

Perkalian matriks koefisien dengan matriks variabel menghasilkan:

$$
\begin{aligned}
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
&=
\begin{bmatrix}
ax+by \\
cx+dy
\end{bmatrix}
\end{aligned}
$$

Karena:

$$
\begin{bmatrix}
ax+by \\
cx+dy
\end{bmatrix}
=
\begin{bmatrix}
p \\
q
\end{bmatrix}
$$

maka diperoleh kembali:

$$
\begin{cases}
ax+by=p \\
cx+dy=q
\end{cases}
$$

Dengan demikian, bentuk persamaan matriks dan bentuk SPLDV menyatakan sistem yang sama.

### 3. Menentukan Matriks Variabel Menggunakan Invers

Dari persamaan:

$$
AX=B
$$

kita ingin menentukan matriks $X$.

Kalikan kedua ruas dari sebelah kiri dengan $A^{-1}$:

$$
A^{-1}AX=A^{-1}B
$$

Karena:

$$
A^{-1}A=I
$$

maka:

$$
IX=A^{-1}B
$$

Karena:

$$
IX=X
$$

diperoleh:

$$
\boxed{
X=A^{-1}B
}
$$

Dengan demikian:

$$
\boxed{
\begin{bmatrix}
x \\
y
\end{bmatrix}
=
A^{-1}
\begin{bmatrix}
p \\
q
\end{bmatrix}
}
$$

> [!important] Urutan Perkalian
> Matriks $A^{-1}$ harus dikalikan dari sebelah kiri.
>
> Bentuk yang benar:
>
> $$
> A^{-1}AX=A^{-1}B
> $$
>
> Perkalian matriks tidak dapat dipindahkan atau ditukar seperti perkalian bilangan biasa.

### 4. Syarat Penggunaan Metode Invers

Metode invers hanya dapat digunakan jika matriks koefisien $A$ mempunyai invers.

Matriks $A$ mempunyai invers apabila:

$$
\det(A)\ne 0
$$

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
\det(A)=ad-bc
$$

Metode invers dapat digunakan jika:

$$
\boxed{
ad-bc\ne 0
}
$$

Jika:

$$
ad-bc=0
$$

maka matriks koefisien bersifat singular dan tidak mempunyai invers.

Dalam kondisi tersebut, SPLDV dapat mempunyai:

- Tidak ada solusi.
- Tak hingga banyak solusi.

### 5. Rumus Penyelesaian SPLDV dengan Invers

Diketahui:

$$
\begin{cases}
ax+by=p \\
cx+dy=q
\end{cases}
$$

Bentuk matriksnya:

$$
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
=
\begin{bmatrix}
p \\
q
\end{bmatrix}
$$

Invers matriks koefisien adalah:

$$
A^{-1}
=
\frac{1}{ad-bc}
\begin{bmatrix}
d & -b \\
-c & a
\end{bmatrix}
$$

Maka:

$$
\begin{aligned}
\begin{bmatrix}
x \\
y
\end{bmatrix}
&=
A^{-1}B \\
&=
\frac{1}{ad-bc}
\begin{bmatrix}
d & -b \\
-c & a
\end{bmatrix}
\begin{bmatrix}
p \\
q
\end{bmatrix}
\end{aligned}
$$

Lakukan perkalian matriks:

$$
\begin{aligned}
\begin{bmatrix}
x \\
y
\end{bmatrix}
&=
\frac{1}{ad-bc}
\begin{bmatrix}
dp-bq \\
-a? 
\end{bmatrix}
\end{aligned}
$$

Perhitungan baris kedua harus diperhatikan:

$$
(-c)(p)+(a)(q)=-cp+aq
$$

Oleh karena itu, bentuk yang benar adalah:

$$
\boxed{
\begin{bmatrix}
x \\
y
\end{bmatrix}
=
\frac{1}{ad-bc}
\begin{bmatrix}
dp-bq \\
aq-cp
\end{bmatrix}
}
$$

Dengan demikian:

$$
\boxed{
x=\frac{dp-bq}{ad-bc}
}
$$

dan:

$$
\boxed{
y=\frac{aq-cp}{ad-bc}
}
$$

> [!note]
> Rumus langsung tersebut merupakan hasil dari perkalian invers matriks koefisien dengan matriks konstanta. Untuk memahami prosesnya, sebaiknya tetap menuliskan bentuk matriksnya terlebih dahulu.

### 6. Langkah-Langkah Menyelesaikan SPLDV dengan Matriks

Gunakan langkah berikut:

1. Susun kedua persamaan dalam urutan variabel yang sama.
2. Pastikan semua variabel berada di ruas kiri.
3. Pastikan konstanta berada di ruas kanan.
4. Bentuk matriks koefisien $A$.
5. Bentuk matriks variabel $X$.
6. Bentuk matriks konstanta $B$.
7. Hitung determinan matriks $A$.
8. Pastikan $\det(A)\ne 0$.
9. Tentukan invers matriks $A$.
10. Hitung $X=A^{-1}B$.
11. Baca nilai $x$ dan $y$ dari matriks hasil.
12. Substitusikan nilai tersebut ke persamaan awal untuk memeriksa jawaban.

### 7. Contoh Penyelesaian Lengkap

Tentukan nilai $x$ dan $y$ dari:

$$
\begin{cases}
2x+3y=8 \\
x+2y=5
\end{cases}
$$

Bentuk persamaan matriks:

$$
\begin{bmatrix}
2 & 3 \\
1 & 2
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
=
\begin{bmatrix}
8 \\
5
\end{bmatrix}
$$

Matriks koefisiennya adalah:

$$
A=
\begin{bmatrix}
2 & 3 \\
1 & 2
\end{bmatrix}
$$

Hitung determinan matriks $A$:

$$
\begin{aligned}
\det(A)
&=(2)(2)-(3)(1) \\
&=4-3 \\
&=1
\end{aligned}
$$

Karena:

$$
\det(A)=1\ne 0
$$

maka matriks $A$ mempunyai invers.

Tentukan invers matriks $A$:

$$
\begin{aligned}
A^{-1}
&=
\frac{1}{1}
\begin{bmatrix}
2 & -3 \\
-1 & 2
\end{bmatrix} \\
&=
\begin{bmatrix}
2 & -3 \\
-1 & 2
\end{bmatrix}
\end{aligned}
$$

Gunakan:

$$
X=A^{-1}B
$$

Maka:

$$
\begin{aligned}
\begin{bmatrix}
x \\
y
\end{bmatrix}
&=
\begin{bmatrix}
2 & -3 \\
-1 & 2
\end{bmatrix}
\begin{bmatrix}
8 \\
5
\end{bmatrix} \\
&=
\begin{bmatrix}
(2)(8)+(-3)(5) \\
(-1)(8)+(2)(5)
\end{bmatrix} \\
&=
\begin{bmatrix}
16-15 \\
-8+10
\end{bmatrix} \\
&=
\begin{bmatrix}
1 \\
2
\end{bmatrix}
\end{aligned}
$$

Dari kesamaan matriks:

$$
x=1
$$

dan:

$$
y=2
$$

### 8. Memeriksa Hasil Penyelesaian

Nilai yang diperoleh harus diperiksa pada kedua persamaan awal.

Diketahui:

$$
x=1
$$

dan:

$$
y=2
$$

Periksa persamaan pertama:

$$
\begin{aligned}
2x+3y
&=2(1)+3(2) \\
&=2+6 \\
&=8
\end{aligned}
$$

Periksa persamaan kedua:

$$
\begin{aligned}
x+2y
&=1+2(2) \\
&=1+4 \\
&=5
\end{aligned}
$$

Kedua persamaan terpenuhi. Jadi, penyelesaiannya benar.

### 9. Persamaan yang Belum Tersusun Rapi

Sebelum membentuk matriks, susun persamaan agar urutan variabelnya sama.

Contoh:

$$
\begin{cases}
2y+x=7 \\
3x-y=5
\end{cases}
$$

Persamaan pertama sebaiknya ditulis menjadi:

$$
x+2y=7
$$

Sehingga sistemnya menjadi:

$$
\begin{cases}
x+2y=7 \\
3x-y=5
\end{cases}
$$

Bentuk matriksnya adalah:

$$
\begin{bmatrix}
1 & 2 \\
3 & -1
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
=
\begin{bmatrix}
7 \\
5
\end{bmatrix}
$$

> [!warning]
> Urutan kolom matriks koefisien harus sesuai dengan urutan variabel pada matriks variabel.
>
> Jika:
>
> $$
> X=
> \begin{bmatrix}
> x \\
> y
> \end{bmatrix}
> $$
>
> maka kolom pertama matriks koefisien berisi koefisien $x$, sedangkan kolom kedua berisi koefisien $y$.

### 10. Koefisien yang Tidak Tertulis

Jika suatu variabel tidak mempunyai bilangan yang tertulis di depannya, koefisiennya adalah 1 atau $-1$.

Contoh:

$$
x+2y=5
$$

mempunyai koefisien:

$$
1 \text{ untuk }x
$$

dan:

$$
2 \text{ untuk }y
$$

Sementara itu:

$$
-x+3y=7
$$

mempunyai koefisien:

$$
-1 \text{ untuk }x
$$

dan:

$$
3 \text{ untuk }y
$$

Jika suatu variabel tidak muncul, koefisiennya adalah 0.

Contoh:

$$
4x=8
$$

dapat ditulis sebagai:

$$
4x+0y=8
$$

Bentuk baris matriks koefisiennya adalah:

$$
\begin{bmatrix}
4 & 0
\end{bmatrix}
$$

### 11. Kasus Determinan Sama dengan Nol

Jika:

$$
\det(A)=0
$$

maka matriks koefisien tidak mempunyai invers. Metode invers tidak dapat digunakan.

Terdapat dua kemungkinan.

#### A. Tak Hingga Banyak Solusi

Contoh:

$$
\begin{cases}
2x+4y=6 \\
x+2y=3
\end{cases}
$$

Persamaan pertama merupakan 2 kali persamaan kedua.

Kedua persamaan menggambarkan garis yang sama. Oleh karena itu, SPLDV mempunyai tak hingga banyak solusi.

Matriks koefisiennya adalah:

$$
A=
\begin{bmatrix}
2 & 4 \\
1 & 2
\end{bmatrix}
$$

Determinan matriks $A$:

$$
\begin{aligned}
\det(A)
&=(2)(2)-(4)(1) \\
&=4-4 \\
&=0
\end{aligned}
$$

#### B. Tidak Mempunyai Solusi

Contoh:

$$
\begin{cases}
2x+4y=6 \\
x+2y=4
\end{cases}
$$

Koefisien pada persamaan pertama merupakan 2 kali koefisien pada persamaan kedua, tetapi konstantanya tidak sesuai.

Jika persamaan kedua dikalikan 2, diperoleh:

$$
2x+4y=8
$$

Padahal persamaan pertama adalah:

$$
2x+4y=6
$$

Kedua persamaan tidak mungkin terpenuhi secara bersamaan. Oleh karena itu, SPLDV tidak mempunyai solusi.

> [!important]
> Jika $\det(A)=0$, jangan langsung menyimpulkan bahwa SPLDV tidak mempunyai solusi. Sistem tersebut dapat mempunyai tak hingga banyak solusi atau tidak mempunyai solusi.

### 12. Penerapan SPLDV dalam Soal Cerita

Untuk menyelesaikan soal cerita:

1. Tentukan dua besaran yang belum diketahui.
2. Nyatakan keduanya sebagai variabel.
3. Bentuk dua persamaan linear.
4. Susun persamaan dalam bentuk matriks.
5. Selesaikan menggunakan invers.
6. Tafsirkan hasil sesuai konteks soal.

Contoh:

Misalkan:

$$
x=\text{harga satu buku}
$$

dan:

$$
y=\text{harga satu pulpen}
$$

Jika diketahui:

- 2 buku dan 3 pulpen berharga Rp19.000.
- 3 buku dan 2 pulpen berharga Rp21.000.

Maka diperoleh:

$$
\begin{cases}
2x+3y=19000 \\
3x+2y=21000
\end{cases}
$$

Sistem tersebut kemudian dapat diselesaikan menggunakan metode matriks.

### 13. Kesalahan yang Sering Terjadi

> [!warning] Kesalahan yang Sering Terjadi
> - Salah menempatkan koefisien dalam matriks.
> - Urutan variabel tidak sama pada kedua persamaan.
> - Konstanta dimasukkan ke matriks koefisien.
> - Tidak memeriksa determinan matriks koefisien.
> - Menggunakan invers ketika determinannya sama dengan nol.
> - Salah membentuk adjoin matriks.
> - Mengalikan matriks dengan urutan yang salah.
> - Menganggap $X=BA^{-1}$ untuk persamaan $AX=B$.
> - Tidak memeriksa hasil pada persamaan awal.
> - Salah menafsirkan jawaban dalam soal cerita.

---

## Contoh Soal

### Contoh Soal 1

Tentukan nilai $x$ dan $y$ dari:

$$
\begin{cases}
2x+3y=8 \\
x+2y=5
\end{cases}
$$

menggunakan metode matriks!

> [!success]- Klik untuk Lihat Jawaban
> Bentuk persamaan matriks:
>
> $$
> \begin{bmatrix}
> 2 & 3 \\
> 1 & 2
> \end{bmatrix}
> \begin{bmatrix}
> x \\
> y
> \end{bmatrix}
> =
> \begin{bmatrix}
> 8 \\
> 5
> \end{bmatrix}
> $$
>
> Hitung determinan matriks koefisien:
>
> $$
> \begin{aligned}
> \det(A)
> &=(2)(2)-(3)(1) \\
> &=1
> \end{aligned}
> $$
>
> Tentukan invers:
>
> $$
> A^{-1}
> =
> \begin{bmatrix}
> 2 & -3 \\
> -1 & 2
> \end{bmatrix}
> $$
>
> Hitung:
>
> $$
> \begin{aligned}
> \begin{bmatrix}
> x \\
> y
> \end{bmatrix}
> &=
> A^{-1}B \\
> &=
> \begin{bmatrix}
> 2 & -3 \\
> -1 & 2
> \end{bmatrix}
> \begin{bmatrix}
> 8 \\
> 5
> \end{bmatrix} \\
> &=
> \begin{bmatrix}
> 16-15 \\
> -8+10
> \end{bmatrix} \\
> &=
> \begin{bmatrix}
> 1 \\
> 2
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{x=1\text{ dan }y=2}
> $$

### Contoh Soal 2

Tentukan penyelesaian dari:

$$
\begin{cases}
x+y=7 \\
2x-y=5
\end{cases}
$$

> [!success]- Klik untuk Lihat Jawaban
> Bentuk matriks:
>
> $$
> \begin{bmatrix}
> 1 & 1 \\
> 2 & -1
> \end{bmatrix}
> \begin{bmatrix}
> x \\
> y
> \end{bmatrix}
> =
> \begin{bmatrix}
> 7 \\
> 5
> \end{bmatrix}
> $$
>
> Determinan matriks koefisien:
>
> $$
> \begin{aligned}
> \det(A)
> &=(1)(-1)-(1)(2) \\
> &=-1-2 \\
> &=-3
> \end{aligned}
> $$
>
> Invers matriks koefisien:
>
> $$
> A^{-1}
> =
> -\frac{1}{3}
> \begin{bmatrix}
> -1 & -1 \\
> -2 & 1
> \end{bmatrix}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> \begin{bmatrix}
> x \\
> y
> \end{bmatrix}
> &=
> -\frac{1}{3}
> \begin{bmatrix}
> -1 & -1 \\
> -2 & 1
> \end{bmatrix}
> \begin{bmatrix}
> 7 \\
> 5
> \end{bmatrix} \\
> &=
> -\frac{1}{3}
> \begin{bmatrix}
> -7-5 \\
> -14+5
> \end{bmatrix} \\
> &=
> -\frac{1}{3}
> \begin{bmatrix}
> -12 \\
> -9
> \end{bmatrix} \\
> &=
> \begin{bmatrix}
> 4 \\
> 3
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{x=4\text{ dan }y=3}
> $$

### Contoh Soal 3

Tentukan nilai $x$ dan $y$ dari:

$$
\begin{cases}
3x-2y=4 \\
x+y=3
\end{cases}
$$

> [!success]- Klik untuk Lihat Jawaban
> Bentuk matriks:
>
> $$
> \begin{bmatrix}
> 3 & -2 \\
> 1 & 1
> \end{bmatrix}
> \begin{bmatrix}
> x \\
> y
> \end{bmatrix}
> =
> \begin{bmatrix}
> 4 \\
> 3
> \end{bmatrix}
> $$
>
> Determinan:
>
> $$
> \begin{aligned}
> \det(A)
> &=(3)(1)-(-2)(1) \\
> &=3+2 \\
> &=5
> \end{aligned}
> $$
>
> Invers matriks koefisien:
>
> $$
> A^{-1}
> =
> \frac{1}{5}
> \begin{bmatrix}
> 1 & 2 \\
> -1 & 3
> \end{bmatrix}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> \begin{bmatrix}
> x \\
> y
> \end{bmatrix}
> &=
> \frac{1}{5}
> \begin{bmatrix}
> 1 & 2 \\
> -1 & 3
> \end{bmatrix}
> \begin{bmatrix}
> 4 \\
> 3
> \end{bmatrix} \\
> &=
> \frac{1}{5}
> \begin{bmatrix}
> 4+6 \\
> -4+9
> \end{bmatrix} \\
> &=
> \frac{1}{5}
> \begin{bmatrix}
> 10 \\
> 5
> \end{bmatrix} \\
> &=
> \begin{bmatrix}
> 2 \\
> 1
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{x=2\text{ dan }y=1}
> $$

### Contoh Soal 4

Tentukan penyelesaian dari:

$$
\begin{cases}
4x-y=11 \\
2x+3y=9
\end{cases}
$$

> [!success]- Klik untuk Lihat Jawaban
> Bentuk matriks:
>
> $$
> \begin{bmatrix}
> 4 & -1 \\
> 2 & 3
> \end{bmatrix}
> \begin{bmatrix}
> x \\
> y
> \end{bmatrix}
> =
> \begin{bmatrix}
> 11 \\
> 9
> \end{bmatrix}
> $$
>
> Determinan:
>
> $$
> \begin{aligned}
> \det(A)
> &=(4)(3)-(-1)(2) \\
> &=12+2 \\
> &=14
> \end{aligned}
> $$
>
> Invers matriks koefisien:
>
> $$
> A^{-1}
> =
> \frac{1}{14}
> \begin{bmatrix}
> 3 & 1 \\
> -2 & 4
> \end{bmatrix}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> \begin{bmatrix}
> x \\
> y
> \end{bmatrix}
> &=
> \frac{1}{14}
> \begin{bmatrix}
> 3 & 1 \\
> -2 & 4
> \end{bmatrix}
> \begin{bmatrix}
> 11 \\
> 9
> \end{bmatrix} \\
> &=
> \frac{1}{14}
> \begin{bmatrix}
> 33+9 \\
> -22+36
> \end{bmatrix} \\
> &=
> \frac{1}{14}
> \begin{bmatrix}
> 42 \\
> 14
> \end{bmatrix} \\
> &=
> \begin{bmatrix}
> 3 \\
> 1
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{x=3\text{ dan }y=1}
> $$

### Contoh Soal 5

Tentukan penyelesaian dari:

$$
\begin{cases}
5x=20 \\
2x+y=11
\end{cases}
$$

menggunakan metode matriks!

> [!success]- Klik untuk Lihat Jawaban
> Persamaan pertama dapat ditulis sebagai:
>
> $$
> 5x+0y=20
> $$
>
> Bentuk matriks:
>
> $$
> \begin{bmatrix}
> 5 & 0 \\
> 2 & 1
> \end{bmatrix}
> \begin{bmatrix}
> x \\
> y
> \end{bmatrix}
> =
> \begin{bmatrix}
> 20 \\
> 11
> \end{bmatrix}
> $$
>
> Determinan:
>
> $$
> \begin{aligned}
> \det(A)
> &=(5)(1)-(0)(2) \\
> &=5
> \end{aligned}
> $$
>
> Invers matriks koefisien:
>
> $$
> A^{-1}
> =
> \frac{1}{5}
> \begin{bmatrix}
> 1 & 0 \\
> -2 & 5
> \end{bmatrix}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> \begin{bmatrix}
> x \\
> y
> \end{bmatrix}
> &=
> \frac{1}{5}
> \begin{bmatrix}
> 1 & 0 \\
> -2 & 5
> \end{bmatrix}
> \begin{bmatrix}
> 20 \\
> 11
> \end{bmatrix} \\
> &=
> \frac{1}{5}
> \begin{bmatrix}
> 20 \\
> -40+55
> \end{bmatrix} \\
> &=
> \frac{1}{5}
> \begin{bmatrix}
> 20 \\
> 15
> \end{bmatrix} \\
> &=
> \begin{bmatrix}
> 4 \\
> 3
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{x=4\text{ dan }y=3}
> $$

### Contoh Soal 6

Harga 2 buku dan 3 pulpen adalah Rp19.000. Harga 3 buku dan 2 pulpen adalah Rp21.000.

Tentukan harga satu buku dan satu pulpen menggunakan metode matriks!

> [!success]- Klik untuk Lihat Jawaban
> Misalkan:
>
> $$
> x=\text{harga satu buku}
> $$
>
> dan:
>
> $$
> y=\text{harga satu pulpen}
> $$
>
> Bentuk SPLDV:
>
> $$
> \begin{cases}
> 2x+3y=19000 \\
> 3x+2y=21000
> \end{cases}
> $$
>
> Bentuk matriks:
>
> $$
> \begin{bmatrix}
> 2 & 3 \\
> 3 & 2
> \end{bmatrix}
> \begin{bmatrix}
> x \\
> y
> \end{bmatrix}
> =
> \begin{bmatrix}
> 19000 \\
> 21000
> \end{bmatrix}
> $$
>
> Determinan:
>
> $$
> \begin{aligned}
> \det(A)
> &=(2)(2)-(3)(3) \\
> &=4-9 \\
> &=-5
> \end{aligned}
> $$
>
> Invers matriks koefisien:
>
> $$
> A^{-1}
> =
> -\frac{1}{5}
> \begin{bmatrix}
> 2 & -3 \\
> -3 & 2
> \end{bmatrix}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> \begin{bmatrix}
> x \\
> y
> \end{bmatrix}
> &=
> -\frac{1}{5}
> \begin{bmatrix}
> 2 & -3 \\
> -3 & 2
> \end{bmatrix}
> \begin{bmatrix}
> 19000 \\
> 21000
> \end{bmatrix} \\
> &=
> -\frac{1}{5}
> \begin{bmatrix}
> 38000-63000 \\
> -57000+42000
> \end{bmatrix} \\
> &=
> -\frac{1}{5}
> \begin{bmatrix}
> -25000 \\
> -15000
> \end{bmatrix} \\
> &=
> \begin{bmatrix}
> 5000 \\
> 3000
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi, harga satu buku adalah Rp5.000 dan harga satu pulpen adalah Rp3.000.

### Contoh Soal 7

Diketahui SPLDV:

$$
\begin{cases}
kx+2y=5 \\
3x+y=4
\end{cases}
$$

1. Tentukan syarat nilai $k$ agar SPLDV mempunyai satu solusi.
2. Tentukan nilai $x$ dan $y$ jika $k=2$.

> [!success]- Klik untuk Lihat Jawaban
> Matriks koefisiennya adalah:
>
> $$
> A=
> \begin{bmatrix}
> k & 2 \\
> 3 & 1
> \end{bmatrix}
> $$
>
> Determinan matriks $A$:
>
> $$
> \begin{aligned}
> \det(A)
> &=(k)(1)-(2)(3) \\
> &=k-6
> \end{aligned}
> $$
>
> Agar SPLDV mempunyai satu solusi:
>
> $$
> k-6\ne 0
> $$
>
> sehingga:
>
> $$
> \boxed{k\ne 6}
> $$
>
> Untuk $k=2$, sistemnya menjadi:
>
> $$
> \begin{cases}
> 2x+2y=5 \\
> 3x+y=4
> \end{cases}
> $$
>
> Bentuk matriks:
>
> $$
> \begin{bmatrix}
> 2 & 2 \\
> 3 & 1
> \end{bmatrix}
> \begin{bmatrix}
> x \\
> y
> \end{bmatrix}
> =
> \begin{bmatrix}
> 5 \\
> 4
> \end{bmatrix}
> $$
>
> Determinannya:
>
> $$
> \begin{aligned}
> \det(A)
> &=(2)(1)-(2)(3) \\
> &=2-6 \\
> &=-4
> \end{aligned}
> $$
>
> Inversnya:
>
> $$
> A^{-1}
> =
> -\frac{1}{4}
> \begin{bmatrix}
> 1 & -2 \\
> -3 & 2
> \end{bmatrix}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> \begin{bmatrix}
> x \\
> y
> \end{bmatrix}
> &=
> -\frac{1}{4}
> \begin{bmatrix}
> 1 & -2 \\
> -3 & 2
> \end{bmatrix}
> \begin{bmatrix}
> 5 \\
> 4
> \end{bmatrix} \\
> &=
> -\frac{1}{4}
> \begin{bmatrix}
> 5-8 \\
> -15+8
> \end{bmatrix} \\
> &=
> -\frac{1}{4}
> \begin{bmatrix}
> -3 \\
> -7
> \end{bmatrix} \\
> &=
> \begin{bmatrix}
> \frac{3}{4} \\
> \frac{7}{4}
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> x=\frac{3}{4}
> \text{ dan }
> y=\frac{7}{4}
> }
> $$

### Contoh Soal 8

Tentukan banyaknya solusi dari SPLDV berikut:

$$
\begin{cases}
2x+4y=6 \\
x+2y=3
\end{cases}
$$

> [!success]- Klik untuk Lihat Jawaban
> Matriks koefisiennya:
>
> $$
> A=
> \begin{bmatrix}
> 2 & 4 \\
> 1 & 2
> \end{bmatrix}
> $$
>
> Determinannya:
>
> $$
> \begin{aligned}
> \det(A)
> &=(2)(2)-(4)(1) \\
> &=4-4 \\
> &=0
> \end{aligned}
> $$
>
> Matriks $A$ tidak mempunyai invers.
>
> Perhatikan bahwa persamaan pertama merupakan 2 kali persamaan kedua:
>
> $$
> 2(x+2y=3)
> $$
>
> menghasilkan:
>
> $$
> 2x+4y=6
> $$
>
> Kedua persamaan menyatakan garis yang sama.
>
> Jadi, SPLDV tersebut mempunyai:
>
> $$
> \boxed{\text{tak hingga banyak solusi}}
> $$

### Contoh Soal 9

Tentukan banyaknya solusi dari:

$$
\begin{cases}
2x+4y=6 \\
x+2y=4
\end{cases}
$$

> [!success]- Klik untuk Lihat Jawaban
> Matriks koefisiennya:
>
> $$
> A=
> \begin{bmatrix}
> 2 & 4 \\
> 1 & 2
> \end{bmatrix}
> $$
>
> Determinannya:
>
> $$
> \begin{aligned}
> \det(A)
> &=(2)(2)-(4)(1) \\
> &=0
> \end{aligned}
> $$
>
> Matriks koefisien tidak mempunyai invers.
>
> Jika persamaan kedua dikalikan dengan 2:
>
> $$
> 2(x+2y=4)
> $$
>
> diperoleh:
>
> $$
> 2x+4y=8
> $$
>
> Padahal persamaan pertama menyatakan:
>
> $$
> 2x+4y=6
> $$
>
> Kedua persamaan saling bertentangan.
>
> Jadi:
>
> $$
> \boxed{\text{SPLDV tidak mempunyai solusi}}
> $$

### Contoh Soal 10

Pada sebuah pertunjukan, harga 3 tiket dewasa dan 2 tiket anak-anak adalah Rp190.000. Harga 2 tiket dewasa dan 5 tiket anak-anak adalah Rp200.000.

Tentukan harga satu tiket dewasa dan satu tiket anak-anak menggunakan metode matriks!

> [!success]- Klik untuk Lihat Jawaban
> Misalkan:
>
> $$
> x=\text{harga satu tiket dewasa}
> $$
>
> dan:
>
> $$
> y=\text{harga satu tiket anak-anak}
> $$
>
> Bentuk SPLDV:
>
> $$
> \begin{cases}
> 3x+2y=190000 \\
> 2x+5y=200000
> \end{cases}
> $$
>
> Bentuk matriks:
>
> $$
> \begin{bmatrix}
> 3 & 2 \\
> 2 & 5
> \end{bmatrix}
> \begin{bmatrix}
> x \\
> y
> \end{bmatrix}
> =
> \begin{bmatrix}
> 190000 \\
> 200000
> \end{bmatrix}
> $$
>
> Determinan:
>
> $$
> \begin{aligned}
> \det(A)
> &=(3)(5)-(2)(2) \\
> &=15-4 \\
> &=11
> \end{aligned}
> $$
>
> Invers matriks koefisien:
>
> $$
> A^{-1}
> =
> \frac{1}{11}
> \begin{bmatrix}
> 5 & -2 \\
> -2 & 3
> \end{bmatrix}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> \begin{bmatrix}
> x \\
> y
> \end{bmatrix}
> &=
> \frac{1}{11}
> \begin{bmatrix}
> 5 & -2 \\
> -2 & 3
> \end{bmatrix}
> \begin{bmatrix}
> 190000 \\
> 200000
> \end{bmatrix} \\
> &=
> \frac{1}{11}
> \begin{bmatrix}
> 950000-400000 \\
> -380000+600000
> \end{bmatrix} \\
> &=
> \frac{1}{11}
> \begin{bmatrix}
> 550000 \\
> 220000
> \end{bmatrix} \\
> &=
> \begin{bmatrix}
> 50000 \\
> 20000
> \end{bmatrix}
> \end{aligned}
> $$
>
> Jadi, harga satu tiket dewasa adalah Rp50.000 dan harga satu tiket anak-anak adalah Rp20.000.

---

## Konsep Terkait

- [[Matriks/04 - Operasi Perkalian Skalar dan Perkalian Antarmatriks]]
- [[Matriks/07 - Invers Matriks Ordo 2x2 dan Sifat-Sifat Invers]]
- [[Matriks/09 - Menyelesaikan Sistem Persamaan Linear Tiga Variabel (SPLTV) dengan Metode Cramer]]
```