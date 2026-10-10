---
title:
---
# Sisa Pinjaman dan Praktik Anuitas

Dalam pelaksanaan pelunasan pinjaman secara anuitas, penting untuk mengetahui besarnya sisa pinjaman pada periode tertentu. Selain itu, dalam transaksi keuangan riil, nilai anuitas yang dihitung sering kali menghasilkan angka pecahan desimal sehingga diperlukan **pembulatan anuitas** serta penyusunan **tabel pelunasan anuitas** (tabel amortisasi).

### 1. Perhitungan Sisa Pinjaman ($S_n$)

Sisa pinjaman setelah pembayaran anuitas ke-$n$ ($S_n$) adalah besarnya pokok pinjaman yang belum dilunasi. Terdapat dua metode utama untuk menghitung sisa pinjaman:

#### A. Berdasarkan Bunga Periode Berikutnya

Sisa pinjaman $S_n$ merupakan pokok yang menjadi dasar perhitungan bunga pada periode ke-$(n+1)$:

$$
S_n = \frac{b_{n+1}}{i}
$$

#### B. Berdasarkan Total Angsuran yang Sudah Dibayar

Sisa pinjaman dihitung dari pinjaman awal ($M$) dikurangi jumlah seluruh angsuran pokok yang telah dibayarkan sampai periode ke-$n$:

$$
S_n = M - \sum_{k=1}^{n} a_k
$$

Dengan menggunakan rumus deret geometri untuk penjumlahan angsuran:

$$
S_n = M - \frac{a_1 \left((1 + i)^n - 1\right)}{i}
$$

Keterangan:
- $S_n$ = Sisa pinjaman setelah pembayaran ke-$n$
- $b_{n+1}$ = Bunga pada periode ke-$(n+1)$
- $a_1$ = Angsuran pokok pertama
- $i$ = Suku bunga per periode (dalam desimal)

---

### 2. Anuitas yang Dibulatkan

Dalam praktik perbankan, hasil perhitungan anuitas pecahan dibulatkan ke atas atau ke bawah ke kelipatan nilai uang tertentu (misalnya ratusan, ribuan, atau puluh ribuan terdekat) untuk memudahkan transaksi.

* **Pembulatan ke Atas ($A^+$):**
  Mengakibatkan pembayaran sedikit lebih besar dari anuitas teoritis. Kelebihan pembayaran pada periode terakhir akan menguntungkan peminjam karena pinjaman lunas lebih cepat atau ada pengembalian kelebihan.

* **Pembulatan ke Bawah ($A^-$):**
  Mengakibatkan pembayaran sedikit lebih kecil dari anuitas teoritis. Kekurangan pembayaran akan ditambahkan pada anuitas terakhir ($A_n$) agar pinjaman tepat lunas.

---

### 3. Tabel Pelunasan Anuitas (Tabel Amortisasi)

Tabel pelunasan digunakan untuk memantau perubahan porsi bunga, angsuran pokok, dan sisa pinjaman pada setiap periode secara rinci.

**Struktur Tabel Amortisasi:**

