---
title:
---
# Invers Matriks Ordo $3 \times 3$

Pada materi sebelumnya, invers matriks ordo $2 \times 2$ dapat ditentukan menggunakan rumus:

$$
A^{-1}
=
\frac{1}{\det(A)}
\operatorname{adj}(A)
$$

Rumus yang sama juga berlaku untuk matriks ordo $3 \times 3$.

Namun, menentukan adjoin matriks ordo $3 \times 3$ membutuhkan beberapa langkah tambahan, yaitu menentukan **minor**, **kofaktor**, dan **matriks kofaktor** terlebih dahulu.

Secara umum:

$$
\boxed{
A^{-1}
=
\frac{1}{\det(A)}
\operatorname{adj}(A)
}
$$

dengan syarat:

$$
\boxed{
\det(A)\ne0
}
$$

> [!important]
> Matriks ordo $3 \times 3$ mempunyai invers jika dan hanya jika determinannya tidak sama dengan nol.

---

## 1. Bentuk Umum Matriks Ordo $3 \times 3$

Misalkan:

$$
A=
\begin{bmatrix}
a & b & c\\
d & e & f\\
g & h & i
\end{bmatrix}
$$

Untuk menentukan $A^{-1}$, kita perlu melakukan langkah berikut:

1. Menghitung $\det(A)$.
2. Menentukan minor setiap elemen.
3. Menentukan kofaktor setiap elemen.
4. Membentuk matriks kofaktor.
5. Menentukan adjoin dengan mentranspose matriks kofaktor.
6. Menggunakan rumus invers.

Hubungan langkah-langkah tersebut dapat ditulis:

$$
A
\longrightarrow
\text{Minor}
\longrightarrow
\text{Kofaktor}
\longrightarrow
\text{Matriks Kofaktor}
\longrightarrow
\operatorname{adj}(A)
\longrightarrow
A^{-1}
$$

---

# 2. Minor Matriks

Minor suatu elemen diperoleh dengan menghapus baris dan kolom tempat elemen tersebut berada, kemudian menghitung determinan matriks yang tersisa.

Minor elemen $a_{ij}$ ditulis:

$$
M_{ij}
$$

Misalkan:

$$
A=
\begin{bmatrix}
a & b & c\\
d & e & f\\
g & h & i
\end{bmatrix}
$$

### Minor $M_{11}$

Elemen $a_{11}=a$ berada pada baris pertama dan kolom pertama.

Hapus baris pertama dan kolom pertama:

$$
\begin{bmatrix}
\cancel{a} & \cancel{b} & \cancel{c}\\
\cancel{d} & e & f\\
\cancel{g} & h & i
\end{bmatrix}
$$

Matriks yang tersisa:

$$
\begin{bmatrix}
e & f\\
h & i
\end{bmatrix}
$$

Sehingga:

$$
\begin{aligned}
M_{11}
&=
\begin{vmatrix}
e & f\\
h & i
\end{vmatrix}\\
&=ei-fh
\end{aligned}
$$

### Minor $M_{12}$

Hapus baris pertama dan kolom kedua:

$$
M_{12}
=
\begin{vmatrix}
d & f\\
g & i
\end{vmatrix}
$$

Sehingga:

$$
M_{12}=di-fg
$$

### Minor $M_{13}$

Hapus baris pertama dan kolom ketiga:

$$
M_{13}
=
\begin{vmatrix}
d & e\\
g & h
\end{vmatrix}
$$

Sehingga:

$$
M_{13}=dh-eg
$$

Dengan cara yang sama, diperoleh sembilan minor:

$$
\begin{aligned}
M_{11}&=ei-fh\\
M_{12}&=di-fg\\
M_{13}&=dh-eg\\
M_{21}&=bi-ch\\
M_{22}&=ai-cg\\
M_{23}&=ah-bg\\
M_{31}&=bf-ce\\
M_{32}&=af-cd\\
M_{33}&=ae-bd
\end{aligned}
$$

> [!important]
> Nomor pertama menunjukkan **baris**, sedangkan nomor kedua menunjukkan **kolom**.
>
> Sebagai contoh:
>
> $$
> M_{23}
> $$
>
> berarti menghapus baris ke-$2$ dan kolom ke-$3$.

---

# 3. Kofaktor Matriks

Kofaktor diperoleh dari minor dengan memperhatikan tanda positif dan negatif.

Kofaktor elemen $a_{ij}$ didefinisikan sebagai:

$$
\boxed{
C_{ij}=(-1)^{i+j}M_{ij}
}
$$

