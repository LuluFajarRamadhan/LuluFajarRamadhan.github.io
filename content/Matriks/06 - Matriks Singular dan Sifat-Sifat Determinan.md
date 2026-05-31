---
title:
---
# Matriks Singular dan Sifat-Sifat Determinan

Pemahaman karakteristik determinan mempermudah penyelesaian operasi matriks kompleks tanpa harus menjabarkan seluruh elemennya secara manual.

### 1. Matriks Singular
Matriks singular adalah matriks persegi yang ==**nilai determinannya sama dengan nol ($\det(A) = 0$).**== Karena nilainya nol, matriks singular bersifat unik yaitu **tidak memiliki matriks invers**. Kebalikan dari matriks singular disebut matriks nonsingular ($\det(A) \neq 0$).

### 2. Sifat-Sifat Determinan Matriks
Jika $A$ dan $B$ adalah matriks persegi berordo sama, berlaku sifat-sifat determinan berikut:
* $\det(A^T) = \det(A)$
* $\det(A^{-1}) = \frac{1}{\det(A)}$
* $\det(A \times B) = \det(A) \times \det(B)$
* $\det(A^n) = (\det(A))^n$
* $\det(k \times A_{n \times n}) = k^n \times \det(A)$ *(di mana $k$ adalah skalar dan $n$ adalah ordo matriks)*

---
## Contoh Soal
Diketahui matriks $A = \begin{bmatrix} x & 6 \\ 3 & 9 \end{bmatrix}$ adalah matriks singular. Tentukan nilai $x$ yang memenuhi!

> [!success]- Klik untuk Lihat Jawaban
> Berdasarkan definisi, matriks singular memiliki nilai determinan sama dengan nol ($\det(A) = 0$):
> $$
> \begin{aligned} \det(A) &= 0 \\ (x \times 9) - (6 \times 3) &= 0 \\ 9x - 18 &= 0 \\ 9x &= 18 \\ x &= \frac{18}{9} = 2 \end{aligned}
> $$
> Jadi, nilai $x$ agar matriks $A$ menjadi matriks singular adalah 2.

---

## Konsep Terkait

- [[Matriks/05 - Determinan Matriks Ordo 2x2 dan 3x3]]
- [[Matriks/07 - Invers Matriks Ordo 2x2 dan Sifat-Sifat Invers]]