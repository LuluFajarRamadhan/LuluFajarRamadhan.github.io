---
title: Ringkasan Eksponen dan Logaritma
---
# Ringkasan Eksponen dan Logaritma

Bab ini membahas hubungan invers antara operasi eksponen (pangkatan berulang) dan logaritma (pencarian nilai pangkat). Berikut adalah rangkuman poin-poin krusial yang wajib dikuasai:

### 1. Sifat Utama Eksponen & Logaritma
| Eksponen (Sifat Dasar) | Logaritma (Invers Sifat) |
| :--- | :--- |
| $a^m \times a^n = a^{m+n}$ | $^a\log b + ^a\log c = ^a\log (b \times c)$ |
| $\frac{a^m}{a^n} = a^{m-n}$ | $^a\log b - ^a\log c = ^a\log \left(\frac{b}{c}\right)$ |
| $(a^m)^n = a^{m \times n}$ | $^a\log b^n = n \times ^a\log b$ |

### 2. Aturan Kunci Persamaan & Pertidaksamaan
* **Persamaan:** Inti penyelesaiannya adalah wajib ==**menyamakan basis kedua ruas**== agar nilai fungsi pangkat atau numerus bisa langsung dibandingkan.
* **Pertidaksamaan:** Perhatikan nilai basis ($a$). Jika basis berbentuk pecahan ($0 < a < 1$), maka saat membandingkan fungsi pangkat/numerus, **arah tanda pertidaksamaan harus dibalik!**
* **Syarat Mutlak Logaritma:** Setiap hasil variabel $x$ pada persamaan/pertidaksamaan logaritma wajib lolos uji syarat numerus, yaitu ==**numerus harus bernilai positif **==($>0$).

### 3. Aplikasi Nyata
Eksponen diaplikasikan dalam pemodelan **Pertumbuhan** (bakteri, bunga majemuk kontinu) dan **Peluruhan** (waktu paruh zat radioaktif). Sementara logaritma diaplikasikan untuk mereduksi data besar menjadi skala terukur seperti **Skala Richter** (gempa bumi), **Desibel** (kebisingan), dan **pH** (keasaman larutan).

---
## Contoh Soal Campuran
Tentukan nilai $x$ yang memenuhi persamaan gabungan eksponen-logaritma berikut:
$$
^x\log 16 = 4
$$

> [!success]- Klik untuk Lihat Jawaban
> Berdasarkan definisi dasar logaritma, jika $^a\log b = c \iff a^c = b$, maka kita bisa mengubah persamaan di atas menjadi bentuk eksponen:
> $$
> \begin{aligned} ^x\log 16 &= 4 \\ x^4 &= 16 \end{aligned}
> $$
> Samakan nilai pangkat pada kedua ruas agar nilainya setara:
> $$
> \begin{aligned} x^4 &= 2^4 \\ x &= 2 \end{aligned}
> $$
> Karena basis logaritma harus memenuhi syarat $a > 0$ dan $a \neq 1$, nilai $x = 2$ jelas memenuhi syarat tersebut.
> 
> Jadi, nilai $x$ dari persamaan tersebut adalah 2.

---

## Konsep Terkait

- [[Eksponen dan Logaritma/00 - Peta Konsep Eksponen dan Logaritma]]
- [[Eksponen dan Logaritma/01 - Definisi dan Sifat-Sifat Eksponen]]
- [[Eksponen dan Logaritma/05 - Definisi dan Sifat-Sifat Logaritma]]