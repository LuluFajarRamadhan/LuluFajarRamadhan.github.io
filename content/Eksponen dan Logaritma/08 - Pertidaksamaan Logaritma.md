---
title:
---
# Pertidaksamaan Logaritma

Pertidaksamaan logaritma adalah pertidaksamaan yang memuat variabel pada numerus atau basisnya. Arah tanda ketaksamaan akhir dari penyelesaiannya sangat ==**ditentukan oleh nilai basis logaritma dan irisan syarat numerus.**==

Aturan dasar penentuan arah tanda ketaksamaan:
* **Untuk Basis $a > 1$ (Tanda Tetap):**
    Jika $^a\log f(x) \ge ^a\log g(x)$, maka $f(x) \ge g(x)$
* **Untuk Basis $0 < a < 1$ (Tanda Berbalik):**
    Jika $^a\log f(x) \ge ^a\log g(x)$, maka $f(x) \le g(x)$
    
*Penting: Himpunan penyelesaian akhir wajib merupakan **irisan** antara penyelesaian tanda ketaksamaan dengan syarat numerus ($f(x) > 0$ dan $g(x) > 0$).*

---
## Contoh Soal
Tentukan himpunan penyelesaian dari pertidaksamaan logaritma berikut:
$$
^3\log (2x - 5) < ^3\log (x + 1)
$$

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Penyelesaian pertidaksamaan.** Karena basisnya $a = 3$ ($a > 1$), maka arah tanda ketaksamaan tetap:
> $$
> \begin{aligned} 2x - 5 &< x + 1 \\ 2x - x &< 1 + 5 \\ x &< 6 \end{aligned}
> $$
> 
> **Langkah 2: Syarat numerus.** Kedua numerus harus bernilai positif:
> * $2x - 5 > 0 \rightarrow x > \frac{5}{2}$
> * $x + 1 > 0 \rightarrow x > -1$
> 
> **Langkah 3: Irisan area penyelesaian.** Kita mencari daerah yang memenuhi $x < 6$, $x > \frac{5}{2}$, dan $x > -1$. Dari irisan ketiga kondisi tersebut didapatkan:
> $$
> \frac{5}{2} < x < 6
> $$
> Jadi, himpunan penyelesaian dari pertidaksamaan tersebut adalah $\{x \mid \frac{5}{2} < x < 6\}$.

---

## Konsep Terkait

- [[Eksponen dan Logaritma/07 - Persamaan Logaritma]]
- [[Eksponen dan Logaritma/09 - Pemodelan Pertumbuhan dan Peluruhan Eksponensial]]