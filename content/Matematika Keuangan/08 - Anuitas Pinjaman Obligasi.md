---
title:
---
# Anuitas Pinjaman Obligasi

Obligasi adalah surat pengakuan utang yang diterbitkan oleh pemerintah atau perusahaan (emiten) kepada pemegang obligasi. Dalam pelunasan pinjaman obligasi secara besar-besaran, pelunasan pokok dan pembayaran bunga dapat dilakukan dengan sistem **anuitas**, di mana sejumlah lembar obligasi ditarik (dilunasi) pada setiap akhir periode.

### 1. Konsep Pelunasan Obligasi Secara Anuitas

==**Pelunasan obligasi dengan anuitas dilakukan dengan cara melunasi sejumlah lembar obligasi yang nilainya mendekati angsuran pokok teoritis.**==

Perbedaan utama antara anuitas biasa dengan anuitas obligasi terletak pada pecahan unit:
- Nilai $1$ lembar obligasi bernilai bulat ($N$).
- Banyaknya lembar obligasi yang ditarik ($k_n$) harus berupa **bilangan bulat**.
- Porsi angsuran pokok aktual ($a_n$) dihitung dari perkalian jumlah lembar yang ditarik dengan nilai nominal per lembar ($a_n = k_n \times N$).

---

### 2. Perhitungan Komponen Anuitas Obligasi

* **Bunga Periode ke-$n$ ($b_n$):**
  Bunga dihitung berdasarkan jumlah nominal seluruh obligasi yang belum ditarik/dilunasi ($S_{n-1}$):
  
  $$
  b_n = S_{n-1} \times i
  $$

* **Jumlah Lembar Obligasi yang Ditarik ($k_n$):**
  Banyaknya lembar obligasi yang ditarik pada periode ke-$n$ dihitung dengan membagi angsuran pokok teoritis dengan nilai nominal per lembar obligasi ($N$):
  
  $$
  k_n = \left\lfloor \frac{A - b_n}{N} \right\rceil
  $$

* **Angsuran Pokok Aktual ($a_n$):**
  
  $$
  a_n = k_n \times N
  $$

* **Anuitas Aktual Periode ke-$n$ ($A_n$):**
  
  $$
  A_n = a_n + b_n
  $$

Keterangan:
- $N$ = Nilai nominal per lembar obligasi
- $k_n$ = Banyaknya lembar obligasi yang ditarik pada periode ke-$n$
- $i$ = Suku bunga / kupon obligasi per periode (dalam desimal)
- $S_{n-1}$ = Total nilai nominal obligasi yang belum dilunasi awal periode ke-$n$

> [!important] Penyesuaian Jumlah Lembar Terakhir
> Pada periode terakhir ($n$), seluruh sisa lembar obligasi yang belum ditarik harus dilunasi secara penuh ($k_n = \text{sisa lembar}$).

---

### 3. Tabel Pelunasan Pinjaman Obligasi

Tabel pelunasan obligasi memuat rincian jumlah lembar yang ditarik, angsuran aktual, pembayaran bunga, dan sisa lembar obligasi yang masih beredar.

**Struktur Tabel Amortisasi Obligasi:**

| Periode ($n$) | Obligasi Beredar Awal | Bunga ($b_n$) | Lembar Ditarik ($k_n$) | Angsuran ($a_n = k_n \cdot N$) | Anuitas Aktual ($A_n$) | Sisa Obligasi Beredar |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | $K_0$ lembar | $b_1$ | $k_1$ | $a_1$ | $A_1$ | $K_1 = K_0 - k_1$ |
| 2 | $K_1$ lembar | $b_2$ | $k_2$ | $a_2$ | $A_2$ | $K_2 = K_1 - k_2$ |
| ... | ... | ... | ... | ... | ... | ... |

---

## Contoh Soal

### Contoh Soal 1

Suatu perusahaan menerbitkan $1.000$ lembar obligasi dengan nilai nominal $\text{Rp}100.000,00$ per lembar. Berapakah nilai total pinjaman obligasi tersebut ($M$)?

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - Jumlah lembar ($K_0$) = $1.000$ lembar
> - Nilai nominal per lembar ($N$) = $\text{Rp}100.000,00$
>
> **Menghitung Total Pinjaman ($M$):**
> 
> $$
> \begin{aligned}
> M &= K_0 \times N \\
> &= 1.000 \times 100.000 \\
> &= 100.000.000
> \end{aligned}
> $$
>
> Jadi, nilai total pinjaman obligasi adalah $\boxed{\text{Rp}100.000.000,00}$.

