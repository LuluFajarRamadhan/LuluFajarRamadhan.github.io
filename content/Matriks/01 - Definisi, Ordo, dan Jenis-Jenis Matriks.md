---
title:
---
# Definisi, Ordo, dan Jenis-Jenis Matriks

Matriks adalah susunan bilangan-bilangan yang diatur dalam baris dan kolom. Susunan ini berbentuk persegi atau persegi panjang dan ==**ditulis di dalam tanda kurung $(\dots)$ atau kurung siku $[\dots]$.**==

Secara umum, sebuah matriks dinyatakan dengan huruf kapital, misalnya $A$, $B$, atau $C$. Elemen-elemen di dalamnya dinyatakan dengan huruf kecil berindeks, seperti $a_{ij}$. Notasi $a_{ij}$ berarti bahwa elemen tersebut terletak pada **baris ke-$i$** dan **kolom ke-$j$**.

Sebagai contoh, perhatikan matriks berikut.

$$  
A =  
\begin{bmatrix}  
2 & -1 & 4 \\  
5 & 0 & 7  
\end{bmatrix}  
$$

Pada matriks $A$ tersebut:

- $a_{11}=2$, karena terletak pada baris ke-1 dan kolom ke-1.
    
- $a_{13}=4$, karena terletak pada baris ke-1 dan kolom ke-3.
    
- $a_{22}=0$, karena terletak pada baris ke-2 dan kolom ke-2.
    
- $a_{23}=7$, karena terletak pada baris ke-2 dan kolom ke-3.
    

### 1. Ordo Matriks

Ordo matriks adalah ukuran matriks yang menunjukkan **banyaknya baris** dan **banyaknya kolom**. Jika suatu matriks mempunyai $m$ baris dan $n$ kolom, matriks tersebut dikatakan berordo $m \times n$.

$$  
A_{m \times n}  
$$

Keterangan:

- $m$ menyatakan banyaknya **baris**.
    
- $n$ menyatakan banyaknya **kolom**.
    
- Ordo selalu dibaca dengan urutan **baris terlebih dahulu, kemudian kolom**.
    

Dengan demikian, notasi $A_{m \times n}$ tidak menunjukkan nilai elemen-elemen matriks. Notasi tersebut hanya menunjukkan bahwa matriks $A$ mempunyai $m$ baris dan $n$ kolom.

Sebagai contoh, jika sebuah matriks ditulis sebagai $A_{2 \times 3}$, artinya matriks $A$ mempunyai:

- 2 baris, dan
    
- 3 kolom.
    

Bentuk umumnya dapat dituliskan sebagai berikut.

$$  
A =  
\begin{bmatrix}  
a_{11} & a_{12} & a_{13} \\  
a_{21} & a_{22} & a_{23}  
\end{bmatrix}  
$$

Pada matriks tersebut terdapat 6 elemen karena:

$$  
2 \times 3 = 6  
$$

Secara umum, banyaknya elemen dalam matriks berordo $m \times n$ adalah:

$$  
m \times n  
$$

> [!important] Cara Menentukan Ordo  
> Hitung banyaknya susunan horizontal sebagai baris, lalu hitung banyaknya susunan vertikal sebagai kolom. Nilai elemen di dalam matriks tidak memengaruhi ordonya.

Sebagai contoh, perhatikan matriks berikut.

$$  
B =  
\begin{bmatrix}  
3 & 1 \\  
-2 & 4 \\  
0 & 5  
\end{bmatrix}  
$$

Matriks $B$ mempunyai:

- 3 baris, yaitu $\begin{bmatrix}3 & 1\end{bmatrix}$, $\begin{bmatrix}-2 & 4\end{bmatrix}$, dan $\begin{bmatrix}0 & 5\end{bmatrix}$.
    
- 2 kolom.
    

Oleh karena itu, ordo matriks $B$ adalah:

$$  
3 \times 2  
$$

