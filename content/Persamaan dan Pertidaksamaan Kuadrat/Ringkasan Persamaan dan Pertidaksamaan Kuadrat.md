---
title:
---
# Ringkasan Persamaan dan Pertidaksamaan Kuadrat

Halaman ini menyajikan rangkuman komparatif, kumpulan formula taktis, serta algoritma penyelesaian persamaan dan pertidaksamaan kuadrat sebagai panduan cepat (*cheat sheet*) navigasi aljabar.

## 1. Anatomi dan Identitas Utama
* **Bentuk Baku Persamaan:** $ax^2 + bx + c = 0$
* **Bentuk Baku Pertidaksamaan:** $ax^2 + bx + c \quad [\le, <, >, \ge] \quad 0$
* **Syarat Konstitusi Suku:** $a, b, c \in \mathbb{R}$ dan ==**$a \neq 0$**==.

## 2. Tiga Senjata Pencarian Akar
Untuk menyelesaikan persamaan kuadrat, kita dapat memilih satu dari tiga metode alternatif berikut:
* **Faktorisasi Bentuk Umum:** Mengurai suku menjadi $\frac{1}{a}(ax + p)(ax + q) = 0$ dengan ketentuan $p \times q = ac$ dan $p + q = b$.
* **Melengkapkan Kuadrat Sempurna:** Memanipulasi persamaan menjadi bentuk $(x + \frac{b}{2a})^2 = \frac{b^2 - 4ac}{4a^2}$.
* **Rumus Kuadratik (Rumus ABC):** Formula universal untuk mencari akar dalam kondisi angka koefisien apa pun:
$$
x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

## 3. Matriks Sifat Akar Berdasarkan Diskriminan ($D = b^2 - 4ac$)
* **$D > 0$:** Persamaan memiliki ==**dua akar real berbeda**== ($x_1 \neq x_2$).
* **$D = 0$:** Persamaan memiliki ==**dua akar real kembar**== ($x_1 = x_2$).
* **$D < 0$:** Persamaan tidak memiliki akar real (Akar ==**Imajiner**==). 
  * *Konsep Definit ($D < 0$):* Jika $a > 0 \rightarrow$ Nilai fungsi selalu positif. Jika $a < 0 \rightarrow$ Nilai fungsi selalu negatif.

## 4. Teorema Operasi Akar Vieta
Jika $x_1$ dan $x_2$ merupakan akar-akar dari $ax^2 + bx + c = 0$, maka hubungan operasionalnya adalah:
* **Operasi Jumlah:** $x_1 + x_2 = -\frac{b}{a}$
* **Operasi Hasil Kali:** $x_1 \cdot x_2 = \frac{c}{a}$
* **Konstruksi Persamaan Baru:** $x^2 - (\text{Jumlah Akar Baru})x + (\text{Hasil Kali Akar Baru}) = 0$

## 5. Algoritma Garis Bilangan Pertidaksamaan
Untuk menyelesaikan pertidaksamaan kuadrat: Cari pembuat nol $\rightarrow$ Plot titik kritis pada garis bilangan $\rightarrow$ Uji tanda ($+$ atau $-$) via substitusi acak $\rightarrow$ Pilih daerah arsiran:
* Arsir daerah ==**Positif ($+$)**== jika tanda akhir pertidaksamaan berupa $>$ atau $\ge$.
* Arsir daerah ==**Negatif ($-$)**== jika tanda akhir pertidaksamaan berupa $<$ atau $\le$.

---
## Contoh Soal Refleksi

1. Selesaikan persamaan kuadrat $x^2 - 5x - 14 = 0$ dan tentukan nilai operasi jumlah kuadrat dari akar-akarnya!

> [!success]- Klik untuk Lihat Jawaban 1
> Ekstraksi parameter: $a = 1, b = -5, c = -14$.
> * **Metode 1 (Mencari akar langsung):** Faktorkan persamaan:
> $$
> (x - 7)(x + 2) = 0 \quad \rightarrow \quad x_1 = 7, x_2 = -2
> $$
> Maka jumlah kuadrat akarnya adalah: $x_1^2 + x_2^2 = (7)^2 + (-2)^2 = 49 + 4 = 53$.
> * **Metode 2 (Teorema Vieta tanpa mencari akar):**
> $$
> x_1 + x_2 = -\frac{-5}{1} = 5 \quad \text{dan} \quad x_1 \cdot x_2 = \frac{-14}{1} = -14
> $$
> Masukkan ke rumus manipulasi kuadrat Vieta:
> $$
> \begin{aligned}
> x_1^2 + x_2^2 &= (x_1 + x_2)^2 - 2x_1x_2 \\
> &= (5)^2 - 2(-14) \\
> &= 25 + 28 = 53
> \end{aligned}
> $$
> Kedua metode terbukti menghasilkan nilai matematika yang konsisten, yaitu **53**.

2. Tentukan HP dari pertidaksamaan kuadrat $x^2 - 9 \ge 0$ menggunakan analisis pembuat nol!

> [!success]- Klik untuk Lihat Jawaban 2
> Ini merupakan bentuk kuadrat khusus selisih dua kuadrat ($A^2 - B^2$):
> * **Langkah 1:** Cari nilai kritis pembuat nol fungsi:
> $$
> \begin{aligned}
> x^2 - 9 &= 0 \\
> (x - 3)(x + 3) &= 0 \\
> x_1 = 3 \quad &\text{atau} \quad x_2 = -3
> \end{aligned}
> $$
> * **Langkah 2:** Plot $-3$ dan $3$ pada garis bilangan dengan bulatan penuh. 
> * **Langkah 3:** Uji angka $x = 0$ (tengah): $0^2 - 9 = -9$ (Negatif). Maka area tengah bermuatan ($-$) dan area sayap luar bermuatan ($+$).
> * **Langkah 4:** Karena tanda soal adalah $\ge 0$, kita ambil wilayah positif yang mengarah ke luar kanan dan luar kiri.
> Jadi, Himpunan Penyelesaiannya adalah $HP = \{x \mid x \le -3 \text{ atau } x \ge 3, x \in \mathbb{R}\}$.

---

## Navigasi Bab Persamaan & Pertidaksamaan Kuadrat

- [[Persamaan dan Pertidaksamaan Kuadrat/00 - Peta Konsep Persamaan dan Pertidaksamaan Kuadrat]]
- [[Persamaan dan Pertidaksamaan Kuadrat/01 - Definisi dan Akar-Akar Persamaan Kuadrat]]
- [[Persamaan dan Pertidaksamaan Kuadrat/04 - Jumlah dan Hasil Kali Akar-Akar Persamaan Kuadrat]]
- [[Persamaan dan Pertidaksamaan Kuadrat/07 - Metode Interval dan Garis Bilangan untuk Pertidaksamaan]]