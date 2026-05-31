---
title:
---
# Sifat-Sifat Teorema Limit

Untuk mempermudah perhitungan operasi limit tanpa harus membuat tabel pendekatan atau grafik setiap saat, kita menggunakan teorema limit. Misalkan $\lim_{x \to c} f(x) = L$, $\lim_{x \to c} g(x) = M$, serta $k$ adalah suatu konstanta, maka berlaku ==**sifat-sifat dasar aljabar limit**== berikut:

* $\lim_{x \to c} k = k$
* $\lim_{x \to c} x = c$
* $\lim_{x \to c} [k \times f(x)] = k \times \lim_{x \to c} f(x)$
* $\lim_{x \to c} [f(x) \pm g(x)] = \lim_{x \to c} f(x) \pm \lim_{x \to c} g(x)$
* $\lim_{x \to c} [f(x) \times g(x)] = \lim_{x \to c} f(x) \times \lim_{x \to c} g(x)$
* $\lim_{x \to c} \left[ \frac{f(x)}{g(x)} \right] = \frac{\lim_{x \to c} f(x)}{\lim_{x \to c} g(x)}$ (dengan syarat $\lim_{x \to c} g(x) \neq 0$)
* $\lim_{x \to c} [f(x)]^n = \left[ \lim_{x \to c} f(x) \right]^n$
* $\lim_{x \to c} \sqrt[n]{f(x)} = \sqrt[n]{\lim_{x \to c} f(x)}$ (dengan syarat $\lim_{x \to c} f(x) > 0$ jika $n$ genap)

---
## Contoh Soal
Jika diketahui $\lim_{x \to 3} f(x) = 4$ dan $\lim_{x \to 3} g(x) = -2$, tentukan nilai dari:
$$
\lim_{x \to 3} [f^2(x) - 3g(x)]
$$

> [!success]- Klik untuk Lihat Jawaban
> Berdasarkan teorema limit, kita bisa memecah operasi penjumlahan, pangkat, dan perkalian konstanta sebagai berikut:
> $$
> \begin{aligned} \lim_{x \to 3} [f^2(x) - 3g(x)] &= \left(\lim_{x \to 3} f(x)\right)^2 - 3 \times \left(\lim_{x \to 3} g(x)\right) \\ &= (4)^2 - 3 \times (-2) \\ &= 16 - (-6) \\ &= 16 + 6 \\ &= 22 \end{aligned}
> $$
> Jadi, nilai dari limit fungsi tersebut adalah 22.

---

## Konsep Terkait

- [[Limit/01 - Definisi Intuitif dan Eksistensi Limit]]
- [[Limit/03 - Menghitung Limit Fungsi Aljabar Bentuk Tertentu dan Tak Tentu]]