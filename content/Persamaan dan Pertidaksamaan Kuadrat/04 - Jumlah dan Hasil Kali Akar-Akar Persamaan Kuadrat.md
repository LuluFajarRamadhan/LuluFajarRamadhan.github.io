---
title:
---
# Jumlah dan Hasil Kali Akar-Akar Persamaan Kuadrat

Ketika kita berhadapan dengan operasi akar-akar persamaan kuadrat, kita sering kali tidak perlu bersusah payah mencari nilai individual dari $x_1$ dan $x_2$ terlebih dahulu. Melalui teorema Vieta, terdapat ==**hubungan simetris yang pasti**== antara operasi aritmetika akar dengan nilai koefisien asal ($a, b,$ dan $c$).

## Teorema Operasi Akar (Teorema Vieta)
Untuk setiap persamaan kuadrat $ax^2 + bx + c = 0$ yang memiliki akar-akar $x_1$ dan $x_2$, berlaku rumus fundamental:

### 1. Rumus Jumlah Akar
$$
x_1 + x_2 = -\frac{b}{a}
$$

### 2. Rumus Hasil Kali Akar
$$
x_1 \cdot x_2 = \frac{c}{a}
$$

## Manipulasi Aljabar Turunan Populer
Dari dua rumus dasar di atas, kita dapat menurunkan berbagai variasi manipulasi aljabar tingkat lanjut yang sering muncul pada analisis soal:
* **Jumlah Kuadrat Akar:** $$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2$$
* **Selisih Kuadrat Akar:** $$x_1^2 - x_2^2 = (x_1 + x_2)(x_1 - x_2)$$
* **Jumlah Kebalikan Akar:** $$\frac{1}{x_1} + \frac{1}{x_2} = \frac{x_1 + x_2}{x_1 \cdot x_2}$$

---
## Contoh Soal

1. Jika $x_1$ dan $x_2$ adalah akar-akar dari persamaan kuadrat $x^2 - 5x + 6 = 0$, hitunglah nilai dari $x_1 + x_2$ dan $x_1 \cdot x_2$!

> [!success]- Klik untuk Lihat Jawaban 1
> Ekstraksi data koefisien: $a = 1, b = -5, c = 6$. Gunakan teorema Vieta secara langsung:
> * **Operasi Jumlah Akar:**
>   $$x_1 + x_2 = -\frac{b}{a} = -\frac{-5}{1} = 5$$
> * **Operasi Hasil Kali Akar:**
>   $$x_1 \cdot x_2 = \frac{c}{a} = \frac{6}{1} = 6$$
> Jadi, hasil penjumlahan akarnya adalah $5$ dan hasil perkalian akarnya adalah $6$.

2. Diketahui persamaan kuadrat $2x^2 + 4x - 6 = 0$ memiliki akar-akar $\alpha$ dan $\beta$. Hitunglah nilai dari operasi kuadrat $\alpha^2 + \beta^2$!

> [!success]- Klik untuk Lihat Jawaban 2
> Diketahui komponen nilai $a = 2, b = 4, c = -6$. 
> * **Langkah 1:** Cari nilai penjumlahan dasar dan perkalian dasar akarnya:
>   $$\alpha + \beta = -\frac{b}{a} = -\frac{4}{2} = -2$$
>   $$\alpha \cdot \beta = \frac{c}{a} = \frac{-6}{2} = -3$$
> * **Langkah 2:** Masukkan nilai ke dalam rumus manipulasi jumlah kuadrat:
>   $$
>   \begin{aligned}
>   \alpha^2 + \beta^2 &= (\alpha + \beta)^2 - 2\alpha\beta \\
>   &= (-2)^2 - 2(-3) \\
>   &= 4 + 6 \\
>   &= 10
>   \end{aligned}
>   $$
>   Jadi, nilai dari operasi aljabar $\alpha^2 + \beta^2$ adalah $10$.

---

## Konsep Terkait

- [[Persamaan dan Pertidaksamaan Kuadrat/03 - Rumus Kuadratik (Rumus ABC) dan Analisis Diskriminan]]
- [[Persamaan dan Pertidaksamaan Kuadrat/05 - Menyusun Persamaan Kuadrat Baru]]