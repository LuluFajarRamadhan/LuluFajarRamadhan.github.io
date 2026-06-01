---
title:
---
# Pemodelan Masalah Nilai Maksimum dan Minimum

Salah satu kekuatan utama dari fungsi kuadrat adalah kemampuannya untuk menyelesaikan masalah ==**Optimasi**==. Dalam kehidupan nyata, kita sering kali dihadapkan pada situasi di mana kita harus mencari nilai tertinggi (maksimum) atau nilai terendah (minimum) dari suatu variabel yang saling bergantung di bawah batasan tertentu.

## Prinsip Dasar Pemodelan
Kunci utama penyelesaian masalah ekstrem ini terletak pada pemanfaatan karakteristik titik puncak parabola. Langkah-langkah sistematis untuk memodelkan masalah ini adalah:

1. **Definisikan Variabel:** Tentukan variabel bebas ($x$) dan variabel terikat ($y$ atau $f(x)$) berdasarkan situasi yang diberikan.
2. **Susun Persamaan Kendala:** Buat hubungan matematis antar-variabel berdasarkan batasan yang ada di dalam soal.
3. **Konstruksi Fungsi Kuadrat:** Substitusikan persamaan kendala ke dalam fungsi sasaran hingga terbentuk fungsi kuadrat berparonim tunggal: $f(x) = ax^2 + bx + c$.
4. **Hitung Nilai Optimum:** * Jika $a < 0$, gunakan rumus titik puncak untuk mencari ==**Nilai Maksimum**== (misal: luas maksimum, keuntungan maksimum).
   * Jika $a > 0$, gunakan rumus titik puncak untuk mencari ==**Nilai Minimum**== (misal: biaya minimum, penggunaan bahan minimum).

Formulasi taktis untuk mencari nilai $x$ saat kondisi mencapai optimum adalah $x_p = -\frac{b}{2a}$, sedangkan nilai optimumnya dapat dihitung melalui $y_p = -\frac{D}{4a}$ atau $y_p = f(x_p)$.

---
## Contoh Soal

1. Kawat sepanjang 120 meter akan digunakan untuk memagari sebidang tanah berbentuk persegi panjang yang menempel pada dinding tembok sebuah gedung (sisi dinding tidak perlu dipagari). Tentukan luas maksimum tanah yang dapat dipagari!

> [!success]- Klik untuk Lihat Jawaban 1
> Mari kita modelkan situasi fisik tersebut ke dalam bentuk aljabar:
> * **Langkah 1:** Misalkan lebar persegi panjang = $x$ dan panjangnya = $y$.
> * **Langkah 2:** Karena satu sisi panjang menempel di tembok, maka panjang kawat adalah:
>   $$
>   \begin{aligned}
>   2x + y &= 120 \\
>   y &= 120 - 2x
>   \end{aligned}
>   $$
> * **Langkah 3:** Fungsi sasaran adalah Luas ($L$):
>   $$
>   \begin{aligned}
>   L(x) &= \text{panjang} \times \text{lebar} \\
>   L(x) &= y \times x \\
>   L(x) &= (120 - 2x)x \\
>   L(x) &= -2x^2 + 120x
>   \end{aligned}
>   $$
> * **Langkah 4:** Cari luas maksimum menggunakan koordinat puncak vertikal ($y_p$). Komponen fungsi: $a = -2, b = 120$.
>   Cari lebar optimum ($x_p$) terlebih dahulu:
>   $$x_p = -\frac{b}{2a} = -\frac{120}{2(-2)} = \frac{-120}{-4} = 30 \text{ meter}$$
>   Substitusikan $x_p = 30$ ke fungsi luas untuk mendapat Luas Maksimum:
>   $$L(30) = -2(30)^2 + 120(30) = -2(900) + 3600 = -1800 + 3600 = 1800$$
>   Jadi, luas maksimum tanah yang dapat dipagari adalah **1800 m²**.

2. Jumlah dua buah bilangan bulat adalah 20. Tentukan kedua bilangan tersebut agar hasil kali keduanya mencapai nilai maksimum!

> [!success]- Klik untuk Lihat Jawaban 2
> Ubah deskripsi soal menjadi persamaan fungsi matematika:
> * **Langkah 1:** Misalkan bilangan pertama = $x$ dan bilangan kedua = $y$.
> * **Langkah 2:** Hubungan kedua bilangan:
>   $$
>   \begin{aligned}
>   x + y &= 20 \\
>   y &= 20 - x
>   \end{aligned}
>   $$
> * **Langkah 3:** Fungsi sasaran adalah Hasil Kali ($K$):
>   $$
>   \begin{aligned}
>   K(x) &= x \times y \\
>   K(x) &= x(20 - x) \\
>   K(x) &= -x^2 + 20x
>   \end{aligned}
>   $$
> * **Langkah 4:** Dari fungsi $K(x) = -x^2 + 20x$, didapatkan nilai koefisien $a = -1, b = 20$. Cari nilai $x$ puncak:
>   $$x_p = -\frac{b}{2a} = -\frac{20}{2(-1)} = \frac{-20}{-2} = 10$$
>   Jika nilai $x = 10$, maka kita cari nilai $y$:
>   $$y = 20 - x = 20 - 10 = 10$$
>   Jadi, kedua bilangan bulat tersebut agar hasil kalinya maksimum adalah **10 dan 10**.

---

## Konsep Terkait

- [[Fungsi Kuadrat/03 - Karakteristik Titik Puncak dan Sumbu Simetri]]
- [[Fungsi Kuadrat/09 - Aplikasi Fungsi Kuadrat pada Kasus Fisika dan Ekonomi]]