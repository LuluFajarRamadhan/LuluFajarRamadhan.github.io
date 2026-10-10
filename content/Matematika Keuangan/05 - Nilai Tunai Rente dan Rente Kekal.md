---
title:
---
# Nilai Tunai Rente dan Rente Kekal

Jika Nilai Akhir ($NA$) digunakan untuk menghitung modal akumulasi di masa depan (*Future Value*), maka **Nilai Tunai ($NT$)** digunakan untuk menghitung harga modal saat ini (*Present Value*) dari serangkaian pembayaran berkala. Selain itu, terdapat **Rente Kekal**, yaitu pembayaran berkala yang berlangsung tanpa batas waktu.

### 1. Nilai Tunai Rente Pra-Numerando ($NT$)

Nilai tunai rente pra-numerando adalah jumlah seluruh nilai saat ini dari modal yang dibayarkan atau diterima **di awal setiap periode** selama $n$ periode.

* **Rumus Nilai Tunai ($NT$):**

  $$
  NT = \frac{M \cdot (1 + i) \cdot \left(1 - (1 + i)^{-n}\right)}{i}
  $$

Keterangan:
- $M$ = Besar setoran/penerimaan berkala
- $i$ = Suku bunga per periode (dalam desimal)
- $n$ = Jumlah periode/frekuensi pembayaran

---

### 2. Nilai Tunai Rente Post-Numerando ($NT$)

Nilai tunai rente post-numerando adalah jumlah seluruh nilai saat ini dari modal yang dibayarkan atau diterima **di akhir setiap periode** selama $n$ periode.

* **Rumus Nilai Tunai ($NT$):**

  $$
  NT = \frac{M \cdot \left(1 - (1 + i)^{-n}\right)}{i}
  $$

> [!important] Hubungan Nilai Tunai Pra dan Post Numerando
> Sama seperti pada Nilai Akhir, berlaku hubungan:
> 
> $$
> NT_{\text{pra}} = NT_{\text{post}} \times (1 + i)
> $$

---

### 3. Nilai Tunai Rente Kekal

==**Rente kekal adalah rente yang jangka waktu pembayarannya tidak terbatas ($n \to \infty$).**==

Rente kekal biasa diterapkan pada perhitungan modal beasiswa abadi, dana pensiun seumur hidup, atau deviden saham preferen.

#### A. Rente Kekal Pra-Numerando

Pembayaran dilakukan di **awal** setiap periode secara terus-menerus:

$$
NT = \frac{M}{i} + M = \frac{M \cdot (1 + i)}{i}
$$

#### B. Rente Kekal Post-Numerando

Pembayaran dilakukan di **akhir** setiap periode secara terus-menerus:

$$
NT = \frac{M}{i}
$$

> [!note] Karakteristik Rente Kekal
> Karena $n \to \infty$, bentuk $(1+i)^{-n}$ mendekati nilai $0$, sehingga rumusnya menjadi sangat sederhana tanpa melibatkan variabel $n$.

---

## Contoh Soal

### Contoh Soal 1

Seseorang akan menerima modal sebesar $\text{Rp}1.000.000,00$ di awal setiap tahun selama $4$ tahun berturut-turut. Jika suku bunga majemuk yang berlaku adalah $10\%$ per tahun, tentukan nilai tunai ($NT$) penerimaan tersebut!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - Penerimaan di awal tahun $\rightarrow$ Pra-Numerando
> - $M = \text{Rp}1.000.000,00$
> - $i = 10\% = 0{,}10$
> - $n = 4 \text{ tahun}$
>
> **Menghitung $NT$ Pra-Numerando:**
> 
> $$
> \begin{aligned}
> NT &= \frac{M \cdot (1 + i) \cdot \left(1 - (1 + i)^{-n}\right)}{i} \\
> &= \frac{1.000.000 \cdot (1{,}10) \cdot \left(1 - (1{,}10)^{-4}\right)}{0{,}10} \\
> &= \frac{1.100.000 \cdot (1 - 0{,}683013)}{0{,}10} \\
> &= \frac{1.100.000 \cdot 0{,}316987}{0{,}10} \\
> &= 11.000.000 \cdot 0{,}316987 \\
> &= 3.486.857
> \end{aligned}
> $$
>
> Jadi, nilai tunai penerimaan tersebut adalah $\boxed{\text{Rp}3.486.857,00}$.