Banyaknya elemen matriks $B$ adalah:

$$  
3 \times 2 = 6  
$$

> [!warning] Kesalahan yang Sering Terjadi  
> Ordo $3 \times 2$ berarti 3 baris dan 2 kolom, bukan 3 kolom dan 2 baris. Ingatlah bahwa baris selalu ditulis lebih dahulu.

### 2. Jenis-Jenis Matriks Berdasarkan Ukuran dan Elemen

#### A. Jenis Matriks Berdasarkan Ukuran atau Bentuk

##### 1. Matriks Baris

Matriks baris adalah matriks yang hanya mempunyai satu baris, sehingga ordonya berbentuk $1 \times n$.

Contoh:

$$  
A =  
\begin{bmatrix}  
2 & -1 & 4 & 7  
\end{bmatrix}  
$$

Matriks $A$ mempunyai 1 baris dan 4 kolom. Oleh karena itu, matriks $A$ merupakan matriks baris berordo $1 \times 4$.

##### 2. Matriks Kolom

Matriks kolom adalah matriks yang hanya mempunyai satu kolom, sehingga ordonya berbentuk $m \times 1$.

Contoh:

$$  
B =  
\begin{bmatrix}  
3 \\  
0 \\  
-5  
\end{bmatrix}  
$$

Matriks $B$ mempunyai 3 baris dan 1 kolom. Oleh karena itu, matriks $B$ merupakan matriks kolom berordo $3 \times 1$.

##### 3. Matriks Persegi Panjang

Matriks persegi panjang adalah matriks yang banyak barisnya tidak sama dengan banyak kolomnya, yaitu $m \ne n$.

Contoh:

$$  
C =  
\begin{bmatrix}  
1 & 2 & 3 \\  
4 & 5 & 6  
\end{bmatrix}  
$$

Matriks $C$ mempunyai 2 baris dan 3 kolom. Oleh karena itu, matriks $C$ merupakan matriks persegi panjang berordo $2 \times 3$.

##### 4. Matriks Persegi

Matriks persegi adalah matriks yang mempunyai jumlah baris dan kolom yang sama, yaitu $m=n$. Matriks persegi berordo $n \times n$.

Contoh:

$$  
D =  
\begin{bmatrix}  
2 & 1 & 4 \\  
0 & 5 & -1 \\  
7 & 3 & 6  
\end{bmatrix}  
$$

Matriks $D$ mempunyai 3 baris dan 3 kolom. Oleh karena itu, matriks $D$ merupakan matriks persegi berordo $3 \times 3$.

Pada matriks persegi terdapat dua jenis diagonal.

- **Diagonal utama**, yaitu elemen-elemen yang terletak dari sudut kiri atas menuju sudut kanan bawah.
    
- **Diagonal sekunder**, yaitu elemen-elemen yang terletak dari sudut kanan atas menuju sudut kiri bawah.
    

Pada matriks $D$:

- Elemen diagonal utama adalah $2$, $5$, dan $6$.
    
- Elemen diagonal sekunder adalah $4$, $5$, dan $7$.
    

Secara umum, elemen diagonal utama pada matriks persegi memenuhi:

$$  
i=j  
$$

Artinya, elemen diagonal utama adalah $a_{11}$, $a_{22}$, $a_{33}$, dan seterusnya.

#### B. Jenis Matriks Berdasarkan Pola Elemennya

##### 5. Matriks Nol $(O)$

Matriks nol adalah matriks yang seluruh elemennya bernilai 0. Matriks nol dapat berbentuk persegi maupun persegi panjang.

Contoh:

$$  
O =  
\begin{bmatrix}  
0 & 0 & 0 \\  
0 & 0 & 0  
\end{bmatrix}  
$$

Matriks $O$ merupakan matriks nol berordo $2 \times 3$.

Contoh matriks nol berbentuk persegi:

$$  
O =  
\begin{bmatrix}  
0 & 0 \\  
0 & 0  
\end{bmatrix}  
$$

