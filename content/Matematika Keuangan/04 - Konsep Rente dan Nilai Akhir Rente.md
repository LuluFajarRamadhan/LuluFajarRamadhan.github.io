---
title:
---
# Konsep Rente dan Nilai Akhir Rente

Rente adalah serangkaian pembayaran atau penerimaan sejumlah uang dalam jumlah yang sama (tetap) yang dilakukan secara berkala dalam jangka waktu tertentu. Konsep rente menjadi dasar dalam perhitungan tabungan periodik, angsuran sewa, maupun premi asuransi.

### 1. Pengertian dan Klasifikasi Rente

==**Rente adalah deret modal yang dibayarkan atau diterima pada setiap interval waktu yang sama.**==

Berdasarkan saat pembayarannya, rente dibedakan menjadi dua jenis utama:

- **Rente Pra-Numerando:** Pembayaran atau penerimaan dilakukan ==**di awal setiap periode**==.
- **Rente Post-Numerando:** Pembayaran atau penerimaan dilakukan ==**di akhir setiap periode**==.

---

### 2. Nilai Akhir Rente Pra-Numerando ($NA$)

Nilai akhir rente pra-numerando adalah total akumulasi setoran berkala beserta bunganya yang dihitung **pada akhir periode ke-$n$**, di mana setoran pertama dilakukan di awal periode ke-1.

* **Rumus Nilai Akhir ($NA$):**

  $$
  NA = \frac{M \cdot (1 + i) \cdot \left((1 + i)^n - 1\right)}{i}
  $$

Keterangan:
- $M$ = Besar setoran/penerimaan berkala
- $i$ = Suku bunga per periode (dalam desimal)
- $n$ = Jumlah periode/frekuensi setoran

> [!important] Ciri Pra-Numerando
> Karena setoran dilakukan di awal periode, setoran terakhir pada periode ke-$n$ tetap mengalami pemajemukan bunga sebanyak 1 periode.

---

### 3. Nilai Akhir Rente Post-Numerando ($NA$)

Nilai akhir rente post-numerando adalah total akumulasi setoran berkala beserta bunganya yang dihitung **pada akhir periode ke-$n$**, di mana setoran pertama dilakukan di akhir periode ke-1.

* **Rumus Nilai Akhir ($NA$):**

  $$
  NA = \frac{M \cdot \left((1 + i)^n - 1\right)}{i}
  $$

> [!important] Ciri Post-Numerando
> Karena setoran dilakukan di akhir periode, setoran terakhir tepat berada di akhir periode ke-$n$ sehingga **tidak memperoleh bunga**.

---

### 4. Perbandingan Nilai Akhir Pra-Numerando dan Post-Numerando

Hubungan antara Nilai Akhir Rente Pra-Numerando ($NA_{\text{pra}}$) dan Post-Numerando ($NA_{\text{post}}$) untuk setoran ($M$), suku bunga ($i$), dan periode ($n$) yang sama adalah:

$$
NA_{\text{pra}} = NA_{\text{post}} \times (1 + i)
$$

> [!note] Kesimpulan
> Nilai akhir rente pra-numerando selalu lebih besar daripada rente post-numerando karena setiap setoran mengendap satu periode lebih lama di bank.

---

## Contoh Soal

### Contoh Soal 1