### Contoh Soal 2

Pinjaman obligasi sebesar $\text{Rp}50.000.000,00$ terdiri atas lembaran obligasi bernilai nominal $\text{Rp}50.000,00$ per lembar. Jika tingkat bunga kupon obligasi adalah $6\%$ per tahun, hitunglah bunga obligasi pada tahun pertama ($b_1$)!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M = \text{Rp}50.000.000,00$
> - $i = 6\% = 0{,}06$
>
> **Menghitung Bunga Pertama ($b_1$):**
> 
> $$
> \begin{aligned}
> b_1 &= M \times i \\
> &= 50.000.000 \times 0{,}06 \\
> &= 3.000.000
> \end{aligned}
> $$
>
> Jadi, bunga obligasi pada tahun pertama adalah $\boxed{\text{Rp}3.000.000,00}$.

### Contoh Soal 3

Suatu anuitas teoritis pelunasan obligasi dihitung sebesar $A = \text{Rp}8.500.000,00$. Pada tahun pertama, bunga yang harus dibayar adalah $b_1 = \text{Rp}3.000.000,00$. Jika nilai nominal per lembar obligasi adalah $N = \text{Rp}100.000,00$, berapakah jumlah lembar obligasi yang ditarik pada tahun pertama ($k_1$)?

> [!success]- Klik untuk Lihat Jawaban
> **1. Menghitung Angsuran Teoritis ($a_1$):**
> 
> $$
> a_1 = A - b_1 = 8.500.000 - 3.000.000 = 5.500.000
> $$
>
> **2. Menghitung Lembar Ditarik ($k_1$):**
> 
> $$
> k_1 = \frac{a_1}{N} = \frac{5.500.000}{100.000} = 55 \text{ lembar}
> $$
>
> Jadi, jumlah lembar obligasi yang ditarik adalah $\boxed{55 \text{ lembar}}$.

### Contoh Soal 4

Berdasarkan data pada Contoh Soal 3, tentukan besarnya anuitas aktual pada tahun pertama ($A_1$)!

> [!success]- Klik untuk Lihat Jawaban
> Karena angsuran teoritis ($\text{Rp}5.500.000,00$) membagi habis nominal obligasi ($\text{Rp}100.000,00$), maka angsuran aktual sama dengan angsuran teoritis:
> - $a_1 = 55 \times 100.000 = 5.500.000$
> - $b_1 = 3.000.000$
>
> $$
> A_1 = a_1 + b_1 = 5.500.000 + 3.000.000 = 8.500.000
> $$
>
> Jadi, anuitas aktual tahun pertama adalah $\boxed{\text{Rp}8.500.000,00}$.

### Contoh Soal 5

Suatu angsuran teoritis obligasi bernilai $\text{Rp}4.380.000,00$. Jika nilai nominal $1$ lembar obligasi adalah $\text{Rp}50.000,00$, berapakah lembar obligasi yang ditarik ($k_n$) dan berapa angsuran pokok aktualnya ($a_n$)?

> [!success]- Klik untuk Lihat Jawaban
> **1. Menghitung Lembar Ditarik ($k_n$):**
> 
> $$
> k_n = \left\lfloor \frac{4.380.000}{50.000} \right\rceil = \lfloor 87{,}6 \rceil = 88 \text{ lembar (dibulatkan)}
> $$
>
> **2. Menghitung Angsuran Pokok Aktual ($a_n$):**
> 
> $$
> a_n = 88 \times 50.000 = 4.400.000
> $$
>
> Jadi, obligasi yang ditarik sebanyak $\mathbf{88 \text{ lembar}}$ dengan angsuran aktual $\boxed{\text{Rp}4.400.000,00}$.

### Contoh Soal 6

Pinjaman obligasi sebesar $\text{Rp}20.000.000,00$ terbagi atas $200$ lembar obligasi @ $\text{Rp}100.000,00$. Bunga kupon $5\%$ per tahun dan dilunasi secara anuitas dalam $4$ tahun. Jika anuitas teoritisnya adalah $A = \text{Rp}5.637.975,00$, hitunglah rincian pelunasan pada tahun pertama ($b_1$, $k_1$, $a_1$, $A_1$, dan sisa lembar)!

