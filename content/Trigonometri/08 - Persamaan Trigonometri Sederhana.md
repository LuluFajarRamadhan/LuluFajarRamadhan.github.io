---
title:
---

# Persamaan Trigonometri Sederhana

Persamaan trigonometri adalah persamaan yang variabelnya berada di dalam fungsi trigonometri. Menemukan solusi persamaan ini berarti mencari seluruh nilai sudut $x$ yang memenuhi persamaan tersebut dalam batasan interval tertentu (misalkan $0^{\circ} \le x \le 360^{\circ}$). Karena sifat fungsi trigonometri yang periodik, jawaban dari persamaan ini biasanya lebih dari satu sudut.

---

## Rumus Penyelesaian Persamaan Dasar

Untuk menyelesaikan persamaan, ubah bentuk persamaan menjadi bentuk standar $\text{f}(x) = \text{f}(\alpha)$, kemudian gunakan rumus periodisitas di bawah ini ($k$ adalah bilangan bulat: $\dots, -1, 0, 1, 2, \dots$):

### 1. Persamaan Sinus: $\sin x = \sin \alpha$
Sinus bernilai positif di Kuadran I dan II, sehingga solusinya:
- $x_1 = \alpha + k \cdot 360^{\circ}$
- $x_2 = (180^{\circ} - \alpha) + k \cdot 360^{\circ}$

### 2. Persamaan Cosinus: $\cos x = \cos \alpha$
Cosinus bernilai positif di Kuadran I dan IV, sehingga solusinya:
- $x_1 = \alpha + k \cdot 360^{\circ}$
- $x_2 = -\alpha + k \cdot 360^{\circ}$

### 3. Persamaan Tangen: $\tan x = \tan \alpha$
Tangen berulang setiap setengah lingkaran (periode $180^{\circ}$), sehingga solusinya hanya satu jalur:
- $x = \alpha + k \cdot 180^{\circ}$

---

## Contoh Soal

Tentukan himpunan penyelesaian (HP) dari persamaan $2 \cos x - \sqrt{3} = 0$ untuk interval $0^{\circ} \le x \le 360^{\circ}$!

>[!Success]- Klik untuk Lihat Jawaban
> **Penyelesaian:**
> 1. Ubah persamaan menjadi bentuk standar $\cos x = \cos \alpha$:
>    $$2 \cos x = \sqrt{3}$$
>    $$\cos x = \frac{1}{2}\sqrt{3}$$
>    $$\cos x = \cos 30^{\circ} \implies (\alpha = 30^{\circ})$$
> 
> 2. Gunakan rumus penyelesaian persamaan cosinus:
>    **Kemungkinan 1:**
>    $$x = 30^{\circ} + k \cdot 360^{\circ}$$
>    - Untuk $k = 0 \implies x = 30^{\circ}$ (Memenuhi)
>    - Untuk $k = 1 \implies x = 390^{\circ}$ (Tidak Memenuhi batas interval)
> 
>    **Kemungkinan 2:**
>    $$x = -30^{\circ} + k \cdot 360^{\circ}$$
>    - Untuk $k = 0 \implies x = -30^{\circ}$ (Tidak Memenuhi batas interval)
>    - Untuk $k = 1 \implies x = -30^{\circ} + 360^{\circ} = 330^{\circ}$ (Memenuhi)
> 
> 3. Susun himpunan penyelesaian:
>    $$\text{HP} = \{30^{\circ}, 330^{\circ}\}$$

---

## Konsep Terkait
* [[Trigonometri/03 - Nilai Perbandingan Sudut Istimewa|03 - Nilai Perbandingan Sudut Istimewa]]
* [[Trigonometri/04 - Perbandingan Trigonometri di Berbagai Kuadran|04 - Perbandingan Trigonometri di Berbagai Kuadran]]
* [[Trigonometri/07 - Fungsi dan Grafik Trigonometri|07 - Fungsi dan Grafik Trigonometri]]