### Contoh Soal 2

Setiap akhir bulan, sebuah panti asuhan menerima bantuan modal sebesar $\text{Rp}2.000.000,00$ selama $1$ tahun ($12$ bulan). Berapakah nilai tunai bantuan tersebut jika dibayarkan sekaligus di awal dengan bunga majemuk $1\%$ per bulan?

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - Bantuan di akhir bulan $\rightarrow$ Post-Numerando
> - $M = \text{Rp}2.000.000,00$
> - $i = 1\% = 0{,}01 \text{ per bulan}$
> - $n = 12 \text{ bulan}$
>
> **Menghitung $NT$ Post-Numerando:**
> 
> $$
> \begin{aligned}
> NT &= \frac{M \cdot \left(1 - (1 + i)^{-n}\right)}{i} \\
> &= \frac{2.000.000 \cdot \left(1 - (1{,}01)^{-12}\right)}{0{,}01} \\
> &= \frac{2.000.000 \cdot (1 - 0{,}887449)}{0{,}01} \\
> &= \frac{2.000.000 \cdot 0{,}112551}{0{,}01} \\
> &= 200.000.000 \cdot 0{,}112551 \\
> &= 22.510.200
> \end{aligned}
> $$
>
> Jadi, nilai tunai jika dibayarkan sekaligus adalah $\boxed{\text{Rp}22.510.200,00}$.

### Contoh Soal 3

Yayasan Pendidikan ingin memberikan beasiswa sebesar $\text{Rp}6.000.000,00$ di akhir setiap tahun untuk waktu yang tidak terbatas. Jika suku bunga majemuk bank stabil di angka $8\%$ per tahun, berapa modal abadi ($NT$) yang harus disimpan yayasan di bank tersebut?

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - Penerimaan tanpa batas waktu di akhir tahun $\rightarrow$ Rente Kekal Post-Numerando
> - $M = \text{Rp}6.000.000,00$
> - $i = 8\% = 0{,}08$
>
> **Menghitung $NT$ Rente Kekal Post-Numerando:**
> 
> $$
> \begin{aligned}
> NT &= \frac{M}{i} \\
> &= \frac{6.000.000}{0{,}08} \\
> &= 75.000.000
> \end{aligned}
> $$
>
> Jadi, modal abadi yang harus disimpan adalah $\boxed{\text{Rp}75.000.000,00}$.

### Contoh Soal 4

Seorang dermawan menyumbangkan dana abadi agar tempat ibadah menerima santunan sebesar $\text{Rp}3.000.000,00$ pada setiap awal bulan secara terus-menerus. Jika bunga majemuk bank $0{,}5\%$ per bulan, berapa besar dana abadi yang harus disetorkan dermawan tersebut?

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - Penerimaan di awal bulan terus-menerus $\rightarrow$ Rente Kekal Pra-Numerando
> - $M = \text{Rp}3.000.000,00$
> - $i = 0{,}5\% = 0{,}005$
>
> **Menghitung $NT$ Rente Kekal Pra-Numerando:**
> 
> $$
> \begin{aligned}
> NT &= \frac{M \cdot (1 + i)}{i} \\
> &= \frac{3.000.000 \cdot (1 + 0{,}005)}{0{,}005} \\
> &= \frac{3.000.000 \cdot 1{,}005}{0{,}005} \\
> &= 600.000.000 \cdot 1{,}005 \\
> &= 603.000.000
> \end{aligned}
> $$
>
> Jadi, besar dana abadi yang disetorkan adalah $\boxed{\text{Rp}603.000.000,00}$.

### Contoh Soal 5

