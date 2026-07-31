
# Matriks Singular dan Sifat-Sifat Determinan

Matriks singular adalah matriks persegi yang determinannya sama dengan nol. Sifat-sifat determinan dapat digunakan untuk menghitung determinan matriks lain tanpa menjabarkan seluruh elemennya.

### 1. Matriks Singular dan Nonsingular

Matriks persegi $A$ disebut **singular** jika:

$$
\det(A)=0
$$

Matriks singular tidak mempunyai invers.

$$
\det(A)=0
\implies
A^{-1}\text{ tidak ada}
$$

Sebaliknya, matriks $A$ disebut **nonsingular** jika:

$$
\det(A)\ne 0
$$

Matriks nonsingular mempunyai invers.

$$
\det(A)\ne 0
\implies
A^{-1}\text{ ada}
$$

#### Contoh

$$
A=
\begin{bmatrix}
2 & 4 \\
1 & 2
\end{bmatrix}
$$

Maka:

$$
\begin{aligned}
\det(A)
&=(2)(2)-(4)(1) \\
&=4-4 \\
&=0
\end{aligned}
$$

Jadi, matriks $A$ merupakan matriks singular.

> [!important]
> Matriks yang bukan matriks persegi tidak disebut singular atau nonsingular karena tidak mempunyai determinan.

### 2. Menentukan Nilai Variabel pada Matriks Singular

Jika suatu matriks dinyatakan singular, gunakan syarat:

$$
\det(A)=0
$$

Contoh:

$$
A=
\begin{bmatrix}
x & 6 \\
3 & 9
\end{bmatrix}
$$

Karena $A$ singular:

$$
\begin{aligned}
\det(A)&=0 \\
9x-18&=0 \\
9x&=18 \\
x&=2
\end{aligned}
$$

Jadi:

$$
x=2
$$

### 3. Ciri-Ciri Matriks Singular

Suatu matriks persegi pasti singular jika:

- Salah satu baris atau kolom seluruhnya bernilai 0.
- Terdapat dua baris atau dua kolom yang sama.
- Salah satu baris merupakan kelipatan baris lain.
- Salah satu kolom merupakan kelipatan kolom lain.

Contoh:

$$
B=
\begin{bmatrix}
2 & 6 \\
1 & 3
\end{bmatrix}
$$

Baris pertama merupakan 2 kali baris kedua. Oleh karena itu:

$$
\det(B)=0
$$

> [!note]
> Tidak adanya ciri-ciri tersebut belum membuktikan bahwa matriks nonsingular. Determinannya tetap perlu diperiksa.

### 4. Sifat-Sifat Determinan

Jika $A$ dan $B$ merupakan matriks persegi berordo sama, berlaku sifat-sifat berikut.

#### A. Determinan Transpose

$$
\boxed{\det(A^T)=\det(A)}
$$

#### B. Determinan Invers

Jika $A$ mempunyai invers:

$$
\boxed{
\det(A^{-1})
=
\frac{1}{\det(A)}
}
$$

#### C. Determinan Perkalian Matriks

$$
\boxed{
\det(AB)
=
\det(A)\det(B)
}
$$

Akibatnya:

$$
\det(AB)=\det(BA)
$$

Namun, hal tersebut tidak berarti:

$$
AB=BA
$$

#### D. Determinan Pangkat Matriks

$$
\boxed{
\det(A^n)
=
\left(\det(A)\right)^n
}
$$

#### E. Determinan Perkalian Skalar

Jika $A$ berordo $n \times n$, maka:

$$
\boxed{
\det(kA)
=
k^n\det(A)
}
$$

Untuk matriks ordo $2 \times 2$:

$$
\det(kA)=k^2\det(A)
$$

Untuk matriks ordo $3 \times 3$:

$$
\det(kA)=k^3\det(A)
$$

#### F. Determinan Matriks Negatif

$$
\det(-A)
=
(-1)^n\det(A)
$$

Jika $n$ genap:

$$
\det(-A)=\det(A)
$$

Jika $n$ ganjil:

$$
\det(-A)=-\det(A)
$$

#### G. Determinan Matriks Identitas dan Matriks Nol

$$
\det(I)=1
$$

$$
\det(O)=0
$$

### 5. Determinan Matriks Diagonal dan Segitiga