Pola tanda kofaktor matriks ordo $3 \times 3$ adalah:

$$
\boxed{
\begin{bmatrix}
+ & - & +\\
- & + & -\\
+ & - & +
\end{bmatrix}
}
$$

Pola tersebut penting untuk diingat.

Dengan demikian:

$$
\begin{aligned}
C_{11}&=+M_{11}\\
C_{12}&=-M_{12}\\
C_{13}&=+M_{13}\\
C_{21}&=-M_{21}\\
C_{22}&=+M_{22}\\
C_{23}&=-M_{23}\\
C_{31}&=+M_{31}\\
C_{32}&=-M_{32}\\
C_{33}&=+M_{33}
\end{aligned}
$$

> [!warning] Kesalahan yang Sering Terjadi
> Minor dan kofaktor bukan hal yang sama.
>
> Minor hanya merupakan determinan setelah suatu baris dan kolom dihapus.
>
> Kofaktor diperoleh dari:
>
> $$
> C_{ij}=(-1)^{i+j}M_{ij}
> $$
>
> Jadi, beberapa minor harus diubah tandanya ketika menjadi kofaktor.

---

# 4. Matriks Kofaktor

Setelah seluruh kofaktor diperoleh, susun kofaktor-kofaktor tersebut sesuai posisi asalnya.

Matriks kofaktor dari $A$ adalah:

$$
C=
\begin{bmatrix}
C_{11} & C_{12} & C_{13}\\
C_{21} & C_{22} & C_{23}\\
C_{31} & C_{32} & C_{33}
\end{bmatrix}
$$

Untuk:

$$
A=
\begin{bmatrix}
a & b & c\\
d & e & f\\
g & h & i
\end{bmatrix}
$$

matriks kofaktornya adalah:

$$
C=
\begin{bmatrix}
ei-fh & -(di-fg) & dh-eg\\
-(bi-ch) & ai-cg & -(ah-bg)\\
bf-ce & -(af-cd) & ae-bd
\end{bmatrix}
$$

---

# 5. Adjoin Matriks Ordo $3 \times 3$

Adjoin atau adjugat matriks diperoleh dengan mentranspose matriks kofaktor.

$$
\boxed{
\operatorname{adj}(A)=C^T
}
$$

Jika:

$$
C=
\begin{bmatrix}
C_{11} & C_{12} & C_{13}\\
C_{21} & C_{22} & C_{23}\\
C_{31} & C_{32} & C_{33}
\end{bmatrix}
$$

maka:

$$
\operatorname{adj}(A)
=
\begin{bmatrix}
C_{11} & C_{21} & C_{31}\\
C_{12} & C_{22} & C_{32}\\
C_{13} & C_{23} & C_{33}
\end{bmatrix}
$$

> [!warning] Perhatikan Transpose
> Matriks kofaktor **belum merupakan adjoin**.
>
> Matriks kofaktor harus ditranspose terlebih dahulu.
>
> $$
> \boxed{
> \operatorname{adj}(A)
> =
> (\text{matriks kofaktor})^T
> }
> $$

---

# 6. Rumus Invers Matriks Ordo $3 \times 3$

Setelah determinan dan adjoin diketahui, invers dapat dihitung menggunakan:

$$
\boxed{
A^{-1}
=
\frac{1}{\det(A)}
\operatorname{adj}(A)
}
$$

Rumus ini hanya dapat digunakan jika:

$$
\det(A)\ne0
$$

Jika:

$$
\det(A)=0
$$

maka matriks tersebut merupakan matriks singular dan:

$$
\boxed{
A^{-1}\text{ tidak ada}
}
$$

---

# 7. Langkah-Langkah Menentukan Invers Matriks $3 \times 3$

Untuk menentukan invers matriks ordo $3 \times 3$, lakukan langkah berikut:

1. Hitung determinan matriks $A$.
2. Periksa apakah $\det(A)\ne0$.
3. Tentukan sembilan minor $M_{ij}$.
4. Ubah minor menjadi kofaktor menggunakan pola tanda.
5. Susun matriks kofaktor.
6. Transpose matriks kofaktor untuk mendapatkan $\operatorname{adj}(A)$.
7. Gunakan rumus:

$$
A^{-1}
=
\frac{1}{\det(A)}
\operatorname{adj}(A)
$$

8. Sederhanakan hasil.
9. Jika diperlukan, periksa dengan perkalian:

$$
AA^{-1}=I
$$

---

# 8. Contoh Lengkap Menentukan Invers Matriks $3 \times 3$

Diketahui:

$$
A=
\begin{bmatrix}
2 & 1 & 1\\
1 & 2 & 1\\
1 & 1 & 2
\end{bmatrix}
$$

Tentukan $A^{-1}$.

## Langkah 1. Menghitung Determinan

Dengan ekspansi kofaktor pada baris pertama:

$$
\begin{aligned}
\det(A)
&=
2
\begin{vmatrix}
2 & 1\\
1 & 2
\end{vmatrix}
-
1
\begin{vmatrix}
1 & 1\\
1 & 2
\end{vmatrix}
+
1
\begin{vmatrix}
1 & 2\\
1 & 1
\end{vmatrix}
\\
&=
2[(2)(2)-(1)(1)]
-
[(1)(2)-(1)(1)]
+
[(1)(1)-(2)(1)]
\\
&=
2(3)-1-1\\
&=6-1-1\\
&=4
\end{aligned}
$$

Karena:

$$
\det(A)=4\ne0
$$

maka matriks $A$ mempunyai invers.

---

## Langkah 2. Menentukan Minor

### Baris Pertama

$$
\begin{aligned}
M_{11}
&=
\begin{vmatrix}
2 & 1\\
1 & 2
\end{vmatrix}\\
&=4-1\\
&=3
\end{aligned}
$$

$$
\begin{aligned}
M_{12}
&=
\begin{vmatrix}
1 & 1\\
1 & 2
\end{vmatrix}\\
&=2-1\\
&=1
\end{aligned}
$$

$$
\begin{aligned}
M_{13}
&=
\begin{vmatrix}
1 & 2\\
1 & 1
\end{vmatrix}\\
&=1-2\\
&=-1
\end{aligned}
$$

### Baris Kedua

$$
\begin{aligned}
M_{21}
&=
\begin{vmatrix}
1 & 1\\
1 & 2
\end{vmatrix}\\
&=1
\end{aligned}
$$

$$
\begin{aligned}
M_{22}
&=
\begin{vmatrix}
2 & 1\\
1 & 2
\end{vmatrix}\\
&=3
\end{aligned}
$$

$$
\begin{aligned}
M_{23}
&=
\begin{vmatrix}
2 & 1\\
1 & 1
\end{vmatrix}\\
&=2-1\\
&=1
\end{aligned}
$$

### Baris Ketiga

$$
\begin{aligned}
M_{31}
&=
\begin{vmatrix}
1 & 1\\
2 & 1
\end{vmatrix}\\
&=1-2\\
&=-1
\end{aligned}
$$

$$
\begin{aligned}
M_{32}
&=
\begin{vmatrix}
2 & 1\\
1 & 1
\end{vmatrix}\\
&=1
\end{aligned}
$$

$$
\begin{aligned}
M_{33}
&=
\begin{vmatrix}
2 & 1\\
1 & 2
\end{vmatrix}\\
&=3
\end{aligned}
$$

Matriks minor:

$$
M=
\begin{bmatrix}
3 & 1 & -1\\
1 & 3 & 1\\
-1 & 1 & 3
\end{bmatrix}
$$

---

## Langkah 3. Menentukan Kofaktor

Gunakan pola tanda:

$$
\begin{bmatrix}
+ & - & +\\
- & + & -\\
+ & - & +
\end{bmatrix}
$$

Sehingga:

$$
\begin{aligned}
C_{11}&=3\\
C_{12}&=-1\\
C_{13}&=-1\\
C_{21}&=-1\\
C_{22}&=3\\
C_{23}&=-1\\
C_{31}&=-1\\
C_{32}&=-1\\
C_{33}&=3
\end{aligned}
$$

Maka matriks kofaktornya:

$$
C=
\begin{bmatrix}
3 & -1 & -1\\
-1 & 3 & -1\\
-1 & -1 & 3
\end{bmatrix}
$$

---

## Langkah 4. Menentukan Adjoin

Transpose matriks kofaktor:

$$
\operatorname{adj}(A)=C^T
$$

Karena matriks kofaktor tersebut simetris, transposenya sama dengan matriks asalnya.

$$
\operatorname{adj}(A)
=
\begin{bmatrix}
3 & -1 & -1\\
-1 & 3 & -1\\
-1 & -1 & 3
\end{bmatrix}
$$

---

## Langkah 5. Menentukan Invers

Gunakan:

$$
A^{-1}
=
\frac{1}{\det(A)}
\operatorname{adj}(A)
$$

Maka:

$$
\begin{aligned}
A^{-1}
&=
\frac{1}{4}
\begin{bmatrix}
3 & -1 & -1\\
-1 & 3 & -1\\
-1 & -1 & 3
\end{bmatrix}
\end{aligned}
$$

Jadi:

$$
\boxed{
A^{-1}
=
\frac{1}{4}
\begin{bmatrix}
3 & -1 & -1\\
-1 & 3 & -1\\
-1 & -1 & 3
\end{bmatrix}
}
$$

atau:

$$
\boxed{
A^{-1}
=
\begin{bmatrix}
\frac34 & -\frac14 & -\frac14\\
-\frac14 & \frac34 & -\frac14\\
-\frac14 & -\frac14 & \frac34
\end{bmatrix}
}
$$

---

# 9. Memeriksa Hasil Invers

Invers dapat diperiksa menggunakan:

$$
AA^{-1}=I
$$

Untuk contoh sebelumnya:

$$
A=
\begin{bmatrix}
2 & 1 & 1\\
1 & 2 & 1\\
1 & 1 & 2
\end{bmatrix}
$$

dan:

$$
A^{-1}
=
\frac14
\begin{bmatrix}
3 & -1 & -1\\
-1 & 3 & -1\\
-1 & -1 & 3
\end{bmatrix}
$$

Maka:

$$
\begin{aligned}
AA^{-1}
&=
\frac14
\begin{bmatrix}
2 & 1 & 1\\
1 & 2 & 1\\
1 & 1 & 2
\end{bmatrix}
\begin{bmatrix}
3 & -1 & -1\\
-1 & 3 & -1\\
-1 & -1 & 3
\end{bmatrix}
\\
&=
\frac14
\begin{bmatrix}
4 & 0 & 0\\
0 & 4 & 0\\
0 & 0 & 4
\end{bmatrix}
\\
&=
\begin{bmatrix}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 1
\end{bmatrix}
\\
&=I_3
\end{aligned}
$$

Karena:

$$
AA^{-1}=I_3
$$

maka invers yang diperoleh benar.

---

# 10. Contoh Matriks yang Tidak Mempunyai Invers

Diketahui:

$$
B=
\begin{bmatrix}
1 & 2 & 3\\
2 & 4 & 6\\
1 & 1 & 1
\end{bmatrix}
$$

Perhatikan bahwa baris kedua merupakan dua kali baris pertama.

Hitung determinannya:

$$
\begin{aligned}
\det(B)
&=
1
\begin{vmatrix}
4 & 6\\
1 & 1
\end{vmatrix}
-
2
\begin{vmatrix}
2 & 6\\
1 & 1
\end{vmatrix}
+
3
\begin{vmatrix}
2 & 4\\
1 & 1
\end{vmatrix}
\\
&=
1(4-6)-2(2-6)+3(2-4)
\\
&=-2+8-6
\\
&=0
\end{aligned}
$$

Karena:

$$
\det(B)=0
$$

maka:

$$
\boxed{
B^{-1}\text{ tidak ada}
}
$$

Matriks $B$ disebut matriks singular.

> [!important]
> Jika determinan sudah diperoleh $0$, proses dapat dihentikan.
>
> Tidak perlu mencari minor, kofaktor, maupun adjoin karena matriks tersebut tidak mempunyai invers.

---

# 11. Hubungan Minor, Kofaktor, dan Adjoin

Ketiga konsep tersebut sering tertukar.

Urutannya adalah:

### Minor

$$
M_{ij}
=
\text{determinan setelah baris }i\text{ dan kolom }j\text{ dihapus}
$$

### Kofaktor

$$
C_{ij}
=
(-1)^{i+j}M_{ij}
$$

### Matriks Kofaktor

$$
C=
\begin{bmatrix}
C_{11} & C_{12} & C_{13}\\
C_{21} & C_{22} & C_{23}\\
C_{31} & C_{32} & C_{33}
\end{bmatrix}
$$

### Adjoin

$$
\operatorname{adj}(A)=C^T
$$

### Invers

$$
A^{-1}
=
\frac{1}{\det(A)}
\operatorname{adj}(A)
$$

Secara ringkas:

$$
\boxed{
\text{Minor}
\rightarrow
\text{Kofaktor}
\rightarrow
\text{Matriks Kofaktor}
\rightarrow
\text{Transpose}
\rightarrow
\text{Adjoin}
\rightarrow
\text{Invers}
}
$$

---

# 12. Cara Cepat Mengingat Pola Tanda Kofaktor

Pola tanda kofaktor:

$$
\begin{bmatrix}
+ & - & +\\
- & + & -\\
+ & - & +
\end{bmatrix}
$$

