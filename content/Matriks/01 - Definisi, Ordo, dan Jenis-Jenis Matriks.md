---
title:
---
# Definisi, Ordo, dan Jenis-Jenis Matriks

Matriks adalah susunan bilangan-bilangan yang diatur dalam baris dan kolom. Susunan ini berbentuk persegi atau persegi panjang dan ==**ditulis di dalam tanda kurung $(\dots)$ atau kurung siku $[\dots]$.**== 

Secara umum, sebuah matriks dinyatakan dengan huruf kapital (misal $A, B, C$), sedangkan elemen-elemen di dalamnya dinyatakan dengan huruf kecil berindeks ($a_{ij}$), yang berarti elemen tersebut terletak pada **baris ke-$i$** dan **kolom ke-$j$**.

### 1. Ordo Matriks
Ordo atau ukuran matriks ditentukan oleh banyaknya baris ($m$) dan banyaknya kolom ($n$). Jika matriks $A$ memiliki $m$ baris dan $n$ kolom, maka ordo matriks tersebut ditulis:
$$
A_{m \times n}
$$

### 2. Jenis-Jenis Matriks Berdasarkan Ukuran dan Elemen
* **Matriks Baris:** Matriks yang hanya terdiri dari satu baris (ordo $1 \times n$).
* **Matriks Kolom:** Matriks yang hanya terdiri dari satu kolom (ordo $m \times 1$).
* **Matriks Persegi:** Matriks yang jumlah barisnya sama dengan jumlah kolom ($m = n$). Pada matriks ini terdapat istilah **diagonal utama** dan **diagonal sekunder**.
* **Matriks Nol ($O$):** Matriks yang seluruh elemennya bernilai 0.
* **Matriks Diagonal ($D$):** Matriks persegi yang seluruh elemen di luar diagonal utamanya adalah 0.
* **Matriks Identitas ($I$):** Matriks persegi yang elemen pada diagonal utamanya bernilai 1, sedangkan elemen lainnya bernilai 0.

---
## Contoh Soal
Diketahui matriks $A$ sebagai berikut:
$$
A = \begin{bmatrix} 2 & -1 & 4 \\ 5 & 0 & 7 \end{bmatrix}
$$
Tentukan ordo dari matriks $A$ serta nilai dari elemen $a_{21} + a_{13}$!

> [!success]- Klik untuk Lihat Jawaban
> * **Menentukan Ordo:** Jika kita perhatikan matriks $A$, susunan horizontal (baris) berjumlah 2 dan susunan vertikal (kolom) berjumlah 3. Maka, ordo matriks $A$ adalah $2 \times 3$.
> * **Mencari Elemen Matriks:**
>   - $a_{21}$ adalah elemen pada baris ke-2, kolom ke-1 $\rightarrow a_{21} = 5$
>   - $a_{13}$ adalah elemen pada baris ke-1, kolom ke-3 $\rightarrow a_{13} = 4$
> 
> Lakukan operasi penjumlahan:
> $$
> \begin{aligned} a_{21} + a_{13} &= 5 + 4 \\ &= 9 \end{aligned}
> $$
> Jadi, ordo matriks $A$ adalah $2 \times 3$ dan nilai dari $a_{21} + a_{13}$ adalah 9.

---

## Konsep Terkait

- [[Matriks/00 - Peta Konsep Matriks]]
- [[Matriks/02 - Kesamaan Dua Matriks dan Transpose Matriks]]