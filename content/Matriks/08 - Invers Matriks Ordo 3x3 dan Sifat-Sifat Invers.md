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

Tentukan apakah matriks berikut mempunyai invers:

$$
A=
\begin{bmatrix}
1 & 0 & 0\\
0 & 2 & 0\\
0 & 0 & 3
\end{bmatrix}
$$

> [!success]- Klik untuk Lihat Jawaban
> Matriks mempunyai invers jika:
>
> $$
> \det(A)\ne0
> $$
>
> Karena $A$ merupakan matriks diagonal:
>
> $$
> \begin{aligned}
> \det(A)
> &=(1)(2)(3)\\
> &=6
> \end{aligned}
> $$
>
> Karena:
>
> $$
> 6\ne0
> $$
>
> maka matriks $A$ mempunyai invers.
>
> $$
> \boxed{A^{-1}\text{ ada}}
> $$

---

## Soal 2

Tentukan apakah matriks berikut mempunyai invers:

$$
B=
\begin{bmatrix}
1 & 2 & 3\\
2 & 4 & 6\\
1 & 0 & 2
\end{bmatrix}
$$

> [!success]- Klik untuk Lihat Jawaban
> Perhatikan bahwa baris kedua merupakan dua kali baris pertama:
>
> $$
> B_2=2B_1
> $$
>
> Akibatnya:
>
> $$
> \det(B)=0
> $$
>
> Karena:
>
> $$
> \det(B)=0
> $$
>
> matriks $B$ merupakan matriks singular.
>
> Jadi:
>
> $$
> \boxed{B^{-1}\text{ tidak ada}}
> $$

---

## Soal 3

Diketahui:

$$
A=
\begin{bmatrix}
2 & 1 & 3\\
0 & -1 & 2\\
4 & 2 & 1
\end{bmatrix}
$$

Tentukan:

1. $M_{11}$
2. $M_{12}$
3. $M_{31}$

> [!success]- Klik untuk Lihat Jawaban
>
> ### 1. Menentukan $M_{11}$
>
> Hapus baris pertama dan kolom pertama:
>
> $$
> M_{11}
> =
> \begin{vmatrix}
> -1 & 2\\
> 2 & 1
> \end{vmatrix}
> $$
>
> $$
> \begin{aligned}
> M_{11}
> &=(-1)(1)-(2)(2)\\
> &=-1-4\\
> &=-5
> \end{aligned}
> $$
>
> ### 2. Menentukan $M_{12}$
>
> Hapus baris pertama dan kolom kedua:
>
> $$
> M_{12}
> =
> \begin{vmatrix}
> 0 & 2\\
> 4 & 1
> \end{vmatrix}
> $$
>
> $$
> \begin{aligned}
> M_{12}
> &=(0)(1)-(2)(4)\\
> &=-8
> \end{aligned}
> $$
>
> ### 3. Menentukan $M_{31}$
>
> Hapus baris ketiga dan kolom pertama:
>
> $$
> M_{31}
> =
> \begin{vmatrix}
> 1 & 3\\
> -1 & 2
> \end{vmatrix}
> $$
>
> $$
> \begin{aligned}
> M_{31}
> &=(1)(2)-(3)(-1)\\
> &=2+3\\
> &=5
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> M_{11}=-5,\qquad
> M_{12}=-8,\qquad
> M_{31}=5
> }
> $$

---

## Soal 4

Untuk matriks:

$$
A=
\begin{bmatrix}
2 & 1 & 3\\
0 & -1 & 2\\
4 & 2 & 1
\end{bmatrix}
$$

tentukan:

1. $C_{12}$
2. $C_{21}$
3. $C_{32}$

