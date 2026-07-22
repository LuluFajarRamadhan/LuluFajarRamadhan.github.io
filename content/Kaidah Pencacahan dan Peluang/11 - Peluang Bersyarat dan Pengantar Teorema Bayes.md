---
title:
---
# Peluang Bersyarat dan Pengantar Teorema Bayes

Peluang bersyarat merupakan puncak analisis teori probabilitas di tingkat SMA, di mana kita menghitung peluang terjadinya suatu peristiwa dengan ==**memanfaatkan informasi tambahan yang sudah diketahui sebelumnya**== sebagai pembatas ruang sampel baru.

### 1. Rumus Peluang Bersyarat
Peluang terjadinya kejadian $A$ jika dikondisikan atau diketahui bahwa kejadian $B$ telah terjadi terlebih dahulu secara mutlak, ditulis dengan notasi $P(A|B)$, dirumuskan sebagai:
$$
P(A|B) = \frac{P(A \cap B)}{P(B)} \quad \text{atau} \quad P(A|B) = \frac{n(A \cap B)}{n(B)}
$$
*Artinya, ruang sampel kita mengecil, bukan lagi seluruh semesta $n(S)$, melainkan dipersempit hanya sebesar wilayah $n(B)$ saja.*

### 2. Pengantar Teorema Bayes
Teorema Bayes adalah perluasan dari rumus peluang bersyarat yang digunakan untuk ==**membalikkan arah probabilitas bersyarat.**== Jika kita mengetahui nilai peluang $P(B|A)$, Teorema Bayes membantu kita mencari nilai kebalikannya yaitu $P(A|B)$. Pendekatan ini adalah cikal bakal algoritma klasifikasi pada sistem Kecerdasan Buatan (AI).
Formulasinya adalah:
$$
P(A|B) = \frac{P(B|A) \times P(A)}{P(B)}
$$

---
## Contoh Soal Peluang Bersyarat

Berikut adalah 4 contoh soal dari tingkat yang paling sederhana hingga lebih kompleks mengenai Peluang Bersyarat:

### Soal 1: Undian Uang Logam
Dua keping uang logam dilempar undi secara bersamaan. Jika diketahui bahwa setidaknya muncul satu sisi Angka (A), berapakah peluang munculnya dua sisi Angka?

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Tentukan Ruang Sampel dan Kejadian Syarat ($B$)**
> Ruang sampel pelemparan dua koin: $S = \{(A,A), (A,G), (G,A), (G,G)\}$.
> Kejadian syarat ($B$) adalah muncul setidaknya satu Angka:
> $B = \{(A,A), (A,G), (G,A)\} \rightarrow n(B) = 3$
> 
> **Langkah 2: Tentukan Kejadian yang Dicari ($A$) dan Irisannya**
> Kejadian $A$ adalah muncul dua sisi Angka: $A = \{(A,A)\}$.
> Irisan kejadian $A$ dan $B$ ($A \cap B$) adalah kejadian di mana koin memunculkan dua sisi Angka sekaligus memenuhi syarat setidaknya ada satu Angka:
> $A \cap B = \{(A,A)\} \rightarrow n(A \cap B) = 1$
> 
> **Langkah 3: Hitung Peluang Bersyarat $P(A|B)$**
> Karena peluang setiap titik sampel sama, kita bisa langsung menggunakan perbandingan banyak anggota kejadian:
> $$
> P(A|B) = \frac{n(A \cap B)}{n(B)} = \frac{1}{3}
> $$
> Jadi, peluang munculnya dua sisi Angka adalah **$\frac{1}{3}$**.