Diketahui nilai tunai rente post-numerando selama $5$ tahun dengan bunga $6\%$ per tahun adalah $\text{Rp}12.637.000,00$. Berapakah nilai tunainya jika skema pembayarannya dilakukan secara **pra-numerando**?

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $NT_{\text{post}} = \text{Rp}12.637.000,00$
> - $i = 6\% = 0{,}06$
>
> **Menggunakan Hubungan Nilai Tunai:**
> 
> $$
> \begin{aligned}
> NT_{\text{pra}} &= NT_{\text{post}} \times (1 + i) \\
> &= 12.637.000 \times (1 + 0{,}06) \\
> &= 12.637.000 \times 1{,}06 \\
> &= 13.395.220
> \end{aligned}
> $$
>
> Jadi, nilai tunai rente pra-numerando adalah $\boxed{\text{Rp}13.395.220,00}$.

### Contoh Soal 6

Suatu perusahaan menyewa gedung selama $3$ tahun dengan biaya sewa $\text{Rp}20.000.000,00$ yang harus dibayar setiap awal tahun. Pemilik gedung menawarkan opsi pembayaran tunai sekaligus di awal tahun pertama dengan diskon bunga majemuk $5\%$ per tahun. Berapa total harga sewa tunai yang harus dibayar perusahaan?

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - Pembayaran berkala di awal tahun $\rightarrow$ Rente Pra-Numerando
> - $M = \text{Rp}20.000.000,00$
> - $i = 5\% = 0{,}05$
> - $n = 3 \text{ tahun}$
>
> **Menghitung $NT$ Pra-Numerando:**
> 
> $$
> \begin{aligned}
> NT &= \frac{20.000.000 \cdot 1{,}05 \cdot \left(1 - (1{,}05)^{-3}\right)}{0{,}05} \\
> &= \frac{21.000.000 \cdot (1 - 0{,}863838)}{0{,}05} \\
> &= \frac{21.000.000 \cdot 0{,}136162}{0{,}05} \\
> &= 420.000.000 \cdot 0{,}136162 \\
> &= 57.188.040
> \end{aligned}
> $$
>
> Jadi, harga sewa tunai yang harus dibayar adalah $\boxed{\text{Rp}57.188.040,00}$.

### Contoh Soal 7

Seseorang ingin membeli polis asuransi yang memberikan tunjangan pensiun sebesar $\text{Rp}4.000.000,00$ di setiap akhir bulan selama $10$ tahun ($120$ bulan). Jika suku bunga majemuk yang dijamin adalah $0{,}5\%$ per bulan, berapa modal tunai yang harus dibayarkan saat membeli polis tersebut?

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M = \text{Rp}4.000.000,00$
> - $i = 0{,}5\% = 0{,}005$
> - $n = 120 \text{ bulan}$
>
> **Menghitung $NT$ Post-Numerando:**
> 
> $$
> \begin{aligned}
> NT &= \frac{4.000.000 \cdot \left(1 - (1{,}005)^{-120}\right)}{0{,}005} \\
> &= \frac{4.000.000 \cdot (1 - 0{,}549633)}{0{,}005} \\
> &= \frac{4.000.000 \cdot 0{,}450367}{0{,}005} \\
> &= 800.000.000 \cdot 0{,}450367 \\
> &= 360.293.600
> \end{aligned}
> $$
>
> Jadi, modal tunai yang harus dibayarkan adalah $\boxed{\text{Rp}360.293.600,00}$.

### Contoh Soal 8

Dana pensiun sebesar $\text{Rp}500.000.000,00$ disimpan di bank dengan bunga majemuk $6\%$ per tahun. Dana tersebut akan diambil dalam jumlah yang sama setiap akhir tahun secara terus-menerus tanpa menguras pokok dana awal. Berapakah besar penerimaan tahunan yang dapat diambil?

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $NT = \text{Rp}500.000.000,00$
> - $i = 6\% = 0{,}06$
> - Skema Rente Kekal Post-Numerando
>
> **Mencari Besar Penerimaan ($M$):**
> 
> $$
> \begin{aligned}
> NT &= \frac{M}{i} \\
> 500.000.000 &= \frac{M}{0{,}06} \\
> M &= 500.000.000 \times 0{,}06 \\
> M &= 30.000.000
> \end{aligned}
> $$
>
> Jadi, penerimaan tahunan yang dapat diambil secara kontinyu adalah $\boxed{\text{Rp}30.000.000,00}$.