Setiap awal tahun, seseorang menabung uang di bank sebesar $\text{Rp}2.000.000,00$. Bank memberikan bunga majemuk $10\%$ per tahun. Tentukan total tabungan tersebut pada akhir tahun ke-3!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - Setoran di awal tahun $\rightarrow$ Rente Pra-Numerando
> - $M = \text{Rp}2.000.000,00$
> - $i = 10\% = 0{,}10$
> - $n = 3 \text{ tahun}$
>
> **Menghitung $NA$ Pra-Numerando:**
> 
> $$
> \begin{aligned}
> NA &= \frac{M \cdot (1 + i) \cdot \left((1 + i)^n - 1\right)}{i} \\
> &= \frac{2.000.000 \cdot (1 + 0{,}10) \cdot \left((1 + 0{,}10)^3 - 1\right)}{0{,}10} \\
> &= \frac{2.000.000 \cdot 1{,}10 \cdot (1{,}331 - 1)}{0{,}10} \\
> &= \frac{2.200.000 \cdot 0{,}331}{0{,}10} \\
> &= 22.000.000 \cdot 0{,}331 \\
> &= 7.282.000
> \end{aligned}
> $$
>
> Jadi, total tabungan pada akhir tahun ke-3 adalah $\boxed{\text{Rp}7.282.000,00}$.

### Contoh Soal 2

Setiap akhir tahun, sebuah perusahaan menyisipkan dana sebesar $\text{Rp}5.000.000,00$ ke dalam rekening cadangan yang memberikan bunga majemuk $8\%$ per tahun. Tentukan total dana cadangan pada akhir tahun ke-4!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - Setoran di akhir tahun $\rightarrow$ Rente Post-Numerando
> - $M = \text{Rp}5.000.000,00$
> - $i = 8\% = 0{,}08$
> - $n = 4 \text{ tahun}$
>
> **Menghitung $NA$ Post-Numerando:**
> 
> $$
> \begin{aligned}
> NA &= \frac{M \cdot \left((1 + i)^n - 1\right)}{i} \\
> &= \frac{5.000.000 \cdot \left((1 + 0{,}08)^4 - 1\right)}{0{,}08} \\
> &= \frac{5.000.000 \cdot (1{,}36048896 - 1)}{0{,}08} \\
> &= \frac{5.000.000 \cdot 0{,}36048896}{0{,}08} \\
> &= 22.530.560
> \end{aligned}
> $$
>
> Jadi, total dana cadangan pada akhir tahun ke-4 adalah $\boxed{\text{Rp}22.530.560,00}$.

### Contoh Soal 3

Setiap awal bulan, Ahmad menabung sebesar $\text{Rp}500.000,00$ di bank dengan suku bunga majemuk $1\%$ per bulan. Berapakah jumlah tabungan Ahmad setelah $1$ tahun ($12$ bulan)?

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - Setoran di awal bulan $\rightarrow$ Rente Pra-Numerando
> - $M = \text{Rp}500.000,00$
> - $i = 1\% = 0{,}01 \text{ per bulan}$
> - $n = 12 \text{ bulan}$
>
> **Menghitung $NA$ Pra-Numerando:**
> 
> $$
> \begin{aligned}
> NA &= \frac{500.000 \cdot (1 + 0{,}01) \cdot \left((1 + 0{,}01)^{12} - 1\right)}{0{,}01} \\
> &= \frac{500.000 \cdot 1{,}01 \cdot (1{,}126825 - 1)}{0{,}01} \\
> &= \frac{505.000 \cdot 0{,}126825}{0{,}01} \\
> &= 50.500.000 \cdot 0{,}126825 \\
> &\approx 6.404.662{,}50
> \end{aligned}
> $$
>
> Jadi, jumlah tabungan Ahmad setelah $12$ bulan adalah $\boxed{\text{Rp}6.404.662{,}50}$.

### Contoh Soal 4

Setiap akhir triwulan, Rina menyimpan dana di koperasi sebesar $\text{Rp}1.000.000,00$ dengan bunga majemuk $2\%$ per triwulan. Berapakah akumulasi dana simpanannya di akhir tahun ke-2 ($8$ triwulan)?

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - Setoran di akhir triwulan $\rightarrow$ Rente Post-Numerando
> - $M = \text{Rp}1.000.000,00$
> - $i = 2\% = 0{,}02 \text{ per triwulan}$
> - $n = 2 \times 4 = 8 \text{ triwulan}$
>
> **Menghitung $NA$ Post-Numerando:**
> 
> $$
> \begin{aligned}
> NA &= \frac{1.000.000 \cdot \left((1 + 0{,}02)^8 - 1\right)}{0{,}02} \\
> &= \frac{1.000.000 \cdot (1{,}171659 - 1)}{0{,}02} \\
> &= \frac{1.000.000 \cdot 0{,}171659}{0{,}02} \\
> &= 8.582.950
> \end{aligned}
> $$
>
> Jadi, akumulasi dana simpanan Rina adalah $\boxed{\text{Rp}8.582.950,00}$.