Determinan matriks diagonal, segitiga atas, dan segitiga bawah diperoleh dengan mengalikan elemen-elemen diagonal utamanya.

Contoh:

$$
A=
\begin{bmatrix}
2 & 4 & 1 \\
0 & -3 & 5 \\
0 & 0 & 6
\end{bmatrix}
$$

Karena $A$ merupakan matriks segitiga atas:

$$
\begin{aligned}
\det(A)
&=(2)(-3)(6) \\
&=-36
\end{aligned}
$$

Secara umum:

$$
\boxed{
\det(A)=a_{11}a_{22}\cdots a_{nn}
}
$$

untuk matriks diagonal atau segitiga.

### 6. Pengaruh Operasi Baris terhadap Determinan

| Operasi baris | Pengaruh terhadap determinan |
|---|---|
| Menukar dua baris | Tanda determinan berubah |
| Mengalikan satu baris dengan $k$ | Determinan dikalikan $k$ |
| Menambahkan kelipatan suatu baris ke baris lain | Determinan tetap |

#### A. Menukar Dua Baris

Jika matriks $B$ diperoleh dengan menukar dua baris matriks $A$:

$$
\det(B)=-\det(A)
$$

#### B. Mengalikan Satu Baris dengan Skalar

Jika satu baris matriks $A$ dikalikan dengan $k$:

$$
\det(B)=k\det(A)
$$

#### C. Menambahkan Kelipatan Baris Lain

Jika dilakukan operasi:

$$
R_2 \rightarrow R_2+kR_1
$$

maka:

$$
\det(B)=\det(A)
$$

> [!warning]
> Mengalikan satu baris dengan $k$ berbeda dari mengalikan seluruh matriks dengan $k$.
>
> Satu baris:
>
> $$
> \det(B)=k\det(A)
> $$
>
> Seluruh matriks berordo $n \times n$:
>
> $$
> \det(kA)=k^n\det(A)
> $$

### 7. Hubungan yang Tidak Berlaku

Secara umum, tidak berlaku:

$$
\det(A+B)
=
\det(A)+\det(B)
$$

dan tidak berlaku:

$$
\det(A-B)
=
\det(A)-\det(B)
$$

---

## Contoh Soal

### Contoh Soal 1

Diketahui:

$$
A=
\begin{bmatrix}
2 & 4 \\
1 & 2
\end{bmatrix}
$$

Tentukan apakah matriks $A$ singular atau nonsingular!

> [!success]- Klik untuk Lihat Jawaban
> $$
> \begin{aligned}
> \det(A)
> &=(2)(2)-(4)(1) \\
> &=4-4 \\
> &=0
> \end{aligned}
> $$
>
> Karena $\det(A)=0$, matriks $A$ merupakan matriks singular.

### Contoh Soal 2

Diketahui:

$$
B=
\begin{bmatrix}
3 & 1 \\
2 & 4
\end{bmatrix}
$$

Tentukan apakah matriks $B$ mempunyai invers!

> [!success]- Klik untuk Lihat Jawaban
> $$
> \begin{aligned}
> \det(B)
> &=(3)(4)-(1)(2) \\
> &=12-2 \\
> &=10
> \end{aligned}
> $$
>
> Karena $\det(B)\ne 0$, matriks $B$ nonsingular dan mempunyai invers.

### Contoh Soal 3

Diketahui:

$$
C=
\begin{bmatrix}
x & 6 \\
3 & 9
\end{bmatrix}
$$

Jika matriks $C$ singular, tentukan nilai $x$!

> [!success]- Klik untuk Lihat Jawaban
> Karena matriks $C$ singular:
>
> $$
> \begin{aligned}
> \det(C)&=0 \\
> 9x-18&=0 \\
> 9x&=18 \\
> x&=2
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{x=2}
> $$

### Contoh Soal 4

Diketahui:

$$
\det(A)=-5
$$

Tentukan $\det(A^{-1})$!

> [!success]- Klik untuk Lihat Jawaban
> $$
> \begin{aligned}
> \det(A^{-1})
> &=
> \frac{1}{\det(A)} \\
> &=
> \frac{1}{-5} \\
> &=
> -\frac{1}{5}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> \det(A^{-1})=-\frac{1}{5}
> }
> $$

