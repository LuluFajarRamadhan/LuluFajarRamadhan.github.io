---
title:
---
# Matriks Singular dan Sifat-Sifat Determinan

Matriks singular dan sifat-sifat determinan membantu kita menyelesaikan berbagai persoalan matriks tanpa selalu menghitung seluruh elemen secara langsung.

Dengan mengetahui nilai determinan atau sifat tertentu dari suatu matriks, kita dapat menentukan:

- Apakah matriks mempunyai invers.
- Apakah matriks termasuk singular atau nonsingular.
- Determinan hasil perkalian beberapa matriks.
- Determinan transpose, invers, atau pangkat suatu matriks.
- Perubahan determinan setelah dilakukan operasi baris.

### 1. Matriks Singular

Matriks singular adalah matriks persegi yang ==**nilai determinannya sama dengan nol**==.

Jika matriks $A$ merupakan matriks singular, maka:

$$
\det(A)=0
$$

Matriks singular tidak mempunyai matriks invers.

$$
\det(A)=0
\implies
A^{-1}\text{ tidak ada}
$$

Sebagai contoh, perhatikan matriks berikut:

$$
A=
\begin{bmatrix}
2 & 4 \\
1 & 2
\end{bmatrix}
$$

Hitung determinannya:

$$
\begin{aligned}
\det(A)
&=(2)(2)-(4)(1)
\\
&=4-4
\\
&=0
\end{aligned}
$$

Karena:

$$
\det(A)=0
$$

maka matriks $A$ merupakan matriks singular.

Perhatikan bahwa baris pertama matriks $A$ merupakan 2 kali baris kedua.

$$
\begin{bmatrix}
2 & 4
\end{bmatrix}
=
2
\begin{bmatrix}
1 & 2
\end{bmatrix}
$$

Hubungan antarbaris seperti ini menyebabkan determinan matriks bernilai nol.

### 2. Matriks Nonsingular

Matriks nonsingular adalah matriks persegi yang determinannya tidak sama dengan nol.

$$
\det(A)\ne 0
$$

Matriks nonsingular mempunyai matriks invers.

$$
\det(A)\ne 0
\implies
A^{-1}\text{ ada}
$$

Sebagai contoh:

$$
B=
\begin{bmatrix}
3 & 1 \\
2 & 4
\end{bmatrix}
$$

Hitung determinannya:

$$
\begin{aligned}
\det(B)
&=(3)(4)-(1)(2)
\\
&=12-2
\\
&=10
\end{aligned}
$$

Karena:

$$
\det(B)=10\ne 0
$$

maka matriks $B$ merupakan matriks nonsingular dan mempunyai invers.

> [!important] Hubungan Determinan dengan Invers
> Untuk matriks persegi $A$ berlaku:
>
> $$
> A^{-1}\text{ ada}
> \iff
> \det(A)\ne 0
> $$
>
> dan:
>
> $$
> A^{-1}\text{ tidak ada}
> \iff
> \det(A)=0
> $$

### 3. Cara Menentukan Matriks Singular

Untuk menentukan apakah suatu matriks singular, gunakan langkah berikut:

1. Pastikan matriks tersebut merupakan matriks persegi.
2. Hitung determinannya.
3. Bandingkan hasil determinan dengan nol.
4. Jika determinannya nol, matriks tersebut singular.
5. Jika determinannya tidak nol, matriks tersebut nonsingular.

Untuk matriks yang memuat variabel, syarat singular dituliskan sebagai:

$$
\det(A)=0
$$

Kemudian selesaikan persamaan tersebut untuk memperoleh nilai variabelnya.

#### Contoh Matriks Singular yang Memuat Variabel

Diketahui:

$$
A=
\begin{bmatrix}
x & 6 \\
3 & 9
\end{bmatrix}
$$

Agar matriks $A$ menjadi singular, harus berlaku:

$$
\det(A)=0
$$

Maka:

$$
\begin{aligned}
\det(A)
&=(x)(9)-(6)(3)
\\
9x-18&=0
\\
9x&=18
\\
x&=2
\end{aligned}
$$

Jadi, matriks $A$ menjadi singular jika:

$$
x=2
$$

### 4. Ciri-Ciri Matriks Singular