> [!success]- Klik untuk Lihat Jawaban
> **1. Bunga Pertama ($b_1$):**
> 
> $$
> b_1 = 20.000.000 \times 5\% = 1.000.000
> $$
>
> **2. Angsuran Teoritis pertama:**
> 
> $$
> a_{1, \text{teoritis}} = 5.637.975 - 1.000.000 = 4.637.975
> $$
>
> **3. Jumlah Lembar Ditarik ($k_1$):**
> 
> $$
> k_1 = \left\lfloor \frac{4.637.975}{100.000} \right\rceil = \lfloor 46{,}38 \rceil = 46 \text{ lembar}
> $$
>
> **4. Angsuran Pokok Aktual ($a_1$) & Anuitas Aktual ($A_1$):**
> - $a_1 = 46 \times 100.000 = 4.600.000$
> - $A_1 = 4.600.000 + 1.000.000 = 5.600.000$
>
> **5. Sisa Lembar Obligasi Beredar:**
> - Sisa lembar = $200 - 46 = 154 \text{ lembar}$
>
> Jadi, ditarik $\mathbf{46 \text{ lembar}}$, $a_1 = \text{Rp}4.600.000,00$, $A_1 = \text{Rp}5.600.000,00$, dan sisa obligasi beredar adalah $\boxed{154 \text{ lembar}}$.

### Contoh Soal 7

Melanjutkan perhitungan dari Contoh Soal 6, tentukan rincian pelunasan obligasi pada tahun kedua ($b_2$, $k_2$, $a_2$, $A_2$)!

> [!success]- Klik untuk Lihat Jawaban
> **1. Bunga Kedua ($b_2$):**
> Total nilai nominal $154$ lembar beredar = $154 \times 100.000 = 15.400.000$.
> 
> $$
> b_2 = 15.400.000 \times 5\% = 770.000
> $$
>
> **2. Angsuran Teoritis kedua:**
> 
> $$
> a_{2, \text{teoritis}} = A - b_2 = 5.637.975 - 770.000 = 4.867.975
> $$
>
> **3. Jumlah Lembar Ditarik ($k_2$):**
> 
> $$
> k_2 = \left\lfloor \frac{4.867.975}{100.000} \right\rceil = \lfloor 48{,}68 \rceil = 49 \text{ lembar}
> $$
>
> **4. Angsuran Pokok Aktual ($a_2$) & Anuitas Aktual ($A_2$):**
> - $a_2 = 49 \times 100.000 = 4.900.000$
> - $A_2 = 4.900.000 + 770.000 = 5.670.000$
>
> Jadi, pada tahun kedua ditarik $\mathbf{49 \text{ lembar}}$, $a_2 = \text{Rp}4.900.000,00$, dan $A_2 = \boxed{\text{Rp}5.670.000,00}$.

### Contoh Soal 8

Suatu pinjaman obligasi sebanyak $500$ lembar @ $\text{Rp}200.000,00$ dilunasi secara anuitas dalam $3$ periode. Pada akhir periode ke-2, sisa obligasi yang belum ditarik tercatat sebanyak $160$ lembar. Jika suku bunga kupon adalah $6\%$ per periode, berapakah besarnya anuitas aktual pada periode ke-3 (terakhir)?

> [!success]- Klik untuk Lihat Jawaban
> Pada periode terakhir ($n=3$), seluruh sisa obligasi harus ditarik lunas.
>
> **1. Menghitung Lembar Ditarik Periode 3 ($k_3$):**
> - $k_3 = 160 \text{ lembar}$
> - $a_3 = 160 \times 200.000 = 32.000.000$
>
> **2. Menghitung Bunga Periode 3 ($b_3$):**
> 
> $$
> b_3 = (160 \times 200.000) \times 6\% = 32.000.000 \times 0{,}06 = 1.920.000
> $$
>
> **3. Menghitung Anuitas Aktual ($A_3$):**
> 
> $$
> A_3 = a_3 + b_3 = 32.000.000 + 1.920.000 = 33.920.000
> $$
>
> Jadi, anuitas aktual pada periode terakhir adalah $\boxed{\text{Rp}33.920.000,00}$.

### Contoh Soal 9

