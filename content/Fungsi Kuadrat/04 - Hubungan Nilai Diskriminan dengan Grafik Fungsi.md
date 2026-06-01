---
title:
---
# Hubungan Nilai Diskriminan dengan Grafik Fungsi

Besaran matematis yang mengukur karakteristik hubungan antara kurva fungsi kuadrat dengan garis horizontal Sumbu $X$ dinamakan ==**Diskriminan**==, yang dinotasikan dengan lambang huruf $D$. Nilai ini membedakan kuantitas dan sifat titik potong grafik.

## Formulasi Dasar Diskriminan
Nilai diskriminan dihitung menggunakan rumusan aljabar:
$$
D = b^2 - 4ac
$$

## Klasifikasi Kedudukan Grafik terhadap Sumbu $X$
Berdasarkan nilai nominal dari $D$, interaksi sebuah grafik fungsi kuadrat terbagi menjadi tiga wilayah kondisi:

| Nilai Diskriminan | Dampak Geometris pada Kurva | Ilustrasi Visual |
| :--- | :--- | :--- |
| **$D > 0$** | Memotong sumbu $X$ di ==**dua titik real yang berbeda**==. | Kurva menembus sumbu horizontal secara tegas pada dua titik koordinat $(x_1, 0)$ dan $(x_2, 0)$. |
| **$D = 0$** | Menyinggung sumbu $X$ di ==**satu titik saja**==. | Kurva hanya menyentuh tipis sumbu $X$. Titik singgung ini berhimpit tepat dengan lokasi titik puncak parabola. |
| **$D < 0$** | ==**Tidak memotong maupun menyinggung**== sumbu $X$. | Kurva berada sepenuhnya melayang di atas sumbu $X$ atau tenggelam di bawah sumbu $X$. |

## Analisis Kondisi Definit ($D < 0$)
Kondisi di mana grafik fungsi kuadrat tidak berinteraksi sama sekali dengan sumbu $X$ memunculkan sifat kekekalan nilai nominal fungsi yang disebut sebagai kondisi **Definit**:
1. **Definit Positif ($a > 0$ dan $D < 0$):** Grafik seluruhnya berada di atas sumbu $X$. Nilai fungsi $f(x)$ dipastikan ==**selalu bernilai positif**== untuk setiap substitusi bilangan real $x$.
2. **Definit Negatif ($a < 0$ dan $D < 0$):** Grafik seluruhnya berada di bawah sumbu $X$. Nilai fungsi $f(x)$ dipastikan ==**selalu bernilai negatif**== untuk setiap substitusi bilangan real $x$.

---
## Contoh Soal

1. Selidiki kedudukan grafik fungsi kuadrat $f(x) = x^2 - 4x + 4$ terhadap sumbu $X$ melalui analisis diskriminan!

> [!success]- Klik untuk Lihat Jawaban 1
> Identifikasi komponen fungsi: $a = 1, b = -4, c = 4$. Masukkan ke formula diskriminan:
> $$
> \begin{aligned}
> D &= b^2 - 4ac \\
> D &= (-4)^2 - 4(1)(4) \\
> D &= 16 - 16 = 0
> \end{aligned}
> $$
> Karena didapatkan nilai kalkulasi $D = 0$, maka karakteristik kedudukan grafik fungsi tersebut adalah **menyinggung sumbu $X$ tepat di satu titik**.

2. Jika fungsi kuadrat $f(x) = x^2 - kx + 9$ diketahui menyinggung sumbu $X$ tepat di satu titik, hitunglah nilai parameter $k$ yang memenuhi!

> [!success]- Klik untuk Lihat Jawaban 2
> Syarat grafik menyinggung sumbu $X$ tepat di satu titik adalah nilai diskriminannya wajib sama dengan nol ($D = 0$). Dari fungsi, diperoleh nilai $a = 1, b = -k, c = 9$.
> $$
> \begin{aligned}
> D &= 0 \\
> b^2 - 4ac &= 0 \\
> (-k)^2 - 4(1)(9) &= 0 \\
> k^2 - 36 &= 0 \\
> k^2 &= 36 \\
> k = 6 \quad &\text{atau} \quad k = -6
> \end{aligned}
> $$
> Jadi, nilai parameter $k$ yang memenuhi agar kurva tersebut menyinggung sumbu $X$ adalah $k = 6$ atau $k = -6$.

---

## Konsep Terkait

- [[Fungsi Kuadrat/03 - Karakteristik Titik Puncak dan Sumbu Simetri]]
- [[Fungsi Kuadrat/05 - Langkah-Langkah Menggambar Grafik Fungsi Kuadrat]]