Suatu matriks persegi dapat menjadi singular apabila memenuhi salah satu kondisi berikut:

1. Determinannya sama dengan nol.
2. Salah satu baris atau kolom seluruhnya bernilai nol.
3. Terdapat dua baris yang sama.
4. Terdapat dua kolom yang sama.
5. Salah satu baris merupakan kelipatan baris lainnya.
6. Salah satu kolom merupakan kelipatan kolom lainnya.
7. Salah satu baris dapat dibentuk dari kombinasi baris-baris lainnya.
8. Salah satu kolom dapat dibentuk dari kombinasi kolom-kolom lainnya.

#### Contoh Dua Baris yang Sama

$$
A=
\begin{bmatrix}
1 & 2 \\
1 & 2
\end{bmatrix}
$$

Determinan matriks tersebut adalah:

$$
\begin{aligned}
\det(A)
&=(1)(2)-(2)(1)
\\
&=2-2
\\
&=0
\end{aligned}
$$

Karena kedua baris sama, matriks tersebut singular.

#### Contoh Baris yang Saling Berkelipatan

$$
B=
\begin{bmatrix}
2 & 6 \\
1 & 3
\end{bmatrix}
$$

Baris pertama merupakan 2 kali baris kedua.

$$
\begin{bmatrix}
2 & 6
\end{bmatrix}
=
2
\begin{bmatrix}
1 & 3
\end{bmatrix}
$$

Determinan matriks $B$ adalah:

$$
\begin{aligned}
\det(B)
&=(2)(3)-(6)(1)
\\
&=6-6
\\
&=0
\end{aligned}
$$

Maka, matriks $B$ merupakan matriks singular.

> [!warning] Pemeriksaan Ciri Matriks Singular
> Adanya dua baris atau kolom yang sama maupun saling berkelipatan langsung menunjukkan bahwa determinan bernilai nol.
>
> Namun, tidak ditemukannya ciri tersebut belum membuktikan bahwa matriks nonsingular. Determinannya tetap perlu dihitung.

### 5. Sifat Determinan dari Transpose Matriks

Determinan suatu matriks sama dengan determinan transposenya.

$$
\boxed{
\det(A^T)=\det(A)
}
$$

Transpose hanya mengubah baris menjadi kolom. Perubahan tersebut tidak mengubah nilai determinan.

Sebagai contoh:

$$
A=
\begin{bmatrix}
3 & -1 \\
2 & 4
\end{bmatrix}
$$

Determinan matriks $A$ adalah:

$$
\begin{aligned}
\det(A)
&=(3)(4)-(-1)(2)
\\
&=12+2
\\
&=14
\end{aligned}
$$

Transpose matriks $A$ adalah:

$$
A^T=
\begin{bmatrix}
3 & 2 \\
-1 & 4
\end{bmatrix}
$$

Determinan $A^T$ adalah:

$$
\begin{aligned}
\det(A^T)
&=(3)(4)-(2)(-1)
\\
&=12+2
\\
&=14
\end{aligned}
$$

Dengan demikian:

$$
\det(A^T)=\det(A)=14
$$

### 6. Sifat Determinan dari Invers Matriks

Jika matriks $A$ mempunyai invers, maka:

$$
\boxed{
\det(A^{-1})
=
\frac{1}{\det(A)}
}
$$

Sifat tersebut hanya dapat digunakan jika:

$$
\det(A)\ne 0
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

Jika:

$$
\det(A)=-4
$$

maka:

$$
\det(A^{-1})
=
-\frac{1}{4}
$$

> [!warning] Syarat Penggunaan
> Rumus determinan invers tidak dapat digunakan jika $\det(A)=0$ karena matriks singular tidak mempunyai invers.

### 7. Sifat Determinan dari Perkalian Matriks

Jika $A$ dan $B$ merupakan matriks persegi dengan ordo yang sama, maka:

$$
\boxed{
\det(AB)=\det(A)\det(B)
}
$$

Sifat tersebut juga berlaku untuk lebih dari dua matriks.

$$
\det(ABC)
=
\det(A)\det(B)\det(C)
$$

Walaupun perkalian matriks umumnya tidak bersifat komutatif, determinan hasil perkalian memenuhi:

$$
\det(AB)
=
\det(BA)
$$

karena:

$$
\begin{aligned}
\det(AB)
&=\det(A)\det(B)
\\
\det(BA)
&=\det(B)\det(A)
\end{aligned}
$$

Perkalian nilai determinan merupakan perkalian bilangan real sehingga:

$$
\det(A)\det(B)
=
\det(B)\det(A)
$$

Namun, hubungan tersebut tidak berarti:

$$
AB=BA
$$

Secara umum:

$$
AB\ne BA
$$

### 8. Sifat Determinan dari Pangkat Matriks

Jika $A$ merupakan matriks persegi dan $n$ merupakan bilangan bulat positif, maka:

$$
\boxed{
\det(A^n)
=
\left(\det(A)\right)^n
}
$$

Sebagai contoh, jika:

$$
\det(A)=3
$$

maka:

$$
\det(A^4)
=
3^4
=
81
$$

Jika:

$$
\det(A)=-2
$$

maka:

$$
\det(A^3)
=
(-2)^3
=
-8
$$

Perhatikan pengaruh pangkat terhadap tanda:

- Pangkat genap menghasilkan nilai positif.
- Pangkat ganjil mempertahankan tanda negatif.

### 9. Sifat Determinan dari Perkalian Skalar

Misalkan $A$ merupakan matriks persegi berordo $n \times n$ dan $k$ merupakan skalar.

Maka:

$$
\boxed{
\det(kA)
=
k^n\det(A)
}
$$

Pangkat pada skalar ditentukan oleh ordo matriks.

#### Matriks Ordo $2 \times 2$

Jika $A$ berordo $2 \times 2$, maka:

$$
\det(kA)
=
k^2\det(A)
$$

#### Matriks Ordo $3 \times 3$

Jika $A$ berordo $3 \times 3$, maka:

$$
\det(kA)
=
k^3\det(A)
$$

Sebagai contoh, jika $A$ berordo $3 \times 3$ dan:

$$
\det(A)=4
$$

maka:

$$
\begin{aligned}
\det(2A)
&=2^3\det(A)
\\
&=8(4)
\\
&=32
\end{aligned}
$$

> [!warning] Kesalahan yang Sering Terjadi
> Pada umumnya:
>
> $$
> \det(kA)\ne k\det(A)
> $$
>
> Rumus yang benar untuk matriks berordo $n \times n$ adalah:
>
> $$
> \det(kA)=k^n\det(A)
> $$

### 10. Determinan dari Matriks Negatif

Matriks $-A$ dapat ditulis sebagai:

$$
-A=(-1)A
$$

Dengan menggunakan sifat perkalian skalar:

$$
\det(-A)
=
(-1)^n\det(A)
$$

Jika ordo matriks genap, maka:

$$
\det(-A)=\det(A)
$$

Jika ordo matriks ganjil, maka:

$$
\det(-A)=-\det(A)
$$

Sebagai contoh, jika $A$ berordo $2 \times 2$, maka:

$$
\det(-A)
=
(-1)^2\det(A)
=
\det(A)
$$

Jika $A$ berordo $3 \times 3$, maka:

$$
\det(-A)
=
(-1)^3\det(A)
=
-\det(A)
$$

### 11. Determinan Matriks Identitas

Matriks identitas mempunyai determinan sama dengan 1.

$$
\boxed{
\det(I_n)=1
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
\begin{aligned}
\det(I_2)
&=(1)(1)-(0)(0)
\\
&=1
\end{aligned}
$$

Untuk matriks identitas berordo $3 \times 3$:

$$
I_3=
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}
$$

berlaku:

$$
\det(I_3)=1
$$

### 12. Determinan Matriks Nol

Matriks nol persegi mempunyai determinan sama dengan nol.

$$
\boxed{
\det(O)=0
}
$$

Sebagai contoh:

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
\det(O)
&=(0)(0)-(0)(0)
\\
&=0
\end{aligned}
$$

Matriks nol selalu merupakan matriks singular.

### 13. Determinan Matriks Diagonal dan Segitiga

Determinan matriks diagonal, matriks segitiga atas, dan matriks segitiga bawah diperoleh dengan mengalikan elemen-elemen pada diagonal utamanya.

#### Matriks Diagonal

Jika:

$$
D=
\begin{bmatrix}
a & 0 & 0 \\
0 & b & 0 \\
0 & 0 & c
\end{bmatrix}
$$

