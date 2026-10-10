---
title:
---
# Bunga Tunggal dan Diskonto

Bunga tunggal dan diskonto merupakan dua metode perhitungan dasar dalam transaksi keuangan jangka pendek. Perbedaannya terletak pada waktu pemotongan jasa keuangan: bunga tunggal dihitung dan dibayarkan di akhir periode, sedangkan diskonto dipotong langsung di awal transaksi.

### 1. Bunga Tunggal

==**Bunga tunggal adalah bunga yang dihitung hanya berdasarkan modal awal ($M_0$) yang besarnya tetap di setiap periode.**==

Besarnya bunga tidak memengaruhi modal untuk periode berikutnya (tidak ada sistem bunga-berbunga).

* **Rumus Bunga ($B$):**
  
  $$
  B = M_0 \times i \times n
  $$

* **Modal Akhir ($M_n$):**
  
  $$
  M_n = M_0 + B = M_0(1 + i \times n)
  $$

Keterangan:
- $M_0$ = Modal awal
- $M_n$ = Modal akhir setelah periode ke-$n$
- $i$ = Suku bunga per periode (dalam desimal)
- $n$ = Jangka waktu / periode pembungaan

---

### 2. Diskonto

==**Diskonto adalah bunga yang dibayarkan di awal transaksi pada saat peminjaman atau pencairan surat berharga.**==

Peminjam hanya menerima modal bersih ($M_{\text{bersih}}$) setelah dipotong diskonto ($D$).

* **Rumus Besarnya Diskonto ($D$):**
  
  $$
  D = M_0 \times i \times n
  $$

* **Modal Bersih yang Diterima ($M_{\text{bersih}}$):**
  
  $$
  M_{\text{bersih}} = M_0 - D = M_0(1 - i \times n)
  $$

Keterangan:
- $M_0$ = Nilai pinjaman awal / nilai jatuh tempo
- $D$ = Besar diskonto
- $i$ = Suku diskonto per periode (dalam desimal)
- $n$ = Jangka waktu / periode diskonto

> [!important] Perbedaan Bunga dan Diskonto
> Bunga ditambahkan pada akhir periode sehingga $M_n = M_0 + B$, sedangkan diskonto dikurangkan di awal periode sehingga $M_{\text{bersih}} = M_0 - D$.

---

### 3. Metode Perhitungan Bunga Tunggal

Untuk menghitung bunga tunggal harian, suku bunga tahunan ($i$) disesuaikan dengan jumlah hari dalam setahun. Terdapat tiga metode efisien yang sering digunakan:

#### A. Metode Pembagi Tetap

Metode ini digunakan jika suku bunga dinyatakan dalam setahun ($360$ hari bisnis).

* **Angka Bunga ($AB$):**
  
  $$
  AB = \frac{M_0 \times t}{100}
  $$

* **Pembagi Tetap ($PT$):**
  
  $$
  PT = \frac{360}{i\%}
  $$

* **Besar Bunga Total ($B$):**
  
  $$
  B = \frac{\sum AB}{PT}
  $$

*(Keterangan: $t$ = jangka waktu dalam hari)*

#### B. Metode Persen yang Sebanding

Metode ini digunakan apabila suku bunga yang berlaku tidak menghasilkan Pembagi Tetap berupa bilangan bulat. Perhitungan dilakukan dengan menggunakan suku bunga sebanding yang mudah (misal $6\%$ per tahun dengan $PT = 60$), lalu hasilnya disesuaikan secara proporsional.

$$
B_{\text{sebenarnya}} = B_{\text{acuan}} \times \frac{i_{\text{sebenarnya}}}{i_{\text{acuan}}}
$$

#### C. Metode Persen yang Seukuran

Metode ini membagi perhitungan bunga harian berdasarkan kalender masehi ($365$ hari untuk tahun biasa, atau $366$ hari untuk tahun kabisat).

$$
B = \frac{M_0 \times t \times i\%}{365}
$$

> [!note] Penggunaan Metode
> Pembagi tetap berpatokan pada tahun finansial ($360$ hari), sedangkan persen seukuran berpatokan pada tahun masehi sebenarnya ($365$ atau $366$ hari).

---

## Contoh Soal

### Contoh Soal 1

