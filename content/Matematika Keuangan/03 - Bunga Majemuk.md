---
title:
---
# Bunga Majemuk

Bunga majemuk adalah sistem bunga di mana bunga yang dihitung pada setiap akhir periode ditambahkan ke modal awal untuk menjadi modal baru pada periode berikutnya. Sistem ini sering disebut sebagai sistem **bunga berbunga**.

### 1. Perhitungan Nilai Akhir Bunga Majemuk

==**Pada bunga majemuk, besarnya bunga pada setiap periode selalu berubah dan cenderung bertambah secara eksponensial.**==

* **Rumus Modal Akhir ($M_n$):**
  
  $$
  M_n = M_0(1 + i)^n
  $$

* **Rumus Bunga Majemuk Total ($B$):**
  
  $$
  B = M_n - M_0
  $$

Keterangan:
- $M_0$ = Modal awal
- $M_n$ = Modal akhir setelah periode ke-$n$
- $i$ = Suku bunga per periode pemajemukan (dalam desimal)
- $n$ = Jumlah periode pembungaan

#### Pemajemukan Lebih dari Sekali dalam Setahun ($m$ Kali)

Jika suku bunga diberikan sebesar $i\%$ per tahun (p.a.) dan pemajemukan dilakukan sebanyak $m$ kali dalam setahun (misalnya bulanan, triwulanan, atau semesteran), maka rumus penyesuaiannya adalah:

$$
M_n = M_0 \left(1 + \frac{i}{m}\right)^{n \times m}
$$

Keterangan:
- $m$ = Frekuensi pemajemukan dalam setahun ($m=12$ untuk bulanan, $m=4$ untuk triwulan, $m=2$ untuk semester)
- $n$ = Jangka waktu dalam tahun

---

### 2. Perhitungan Nilai Akhir dengan Masa Bunga Pecahan

Jika jangka waktu pembungaan mengandung pecahan (misalnya $2$ tahun $5$ bulan, atau $n + k$ periode dengan $0 < k < 1$), terdapat dua cara penyelesaian:

#### A. Metode Eksak (Eksponensial Murni)

Modal akhir dihitung langsung menggunakan rumus utama dengan pangkat pecahan:

$$
M_{n+k} = M_0(1 + i)^{n+k}
$$

#### B. Metode Praktis (Kombinasi Majemuk dan Tunggal)

Gunakan bunga majemuk untuk periode bulat ($n$), lalu hasil modalnya dibungakan dengan bunga tunggal untuk periode pecahan ($k$):

$$
M_{n+k} = M_0(1 + i)^n \cdot (1 + k \cdot i)
$$

Keterangan:
- $n$ = Bagian periode yang bernilai bulat
- $k$ = Bagian periode pecahan ($0 < k < 1$)

> [!important] Ketelitian Metode
> Dalam dunia perbankan, metode praktis lebih sering digunakan untuk menyederhanakan perhitungan masa bunga pecahan tanpa memerlukan kalkulasi pangkat eksponen ilmiah.

---

## Contoh Soal

### Contoh Soal 1

Modal awal sebesar $\text{Rp}2.000.000,00$ diinvestasikan dengan suku bunga majemuk $5\%$ per tahun. Tentukan modal akhir setelah $3$ tahun!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M_0 = \text{Rp}2.000.000,00$
> - $i = 5\% = 0{,}05$
> - $n = 3 \text{ tahun}$
>
> **Menghitung Modal Akhir ($M_n$):**
> 
> $$
> \begin{aligned}
> M_3 &= M_0(1 + i)^3 \\
> &= 2.000.000(1 + 0{,}05)^3 \\
> &= 2.000.000(1{,}05)^3 \\
> &= 2.000.000(1{,}157625) \\
> &= 2.315.250
> \end{aligned}
> $$
>
> Jadi, modal akhir setelah $3$ tahun adalah $\boxed{\text{Rp}2.315.250,00}$.

### Contoh Soal 2

