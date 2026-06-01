---
title:
---
# Karakteristik Titik Puncak dan Sumbu Simetri

Setiap kurva fungsi kuadrat memiliki sifat simetris yang sempurna. Garis vertikal yang membagi kurva menjadi dua bagian identik bertindak sebagai cermin pencerminan, dan titik balik tempat kurva mengubah arah pergerakannya disebut sebagai ==**Titik Puncak (Titik Ekstrem)**==.

### 1. Sumbu Simetri
Sumbu simetri adalah garis vertikal imajiner yang melewati titik puncak fungsi kuadrat. Persamaan garis untuk sumbu simetri dirumuskan oleh:
$$
x_p = -\frac{b}{2a}
$$

### 2. Nilai Optimum (Maksimum atau Minimum)
Nilai optimum ($y_p$) adalah nilai puncak tertinggi atau dasar terendah dari keluaran fungsi kuadrat. Nilai ini bergantung pada arah keterbukaan kurva:
* Jika $a > 0$, fungsi menghasilkan ==**Nilai Minimum**==.
* Jika $a < 0$, fungsi menghasilkan ==**Nilai Maksimum**==.

Formulasi matematis mencari nilai optimum menggunakan nilai Diskriminan ($D = b^2 - 4ac$) adalah:
$$
y_p = -\frac{D}{4a} \quad \text{atau} \quad y_p = -\frac{b^2 - 4ac}{4a}
$$
*Catatan: Nilai $y_p$ juga bisa didapatkan secara langsung dengan mensubstitusikan nilai sumbu simetri $x_p$ ke dalam fungsi awal, yaitu $y_p = f(x_p)$.*

### 3. Koordinat Titik Puncak
Gabungan posisi horizontal $x_p$ dan posisi vertikal $y_p$ menghasilkan koordinat absolut titik puncak fungsi kuadrat:
$$
\text{Titik Puncak} = \left( -\frac{b}{2a}, -\frac{D}{4a} \right)
$$

---
## Contoh Soal

1. Tentukan persamaan sumbu simetri dari fungsi kuadrat $f(x) = x^2 - 6x + 8$!

> [!success]- Klik untuk Lihat Jawaban 1
> Diketahui komponen fungsi adalah $a = 1, b = -6, c = 8$. Masukkan ke dalam rumus sumbu simetri:
> $$
> \begin{aligned}
> x_p &= -\frac{b}{2a} \\
> x_p &= -\frac{-6}{2(1)} \\
> x_p &= \frac{6}{2} = 3
> \end{aligned}
> $$
> Jadi, persamaan garis sumbu simetrinya adalah $x = 3$.

2. Carilah koordinat titik puncak (titik balik) beserta tentukan jenisnya dari fungsi kuadrat $f(x) = -x^2 + 4x + 5$!

> [!success]- Klik untuk Lihat Jawaban 2
> Diketahui $a = -1, b = 4, c = 5$. Karena koefisien $a < 0$, jenis titik baliknya adalah **Titik Balik Maksimum**.
> * Cari koordinat horizontal puncak ($x_p$):
> $$x_p = -\frac{4}{2(-1)} = \frac{-4}{-2} = 2$$
> * Cari koordinat vertikal puncak ($y_p$) dengan substitusi taktis $f(x_p)$:
> $$
> \begin{aligned}
> y_p = f(2) &= -(2)^2 + 4(2) + 5 \\
> &= -4 + 8 + 5 \\
> &= 9
> \end{aligned}
> $$
> Jadi, koordinat titik puncak maksimum kurva tersebut berada tepat pada koordinat $(2, 9)$.

---

## Konsep Terkait

- [[Fungsi Kuadrat/02 - Pengaruh Koefisien terhadap Bentuk Parabola]]
- [[Fungsi Kuadrat/04 - Hubungan Nilai Diskriminan dengan Grafik Fungsi]]
- [[Fungsi Kuadrat/08 - Pemodelan Masalah Nilai Maksimum dan Minimum]]