> [!success]- Klik untuk Lihat Jawaban
> Gunakan:
>
> $$
> C_{ij}=(-1)^{i+j}M_{ij}
> $$
>
> dengan pola tanda:
>
> $$
> \begin{bmatrix}
> + & - & +\\
> - & + & -\\
> + & - & +
> \end{bmatrix}
> $$
>
> ### 1. Menentukan $C_{12}$
>
> $$
> M_{12}
> =
> \begin{vmatrix}
> 0 & 2\\
> 4 & 1
> \end{vmatrix}
> =-8
> $$
>
> Karena posisi $(1,2)$ bertanda negatif:
>
> $$
> \begin{aligned}
> C_{12}
> &=-M_{12}\\
> &=-(-8)\\
> &=8
> \end{aligned}
> $$
>
> ### 2. Menentukan $C_{21}$
>
> $$
> M_{21}
> =
> \begin{vmatrix}
> 1 & 3\\
> 2 & 1
> \end{vmatrix}
> $$
>
> $$
> \begin{aligned}
> M_{21}
> &=(1)(1)-(3)(2)\\
> &=1-6\\
> &=-5
> \end{aligned}
> $$
>
> Karena posisi $(2,1)$ bertanda negatif:
>
> $$
> C_{21}=-(-5)=5
> $$
>
> ### 3. Menentukan $C_{32}$
>
> $$
> M_{32}
> =
> \begin{vmatrix}
> 2 & 3\\
> 0 & 2
> \end{vmatrix}
> $$
>
> $$
> \begin{aligned}
> M_{32}
> &=(2)(2)-(3)(0)\\
> &=4
> \end{aligned}
> $$
>
> Karena posisi $(3,2)$ bertanda negatif:
>
> $$
> C_{32}=-4
> $$
>
> Jadi:
>
> $$
> \boxed{
> C_{12}=8,\qquad
> C_{21}=5,\qquad
> C_{32}=-4
> }
> $$

---

## Soal 5

Diketahui:

$$
A=
\begin{bmatrix}
1 & 2 & 0\\
3 & 1 & 1\\
2 & 0 & 1
\end{bmatrix}
$$

Tentukan matriks kofaktor dan $\operatorname{adj}(A)$.

> [!success]- Klik untuk Lihat Jawaban
> Minor-minor matriks $A$ adalah:
>
> $$
> M=
> \begin{bmatrix}
> 1 & 1 & -2\\
> 2 & 1 & -4\\
> 2 & 1 & -5
> \end{bmatrix}
> $$
>
> Gunakan pola tanda:
>
> $$
> \begin{bmatrix}
> + & - & +\\
> - & + & -\\
> + & - & +
> \end{bmatrix}
> $$
>
> sehingga diperoleh matriks kofaktor:
>
> $$
> C=
> \begin{bmatrix}
> 1 & -1 & -2\\
> -2 & 1 & 4\\
> 2 & -1 & -5
> \end{bmatrix}
> $$
>
> Adjoin merupakan transpose matriks kofaktor:
>
> $$
> \operatorname{adj}(A)=C^T
> $$
>
> Maka:
>
> $$
> \boxed{
> \operatorname{adj}(A)
> =
> \begin{bmatrix}
> 1 & -2 & 2\\
> -1 & 1 & -1\\
> -2 & 4 & -5
> \end{bmatrix}
> }
> $$

---

## Soal 6

Tentukan invers dari:

$$
A=
\begin{bmatrix}
1 & 0 & 1\\
0 & 1 & 0\\
1 & 0 & 2
\end{bmatrix}
$$

> [!success]- Klik untuk Lihat Jawaban
> Hitung determinannya:
>
> $$
> \begin{aligned}
> \det(A)
> &=
> 1
> \begin{vmatrix}
> 1 & 0\\
> 0 & 2
> \end{vmatrix}
> +
> 1
> \begin{vmatrix}
> 0 & 1\\
> 1 & 0
> \end{vmatrix}\\
> &=2-1\\
> &=1
> \end{aligned}
> $$
>
> Karena:
>
> $$
> \det(A)=1\ne0
> $$
>
> maka matriks $A$ mempunyai invers.
>
> Matriks kofaktornya:
>
> $$
> C=
> \begin{bmatrix}
> 2 & 0 & -1\\
> 0 & 1 & 0\\
> -1 & 0 & 1
> \end{bmatrix}
> $$
>
> Karena matriks kofaktor tersebut simetris:
>
> $$
> \operatorname{adj}(A)
> =
> \begin{bmatrix}
> 2 & 0 & -1\\
> 0 & 1 & 0\\
> -1 & 0 & 1
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
> sehingga:
>
> $$
> \boxed{
> A^{-1}
> =
> \begin{bmatrix}
> 2 & 0 & -1\\
> 0 & 1 & 0\\
> -1 & 0 & 1
> \end{bmatrix}
> }
> $$

