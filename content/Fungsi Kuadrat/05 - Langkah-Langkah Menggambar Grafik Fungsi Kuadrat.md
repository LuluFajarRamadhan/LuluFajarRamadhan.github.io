---
title:
---
# Langkah-Langkah Menggambar Grafik Fungsi Kuadrat

Menggambar sketsa grafik fungsi kuadrat $f(x) = ax^2 + bx + c$ secara akurat pada koordinat kartesius memerlukan identifikasi titik-titik geometris kunci. Kita tidak perlu memetakan seluruh nilai $x$, melainkan cukup mencari koordinat-koordinat krusial penyusun struktur parabola.

## Prosedur Sketsa Kurva Parabola
Berikut adalah urutan langkah matematis yang sistematis untuk menggambar grafik fungsi kuadrat:

### Langkah 1: Identifikasi Arah Keterbukaan Kurva
Periksa nilai koefisien kuadratik $a$ untuk menentukan bentuk dasar parabola:
* Jika $a > 0$, kurva ==**terbuka ke atas**== (memiliki titik balik minimum).
* Jika $a < 0$, kurva ==**terbuka ke bawah**== (memiliki titik balik maksimum).

### Langkah 2: Tentukan Titik Potong terhadap Sumbu $X$
Titik potong terjadi saat nilai fungsi sama dengan nol ($f(x) = 0$ atau $y = 0$). Faktorkan persamaan kuadrat yang terbentuk untuk mendapatkan akar-akarnya:
$$
ax^2 + bx + c = 0 \rightarrow (x_1, 0) \text{ dan } (x_2, 0)
$$
*Catatan: Jika nilai Diskriminan $D < 0$, lewati langkah ini karena kurva tidak menyentuh sumbu $X$.*

### Langkah 3: Tentukan Titik Potong terhadap Sumbu $Y$
Titik potong terjadi secara instan saat nilai komponen horizontal sama dengan nol ($x = 0$):
$$
y = a(0)^2 + b(0) + c \rightarrow (0, c)
$$

### Langkah 4: Hitung Koordinat Titik Puncak Eksperimental
Tentukan lokasi koordinat titik balik absolut $(x_p, y_p)$ dengan kombinasi rumus sumbu simetri dan nilai optimum:
$$
x_p = -\frac{b}{2a} \quad \text{dan} \quad y_p = f(x_p) \rightarrow (x_p, y_p)
$$

### Langkah 5: Hubungkan Seluruh Titik Menjadi Kurva Mulus
Plot seluruh koordinat hasil kalkulasi langkah 2, 3, dan 4 pada bidang kartesius. Hubungkan titik-titik tersebut menggunakan garis melengkung halus (bukan garis lurus patah-patah) hingga membentuk parabola simetris.

---
## Contoh Soal

1. Gambarlah sketsa grafik fungsi kuadrat $f(x) = x^2 - 2x - 3$ dengan menentukan titik-titik pentingnya!

> [!success]- Klik untuk Lihat Jawaban 1
> Mari kita lakukan pemetaan titik penting langkah demi langkah:
> * **Langkah 1:** Nilai $a = 1$ ($a > 0$), kurva **terbuka ke atas**.
> * **Langkah 2:** Titik potong sumbu $X$ ($y = 0$).
>   $$
>   \begin{aligned}
>   x^2 - 2x - 3 &= 0 \\
>   (x - 3)(x + 1) &= 0 \\
>   x = 3 \quad &\text{atau} \quad x = -1
>   \end{aligned}
>   $$
>   Diperoleh koordinat potong: $(3,0)$ dan $(-1,0)$.
> * **Langkah 3:** Titik potong sumbu $Y$ ($x = 0$).
>   Nilai $c = -3$, koordinat potong adalah $(0, -3)$.
> * **Langkah 4:** Koordinat Titik Puncak $(x_p, y_p)$.
>   $$x_p = -\frac{-2}{2(1)} = \frac{2}{2} = 1$$
>   $$y_p = f(1) = (1)^2 - 2(1) - 3 = 1 - 2 - 3 = -4$$
>   Diperoleh koordinat puncak minimum di $(1, -4)$.
> * **Langkah 5:** Plot titik-titik $(3,0), (-1,0), (0,-3),$ dan $(1,-4)$ pada kartesius, lalu tarik garis melengkung simetris membentuk parabola.

2. Tentukan koordinat titik potong sumbu $X$ dan titik puncak dari fungsi kuadrat $f(x) = -x^2 + 6x - 9$ sebagai panduan menggambar sketsa!

> [!success]- Klik untuk Lihat Jawaban 2
> Lakukan analisis komponen fisis fungsi kuadrat dengan $a = -1, b = 6, c = -9$:
> * **Titik potong sumbu $X$ ($y = 0$):**
>   $$
>   \begin{aligned}
>   -x^2 + 6x - 9 &= 0 \quad \text{(Kalikan } -1\text{)} \\
>   x^2 - 6x + 9 &= 0 \\
>   (x - 3)(x - 3) &= 0 \\
>   x &= 3
>   \end{aligned}
>   $$
>   Karena akar kembar ($D = 0$), kurva hanya menyinggung sumbu $X$ di satu koordinat, yaitu $(3, 0)$.
> * **Koordinat Titik Puncak $(x_p, y_p)$:**
>   $$x_p = -\frac{6}{2(-1)} = \frac{-6}{-2} = 3$$
>   $$y_p = f(3) = -(3)^2 + 6(3) - 9 = -9 + 18 - 9 = 0$$
>   Diperoleh koordinat puncak maksimum di $(3, 0)$. Grafik ini menempel tepat pada sumbu $X$ sekaligus bertindak sebagai titik puncaknya.

---

## Konsep Terkait

- [[Fungsi Kuadrat/04 - Hubungan Nilai Diskriminan dengan Grafik Fungsi]]
- [[Fungsi Kuadrat/06 - Menentukan Rumus Fungsi Kuadrat dari Titik yang Diketahui]]