maka:

$$
\boxed{
\det(D)=abc
}
$$

#### Matriks Segitiga Atas

Jika:

$$
U=
\begin{bmatrix}
a & p & q \\
0 & b & r \\
0 & 0 & c
\end{bmatrix}
$$

maka:

$$
\boxed{
\det(U)=abc
}
$$

#### Matriks Segitiga Bawah

Jika:

$$
L=
\begin{bmatrix}
a & 0 & 0 \\
p & b & 0 \\
q & r & c
\end{bmatrix}
$$

maka:

$$
\boxed{
\det(L)=abc
}
$$

Apabila salah satu elemen diagonal utama bernilai nol, determinannya juga bernilai nol.

### 14. Pengaruh Pertukaran Baris atau Kolom

Jika dua baris suatu matriks dipertukarkan, tanda determinannya berubah.

Jika matriks $B$ diperoleh dari matriks $A$ dengan menukar dua baris, maka:

$$
\boxed{
\det(B)=-\det(A)
}
$$

Sifat yang sama berlaku untuk pertukaran dua kolom.

Jika dua baris dipertukarkan sebanyak dua kali, tanda determinan berubah dua kali dan kembali ke nilai semula.

### 15. Pengaruh Perkalian Satu Baris dengan Skalar

Jika satu baris matriks dikalikan dengan skalar $k$, determinannya juga dikalikan dengan $k$.

Jika matriks $B$ diperoleh dari matriks $A$ dengan mengalikan satu barisnya dengan $k$, maka:

$$
\boxed{
\det(B)=k\det(A)
}
$$

Perhatikan perbedaannya dengan perkalian seluruh matriks.

- Jika satu baris dikalikan dengan $k$, determinan dikalikan dengan $k$.
- Jika seluruh matriks berordo $n \times n$ dikalikan dengan $k$, determinan dikalikan dengan $k^n$.

### 16. Pengaruh Penjumlahan Kelipatan Baris

Jika suatu baris ditambah dengan kelipatan baris lain, nilai determinannya tidak berubah.

Misalkan baris kedua diganti dengan:

$$
R_2+kR_1
$$

maka determinan matriks hasil tetap sama dengan determinan matriks semula.

$$
\boxed{
\det(B)=\det(A)
}
$$

Sifat yang sama berlaku pada operasi kolom.

### 17. Ringkasan Pengaruh Operasi Baris

Misalkan matriks $B$ diperoleh dari matriks $A$ melalui operasi baris tertentu.

| Operasi baris | Pengaruh terhadap determinan |
|---|---|
| Menukar dua baris | Tanda determinan berubah |
| Mengalikan satu baris dengan $k$ | Determinan dikalikan $k$ |
| Menambahkan kelipatan suatu baris ke baris lain | Determinan tidak berubah |

### 18. Gabungan Beberapa Sifat Determinan

Beberapa sifat determinan dapat digunakan secara bersamaan.

Misalkan $A$ dan $B$ merupakan matriks persegi berordo $3 \times 3$ dengan:

$$
\det(A)=2
$$

dan:

$$
\det(B)=-4
$$

Tentukan:

$$
\det(3A^TB^{-1})
$$

Gunakan sifat berikut:

$$
\det(3M)=3^3\det(M)
$$

$$
\det(A^T)=\det(A)
$$

$$
\det(B^{-1})
=
\frac{1}{\det(B)}
$$

Maka:

$$
\begin{aligned}
\det(3A^TB^{-1})
&=
3^3
\det(A^T)
\det(B^{-1})
\\
&=
27
\det(A)
\frac{1}{\det(B)}
\\
&=
27(2)
\left(-\frac{1}{4}\right)
\\
&=
-\frac{27}{2}
\end{aligned}
$$

### 19. Kesalahan yang Sering Terjadi

