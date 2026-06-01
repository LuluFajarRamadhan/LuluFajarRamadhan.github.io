---
title:
---
# Menyelesaikan Pertidaksamaan Kuadrat Bentuk Khusus

Tidak semua pertidaksamaan kuadrat memiliki dua titik pembuat nol bulat yang rapi. Terdapat kasus-kasus khusus di mana ekspresi kuadratik memiliki diskriminan nol ($D = 0$) atau tidak memiliki akar real sama sekali ($D < 0$). Pemahaman kasus ini mencegah kita terjebak dalam generalisasi garis bilangan konvensional.

## 1. Kasus Akar Kembar ($D = 0$)
Jika persamaan kuadratnya berbentuk kuadrat sempurna, maka grafik hanya menyentuh satu titik kritikal saja. Garis bilangan tidak akan berselang-seling tanda ($+ - +$), melainkan memiliki tanda yang sama di kedua sisi titik kritis (misal: $+ \circ +$).

* Untuk pertidaksamaan $(x - d)^2 > 0$, solusinya adalah ==**semua bilangan real kecuali $x = d$**==.
* Untuk pertidaksamaan $(x - d)^2 \le 0$, solusinya hanyalah ==**satu nilai tunggal, yaitu $x = d$**==.

## 2. Kasus Tanpa Akar Real / Kondisi Definit ($D < 0$)
Jika nilai diskriminan $D < 0$, maka ekspresi aljabar tersebut tidak memiliki pembuat nol. Garis bilangan akan bermuatan homogen (semuanya positif atau semuanya negatif).

1. **Definit Positif ($a > 0, D < 0$):** Ekspresi kuadratik dipastikan ==**selalu bernilai positif**== untuk nilai $x$ berapa pun.
   * Jika soal meminta $ax^2 + bx + c > 0$, maka solusinya: **Seluruh Bilangan Real ($x \in \mathbb{R}$)**.
   * Jika soal meminta $ax^2 + bx + c < 0$, maka solusinya: **Tidak Ada Solusi / Himpunan Kosong ($\emptyset$)**.
2. **Definit Negatif ($a < 0, D < 0$):** Ekspresi kuadratik dipastikan ==**selalu bernilai negatif**== untuk nilai $x$ berapa pun.

---
## Contoh Soal

1. Tentukan himpunan penyelesaian dari pertidaksamaan kuadrat $x^2 - 4x + 4 > 0$!

> [!success]- Klik untuk Lihat Jawaban 1
> Mari kita cari titik pembuat nol dari pertidaksamaan khusus ini:
> * Faktorkan persamaan kuadratnya:
> $$
> \begin{aligned}
> x^2 - 4x + 4 &= 0 \\
> (x - 2)(x - 2) &= 0 \\
> (x - 2)^2 &= 0 \\
> x &= 2 \quad \text{(Akar Kembar)}
> \end{aligned}
> $$
> * Jika kita uji titik $x = 0$ (sisi kiri): $0^2 - 4(0) + 4 = +4$ (Positif). Jika kita uji titik $x = 3$ (sisi kanan): $3^2 - 4(3) + 4 = 9 - 12 + 4 = +1$ (Positif).
> * Garis bilangan menunjukkan area kiri dan kanan bernilai positif ($+ \circ +$). Karena tanda soal meminta $> 0$ (positif) dengan bulatan kosong, maka seluruh wilayah memenuhi kecuali tepat di titik $x = 2$ (karena di $x=2$ nilainya adalah $0$, bukan $>0$).
> Jadi, Himpunan Penyelesaiannya adalah $HP = \{x \mid x \neq 2, x \in \mathbb{R}\}$.

2. Carilah solusi dari pertidaksamaan kuadrat $x^2 + 2x + 5 < 0$!

> [!success]- Klik untuk Lihat Jawaban 2
> Lakukan analisis komponen diskriminan terlebih dahulu untuk melihat sifat akarnya ($a = 1, b = 2, c = 5$):
> $$
> \begin{aligned}
> D &= b^2 - 4ac \\
> D &= (2)^2 - 4(1)(5) \\
> D &= 4 - 20 = -16
> \end{aligned}
> $$
> Karena didapatkan nilai $D < 0$ dan nilai koefisien $a = 1$ ($a > 0$), maka ekspresi aljabar ini diklasifikasikan sebagai **Definit Positif**. Artinya, nilai $x^2 + 2x + 5$ akan selalu menghasilkan angka positif untuk substitusi $x$ berapa pun.
> * Karena nilai fungsi selalu positif, maka pernyataan fungsi bernilai $< 0$ (negatif) adalah **mustahil/salah**.
> Jadi, pertidaksamaan tersebut **tidak memiliki nilai $x$ yang memenuhi** (Himpunan Kosong / $\emptyset$).

---

## Konsep Terkait

- [[Persamaan dan Pertidaksamaan Kuadrat/03 - Rumus Kuadratik (Rumus ABC) dan Analisis Diskriminan]]
- [[Persamaan dan Pertidaksamaan Kuadrat/07 - Metode Interval dan Garis Bilangan untuk Pertidaksamaan]]