---
title:
---
# Konsep Dasar dan Nilai Anuitas

Anuitas adalah sejumlah pembayaran pinjaman atau penerimaan investasi yang dilakukan dalam jumlah sama besar secara berkala pada setiap jangka waktu tertentu. Dalam sistem pelunasan pinjaman, anuitas terdiri atas dua komponen utama: **angsuran pokok** untuk mengurangi sisa hutang dan **bunga** atas sisa pinjaman.

### 1. Pengertian dan Komponen Anuitas

==**Anuitas ($A$) merupakan penjumlahan antara angsuran pokok ($a_n$) dan porsi bunga ($b_n$) pada periode ke-$n$.**==

Meskipun nilai anuitas ($A$) tetap di setiap periode, porsi angsuran pokok ($a_n$) akan selalu **meningkat** dan porsi bunga ($b_n$) akan selalu **menurun** seiring berkurangnya sisa pinjaman.

* **Rumus Dasar Anuitas:**

  $$
  A = a_n + b_n
  $$

Keterangan:
- $A$ = Nilai anuitas (tetap setiap periode)
- $a_n$ = Angsuran pokok pada periode ke-$n$
- $b_n$ = Bunga pada periode ke-$n$

---

### 2. Hubungan Antar-Angsuran Pokok

Angsuran pokok pada periode ke-$n$ ($a_n$) dapat ditentukan langsung berdasarkan angsuran pokok pertama ($a_1$) dan suku bunga ($i$).

* **Rumus Hubungan Angsuran Pokok:**

  $$
  a_n = a_1 (1 + i)^{n-1}
  $$

Hubungan ini menunjukkan bahwa porsi angsuran pokok bertumbuh secara eksponensial dengan faktor pertumbuhan $(1 + i)$.

> [!important] Bunga Periode Pertama
> Bunga pertama ($b_1$) dihitung langsung dari modal/pinjaman awal ($M$):
> 
> $$
> b_1 = M \times i
> $$
> 
> Sehingga angsuran pertama adalah $a_1 = A - b_1$.

---

### 3. Perhitungan Nilai Anuitas dari Pinjaman Awal ($M$)

Untuk menentukan besar anuitas ($A$) dari besarnya pinjaman awal ($M$), suku bunga ($i$), dan jangka waktu ($n$), digunakan rumus *Present Value of Annuity*:

* **Rumus Nilai Anuitas ($A$):**

  $$
  A = \frac{M \cdot i}{1 - (1 + i)^{-n}}
  $$

> [!note] Karakteristik Pembayaran Anuitas
> Pembayaran cicilan/anuitas perbankan (seperti KPR atau kredit kendaraan) umumnya menggunakan sistem ini agar nilai setoran nasabah konsisten dari awal hingga akhir periode.

---

## Contoh Soal

### Contoh Soal 1

Suatu pinjaman pelunasannya dilakukan dengan anuitas sebesar $\text{Rp}1.500.000,00$ per bulan. Jika bunga pada bulan pertama adalah $\text{Rp}400.000,00$, tentukan besarnya angsuran pokok pada bulan pertama!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $A = \text{Rp}1.500.000,00$
> - $b_1 = \text{Rp}400.000,00$
>
> **Mencari Angsuran Pertama ($a_1$):**
> 
> $$
> \begin{aligned}
> A &= a_1 + b_1 \\
> 1.500.000 &= a_1 + 400.000 \\
> a_1 &= 1.500.000 - 400.000 \\
> a_1 &= 1.100.000
> \end{aligned}
> $$
>
> Jadi, angsuran pokok pada bulan pertama adalah $\boxed{\text{Rp}1.100.000,00}$.

### Contoh Soal 2

Pinjaman sebesar $\text{Rp}10.000.000,00$ dilunasi dengan sistem anuitas bulanan dan suku bunga $2\%$ per bulan. Berapakah besar bunga pada bulan pertama ($b_1$)?

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M = \text{Rp}10.000.000,00$
> - $i = 2\% = 0{,}02$
>
> **Menghitung $b_1$:**
> 
> $$
> \begin{aligned}
> b_1 &= M \times i \\
> &= 10.000.000 \times 0{,}02 \\
> &= 200.000
> \end{aligned}
> $$
>
> Jadi, besar bunga pada bulan pertama adalah $\boxed{\text{Rp}200.000,00}$.

### Contoh Soal 3