> [!warning] Kesalahan yang Sering Terjadi
> - Menggunakan determinan pada matriks yang bukan matriks persegi.
> - Menganggap matriks dengan determinan nol mempunyai invers.
> - Menulis $\det(kA)=k\det(A)$ tanpa memperhatikan ordo matriks.
> - Menganggap $\det(A+B)=\det(A)+\det(B)$.
> - Menganggap $\det(A-B)=\det(A)-\det(B)$.
> - Menganggap $\det(AB)=\det(A)+\det(B)$.
> - Lupa mengubah tanda determinan setelah menukar dua baris.
> - Mengalikan determinan dengan $k^n$ ketika hanya satu baris yang dikalikan dengan $k$.
> - Menganggap penambahan kelipatan suatu baris mengubah nilai determinan.

Pada umumnya, tidak berlaku:

$$
\det(A+B)=\det(A)+\det(B)
$$

dan tidak berlaku:

$$
\det(A-B)=\det(A)-\det(B)
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

Tentukan apakah matriks $A$ merupakan matriks singular atau nonsingular!

> [!success]- Klik untuk Lihat Jawaban
> Hitung determinan matriks $A$.
>
> $$
> \begin{aligned}
> \det(A)
> &=(2)(2)-(4)(1)
> \\
> &=4-4
> \\
> &=0
> \end{aligned}
> $$
>
> Karena:
>
> $$
> \det(A)=0
> $$
>
> maka matriks $A$ merupakan matriks singular.
>
> Jadi:
>
> $$
> \boxed{A\text{ adalah matriks singular}}
> $$

### Contoh Soal 2

Diketahui matriks:

$$
A=
\begin{bmatrix}
x & 6 \\
3 & 9
\end{bmatrix}
$$

Matriks $A$ merupakan matriks singular. Tentukan nilai $x$!

> [!success]- Klik untuk Lihat Jawaban
> Matriks singular mempunyai determinan sama dengan nol.
>
> $$
> \det(A)=0
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> (x)(9)-(6)(3)&=0
> \\
> 9x-18&=0
> \\
> 9x&=18
> \\
> x&=2
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{x=2}
> $$

### Contoh Soal 3

Diketahui:

$$
A=
\begin{bmatrix}
3 & -1 \\
2 & 4
\end{bmatrix}
$$

Buktikan bahwa $\det(A^T)=\det(A)$!

> [!success]- Klik untuk Lihat Jawaban
> Hitung determinan matriks $A$:
>
> $$
> \begin{aligned}
> \det(A)
> &=(3)(4)-(-1)(2)
> \\
> &=12+2
> \\
> &=14
> \end{aligned}
> $$
>
> Transpose matriks $A$ adalah:
>
> $$
> A^T=
> \begin{bmatrix}
> 3 & 2 \\
> -1 & 4
> \end{bmatrix}
> $$
>
> Hitung determinan $A^T$:
>
> $$
> \begin{aligned}
> \det(A^T)
> &=(3)(4)-(2)(-1)
> \\
> &=12+2
> \\
> &=14
> \end{aligned}
> $$
>
> Karena:
>
> $$
> \det(A^T)=\det(A)=14
> $$
>
> maka sifat tersebut terbukti untuk matriks $A$.

### Contoh Soal 4

Diketahui matriks $A$ mempunyai invers dan:

$$
\det(A)=-5
$$

Tentukan $\det(A^{-1})$!

> [!success]- Klik untuk Lihat Jawaban
> Gunakan sifat:
>
> $$
> \det(A^{-1})
> =
> \frac{1}{\det(A)}
> $$
>
> Substitusikan nilai $\det(A)=-5$:
>
> $$
> \begin{aligned}
> \det(A^{-1})
> &=
> \frac{1}{-5}
> \\
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

Diketahui matriks persegi $A$ dan $B$ dengan:

$$
\det(A)=-3
$$

dan:

$$
\det(B)=5
$$

Tentukan $\det(AB)$ dan $\det(BA)$!

> [!success]- Klik untuk Lihat Jawaban
> Gunakan sifat determinan perkalian:
>
> $$
> \det(AB)=\det(A)\det(B)
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> \det(AB)
> &=(-3)(5)
> \\
> &=-15
> \end{aligned}
> $$
>
> Untuk $\det(BA)$:
>
> $$
> \begin{aligned}
> \det(BA)
> &=\det(B)\det(A)
> \\
> &=(5)(-3)
> \\
> &=-15
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> \det(AB)=\det(BA)=-15
> }
> $$
>
> Kesamaan tersebut tidak berarti bahwa $AB=BA$.

### Contoh Soal 6

Diketahui:

$$
\det(A)=-2
$$

Tentukan nilai $\det(A^4)$ dan $\det(A^5)$!

> [!success]- Klik untuk Lihat Jawaban
> Gunakan sifat:
>
> $$
> \det(A^n)
> =
> \left(\det(A)\right)^n
> $$
>
> Untuk $A^4$:
>
> $$
> \begin{aligned}
> \det(A^4)
> &=(-2)^4
> \\
> &=16
> \end{aligned}
> $$
>
> Untuk $A^5$:
>
> $$
> \begin{aligned}
> \det(A^5)
> &=(-2)^5
> \\
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

Tentukan $\det(2A)$ dan $\det(-A)$!

> [!success]- Klik untuk Lihat Jawaban
> Karena matriks $A$ berordo $3 \times 3$, gunakan:
>
> $$
> \det(kA)=k^3\det(A)
> $$
>
> Tentukan $\det(2A)$:
>
> $$
> \begin{aligned}
> \det(2A)
> &=2^3\det(A)
> \\
> &=8(4)
> \\
> &=32
> \end{aligned}
> $$
>
> Tentukan $\det(-A)$:
>
> $$
> \begin{aligned}
> \det(-A)
> &=(-1)^3\det(A)
> \\
> &=(-1)(4)
> \\
> &=-4
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{\det(2A)=32}
> $$
>
> dan:
>
> $$
> \boxed{\det(-A)=-4}
> $$

### Contoh Soal 8

Diketahui:

$$
\det(A)=-6
$$

Tentukan determinan matriks hasil jika dilakukan operasi berikut:

1. Dua baris matriks $A$ dipertukarkan untuk membentuk matriks $B$.
2. Salah satu baris matriks $A$ dikalikan dengan 4 untuk membentuk matriks $C$.
3. Baris kedua matriks $A$ ditambah 3 kali baris pertama untuk membentuk matriks $D$.

> [!success]- Klik untuk Lihat Jawaban
> **Matriks $B$**
>
> Pertukaran dua baris mengubah tanda determinan.
>
> $$
> \begin{aligned}
> \det(B)
> &=-\det(A)
> \\
> &=-(-6)
> \\
> &=6
> \end{aligned}
> $$
>
> **Matriks $C$**
>
> Mengalikan satu baris dengan 4 menyebabkan determinan dikalikan dengan 4.
>
> $$
> \begin{aligned}
> \det(C)
> &=4\det(A)
> \\
> &=4(-6)
> \\
> &=-24
> \end{aligned}
> $$
>
> **Matriks $D$**
>
> Menambahkan kelipatan satu baris ke baris lain tidak mengubah determinan.
>
> $$
> \begin{aligned}
> \det(D)
> &=\det(A)
> \\
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

### Contoh Soal 9

Diketahui:

$$
G=
\begin{bmatrix}
x & 1 & 0 \\
2 & 3 & 1 \\
0 & 4 & 2
\end{bmatrix}
$$

Tentukan nilai $x$ agar matriks $G$ menjadi matriks singular!

> [!success]- Klik untuk Lihat Jawaban
> Matriks singular mempunyai determinan sama dengan nol.
>
> $$
> \det(G)=0
> $$
>
> Hitung determinan menggunakan metode Sarrus:
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
> Karena matriks $G$ harus singular:
>
> $$
> \begin{aligned}
> 2x-4&=0
> \\
> 2x&=4
> \\
> x&=2
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{x=2}
> $$

### Contoh Soal 10

Matriks $A$ dan $B$ merupakan matriks persegi berordo $3 \times 3$.

Diketahui:

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
> Gunakan sifat-sifat berikut:
>
> $$
> \det(kM)=k^3\det(M)
> $$
>
> karena matriks berordo $3 \times 3$.
>
> Selain itu:
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
> dan:
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
> \det(A^T)
> \det(B^{-1})
> \det(A^2)
> \\
> &=
> 27
> \det(A)
> \frac{1}{\det(B)}
> \left(\det(A)\right)^2
> \\
> &=
> 27(-2)
> \left(\frac{1}{4}\right)
> (-2)^2
> \\
> &=
> 27(-2)
> \left(\frac{1}{4}\right)
> (4)
> \\
> &=27(-2)
> \\
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