##### 6. Matriks Diagonal $(D)$

Matriks diagonal adalah matriks persegi yang seluruh elemen di luar diagonal utamanya bernilai 0. Elemen-elemen pada diagonal utamanya boleh bernilai nol maupun bukan nol.

Contoh:

$$  
D =  
\begin{bmatrix}  
4 & 0 & 0 \\  
0 & -2 & 0 \\  
0 & 0 & 7  
\end{bmatrix}  
$$

Pada matriks tersebut, elemen-elemen di luar diagonal utama semuanya bernilai 0.

Contoh lain:

$$  
D =  
\begin{bmatrix}  
5 & 0 & 0 \\  
0 & 0 & 0 \\  
0 & 0 & -3  
\end{bmatrix}  
$$

Matriks tersebut tetap merupakan matriks diagonal walaupun salah satu elemen pada diagonal utamanya bernilai 0.

##### 7. Matriks Skalar $(S)$

Matriks skalar adalah matriks diagonal yang semua elemen pada diagonal utamanya mempunyai nilai yang sama.

Contoh:

$$  
S =  
\begin{bmatrix}  
3 & 0 & 0 \\  
0 & 3 & 0 \\  
0 & 0 & 3  
\end{bmatrix}  
$$

Matriks tersebut merupakan matriks skalar karena semua elemen diagonal utamanya bernilai 3.

Secara umum, matriks skalar dapat dituliskan sebagai:

$$  
S=kI  
$$

dengan $k$ merupakan suatu bilangan dan $I$ merupakan matriks identitas.

##### 8. Matriks Identitas $(I)$

Matriks identitas adalah matriks persegi yang elemen-elemen pada diagonal utamanya bernilai 1, sedangkan seluruh elemen lainnya bernilai 0.

Matriks identitas biasanya ditulis sebagai $I_n$, dengan $n$ menunjukkan ordonya.

Contoh matriks identitas berordo $2 \times 2$:

$$  
I_2 =  
\begin{bmatrix}  
1 & 0 \\  
0 & 1  
\end{bmatrix}  
$$

Contoh matriks identitas berordo $3 \times 3$:

$$  
I_3 =  
\begin{bmatrix}  
1 & 0 & 0 \\  
0 & 1 & 0 \\  
0 & 0 & 1  
\end{bmatrix}  
$$

Matriks identitas memiliki peran yang menyerupai bilangan 1 dalam perkalian bilangan. Jika perkalian matriks dapat dilakukan, maka berlaku:

$$  
AI=IA=A  
$$

##### 9. Matriks Segitiga Atas

Matriks segitiga atas adalah matriks persegi yang seluruh elemen di bawah diagonal utamanya bernilai 0.

Contoh:

$$  
U =  
\begin{bmatrix}  
2 & 3 & -1 \\  
0 & 5 & 4 \\  
0 & 0 & 7  
\end{bmatrix}  
$$

Elemen-elemen di bawah diagonal utama adalah $u_{21}$, $u_{31}$, dan $u_{32}$. Ketiga elemen tersebut bernilai 0.

##### 10. Matriks Segitiga Bawah

Matriks segitiga bawah adalah matriks persegi yang seluruh elemen di atas diagonal utamanya bernilai 0.

Contoh:

$$  
L =  
\begin{bmatrix}  
2 & 0 & 0 \\  
3 & 5 & 0 \\  
-1 & 4 & 7  
\end{bmatrix}  
$$

Elemen-elemen di atas diagonal utama adalah $l_{12}$, $l_{13}$, dan $l_{23}$. Ketiga elemen tersebut bernilai 0.

##### 11. Matriks Simetris

Matriks simetris adalah matriks persegi yang elemen-elemen di sebelah kanan diagonal utama merupakan cerminan dari elemen-elemen di sebelah kiri diagonal utama.

Dengan kata lain, matriks $A$ disebut simetris apabila:

$$  
a_{ij}=a_{ji}  
$$

Contoh:

$$  
P =  
\begin{bmatrix}  
2 & 3 & -1 \\  
3 & 5 & 4 \\ 
-1 & 4 & 7  
\end{bmatrix}  
$$

Pada matriks $P$ berlaku:

- $p_{12}=p_{21}=3$.
    
- $p_{13}=p_{31}=-1$.
    
- $p_{23}=p_{32}=4$.
    

Matriks simetris juga dapat dikenali melalui transposenya. Matriks $P$ disebut simetris apabila:

$$  
P^T=P  
$$

##### 12. Matriks Antisimetris

Matriks antisimetris adalah matriks persegi yang memenuhi:

$$  
a_{ij}=-a_{ji}  
$$

Setiap elemen pada diagonal utama matriks antisimetris harus bernilai 0.

Contoh:

$$  
Q =  
\begin{bmatrix}  
0 & 2 & -3 \\  
-2 & 0 & 4 \\  
3 & -4 & 0  
\end{bmatrix}  
$$

Pada matriks $Q$ berlaku:

- $q_{12}=-q_{21}$.
    
- $q_{13}=-q_{31}$.
    
- $q_{23}=-q_{32}$.
    
- $q_{11}=q_{22}=q_{33}=0$.
    

Matriks antisimetris juga memenuhi:

$$  
Q^T=-Q  
$$

##### 13. Matriks Konstan

Matriks konstan adalah matriks yang seluruh elemennya memiliki nilai yang sama.

Contoh:

$$  
K =  
\begin{bmatrix}  
4 & 4 & 4 \\  
4 & 4 & 4  
\end{bmatrix}  
$$

Seluruh elemen pada matriks $K$ bernilai 4. Oleh karena itu, matriks $K$ merupakan matriks konstan berordo $2 \times 3$.

Matriks konstan tidak harus berbentuk persegi.

##### 14. Matriks Biner

Matriks biner adalah matriks yang seluruh elemennya hanya terdiri dari bilangan 0 dan 1.

Contoh:

$$  
B =  
\begin{bmatrix}  
1 & 0 & 1 \\  
0 & 1 & 0  
\end{bmatrix}  
$$

Matriks biner sering digunakan untuk menyatakan dua keadaan, seperti benar atau salah, aktif atau tidak aktif, serta terhubung atau tidak terhubung.

> [!note] Hubungan Beberapa Jenis Matriks  
> Matriks identitas merupakan matriks skalar. Matriks skalar merupakan matriks diagonal. Matriks diagonal juga merupakan matriks segitiga atas dan matriks segitiga bawah.
> 
> Sebuah matriks dapat termasuk ke dalam lebih dari satu jenis. Sebagai contoh, matriks identitas berordo $3 \times 3$ merupakan matriks persegi, matriks diagonal, matriks skalar, matriks segitiga atas, matriks segitiga bawah, dan matriks simetris.

---

## Contoh Soal

### Contoh Soal 1

Diketahui matriks $P$ sebagai berikut:

$$  
P =  
\begin{bmatrix}  
3 & -2 & 5 & 1  
\end{bmatrix}  
$$

Tentukan ordo, jenis matriks berdasarkan bentuknya, dan nilai elemen $p_{13}$!

> [!success]- Klik untuk Lihat Jawaban
> 
> - **Menentukan Ordo:** Matriks $P$ mempunyai 1 baris dan 4 kolom. Oleh karena itu, ordo matriks $P$ adalah $1 \times 4$.
>     
> - **Menentukan Jenis Matriks:** Karena hanya mempunyai satu baris, matriks $P$ merupakan matriks baris.
>     
> - **Mencari Elemen Matriks:** $p_{13}$ adalah elemen pada baris ke-1 dan kolom ke-3, sehingga $p_{13}=5$.
>     
> 
> Jadi, matriks $P$ berordo $1 \times 4$, termasuk matriks baris, dan $p_{13}=5$.

