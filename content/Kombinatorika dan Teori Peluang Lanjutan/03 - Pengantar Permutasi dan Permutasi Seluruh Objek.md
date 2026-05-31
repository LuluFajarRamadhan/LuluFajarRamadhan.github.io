---
title:
---
# Pengantar Permutasi dan Permutasi Seluruh Objek

Permutasi adalah teknik pencacahan yang digunakan untuk menghitung banyaknya susunan atau urutan objek yang mungkin terbentuk dari sekumpulan unsur. Ciri utama dari permutasi adalah ==**URUTAN SANGAT DIPERHATIKAN.**== Artinya, susunan objek $AB$ tidak sama dengan susunan $BA$ ($AB \neq BA$).

### 1. Kapan Harus Menggunakan Permutasi?
Permutasi wajib digunakan ketika objek yang dipilih memiliki peran, jabatan, tingkatan, atau posisi yang spesifik. Contoh klasiknya adalah:
* Menyusun posisi kepengurusan (Ketua, Sekretaris, Bendahara).
* Menentukan juara perlombaan (Juara 1, Juara 2, Juara 3).
* Menyusun angka untuk membentuk bilangan atau huruf untuk membentuk kata sandi.

### 2. Permutasi Seluruh Objek ($n$ dari $n$ Unsur)
Jika kita ingin menyusun **seluruh** objek yang tersedia tanpa ada objek yang ditinggalkan ($r = n$), maka total susunan urutan yang dapat terbentuk langsung menggunakan operasi faktorial dari jumlah seluruh objek tersebut.
Formulanya adalah:
$$
P = n!
$$

---
## Contoh Soal
Dalam sebuah sanggar tari, terdapat 4 orang penari yang akan berbaris secara berbanjar (lurus ke belakang) untuk melakukan gerakan pembuka. Berapa banyak susunan urutan barisan yang dapat dibentuk dari keempat penari tersebut?

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Identifikasi Masalah.**
> Karena posisi barisan menentukan urutan (penari di depan berbeda peran dengan penari di belakang), maka kasus ini diselesaikan dengan permutasi. Karena **semua** penari ($n = 4$) ikut berbaris, kita gunakan rumus permutasi seluruh objek.
> 
> **Langkah 2: Perhitungan Aljabar.**
> $$
> \begin{aligned}
> P &= n! \\
> P &= 4! \\
> P &= 4 \times 3 \times 2 \times 1 \\
> P &= 24
> \end{aligned}
> $$
> Jadi, banyak susunan urutan barisan penari yang dapat dibentuk adalah **24 cara**.

---

## Konsep Terkait

- [[Kombinatorika dan Teori Peluang Lanjutan/02 - Notasi Faktorial]]
- [[Kombinatorika dan Teori Peluang Lanjutan/04 - Permutasi Sebagian Objek dari Unsur Berbeda]]