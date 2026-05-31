---
title:
---
# Ringkasan Matriks

Bab matriks berfokus pada pengorganisasian data numerik berbentuk baris dan kolom untuk mempermudah perhitungan aljabar linier terstruktur. Berikut adalah rangkuman poin penting pembentuk bab ini:

### 1. Aturan Operasi Hitung Matriks
* **Penjumlahan/Pengurangan:** Hanya bisa dilakukan jika ==**ordo matriks sama**== dengan mengoperasikan elemen yang seletak.
* **Perkalian Antarmatriks:** Menggunakan prinsip ==**"Baris dikali Kolom"**==. Syaratnya adalah jumlah kolom matriks pertama harus sama dengan jumlah baris matriks kedua ($A_{m \times n} \times B_{n \times p} = C_{m \times p}$). Umumnya tidak berlaku sifat komutatif ($AB \neq BA$).
* **Transpose ($A^T$):** Operasi penukaran baris menjadi kolom.

### 2. Sifat Determinan dan Invers Kunci
* Matriks yang memiliki nilai $\det(A) = 0$ disebut **Matriks Singular** dan matriks ini tidak memiliki invers.
* Rumus dasar Invers Ordo $2 \times 2$:
$$
A^{-1} = \frac{1}{\det(A)} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}
$$
* Operasi pembalikan invers pada perkalian membalik urutan susunan matriks: $(A \times B)^{-1} = B^{-1} \times A^{-1}$.

### 3. Aplikasi Sistem Persamaan Linear
Matriks mempermudah pencarian himpunan penyelesaian persamaan linear banyak variabel melalui dua metode utama: metode persamaan invers matriks ($X = A^{-1}B$) untuk SPLDV serta Metode Cramer memanfaatkan perbandingan nilai determinan ($x = \frac{D_x}{D}$) untuk SPLTV.

---
## Contoh Soal Campuran
Diketahui matriks $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ dan $B = \begin{bmatrix} 2 & 0 \\ 1 & 3 \end{bmatrix}$. Tentukan nilai determinan dari matriks hasil perkalian $A \times B$!

> [!success]- Klik untuk Lihat Jawaban
> Dibandingkan mengalikan matriks $A$ dan $B$ terlebih dahulu baru mencari determinannya, akan jauh lebih cepat jika kita menggunakan sifat determinan yaitu $\det(A \times B) = \det(A) \times \det(B)$:
> * **Hitung $\det(A)$:**
>   $$\det(A) = (1 \times 4) - (2 \times 3) = 4 - 6 = -2$$
> * **Hitung $\det(B)$:**
>   $$\det(B) = (2 \times 3) - (0 \times 1) = 6 - 0 = 6$$
> 
> Kalikan kedua nilai determinan tersebut sesuai sifatnya:
> $$
> \begin{aligned} \det(A \times B) &= \det(A) \times \det(B) \\ &= -2 \times 6 \\ &= -12 \end{aligned}
> $$
> Jadi, nilai determinan dari hasil perkalian matriks $A \times B$ adalah $-12$.

---

## Konsep Terkait

- [[Matriks/00 - Peta Konsep Matriks]]
- [[Matriks/04 - Operasi Perkalian Skalar dan Perkalian Antarmatriks]]
- [[Matriks/06 - Matriks Singular dan Sifat-Sifat Determinan]]