---
title:
---
# Limit Suku Tengah dan Teorema Apit

Ketika sebuah fungsi memiliki bentuk yang sangat rumit atau nilainya berosilasi (seperti fungsi trigonometri tertentu), nilai limitnya terkadang tidak bisa dicari dengan pemfaktoran biasa. Untuk mengatasinya, kita menggunakan ==**Teorema Apit (Squeeze Theorem).**==

Teorema Apit menyatakan bahwa jika fungsi $f(x)$ nilainya selalu diapit oleh fungsi $g(x)$ dan $h(x)$ di sekitar titik $c$:
$$
g(x) \le f(x) \le h(x)
$$
Dan diketahui nilai limit fungsi pengapit luar di titik $c$ memiliki nilai yang sama, yaitu:
$$
\lim_{x \to c} g(x) = \lim_{x \to c} h(x) = L
$$
Maka secara otomatis, nilai limit fungsi $f(x)$ yang berada di tengah-tengah juga ==**terapit dan bernilai sama dengan $L$:**==
$$
\lim_{x \to c} f(x) = L
$$

---
## Contoh Soal
Hitunglah nilai dari limit fungsi berikut menggunakan nilai batas fungsi sinus $-1 \le \sin \theta \le 1$:
$$
\lim_{x \to 0} x^2 \sin\left(\frac{1}{x}\right)
$$

> [!success]- Klik untuk Lihat Jawaban
> Kita tahu bahwa nilai fungsi sinus untuk sudut berapapun selalu berkisar di antara $-1$ sampai $1$:
> $$-1 \le \sin\left(\frac{1}{x}\right) \le 1$$
> Kalikan ketiga ruas ketaksamaan di atas dengan $x^2$ (karena $x^2 \ge 0$, arah tanda ketaksamaan tidak berubah):
> $$-x^2 \le x^2 \sin\left(\frac{1}{x}\right) \le x^2$$
> Sekarang, cari nilai limit untuk fungsi pengapit paling kiri dan paling kanan saat $x \to 0$:
> * $\lim_{x \to 0} (-x^2) = -(0)^2 = 0$
> * $\lim_{x \to 0} (x^2) = (0)^2 = 0$
> 
> Karena limit fungsi kiri dan kanan bernilai sama-sama 0, berdasarkan **Teorema Apit**, fungsi yang berada di tengah pasti bernilai nol:
> $$\lim_{x \to 0} x^2 \sin\left(\frac{1}{x}\right) = 0$$
> Jadi, nilai limit fungsi tersebut adalah 0.

---

## Konsep Terkait

- [[Limit/01 - Definisi Intuitif dan Eksistensi Limit]]
- [[Limit/05 - Definisi dan Sifat Limit Fungsi Trigonometri]]