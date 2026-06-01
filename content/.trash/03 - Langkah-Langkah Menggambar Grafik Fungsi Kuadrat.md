---
title: Langkah-Langkah Menggambar Grafik Fungsi Kuadrat
---

# Langkah-Langkah Menggambar Grafik Fungsi Kuadrat

Menggambar sketsa grafik fungsi kuadrat bukan berarti memplot puluhan titik secara acak. Kita hanya perlu mencari **titik-titik kunci (titik istimewa)** melalui analisis aljabar, lalu menghubungkannya menjadi kurva parabola yang mulus.

---

## Prosedur Baku Menggambar Parabola

Berikut adalah 4 langkah sistematis untuk menggambar grafik $f(x) = ax^2 + bx + c$:

### Langkah 1: Tentukan Arah Hadap Kurva
Lihat tanda nilai $a$. Jika $a > 0$ grafik tersenyum ($\smile$), jika $a < 0$ grafik cemberut ($\frown$).

### Langkah 2: Cari Titik Potong dengan Sumbu-Sumbu Koordinat
- **Titik potong sumbu $y$ (Syarat $x = 0$):** Koordinatnya langsung didapat pada titik **$(0, c)$**.
- **Titik potong sumbu $x$ (Syarat $y$ atau $f(x) = 0$):** Selesaikan persamaan kuadrat $ax^2 + bx + c = 0$ menggunakan teknik faktorisasi atau rumus ABC untuk mendapatkan titik **$(x_1, 0)$** dan **$(x_2, 0)$**.

### Langkah 3: Tentukan Sumbu Simetri dan Titik Puncak ($P_p$)
Parabola adalah kurva simetris. Garis lipat tengahnya (Sumbu Simetri) dan titik ekstremnya (Puncak) dicari dengan rumus:
- **Sumbu Simetri ($x_p$):** $x_p = -\frac{b}{2a}$
- **Nilai Ekstrem ($y_p$):** $y_p = -\frac{D}{4a}$ atau substitusikan nilai $x_p$ ke dalam fungsi $f(x_p)$.
- **Koordinat Puncak ($P_p$):** $\left( -\frac{b}{2a}, \, -\frac{D}{4a} \right)$

### Langkah 4: Plot Titik Istimewa dan Hubungkan Kurva
Gambarkan titik-titik koordinat yang telah ditemukan di atas pada diagram Kartesius, lalu tarik garis lengkung imajiner secara mulus (jangan kaku seperti garis lurus).

---

## Contoh Soal

Buatlah sketsa grafik fungsi kuadrat dari $f(x) = x^2 - 2x - 3$!

>[!Success]- Klik untuk Lihat Jawaban
> **Penyelesaian:**
> Diketahui $a = 1, \, b = -2, \, c = -3$.
> 
> **1. Arah Kurva:** $a = 1 > 0 \implies$ Parabola terbuka ke atas ($\smile$).
> 
> **2. Titik Potong:**
> - Sumbu $y \implies (0, c) = \mathbf{(0, -3)}$
> - Sumbu $x \implies x^2 - 2x - 3 = 0$
>   $$(x - 3)(x + 1) = 0 \implies x = 3 \text{ atau } x = -1$$
>   Titik potongnya adalah $\mathbf{(3, 0)}$ dan $\mathbf{(-1, 0)}$.
> 
> **3. Titik Puncak ($x_p, y_p$):**
> - $x_p = -\frac{b}{2a} = -\frac{-2}{2(1)} = \frac{2}{2} = 1$
> - Substitusi $x_p = 1$ ke fungsi untuk mencari $y_p$:
>   $$y_p = (1)^2 - 2(1) - 3 = 1 - 2 - 3 = -4$$
>   Koordinat puncak adalah $\mathbf{(1, -4)}$.
> 
> **4. Plotting:**
> Hubungkan titik $(-1,0)$, $(0,-3)$, puncak $(1,-4)$, dan $(3,0)$ menjadi kurva parabola mulus menghadap ke atas.

---

## Konsep Terkait
* [[Fungsi Kuadrat/04 - Menentukan Titik Puncak dan Sumbu Simetri]]
* [[Fungsi Kuadrat/06 - Hubungan Fungsi Kuadrat dan Persamaan Kuadrat]]