Perhatikan bahwa tanda selalu dimulai dari positif pada posisi $(1,1)$ dan berubah secara bergantian.

Sehingga dapat dibaca:

$$
\begin{matrix}
+ & - & +\\
- & + & -\\
+ & - & +
\end{matrix}
$$

> [!tip]
> Bayangkan pola tanda seperti papan catur yang dimulai dengan tanda positif di sudut kiri atas.

---

# 13. Hubungan Determinan dengan Kofaktor

Determinan matriks $3 \times 3$ sebenarnya dapat dihitung menggunakan kofaktor.

Misalkan:

$$
A=
\begin{bmatrix}
a & b & c\\
d & e & f\\
g & h & i
\end{bmatrix}
$$

Jika menggunakan ekspansi baris pertama:

$$
\det(A)
=
aC_{11}+bC_{12}+cC_{13}
$$

Karena:

$$
C_{11}=M_{11}
$$

$$
C_{12}=-M_{12}
$$

$$
C_{13}=M_{13}
$$

maka:

$$
\det(A)
=
aM_{11}
-bM_{12}
+cM_{13}
$$

atau:

$$
\boxed{
\det(A)
=
a(ei-fh)
-b(di-fg)
+c(dh-eg)
}
$$

Hal tersebut menunjukkan bahwa konsep kofaktor yang digunakan untuk mencari invers sebenarnya sudah berkaitan langsung dengan cara menghitung determinan.

---

# 14. Sifat-Sifat Invers Tetap Berlaku

Sifat invers yang dipelajari pada matriks $2 \times 2$ juga berlaku pada matriks $3 \times 3$ selama matriks tersebut mempunyai invers.

### Invers dari invers

$$
\boxed{
(A^{-1})^{-1}=A
}
$$

### Invers hasil kali

$$
\boxed{
(AB)^{-1}=B^{-1}A^{-1}
}
$$

### Invers transpose

$$
\boxed{
(A^T)^{-1}=(A^{-1})^T
}
$$

### Invers perkalian skalar

Untuk $k\ne0$:

$$
\boxed{
(kA)^{-1}
=
\frac1kA^{-1}
}
$$

### Determinan invers

$$
\boxed{
\det(A^{-1})
=
\frac{1}{\det(A)}
}
$$

### Invers matriks identitas

$$
\boxed{
I_3^{-1}=I_3
}
$$

dengan:

$$
I_3=
\begin{bmatrix}
1&0&0\\
0&1&0\\
0&0&1
\end{bmatrix}
$$

---

# 15. Kesalahan yang Sering Terjadi

> [!warning] Kesalahan yang Sering Terjadi
> 1. Tidak menghitung determinan terlebih dahulu.
> 2. Tetap mencari invers ketika $\det(A)=0$.
> 3. Salah menghapus baris atau kolom ketika menentukan minor.
> 4. Menganggap minor sama dengan kofaktor.
> 5. Lupa menggunakan pola tanda kofaktor.
> 6. Salah tanda pada posisi $(1,2)$, $(2,1)$, $(2,3)$, dan $(3,2)$.
> 7. Menganggap matriks kofaktor langsung merupakan adjoin.
> 8. Lupa mentranspose matriks kofaktor.
> 9. Salah mengalikan adjoin dengan $\frac{1}{\det(A)}$.
> 10. Tidak memeriksa kembali hasil perhitungan.

---

# 16. Strategi Memeriksa Jawaban

Setelah mendapatkan invers, lakukan pemeriksaan berikut:

1. Pastikan matriks awal merupakan matriks persegi.
2. Pastikan $\det(A)\ne0$.
3. Periksa kembali sembilan minor.
4. Periksa pola tanda kofaktor:

$$
\begin{bmatrix}
+&-&+\\
-&+&-\\
+&-&+
\end{bmatrix}
$$

5. Pastikan matriks kofaktor telah ditranspose.
6. Pastikan faktor $\frac{1}{\det(A)}$ sudah diterapkan.
7. Jika memungkinkan, periksa:

$$
AA^{-1}=I_3
$$

---

# Contoh Soal

## Soal 1

Diketahui matriks:

$$
A=
\begin{bmatrix}
1 & 2 & 0\\
2 & 1 & 1\\
0 & 1 & 2
\end{bmatrix}
$$

Tentukan:

1. $\det(A)$
2. Apakah matriks $A$ mempunyai invers? Jelaskan alasanmu.