---

## Soal 7

Tentukan invers dari:

$$
A=
\begin{bmatrix}
2 & 1 & 0\\
1 & 2 & 1\\
0 & 1 & 2
\end{bmatrix}
$$

> [!success]- Klik untuk Lihat Jawaban
> Hitung determinannya:
>
> $$
> \begin{aligned}
> \det(A)
> &=
> 2
> \begin{vmatrix}
> 2 & 1\\
> 1 & 2
> \end{vmatrix}
> -
> 1
> \begin{vmatrix}
> 1 & 1\\
> 0 & 2
> \end{vmatrix}\\
> &=2(4-1)-(2-0)\\
> &=6-2\\
> &=4
> \end{aligned}
> $$
>
> Karena:
>
> $$
> \det(A)=4\ne0
> $$
>
> matriks mempunyai invers.
>
> Matriks kofaktornya:
>
> $$
> C=
> \begin{bmatrix}
> 3 & -2 & 1\\
> -2 & 4 & -2\\
> 1 & -2 & 3
> \end{bmatrix}
> $$
>
> Karena matriks kofaktor tersebut simetris:
>
> $$
> \operatorname{adj}(A)
> =
> \begin{bmatrix}
> 3 & -2 & 1\\
> -2 & 4 & -2\\
> 1 & -2 & 3
> \end{bmatrix}
> $$
>
> Maka:
>
> $$
> A^{-1}
> =
> \frac14
> \begin{bmatrix}
> 3 & -2 & 1\\
> -2 & 4 & -2\\
> 1 & -2 & 3
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
> \frac34 & -\frac12 & \frac14\\
> -\frac12 & 1 & -\frac12\\
> \frac14 & -\frac12 & \frac34
> \end{bmatrix}
> }
> $$

---

## Soal 8

Diketahui:

$$
A=
\begin{bmatrix}
x & 1 & 0\\
-2 & x-3 & 0\\
0 & 0 & 1
\end{bmatrix}
$$

Tentukan nilai $x$ agar matriks $A$ mempunyai invers.

> [!success]- Klik untuk Lihat Jawaban
> Matriks mempunyai invers jika:
>
> $$
> \det(A)\ne0
> $$
>
> Hitung determinannya:
>
> $$
> \begin{aligned}
> \det(A)
> &=
> \begin{vmatrix}
> x & 1\\
> -2 & x-3
> \end{vmatrix}(1)\\
> &=x(x-3)-(1)(-2)\\
> &=x^2-3x+2\\
> &=(x-1)(x-2)
> \end{aligned}
> $$
>
> Agar mempunyai invers:
>
> $$
> (x-1)(x-2)\ne0
> $$
>
> sehingga:
>
> $$
> x\ne1
> $$
>
> dan:
>
> $$
> x\ne2
> $$
>
> Jadi:
>
> $$
> \boxed{x\ne1\text{ dan }x\ne2}
> $$

---

## Soal 9

Diketahui:

$$
A=
\begin{bmatrix}
1 & 2 & 0\\
3 & 1 & 1\\
2 & 0 & 1
\end{bmatrix}
$$

dan:

$$
B=
\begin{bmatrix}
1 & 2 & 0\\
5 & 2 & 5\\
4 & 1 & 4
\end{bmatrix}
$$

Jika:

$$
AX=B
$$

tentukan matriks $X$.

> [!success]- Klik untuk Lihat Jawaban
> Dari:
>
> $$
> AX=B
> $$
>
> kalikan kedua ruas dari sebelah kiri dengan $A^{-1}$:
>
> $$
> X=A^{-1}B
> $$
>
> Determinan matriks $A$:
>
> $$
> \det(A)=-1
> $$
>
> Adjoin matriks $A$:
>
> $$
> \operatorname{adj}(A)
> =
> \begin{bmatrix}
> 1 & -2 & 2\\
> -1 & 1 & -1\\
> -2 & 4 & -5
> \end{bmatrix}
> $$
>
> Sehingga:
>
> $$
> A^{-1}
> =
> \frac{1}{-1}
> \begin{bmatrix}
> 1 & -2 & 2\\
> -1 & 1 & -1\\
> -2 & 4 & -5
> \end{bmatrix}
> $$
>
> Maka:
>
> $$
> A^{-1}
> =
> \begin{bmatrix}
> -1 & 2 & -2\\
> 1 & -1 & 1\\
> 2 & -4 & 5
> \end{bmatrix}
> $$
>
> Selanjutnya:
>
> $$
> \begin{aligned}
> X
> &=A^{-1}B\\
> &=
> \begin{bmatrix}
> -1 & 2 & -2\\
> 1 & -1 & 1\\
> 2 & -4 & 5
> \end{bmatrix}
> \begin{bmatrix}
> 1 & 2 & 0\\
> 5 & 2 & 5\\
> 4 & 1 & 4
> \end{bmatrix}
> \end{aligned}
> $$
>
> Hasilnya:
>
> $$
> \boxed{
> X=
> \begin{bmatrix}
> 1 & 0 & 2\\
> 0 & 1 & -1\\
> 2 & 1 & 0
> \end{bmatrix}
> }
> $$

---

## Soal 10

Diketahui:

$$
A=
\begin{bmatrix}
2 & 1 & 0\\
1 & 2 & 1\\
0 & 1 & 2
\end{bmatrix}
$$

dan:

$$
B=
\begin{bmatrix}
4 & 5 & 2\\
1 & 3 & 3\\
4 & 3 & 2
\end{bmatrix}
$$

Jika:

$$
XA=B
$$

tentukan matriks $X$.

> [!success]- Klik untuk Lihat Jawaban
> Perhatikan bahwa matriks $A$ berada di sebelah kanan $X$.
>
> Dari:
>
> $$
> XA=B
> $$
>
> kalikan kedua ruas dari sebelah kanan dengan $A^{-1}$:
>
> $$
> \begin{aligned}
> XAA^{-1}
> &=BA^{-1}\\
> XI
> &=BA^{-1}\\
> X
> &=BA^{-1}
> \end{aligned}
> $$
>
> Invers matriks $A$ adalah:
>
> $$
> A^{-1}
> =
> \frac14
> \begin{bmatrix}
> 3 & -2 & 1\\
> -2 & 4 & -2\\
> 1 & -2 & 3
> \end{bmatrix}
> $$
>
> Maka:
>
> $$
> X
> =
> \begin{bmatrix}
> 4 & 5 & 2\\
> 1 & 3 & 3\\
> 4 & 3 & 2
> \end{bmatrix}
> \left(
> \frac14
> \begin{bmatrix}
> 3 & -2 & 1\\
> -2 & 4 & -2\\
> 1 & -2 & 3
> \end{bmatrix}
> \right)
> $$
>
> Sehingga:
>
> $$
> X
> =
> \frac14
> \begin{bmatrix}
> 4 & 8 & 0\\
> 0 & 4 & 4\\
> 8 & 0 & 4
> \end{bmatrix}
> $$
>
> Jadi:
>
> $$
> \boxed{
> X=
> \begin{bmatrix}
> 1 & 2 & 0\\
> 0 & 1 & 1\\
> 2 & 0 & 1
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