Buatlah tabel pelunasan anuitas obligasi lengkap untuk pinjaman obligasi senilai $\text{Rp}10.000.000,00$ yang terdiri atas $100$ lembar obligasi @ $\text{Rp}100.000,00$ dengan suku bunga $10\%$ per tahun dan dilunasi dalam $3$ tahun dengan anuitas teoritis $A = \text{Rp}4.021.148,00$!

> [!success]- Klik untuk Lihat Jawaban
> **Rincian Perhitungan per Tahun:**
> - **Tahun 1:** $b_1 = 1.000.000$. $a_{1, \text{teoritis}} = 3.021.148 \rightarrow k_1 = 30 \text{ lembar}$. $a_1 = 3.000.000$. $A_1 = 4.000.000$. Sisa = $70 \text{ lembar}$.
> - **Tahun 2:** Nominal beredar = $7.000.000$. $b_2 = 700.000$. $a_{2, \text{teoritis}} = 3.321.148 \rightarrow k_2 = 33 \text{ lembar}$. $a_2 = 3.300.000$. $A_2 = 4.000.000$. Sisa = $37 \text{ lembar}$.
> - **Tahun 3:** Sisa $37 \text{ lembar}$ ditarik semua ($k_3 = 37$). $a_3 = 3.700.000$. $b_3 = 3.700.000 \times 10\% = 370.000$. $A_3 = 4.070.000$. Sisa = $0 \text{ lembar}$.
>
> **Tabel Pelunasan Amortisasi Obligasi:**
> 
> | Periode ($n$) | Obligasi Beredar | Bunga ($10\%$) | Lembar Ditarik | Angsuran Pokok | Anuitas Aktual | Sisa Beredar |
> | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
> | 1 | $100$ lembar | $1.000.000$ | $30$ lembar | $3.000.000$ | $4.000.000$ | $70$ lembar |
> | 2 | $70$ lembar | $700.000$ | $33$ lembar | $3.300.000$ | $4.000.000$ | $37$ lembar |
> | 3 | $37$ lembar | $370.000$ | $37$ lembar | $3.700.000$ | $4.070.000$ | $0$ lembar |

### Contoh Soal 10

Suatu BUMN menerbitkan $10.000$ lembar obligasi bernilai $\text{Rp}1.000.000,00$ per lembar dengan tingkat kupon $8\%$ per tahun. Pelunasan dilakukan dengan sistem anuitas selama $5$ tahun. Jika anuitas teoritis per tahun adalah $A = \text{Rp}2.504.564.500,00$, tentukan persentase selisih antara total anuitas aktual yang dibayarkan pada tahun pertama ($A_1$) dibandingkan dengan anuitas teoritisnya!

> [!success]- Klik untuk Lihat Jawaban
> **1. Menghitung Bunga Pertama ($b_1$):**
> Total nominal = $10.000 \times 1.000.000 = 10.000.000.000$ ($\text{Rp}10 \text{ Miliar}$).
> 
> $$
> b_1 = 10.000.000.000 \times 8\% = 800.000.000
> $$
>
> **2. Menghitung Angsuran Pokok Teoritis ($a_1$):**
> 
> $$
> a_{1, \text{teoritis}} = 2.504.564.500 - 800.000.000 = 1.704.564.500
> $$
>
> **3. Menghitung Lembar Ditarik ($k_1$) & Angsuran Aktual ($a_1$):**
> 
> $$
> k_1 = \left\lfloor \frac{1.704.564.500}{1.000.000} \right\rceil = \lfloor 1.704{,}56 \rceil = 1.705 \text{ lembar}
> $$
> 
> $$
> a_1 = 1.705 \times 1.000.000 = 1.705.000.000
> $$
>
> **4. Menghitung Anuitas Aktual ($A_1$):**
> 
> $$
> A_1 = 1.705.000.000 + 800.000.000 = 2.505.000.000
> $$
>
> **5. Menghitung Persentase Selisih:**
> 
> $$
> \begin{aligned}
> \text{Selisih} &= 2.505.000.000 - 2.504.564.500 = 435.500 \\
> \text{Persentase} &= \frac{435.500}{2.504.564.500} \times 100\% \approx 0{,}0174\%
> \end{aligned}
> $$
>
> Jadi, persentase selisih antara anuitas aktual dan teoritis sangat kecil, yaitu $\boxed{0{,}0174\%}$.

---

## Konsep Terkait

- [[07 - Sisa Pinjaman dan Praktik Anuitas]]
- [[09 - Penerapan Matematika Keuangan dalam Masalah Kontekstual]]