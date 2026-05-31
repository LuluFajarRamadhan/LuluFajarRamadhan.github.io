---
title:
---
# Ringkasan Sistem Persamaan dan Pertidaksamaan Linear

Bab ini menjembatani kemampuan pemodelan matematika aljabar linear dari pernyataan kalimat cerita menuju pencarian solusi eksak atau penentuan nilai optimal batas keuntungan. Berikut rangkuman konsep penting yang wajib dikuasai:

### 1. Klasifikasi Sistem Persamaan vs Pertidaksamaan
* **Sistem Persamaan (SPLDV & SPLTV):** Menggunakan tanda hubung kesamaan ($=$). Solusinya bersifat eksak tunggal berupa pasangan titik koordinat $(x, y)$ atau $(x, y, z)$ yang dicari lewat reduksi bertahap metode campuran **eliminasi-substitusi**.
* **Sistem Pertidaksamaan (PtLDV):** Menggunakan tanda hubung ketaksamaan ($<, >, \le, \ge$). Solusinya bersifat wilayah area luas berupa **Daerah Penyelesaian (DP)** arsiran grafik Kartesius yang ditentukan lewat batas garis lurus dan uji titik koordinat acak.

### 2. Intisari Alur Program Linear (Optimasi)
Program linear memanfaatkan Daerah Penyelesaian (DP) kendala sistem pertidaksamaan untuk mencari nilai optimum tertinggi atau terendah dari fungsi sasaran objektif $f(x,y) = ax+by$. Berdasarkan teorema optimasi, nilai akhir terbaik tersebut pasti melekat kuat pada **titik-titik pojok (sudut ekstrem)** terluar yang mengunci wilayah arsiran tersebut.

---
## Contoh Soal Campuran
Sebuah sistem pertidaksamaan linear dua variabel membatasi daerah penyelesaian berbentuk segitiga dengan koordinat titik-titik sudutnya adalah $(0,0)$, $(4,0)$, dan $(0,3)$. Jika fungsi objektif sasaran yang ingin dimaksimalkan adalah $f(x,y) = 2x + 5y$, tentukan nilai maksimum dari sistem tersebut!

> [!success]- Klik untuk Lihat Jawaban
> Karena seluruh titik pojok pembatas wilayah Daerah Penyelesaian (DP) sudah diketahui secara eksplisit pada soal, kita dapat melewatkan penggambaran grafik dan langsung melakukan substitusi titik pojok ke fungsi objektif $f(x,y) = 2x + 5y$:
> 
> * **Uji Titik Sudut 1 $(0,0)$:**
>   $$f(0,0) = 2(0) + 5(0) = 0$$
> * **Uji Titik Sudut 2 $(4,0)$:**
>   $$f(4,0) = 2(4) + 5(0) = 8$$
> * **Uji Titik Sudut 3 $(0,3)$:**
>   $$f(0,3) = 2(0) + 5(3) = 15$$
> 
> Bandingkan hasil akhir ketiga perhitungan di atas. Nilai keluaran terbesar didapatkan pada uji titik ketiga dengan nilai sebesar 15.
> 
> Jadi, nilai maksimum dari model gabungan program linear campuran tersebut adalah **15**.

---

## Konsep Terkait

- [[Sistem Persamaan dan Pertidaksamaan Linear/00 - Peta Konsep Sistem Persamaan dan Pertidaksamaan Linear]]
- [[Sistem Persamaan Linear/02 - Metode Penyelesaian SPLDV Grafik, Substitusi, dan Eliminasi]]
- [[Sistem Persamaan dan Pertidaksamaan Linear/08 - Menentukan Nilai Optimum Menggunakan Metode Titik Pojok]]