Suatu modal sebesar $\text{Rp}3.000.000,00$ dibungakan dengan suku bunga tunggal $6\%$ per tahun selama $3$ tahun. Tentukan besar bunga dan modal akhirnya!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M_0 = \text{Rp}3.000.000,00$
> - $i = 6\% = 0{,}06$
> - $n = 3 \text{ tahun}$
>
> **1. Menghitung Bunga ($B$):**
> 
> $$
> \begin{aligned}
> B &= M_0 \times i \times n \\
> &= 3.000.000 \times 0{,}06 \times 3 \\
> &= 540.000
> \end{aligned}
> $$
>
> **2. Menghitung Modal Akhir ($M_n$):**
> 
> $$
> \begin{aligned}
> M_n &= M_0 + B \\
> &= 3.000.000 + 540.000 \\
> &= 3.540.000
> \end{aligned}
> $$
>
> Jadi, besar bunganya adalah $\text{Rp}540.000,00$ dan modal akhirnya adalah $\boxed{\text{Rp}3.540.000,00}$.

### Contoh Soal 2

Pinjaman sebesar $\text{Rp}5.000.000,00$ dengan sistem diskonto $10\%$ per tahun akan dikembalikan setelah $1$ tahun. Tentukan besar diskonto dan modal bersih yang diterima peminjam!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M_0 = \text{Rp}5.000.000,00$
> - $i = 10\% = 0{,}10$
> - $n = 1 \text{ tahun}$
>
> **1. Menghitung Diskonto ($D$):**
> 
> $$
> \begin{aligned}
> D &= M_0 \times i \times n \\
> &= 5.000.000 \times 0{,}10 \times 1 \\
> &= 500.000
> \end{aligned}
> $$
>
> **2. Menghitung Modal Bersih ($M_{\text{bersih}}$):**
> 
> $$
> \begin{aligned}
> M_{\text{bersih}} &= M_0 - D \\
> &= 5.000.000 - 500.000 \\
> &= 4.500.000
> \end{aligned}
> $$
>
> Jadi, besar diskonto adalah $\text{Rp}500.000,00$ dan modal bersih yang diterima adalah $\boxed{\text{Rp}4.500.000,00}$.

### Contoh Soal 3

Modal sebesar $\text{Rp}2.000.000,00$ dibungakan dengan bunga tunggal $0{,}5\%$ per bulan. Berapa bulan lama pembungaan agar modalnya menjadi $\text{Rp}2.150.000,00$?

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M_0 = \text{Rp}2.000.000,00$
> - $M_n = \text{Rp}2.150.000,00$
> - $i = 0{,}5\% = 0{,}005 \text{ per bulan}$
>
> **1. Menghitung Bunga ($B$):**
> 
> $$
> B = M_n - M_0 = 2.150.000 - 2.000.000 = 150.000
> $$
>
> **2. Menghitung Lama Periode ($n$):**
> 
> $$
> \begin{aligned}
> B &= M_0 \times i \times n \\
> 150.000 &= 2.000.000 \times 0{,}005 \times n \\
> 150.000 &= 10.000 \times n \\
> n &= \frac{150.000}{10.000} \\
> n &= 15
> \end{aligned}
> $$
>
> Jadi, lama pembungaan adalah $\boxed{15 \text{ bulan}}$.

### Contoh Soal 4

Pinjaman dengan sistem diskonto $8\%$ per tahun selama $9$ bulan menghasilkan modal bersih sebesar $\text{Rp}4.700.000,00$. Tentukan nilai pinjaman awal ($M_0$) yang harus dikembalikan saat jatuh tempo!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M_{\text{bersih}} = \text{Rp}4.700.000,00$
> - $i = 8\% \text{ per tahun}$
> - $n = 9 \text{ bulan} = \frac{9}{12} = \frac{3}{4} \text{ tahun}$
>
> **Mencari $M_0$:**
> 
> $$
> \begin{aligned}
> M_{\text{bersih}} &= M_0(1 - i \times n) \\
> 4.700.000 &= M_0 \left(1 - 0{,}08 \times \frac{3}{4}\right) \\
> 4.700.000 &= M_0 (1 - 0{,}06) \\
> 4.700.000 &= M_0 (0{,}94) \\
> M_0 &= \frac{4.700.000}{0{,}94} \\
> M_0 &= 5.000.000
> \end{aligned}
> $$
>
> Jadi, nilai pinjaman awal yang harus dikembalikan adalah $\boxed{\text{Rp}5.000.000,00}$.

### Contoh Soal 5

