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

### Soal 1
Jabarkan bentuk aljabar berikut:  
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


### Soal 2
Jabarkan bentuk aljabar berikut:  
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

### Soal 3
Tentukan koefisien suku yang memuat $x^6$ dari penjabaran $(2+x)^8$ !

> [!success]- Klik untuk Lihat Jawaban  
> Untuk koefisien $x^6$ dari $(2+x)^8$ terbentuk dari $(2)^{8-6}(x)^6$, sehingga untuk menentukan koefisien $x^6$ melalui substitusi nilai $n=8$ dan $r=6$:
> $$
> \begin{aligned}
> (a + b)^n &= \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k \\
> (2 + x)^8 &= \sum_{k=6}^{8} \binom{6}{8} 2^{8-6} x^6 \\
> &= \frac{8!}{6!(8-6)!} \times 2^2 \times x^6 \\
> &= \frac{8 \times 7 \times \cancel{6!}}{\cancel{6!} \times 2!} \times 2^2 \times x^6 \\
> &= \frac{56}{2}\times 4 \times x^6 \\
> &= 112x^6 \\
> \end{aligned}
> $$
> Dengan demikian, koefisien dari $x^6$ adalah 112.


---

## Konsep Terkait

- [[Kaidah Pencacahan dan Peluang/02 - Notasi Faktorial]]
- [[Kaidah Pencacahan dan Peluang/06 - Konsep Kombinasi dan Perbedaannya dengan Permutasi]]
- [[Kaidah Pencacahan dan Peluang/08 - Ruang Sampel dan Peluang Kejadian Tunggal]]
- [[Kaidah Pencacahan dan Peluang/12 - Aplikasi Teorema Binomial Newton pada Peluang]]