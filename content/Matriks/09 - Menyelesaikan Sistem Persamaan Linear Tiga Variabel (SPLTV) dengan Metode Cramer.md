---
title:
---
# Menyelesaikan Sistem Persamaan Linear Tiga Variabel (SPLTV) dengan Metode Cramer

Metode Cramer atau aturan determinan adalah salah satu teknik penyelesaian persamaan linear multidimensi dengan ==**memanfaatkan perbandingan nilai determinan matriks.**== Metode ini sangat terstruktur untuk menyelesaikan SPLTV.

Langkah penyelesaian Aturan Cramer:
1. Susun matriks koefisien utama, lalu hitung determinannya ($D$) menggunakan Metode Sarrus.
2. Hitung $D_x$ (determinan di mana kolom variabel $x$ diganti oleh kolom konstanta hasil).
3. Hitung $D_y$ (determinan di mana kolom variabel $y$ diganti oleh kolom konstanta hasil).
4. Hitung $D_z$ (determinan di mana kolom variabel $z$ diganti oleh kolom konstanta hasil).

Nilai masing-masing variabel dicari lewat rumus:
$$
x = \frac{D_x}{D}, \quad y = \frac{D_y}{D}, \quad z = \frac{D_z}{D}
$$

---
## Contoh Soal
Pada suatu sistem persamaan SPLTV diperoleh nilai determinan utama $D = 4$, determinan variabel $D_x = 8$, dan $D_y = -12$. Tentukan nilai dari variabel $x$ dan $y$!

> [!success]- Klik untuk Lihat Jawaban
> Berdasarkan aturan rumusan Metode Cramer, kita dapat langsung membagi nilai determinan spesifik dengan determinan utamanya:
> * **Mencari nilai $x$:**
>   $$x = \frac{D_x}{D} = \frac{8}{4} = 2$$
> * **Mencari nilai $y$:**
>   $$y = \frac{D_y}{D} = \frac{-12}{4} = -3$$
> 
> Jadi, nilai variabel $x = 2$ dan nilai variabel $y = -3$.

---

## Konsep Terkait

- [[Matriks/05 - Determinan Matriks Ordo 2x2 dan 3x3]]
- [[Matriks/08 - Menyelesaikan Sistem Persamaan Linear Dua Variabel (SPLDV) dengan Matriks]]