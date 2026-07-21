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
## Contoh Soal
Berdasarkan data kelulusan sebuah bimbingan belajar, peluang seorang siswa lulus ujian matematika adalah 0,6. Peluang seorang siswa lulus ujian fisika adalah 0,5. Sementara itu, peluang siswa lulus ujian matematika **dan** fisika sekaligus adalah 0,3. Jika dipilih seorang siswa secara acak dan ternyata diketahui ia **sudah lulus** ujian fisika, berapakah peluang ia juga lulus ujian matematika?

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Identifikasi Notasi Peluang.**
> * Misalkan $M$ = kejadian lulus Matematika $\rightarrow P(M) = 0,6$
> * Misalkan $F$ = kejadian lulus Fisika $\rightarrow P(F) = 0,5$
> * Peluang lulus keduanya $\rightarrow P(M \cap F) = 0,3$
> 
> **Langkah 2: Menerjemahkan Pertanyaan Bersyarat.**
> Soal meminta kita mencari peluang lulus matematika dengan syarat ia **sudah lulus** fisika. Berarti kita mencari nilai $P(M|F)$. Gunakan rumus peluang bersyarat:
> 
> $$
> \begin{aligned}
> P(M|F) &= \frac{P(M \cap F)}{P(F)} \\
> &= \frac{0,3}{0,5} \\
> &= \frac{3}{5} = 0,6
> \end{aligned}
> $$
> Jadi, peluang siswa tersebut lulus ujian matematika setelah dikondisikan lulus fisika adalah **0,6 (atau 60%)**.

---

## Konsep Terkait

- [[Kombinatorika dan Teori Peluang Lanjutan/10 - Peluang Kejadian Majemuk Saling Bebas dan Tidak Saling Bebas]]
- [[Kombinatorika dan Teori Peluang Lanjutan/Ringkasan Kombinatorika dan Teori Peluang Lanjutan]]