### Contoh Soal 2

Diketahui matriks $A$ sebagai berikut:

$$  
A =  
\begin{bmatrix}  
2 & -1 & 4 \\  
5 & 0 & 7  
\end{bmatrix}  
$$

Tentukan ordo dari matriks $A$ serta nilai dari elemen $a_{21}+a_{13}$!

> [!success]- Klik untuk Lihat Jawaban
> 
> - **Menentukan Ordo:** Jika kita perhatikan matriks $A$, susunan horizontal atau baris berjumlah 2 dan susunan vertikal atau kolom berjumlah 3. Maka, ordo matriks $A$ adalah $2 \times 3$.
>     
> - **Mencari Elemen Matriks:**
>     
>     - $a_{21}$ adalah elemen pada baris ke-2 dan kolom ke-1, sehingga $a_{21}=5$.
>         
>     - $a_{13}$ adalah elemen pada baris ke-1 dan kolom ke-3, sehingga $a_{13}=4$.
>         
> 
> Lakukan operasi penjumlahan:
> 
> $$  
> \begin{aligned}  
> a_{21}+a_{13} &= 5+4 \  
> &= 9  
> \end{aligned}  
> $$
> 
> Jadi, ordo matriks $A$ adalah $2 \times 3$ dan nilai dari $a_{21}+a_{13}$ adalah 9.

### Contoh Soal 3

Diketahui matriks $B$ sebagai berikut:

$$  
B =  
\begin{bmatrix}  
4 \\  
-1 \\  
0 \\  
6  
\end{bmatrix}  
$$

Tentukan ordo, jenis matriks berdasarkan bentuknya, serta nilai $b_{21}+b_{41}$!

> [!success]- Klik untuk Lihat Jawaban
> 
> - **Menentukan Ordo:** Matriks $B$ mempunyai 4 baris dan 1 kolom. Maka, ordo matriks $B$ adalah $4 \times 1$.
>     
> - **Menentukan Jenis Matriks:** Karena hanya mempunyai satu kolom, matriks $B$ merupakan matriks kolom.
>     
> - **Mencari Elemen Matriks:**
>     
>     - $b_{21}=-1$.
>         
>     - $b_{41}=6$.
>         
> 
> Lakukan operasi penjumlahan:
> 
> $$  
> \begin{aligned}  
> b_{21}+b_{41} &= -1+6 \  
> &= 5  
> \end{aligned}  
> $$
> 
> Jadi, matriks $B$ berordo $4 \times 1$, termasuk matriks kolom, dan $b_{21}+b_{41}=5$.

### Contoh Soal 4

Perhatikan matriks $C$ dan $D$ berikut:

$$  
C =  
\begin{bmatrix}  
1 & 2 & 3 \\  
4 & 5 & 6  
\end{bmatrix},  
\qquad  
D =  
\begin{bmatrix}  
2 & 0 \\  
-1 & 4  
\end{bmatrix}  
$$

Tentukan ordo dan jenis masing-masing matriks berdasarkan bentuknya!

> [!success]- Klik untuk Lihat Jawaban
> 
> - **Matriks $C$:** Mempunyai 2 baris dan 3 kolom, sehingga berordo $2 \times 3$. Karena banyak baris tidak sama dengan banyak kolom, matriks $C$ merupakan matriks persegi panjang.
>     
> - **Matriks $D$:** Mempunyai 2 baris dan 2 kolom, sehingga berordo $2 \times 2$. Karena banyak baris sama dengan banyak kolom, matriks $D$ merupakan matriks persegi.
>     
> 
> Jadi, $C$ adalah matriks persegi panjang berordo $2 \times 3$, sedangkan $D$ adalah matriks persegi berordo $2 \times 2$.

### Contoh Soal 5

Diketahui matriks $E$ sebagai berikut:

