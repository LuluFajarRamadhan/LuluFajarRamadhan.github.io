---
title:
---
# Sistem Persamaan Linear Tiga Variabel (SPLTV)

Sistem Persamaan Linear Tiga Variabel (SPLTV) merupakan perluasan dari konsep SPLDV, di mana sistem ini terdiri dari tiga buah persamaan linear yang memuat tiga jenis variabel acak (umumnya ditulis $x, y,$ dan $z$). Bentuk umum SPLTV adalah:
$$
\begin{cases} a_1x + b_1y + c_1z = d_1 \\ a_2x + b_2y + c_2z = d_2 \\ a_3x + b_3y + c_3z = d_3 \end{cases}
$$

Strategi utama menyelesaikan SPLTV adalah dengan melakukan ==**reduksi bertahap menggunakan metode eliminasi.**== Kita pilih dua pasang persamaan untuk mengeliminasi variabel yang sama (misal variabel $z$), sehingga akan menghasilkan dua persamaan baru yang membentuk SPLDV ($x$ dan $y$). Setelah SPLDV terpecahkan, kita lakukan substitusi balik untuk mendapatkan nilai ketiga variabel $(x, y, z)$.

---
## Contoh Soal
Tentukan himpunan penyelesaian $(x, y, z)$ dari sistem persamaan linear tiga variabel berikut:
$$
\begin{cases} x + y + z = 6 \quad \dots \text{(Pers 1)} \\ 2x - y + z = 3 \quad \dots \text{(Pers 2)} \\ x + 2y - z = 2 \quad \dots \text{(Pers 3)} \end{cases}
$$

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Eliminasi variabel $z$ untuk membentuk SPLDV.**
> * Pasangkan Persamaan 1 dan Persamaan 2 (kurangkan karena tanda koefisien $z$ sama):
>   $$
>   \begin{array}{rcc} x + y + z &= & 6 \\ 2x - y + z &= & 3 \\ \hline -x + 2y + \cancel{z - z} &= & 3 \quad \dots \text{(Pers 4)} \end{array}
>   $$
> * Pasangkan Persamaan 1 dan Persamaan 3 (jumlahkan karena tanda koefisien $z$ berbeda):
>   $$
>   \begin{array}{rcc} x + y + z &= & 6 \\ x + 2y - z &= & 2 \\ \hline 2x + 3y + \cancel{z - z} &= & 8 \quad \dots \text{(Pers 5)} \end{array}
>   $$
> 
> **Langkah 2: Selesaikan SPLDV (Persamaan 4 dan Persamaan 5).**
> Kita eliminasi variabel $x$ dengan mengalikan Persamaan 4 dengan 2:
> $$
> \begin{array}{rccrc} -x + 2y = 3 & |\times 2| & \rightarrow & -2x + 4y = & 6 \\ 2x + 3y = 8 & |\times 1| & \rightarrow & 2x + 3y = & 8 \\ \hline &&& \cancel{-2x + 2x} + 7y = & 14 \end{array}
> $$
> Didapat nilai $y$:
> $$7y = 14 \implies y = \frac{14}{7} = 2$$
> 
> Substitusi nilai $y = 2$ ke Persamaan 4 untuk mencari $x$:
> $$
> \begin{aligned} -x + 2(2) &= 3 \\ -x + 4 &= 3 \\ -x &= 3 - 4 \\ -x &= -1 \implies x = 1 \end{aligned}
> $$
> 
> **Langkah 3: Substitusi nilai $x = 1$ dan $y = 2$ ke Persamaan 1 untuk mencari $z$.**
> $$
> \begin{aligned} x + y + z &= 6 \\ 1 + 2 + z &= 6 \\ 3 + z &= 6 \\ z &= 6 - 3 \\ z &= 3 \end{aligned}
> $$
> 
> Hasil akhirnya berupa bilangan bulat: $x = 1$, $y = 2$, dan $z = 3$.
> 
> Jadi, himpunan penyelesaian dari SPLTV tersebut adalah $\{(1, 2, 3)\}$.

---

## Konsep Terkait

- [[Sistem Persamaan dan Pertidaksamaan Linear/02 - Metode Penyelesaian SPLDV Grafik, Substitusi, dan Eliminasi]]
- [[Sistem Persamaan dan Pertidaksamaan Linear/04 - Aplikasi dan Permodelan Masalah Nyata Berbasis SPLDV dan SPLTV]]