### Contoh Soal 5

Diketahui:

$$
\det(A)=-3
$$

dan:

$$
\det(B)=5
$$

Tentukan $\det(AB)$!

> [!success]- Klik untuk Lihat Jawaban
> $$
> \begin{aligned}
> \det(AB)
> &=
> \det(A)\det(B) \\
> &=(-3)(5) \\
> &=-15
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{\det(AB)=-15}
> $$

### Contoh Soal 6

Diketahui:

$$
\det(A)=-2
$$

Tentukan $\det(A^4)$ dan $\det(A^5)$!

> [!success]- Klik untuk Lihat Jawaban
> $$
> \begin{aligned}
> \det(A^4)
> &=(-2)^4 \\
> &=16
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> \det(A^5)
> &=(-2)^5 \\
> &=-32
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> \det(A^4)=16
> }
> $$
>
> dan:
>
> $$
> \boxed{
> \det(A^5)=-32
> }
> $$

### Contoh Soal 7

Matriks $A$ berordo $3 \times 3$ dan diketahui:

$$
\det(A)=4
$$

Tentukan $\det(2A)$!

> [!success]- Klik untuk Lihat Jawaban
> Karena $A$ berordo $3 \times 3$:
>
> $$
> \begin{aligned}
> \det(2A)
> &=2^3\det(A) \\
> &=8(4) \\
> &=32
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{\det(2A)=32}
> $$

### Contoh Soal 8

Diketahui:

$$
A=
\begin{bmatrix}
2 & 5 & -1 \\
0 & 3 & 4 \\
0 & 0 & -2
\end{bmatrix}
$$

Tentukan $\det(A)$!

> [!success]- Klik untuk Lihat Jawaban
> Matriks $A$ merupakan matriks segitiga atas. Determinannya adalah hasil kali elemen diagonal utama.
>
> $$
> \begin{aligned}
> \det(A)
> &=(2)(3)(-2) \\
> &=-12
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{\det(A)=-12}
> $$

### Contoh Soal 9

Diketahui:

$$
\det(A)=-6
$$

Tentukan determinan matriks hasil jika:

1. Dua baris matriks $A$ ditukar.
2. Satu baris matriks $A$ dikalikan dengan 4.
3. Baris kedua ditambah 3 kali baris pertama.

> [!success]- Klik untuk Lihat Jawaban
> Pertukaran dua baris:
>
> $$
> \begin{aligned}
> \det(B)
> &=-\det(A) \\
> &=6
> \end{aligned}
> $$
>
> Satu baris dikalikan dengan 4:
>
> $$
> \begin{aligned}
> \det(C)
> &=4\det(A) \\
> &=-24
> \end{aligned}
> $$
>
> Penambahan kelipatan baris:
>
> $$
> \begin{aligned}
> \det(D)
> &=\det(A) \\
> &=-6
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> \det(B)=6,\quad
> \det(C)=-24,\quad
> \det(D)=-6
> }
> $$

### Contoh Soal 10

Matriks $A$ dan $B$ berordo $3 \times 3$ dengan:

$$
\det(A)=-2
$$

dan:

$$
\det(B)=4
$$

Tentukan:

$$
\det\left(3A^TB^{-1}A^2\right)
$$

> [!success]- Klik untuk Lihat Jawaban
> Gunakan:
>
> $$
> \det(3M)=3^3\det(M)
> $$
>
> $$
> \det(A^T)=\det(A)
> $$
>
> $$
> \det(B^{-1})
> =
> \frac{1}{\det(B)}
> $$
>
> $$
> \det(A^2)
> =
> \left(\det(A)\right)^2
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> \det\left(3A^TB^{-1}A^2\right)
> &=
> 3^3
> \det(A)
> \frac{1}{\det(B)}
> \left(\det(A)\right)^2 \\
> &=
> 27(-2)
> \left(\frac{1}{4}\right)
> (-2)^2 \\
> &=-54
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> \det\left(3A^TB^{-1}A^2\right)=-54
> }
> $$

---

## Konsep Terkait

- [[Matriks/05 - Determinan Matriks Ordo 2x2 dan 3x3]]
- [[Matriks/07 - Invers Matriks Ordo 2x2 dan Sifat-Sifat Invers]]
```