### Soal 2: Survei Kegemaran Mata Pelajaran
Sebuah kelas terdiri dari 40 siswa. Berdasarkan pendataan, 25 siswa gemar Matematika, 20 siswa gemar Fisika, dan 10 siswa gemar kedua-duanya. Jika seorang siswa dipilih secara acak dan diketahui bahwa siswa tersebut gemar Matematika, berapakah peluang ia juga gemar Fisika?

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Definisikan Kejadian dan Jumlah Anggota**
> *   $M$: Kejadian terpilih siswa gemar Matematika $\rightarrow n(M) = 25$
> *   $F$: Kejadian terpilih siswa gemar Fisika
> *   $F \cap M$: Kejadian terpilih siswa gemar keduanya $\rightarrow n(F \cap M) = 10$
> 
> **Langkah 2: Hitung Peluang Bersyarat $P(F|M)$**
> Kita mencari peluang siswa gemar Fisika dengan syarat ia sudah dipastikan gemar Matematika.
> $$
> P(F|M) = \frac{n(F \cap M)}{n(M)} = \frac{10}{25} = \frac{2}{5}
> $$
> Jadi, peluang siswa tersebut juga gemar Fisika adalah **$\frac{2}{5}$**.

### Soal 3: Kelulusan Ujian Siswa
Peluang siswa A lulus ujian adalah 0,8. Peluang siswa A dan siswa B lulus ujian secara bersama-sama adalah 0,6. Jika pada hari pengumuman diketahui bahwa siswa A telah dipastikan lulus ujian, berapakah peluang siswa B juga lulus ujian?

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Definisikan Peluang yang Diketahui**
> *   Peluang A lulus: $P(A) = 0.8$
> *   Peluang A dan B lulus bersamaan: $P(A \cap B) = 0.6$
> 
> **Langkah 2: Gunakan Rumus Peluang Bersyarat**
> Kita mencari peluang B lulus dengan syarat A lulus $P(B|A)$:
> $$
> P(B|A) = \frac{P(A \cap B)}{P(A)}
> $$
> $$
> P(B|A) = \frac{0.6}{0.8} = \frac{6}{8} = \frac{3}{4}
> $$
> Jadi, peluang siswa B lulus ujian adalah **$\frac{3}{4}$** (atau 0,75).

### Soal 4: Pelemparan Dua Dadu
Dua buah dadu bersisi enam dilempar undi bersama-sama. Jika diketahui bahwa jumlah mata dadu yang muncul adalah bilangan genap, berapakah peluang bahwa hasil kali kedua mata dadu tersebut merupakan bilangan prima?

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Identifikasi Kejadian Syarat ($B$)**
> $B$ = Kejadian jumlah mata dadu genap. 
> Jumlah genap terjadi jika (Ganjil + Ganjil) atau (Genap + Genap). Dari 36 total kemungkinan pada dua dadu, separuhnya bernilai genap.
> $n(B) = 18$.
> 
> **Langkah 2: Identifikasi Kejadian yang Dicari ($A$) dan Irisannya**
> $A$ = Kejadian hasil kali mata dadu merupakan bilangan prima.
> Bilangan prima yang mungkin dari hasil kali dua mata dadu adalah 2, 3, dan 5.
> *   Hasil kali 2: $(1,2)$ dan $(2,1) \rightarrow$ Jumlah mata dadu = 3 (Ganjil)
> *   Hasil kali 3: $(1,3)$ dan $(3,1) \rightarrow$ Jumlah mata dadu = 4 (Genap)
> *   Hasil kali 5: $(1,5)$ dan $(5,1) \rightarrow$ Jumlah mata dadu = 6 (Genap)
> 
> Irisan $A \cap B$ adalah pasangan dadu yang hasil kalinya prima **dan** jumlahnya genap:
> $A \cap B = \{(1,3), (3,1), (1,5), (5,1)\}$
> $n(A \cap B) = 4$.
> 
> **Langkah 3: Hitung Peluang Bersyarat $P(A|B)$**
> $$
> P(A|B) = \frac{n(A \cap B)}{n(B)} = \frac{4}{18} = \frac{2}{9}
> $$
> Jadi, peluang hasil kali kedua dadu merupakan bilangan prima dengan syarat jumlah mata dadunya genap adalah **$\frac{2}{9}$**.


---
## Contoh Soal Pengantar Teorema Bayes

