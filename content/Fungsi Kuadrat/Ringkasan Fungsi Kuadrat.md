---
title: Ringkasan Fungsi Kuadrat
---
# Ringkasan Fungsi Kuadrat

Halaman ini merangkum seluruh esensi teoretis, formulasi matematis, serta instrumen analisis grafik fungsi kuadrat yang telah dipelajari sebagai rujukan cepat (*quick reference*).

## 1. Fondasi Utama dan Bentuk Umum
Fungsi kuadrat adalah fungsi polinomial tingkat dua yang menghasilkan kurva simetris berupa ==**Parabola**==.
* **Bentuk Umum:** $f(x) = ax^2 + bx + c$ atau $y = ax^2 + bx + c$
* **Syarat Mutlak:** $a, b, c \in \mathbb{R}$ dan ==**$a \neq 0$**==.

## 2. Peta Kendali Koefisien dan Konstanta
* **Koefisien $a$ (Arah Kurva):** * $a > 0 \rightarrow$ Parabola ==**terbuka ke atas**== (memiliki titik balik minimum).
  * $a < 0 \rightarrow$ Parabola ==**terbuka ke bawah**== (memiliki titik balik maksimum).
* **Koefisien $b$ (Sumbu Simetri):**
  * $a$ dan $b$ bertanda sama $\rightarrow$ Sumbu simetri berada di ==**kiri sumbu $Y$**==.
  * $b = 0 \rightarrow$ Sumbu simetri berada ==**tepat di sumbu $Y$**==.
  * $a$ dan $b$ beda tanda $\rightarrow$ Sumbu simetri berada di ==**kanan sumbu $Y$**==.
* **Konstanta $c$ (Potong Sumbu $Y$):** Menunjukkan ketinggian titik potong kurva terhadap sumbu vertikal pada koordinat $(0, c)$.

## 3. Rumus Inti Titik Puncak dan Sumbu Simetri
Titik balik atau puncak absolut dari grafik fungsi kuadrat disimbolkan dengan koordinat $(x_p, y_p)$:
* **Persamaan Sumbu Simetri:** $$x_p = -\frac{b}{2a}$$
* **Nilai Optimum (Maksimum/Minimum):** $$y_p = -\frac{D}{4a} \quad \text{atau} \quad y_p = f(x_p)$$
* **Koordinat Titik Puncak:** $$\text{Titik Puncak} = \left( -\frac{b}{2a}, -\frac{D}{4a} \right)$$

## 4. Karakteristik Diskriminan ($D = b^2 - 4ac$)
Nilai Diskriminan ($D$) menetapkan kedudukan atau interaksi kurva parabola terhadap garis horizontal Sumbu $X$:
* **$D > 0$:** Kurva memotong sumbu $X$ di ==**dua titik real berbeda**==.
* **$D = 0$:** Kurva ==**menyinggung sumbu $X$**== di satu titik (titik puncak menempel di sumbu $X$).
* **$D < 0$:** Kurva ==**tidak memotong maupun menyinggung sumbu $X$**==.
  * *Definit Positif:* $a > 0$ dan $D < 0$ (Grafik selalu berada di atas sumbu $X$, nilai fungsi selalu $+2$).
  * *Definit Negatif:* $a < 0$ dan $D < 0$ (Grafik selalu berada di bawah sumbu $X$, nilai fungsi selalu $-2$).

## 5. Teori Konstruksi Formula Fungsi
* **Jika diketahui dua titik potong sumbu $X$, $(x_1, 0)$ dan $(x_2, 0)$:**
$$y = a(x - x_1)(x - x_2)$$
* **Jika diketahui titik puncak $(x_p, y_p)$:**
$$y = a(x - x_p)^2 + y_p$$

---
## Contoh Soal Ringkasan

1. Diketahui fungsi kuadrat $f(x) = x^2 - 4x - 5$. Tentukan secara cepat arah keterbukaan kurva, koordinat titik potong sumbu $Y$, serta koordinat titik puncaknya!

> [!success]- Klik untuk Lihat Jawaban 1
> Ekstraksi komponen fungsi: $a = 1, b = -4, c = -5$.
> * **Arah Keterbukaan:** Karena $a = 1$ ($a > 0$), kurva dipastikan **terbuka ke atas**.
> * **Titik Potong Sumbu $Y$:** Sesuai koordinat $(0, c)$, maka kurva memotong sumbu $Y$ di titik **$(0, -5)$**.
> * **Koordinat Titik Puncak $(x_p, y_p)$:**
>   $$x_p = -\frac{b}{2a} = -\frac{-4}{2(1)} = \frac{4}{2} = 2$$
>   Substitusikan nilai $x_p = 2$ ke dalam fungsi untuk mencari nilai optimum $y_p$:
>   $$
>   \begin{aligned}
>   y_p = f(2) &= (2)^2 - 4(2) - 5 \\
>   &= 4 - 8 - 5 \\
>   &= -9
>   \end{aligned}
>   $$
>   Jadi, koordinat titik puncak minimumnya adalah **$(2, -9)$**.

2. Sebuah fungsi kuadrat memiliki nilai definit positif. Jika koefisien kuadratiknya adalah $a = 2$ dan koefisien linearnya adalah $b = -4$, tentukan batasan nilai konstanta $c$ yang memenuhi sifat tersebut!

> [!success]- Klik untuk Lihat Jawaban 2
> Sifat definit positif mensyaratkan dua kondisi mutlak, yaitu $a > 0$ dan $D < 0$.
> * **Kondisi 1:** Nilai $a = 2$, syarat $a > 0$ sudah terpenuhi secara sah.
> * **Kondisi 2:** Syarat Diskriminan harus lebih kecil dari nol ($D < 0$):
>   $$
>   \begin{aligned}
>   b^2 - 4ac &< 0 \\
>   (-4)^2 - 4(2)(c) &< 0 \\
>   16 - 8c &< 0 \\
>   16 &< 8c \\
>   \frac{16}{8} &< c \\
>   c &> 2
>   \end{aligned}
>   $$
>   Jadi, batasan nilai konstanta $c$ yang harus dipenuhi agar fungsi tersebut tetap bersifat definit positif adalah **$c > 2$**.

---

## Navigasi Bab Fungsi Kuadrat

- [[Fungsi Kuadrat/00 - Peta Konsep Fungsi Kuadrat]]
- [[Fungsi Kuadrat/01 - Definisi dan Bentuk Umum Fungsi Kuadrat]]
- [[Fungsi Kuadrat/05 - Langkah-Langkah Menggambar Grafik Fungsi Kuadrat]]
- [[Fungsi Kuadrat/08 - Pemodelan Masalah Nilai Maksimum dan Minimum]]