Dengan menggunakan metode pembagi tetap ($1 \text{ tahun} = 360 \text{ hari}$), hitunglah bunga tunggal dari modal $\text{Rp}4.000.000,00$ dengan suku bunga $9\%$ per tahun selama $50$ hari!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M_0 = \text{Rp}4.000.000,00$
> - $i = 9\%$
> - $t = 50 \text{ hari}$
>
> **1. Menghitung Angka Bunga ($AB$):**
> 
> $$
> AB = \frac{M_0 \times t}{100} = \frac{4.000.000 \times 50}{100} = 2.000.000
> $$
>
> **2. Menghitung Pembagi Tetap ($PT$):**
> 
> $$
> PT = \frac{360}{i} = \frac{360}{9} = 40
> $$
>
> **3. Menghitung Bunga ($B$):**
> 
> $$
> B = \frac{AB}{PT} = \frac{2.000.000}{40} = 50.000
> $$
>
> Jadi, besarnya bunga harian tersebut adalah $\boxed{\text{Rp}50.000,00}$.

### Contoh Soal 6

Suatu koperasi simpan pinjam memiliki 3 transaksi pinjaman dengan suku bunga $6\%$ per tahun ($1 \text{ tahun} = 360 \text{ hari}$):
1. Modal $\text{Rp}2.000.000,00$ selama $40$ hari
2. Modal $\text{Rp}3.000.000,00$ selama $60$ hari
3. Modal $\text{Rp}5.000.000,00$ selama $30$ hari

Hitunglah total bunga yang diperoleh koperasi menggunakan metode pembagi tetap!

> [!success]- Klik untuk Lihat Jawaban
> **1. Menghitung Pembagi Tetap ($PT$):**
> 
> $$
> PT = \frac{360}{6} = 60
> $$
>
> **2. Menghitung Masing-masing Angka Bunga ($AB$):**
> - $AB_1 = \frac{2.000.000 \times 40}{100} = 800.000$
> - $AB_2 = \frac{3.000.000 \times 60}{100} = 1.800.000$
> - $AB_3 = \frac{5.000.000 \times 30}{100} = 1.500.000$
>
> **3. Menghitung Total Angka Bunga ($\sum AB$):**
> 
> $$
> \sum AB = 800.000 + 1.800.000 + 1.500.000 = 4.100.000
> $$
>
> **4. Menghitung Total Bunga ($B$):**
> 
> $$
> B = \frac{\sum AB}{PT} = \frac{4.100.000}{60} = 68.333{,}33
> $$
>
> Jadi, total bunga yang diperoleh koperasi adalah $\boxed{\text{Rp}68.333{,}33}$.

### Contoh Soal 7

Hitunglah bunga tunggal dari modal $\text{Rp}6.000.000,00$ dengan suku bunga $7,5\%$ per tahun selama $80$ hari menggunakan metode persen yang sebanding!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M_0 = \text{Rp}6.000.000,00$
> - $i_{\text{sebenarnya}} = 7,5\%$
> - $t = 80 \text{ hari}$
>
> Gunakan suku bunga acuan $6\%$ agar Pembagi Tetap ($PT$) bulat ($PT = 360/6 = 60$).
>
> **1. Menghitung Bunga Acuan ($B_{6\%}$):**
> 
> $$
> AB = \frac{6.000.000 \times 80}{100} = 4.800.000
> $$
> 
> $$
> B_{6\%} = \frac{4.800.000}{60} = 80.000
> $$
>
> **2. Penyesuaian dengan Persen Sebanding ($7,5\%$):**
> Karena $7,5\% = 6\% + 1,5\% = 6\% + \frac{1}{4}(6\%)$:
> 
> $$
> \begin{aligned}
> B_{7,5\%} &= B_{6\%} + \frac{1}{4} B_{6\%} \\
> &= 80.000 + \frac{1}{4}(80.000) \\
> &= 80.000 + 20.000 \\
> &= 100.000
> \end{aligned}
> $$
>
> Jadi, besarnya bunga dengan persentase $7,5\%$ adalah $\boxed{\text{Rp}100.000,00}$.

### Contoh Soal 8

