---
title:
---
# Menghitung Limit Fungsi Aljabar Bentuk Tertentu dan Tak Tentu

Langkah awal dalam menghitung nilai limit aljabar adalah melakukan **substitusi langsung** nilai $x = c$ ke dalam fungsi. Hasil substitusi ini dikelompokkan menjadi dua jenis bentuk:

1. **Bentuk Tertentu:** Jika hasilnya berupa angka real pasti (seperti $k$, $0$, atau $\frac{0}{k}$), maka nilai tersebut langsung menjadi nilai akhir limit.
2. **Bentuk Tak Tentu ($\frac{0}{0}$):** Jika hasilnya berupa $\frac{0}{0}$, artinya ada faktor pembuat nol di pembilang dan penyebut yang ==**wajib dihilangkan terlebih dahulu.**==

Teknik untuk menyelesaikan bentuk tak tentu $\frac{0}{0}$ meliputi:
* **Metode Pemfaktoran:** Digunakan jika fungsi berupa polinomial biasa yang bisa difaktorkan.
* **Metode Perkalian Sekawan:** Digunakan jika fungsi memuat bentuk akar (irasional).

---
## Contoh Soal
Tentukan nilai dari limit fungsi aljabar berikut:
$$
\lim_{x \to 2} \frac{x^2 - 4}{x^2 - 2x}
$$

> [!success]- Klik untuk Lihat Jawaban
> Jika kita lakukan substitusi langsung $x = 2$, didapat hasil $\frac{2^2 - 4}{2^2 - 2(2)} = \frac{0}{0}$ (Bentuk Tak Tentu). Maka kita harus memfaktorkan pembilang dan penyebut untuk mengeliminasi faktor $(x-2)$:
> $$
> \begin{aligned} \lim_{x \to 2} \frac{x^2 - 4}{x^2 - 2x} &= \lim_{x \to 2} \frac{(x - 2)(x + 2)}{x(x - 2)} \\ &= \lim_{x \to 2} \frac{\cancel{(x - 2)}(x + 2)}{x\cancel{(x - 2)}} \\ &= \lim_{x \to 2} \frac{x + 2}{x} \end{aligned}
> $$
> Setelah faktor pembuat nol dicoret, lakukan substitusi nilai $x = 2$:
> $$
> \begin{aligned} \frac{2 + 2}{2} &= \frac{4}{2} \\ &= 2 \end{aligned}
> $$
> Jadi, nilai akhir dari limit aljabar tersebut adalah 2.

---

## Konsep Terkait

- [[Limit/02 - Sifat-Sifat Teorema Limit]]
- [[Limit/04 - Limit Suku Tengah dan Teorema Apit]]