Pinjaman sebesar $\text{Rp}5.000.000,00$ dikenakan bunga majemuk $2\%$ per bulan. Berapakah besar bunga majemuk akumulasi yang harus dibayar setelah $4$ bulan?

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M_0 = \text{Rp}5.000.000,00$
> - $i = 2\% = 0{,}02 \text{ per bulan}$
> - $n = 4 \text{ bulan}$
>
> **1. Menghitung Modal Akhir ($M_4$):**
> 
> $$
> \begin{aligned}
> M_4 &= 5.000.000(1 + 0{,}02)^4 \\
> &= 5.000.000(1{,}02)^4 \\
> &= 5.000.000(1{,}08243216) \\
> &= 5.412.160{,}80
> \end{aligned}
> $$
>
> **2. Menghitung Bunga Total ($B$):**
> 
> $$
> B = M_4 - M_0 = 5.412.160{,}80 - 5.000.000 = 412.160{,}80
> $$
>
> Jadi, besar bunga majemuk yang dibayar adalah $\boxed{\text{Rp}412.160{,}80}$.

### Contoh Soal 3

Tabungan sebesar $\text{Rp}10.000.000,00$ dibungakan secara majemuk dengan suku bunga nominal $12\%$ per tahun. Jika pemajemukan bunga dilakukan setiap triwulan ($3$ bulan sekali), tentukan modal akhir tabungan setelah $2$ tahun!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M_0 = \text{Rp}10.000.000,00$
> - $i = 12\% = 0{,}12 \text{ p.a.}$
> - Pemajemukan triwulanan ($m = 4$ kali setahun)
> - Jangka waktu $n = 2 \text{ tahun}$
>
> **1. Menyesuaikan Suku Bunga dan Periode:**
> - $i_{\text{triwulan}} = \frac{12\%}{4} = 3\% = 0{,}03$
> - Total periode $N = n \times m = 2 \times 4 = 8 \text{ triwulan}$
>
> **2. Menghitung Modal Akhir ($M_8$):**
> 
> $$
> \begin{aligned}
> M_8 &= 10.000.000(1 + 0{,}03)^8 \\
> &= 10.000.000(1{,}03)^8 \\
> &= 10.000.000(1{,}266770) \\
> &= 12.667.700
> \end{aligned}
> $$
>
> Jadi, modal akhir tabungan adalah $\boxed{\text{Rp}12.667.700,00}$.

### Contoh Soal 4

Suatu modal $M_0 = \text{Rp}4.000.000,00$ diinvestasikan dengan bunga majemuk $10\%$ per tahun. Berapa tahunkah waktu yang dibutuhkan agar modal tersebut tumbuh menjadi $\text{Rp}5.324.000,00$?

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M_0 = \text{Rp}4.000.000,00$
> - $M_n = \text{Rp}5.324.000,00$
> - $i = 10\% = 0{,}10$
>
> **Mencari Periode ($n$):**
> 
> $$
> \begin{aligned}
> M_n &= M_0(1 + i)^n \\
> 5.324.000 &= 4.000.000(1 + 0{,}10)^n \\
> \frac{5.324.000}{4.000.000} &= (1{,}10)^n \\
> 1{,}331 &= (1{,}10)^n \\
> (1{,}10)^3 &= (1{,}10)^n \\
> n &= 3
> \end{aligned}
> $$
>
> Jadi, waktu yang dibutuhkan adalah $\boxed{3 \text{ tahun}}$.

### Contoh Soal 5

Tentukan nilai sekarang (*present value*) dari modal sebesar $\text{Rp}8.000.000,00$ yang harus dilunasi $3$ tahun yang akan datang jika suku bunga majemuk yang berlaku adalah $6\%$ per tahun!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M_n = \text{Rp}8.000.000,00$
> - $i = 6\% = 0{,}06$
> - $n = 3 \text{ tahun}$
>
> **Mencari Modal Awal ($M_0$):**
> 
> $$
> \begin{aligned}
> M_0 &= \frac{M_n}{(1 + i)^n} \\
> &= \frac{8.000.000}{(1 + 0{,}06)^3} \\
> &= \frac{8.000.000}{(1{,}06)^3} \\
> &= \frac{8.000.000}{1{,}191016} \\
> &\approx 6.716.954{,}27
> \end{aligned}
> $$
>
> Jadi, nilai sekarang dari modal tersebut adalah $\boxed{\text{Rp}6.716.954{,}27}$.