> [!success]- Klik untuk Lihat Jawaban
> Hitung determinan matriks $A$ dengan ekspansi pada baris pertama:
>
> $$
> \begin{aligned}
> \det(A)
> &=
> 1
> \begin{vmatrix}
> 1&1\\
> 1&2
> \end{vmatrix}
> -
> 2
> \begin{vmatrix}
> 2&1\\
> 0&2
> \end{vmatrix}
> +
> 0
> \begin{vmatrix}
> 2&1\\
> 0&1
> \end{vmatrix}\\
> &=1[(1)(2)-(1)(1)]
> -2[(2)(2)-(1)(0)]\\
> &=1(1)-2(4)\\
> &=1-8\\
> &=-7
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{\det(A)=-7}
> $$
>
> Karena:
>
> $$
> \det(A)\ne0
> $$
>
> maka matriks $A$ merupakan matriks nonsingular dan mempunyai invers.
>
> $$
> \boxed{A^{-1}\text{ ada}}
> $$

---

## Soal 2

Diketahui:

$$
A=
\begin{bmatrix}
x&1&1\\
1&x&1\\
1&1&x
\end{bmatrix}
$$

Tentukan nilai $x$ agar matriks $A$ merupakan matriks singular.

> [!success]- Klik untuk Lihat Jawaban
> Matriks singular memenuhi:
>
> $$
> \det(A)=0
> $$
>
> Hitung determinannya:
>
> $$
> \begin{aligned}
> \det(A)
> &=
> x
> \begin{vmatrix}
> x&1\\
> 1&x
> \end{vmatrix}
> -
> 1
> \begin{vmatrix}
> 1&1\\
> 1&x
> \end{vmatrix}
> +
> 1
> \begin{vmatrix}
> 1&x\\
> 1&1
> \end{vmatrix}\\
> &=x(x^2-1)-(x-1)+(1-x)\\
> &=x^3-x-x+1+1-x\\
> &=x^3-3x+2
> \end{aligned}
> $$
>
> Faktorkan:
>
> $$
> x^3-3x+2
> =
> (x-1)^2(x+2)
> $$
>
> Karena matriks singular:
>
> $$
> (x-1)^2(x+2)=0
> $$
>
> Maka:
>
> $$
> x=1
> $$
>
> atau:
>
> $$
> x=-2
> $$
>
> Jadi:
>
> $$
> \boxed{x=1\text{ atau }x=-2}
> $$

---

## Soal 3

Diketahui:

$$
B=
\begin{bmatrix}
2&0&1\\
3&-1&2\\
0&4&1
\end{bmatrix}
$$

Hitung $\det(B)$ dan tentukan apakah $B$ merupakan matriks singular atau nonsingular.

> [!success]- Klik untuk Lihat Jawaban
> Gunakan ekspansi pada baris pertama:
>
> $$
> \begin{aligned}
> \det(B)
> &=
> 2
> \begin{vmatrix}
> -1&2\\
> 4&1
> \end{vmatrix}
> +
> 1
> \begin{vmatrix}
> 3&-1\\
> 0&4
> \end{vmatrix}\\
> &=2[(-1)(1)-(2)(4)]
> +[(3)(4)-(-1)(0)]\\
> &=2(-1-8)+12\\
> &=-18+12\\
> &=-6
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{\det(B)=-6}
> $$
>
> Karena:
>
> $$
> \det(B)\ne0
> $$
>
> maka matriks $B$ merupakan matriks nonsingular.
>
> Dengan demikian, $B$ mempunyai invers.

---

## Soal 4

Diketahui matriks $A$ berordo $3\times3$ dan:

$$
\det(A)=-4
$$

Tentukan:

1. $\det(A^{-1})$
2. $\det(2A)$
3. $\det((2A)^{-1})$

> [!success]- Klik untuk Lihat Jawaban
> ### 1. Menentukan $\det(A^{-1})$
>
> Gunakan sifat:
>
> $$
> \det(A^{-1})
> =
> \frac{1}{\det(A)}
> $$
>
> Maka:
>
> $$
> \boxed{
> \det(A^{-1})=-\frac14
> }
> $$
>
> ### 2. Menentukan $\det(2A)$
>
> Karena $A$ berordo $3\times3$:
>
> $$
> \det(kA)=k^3\det(A)
> $$
>
> Sehingga:
>
> $$
> \begin{aligned}
> \det(2A)
> &=2^3\det(A)\\
> &=8(-4)\\
> &=-32
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{\det(2A)=-32}
> $$
>
> ### 3. Menentukan $\det((2A)^{-1})$
>
> Gunakan:
>
> $$
> \det((2A)^{-1})
> =
> \frac{1}{\det(2A)}
> $$
>
> Maka:
>
> $$
> \boxed{
> \det((2A)^{-1})
> =
> -\frac{1}{32}
> }
> $$