$$  
E =  
\begin{bmatrix}  
2 & 1 & 4 \\  
0 & 5 & -1 \\  
7 & 3 & 6  
\end{bmatrix}  
$$

Tentukan elemen-elemen diagonal utama dan diagonal sekundernya. Kemudian, hitung jumlah elemen pada masing-masing diagonal!

> [!success]- Klik untuk Lihat Jawaban
> 
> - **Diagonal Utama:** Elemen diagonal utama terletak dari sudut kiri atas menuju sudut kanan bawah, yaitu $2$, $5$, dan $6$.
>     
> - **Diagonal Sekunder:** Elemen diagonal sekunder terletak dari sudut kanan atas menuju sudut kiri bawah, yaitu $4$, $5$, dan $7$.
>     
> 
> Jumlah elemen diagonal utama:
> 
> $$  
> 2+5+6=13  
> $$
> 
> Jumlah elemen diagonal sekunder:
> 
> $$  
> 4+5+7=16  
> $$
> 
> Jadi, jumlah elemen diagonal utama adalah 13 dan jumlah elemen diagonal sekunder adalah 16.

### Contoh Soal 6

Perhatikan ketiga matriks berikut:

$$  
D =  
\begin{bmatrix}  
4 & 0 & 0 \\  
0 & -2 & 0 \\  
0 & 0 & 7  
\end{bmatrix},  
\quad  
S =  
\begin{bmatrix}  
3 & 0 & 0 \\  
0 & 3 & 0 \\  
0 & 0 & 3  
\end{bmatrix},  
\quad  
I =  
\begin{bmatrix}  
1 & 0 & 0 \\  
0 & 1 & 0 \\  
0 & 0 & 1  
\end{bmatrix}  
$$

Tentukan jenis yang paling khusus dari masing-masing matriks!

> [!success]- Klik untuk Lihat Jawaban
> 
> - **Matriks $D$:** Seluruh elemen di luar diagonal utama bernilai 0, sehingga $D$ merupakan matriks diagonal.
>     
> - **Matriks $S$:** Seluruh elemen di luar diagonal utama bernilai 0 dan semua elemen pada diagonal utama bernilai sama, sehingga $S$ merupakan matriks skalar.
>     
> - **Matriks $I$:** Seluruh elemen diagonal utama bernilai 1 dan elemen lainnya bernilai 0, sehingga $I$ merupakan matriks identitas.
>     
> 
> Jadi, jenis yang paling khusus dari ketiga matriks tersebut secara berurutan adalah matriks diagonal, matriks skalar, dan matriks identitas.

### Contoh Soal 7

Diketahui matriks $M$ sebagai berikut:

$$  
M =  
\begin{bmatrix}  
5 & a & 0 \  
b & -2 & c \  
0 & 0 & 7  
\end{bmatrix}  
$$

Tentukan nilai $a$, $b$, dan $c$ agar matriks $M$ menjadi matriks diagonal!

> [!success]- Klik untuk Lihat Jawaban  
> Agar matriks $M$ menjadi matriks diagonal, seluruh elemen di luar diagonal utama harus bernilai 0.
> 
> Elemen-elemen yang belum diketahui dan berada di luar diagonal utama adalah:
> 
> - $m_{12}=a$.
>     
> - $m_{21}=b$.
>     
> - $m_{23}=c$.
>     
> 
> Oleh karena itu:
> 
> $$  
> a=0,\qquad b=0,\qquad c=0  
> $$
> 
> Jadi, nilai yang memenuhi adalah $a=0$, $b=0$, dan $c=0$.

### Contoh Soal 8

Diketahui matriks $N$ sebagai berikut:

$$  
N =  
\begin{bmatrix}  
2 & k-4 & 0 \\  
3 & -1 & 0 \\  
5 & 2 & 6  
\end{bmatrix}  
$$

Tentukan nilai $k$ agar matriks $N$ menjadi matriks segitiga bawah!