### Contoh Soal 5

Diketahui nilai akhir dari rente post-numerando dengan setoran $\text{Rp}3.000.000,00$ per tahun selama $5$ tahun dengan bunga $6\%$ per tahun adalah $\text{Rp}16.911.270,00$. Tentukan nilai akhir rente tersebut jika skema pembayarannya diubah menjadi **pra-numerando**!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $NA_{\text{post}} = \text{Rp}16.911.270,00$
> - $i = 6\% = 0{,}06$
>
> **Menggunakan Hubungan Pra dan Post Numerando:**
> 
> $$
> \begin{aligned}
> NA_{\text{pra}} &= NA_{\text{post}} \times (1 + i) \\
> &= 16.911.270 \times (1 + 0{,}06) \\
> &= 16.911.270 \times 1{,}06 \\
> &= 17.925.946{,}20
> \end{aligned}
> $$
>
> Jadi, nilai akhir rente jika dilakukan secara pra-numerando adalah $\boxed{\text{Rp}17.925.946{,}20}$.

### Contoh Soal 6

Orang tua Budi merencanakan dana pendidikan anak sebesar $\text{Rp}50.000.000,00$ yang harus terkumpul dalam waktu $4$ tahun. Jika mereka menabung secara pra-numerando setiap akhir/awal tahun pada instrumen dengan suku bunga majemuk $8\%$ per tahun, berapa besar setoran tahunan yang harus disiapkan jika menabung dilakukan setiap **awal tahun**?

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - Target $NA_{\text{pra}} = \text{Rp}50.000.000,00$
> - $i = 8\% = 0{,}08$
> - $n = 4 \text{ tahun}$
>
> **Mencari Besar Setoran ($M$):**
> 
> $$
> \begin{aligned}
> NA &= \frac{M \cdot (1 + i) \cdot \left((1 + i)^n - 1\right)}{i} \\
> 50.000.000 &= \frac{M \cdot (1{,}08) \cdot \left((1{,}08)^4 - 1\right)}{0{,}08} \\
> 50.000.000 &= \frac{M \cdot 1{,}08 \cdot (1{,}360489 - 1)}{0{,}08} \\
> 50.000.000 &= \frac{M \cdot 1{,}08 \cdot 0{,}360489}{0{,}08} \\
> 50.000.000 &= M \cdot 4{,}8666015 \\
> M &= \frac{50.000.000}{4{,}8666015} \\
> M &\approx 10.274.110{,}80
> \end{aligned}
> $$
>
> Jadi, besar setoran tahunan di awal tahun adalah $\boxed{\text{Rp}10.274.110{,}80}$.

### Contoh Soal 7

Seseorang menyetor dana sebesar $\text{Rp}1.500.000,00$ di akhir setiap semester. Setelah $3$ tahun ($6$ semester), total akumulasi dana di bank mencapai $\text{Rp}10.200.000,00$. Hitunglah estimasi besar bunga majemuk per semester yang diberikan oleh bank!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $NA_{\text{post}} = \text{Rp}10.200.000,00$
> - $M = \text{Rp}1.500.000,00$
> - $n = 6 \text{ semester}$
>
> **Memformulasi Persamaan:**
> 
> $$
> \begin{aligned}
> NA &= M \cdot \frac{(1 + i)^6 - 1}{i} \\
> 10.200.000 &= 1.500.000 \cdot \frac{(1 + i)^6 - 1}{i} \\
> \frac{(1 + i)^6 - 1}{i} &= \frac{10.200.000}{1.500.000} = 6{,}8
> \end{aligned}
> $$
>
> **Uji Coba Suku Bunga ($i$):**
> - Untuk $i = 4\% = 0{,}04$: $\frac{(1{,}04)^6 - 1}{0{,}04} = \frac{1{,}265319 - 1}{0{,}04} = 6{,}63$
> - Untuk $i = 5\% = 0{,}05$: $\frac{(1{,}05)^6 - 1}{0{,}05} = \frac{1{,}340096 - 1}{0{,}05} = 6{,}802$
>
> Hasil $6{,}802$ sangat mendekati nilai target $6{,}8$.
>
> Jadi, estimasi suku bunga per semester adalah $\boxed{5\%}$.