Modal sebesar $\text{Rp}7.300.000,00$ dibungakan dengan suku bunga $5\%$ per tahun selama $120$ hari pada tahun biasa ($365$ hari). Tentukan besar bunganya menggunakan metode persen yang seukuran!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M_0 = \text{Rp}7.300.000,00$
> - $i = 5\%$
> - $t = 120 \text{ hari}$
> - Jumlah hari dalam setahun = $365$
>
> **Menghitung Bunga ($B$):**
> 
> $$
> \begin{aligned}
> B &= \frac{M_0 \times t \times i\%}{365} \\
> &= \frac{7.300.000 \times 120 \times 0{,}05}{365} \\
> &= \frac{7.300.000}{365} \times 120 \times 0{,}05 \\
> &= 20.000 \times 6 \\
> &= 120.000
> \end{aligned}
> $$
>
> Jadi, besarnya bunga menurut persen yang seukuran adalah $\boxed{\text{Rp}120.000,00}$.

### Contoh Soal 9

Seseorang meminjam uang di bank yang menerapkan sistem diskonto $12\%$ per tahun. Jika orang tersebut ingin menerima uang bersih sebesar $\text{Rp}8.800.000,00$ untuk jangka waktu $15$ bulan, berapakah besar pinjaman nominal yang harus dia ajukan?

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M_{\text{bersih}} = \text{Rp}8.800.000,00$
> - $i = 12\% = 0{,}12 \text{ per tahun}$
> - $n = 15 \text{ bulan} = \frac{15}{12} = 1{,}25 \text{ tahun}$
>
> **Mencari Nominal Pinjaman Awal ($M_0$):**
> 
> $$
> \begin{aligned}
> M_{\text{bersih}} &= M_0(1 - i \times n) \\
> 8.800.000 &= M_0(1 - 0{,}12 \times 1{,}25) \\
> 8.800.000 &= M_0(1 - 0{,}15) \\
> 8.800.000 &= M_0(0{,}85) \\
> M_0 &= \frac{8.800.000}{0{,}85} \\
> M_0 &\approx 10.352.941{,}18
> \end{aligned}
> $$
>
> Jadi, besar pinjaman nominal yang harus diajukan adalah $\boxed{\text{Rp}10.352.941{,}18}$.

### Contoh Soal 10

Sebuah perusahaan mempunyai dua pilihan pinjaman jangka pendek senilai $\text{Rp}20.000.000,00$ untuk jangka waktu $6$ bulan:
- **Opsi A:** Pinjaman sistem Bunga Tunggal $10\%$ per tahun yang dibayar pada akhir periode.
- **Opsi B:** Pinjaman sistem Diskonto $9,5\%$ per tahun yang dipotong langsung pada awal periode.

Manakah opsi pinjaman yang memberikan beban bunga rupiah lebih murah, dan hitung besarnya tingkat suku bunga efektif dari opsi Diskonto tersebut!

> [!success]- Klik untuk Lihat Jawaban
> **1. Menghitung Beban Bunga Rupiah Opsi A (Bunga Tunggal):**
> 
> $$
> B_A = 20.000.000 \times 10\% \times \frac{6}{12} = 1.000.000
> $$
>
> **2. Menghitung Beban Bunga Rupiah Opsi B (Diskonto):**
> 
> $$
> D_B = 20.000.000 \times 9{,}5\% \times \frac{6}{12} = 950.000
> $$
>
> Beban nominal rupiah Opsi B ($\text{Rp}950.000,00$) lebih murah dibanding Opsi A ($\text{Rp}1.000.000,00$).
>
> **3. Menghitung Suku Bunga Efektif Opsi B (Diskonto):**
> Uang bersih yang diterima pada Opsi B adalah:
> 
> $$
> M_{\text{bersih}} = 20.000.000 - 950.000 = 19.050.000
> $$
> 
> Suku bunga efektif per $6$ bulan:
> 
> $$
> i_{\text{efektif}} = \frac{950.000}{19.050.000} \approx 0{,}04987 = 4{,}987\% \text{ per 6 bulan}
> $$
> 
> Disetahunkan ($12$ bulan):
> 
> $$
> i_{\text{efektif p.a.}} = 4{,}987\% \times 2 = 9{,}974\% \text{ p.a.}
> $$
>
> **Kesimpulan:**
> Opsi B memberikan beban biaya rupiah lebih murah ($\text{Rp}950.000,00$) dengan bunga efektif tahunan sebesar $\boxed{9{,}974\% \text{ p.a.}}$, yang mana masih lebih rendah dibanding bunga efektif Opsi A ($10\%$ p.a.).

---

## Konsep Terkait

- [[01 - Pengertian Bunga dan Operasi Persen]]
- [[03 - Bunga Majemuk]]