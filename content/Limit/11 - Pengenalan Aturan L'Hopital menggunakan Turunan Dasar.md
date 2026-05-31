---
title:
---
# Pengenalan Aturan L'Hopital menggunakan Turunan Dasar

Aturan L'Hopital adalah sebuah teorema tingkat lanjut dalam kalkulus yang menyediakan ==**metode alternatif untuk menyelesaikan bentuk tak tentu $\frac{0}{0}$ atau $\frac{\infty}{\infty}$.**== 

Teorema ini menyatakan bahwa jika substitusi langsung menghasilkan nilai tak tentu, maka nilai limit fungsi tersebut akan sama dengan nilai limit dari pembagian hasil turunan pertama masing-masing pembilang dan penyebutnya:
$$
\lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)}
$$
*Penting: Aturan ini hanya boleh digunakan jika dan hanya jika hasil uji substitusi awal terbukti menghasilkan bentuk tak tentu ($\frac{0}{0}$ atau $\frac{\infty}{\infty}$).*

---
## Contoh Soal
Hitunglah nilai limit berikut menggunakan bantuan aturan L'Hopital:
$$
\lim_{x \to 3} \frac{x^2 - 9}{2x - 6}
$$

> [!success]- Klik untuk Lihat Jawaban
> Pertama, uji substitusi langsung terlebih dahulu: $\frac{3^2 - 9}{2(3) - 6} = \frac{0}{0}$ (Memenuhi syarat L'Hopital).
> 
> Sekarang, turunkan fungsi pembilang dan fungsi penyebut secara terpisah:
> * Turunan dari pembilang $f(x) = x^2 - 9 \rightarrow f'(x) = 2x$
> * Turunan dari penyebut $g(x) = 2x - 6 \rightarrow g'(x) = 2$
> 
> Masukkan hasil turunan tersebut kembali ke dalam operasi limit:
> $$
> \begin{aligned} \lim_{x \to 3} \frac{x^2 - 9}{2x - 6} &= \lim_{x \to 3} \frac{2x}{2} \\ &= \lim_{x \to 3} x \end{aligned}
> $$
> Lakukan substitusi nilai $x = 3$ ke fungsi sisa:
> $$
> \begin{aligned} \lim_{x \to 3} x = 3 \end{aligned}
> $$
> Jadi, nilai akhir dari limit aljabar tersebut adalah 3.

---

## Konsep Terkait

- [[Limit/03 - Menghitung Limit Fungsi Aljabar Bentuk Tertentu dan Tak Tentu]]
- [[Limit/Ringkasan Limit Fungsi]]