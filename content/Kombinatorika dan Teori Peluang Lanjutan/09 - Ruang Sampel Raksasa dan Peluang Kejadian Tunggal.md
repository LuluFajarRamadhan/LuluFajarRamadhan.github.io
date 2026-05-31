---
title:
---
# Ruang Sampel Raksasa dan Peluang Kejadian Tunggal

Pada materi kelas 10, kita telah mempelajari bahwa peluang teoritis suatu kejadian tunggal $A$ dihitung dengan membagi jumlah anggota kejadian $n(A)$ dengan jumlah seluruh anggota ruang sampel $n(S)$.

Namun, pada tingkat lanjut, nilai $n(A)$ dan $n(S)$ ==**tidak lagi berupa angka kecil yang bisa didaftar manual satu per satu**== menggunakan diagram pohon atau tabel. Kita harus menggunakan **Kombinatorika** (permutasi atau kombinasi) untuk menghitung ukuran ruang sampel raksasa tersebut sebelum menentukan nilai peluangnya.

Formulasinya tetap berbasis aturan dasar probabilitas:
$$
P(A) = \frac{n(A)}{n(S)}
$$
*Catatan: Nilai probabilitas $P(A)$ selalu berada pada rentang batas $0 \le P(A) \le 1$. Nilai 0 berarti mustahil terjadi, dan nilai 1 berarti pasti terjadi.*

---
## Contoh Soal
Dalam sebuah koper terdapat 12 kemeja, yang terdiri dari 7 kemeja putih dan 5 kemeja biru. Jika diambil 3 kemeja secara acak sekaligus dari koper tersebut, berapakah peluang terambilnya tepat 2 kemeja putih dan 1 kemeja biru?

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Menghitung Ukuran Ruang Sampel Raksasa $n(S)$.**
> Total seluruh kemeja adalah $7 + 5 = 12$. Diambil 3 kemeja sekaligus secara acak. Karena urutan pengambilan diabaikan, gunakan rumus kombinasi $_nC_r$:
> $$
> n(S) = _{12}C_3 = \frac{12!}{3! \times (12-3)!} = \frac{12 \times 11 \times 10 \times \cancel{9!}}{(3 \times 2 \times 1) \times \cancel{9!}} = \frac{1320}{6} = 220
> $$
> 
> **Langkah 2: Menghitung Banyak Kejadian Terpilih $n(A)$.**
> Kita harus mengambil 2 kemeja putih (dari total 7) **dan** 1 kemeja biru (dari total 5). Gunakan aturan perkalian kombinasi:
> $$
> \begin{aligned}
> n(A) &= _7C_2 \times _5C_1 \\
> &= \frac{7!}{2! \times 5!} \times 5 \\
> &= \frac{7 \times 6 \times \cancel{5!}}{(2 \times 1) \times \cancel{5!}} \times 5 \\
> &= 21 \times 5 = 105
> \end{aligned}
> $$
> 
> **Langkah 3: Hitung Nilai Peluang $P(A)$.**
> $$
> P(A) = \frac{n(A)}{n(S)} = \frac{105}{220} = \frac{21}{44}
> $$
> Jadi, peluang terambilnya tepat 2 kemeja putih dan 1 kemeja biru adalah **$\frac{21}{44}$**.

---

## Konsep Terkait

- [[Kombinatorika dan Teori Peluang Lanjutan/07 - Aplikasi Kombinasi dalam Pemilihan Objek dan Soal Cerita]]
- [[Kombinatorika dan Teori Peluang Lanjutan/10 - Peluang Kejadian Majemuk Saling Lepas dan Tidak Saling Lepas]]