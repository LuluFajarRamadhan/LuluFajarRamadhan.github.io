---
title:
---
# Peluang Kejadian Majemuk Saling Lepas dan Tidak Saling Lepas

Kejadian majemuk adalah gabungan dari dua atau lebih kejadian tunggal. Ketika dua kejadian (kita sebut kejadian $A$ dan $B$) digabungkan dengan kata hubung **"atau"** (disimbolkan dengan $\cup$), kita harus menganalisis apakah kedua kejadian tersebut memiliki titik potong irisan atau tidak.

### 1. Kejadian Saling Lepas
Dua kejadian dikatakan saling lepas jika kejadian $A$ dan $B$ ==**TIDAK DAPAT terjadi secara bersamaan.**== Artinya, tidak ada irisan anggota antara kelompok $A$ dan kelompok $B$ ($A \cap B = \emptyset$).
Formulanya adalah:
$$
P(A \cup B) = P(A) + P(B)
$$

### 2. Kejadian Tidak Saling Lepas
Dua kejadian dikatakan tidak saling lepas jika kejadian $A$ dan $B$ ==**DAPAT terjadi secara bersamaan.**== Artinya, ada anggota yang sekaligus menjadi bagian dari kelompok $A$ dan kelompok $B$ ($A \cap B \neq \emptyset$). Nilai irisan ini harus dikurangkan agar tidak terhitung dua kali.
Formulanya adalah:
$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

---
## Contoh Soal
Sebuah kartu diambil secara acak dari satu set kartu remi standar (Bridge) yang berjumlah 52 kartu. Berapakah peluang terambilnya kartu King **atau** kartu berwarna merah?

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Identifikasi Karakteristik Kejadian.**
> * Misalkan $A$ = kejadian terambil kartu King. Jumlah kartu King dalam 1 set ($n(A)$) = 4. Maka $P(A) = \frac{4}{52}$.
> * Misalkan $B$ = kejadian terambil kartu merah. Jumlah kartu merah dalam 1 set ($n(B)$) = 26. Maka $P(B) = \frac{26}{52}$.
> 
> * **Analisis Irisan:** Apakah ada kartu yang sekaligus merupakan kartu King **dan** berwarna merah? Ada, yaitu kartu King Diamond ($\diamondsuit$) dan King Heart ($\heartsuit$). Jadi, $n(A \cap B) = 2$, sehingga $P(A \cap B) = \frac{2}{52}$.
> Karena ada irisan, kasus ini menggunakan rumus **Kejadian Tidak Saling Lepas**.
> 
> **Langkah 2: Perhitungan Aljabar.**
> $$
> \begin{aligned}
> P(A \cup B) &= P(A) + P(B) - P(A \cap B) \\
> &= \frac{4}{52} + \frac{26}{52} - \frac{2}{52} \\
> &= \frac{28}{52} = \frac{7}{13}
> \end{aligned}
> $$
> Jadi, peluang terambilnya kartu King atau kartu berwarna merah adalah **$\frac{7}{13}$**.

---

## Konsep Terkait

- [[Kombinatorika dan Teori Peluang Lanjutan/09 - Ruang Sampel Raksasa dan Peluang Kejadian Tunggal]]
- [[Kombinatorika dan Teori Peluang Lanjutan/11 - Peluang Kejadian Majemuk Saling Bebas dan Tidak Saling Bebas]]