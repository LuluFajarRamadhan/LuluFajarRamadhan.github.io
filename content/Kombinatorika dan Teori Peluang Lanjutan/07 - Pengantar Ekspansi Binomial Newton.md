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

1. Seorang pemain sepak bola melakukan tendangan penalti sebanyak 5 kali. Setiap tendangan hanya memiliki dua kemungkinan hasil, yaitu **gol (G)** atau **tidak gol (T)**. Berapa banyak urutan hasil yang menghasilkan **tepat 3 gol**?

> [!success]- Klik untuk Lihat Jawaban  
> Karena yang dipilih adalah posisi terjadinya 3 gol dari 5 tendangan, maka digunakan kombinasi:
> 
> $$  
> \begin{aligned}  
> {}_5C_3 &= \frac{5!}{3!(5-3)!} \\  
> &= \frac{5!}{3!\times2!} \\  
> &= \frac{5\times4\times\cancel{3!}}{\cancel{3!}\times2} \\  
> &= 10  
> \end{aligned}  
> $$
> 
> Jadi, terdapat **10 urutan** yang menghasilkan tepat 3 gol.


2. Sebuah koin dilempar sebanyak 6 kali. Berapa banyak urutan pelemparan yang menghasilkan **tepat 2 kali muncul gambar**?

> [!success]- Klik untuk Lihat Jawaban  
> Posisi munculnya gambar dipilih sebanyak 2 dari 6 pelemparan.
> 
> $$  
> \begin{aligned}  
> {}_6C_2 &= \frac{6!}{2!(6-2)!} \\  
> &= \frac{6!}{2!\times4!} \\  
> &= \frac{6\times5\times\cancel{4!}}{2\times\cancel{4!}} \\  
> &= 15  
> \end{aligned}  
> $$
> 
> Jadi, terdapat **15 urutan** yang menghasilkan tepat 2 kali gambar.


3. Sebuah tes Benar–Salah terdiri atas 8 soal. Berapa banyak pola jawaban yang menghasilkan **tepat 5 jawaban benar**?

> [!success]- Klik untuk Lihat Jawaban  
> Posisi jawaban benar dipilih sebanyak 5 dari 8 soal.
> 
> $$  
> \begin{aligned}  
> {}_8C_5 &= \frac{8!}{5!(8-5)!} \\  
> &= \frac{8!}{5!\times3!} \\  
> &= \frac{8\times7\times6\times\cancel{5!}}{\cancel{3!}\times\cancel{5!}} \\  
> &= 56  
> \end{aligned}  
> $$
> 
> Jadi, terdapat **56 pola jawaban** yang memiliki tepat 5 jawaban benar.


4. Sebuah keluarga memiliki 8 orang anak. Anggap setiap anak hanya memiliki dua kemungkinan jenis kelamin, yaitu **laki-laki (L)** atau **perempuan (P)**. Berapa banyak urutan jenis kelamin yang menghasilkan **tepat 3 anak perempuan**?

> [!success]- Klik untuk Lihat Jawaban  
> Posisi anak perempuan dipilih sebanyak 3 dari 8 anak.
> 
> $$  
> \begin{aligned}  
> {}_8C_3 &= \frac{8!}{3!(8-3)!} \\  
> &= \frac{8!}{3!\times5!} \\  
> &= \frac{8\times7\times6\times\cancel{5!}}{\cancel{3!}\times\cancel{5!}} \\  
> &= 56  
> \end{aligned}  
> $$
> 
> Jadi, terdapat **56 urutan jenis kelamin** yang menghasilkan tepat 3 anak perempuan.


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
> &= 1a^3+3a^2b+3ab^2+1b^3 \\  
> &= a^3+3a^2b+3ab^2+b^3  
> \end{aligned}  
> $$
> 
> Jadi, hasil penjabaran $(a+b)^3$ adalah
> 
> $$  
> a^3+3a^2b+3ab^2+b^3.  
> $$


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
> &= x^4+4x^3(-2)+6x^2(-2)^2+4x(-2)^3+(-2)^4 \\  
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