---
title:
---
# Pengantar Ekspansi Binomial Newton

Ekspansi Binomial Newton adalah sebuah metode aljabar yang digunakan untuk ==**Penjabaran bentuk perpangkatan dari penjumlahan dua suku dua (binomial)**==, seperti $(a + b)^n$, tanpa harus mengalikan kurungnya satu per satu secara manual yang memakan waktu lama.

Hubungan antara kombinasi dan ekspansi binomial terletak pada koefisien setiap suku hasil penjabaran. Koefisien-koefisien tersebut nilai eksaknya sama persis dengan barisan angka pada Segitiga Pascal, yang mana dapat dicari secara matematis menggunakan **Rumus Kombinasi**.

Formulasi Teorema Binomial Newton adalah:
$$
(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k
$$
Di mana $\binom{n}{k}$ atau $_nC_k$ bertindak sebagai koefisien binomial suku ke-$(k+1)$. Sifat penjabarannya adalah pangkat dari variabel $a$ akan bergerak ==**menurun**== ($n \rightarrow 0$), sedangkan pangkat dari variabel $b$ akan bergerak ==**naik**== ($0 \rightarrow n$).

---
## Contoh Soal
Jabarkanlah bentuk aljabar binomial $(x + y)^3$ secara utuh menggunakan konsep koefisien kombinasi Binomial Newton!

> [!success]- Klik untuk Lihat Jawaban
> Nilai pangkat tertinggi ($n$) = 3. Maka, nilai batas bawah kombinasi ($k$) akan berjalan dari 0, 1, 2, hingga 3. Mari kita jabarkan tiap sukunya secara berurutan:
> 
> $$
> (x + y)^3 = \binom{3}{0}x^3y^0 + \binom{3}{1}x^2y^1 + \binom{3}{2}x^1y^2 + \binom{3}{3}x^0y^3
> $$
> 
> Sekarang, kita hitung nilai koefisien kombinasi masing-masing suku:
> * $\binom{3}{0} = _3C_0 = 1$
> * $\binom{3}{1} = _3C_1 = 3$
> * $\binom{3}{2} = _3C_2 = 3$
> * $\binom{3}{3} = _3C_3 = 1$
> 
> Substitusikan nilai koefisien tersebut kembali ke dalam persamaan panjang (ingat bahwa $y^0 = 1$ dan $x^0 = 1$):
> $$
> \begin{aligned}
> (x + y)^3 &= (1 \cdot x^3 \cdot 1) + (3 \cdot x^2 \cdot y^1) + (3 \cdot x^1 \cdot y^2) + (1 \cdot 1 \cdot y^3) \\
> &= x^3 + 3x^2y + 3xy^2 + y^3
> \end{aligned}
> $$
> Hasil penjabaran di atas terbukti selaras dengan pola koefisien dasar Segitiga Pascal baris ketiga ($1, 3, 3, 1$).

---

## Konsep Terkait

- [[Kombinatorika dan Teori Peluang Lanjutan/02 - Notasi Faktorial]]
- [[Kombinatorika dan Teori Peluang Lanjutan/06 - Konsep Kombinasi dan Perbedaannya dengan Permutasi]]
- [[Kombinatorika dan Teori Peluang Lanjutan/09 - Ruang Sampel Raksasa dan Peluang Kejadian Tunggal]]