### Contoh Soal 9

Seseorang ditawari dua pilihan penerimaan harta warisan:
- **Pilihan A:** Menerima $\text{Rp}15.000.000,00$ setiap akhir tahun selama $10$ tahun.
- **Pilihan B:** Menerima $\text{Rp}9.000.000,00$ setiap akhir tahun secara terus-menerus (selamanya).

Jika suku bunga majemuk yang berlaku konsisten sebesar $5\%$ per tahun, pilihan manakah yang secara finansial bernilai tunai ($NT$) lebih menguntungkan saat ini?

> [!success]- Klik untuk Lihat Jawaban
> **1. Menghitung $NT$ Pilihan A (Rente Post-Numerando, $n=10, i=5\%$):**
> 
> $$
> \begin{aligned}
> NT_A &= \frac{15.000.000 \cdot \left(1 - (1{,}05)^{-10}\right)}{0{,}05} \\
> &= \frac{15.000.000 \cdot (1 - 0{,}613913)}{0{,}05} \\
> &= \frac{15.000.000 \cdot 0{,}386087}{0{,}05} \\
> &= 300.000.000 \cdot 0{,}386087 \\
> &= 115.826.100
> \end{aligned}
> $$
>
> **2. Menghitung $NT$ Pilihan B (Rente Kekal Post-Numerando, $i=5\%$):**
> 
> $$
> \begin{aligned}
> NT_B &= \frac{9.000.000}{0{,}05} \\
> &= 180.000.000
> \end{aligned}
> $$
>
> **3. Analisis:**
> - $NT_A = \text{Rp}115.826.100,00$
> - $NT_B = \text{Rp}180.000.000,00$
>
> Jadi, **Pilihan B** jauh lebih menguntungkan karena memiliki Nilai Tunai saat ini yang lebih tinggi dengan selisih $\boxed{\text{Rp}64.173.900,00}$.

### Contoh Soal 10

Suatu yayasan menerima dana abadi berupa Rente Kekal Pra-Numerando sebesar $\text{Rp}12.000.000,00$ per tahun dengan suku bunga $6\%$ per tahun. Setelah berjalan $5$ tahun, tingkat suku bunga bank turun menjadi $4\%$ per tahun. Berapakah perubahan Nilai Tunai ($NT$) dana abadi tersebut setelah penurunan suku bunga?

> [!success]- Klik untuk Lihat Jawaban
> **1. Menghitung $NT$ Awal pada Suku Bunga $6\%$:**
> 
> $$
> NT_{\text{awal}} = \frac{12.000.000 \cdot (1 + 0{,}06)}{0{,}06} = \frac{12.720.000}{0{,}06} = 212.000.000
> $$
>
> **2. Menghitung $NT$ Baru pada Suku Bunga $4\%$:**
> 
> $$
> NT_{\text{baru}} = \frac{12.000.000 \cdot (1 + 0{,}04)}{0{,}04} = \frac{12.480.000}{0{,}04} = 312.000.000
> $$
>
> **3. Menghitung Perubahan $NT$:**
> 
> $$
> \Delta NT = NT_{\text{baru}} - NT_{\text{awal}} = 312.000.000 - 212.000.000 = 100.000.000
> $$
>
> Ketika suku bunga turun, nilai tunai rente kekal **meningkat** sebesar $\boxed{\text{Rp}100.000,00}$ (karena dibutuhkan modal pokok yang lebih besar untuk menghasilkan penerimaan periodik yang sama pada suku bunga yang lebih rendah).

---

## Konsep Terkait

- [[04 - Konsep Rente dan Nilai Akhir Rente]]
- [[06 - Konsep Dasar dan Nilai Anuitas]]