### Contoh Soal 8

Ibu Sinta menabung setiap awal bulan sebesar $\text{Rp}2.000.000,00$ selama $1$ tahun dengan bunga majemuk $0{,}5\%$ per bulan. Pada tahun kedua, ia menaikkan setorannya menjadi $\text{Rp}3.000.000,00$ setiap awal bulan dengan suku bunga tetap. Berapakah total tabungan Ibu Sinta di akhir tahun ke-2 ($24$ bulan)?

> [!success]- Klik untuk Lihat Jawaban
> **1. Akumulasi Tabungan Tahun Pertama pada Akhir Bulan ke-12:**
> 
> $$
> NA_1 = \frac{2.000.000 \cdot 1{,}005 \cdot \left((1{,}005)^{12} - 1\right)}{0{,}005} \approx 24.810.082{,}13
> $$
>
> **2. Pertumbuhan Tabungan Tahun Pertama selama Tahun Kedua ($12$ bulan lagi):**
> Tabungan $NA_1$ berbunga secara majemuk tanpa ada setoran baru sebesar $2.000.000$:
> 
> $$
> NA_{1 \text{ tumbuh}} = 24.810.082{,}13 \cdot (1{,}005)^{12} = 24.810.082{,}13 \cdot 1{,}061678 \approx 26.340.320{,}25
> $$
>
> **3. Akumulasi Setoran Baru Tahun Kedua ($\text{Rp}3.000.000,00$ selama $12$ bulan):**
> 
> $$
> NA_2 = \frac{3.000.000 \cdot 1{,}005 \cdot \left((1{,}005)^{12} - 1\right)}{0{,}005} \approx 37.215.123{,}20
> $$
>
> **4. Total Tabungan Akhir Tahun ke-2:**
> 
> $$
> NA_{\text{total}} = 26.340.320{,}25 + 37.215.123{,}20 = 63.555.443{,}45
> $$
>
> Jadi, total tabungan Ibu Sinta di akhir tahun ke-2 adalah $\boxed{\text{Rp}63.555.443{,}45}$.

### Contoh Soal 9

Seseorang menyetor modal sebesar $\text{Rp}1.000.000,00$ setiap awal triwulan selama $3$ tahun dengan suku bunga $2\%$ per triwulan. Namun, pada akhir triwulan ke-6, ia terpaksa mengambil uang sebesar $\text{Rp}2.000.000,00$. Berapakah sisa akumulasi tabungan pada akhir tahun ke-3 ($12$ triwulan)?