Suatu anuitas memiliki angsuran pertama $a_1 = \text{Rp}500.000,00$ dengan suku bunga $3\%$ per periode. Tentukan besar angsuran pokok pada periode ke-4 ($a_4$)!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $a_1 = \text{Rp}500.000,00$
> - $i = 3\% = 0{,}03$
> - $n = 4$
>
> **Menghitung $a_4$:**
> 
> $$
> \begin{aligned}
> a_4 &= a_1(1 + i)^{4-1} \\
> &= 500.000(1 + 0{,}03)^3 \\
> &= 500.000(1{,}03)^3 \\
> &= 500.000(1{,}092727) \\
> &= 546.363{,}50
> \end{aligned}
> $$
>
> Jadi, angsuran pokok pada periode ke-4 adalah $\boxed{\text{Rp}546.363{,}50}$.

### Contoh Soal 4

Suatu pinjaman sebesar $\text{Rp}5.000.000,00$ akan dilunasi dengan $5$ anuitas tahunan dan suku bunga $10\%$ per tahun. Hitunglah besar anuitas tahunan ($A$) tersebut!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M = \text{Rp}5.000.000,00$
> - $i = 10\% = 0{,}10$
> - $n = 5$
>
> **Menghitung $A$:**
> 
> $$
> \begin{aligned}
> A &= \frac{M \cdot i}{1 - (1 + i)^{-n}} \\
> &= \frac{5.000.000 \cdot 0{,}10}{1 - (1{,}10)^{-5}} \\
> &= \frac{500.000}{1 - 0{,}620921} \\
> &= \frac{500.000}{0{,}379079} \\
> &\approx 1.318.987{,}40
> \end{aligned}
> $$
>
> Jadi, besar anuitas tahunannya adalah $\boxed{\text{Rp}1.318.987{,}40}$.

### Contoh Soal 5

Diketahui angsuran ke-2 suatu pinjaman adalah $\text{Rp}800.000,00$ dan angsuran ke-3 adalah $\text{Rp}840.000,00$. Tentukan besarnya suku bunga per periode ($i$)!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $a_2 = \text{Rp}800.000,00$
> - $a_3 = \text{Rp}840.000,00$
>
> **Hubungan $a_3$ dan $a_2$:**
> 
> $$
> \begin{aligned}
> a_3 &= a_2(1 + i) \\
> 840.000 &= 800.000(1 + i) \\
> 1 + i &= \frac{840.000}{800.000} \\
> 1 + i &= 1{,}05 \\
> i &= 0{,}05 = 5\%
> \end{aligned}
> $$
>
> Jadi, besarnya suku bunga per periode adalah $\boxed{5\%}$.

### Contoh Soal 6

Pinjaman sebesar $\text{Rp}12.000.000,00$ dilunasi dengan anuitas tahunan sebesar $\text{Rp}3.000.000,00$. Jika suku bunga $8\%$ per tahun, tentukan besar angsuran pokok pertama ($a_1$) dan bunga pertama ($b_1$)!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M = \text{Rp}12.000.000,00$
> - $A = \text{Rp}3.000.000,00$
> - $i = 8\% = 0{,}08$
>
> **1. Menghitung Bunga Pertama ($b_1$):**
> 
> $$
> b_1 = M \times i = 12.000.000 \times 0{,}08 = 960.000
> $$
>
> **2. Menghitung Angsuran Pertama ($a_1$):**
> 
> $$
> a_1 = A - b_1 = 3.000.000 - 960.000 = 2.040.000
> $$
>
> Jadi, bunga pertama adalah $\text{Rp}960.000,00$ dan angsuran pertama adalah $\boxed{\text{Rp}2.040.000,00}$.

### Contoh Soal 7

Berdasarkan data pada Contoh Soal 6 ($a_1 = \text{Rp}2.040.000,00$ dan $i = 8\%$), tentukan porsi bunga pada tahun ke-3 ($b_3$)!

> [!success]- Klik untuk Lihat Jawaban
> **1. Menghitung Angsuran ke-3 ($a_3$):**
> 
> $$
> \begin{aligned}
> a_3 &= a_1(1 + i)^{3-1} \\
> &= 2.040.000(1 + 0{,}08)^2 \\
> &= 2.040.000(1{,}08)^2 \\
> &= 2.040.000(1{,}1664) \\
> &= 2.379.456
> \end{aligned}
> $$
>
> **2. Menghitung Bunga ke-3 ($b_3$):**
> 
> $$
> b_3 = A - a_3 = 3.000.000 - 2.379.456 = 620.544
> $$
>
> Jadi, porsi bunga pada tahun ke-3 adalah $\boxed{\text{Rp}620.544,00}$.

### Contoh Soal 8

Suatu pinjaman dilunasi dengan anuitas periodik dengan suku bunga $4\%$ per periode. Jika diketahui bunga pada periode ke-2 ($b_2$) adalah $\text{Rp}360.000,00$ dan angsuran ke-2 ($a_2$) adalah $\text{Rp}640.000,00$, berapakah besar bunga pada periode ke-3 ($b_3$)?

