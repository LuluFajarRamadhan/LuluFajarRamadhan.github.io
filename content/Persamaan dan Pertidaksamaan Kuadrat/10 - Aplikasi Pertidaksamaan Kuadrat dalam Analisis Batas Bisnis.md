---
title:
---
# Aplikasi Pertidaksamaan Kuadrat dalam Analisis Batas Bisnis

Dalam aktivitas manajerial dan ekonomi ekonomi, pengambil keputusan sering kali tidak mencari satu titik tunggal, melainkan mencari ==**Ambang Batas Aman Operasional**==. Pertidaksamaan kuadrat dimanfaatkan secara intensif untuk menganalisis rentang kapasitas produksi atau volume penjualan agar perusahaan mampu mencetak keuntungan bisnis dan menghindari risiko kerugian.

## Analisis Titik Impas dan Wilayah Profit
Dua komponen utama pembentuk dinamika keuangan perusahaan adalah Fungsi Pendapatan Total ($R$) dan Fungsi Biaya Total ($C$). Keuntungan atau Profit ($\Pi$) dihitung dari selisih keduanya:

$$
\Pi = R - C
$$

* **Titik Impas (*Break-Even Point*):** Terjadi saat keuntungan sama dengan nol ($\Pi = 0$). Kondisi ini dimodelkan dengan persamaan kuadrat untuk mencari batas bawah dan batas atas kuantitas produksi.
* **Wilayah Profit (Untung):** Perusahaan dinyatakan memperoleh keuntungan apabila pendapatan lebih besar daripada biaya operasional, yang dimodelkan lewat pertidaksamaan kuadrat:
$$
\Pi > 0 \quad \rightarrow \quad R - C > 0
$$

Penyelesaian dari pertidaksamaan kuadrat ini menghasilkan interval atau rentang jumlah barang yang wajib diproduksi pabrik agar roda bisnis tetap berada dalam koridor ==**Zona Menguntungkan**==.

---
## Contoh Soal

1. Fungsi biaya total bulanan sebuah usaha rumahan dinyatakan oleh $C = x^2 + 20x + 500$ dan fungsi pendapatan total yang diperoleh dari penjualan produk adalah $R = 60x$, di mana $x$ menyatakan banyaknya unit barang yang diproduksi. Tentukan interval jumlah barang $x$ yang harus diproduksi agar usaha tersebut mendapatkan keuntungan!

> [!success]- Klik untuk Lihat Jawaban 1
> Syarat agar perusahaan mendapatkan keuntungan (profit) adalah nilai Pendapatan harus lebih besar dari Biaya Total ($R - C > 0$):
> $$
> \begin{aligned}
> R - C &> 0 \\
> 60x - (x^2 + 20x + 500) &&> 0 \\
> 60x - x^2 - 20x - 500 &&> 0 \\
> -x^2 + 40x - 500 &&> 0
> \end{aligned}
> $$
> Kalikan seluruh pertidaksamaan dengan $-1$ untuk mempositifkan suku kuadratik (jangan lupa ==**balikkan arah tanda ketaksamaan**==):
> $$
> x^2 - 40x + 500 < 0
> $$
> Cari pembuat nol persamaan dengan faktorisasi:
> $$
> \begin{aligned}
> (x - 10)(x - 30) &= 0 \\
> x_1 = 10 \quad &\text{atau} \quad x_2 = 30
> \end{aligned}
> $$
> Lakukan uji area pada garis bilangan untuk tanda $< 0$ (mencari daerah negatif). Interval negatif berada di bagian dalam antara kedua angka kritis tersebut:
> $$
> 10 < x < 30
> $$
> Jadi, perusahaan akan mendapatkan keuntungan jika memproduksi barang dalam rentang **antara 11 unit sampai dengan 29 unit** (atau secara interval ditulis $10 < x < 30$).

2. Sebuah distributor memperkirakan bahwa keuntungan mingguan mereka (dalam jutaan rupiah) mengikuti formula fungsi kuadrat $\Pi(x) = -x^2 + 12x - 20$, dengan $x$ menyatakan banyaknya armada truk pengiriman yang beroperasi. Tentukan batasan jumlah armada truk $x$ yang harus dioperasikan agar distributor tersebut tidak mengalami kerugian (minimal mencapai titik impas)!

> [!success]- Klik untuk Lihat Jawaban 2
> Kondisi "tidak mengalami kerugian" memiliki makna matematis bahwa keuntungan harus bernilai positif atau minimal sama dengan nol (Titik Impas), sehingga model pertidaksamaannya adalah $\Pi(x) \ge 0$:
> $$
> -x^2 + 12x - 20 \ge 0
> $$
> Kalikan pertidaksamaan dengan $-1$ dan balikkan tanda relasinya:
> $$
> x^2 - 12x + 20 \le 0
> $$
> Faktorkan trinomial kuadrat tersebut untuk menemukan batas kritis wilayah:
> $$
> \begin{aligned}
> (x - 2)(x - 10) &= 0 \\
> x_1 = 2 \quad &\text{atau} \quad x_2 = 10
> \end{aligned}
> $$
> Karena tanda akhir pertidaksamaan adalah $\le 0$, maka daerah penyelesaian yang diambil adalah interval tertutup bagian dalam (daerah bernilai negatif pada garis bilangan):
> $$
> 2 \le x \le 10
> $$
> Jadi, jumlah armada truk pengiriman yang harus dioperasikan agar distributor tidak merugi adalah **mulai dari 2 armada hingga maksimal 10 armada truk**.

---

## Konsep Terkait

- [[Persamaan dan Pertidaksamaan Kuadrat/07 - Metode Interval dan Garis Bilangan untuk Pertidaksamaan]]
- [[Persamaan dan Pertidaksamaan Kuadrat/09 - Pemodelan Masalah Nyata Menggunakan Persamaan Kuadrat]]