> [!success]- Klik untuk Lihat Jawaban
> **1. Nilai Akumulasi Setoran hingga Awal Triwulan ke-6 (Sebelum Penarikan di Akhir Triwulan ke-6):**
> Setoran dari triwulan 1 sampai 6 ($n = 6$ setoran pra-numerando):
> 
> $$
> NA_6 = \frac{1.000.000 \cdot 1{,}02 \cdot \left((1{,}02)^6 - 1\right)}{0{,}02} \approx 6.434.283{,}17
> $$
>
> **2. Dikurangi Penarikan $\text{Rp}2.000.000,00$ pada Akhir Triwulan ke-6:**
> 
> $$
> Sisa_6 = 6.434.283{,}17 - 2.000.000 = 4.434.283{,}17
> $$
>
> **3. Pertumbuhan Sisa Uang selama 6 Triwulan Sisa (Triwulan 7–12):**
> 
> $$
> Sisa_6 \text{ tumbuh} = 4.434.283{,}17 \cdot (1{,}02)^6 = 4.434.283{,}17 \cdot 1{,}126162 \approx 4.993.721{,}72
> $$
>
> **4. Akumulasi Setoran Baru Triwulan 7–12 ($n = 6$ setoran pra-numerando baru):**
> 
> $$
> NA_{\text{setoran baru}} = \frac{1.000.000 \cdot 1{,}02 \cdot \left((1{,}02)^6 - 1\right)}{0{,}02} \approx 6.434.283{,}17
> $$
>
> **5. Total Akhir Tabungan:**
> 
> $$
> NA_{\text{total}} = 4.993.721{,}72 + 6.434.283{,}17 = 11.428.004{,}89
> $$
>
> Jadi, sisa akumulasi tabungan pada akhir tahun ke-3 adalah $\boxed{\text{Rp}11.428.004{,}89}$.

### Contoh Soal 10

Seorang calon investor membandingkan dua opsi simpanan berkala selama $3$ tahun ($36$ bulan) dengan total modal yang dikeluarkan per tahun sama:
- **Opsi A:** Menabung $\text{Rp}12.000.000,00$ **setiap awal tahun** dengan suku bunga majemuk $6\%$ per tahun.
- **Opsi B:** Menabung $\text{Rp}1.000.000,00$ **setiap awal bulan** dengan suku bunga majemuk $0{,}5\%$ per bulan.

Manakah opsi yang menghasilkan Nilai Akhir ($NA$) lebih besar di akhir tahun ke-3?

> [!success]- Klik untuk Lihat Jawaban
> **1. Menghitung $NA$ Opsi A (Setoran Tahunan Pra-Numerando, $n=3, i=6\%$):**
> 
> $$
> \begin{aligned}
> NA_A &= \frac{12.000.000 \cdot (1{,}06) \cdot \left((1{,}06)^3 - 1\right)}{0{,}06} \\
> &= \frac{12.720.000 \cdot (1{,}191016 - 1)}{0{,}06} \\
> &= \frac{12.720.000 \cdot 0{,}191016}{0{,}06} \\
> &= 212.000.000 \cdot 0{,}191016 \\
> &= 40.495.392
> \end{aligned}
> $$
>
> **2. Menghitung $NA$ Opsi B (Setoran Bulanan Pra-Numerando, $n=36, i=0{,}5\%$):**
> 
> $$
> \begin{aligned}
> NA_B &= \frac{1.000.000 \cdot (1{,}005) \cdot \left((1{,}005)^{36} - 1\right)}{0{,}005} \\
> &= \frac{1.005.000 \cdot (1{,}196680 - 1)}{0{,}005} \\
> &= \frac{1.005.000 \cdot 0{,}196680}{0{,}005} \\
> &= 201.000.000 \cdot 0{,}196680 \\
> &= 39.532.680
> \end{aligned}
> $$
>
> **3. Perbandingan dan Selisih:**
> 
> $$
> \text{Selisih} = 40.495.392 - 39.532.680 = 962.712
> $$
>
> **Opsi A** memberikan Nilai Akhir lebih besar karena setoran dalam jumlah besar dilakukan sekaligus di awal tahun, sehingga modal mengendap lebih cepat untuk menghasilkan bunga yang lebih optimal dibandingkan setoran kecil setiap bulan.
>
> Jadi, **Opsi A** menghasilkan Nilai Akhir lebih besar dengan selisih $\boxed{\text{Rp}962.712,00}$.

---

## Konsep Terkait

- [[03 - Bunga Majemuk]]
- [[05 - Nilai Tunai Rente dan Rente Kekal]]