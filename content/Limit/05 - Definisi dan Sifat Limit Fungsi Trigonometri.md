---
title:
---
# Definisi dan Sifat Limit Fungsi Trigonometri

Limit fungsi trigonometri adalah nilai yang didekati oleh fungsi trigonometri saat variabel sudutnya mendekati suatu titik tertentu. Sama seperti limit aljabar, jika substitusi langsung menghasilkan nilai real, maka itu adalah hasilnya. Namun, jika menghasilkan bentuk tak tentu $\frac{0}{0}$, kita wajib menggunakan ==**sifat limit trigonometri khusus.**==

Sifat dasar limit trigonometri di titik nol (berbasis fungsi sinus dan tangen) adalah sebagai berikut:
* $\lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{x}{\sin x} = 1$
* $\lim_{x \to 0} \frac{\tan x}{x} = \lim_{x \to 0} \frac{x}{\tan x} = 1$

Secara umum, jika variabelnya memiliki koefisien aljabar $a$ dan $b$, sifat tersebut dapat dikembangkan menjadi:
* $\lim_{x \to 0} \frac{\sin ax}{bx} = \lim_{x \to 0} \frac{ax}{\sin bx} = \frac{a}{b}$
* $\lim_{x \to 0} \frac{\tan ax}{bx} = \lim_{x \to 0} \frac{ax}{\tan bx} = \frac{a}{b}$
* $\lim_{x \to 0} \frac{\sin ax}{\tan bx} = \lim_{x \to 0} \frac{\tan ax}{\sin bx} = \frac{a}{b}$

---
## Contoh Soal
Tentukan nilai dari limit fungsi trigonometri berikut:
$$
\lim_{x \to 0} \frac{\sin 3x}{5x}
$$

> [!success]- Klik untuk Lihat Jawaban
> Berdasarkan sifat umum limit fungsi trigonometri, ketika $x \to 0$, nilai limit dari perbandingan fungsi $\sin ax$ dengan $bx$ adalah rasio dari koefisien variabelnya ($\frac{a}{b}$):
> $$
> \begin{aligned} \lim_{x \to 0} \frac{\sin 3x}{5x} &= \frac{3}{5} \end{aligned}
> $$
> Jadi, nilai akhir dari limit fungsi trigonometri tersebut adalah $\frac{3}{5}$.

---

## Konsep Terkait

- [[Limit/02 - Sifat-Sifat Teorema Limit]
- [[Limit/06 - Menghitung Limit Fungsi Trigonometri]]