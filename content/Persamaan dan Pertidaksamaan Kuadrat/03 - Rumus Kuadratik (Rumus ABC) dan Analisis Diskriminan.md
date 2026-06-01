---
title:
---
# Rumus Kuadratik (Rumus ABC) dan Analisis Diskriminan

Apabila sebuah persamaan kuadrat memiliki angka koefisien yang rumit atau tidak bisa diselesaikan dengan metode faktorisasi bilangan bulat, kita dapat menggunakan senjata pamungkas aljabar yang selalu berhasil menemukan akar pada kondisi apa pun, yaitu ==**Rumus Kuadratik**== (populer dengan nama Rumus ABC).

## Formulasi Rumus Kuadratik
Akar-akar dari persamaan $ax^2 + bx + c = 0$ dapat dihitung secara langsung lewat rumus:
$$
x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

## Analisis Sifat Akar Berdasarkan Diskriminan ($D$)
Komponen aljabar di dalam tanda akar pada rumus kuadratik disebut sebagai **Diskriminan ($D = b^2 - 4ac$)**. Nilai dari $D$ ini memegang kendali penuh atas watak atau jenis dari akar-akar yang akan dihasilkan:

| Nilai Diskriminan | Jenis Sifat Akar | Makna terhadap Solusi |
| :--- | :--- | :--- |
| **$D > 0$** | Dua akar ==**real dan berbeda**== | Persamaan memiliki dua solusi angka nyata yang berlainan ($x_1 \neq x_2$). |
| **$D = 0$** | Dua akar ==**real dan kembar**== | Persamaan hanya memiliki satu solusi real yang unik ($x_1 = x_2 = -\frac{b}{2a}$). |
| **$D < 0$** | Akar ==**imajiner / tidak real**== | Nilai di dalam akar bernilai negatif, sehingga tidak ada solusi angka nyata ($x \notin \mathbb{R}$). |

---
## Contoh Soal

1. Hitunglah akar-akar dari persamaan kuadrat $2x^2 - 7x + 3 = 0$ menggunakan rumus kuadratik!

> [!success]- Klik untuk Lihat Jawaban 1
> Identifikasi komponen: $a = 2, b = -7, c = 3$. Masukkan ke dalam rumus kuadratik:
> $$
> \begin{aligned}
> x_{1,2} &= \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \\
> x_{1,2} &= \frac{-(-7) \pm \sqrt{(-7)^2 - 4(2)(3)}}{2(2)} \\
> x_{1,2} &= \frac{7 \pm \sqrt{49 - 24}}{4} \\
> x_{1,2} &= \frac{7 \pm \sqrt{25}}{4} = \frac{7 \pm 5}{4}
> \end{aligned}
> $$
> Pecah menjadi dua solusi pengerjaan:
> * $$x_1 = \frac{7 + 5}{4} = \frac{12}{4} = 3$$
> * $$x_2 = \frac{7 - 5}{4} = \frac{2}{4} = \frac{1}{2}$$
> Jadi, akar-akar penyelesaiannya adalah $x_1 = 3$ atau $x_2 = \frac{1}{2}$.

2. Analisis jenis akar yang dimiliki oleh persamaan kuadrat $x^2 + 4x + 4 = 0$ tanpa mencari nilai akarnya terlebih dahulu!

> [!success]- Klik untuk Lihat Jawaban 2
> Jenis akar dikendalikan secara mutlak oleh besaran nilai Diskriminan ($D$). Diketahui $a = 1, b = 4, c = 4$.
> $$
> \begin{aligned}
> D &= b^2 - 4ac \\
> D &= (4)^2 - 4(1)(4) \\
> D &= 16 - 16 \\
> D &= 0
> \end{aligned}
> $$
> Karena diperoleh nilai kalkulasi matematika ==**$D = 0$**==, maka dapat ditarik kesimpulan bahwa persamaan kuadrat tersebut memiliki jenis **dua akar real yang kembar (sama)**.

---

## Konsep Terkait

- [[Persamaan dan Pertidaksamaan Kuadrat/02 - Metode Penyelesaian Persamaan Kuadrat (Faktorisasi dan Kuadrat Sempurna)]]
- [[Persamaan dan Pertidaksamaan Kuadrat/04 - Jumlah dan Hasil Kali Akar-Akar Persamaan Kuadrat]]