---
title:
---
# Limit Fungsi Trigonometri Menuju Tak Hingga

Menyelesaikan limit fungsi trigonometri menuju tak hingga ($\lim_{x \to \infty}$) memiliki karakteristik yang berbeda dengan limit nol. Kita tidak bisa langsung menggunakan sifat dasar $\frac{\sin x}{x} = 1$ karena nilai variabelnya menuju $\infty$, bukan $0$. Langkah wajibnya adalah ==**melakukan permisalan variabel baru (substitusi).**==

Teknik umum penyelesaiannya adalah memisalkan variabel baru:
$$
y = \frac{1}{x}
$$
Ketika nilai $x \to \infty$ (semakin membesar tanpa batas), maka nilai $y \to \frac{1}{\infty}$ yang berarti nilai ==**$y$ akan mendekati $0$ ($y \to 0$).**== Dengan substitusi ini, bentuk limit tak hingga akan berubah menjadi bentuk limit trigonometri standar di titik nol.

---
## Contoh Soal
Tentukan nilai dari limit fungsi trigonometri tak hingga berikut:
$$
\lim_{x \to \infty} x \tan\left(\frac{3}{x}\right)
$$

> [!success]- Klik untuk Lihat Jawaban
> Lakukan permisalan untuk mengubah limit tak hingga menjadi limit mendekati nol:
> * Misalkan $y = \frac{1}{x}$, sehingga $x = \frac{1}{y}$.
> * Jika $x \to \infty$, maka $y \to 0$.
> 
> Substitusikan permisalan tersebut ke dalam persamaan limit awal:
> $$
> \begin{aligned} \lim_{x \to \infty} x \tan\left(\frac{3}{x}\right) &= \lim_{y \to 0} \frac{1}{y} \times \tan(3y) \\ &= \lim_{y \to 0} \frac{\tan 3y}{y} \end{aligned}
> $$
> Berdasarkan sifat limit fungsi trigonometri standar di titik nol, kita peroleh hasilnya:
> $$
> \begin{aligned} \lim_{y \to 0} \frac{\tan 3y}{y} &= \frac{3}{1} = 3 \end{aligned}
> $$
> Jadi, nilai dari limit fungsi tersebut adalah 3.

---

## Konsep Terkait

- [[Limit/05 - Definisi dan Sifat Limit Fungsi Trigonometri]]
- [[Limit/07 - Limit Fungsi Aljabar Menuju Tak Hingga]]