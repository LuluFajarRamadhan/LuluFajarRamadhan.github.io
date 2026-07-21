---
title:
---
# Peluang Kejadian Majemuk Saling Bebas dan Tidak Saling Bebas

Jika pada materi sebelumnya kejadian majemuk dihubungkan oleh kata "atau", pada subbab ini kita menganalisis dua kejadian yang digabungkan oleh kata hubung **"dan"** (disimbolkan dengan $\cap$). Hubungan ini terbagi berdasarkan pengaruh kejadian pertama terhadap kejadian kedua.

### 1. Kejadian Saling Bebas (*Independent Events*)
Dua kejadian dikatakan saling bebas jika munculnya kejadian $A$ ==**SAMA SEKALI TIDAK MEMPENGARUHI**== peluang terjadinya kejadian $B$. Contoh klasiknya adalah melempar dadu dan koin secara bersamaan, atau mengambil bola dari kotak dengan syarat **dikembalikan lagi**.
Formulanya adalah:
$$
P(A \cap B) = P(A) \times P(B)
$$

### 2. Kejadian Tidak Saling Bebas / Bersyarat Dasar (*Dependent Events*)
Dua kejadian dikatakan tidak saling bebas jika munculnya kejadian $A$ ==**MEMPENGARUHI**== peluang terjadinya kejadian $B$. Kasus ini umumnya terjadi pada pengambilan objek dari suatu wadah **TANPA PENGEMBALIAN**, sehingga jumlah ruang sampel keseluruhan berkurang di tahap berikutnya.
Formulanya adalah:
$$
P(A \cap B) = P(A) \times P(B|A)
$$
*Dimana $P(B|A)$ adalah peluang kejadian B setelah kejadian A terjadi.*

---
## Contoh Soal
Di dalam sebuah kotak terdapat 6 bola kuning dan 4 bola hijau. Seseorang mengambil dua buah bola secara berurutan satu per satu. Tentukan peluang terambilnya bola pertama kuning **dan** bola kedua hijau, jika pengambilan dilakukan **tanpa pengembalian**!

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Identifikasi Masalah.**
> Karena pengambilan dilakukan **tanpa pengembalian**, maka kejadian pertama akan merubah komposisi jumlah bola di dalam kotak pada pengambilan kedua. Ini merupakan kasus **Kejadian Tidak Saling Bebas**.
> 
> **Langkah 2: Hitung Peluang Kejadian Pertama (Bola Kuning = $A$).**
> * Banyak bola kuning = 6, Total seluruh bola = 10.
> $$P(A) = \frac{6}{10}$$
> 
> **Langkah 3: Hitung Peluang Kejadian Kedua (Bola Hijau = $B$) dengan Syarat Bola Pertama Sudah Diambil.**
> * Karena bola pertama (kuning) tidak dikembalikan, maka total sisa bola di dalam kotak berkurang menjadi $10 - 1 = 9$ bola.
> * Jumlah bola hijau tetap utuh = 4 bola.
> $$P(B|A) = \frac{4}{9}$$
> 
> **Langkah 4: Hitung Peluang Total Berkelanjutan.**
> $$
> P(A \cap B) = P(A) \times P(B|A) = \frac{6}{10} \times \frac{4}{9} = \frac{24}{90} = \frac{4}{15}
> $$
> Jadi, peluang terambilnya bola pertama kuning dan bola kedua hijau adalah **$\frac{4}{15}$**.

---

## Konsep Terkait

- [[Kombinatorika dan Teori Peluang Lanjutan/09 - Peluang Kejadian Majemuk Saling Lepas dan Tidak Saling Lepas]]
- [[Kombinatorika dan Teori Peluang Lanjutan/11 - Peluang Bersyarat dan Pengantar Teorema Bayes]]