---

## Soal 5

Tentukan invers dari matriks:

$$
A=
\begin{bmatrix}
1&1&0\\
0&1&1\\
1&0&1
\end{bmatrix}
$$

> [!success]- Klik untuk Lihat Jawaban
> Hitung determinan:
>
> $$
> \begin{aligned}
> \det(A)
> &=
> 1
> \begin{vmatrix}
> 1&1\\
> 0&1
> \end{vmatrix}
> -
> 1
> \begin{vmatrix}
> 0&1\\
> 1&1
> \end{vmatrix}\\
> &=1(1)-1(-1)\\
> &=2
> \end{aligned}
> $$
>
> Karena:
>
> $$
> \det(A)=2\ne0
> $$
>
> maka matriks $A$ mempunyai invers.
>
> Matriks kofaktornya:
>
> $$
> C=
> \begin{bmatrix}
> 1&1&-1\\
> -1&1&1\\
> 1&-1&1
> \end{bmatrix}
> $$
>
> Adjoin matriks:
>
> $$
> \operatorname{adj}(A)
> =
> C^T
> =
> \begin{bmatrix}
> 1&-1&1\\
> 1&1&-1\\
> -1&1&1
> \end{bmatrix}
> $$
>
> Gunakan:
>
> $$
> A^{-1}
> =
> \frac{1}{\det(A)}
> \operatorname{adj}(A)
> $$
>
> Maka:
>
> $$
> \boxed{
> A^{-1}
> =
> \frac12
> \begin{bmatrix}
> 1&-1&1\\
> 1&1&-1\\
> -1&1&1
> \end{bmatrix}
> }
> $$

---

## Soal 6

Tentukan invers dari matriks:

$$
A=
\begin{bmatrix}
2&-1&1\\
1&0&2\\
3&1&1
\end{bmatrix}
$$

> [!success]- Klik untuk Lihat Jawaban
> Hitung determinan:
>
> $$
> \begin{aligned}
> \det(A)
> &=
> 2
> \begin{vmatrix}
> 0&2\\
> 1&1
> \end{vmatrix}
> +
> 1
> \begin{vmatrix}
> 1&2\\
> 3&1
> \end{vmatrix}
> +
> 1
> \begin{vmatrix}
> 1&0\\
> 3&1
> \end{vmatrix}\\
> &=2(0-2)+(1-6)+(1-0)\\
> &=-4-5+1\\
> &=-8
> \end{aligned}
> $$
>
> Matriks kofaktornya:
>
> $$
> C=
> \begin{bmatrix}
> -2&5&1\\
> 2&-1&-5\\
> -2&-3&1
> \end{bmatrix}
> $$
>
> Maka:
>
> $$
> \operatorname{adj}(A)
> =
> \begin{bmatrix}
> -2&2&-2\\
> 5&-1&-3\\
> 1&-5&1
> \end{bmatrix}
> $$
>
> Sehingga:
>
> $$
> A^{-1}
> =
> -\frac18
> \begin{bmatrix}
> -2&2&-2\\
> 5&-1&-3\\
> 1&-5&1
> \end{bmatrix}
> $$
>
> Jadi:
>
> $$
> \boxed{
> A^{-1}
> =
> \begin{bmatrix}
> \frac14&-\frac14&\frac14\\
> -\frac58&\frac18&\frac38\\
> -\frac18&\frac58&-\frac18
> \end{bmatrix}
> }
> $$

---

## Soal 7

Diketahui:

$$
A^{-1}
=
\begin{bmatrix}
1&1&0\\
0&1&1\\
0&0&1
\end{bmatrix}
$$

dan:

$$
B^{-1}
=
\begin{bmatrix}
1&0&1\\
0&1&0\\
0&0&1
\end{bmatrix}
$$

Tentukan $(AB)^{-1}$.

> [!success]- Klik untuk Lihat Jawaban
> Gunakan sifat:
>
> $$
> (AB)^{-1}
> =
> B^{-1}A^{-1}
> $$
>
> Perhatikan bahwa urutan perkalian dibalik.
>
> Maka:
>
> $$
> \begin{aligned}
> (AB)^{-1}
> &=
> \begin{bmatrix}
> 1&0&1\\
> 0&1&0\\
> 0&0&1
> \end{bmatrix}
> \begin{bmatrix}
> 1&1&0\\
> 0&1&1\\
> 0&0&1
> \end{bmatrix}\\
> &=
> \begin{bmatrix}
> 1&1&1\\
> 0&1&1\\
> 0&0&1
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
> 1&1&1\\
> 0&1&1\\
> 0&0&1
> \end{bmatrix}
> }
> $$