| Periode ($n$) | Pinjaman Awal ($S_{n-1}$) | Anuitas ($A$) | Bunga ($b_n = S_{n-1} \times i$) | Angsuran ($a_n = A - b_n$) | Sisa Pinjaman ($S_n = S_{n-1} - a_n$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | $M$ | $A$ | $b_1$ | $a_1$ | $S_1$ |
| 2 | $S_1$ | $A$ | $b_2$ | $a_2$ | $S_2$ |
| ... | ... | ... | ... | ... | ... |
| $n$ | $S_{n-1}$ | $A_n$ | $b_n$ | $a_n$ | $0$ |

> [!important] Penyesuaian Anuitas Terakhir
> Jika digunakan anuitas yang dibulatkan, nilai anuitas pada periode terakhir ($A_n$) disesuaikan dengan rumus:
> 
> $$
> A_n = S_{n-1} + b_n
> $$

---

## Contoh Soal

### Contoh Soal 1

Suatu pinjaman dilunasi dengan anuitas bulanan dan suku bunga $2\%$ per bulan. Jika bunga pada bulan ke-4 adalah $\text{Rp}120.000,00$, berapakah sisa pinjaman pada akhir bulan ke-3 ($S_3$)?

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $b_4 = \text{Rp}120.000,00$
> - $i = 2\% = 0{,}02$
>
> **Menghitung $S_3$:**
> 
> $$
> \begin{aligned}
> S_3 &= \frac{b_4}{i} \\
> &= \frac{120.000}{0{,}02} \\
> &= 6.000.000
> \end{aligned}
> $$
>
> Jadi, sisa pinjaman pada akhir bulan ke-3 adalah $\boxed{\text{Rp}6.000.000,00}$.

### Contoh Soal 2

Pinjaman sebesar $\text{Rp}10.000.000,00$ dilunasi secara anuitas dengan angsuran pertama $a_1 = \text{Rp}1.800.000,00$ dan suku bunga $5\%$ per periode. Tentukan sisa pinjaman setelah pembayaran ke-2 ($S_2$)!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M = \text{Rp}10.000.000,00$
> - $a_1 = \text{Rp}1.800.000,00$
> - $i = 5\% = 0{,}05$
>
> **1. Menghitung Angsuran ke-2 ($a_2$):**
> 
> $$
> a_2 = a_1(1 + i) = 1.800.000 \times 1{,}05 = 1.890.000
> $$
>
> **2. Menghitung Total Angsuran yang Sudah Dibayar ($a_1 + a_2$):**
> 
> $$
> \sum a = 1.800.000 + 1.890.000 = 3.690.000
> $$
>
> **3. Menghitung Sisa Pinjaman ($S_2$):**
> 
> $$
> S_2 = M - (a_1 + a_2) = 10.000.000 - 3.690.000 = 6.310.000
> $$
>
> Jadi, sisa pinjaman setelah pembayaran ke-2 adalah $\boxed{\text{Rp}6.310.000,00}$.

### Contoh Soal 3

Hasil perhitungan anuitas teoritis dari suatu kredit adalah $A = \text{Rp}1.234.567,89$. Bulatkan nilai anuitas tersebut ke atas ($A^+$) dan ke bawah ($A^-$) dalam ratusan ribu rupiah terdekat!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $A = \text{Rp}1.234.567,89$
> - Pembulatan ke ratusan ribu terdekat ($100.000$)
>
> **1. Pembulatan ke Atas ($A^+$):**
> Pembulatan ke ratusan ribu di atas $1.234.567,89$ adalah $1.300.000$.
> 
> $$
> A^+ = \text{Rp}1.300.000,00
> $$
>
> **2. Pembulatan ke Bawah ($A^-$):**
> Pembulatan ke ratusan ribu di bawah $1.234.567,89$ adalah $1.200.000$.
> 
> $$
> A^- = \text{Rp}1.200.000,00
> $$
>
> Jadi, anuitas dibulatkan ke atas menjadi $\boxed{\text{Rp}1.300.000,00}$ dan ke bawah menjadi $\boxed{\text{Rp}1.200.000,00}$.

### Contoh Soal 4

Pinjaman sebesar $\text{Rp}4.000.000,00$ dilunasi dengan $4$ anuitas tahunan berdasarkan suku bunga $10\%$ per tahun. Jika anuitas dibulatkan ke atas dalam puluhan ribu terdekat, tentukan besar anuitas yang dibulatkan ($A^+$)!

> [!success]- Klik untuk Lihat Jawaban
> **1. Menghitung Anuitas Teoritis ($A$):**
> 
> $$
> A = \frac{4.000.000 \cdot 0{,}10}{1 - (1{,}10)^{-4}} = \frac{400.000}{1 - 0{,}683013} = \frac{400.000}{0{,}316987} \approx 1.261.881{,}81
> $$
>
> **2. Membulatkan ke Atas dalam Puluhan Ribu Terdekat ($10.000$):**
> Angka $1.261.881{,}81$ dibulatkan ke atas menjadi $1.270.000$.
>
> Jadi, besarnya anuitas setelah dibulatkan ke atas adalah $\boxed{\text{Rp}1.270.000,00}$.

### Contoh Soal 5

Buatlah tabel pelunasan anuitas sederhana untuk pinjaman sebesar $\text{Rp}3.000.000,00$ yang dilunasi dengan $3$ anuitas tahunan sebesar $\text{Rp}1.126.100,00$ dan suku bunga $6\%$ per tahun!

> [!success]- Klik untuk Lihat Jawaban
> **Langkah Perhitungan per Periode:**
> - **Tahun 1:** $b_1 = 3.000.000 \times 6\% = 180.000$, $a_1 = 1.126.100 - 180.000 = 946.100$, $S_1 = 3.000.000 - 946.100 = 2.053.900$
> - **Tahun 2:** $b_2 = 2.053.900 \times 6\% = 123.234$, $a_2 = 1.126.100 - 123.234 = 1.002.866$, $S_2 = 2.053.900 - 1.002.866 = 1.051.034$
> - **Tahun 3:** $b_3 = 1.051.034 \times 6\% = 63.062$, $a_3 = 1.051.034$ (pelunasan sisa), $A_3 = 1.051.034 + 63.062 = 1.114.096$, $S_3 = 0$
>
> **Tabel Pelunasan Amortisasi:**
> 
> | Periode ($n$) | Pinjaman Awal | Anuitas ($A$) | Bunga ($6\%$) | Angsuran Pokok | Sisa Pinjaman |
> | :---: | :---: | :---: | :---: | :---: | :---: |
> | 1 | $3.000.000$ | $1.126.100$ | $180.000$ | $946.100$ | $2.053.900$ |
> | 2 | $2.053.900$ | $1.126.100$ | $123.234$ | $1.002.866$ | $1.051.034$ |
> | 3 | $1.051.034$ | $1.114.096$ | $63.062$ | $1.051.034$ | $0$ |

### Contoh Soal 6

Pinjaman sebesar $\text{Rp}15.000.000,00$ dilunasi secara anuitas tahunan selama $5$ tahun dengan bunga $8\%$ per tahun. Jika anuitas teoritisnya adalah $A = \text{Rp}3.756.850,00$, tentukan sisa pinjaman pada akhir tahun ke-3 ($S_3$) menggunakan rumus deret angsuran!

> [!success]- Klik untuk Lihat Jawaban
> **1. Menghitung Bunga Pertama ($b_1$) dan Angsuran Pertama ($a_1$):**
> - $b_1 = 15.000.000 \times 0{,}08 = 1.200.000$
> - $a_1 = 3.756.850 - 1.200.000 = 2.556.850$
>
> **2. Menghitung Total Angsuran Pokok sampai Tahun ke-3 ($\sum_{k=1}^3 a_k$):**
> 
> $$
> \begin{aligned}
> \sum_{k=1}^3 a_k &= \frac{a_1\left((1 + i)^3 - 1\right)}{i} \\
> &= \frac{2.556.850 \left((1{,}08)^3 - 1\right)}{0{,}08} \\
> &= \frac{2.556.850 (1{,}259712 - 1)}{0{,}08} \\
> &= \frac{2.556.850 \times 0{,}259712}{0{,}08} \\
> &= 8.300.569{,}82
> \end{aligned}
> $$
>
> **3. Menghitung Sisa Pinjaman ($S_3$):**
> 
> $$
> S_3 = 15.000.000 - 8.300.569{,}82 = 6.699.430{,}18
> $$
>
> Jadi, sisa pinjaman setelah pembayaran ke-3 adalah $\boxed{\text{Rp}6.699.430{,}18}$.

### Contoh Soal 7

Suatu pinjaman sebesar $\text{Rp}8.000.000,00$ dilunasi dengan $4$ anuitas yang dibulatkan ke atas menjadi $A^+ = \text{Rp}2.300.000,00$ dengan bunga $5\%$ per tahun. Berapakah besar kelebihan pembayaran yang harus dikembalikan bank pada anuitas terakhir?

> [!success]- Klik untuk Lihat Jawaban
> **Perhitungan Amortisasi:**
> - **Tahun 1:** $b_1 = 8.000.000 \times 5\% = 400.000$, $a_1 = 2.300.000 - 400.000 = 1.900.000$, $S_1 = 6.100.000$
> - **Tahun 2:** $b_2 = 6.100.000 \times 5\% = 305.000$, $a_2 = 2.300.000 - 305.000 = 1.995.000$, $S_2 = 4.105.000$
> - **Tahun 3:** $b_3 = 4.105.000 \times 5\% = 205.250$, $a_3 = 2.300.000 - 205.250 = 2.094.750$, $S_3 = 2.010.250$
> - **Tahun 4:** $b_4 = 2.010.250 \times 5\% = 100.512{,}50$.
> 
> Seharusnya anuitas ke-4 adalah $A_4 = S_3 + b_4 = 2.010.250 + 100.512{,}50 = 2.110.762{,}50$.
> Karena peminjam tetap membayar $A^+ = 2.300.000$, kelebihan pembayarannya adalah:
> 
> $$
> \text{Kelebihan} = 2.300.000 - 2.110.762{,}50 = 189.237{,}50
> $$
>
> Jadi, besarnya kelebihan pembayaran adalah $\boxed{\text{Rp}189.237{,}50}$.

### Contoh Soal 8

Suatu pinjaman dilunasi dengan anuitas yang dibulatkan ke bawah menjadi $A^- = \text{Rp}1.500.000,00$. Pada awal periode terakhir, sisa pinjaman tercatat sebesar $\text{Rp}1.600.000,00$ dengan suku bunga $4\%$ per periode. Berapakah besar pembayaran anuitas terakhir ($A_n$) agar pinjaman tepat lunas?

> [!success]- Klik untuk Lihat Jawaban
> **1. Menghitung Bunga Periode Terakhir ($b_n$):**
> 
> $$
> b_n = S_{n-1} \times i = 1.600.000 \times 0{,}04 = 64.000
> $$
>
> **2. Menghitung Anuitas Terakhir ($A_n$):**
> 
> $$
> \begin{aligned}
> A_n &= S_{n-1} + b_n \\
> &= 1.600.000 + 64.000 \\
> &= 1.664.000
> \end{aligned}
> $$
>
> Jadi, pembayaran anuitas pada periode terakhir disesuaikan menjadi $\boxed{\text{Rp}1.664.000,00}$.

### Contoh Soal 9

Seseorang mengambil KPR sebesar $\text{Rp}200.000.000,00$ selama $10$ tahun ($120$ bulan) dengan bunga $1\%$ per bulan. Setelah berjalan tepat $5$ tahun ($60$ bulan), nasabah tersebut berniat melunasi seluruh sisa pinjamannya sekaligus. Jika diketahui bunga bulan ke-61 adalah $\text{Rp}1.432.000,00$, berapakah total dana pelunasan pokok yang harus dibayar nasabah pada bulan ke-60?

> [!success]- Klik untuk Lihat Jawaban
> Sisa pinjaman setelah pembayaran ke-60 ($S_{60}$) merupakan pokok awal untuk menghitung bunga bulan ke-61 ($b_{61}$):
> 
> $$
> \begin{aligned}
> S_{60} &= \frac{b_{61}}{i} \\
> &= \frac{1.432.000}{0{,}01} \\
> &= 143.200.000
> \end{aligned}
> $$
>
> Jadi, total dana pelunasan pokok sisa pinjaman pada bulan ke-60 adalah $\boxed{\text{Rp}143.200.000,00}$.

### Contoh Soal 10

Suatu pinjaman sebesar $\text{Rp}50.000.000,00$ dengan suku bunga $12\%$ per tahun ($1\%$ per bulan) dilunasi dengan anuitas bulanan sebesar $A = \text{Rp}1.200.000,00$. Tentukan sisa pinjaman setelah pembayaran bulan ke-12 ($S_{12}$) jika diketahui angsuran bulan ke-1 adalah $a_1 = \text{Rp}700.000,00$!

> [!success]- Klik untuk Lihat Jawaban
> **1. Menghitung Jumlah Seluruh Angsuran Pokok 12 Bulan Pertama ($\sum_{k=1}^{12} a_k$):**
> 
> $$
> \begin{aligned}
> \sum_{k=1}^{12} a_k &= \frac{a_1\left((1 + i)^{12} - 1\right)}{i} \\
> &= \frac{700.000 \left((1{,}01)^{12} - 1\right)}{0{,}01} \\
> &= \frac{700.000 (1{,}126825 - 1)}{0{,}01} \\
> &= \frac{700.000 \times 0{,}126825}{0{,}01} \\
> &= 70.000.000 \times 0{,}126825 \\
> &= 8.877.750
> \end{aligned}
> $$
>
> **2. Menghitung Sisa Pinjaman ($S_{12}$):**
> 
> $$
> \begin{aligned}
> S_{12} &= M - \sum_{k=1}^{12} a_k \\
> &= 50.000.000 - 8.877.750 \\
> &= 41.122.250
> \end{aligned}
> $$
>
> Jadi, sisa pinjaman setelah pembayaran bulan ke-12 adalah $\boxed{\text{Rp}41.122.250,00}$.

---

## Konsep Terkait

- [[06 - Konsep Dasar dan Nilai Anuitas]]
- [[08 - Anuitas Pinjaman Obligasi]]