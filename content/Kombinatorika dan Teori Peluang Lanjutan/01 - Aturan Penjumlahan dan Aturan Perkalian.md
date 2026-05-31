---
title:
---
# Aturan Penjumlahan dan Aturan Perkalian

Aturan penjumlahan dan aturan perkalian adalah dua prinsip paling mendasar dalam kaidah pencacahan yang digunakan untuk menghitung banyaknya kemungkinan hasil dari beberapa kejadian tanpa harus mendaftarnya satu per satu.

### 1. Aturan Penjumlahan
Aturan penjumlahan digunakan untuk kejadian-kejadian yang bersifat ==**saling lepas, di mana kejadian-kejadian tersebut TIDAK DAPAT terjadi secara bersamaan.**== Biasanya ditandai dengan kata hubung **"atau"**. Jika terdapat beberapa pilihan independen, kita cukup menjumlahkan seluruh kemungkinan cara tersebut.

Jika kejadian pertama dapat terjadi dalam $m$ cara dan kejadian kedua dapat terjadi dalam $n$ cara secara terpisah, maka banyak cara memilih salah satu dari kejadian tersebut adalah:
$$
\text{Total Cara} = m + n
$$

### 2. Aturan Perkalian
Aturan perkalian digunakan untuk kejadian-kejadian yang bersifat ==**saling berkelanjutan, berurutan, atau terjadi secara bersama-sama.**== Biasanya ditandai dengan kata hubung **"dan"**. Metode ini juga menjadi dasar dari prinsip pengisian tempat (*filling slots*).

Jika suatu aktivitas terdiri dari beberapa tahapan berurutan, di mana tahap pertama memiliki $m$ pilihan dan tahap kedua memiliki $n$ pilihan, maka total seluruh kombinasi susunan yang dapat terbentuk adalah:
$$
\text{Total Cara} = m \times n
$$

---
## Contoh Soal
Seorang siswa kelas 12 memiliki 3 buah jaket tebal dan 4 buah rompi rajut untuk dipakai ke sekolah. 
1. Berapa banyak pilihan siswa tersebut jika ia hanya ingin memakai **salah satu** dari jaket atau rompi tersebut?
2. Berapa banyak kombinasi gaya yang bisa dibuat jika siswa tersebut ingin memakai jaket **dan** rompi secara bersamaan?

> [!success]- Klik untuk Lihat Jawaban
> Mari kita urai berdasarkan karakteristik kejadiannya:
> 
> 1. **Kasus 1: Memakai salah satu (Jaket ATAU Rompi)**
>    Karena siswa hanya memilih satu pakaian (tidak bisa memakai keduanya sekaligus untuk pilihan ini), kejadian ini bersifat saling lepas. Gunakan aturan penjumlahan:
>    $$\text{Total pilihan} = 3 + 4 = 7 \text{ cara}$$
> 
> 2. **Kasus 2: Memakai bersamaan (Jaket DAN Rompi)**
>    Karena siswa memakai jaket kemudian dilanjutkan dengan memakai rompi secara bersama-sama, kejadian ini berkelanjutan. Gunakan aturan perkalian:
>    $$\text{Total kombinasi} = 3 \times 4 = 12 \text{ cara}$$

---

## Konsep Terkait

- [[Kombinatorika dan Teori Peluang Lanjutan/00 - Peta Konsep Kombinatorika dan Teori Peluang Lanjutan]]
- [[Kombinatorika dan Teori Peluang Lanjutan/02 - Notasi Faktorial]]