---

## Soal 8

Diketahui:

$$
AB=C
$$

dengan:

$$
B=
\begin{bmatrix}
1&1&0\\
0&1&1\\
1&0&1
\end{bmatrix}
$$

dan:

$$
C=
\begin{bmatrix}
3&1&0\\
3&1&2\\
1&1&2
\end{bmatrix}
$$

Tentukan matriks $A$.

> [!success]- Klik untuk Lihat Jawaban
> Diketahui:
>
> $$
> AB=C
> $$
>
> Karena $B$ berada di sebelah kanan $A$, kalikan kedua ruas dari sebelah kanan dengan $B^{-1}$:
>
> $$
> ABB^{-1}=CB^{-1}
> $$
>
> Sehingga:
>
> $$
> A=CB^{-1}
> $$
>
> Matriks $B$ adalah:
>
> $$
> B=
> \begin{bmatrix}
> 1&1&0\\
> 0&1&1\\
> 1&0&1
> \end{bmatrix}
> $$
>
> dengan:
>
> $$
> \det(B)=2
> $$
>
> Inversnya:
>
> $$
> B^{-1}
> =
> \frac12
> \begin{bmatrix}
> 1&-1&1\\
> 1&1&-1\\
> -1&1&1
> \end{bmatrix}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> A
> &=CB^{-1}\\
> &=
> \begin{bmatrix}
> 3&1&0\\
> 3&1&2\\
> 1&1&2
> \end{bmatrix}
> \left(
> \frac12
> \begin{bmatrix}
> 1&-1&1\\
> 1&1&-1\\
> -1&1&1
> \end{bmatrix}
> \right)
> \end{aligned}
> $$
>
> Diperoleh:
>
> $$
> \boxed{
> A=
> \begin{bmatrix}
> 2&-1&1\\
> 1&0&2\\
> 0&1&1
> \end{bmatrix}
> }
> $$
>
> Hasil dapat diperiksa kembali dengan menghitung:
>
> $$
> AB=C
> $$

---

## Soal 9

Diketahui:

$$
A^{-1}
=
\begin{bmatrix}
2&-1&0\\
1&1&1\\
0&2&1
\end{bmatrix}
$$

Tentukan:

1. $(A^T)^{-1}$
2. $(2A)^{-1}$

> [!success]- Klik untuk Lihat Jawaban
> ### 1. Menentukan $(A^T)^{-1}$
>
> Gunakan sifat:
>
> $$
> (A^T)^{-1}
> =
> (A^{-1})^T
> $$
>
> Maka:
>
> $$
> (A^T)^{-1}
> =
> \begin{bmatrix}
> 2&1&0\\
> -1&1&2\\
> 0&1&1
> \end{bmatrix}
> $$
>
> Jadi:
>
> $$
> \boxed{
> (A^T)^{-1}
> =
> \begin{bmatrix}
> 2&1&0\\
> -1&1&2\\
> 0&1&1
> \end{bmatrix}
> }
> $$
>
> ### 2. Menentukan $(2A)^{-1}$
>
> Gunakan sifat:
>
> $$
> (kA)^{-1}
> =
> \frac1kA^{-1}
> $$
>
> Maka:
>
> $$
> (2A)^{-1}
> =
> \frac12
> \begin{bmatrix}
> 2&-1&0\\
> 1&1&1\\
> 0&2&1
> \end{bmatrix}
> $$
>
> Jadi:
>
> $$
> \boxed{
> (2A)^{-1}
> =
> \begin{bmatrix}
> 1&-\frac12&0\\
> \frac12&\frac12&\frac12\\
> 0&1&\frac12
> \end{bmatrix}
> }
> $$

---

## Konsep Terkait

- [[Matriks/05 - Determinan Matriks Ordo 2x2 dan 3x3]]
- [[Matriks/06 - Matriks Singular dan Sifat-Sifat Determinan]]
- [[Matriks/07 - Invers Matriks Ordo 2x2 dan Sifat-Sifat Invers]]
- [[Matriks/09 - Menyelesaikan Sistem Persamaan Linear Dua Variabel (SPLDV) dengan Matriks]]
- [[Matriks/10 - Menyelesaikan Sistem Persamaan Linear Tiga Variabel (SPLTV) dengan Metode Cramer]]