---
title: Analisis Pergeseran Grafik (Translasi Fungsi Kuadrat)
---
# Analisis Pergeseran Grafik (Translasi Fungsi Kuadrat)

Grafik fungsi kuadrat dasar $f(x) = ax^2$ dapat dimanipulasi posisinya tanpa mengubah bentuk dasar kelengkungan kurvanya. Konsep transformasi geometri ini disebut ==**Translasi (Pergeseran)**==, di mana seluruh titik koordinat pada parabola bergeser secara serentak ke arah horizontal maupun vertikal.

## Prinsip Operasi Pergeseran Fungsi
Perubahan struktur formula akibat pergeseran fungsi kuadrat dapat dianalisis secara taktis menggunakan kaidah berikut:

### 1. Pergeseran Vertikal (Ke Atas / Ke Bawah)
Pergeseran searah sumbu $Y$ dilakukan dengan menambahkan atau mengurangi konstanta secara langsung di luar fungsi utama:
* **Digeser ke atas sejauh $k$ satuan:** Formula fungsi berubah menjadi $g(x) = f(x) + k$
* **Digeser ke bawah sejauh $k$ satuan:** Formula fungsi berubah menjadi $g(x) = f(x) - k$

### 2. Pergeseran Horizontal (Ke Kanan / Ke Kiri)
Pergeseran searah sumbu $X$ dilakukan dengan memanipulasi nilai input variabel variabel $x$ secara langsung di dalam tanda kurung kuadratik:
* **Digeser ke kanan sejauh $h$ satuan:** Variabel $x$ diganti oleh $(x - h)$, formula menjadi $g(x) = a(x - h)^2$
* **Digeser ke kiri sejauh $h$ satuan:** Variabel $x$ diganti oleh $(x + h)$, formula menjadi $g(x) = a(x + h)^2$

> [!info] **Kombinasi Bentuk Kuadrat Sempurna**
> Jika fungsi dasar $f(x) = ax^2$ digeser horizontal sejauh $h$ satuan dan vertikal sejauh $k$ satuan, maka bentuk akhirnya identik dengan bentuk titik puncak: $g(x) = a(x - h)^2 + k$.

---
## Contoh Soal

1. Jika grafik fungsi kuadrat $f(x) = x^2$ digeser ke atas sejauh 4 satuan, kemudian dilanjutkan digeser ke kiri sejauh 3 satuan, tentukan rumus fungsi baru hasil pergeseran tersebut!

> [!success]- Klik untuk Lihat Jawaban 1
> Mari kita lakukan transformasi fungsi secara bertahap:
> * **Tahap 1:** Pergeseran ke atas sejauh 4 satuan (Vertikal $+$).
>   $$f_1(x) = x^2 + 4$$
> * **Tahap 2:** Pergeseran ke kiri sejauh 3 satuan (Horizontal $\rightarrow$ ganti $x$ dengan $(x + 3)$).
>   $$
>   \begin{aligned}
>   f_2(x) &= (x + 3)^2 + 4 \\
>   f_2(x) &= (x^2 + 6x + 9) + 4 \\
>   f_2(x) &= x^2 + 6x + 13
>   \end{aligned}
>   $$
>   Jadi, rumus fungsi baru setelah mengalami rangkaian pergeseran adalah $g(x) = x^2 + 6x + 13$.

2. Diketahui grafik fungsi baru $g(x) = (x - 2)^2 - 5$ merupakan hasil translasi dari grafik induk $f(x) = x^2$. Analisis arah dan jarak pergeseran yang terjadi pada kurva tersebut!

> [!success]- Klik untuk Lihat Jawaban 2
> Bandingkan struktur fungsi hasil modifikasi $g(x) = (x - 2)^2 - 5$ dengan aturan baku kombinasi pergeseran $a(x - h)^2 + k$:
> * Komponen di dalam kurung adalah $(x - 2)$, yang berarti nilai $h = 2$ (bernilai positif dalam kaidah pergeseran kanan). Ini mengindikasikan kurva **digeser ke arah kanan sejauh 2 satuan**.
> * Komponen konstanta luar adalah $-5$, yang berarti nilai $k = -5$. Ini mengindikasikan kurva **digeser ke arah bawah sejauh 5 satuan**.
> Jadi, karakteristik translasinya adalah grafik $f(x) = x^2$ digeser 2 satuan ke kanan dan 5 satuan ke bawah untuk membentuk grafik $g(x)$.

---

## Concept Terkait

- [[Fungsi Kuadrat/01 - Definisi dan Bentuk Umum Fungsi Kuadrat]]
- [[Fungsi Kuadrat/06 - Menentukan Rumus Fungsi Kuadrat dari Titik yang Diketahui]]