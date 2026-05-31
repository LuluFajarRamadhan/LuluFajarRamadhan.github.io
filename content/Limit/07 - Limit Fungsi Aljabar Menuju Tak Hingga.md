---
title:
---
# Limit Fungsi Aljabar Menuju Tak Hingga

Limit menuju tak hingga ($\lim_{x \to \infty}$) mempelajari perilaku nilai fungsi ketika variabel $x$ membesar tanpa batas. Hasil dari substitusi langsung biasanya menghasilkan bentuk tak tentu $\frac{\infty}{\infty}$ atau $\infty - \infty$.

Teknik cepat penyelesaian bentuk tak tentu di tak hingga meliputi:
1. **Bentuk Pecahan Polinomial ($\frac{\infty}{\infty}$):**
   Cukup perhatikan ==**pangkat tertinggi pembilang ($m$) dan penyebut ($n$)**== dari fungsi $f(x) = \frac{a_x^m + \dots}{b_x^n + \dots}$:
   * Jika $m > n$, maka hasilnya = $\infty$
   * Jika $m < n$, maka hasilnya = $0$
   * Jika $m = n$, maka hasilnya = $\frac{a}{b}$ (rasio koefisien pangkat tertinggi)

2. **Bentuk Selisih Akar Kuadrat ($\infty - \infty$):**
   Untuk fungsi $\lim_{x \to \infty} \left(\sqrt{ax^2 + bx + c} - \sqrt{px^2 + qx + r}\right)$, jika nilai $a = p$, berlaku rumus cepat:
   $$
   \text{Hasil} = \frac{b - q}{2\sqrt{a}}
   $$

---
## Contoh Soal
Hitunglah nilai dari limit menuju tak hingga berikut:
$$
\lim_{x \to \infty} \frac{4x^3 - 2x + 1}{2x^3 + 5x^2}
$$

> [!success]- Klik untuk Lihat Jawaban
> Perhatikan pangkat tertinggi pada pembilang dan penyebut fungsi tersebut:
> * Pangkat tertinggi pembilang ($m$) adalah 3, dengan koefisien $a = 4$.
> * Pangkat tertinggi penyebut ($n$) adalah 3, dengan koefisien $b = 2$.
> 
> Karena derajat pangkat tertinggi pembilang sama dengan penyebut ($m = n = 3$), nilai limitnya cukup diambil dari pembagian koefisien pangkat tertinggi tersebut:
> $$
> \begin{aligned} \lim_{x \to \infty} \frac{4x^3 - 2x + 1}{2x^3 + 5x^2} &= \frac{4}{2} \\ &= 2 \end{aligned}
> $$
> Jadi, nilai limit menuju tak hingga dari fungsi tersebut adalah 2.

---

## Konsep Terkait

- [[Limit/03 - Menghitung Limit Fungsi Aljabar Bentuk Tertentu dan Tak Tentu]]
- [[Limit/08 - Limit Fungsi Trigonometri Menuju Tak Hingga]]