### Contoh Soal 6

Modal sebesar $\text{Rp}6.000.000,00$ dibungakan dengan bunga majemuk $4\%$ per semester selama $2$ tahun $3$ bulan. Tentukan modal akhirnya menggunakan **metode praktis**!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M_0 = \text{Rp}6.000.000,00$
> - $i = 4\% = 0{,}04 \text{ per semester}$ ($1 \text{ semester} = 6 \text{ bulan}$)
> - Jangka waktu = $2 \text{ tahun } 3 \text{ bulan} = 27 \text{ bulan}$
>
> **1. Mengonversi Waktu ke Periode Semester:**
> - Jumlah semester bulat $n = \left\lfloor \frac{27}{6} \right\rfloor = 4 \text{ semester}$ ($24 \text{ bulan}$)
> - Sisa pecahan semester $k = \frac{3 \text{ bulan}}{6 \text{ bulan}} = 0{,}5 \text{ semester}$
>
> **2. Menghitung Modal Akhir ($M_{4,5}$):**
> 
> $$
> \begin{aligned}
> M_{4{,}5} &= M_0(1 + i)^4 \cdot (1 + k \cdot i) \\
> &= 6.000.000(1 + 0{,}04)^4 \cdot (1 + 0{,}5 \times 0{,}04) \\
> &= 6.000.000(1{,}04)^4 \cdot (1 + 0{,}02) \\
> &= 6.000.000(1{,}16985856) \cdot (1{,}02) \\
> &= 7.019.151{,}36 \cdot 1{,}02 \\
> &\approx 7.159.534{,}39
> \end{aligned}
> $$
>
> Jadi, modal akhir dengan metode praktis adalah $\boxed{\text{Rp}7.159.534{,}39}$.

### Contoh Soal 7

Berapakah modal akhir dari soal nomor 6 jika dihitung menggunakan **metode eksak**? Hitung pula selisih hasil antara kedua metode tersebut!

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M_0 = \text{Rp}6.000.000,00$
> - $i = 0{,}04 \text{ per semester}$
> - Total periode $n+k = 4{,}5 \text{ semester}$
>
> **1. Menghitung Modal Akhir Metode Eksak:**
> 
> $$
> \begin{aligned}
> M_{4{,}5} &= M_0(1 + i)^{4{,}5} \\
> &= 6.000.000(1{,}04)^{4{,}5} \\
> &= 6.000.000(1{,}193256) \\
> &\approx 7.159.536{,}00
> \end{aligned}
> $$
>
> **2. Menghitung Selisih dengan Metode Praktis:**
> - Hasil Eksak = $\text{Rp}7.159.536{,}00$
> - Hasil Praktis (Soal 6) = $\text{Rp}7.159.534{,}39$
> 
> $$
> \text{Selisih} = 7.159.536{,}00 - 7.159.534{,}39 = 1{,}61
> $$
>
> Jadi, modal akhir metode eksak adalah $\text{Rp}7.159.536{,}00$ dengan selisih yang sangat kecil yaitu $\boxed{\text{Rp}1{,}61}$.

### Contoh Soal 8

Suatu bank menawarkan dua skema bunga majemuk untuk investasi $1$ tahun:
- **Bank A:** Bunga nominal $8\%$ per tahun dipajemukkan bulanan ($m=12$).
- **Bank B:** Bunga nominal $8{,}1\%$ per tahun dipajemukkan per semester ($m=2$).

Manakah bank yang memberikan bunga efektif tahunan lebih tinggi?