### Soal 1: Akurasi Tes Medis
Di sebuah wilayah, diketahui bahwa 5% penduduknya menderita suatu penyakit tertentu. Sebuah alat tes medis dirancang untuk mendeteksi penyakit tersebut. 
* Jika seseorang benar-benar sakit, alat tes akan memberikan hasil positif sebesar 90%. 
* Namun, jika seseorang sehat, alat tes tersebut masih memiliki kemungkinan memberikan hasil positif (salah diagnosis) sebesar 10%.

Jika seseorang dipilih secara acak, lalu dites dan hasilnya **positif**, berapakah peluang orang tersebut benar-benar menderita penyakit itu?

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Mendefinisikan Kejadian dan Peluang**
> *   $S$: Kejadian orang tersebut sakit $\rightarrow P(S) = 0.05$
> *   $S^c$: Kejadian orang tersebut sehat $\rightarrow P(S^c) = 1 - 0.05 = 0.95$
> *   $+$: Kejadian hasil tes positif.
> *   Peluang positif jika sakit: $P(+|S) = 0.90$
> *   Peluang positif jika sehat: $P(+|S^c) = 0.10$
> 
> **Langkah 2: Menghitung Peluang Total Hasil Tes Positif $P(+)$**
> Gunakan aturan peluang total:
> $$
> \begin{aligned}
> P(+) &= (P(+|S) \cdot P(S)) + (P(+|S^c) \cdot P(S^c)) \\
> &= (0.90 \times 0.05) + (0.10 \times 0.95) \\
> &= 0.045 + 0.095 = 0.140
> \end{aligned}
> $$
> 
> **Langkah 3: Menggunakan Teorema Bayes**
> Kita mencari peluang orang tersebut sakit dengan syarat hasil tes positif $P(S|+)$:
> $$
> P(S|+) = \frac{P(+|S) \cdot P(S)}{P(+)} = \frac{0.045}{0.140} = \frac{45}{140} = \frac{9}{28}
> $$
> Jadi, peluang orang tersebut benar-benar sakit adalah **$\frac{9}{28}$**.

### Soal 2: Keterlambatan dan Cuaca
Peluang turun hujan pada pagi hari di suatu kota adalah 0,3. 
* Jika pagi hari turun hujan, peluang Budi terlambat sampai di sekolah adalah 0,6. 
* Jika pagi hari tidak hujan, peluang Budi terlambat sampai di sekolah hanya 0,1.

Suatu hari, diketahui Budi terlambat sampai di sekolah. Berapakah peluang bahwa pada pagi hari tersebut turun hujan?

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Mendefinisikan Kejadian dan Peluang**
> *   $H$: Kejadian turun hujan $\rightarrow P(H) = 0.3$
> *   $H^c$: Kejadian tidak turun hujan $\rightarrow P(H^c) = 0.7$
> *   $T$: Kejadian Budi terlambat.
> *   Peluang terlambat jika hujan: $P(T|H) = 0.6$
> *   Peluang terlambat jika tidak hujan: $P(T|H^c) = 0.1$
> 
> **Langkah 2: Menghitung Peluang Total Terlambat $P(T)$**
> $$
> \begin{aligned}
> P(T) &= (P(T|H) \cdot P(H)) + (P(T|H^c) \cdot P(H^c)) \\
> &= (0.6 \times 0.3) + (0.1 \times 0.7) \\
> &= 0.18 + 0.07 = 0.25
> \end{aligned}
> $$
> 
> **Langkah 3: Menggunakan Teorema Bayes**
> Kita mencari peluang turun hujan dengan syarat Budi terlambat $P(H|T)$:
> $$
> P(H|T) = \frac{P(T|H) \cdot P(H)}{P(T)} = \frac{0.18}{0.25} = \frac{18}{25}
> $$
> Jadi, peluang pagi itu turun hujan adalah **$\frac{18}{25}$**.

### Soal 3: Mesin Produksi Ganda
Sebuah pabrik memiliki tiga mesin, yaitu Mesin A, B, dan C yang memproduksi barang yang sama. Mesin A memproduksi 50% dari total barang, Mesin B memproduksi 30%, dan Mesin C memproduksi 20%.
Diketahui tingkat kecacatan produk dari masing-masing mesin adalah:
* Mesin A: 2% cacat
* Mesin B: 3% cacat
* Mesin C: 4% cacat

