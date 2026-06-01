---
title:
---
# Metode Penyelesaian Persamaan Kuadrat (Faktorisasi dan Kuadrat Sempurna)

Untuk menemukan akar-akar dari sebuah persamaan kuadrat, terdapat beberapa strategi aljabar yang dapat digunakan. Dua metode mendasar yang mengandalkan kepekaan manipulasi angka secara universal adalah metode Faktorisasi dan metode Melengkapkan Kuadrat Sempurna.

## 1. Metode Faktorisasi (Pemfaktoran Bentuk Umum)
Metode ini bekerja dengan cara menguraikan penjumlahan suku trinomial $ax^2 + bx + c = 0$ menjadi bentuk perkalian dua faktor linear. Agar dapat diterapkan pada semua nilai $a$, kita menggunakan metode pemecahan suku tengah yang dirumuskan sebagai berikut:

$$
ax^2 + bx + c = \frac{1}{a}(ax + p)(ax + q) = 0
$$

Dengan mencari dua buah bilangan bulat pembantu ($p$ dan $q$) yang wajib memenuhi dua syarat simultan:
* Jika dikalikan, hasilnya sama dengan perkalian koefisien ujung:
$$
p \times q = a \times c
$$
* Jika dijumlahkan, hasilnya sama dengan koefisien linear tengah:
$$
p + q = b
$$

Setelah nilai $p$ dan $q$ ditemukan, kita gunakan **Sifat Produk Nol** untuk menentukan akar-akarnya. Jika $A \times B = 0$, maka kemungkinan solusinya adalah $A = 0$ atau $B = 0$. Maka, akar-akar diperoleh dari:
$$
ax + p = 0 \rightarrow x_1 = -\frac{p}{a}
$$
$$
ax + q = 0 \rightarrow x_2 = -\frac{q}{a}
$$

## 2. Metode Melengkapkan Kuadrat Sempurna (Bentuk Umum)
Metode ini sangat diandalkan apabila bentuk persamaan kuadrat sulit difaktorkan menggunakan bilangan bulat. Prinsip utamanya adalah memanipulasi struktur aljabar agar salah satu ruas berubah wujud menjadi bentuk kuadrat sempurna, yaitu:
$$
(x + d)^2 = e
$$

Berikut adalah langkah operasional sistematis untuk mengubah bentuk umum $ax^2 + bx + c = 0$ menjadi bentuk kuadrat sempurna:

1. **Bagi seluruh ruas** dengan koefisien $a$ agar suku kuadratik memiliki koefisien utama sama dengan satu ($x^2$):
$$
x^2 + \frac{b}{a}x + \frac{c}{a} = 0
$$
2. Pindahkan konstanta ke ruas kanan:
$$
x^2 + \frac{b}{a}x = -\frac{c}{a}
$$
3. Tambahkan kedua ruas dengan ==**kuadrat dari setengah koefisien linear**== yang baru, yaitu $\left(\frac{b}{2a}\right)^2$:
$$
x^2 + \frac{b}{a}x + \left(\frac{b}{2a}\right)^2 = -\frac{c}{a} + \left(\frac{b}{2a}\right)^2
$$
4. Padatkan ruas kiri menjadi bentuk kuadrat sempurna tunggal, lalu lakukan penarikan akar kuadrat di kedua ruas (sertakan tanda $\pm$):
$$
\left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}
$$

---
## Contoh Soal

1. Carilah akar-akar dari persamaan kuadrat $3x^2 + 5x - 2 = 0$ menggunakan metode faktorisasi umum!

> [!success]- Klik untuk Lihat Jawaban 1
> Identifikasi nilai koefisien: $a = 3, b = 5, c = -2$.
> * Cari bilangan $p$ dan $q$ dengan syarat: $p \times q = 3 \times (-2) = -6$ dan $p + q = 5$. Bilangan yang memenuhi adalah $6$ dan $-1$.
> * Masukkan ke rumus faktorisasi umum:
> $$
> \begin{aligned}
> \frac{1}{3}(3x + 6)(3x - 1) &= 0 \\
> (x + 2)(3x - 1) &= 0
> \end{aligned}
> $$
> * Cari akar-akarnya menggunakan sifat produk nol:
> $$
> \begin{aligned}
> x + 2 = 0 \quad &\text{atau} \quad 3x - 1 = 0 \\
> x_1 = -2 \quad &\text{atau} \quad x_2 = \frac{1}{3}
> \end{aligned}
> $$
> Jadi, akar-akar dari persamaan kuadrat tersebut adalah $x_1 = -2$ atau $x_2 = \frac{1}{3}$.

2. Selesaikan persamaan kuadrat $2x^2 + 8x + 2 = 0$ dengan menggunakan metode melengkapkan kuadrat sempurna bentuk umum!

> [!success]- Klik untuk Lihat Jawaban 2
> Mari lakukan manipulasi aljabar secara sistematis:
> * **Langkah 1:** Bagi seluruh persamaan dengan $a = 2$ agar koefisien depan $x^2$ menjadi 1:
> $$
> x^2 + 4x + 1 = 0
> $$
> * **Langkah 2:** Pindahkan konstanta ke ruas kanan:
> $$
> x^2 + 4x = -1
> $$
> * **Langkah 3:** Tambahkan kedua ruas dengan kuadrat dari setengah nilai $b$ baru, yaitu $\left(\frac{4}{2}\right)^2 = 2^2 = 4$:
> $$
> \begin{aligned}
> x^2 + 4x + 4 &= -1 + 4 \\
> (x + 2)^2 &= 3
> \end{aligned}
> $$
> * **Langkah 4:** Tarik akar kuadrat di kedua ruas:
> $$
> \begin{aligned}
> x + 2 &= \pm\sqrt{3} \\
> x &= -2 \pm \sqrt{3}
> \end{aligned}
> $$
> Jadi, diperoleh akar-akarnya adalah $x_1 = -2 + \sqrt{3}$ atau $x_2 = -2 - \sqrt{3}$.

---

## Konsep Terkait

- [[Persamaan dan Pertidaksamaan Kuadrat/01 - Definisi dan Akar-Akar Persamaan Kuadrat]]
- [[Persamaan dan Pertidaksamaan Kuadrat/03 - Rumus Kuadratik (Rumus ABC) dan Analisis Diskriminan]]