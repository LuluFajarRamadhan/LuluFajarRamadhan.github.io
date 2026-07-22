---
title:
---
# Aplikasi Teorema Binomial Newton pada Peluang (Distribusi Binomial)

Ekspansi Binomial Newton tidak hanya digunakan untuk menjabarkan bentuk aljabar, tetapi juga dapat digunakan untuk menghitung peluang suatu kejadian yang dilakukan berulang kali dengan peluang tetap.

Misalkan suatu percobaan hanya memiliki dua kemungkinan hasil, yaitu **berhasil** dan **gagal**.

Jika peluang berhasil adalah $p$, maka peluang gagal adalah

$$
q=1-p
$$

Apabila percobaan dilakukan sebanyak $n$ kali dan ingin diketahui peluang tepat $r$ kali berhasil, maka digunakan rumus Distribusi Binomial:

$$
P(X=r)=\binom{n}{r}p^rq^{\,n-r}
$$

Keterangan:

- $n$ = banyak percobaan
- $r$ = banyak keberhasilan
- $p$ = peluang berhasil
- $q$ = peluang gagal ($q=1-p$)

Koefisien $\binom{n}{r}$ berasal dari **Teorema Binomial Newton**, yaitu banyaknya cara menyusun $r$ keberhasilan dari $n$ percobaan.

---

## Contoh Soal

### Soal 1

Seorang pemain sepak bola memiliki peluang mencetak gol dari tendangan penalti sebesar $0,7$.

Jika ia melakukan tendangan penalti sebanyak 5 kali, tentukan peluang pemain tersebut **tepat berhasil mencetak 3 gol**.

> [!success]- Klik untuk Lihat Jawaban
> Diketahui:
>
> $$
> n=5,\qquad
> r=3,\qquad
> p=0,7,\qquad
> q=1-0,7=0,3
> $$
>
> Gunakan rumus Distribusi Binomial:
>
> $$
> P(X=r)=\binom nr p^rq^{\,n-r}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> P(X=3)
> &=\binom53(0,7)^3(0,3)^2\\
> &=10(0,343)(0,09)\\
> &=0,3087
> \end{aligned}
> $$
>
> Jadi, peluang pemain tersebut berhasil mencetak **tepat 3 gol** adalah **0,3087** atau sekitar **30,87%**.

---

### Soal 2

Sebuah mesin menghasilkan produk baik dengan peluang $0,9$.

Jika mesin memproduksi 6 barang, tentukan peluang tepat 5 barang yang dihasilkan merupakan produk baik.

> [!success]- Klik untuk Lihat Jawaban
> Diketahui:
>
> $$
> n=6,\qquad
> r=5,\qquad
> p=0,9,\qquad
> q=0,1
> $$
>
> Gunakan rumus Distribusi Binomial:
>
> $$
> P(X=r)=\binom nr p^rq^{\,n-r}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> P(X=5)
> &=\binom65(0,9)^5(0,1)\\
> &=6(0,59049)(0,1)\\
> &=0,354294
> \end{aligned}
> $$
>
> Jadi, peluang tepat 5 produk baik adalah **0,3543** atau sekitar **35,43%**.

---

### Soal 3

Peluang seorang siswa menjawab benar satu soal pilihan ganda adalah $0,8$.

Jika diberikan 8 soal, tentukan peluang siswa tersebut menjawab benar **tepat 6 soal**.

> [!success]- Klik untuk Lihat Jawaban
> Diketahui:
>
> $$
> n=8,\qquad
> r=6,\qquad
> p=0,8,\qquad
> q=0,2
> $$
>
> Gunakan rumus Distribusi Binomial:
>
> $$
> P(X=r)=\binom nr p^rq^{\,n-r}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> P(X=6)
> &=\binom86(0,8)^6(0,2)^2\\
> &=28(0,262144)(0,04)\\
> &=0,29360128
> \end{aligned}
> $$
>
> Jadi, peluang siswa menjawab benar **tepat 6 soal** adalah **0,2936** atau sekitar **29,36%**.

---

### Soal 4

Sebuah lampu memiliki peluang menyala dengan baik sebesar $0,95$.

Jika dipasang 10 lampu yang saling bebas, tentukan peluang **tepat 9 lampu** menyala dengan baik.

> [!success]- Klik untuk Lihat Jawaban
> Diketahui:
>
> $$
> n=10,\qquad
> r=9,\qquad
> p=0,95,\qquad
> q=0,05
> $$
>
> Gunakan rumus Distribusi Binomial:
>
> $$
> P(X=r)=\binom nr p^rq^{\,n-r}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> P(X=9)
> &=\binom{10}{9}(0,95)^9(0,05)\\
> &=10(0,6302494097)(0,05)\\
> &\approx0,3151
> \end{aligned}
> $$
>
> Jadi, peluang **tepat 9 lampu** menyala dengan baik adalah **0,3151** atau sekitar **31,51%**.

---

### Soal 5

Peluang seorang pemain basket berhasil memasukkan bola dalam satu lemparan bebas adalah $0,75$.

Jika pemain tersebut melakukan 8 kali lemparan bebas, tentukan peluang ia berhasil memasukkan bola **tepat 6 kali**.

> [!success]- Klik untuk Lihat Jawaban
> Diketahui:
>
> $$
> n=8,\qquad
> r=6,\qquad
> p=0,75,\qquad
> q=0,25
> $$
>
> Gunakan rumus Distribusi Binomial:
>
> $$
> P(X=r)=\binom nr p^rq^{\,n-r}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> P(X=6)
> &=\binom86(0,75)^6(0,25)^2\\
> &=28(0,1779785)(0,0625)\\
> &\approx0,3115
> \end{aligned}
> $$
>
> Jadi, peluang pemain berhasil memasukkan bola **tepat 6 kali** adalah **0,3115** atau sekitar **31,15%**.

---

## Konsep Terkait

- [[Kaidah Pencacahan dan Peluang/06 - Konsep Kombinasi dan Perbedaannya dengan Permutasi]]
- [[Kaidah Pencacahan dan Peluang/07 - Pengantar Ekspansi Binomial Newton]]
- [[Kaidah Pencacahan dan Peluang/08 - Ruang Sampel dan Peluang Kejadian Tunggal]]