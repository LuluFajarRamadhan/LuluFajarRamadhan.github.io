---
title:
---
# Menghitung Limit Fungsi Trigonometri

Untuk menghitung limit fungsi trigonometri yang menghasilkan bentuk tak tentu $\frac{0}{0}$ dan melibatkan fungsi cosinus, kita ==**tidak bisa langsung menggunakan sifat dasar sinus/tangen.**== Kita harus mengubah bentuk cosinus tersebut terlebih dahulu menggunakan identitas trigonometri.

Beberapa identitas trigonometri yang paling sering digunakan untuk memunculkan fungsi sinus/tangen adalah:
1. **Rumus Sudut Rangkap Cosinus:** $\cos 2x = 1 - 2\sin^2 x$, yang dapat diubah menjadi:
   $$1 - \cos 2x = 2\sin^2 x$$
2. **Ubah ke Bentuk Setengah Sudut:** Jika bentuknya $1 - \cos ax$, maka ubah menjadi:
   $$1 - \cos ax = 2\sin^2\left(\frac{a}{2}x\right)$$

---
## Contoh Soal
Tentukan nilai dari limit fungsi trigonometri berikut:
$$
\lim_{x \to 0} \frac{1 - \cos 4x}{x \tan 3x}
$$

> [!success]- Klik untuk Lihat Jawaban
> Substitusi langsung menghasilkan bentuk $\frac{1 - \cos 0}{0} = \frac{0}{0}$. Kita ubah pembilang menggunakan identitas $1 - \cos 4x = 2\sin^2 2x$:
> $$
> \begin{aligned} \lim_{x \to 0} \frac{1 - \cos 4x}{x \tan 3x} &= \lim_{x \to 0} \frac{2\sin^2 2x}{x \tan 3x} \\ &= \lim_{x \to 0} \frac{2 \times \sin 2x \times \sin 2x}{x \times \tan 3x} \end{aligned}
> $$
> Pecah limit menjadi perkalian dua buah pecahan sesuai sifat limit matematika:
> $$
> \begin{aligned} &= 2 \times \left( \lim_{x \to 0} \frac{\sin 2x}{x} \right) \times \left( \lim_{x \to 0} \frac{\sin 2x}{\tan 3x} \right) \\ &= 2 \times \left(\frac{2}{1}\right) \times \left(\frac{2}{3}\right) \\ &= \frac{8}{3} \end{aligned}
> $$
> Jadi, nilai dari limit fungsi trigonometri tersebut adalah $\frac{8}{3}$.

---

## Konsep Terkait

- [[Trigonometri/02 - Perbandingan Trigonometri Segitiga Siku-Siku]]
- [[Trigonometri/06 - Identitas Trigonometri Dasar]]
- [[Limit/05 - Definisi dan Sifat Limit Fungsi Trigonometri]]
- [[Limit/08 - Limit Fungsi Trigonometri Menuju Tak Hingga]]