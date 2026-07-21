---
title:
---
# Pengantar Ekspansi Binomial Newton

Ekspansi Binomial Newton adalah sebuah metode aljabar yang digunakan untuk ==**Penjabaran bentuk perpangkatan dari penjumlahan dua suku dua (binomial)**==, seperti $(a + b)^n$, tanpa harus mengalikan kurungnya satu per satu secara manual yang memakan waktu lama.

Hubungan antara kombinasi dan ekspansi binomial terletak pada koefisien setiap suku hasil penjabaran. Koefisien-koefisien tersebut nilai eksaknya sama persis dengan barisan angka pada Segitiga Pascal, yang mana dapat dicari secara matematis menggunakan **Rumus Kombinasi**.

Formulasi Teorema Binomial Newton adalah:
$$
(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k
$$
Di mana $\binom{n}{k}$ atau $_nC_k$ bertindak sebagai koefisien binomial suku ke-$(k+1)$. Sifat penjabarannya adalah pangkat dari variabel $a$ akan bergerak ==**menurun**== ($n \rightarrow 0$), sedangkan pangkat dari variabel $b$ akan bergerak ==**naik**== ($0 \rightarrow n$).

---
## Contoh Soal

1. Seorang pemain sepak bola melakukan tendangan penalti sebanyak 5 kali. Setiap tendangan hanya memiliki dua kemungkinan hasil, yaitu **gol (G)** atau **tidak gol (T)**.
    

Tentukan banyaknya kemungkinan urutan hasil tendangan yang dapat terjadi.

> [!success]- Klik untuk Lihat Jawaban  
> Setiap tendangan memiliki 2 kemungkinan hasil.
> 
> Karena terdapat 5 tendangan yang saling bebas, maka banyak kemungkinan urutan hasil adalah:
> 
> $$  
> \begin{aligned}  
> n &= 2^5 \  
> &= 32  
> \end{aligned}  
> $$
> 
> Jadi, terdapat **32 kemungkinan urutan hasil** yang dapat terjadi.

---

2. Sebuah koin dilempar sebanyak 6 kali. Setiap pelemparan hanya menghasilkan **angka (A)** atau **gambar (G)**.
    

Tentukan banyaknya kemungkinan urutan hasil pelemparan tersebut.

> [!success]- Klik untuk Lihat Jawaban  
> Setiap pelemparan memiliki 2 kemungkinan hasil.
> 
> Maka:
> 
> $$  
> \begin{aligned}  
> n &= 2^6 \  
> &= 64  
> \end{aligned}  
> $$
> 
> Jadi, terdapat **64 kemungkinan urutan hasil** pelemparan koin.

---

3. Sebuah tes pilihan Benar–Salah terdiri atas 8 soal. Untuk setiap soal hanya ada dua kemungkinan jawaban, yaitu **Benar (B)** atau **Salah (S)**.
    

Tentukan banyaknya kemungkinan pola jawaban yang dapat dibuat.

> [!success]- Klik untuk Lihat Jawaban  
> Setiap soal memiliki dua kemungkinan jawaban.
> 
> Maka:
> 
> $$  
> \begin{aligned}  
> n &= 2^8 \  
> &= 256  
> \end{aligned}  
> $$
> 
> Jadi, terdapat **256 kemungkinan pola jawaban**.

---


4. Sebuah keluarga memiliki 7 orang anak. Jika setiap anak hanya memiliki dua kemungkinan jenis kelamin, yaitu **laki-laki (L)** atau **perempuan (P)**, tentukan banyaknya kemungkinan urutan jenis kelamin anak-anak tersebut.
    

> [!success]- Klik untuk Lihat Jawaban  
> Setiap anak memiliki dua kemungkinan jenis kelamin.
> 
> Maka:
> 
> $$  
> \begin{aligned}  
> n &= 2^7 \  
> &= 128  
> \end{aligned}  
> $$
> 
> Jadi, terdapat **128 kemungkinan urutan jenis kelamin** yang dapat terjadi.

---

5. Jabarkan bentuk aljabar berikut:  
    $$  
    (a+b)^3  
    $$
    

> [!success]- Klik untuk Lihat Jawaban  
> Berdasarkan pola Segitiga Pascal atau Teorema Binomial Newton, koefisien untuk pangkat 3 adalah **1, 3, 3, 1**.
> 
> Sehingga:
> 
> $$  
> \begin{aligned}  
> (a+b)^3  
> &= 1a^3+3a^2b+3ab^2+1b^3 \  
> &= a^3+3a^2b+3ab^2+b^3  
> \end{aligned}  
> $$
> 
> Jadi, hasil penjabaran $(a+b)^3$ adalah
> 
> $$  
> a^3+3a^2b+3ab^2+b^3.  
> $$

---

6. Jabarkan bentuk aljabar berikut:  
    $$  
    (x-2)^4  
    $$
    

> [!success]- Klik untuk Lihat Jawaban  
> Koefisien untuk pangkat 4 adalah **1, 4, 6, 4, 1**.
> 
> Maka:
> 
> $$  
> \begin{aligned}  
> (x-2)^4  
> &= x^4+4x^3(-2)+6x^2(-2)^2+4x(-2)^3+(-2)^4 \  
> &= x^4-8x^3+24x^2-32x+16  
> \end{aligned}  
> $$
> 
> Jadi, hasil penjabaran $(x-2)^4$ adalah
> 
> $$  
> x^4-8x^3+24x^2-32x+16.  
> $$


---

## Konsep Terkait

- [[Kombinatorika dan Teori Peluang Lanjutan/02 - Notasi Faktorial]]
- [[Kombinatorika dan Teori Peluang Lanjutan/06 - Konsep Kombinasi dan Perbedaannya dengan Permutasi]]
- [[Kombinatorika dan Teori Peluang Lanjutan/08 - Ruang Sampel Raksasa dan Peluang Kejadian Tunggal]]