> [!success]- Klik untuk Lihat Jawaban
> **1. Menghitung Nilai Anuitas ($A$):**
> 
> $$
> A = a_2 + b_2 = 640.000 + 360.000 = 1.000.000
> $$
>
> **2. Menghitung Angsuran ke-3 ($a_3$):**
> 
> $$
> a_3 = a_2(1 + i) = 640.000(1 + 0{,}04) = 640.000 \times 1{,}04 = 665.600
> $$
>
> **3. Menghitung Bunga ke-3 ($b_3$):**
> 
> $$
> b_3 = A - a_3 = 1.000.000 - 665.600 = 334.400
> $$
>
> Jadi, besar bunga pada periode ke-3 adalah $\boxed{\text{Rp}334.400,00}$.

### Contoh Soal 9

Pinjaman sebesar $\text{Rp}20.000.000,00$ dilunasi secara anuitas tahunan selama $10$ tahun dengan bunga $6\%$ per tahun. Tentukan selisih porsi angsuran pokok antara angsuran pertama ($a_1$) dan angsuran terakhir ($a_{10}$)!

> [!success]- Klik untuk Lihat Jawaban
> **1. Menghitung Anuitas ($A$):**
> 
> $$
> A = \frac{20.000.000 \cdot 0{,}06}{1 - (1{,}06)^{-10}} = \frac{1.200.000}{1 - 0{,}558395} = \frac{1.200.000}{0{,}441605} \approx 2.717.359{,}25
> $$
>
> **2. Menghitung Angsuran Pertama ($a_1$):**
> - $b_1 = 20.000.000 \times 0{,}06 = 1.200.000$
> - $a_1 = 2.717.359{,}25 - 1.200.000 = 1.517.359{,}25$
>
> **3. Menghitung Angsuran ke-10 ($a_{10}$):**
> 
> $$
> a_{10} = a_1(1{,}06)^9 = 1.517.359{,}25 \times 1{,}689479 \approx 2.563.547{,}69
> $$
>
> **4. Menghitung Selisih ($a_{10} - a_1$):**
> 
> $$
> \text{Selisih} = 2.563.547{,}69 - 1.517.359{,}25 = 1.046.188{,}44
> $$
>
> Jadi, selisih angsuran pokok terakhir dan pertama adalah $\boxed{\text{Rp}1.046.188{,}44}$.

### Contoh Soal 10

Suatu kredit mobil sebesar $\text{Rp}150.000.000,00$ memiliki skema anuitas bulanan selama $3$ tahun ($36$ bulan) dengan suku bunga efektif $1\%$ per bulan. Tentukan perbandingan rasio antara porsi bunga dan angsuran pokok ($\frac{b_n}{a_n}$) pada **bulan pertama ($n=1$)** dan pada **bulan ke-18 ($n=18$)**!

> [!success]- Klik untuk Lihat Jawaban
> **1. Menghitung Anuitas Bulanan ($A$):**
> 
> $$
> A = \frac{150.000.000 \cdot 0{,}01}{1 - (1{,}01)^{-36}} = \frac{1.500.000}{1 - 0{,}698925} = \frac{1.500.000}{0{,}301075} \approx 4.982.148{,}00
> $$
>
> **2. Analisis Bulan Pertama ($n=1$):**
> - $b_1 = 150.000.000 \times 0{,}01 = 1.500.000{,}00$
> - $a_1 = 4.982.148{,}00 - 1.500.000{,}00 = 3.482.148{,}00$
> - Rasio bulan ke-1:
> 
> $$
> \frac{b_1}{a_1} = \frac{1.500.000}{3.482.148} \approx 0{,}4308 \quad (43{,}08\%)
> $$
>
> **3. Analisis Bulan ke-18 ($n=18$):**
> - $a_{18} = a_1(1{,}01)^{17} = 3.482.148 \times (1{,}01)^{17} = 3.482.148 \times 1{,}184304 \approx 4.123.922{,}00$
> - $b_{18} = A - a_{18} = 4.982.148 - 4.123.922 = 858.226{,}00$
> - Rasio bulan ke-18:
> 
> $$
> \frac{b_{18}}{a_{18}} = \frac{858.226}{4.123.922} \approx 0{,}2081 \quad (20{,}81\%)
> $$
>
> Jadi, rasio bunga terhadap pokok turun dari $\mathbf{43{,}08\%}$ pada bulan pertama menjadi $\mathbf{20{,}81\%}$ pada bulan ke-18.

---

## Konsep Terkait

- [[05 - Nilai Tunai Rente dan Rente Kekal]]
- [[07 - Sisa Pinjaman dan Praktik Anuitas]]