> [!success]- Klik untuk Lihat Jawaban  
> Agar matriks $N$ menjadi matriks segitiga bawah, seluruh elemen di atas diagonal utama harus bernilai 0.
> 
> Elemen-elemen di atas diagonal utama adalah:
> 
> - $n_{12}=k-4$.
>     
> - $n_{13}=0$.
>     
> - $n_{23}=0$.
>     
> 
> Karena $n_{13}$ dan $n_{23}$ sudah bernilai 0, kita hanya perlu membuat $n_{12}=0$.
> 
> $$  
> \begin{aligned}  
> k-4 &= 0 \  
> k &= 4  
> \end{aligned}  
> $$
> 
> Jadi, nilai $k$ agar matriks $N$ menjadi matriks segitiga bawah adalah 4.

### Contoh Soal 9

Diketahui matriks $R$ sebagai berikut:

$$  
R =  
\begin{bmatrix}  
2 & x+1 & -3 \\  
5 & 4 & 2y \\  
-3 & 6 & 1  
\end{bmatrix}  
$$

Tentukan nilai $x$ dan $y$ agar matriks $R$ menjadi matriks simetris!

> [!success]- Klik untuk Lihat Jawaban  
> Agar matriks $R$ menjadi matriks simetris, elemen-elemen yang saling berhadapan terhadap diagonal utama harus bernilai sama.
> 
> Bandingkan $r_{12}$ dengan $r_{21}$:
> 
> $$  
> \begin{aligned}  
> x+1 &= 5 \  
> x &= 4  
> \end{aligned}  
> $$
> 
> Bandingkan $r_{23}$ dengan $r_{32}$:
> 
> $$  
> \begin{aligned}  
> 2y &= 6 \  
> y &= 3  
> \end{aligned}  
> $$
> 
> Sementara itu, $r_{13}=r_{31}=-3$ sudah memenuhi syarat.
> 
> Jadi, matriks $R$ menjadi matriks simetris jika $x=4$ dan $y=3$.

### Contoh Soal 10

Diketahui matriks $T$ sebagai berikut:

$$  
T =  
\begin{bmatrix}  
0 & 2x-1 & -3 \\  
x-5 & 0 & y+4 \\  
3 & 2y-1 & 0  
\end{bmatrix}  
$$

Tentukan ordo matriks $T$, kemudian tentukan nilai $x$ dan $y$ agar matriks $T$ menjadi matriks antisimetris!

> [!success]- Klik untuk Lihat Jawaban
> 
> - **Menentukan Ordo:** Matriks $T$ mempunyai 3 baris dan 3 kolom, sehingga berordo $3 \times 3$.
>     
> - **Memeriksa Diagonal Utama:** Seluruh elemen diagonal utama sudah bernilai 0, sehingga syarat pertama matriks antisimetris telah terpenuhi.
>     
> - **Menentukan Nilai $x$:** Untuk matriks antisimetris berlaku $t_{12}=-t_{21}$.
>     
> 
> $$  
> \begin{aligned}  
> 2x-1 &= -(x-5) \  
> 2x-1 &= -x+5 \  
> 3x &= 6 \  
> x &= 2  
> \end{aligned}  
> $$
> 
> - **Menentukan Nilai $y$:** Berlaku pula $t_{23}=-t_{32}$.
>     
> 
> $$  
> \begin{aligned}  
> y+4 &= -(2y-1) \  
> y+4 &= -2y+1 \  
> 3y &= -3 \  
> y &= -1  
> \end{aligned}  
> $$
> 
> Pasangan elemen lainnya sudah memenuhi karena $t_{13}=-3$ dan $t_{31}=3$.
> 
> Jadi, matriks $T$ berordo $3 \times 3$ dan menjadi matriks antisimetris jika $x=2$ dan $y=-1$.

---

## Konsep Terkait

- [[Matriks/00 - Peta Konsep Matriks]]
    
- [[Matriks/02 - Kesamaan Dua Matriks dan Transpose Matriks]]