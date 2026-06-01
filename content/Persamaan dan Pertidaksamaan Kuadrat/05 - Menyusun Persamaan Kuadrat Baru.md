---
title:
---
# Menyusun Persamaan Kuadrat Baru

Jika pada materi sebelumnya kita berfokus untuk mencari akar-akar dari sebuah persamaan kuadrat yang sudah jadi, subbab ini membahas proses kebalikannya (*reverse engineering*). Kita akan ==**merekonstruksi atau menyusun kembali**== struktur persamaan kuadrat berdasarkan informasi akar-akar yang diketahui atau dari hubungan akar-akar persamaan kuadrat lain.

## Dua Metode Utama Konstruksi Persamaan
Terdapat dua strategi aljabar yang dapat digunakan secara universal untuk menyusun persamaan kuadrat baru:

### 1. Metode Perkalian Faktor (Jika Akar Diketahui Langsung)
Apabila nilai individual dari akar-akar sebuah persamaan kuadrat baru sudah diketahui secara spesifik (misalkan akarnya adalah $x_1$ dan $x_2$), kita dapat langsung menggunakan prinsip dasar perkalian faktor linear:

$$
(x - x_1)(x - x_2) = 0
$$

Setelah dilakukan perkalian silang (distributif aljabar), bentuk tersebut akan melebur kembali menjadi struktur trinomial umum:

$$
x^2 - (x_1 + x_2)x + (x_1 \cdot x_2) = 0
$$

### 2. Metode Rumus Jumlah dan Hasil Kali (Teorema Vieta)
Metode ini adalah metode yang paling umum dan kuat, terutama saat kita diminta menyusun persamaan kuadrat baru yang akar-akarnya memiliki ==**hubungan keterikatan simetris**== dengan akar-akar dari persamaan kuadrat lain yang sudah ada sebelumnya.

Formulasi baku menyusun persamaan kuadrat baru menggunakan metode ini adalah:

$$
x^2 - (\text{Jumlah Akar-Akar Baru})x + (\text{Hasil Kali Akar-Akar Baru}) = 0
$$

---
## Contoh Soal

1. Susunlah sebuah persamaan kuadrat baru yang memiliki akar-akar $x_1 = -3$ dan $x_2 = 5$!

> [!success]- Klik untuk Lihat Jawaban 1
> Kita dapat menyelesaikannya dengan menggunakan Metode Perkalian Faktor secara langsung:
> * Masukkan nilai akar $x_1 = -3$ dan $x_2 = 5$ ke dalam rumus faktor:
> $$
> (x - (-3))(x - 5) = 0
> $$
> $$
> (x + 3)(x - 5) = 0
> $$
> * Lakukan perkalian silang aljabar secara distributif:
> $$
> \begin{aligned}
> x(x) + x(-5) + 3(x) + 3(-5) &= 0 \\
> x^2 - 5x + 3x - 15 &= 0 \\
> x^2 - 2x - 15 &= 0
> \end{aligned}
> $$
> Jadi, persamaan kuadrat baru yang terbentuk adalah $x^2 - 2x - 15 = 0$.

2. Diketahui persamaan kuadrat $x^2 - 3x + 1 = 0$ memiliki akar-akar $\alpha$ dan $\beta$. Susunlah persamaan kuadrat baru yang akar-akarnya adalah $(\alpha + 2)$ dan $(\beta + 2)$!

> [!success]- Klik untuk Lihat Jawaban 2
> Mari lakukan analisis konstruksi menggunakan Teorema Vieta:
> * **Langkah 1:** Identifikasi jumlah dan hasil kali akar dari persamaan kuadrat lama ($a = 1, b = -3, c = 1$):
> $$
> \alpha + \beta = -\frac{b}{a} = -\frac{-3}{1} = 3
> $$
> $$
> \alpha \cdot \beta = \frac{c}{a} = \frac{1}{1} = 1
> $$
> * **Langkah 2:** Hitung Jumlah Akar Baru ($\text{JAR}$) dan Hasil Kali Akar Baru ($\text{HKAR}$):
> $$
> \begin{aligned}
> \text{JAR} &= (\alpha + 2) + (\beta + 2) \\
> &= (\alpha + \beta) + 4 \\
> &= 3 + 4 = 7
> \end{aligned}
> $$
> $$
> \begin{aligned}
> \text{HKAR} &= (\alpha + 2) \cdot (\beta + 2) \\
> &= (\alpha \cdot \beta) + 2\alpha + 2\beta + 4 \\
> &= (\alpha \cdot \beta) + 2(\alpha + \beta) + 4 \\
> &= 1 + 2(3) + 4 \\
> &= 1 + 6 + 4 = 11
> \end{aligned}
> $$
> * **Langkah 3:** Masukkan nilai komponen baru ke rumus baku konstruksi:
> $$
> x^2 - (\text{JAR})x + (\text{HKAR}) = 0
> $$
> $$
> x^2 - 7x + 11 = 0
> $$
> Jadi, persamaan kuadrat baru yang dicari adalah $x^2 - 7x + 11 = 0$.

---

## Konsep Terkait

- [[Persamaan dan Pertidaksamaan Kuadrat/04 - Jumlah dan Hasil Kali Akar-Akar Persamaan Kuadrat]]
- [[Persamaan dan Pertidaksamaan Kuadrat/06 - Definisi dan Bentuk Umum Pertidaksamaan Kuadrat]]