> [!success]- Klik untuk Lihat Jawaban
> **1. Menghitung Bunga Efektif Tahunan Bank A ($i_{\text{eff, A}}$):**
> 
> $$
> \begin{aligned}
> i_{\text{eff, A}} &= \left(1 + \frac{0{,}08}{12}\right)^{12} - 1 \\
> &= (1 + 0{,}006667)^{12} - 1 \\
> &= (1{,}006667)^{12} - 1 \\
> &\approx 1{,}08300 - 1 = 0{,}08300 = 8{,}30\%
> \end{aligned}
> $$
>
> **2. Menghitung Bunga Efektif Tahunan Bank B ($i_{\text{eff, B}}$):**
> 
> $$
> \begin{aligned}
> i_{\text{eff, B}} &= \left(1 + \frac{0{,}081}{2}\right)^2 - 1 \\
> &= (1 + 0{,}0405)^2 - 1 \\
> &= (1{,}0405)^2 - 1 \\
> &= 1{,}08264 - 1 = 0{,}08264 = 8{,}26\%
> \end{aligned}
> $$
>
> Jadi, **Bank A** memberikan bunga efektif tahunan lebih tinggi ($8{,}30\% > 8{,}26\%$).

### Contoh Soal 9

Seseorang menyimpan modal sebesar $\text{Rp}15.000.000,00$ di bank dengan bunga majemuk $6\%$ p.a. yang dipajemukkan bulanan. Jika terdapat biaya administrasi bulanan sebesar $\text{Rp}10.000,00$ yang dipotong langsung dari rekening tabungan setiap akhir bulan, berapa saldo tabungan setelah $3$ bulan?

> [!success]- Klik untuk Lihat Jawaban
> **Diketahui:**
> - $M_0 = \text{Rp}15.000.000,00$
> - $i = \frac{6\%}{12} = 0{,}5\% = 0{,}005 \text{ per bulan}$
> - Biaya adm = $\text{Rp}10.000,00 \text{ per bulan}$
>
> **Langkah Perhitungan per Bulan:**
> 
> - **Akhir Bulan 1:**
>   
>   $$
>   M_1 = (15.000.000 \times 1{,}005) - 10.000 = 15.075.000 - 10.000 = 15.065.000
>   $$
> 
> - **Akhir Bulan 2:**
>   
>   $$
>   M_2 = (15.065.000 \times 1{,}005) - 10.000 = 15.140.325 - 10.000 = 15.130.325
>   $$
> 
> - **Akhir Bulan 3:**
>   
>   $$
>   M_3 = (15.130.325 \times 1{,}005) - 10.000 = 15.205.976{,}63 - 10.000 = 15.195.976{,}63
>   $$
>
> Jadi, saldo tabungan setelah $3$ bulan adalah $\boxed{\text{Rp}15.195.976{,}63}$.

### Contoh Soal 10

Bandingkan pertumbuhan modal awal $M_0 = \text{Rp}10.000.000,00$ yang dibungakan selama $5$ tahun dengan suku bunga $10\%$ per tahun antara skema **Bunga Tunggal** dan skema **Bunga Majemuk**. Berapakah selisih akumulasi bunga dari kedua skema tersebut?

> [!success]- Klik untuk Lihat Jawaban
> **1. Akumulasi Bunga Tunggal ($B_{\text{tunggal}}$):**
> 
> $$
> B_{\text{tunggal}} = M_0 \times i \times n = 10.000.000 \times 0{,}10 \times 5 = 5.000.000
> $$
> 
> Modal akhir Bunga Tunggal = $\text{Rp}15.000.000,00$
>
> **2. Akumulasi Bunga Majemuk ($B_{\text{majemuk}}$):**
> 
> $$
> \begin{aligned}
> M_5 &= M_0(1 + i)^5 = 10.000.000(1{,}10)^5 \\
> &= 10.000.000(1{,}61051) = 16.105.100
> \end{aligned}
> $$
> 
> $$
> B_{\text{majemuk}} = 16.105.100 - 10.000.000 = 6.105.100
> $$
>
> **3. Menghitung Selisih Bunga:**
> 
> $$
> \text{Selisih} = B_{\text{majemuk}} - B_{\text{tunggal}} = 6.105.100 - 5.000.000 = 1.105.100
> $$
>
> Jadi, selisih akumulasi keuntungan bunga majemuk dibandingkan bunga tunggal adalah $\boxed{\text{Rp}1.105.100,00}$.

---

## Konsep Terkait

- [[02 - Bunga Tunggal dan Diskonto]]
- [[04 - Konsep Rente dan Nilai Akhir Rente]]