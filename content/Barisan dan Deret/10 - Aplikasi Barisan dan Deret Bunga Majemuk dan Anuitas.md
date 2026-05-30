
---
title: Aplikasi Barisan dan Deret Bunga Majemuk dan Anuitas
---

# Aplikasi Keuangan: Bunga Majemuk dan Anuitas

Di sektor finansial, konsep akumulasi deret matematika diaplikasikan secara intensif untuk menghitung nilai mata uang terhadap waktu (*time value of money*). Dua pilar utama yang mengontrol transaksi perbankan modern adalah **Bunga Majemuk** dan sistem pelunasan **Anuitas**.

---

## 1. Bunga Majemuk (*Compound Interest*)

Berbeda dengan bunga tunggal yang dihitung konstan dari modal awal (mengikuti barisan aritmetika), bunga majemuk adalah sistem bunga yang dihitung berdasarkan modal akhir periode sebelumnya. Secara sederhana, sistem ini dikenal sebagai "bunga berbunga".

### Rumus Umum Modal Akhir:
$$\bbox[10px,border:2px solid #2cc7b0]{M_n = M_0(1 + i)^n}$$

Jika pemberian bunga dilakukan beberapa kali dalam setahun (misal bulanan atau triwulanan):
$$M_n = M_0\left(1 + \frac{i}{m}\right)^{n \cdot m}$$
*(di mana $m$ adalah frekuensi pembagian bunga dalam satu tahun).*

---

## 2. Sistem Anuitas (*Annuity*)

Anuitas adalah rangkaian pembayaran atau penerimaan sejumlah uang dalam jumlah yang **sama besar** pada setiap interval waktu tertentu. Pada pelunasan kredit, setiap angsuran bulanan (Anuitas = $A$) terdiri dari dua komponen yang dinamis: **Angsuran Modal ($a_n$)** dan **Bunga ($b_n$)**.

$$A = a_n + b_n$$



- **Karakteristik:** Seiring berjalannya waktu, porsi bunga ($b_n$) akan semakin mengecil, sementara porsi angsuran pokok ($a_n$) akan semakin membesar.
- **Formula Menghitung Nilai Anuitas ($A$):**
  $$A = \frac{M_0 \cdot i}{1 - (1 + i)^{-n}}$$

---

## Contoh Soal

Seseorang menyimpan uang di bank sebesar Rp10.000.000 dengan sistem bunga majemuk sebesar $5\%$ per tahun. Jika uang tersebut didiamkan tanpa ada transaksi penarikan maupun biaya administrasi, tentukan total saldo tabungan orang tersebut di akhir tahun ke-2!

>[!Success]- Klik untuk Lihat Jawaban
> **Penyelesaian:**
> Diketahui data keuangan:
> - Modal awal ($M_0$) = $10.000.000$
> - Suku bunga per tahun ($i$) = $5\% = 0,05$
> - Jangka waktu ($n$) = $2 \text{ tahun}$
> 
> Terapkan rumus bunga majemuk:
> $$M_n = M_0(1 + i)^n$$
> $$M_2 = 10.000.000 \times (1 + 0,05)^2$$
> $$M_2 = 10.000.000 \times (1,05)^2$$
> $$M_2 = 10.000.000 \times 1,1025$$
> $$M_2 = 11.025.000$$
> 
> Jadi, total akumulasi saldo tabungan nasabah tersebut di akhir tahun ke-2 adalah **Rp11.025.000**.

---

## Konsep Terkait
* [[Barisan dan Deret/06 - Deret Geometri|06 - Deret Geometri]]
* [[Barisan dan Deret/09 - Aplikasi Barisan dan Deret Pertumbuhan dan Peluruhan|09 - Aplikasi Barisan dan Deret Pertumbuhan dan Peluruhan]]