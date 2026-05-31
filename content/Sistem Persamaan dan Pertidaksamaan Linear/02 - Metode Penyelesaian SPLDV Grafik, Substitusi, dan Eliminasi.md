---
title:
---
# Metode Penyelesaian SPLDV Grafik, Substitusi, dan Eliminasi

Untuk mencari himpunan penyelesaian $(x, y)$ dari suatu SPLDV secara eksak, terdapat tiga metode aljabar klasik yang bisa digunakan:

1. **Metode Grafik:** Menghubungkan titik potong garis dari kedua persamaan pada diagram Kartesius. Solusinya adalah ==**titik koordinat perpotongan antara kedua garis tersebut.**==
2. **Metode Substitusi:** Menyatakan salah satu variabel ke dalam bentuk variabel lain dari persamaan pertama (misal $x = \dots$), lalu ==**memasukkannya ke dalam persamaan kedua.**==
3. **Metode Eliminasi:** Menyamakan koefisien salah satu variabel pada kedua persamaan dengan perkalian skalar, lalu ==**mengurangi atau menjumlahkan kedua persamaan untuk melenyapkan variabel tersebut.**==

*Catatan: Di sekolah, metode yang paling sering dikombinasikan demi efisiensi waktu pengerjaan adalah **Metode Campuran (Eliminasi-Substitusi)**.*

---
## Contoh Soal
Tentukan himpunan penyelesaian dari sistem persamaan berikut menggunakan metode eliminasi-substitusi:
$$
\begin{cases} 2x + y = 7 \\ x - 2y = 1 \end{cases}
$$

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Metode Eliminasi.** Kita pilih untuk mengeliminasi variabel $y$. Agar koefisien $y$ pada kedua persamaan sama besar, kalikan persamaan pertama dengan 2 dan persamaan kedua dengan 1:
> $$
> \begin{array}{rccrc} 2x + y = 7 & |\times 2| & \rightarrow & 4x + 2y = & 14 \\ x - 2y = 1 & |\times 1| & \rightarrow & x - 2y = & 1 \\ \hline &&& 5x + \cancel{2y - 2y} = & 15 \end{array}
> $$
> $$5x = 15 \implies x = \frac{15}{5} = 3$$
> 
> **Langkah 2: Metode Substitusi.** Masukkan nilai $x = 3$ ke dalam salah satu persamaan awal (misal persamaan pertama) untuk mencari nilai $y$:
> $$
> \begin{aligned} 2x + y &= 7 \\ 2(3) + y &= 7 \\ 6 + y &= 7 \\ y &= 7 - 6 \\ y &= 1 \end{aligned}
> $$
> Dari perhitungan di atas, diperoleh nilai $x = 3$ dan $y = 1$.
> 
> Jadi, himpunan penyelesaian dari SPLDV tersebut adalah $\{(3, 1)\}$.

---

## Konsep Terkait

- [[Sistem Persamaan dan Pertidaksamaan Linear/01 - Sistem Persamaan Linear Dua Variabel (SPLDV)]]
- [[Sistem Persamaan dan Pertidaksamaan Linear/03 - Sistem Persamaan Linear Tiga Variabel (SPLTV)]]