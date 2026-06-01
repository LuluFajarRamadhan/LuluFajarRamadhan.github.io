---
title: Pengantar Konsep Optimasi Menggunakan Fungsi Kuadrat
---
# Pengantar Konsep Optimasi Menggunakan Fungsi Kuadrat

Subbab penutup ini berfungsi sebagai jembatan konseptual (*conceptual bridge*) yang menghubungkan aljabar tingkat menengah menuju matematika tingkat lanjut, khususnya ==**Kalkulus Diferensial**==. Konsep pencarian titik puncak pada fungsi kuadrat merupakan bentuk paling murni dan mendasar dari teori optimasi sistem.

## Hubungan Fungsi Kuadrat dengan Turunan (Kalkulus)
Pada tingkat lanjut, nilai ekstrim dari fungsi apa pun (baik pangkat 3, trigonometri, maupun eksponensial) ditemukan melalui konsep Turunan Pertama yang bernilai nol ($f'(x) = 0$).

Jika kita menerapkan prinsip turunan ini pada bentuk umum fungsi kuadrat, kita akan melihat keselarasan yang indah:
$$
\begin{aligned}
f(x) &= ax^2 + bx + c \\
f'(x) &= 2ax + b
\end{aligned}
$$
Saat kondisi stasioner terjadi ($f'(x) = 0$):
$$
\begin{aligned}
2ax + b &= 0 \\
2ax &= -b \\
x &= -\frac{b}{2a}
\end{aligned}
$$

Sains membuktikan bahwa rumus sumbu simetri $x = -\frac{b}{2a}$ yang kita gunakan sepanjang bab ini sebenarnya adalah formula instan yang diturunkan langsung dari ==**Aturan Diferensial Kalkulus**==. Penguasaan bab ini membekali kita dengan intuisi geometris yang kuat mengenai makna fisis dari laju perubahan nol pada titik balik kurva.

---
## Contoh Soal

1. Diketahui fungsi biaya total sebuah proyek dinyatakan oleh $C(x) = 3x^2 - 18x + 50$. Dengan menggunakan konsep laju perubahan (turunan) ataupun rumus fungsi kuadrat, tentukan nilai $x$ yang meminimalkan biaya tersebut!

> [!success]- Klik untuk Lihat Jawaban 1
> Mari kita selesaikan dengan mencocokkan prinsip sumbu simetri fungsi kuadrat yang selaras dengan nilai stasioner:
> * Berdasarkan fungsi $C(x) = 3x^2 - 18x + 50$, didapatkan nilai koefisien $a = 3$ dan $b = -18$.
> * Gunakan formula stasioner absolut titik puncak:
>   $$
>   \begin{aligned}
>   x_p &= -\frac{b}{2a} \\
>   x_p &= -\frac{-18}{2(3)} \\
>   x_p &= \frac{18}{6} = 3
>   \end{aligned}
>   $$
>   Jadi, nilai $x$ yang dapat meminimalkan biaya proyek tersebut adalah **$x = 3$**.

2. Buktikan secara matematis bahwa fungsi kuadrat $f(x) = -x^2 + 8x$ memiliki nilai maksimum berharga 16 dengan membandingkan nilai fungsi di sekitar titik puncaknya!

> [!success]- Klik untuk Lihat Jawaban 2
> Mari lakukan analisis pembuktian nilai ekstremum:
> * **Langkah 1:** Hitung titik puncak koordinat horizontal ($a = -1, b = 8$):
>   $$x_p = -\frac{8}{2(-1)} = 4$$
> * **Langkah 2:** Hitung nilai optimum fungsi pada $f(4)$:
>   $$f(4) = -(4)^2 + 8(4) = -16 + 32 = 16$$
> * **Langkah 3:** Uji nilai fungsi di sekitar $x = 4$ (misal ambil $x = 3$ dan $x = 5$):
>   $$f(3) = -(3)^2 + 8(3) = -9 + 24 = 15$$
>   $$f(5) = -(5)^2 + 8(5) = -25 + 40 = 15$$
>   Terbukti bahwa untuk nilai $x$ berapa pun di sekitar titik acuan, hasilnya ($15$) selalu lebih rendah daripada nilai di titik puncak ($16$). Ini mengukuhkan secara empiris bahwa koordinat $(4, 16)$ bertindak sebagai titik batas maksimum tertinggi absolut.

---

## Konsep Terkait

- [[Fungsi Kuadrat/03 - Karakteristik Titik Puncak dan Sumbu Simetri]]
- [[Fungsi Kuadrat/08 - Pemodelan Masalah Nilai Maksimum dan Minimum]]