Jika sebuah barang diambil secara acak dan ternyata **cacat**, berapakah peluang barang tersebut diproduksi oleh Mesin B?

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Mendefinisikan Kejadian dan Peluang**
> *   Peluang barang dari mesin A, B, dan C: $P(A) = 0.50$, $P(B) = 0.30$, $P(C) = 0.20$
> *   $R$: Kejadian barang cacat (rusak).
> *   Peluang cacat dari masing-masing mesin: $P(R|A) = 0.02$, $P(R|B) = 0.03$, $P(R|C) = 0.04$
> 
> **Langkah 2: Menghitung Peluang Total Barang Cacat $P(R)$**
> Karena ada 3 sumber, kita gunakan probabilitas total untuk 3 partisi:
> $$
> \begin{aligned}
> P(R) &= (P(R|A) \cdot P(A)) + (P(R|B) \cdot P(B)) + (P(R|C) \cdot P(C)) \\
> &= (0.02 \times 0.50) + (0.03 \times 0.30) + (0.04 \times 0.20) \\
> &= 0.010 + 0.009 + 0.008 = 0.027
> \end{aligned}
> $$
> 
> **Langkah 3: Menggunakan Teorema Bayes**
> Kita mencari peluang barang dari Mesin B dengan syarat barang tersebut cacat $P(B|R)$:
> $$
> P(B|R) = \frac{P(R|B) \cdot P(B)}{P(R)} = \frac{0.009}{0.027} = \frac{9}{27} = \frac{1}{3}
> $$
> Jadi, peluang barang cacat tersebut berasal dari Mesin B adalah **$\frac{1}{3}$**.

### Soal 4: Filter Email Spam
Berdasarkan data sistem komputer, 40% dari seluruh email yang masuk adalah email *spam*. Sebuah perangkat lunak filter mendeteksi kata "Diskon".
* Diketahui 80% dari email *spam* mengandung kata "Diskon".
* Sebaliknya, hanya 10% dari email bukan *spam* (email normal) yang mengandung kata "Diskon".

Jika sebuah email baru masuk dan terdeteksi mengandung kata "Diskon", berapakah peluang bahwa email tersebut adalah *spam*?

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Mendefinisikan Kejadian dan Peluang**
> *   $S$: Kejadian email adalah *spam* $\rightarrow P(S) = 0.40$
> *   $S^c$: Kejadian email bukan *spam* $\rightarrow P(S^c) = 0.60$
> *   $D$: Kejadian email mengandung kata "Diskon".
> *   Peluang kata "Diskon" jika *spam*: $P(D|S) = 0.80$
> *   Peluang kata "Diskon" jika bukan *spam*: $P(D|S^c) = 0.10$
> 
> **Langkah 2: Menghitung Peluang Total Kata "Diskon" $P(D)$**
> $$
> \begin{aligned}
> P(D) &= (P(D|S) \cdot P(S)) + (P(D|S^c) \cdot P(S^c)) \\
> &= (0.80 \times 0.40) + (0.10 \times 0.60) \\
> &= 0.32 + 0.06 = 0.38
> \end{aligned}
> $$
> 
> **Langkah 3: Menggunakan Teorema Bayes**
> Kita mencari peluang email tersebut *spam* dengan syarat mengandung kata "Diskon" $P(S|D)$:
> $$
> P(S|D) = \frac{P(D|S) \cdot P(S)}{P(D)} = \frac{0.32}{0.38} = \frac{32}{38} = \frac{16}{19}
> $$
> Jadi, peluang email tersebut adalah *spam* adalah **$\frac{16}{19}$**.


---

## Konsep Terkait

- [[Kaidah Pencacahan dan Peluang/10 - Peluang Kejadian Majemuk Saling Bebas dan Tidak Saling Bebas]]
- [[Kaidah Pencacahan dan Peluang/Ringkasan Kombinatorika dan Teori Peluang Lanjutan]]