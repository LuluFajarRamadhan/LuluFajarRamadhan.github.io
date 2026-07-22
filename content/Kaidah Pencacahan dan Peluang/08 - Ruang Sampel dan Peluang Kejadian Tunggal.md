---
title:
---
# Ruang Sampel dan Peluang Kejadian Tunggal

Peluang suatu kejadian tunggal $A$ dihitung dengan membandingkan banyaknya anggota kejadian $n(A)$ terhadap banyaknya anggota ruang sampel $n(S)$.

Pada soal-soal sederhana, nilai $n(A)$ dan $n(S)$ masih dapat ditentukan dengan mendaftar seluruh kemungkinan. Namun, jika ruang sampelnya sangat besar, cara tersebut menjadi tidak praktis. Oleh karena itu, kita menggunakan **Kombinatorika** (permutasi atau kombinasi) untuk menghitung $n(A)$ dan $n(S)$.

Rumus peluang tetap sama:
$$
P(A)=\frac{n(A)}{n(S)}
$$

*Catatan: Nilai probabilitas selalu memenuhi $0 \le P(A) \le 1$. Nilai 0 berarti mustahil terjadi, sedangkan nilai 1 berarti pasti terjadi.*

---
## ## Soal Latihan

### Soal 1
Sebuah kotak berisi 5 bola merah dan 3 bola biru. Diambil 1 bola secara acak. Tentukan peluang terambilnya bola merah.

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Menghitung Ukuran Ruang Sampel $n(S)$.**
> Total bola di dalam kotak adalah $5+3=8$. Karena diambil 1 bola, maka:
> $$
> n(S)=8
> $$
>
> **Langkah 2: Menghitung Banyak Kejadian $n(A)$.**
> Bola merah berjumlah 5, sehingga:
> $$
> n(A)=5
> $$
>
> **Langkah 3: Hitung Nilai Peluang $P(A)$.**
> $$
> P(A)=\frac{n(A)}{n(S)}
> =\frac{5}{8}
> $$
>
> Jadi, peluang terambilnya bola merah adalah **$\frac{5}{8}$**.

### Soal 2
Sebuah kantong berisi 6 bola putih dan 4 bola hitam. Diambil 2 bola sekaligus. Tentukan peluang kedua bola yang terambil berwarna putih.

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Menghitung Ukuran Ruang Sampel $n(S)$.**
> Total bola adalah $6+4=10$. Diambil 2 bola sekaligus sehingga:
> $$
> n(S)=_{10}C_2
> =\frac{10!}{2!\times8!}
> =45
> $$
>
> **Langkah 2: Menghitung Banyak Kejadian $n(A)$.**
> Kedua bola harus berwarna putih, sehingga:
> $$
> n(A)=_6C_2
> =\frac{6!}{2!\times4!}
> =15
> $$
>
> **Langkah 3: Hitung Nilai Peluang $P(A)$.**
> $$
> P(A)=\frac{15}{45}
> =\frac13
> $$
>
> Jadi, peluang kedua bola yang terambil berwarna putih adalah **$\frac13$**.

### Soal 3
Dari satu set kartu remi (52 kartu), diambil 2 kartu sekaligus. Tentukan peluang kedua kartu yang terambil merupakan kartu hati.

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Menghitung Ukuran Ruang Sampel $n(S)$.**
> Dalam satu set kartu remi terdapat 52 kartu. Diambil 2 kartu sekaligus sehingga:
> $$
> n(S)=_{52}C_2
> =\frac{52\times51}{2}
> =1326
> $$
>
> **Langkah 2: Menghitung Banyak Kejadian $n(A)$.**
> Terdapat 13 kartu hati. Banyak cara memilih 2 kartu hati adalah:
> $$
> n(A)=_{13}C_2
> =\frac{13\times12}{2}
> =78
> $$
>
> **Langkah 3: Hitung Nilai Peluang $P(A)$.**
> $$
> P(A)=\frac{78}{1326}
> =\frac{1}{17}
> $$
>
> Jadi, peluang kedua kartu yang terambil merupakan kartu hati adalah **$\frac{1}{17}$**.

### Soal 4
Sebuah kelas terdiri atas 8 siswa laki-laki dan 12 siswa perempuan. Dipilih 4 siswa secara acak sebagai perwakilan kelas. Tentukan peluang terpilih tepat 2 siswa laki-laki dan 2 siswa perempuan.

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Menghitung Ukuran Ruang Sampel $n(S)$.**
> Jumlah seluruh siswa adalah $8+12=20$. Dipilih 4 siswa sehingga:
> $$
> n(S)=_{20}C_4
> =4845
> $$
>
> **Langkah 2: Menghitung Banyak Kejadian $n(A)$.**
> Pilih 2 siswa laki-laki dari 8 dan 2 siswa perempuan dari 12:
> $$
> \begin{aligned}
> n(A)&=_8C_2\times_{12}C_2\\
> &=28\times66\\
> &=1848
> \end{aligned}
> $$
>
> **Langkah 3: Hitung Nilai Peluang $P(A)$.**
> $$
> P(A)=\frac{1848}{4845}
> =\frac{616}{1615}
> \approx0,3814
> $$
>
> Jadi, peluang terpilih tepat 2 siswa laki-laki dan 2 siswa perempuan adalah **$\frac{616}{1615}$** atau sekitar **0,3814**.

### Soal 5
Sebuah kotak berisi 8 bola merah, 6 bola biru, dan 4 bola hijau. Diambil 5 bola sekaligus secara acak. Tentukan peluang terambil tepat 2 bola merah, 2 bola biru, dan 1 bola hijau.

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Menghitung Ukuran Ruang Sampel $n(S)$.**
> Jumlah seluruh bola adalah $8+6+4=18$. Diambil 5 bola sekaligus sehingga:
> $$
> n(S)=_{18}C_5
> =8568
> $$
>
> **Langkah 2: Menghitung Banyak Kejadian $n(A)$.**
> Pilih 2 bola merah dari 8, 2 bola biru dari 6, dan 1 bola hijau dari 4:
> $$
> \begin{aligned}
> n(A)&=_8C_2\times_6C_2\times_4C_1\\
> &=28\times15\times4\\
> &=1680
> \end{aligned}
> $$
>
> **Langkah 3: Hitung Nilai Peluang $P(A)$.**
> $$
> P(A)=\frac{1680}{8568}
> =\frac{35}{178}
> \approx0,1966
> $$
>
> Jadi, peluang terambil tepat 2 bola merah, 2 bola biru, dan 1 bola hijau adalah **$\frac{35}{178}$** atau sekitar **0,1966**.

---

## Konsep Terkait

- [[Kaidah Pencacahan dan Peluang/06 - Konsep Kombinasi dan Perbedaannya dengan Permutasi]]
- [[Kaidah Pencacahan dan Peluang/09 - Peluang Kejadian Majemuk Saling Lepas dan Tidak Saling Lepas]]