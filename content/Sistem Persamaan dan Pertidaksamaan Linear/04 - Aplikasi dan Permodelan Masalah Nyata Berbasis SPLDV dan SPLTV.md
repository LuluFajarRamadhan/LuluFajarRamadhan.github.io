---
title:
---
# Aplikasi dan Permodelan Masalah Nyata Berbasis SPLDV dan SPLTV

Di dunia nyata, sistem persamaan linear digunakan untuk memecahkan misteri harga satuan barang belanjaan, kombinasi umur, hingga alokasi budget keuangan. Kunci utama penyelesaian soal cerita aplikatif adalah ketepatan dalam menerjemahkan kalimat verbal menjadi model matematika.

Langkah-langkah sistematis memodelkan dan menyelesaikan soal cerita matematika:
* **Langkah 1: Membuat Permisalan Variabel.** Identifikasi objek-objek yang tidak diketahui nilainya di dalam soal cerita, lalu definisikan sebagai variabel acak (misal: $x, y$, atau $z$).
* **Langkah 2: Menyusun Model Matematika.** Terjemahkan hubungan antar-objek pada kalimat cerita menjadi bentuk sistem persamaan linear yang terstruktur.
* **Langkah 3: Menyelesaikan Sistem Persamaan.** Selesaikan model matematika yang telah terbentuk menggunakan metode aljabar (eliminasi-substitusi) untuk mencari nilai setiap variabel.
* **Langkah 4: Menarik Kesimpulan.** Kembalikan nilai variabel yang diperoleh ke dalam konteks pertanyaan asli pada soal cerita.

---
## Contoh Soal
Di sebuah tempat wisata, harga tiket masuk untuk 1 orang dewasa, 2 anak-anak, dan 1 lansia adalah Rp100.000,00. Diketahui harga tiket 1 orang dewasa sama dengan dua kali harga tiket anak-anak. Jika harga tiket untuk 3 orang dewasa dan 2 lansia adalah Rp170.000,00, berapakah harga tiket masuk untuk masing-masing kategori?

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Membuat Permisalan Variabel.**
> * Misalkan harga tiket 1 orang dewasa = $x$
> * Misalkan harga tiket 1 anak-anak = $y$
> * Misalkan harga tiket 1 lansia = $z$
> 
> **Langkah 2: Menyusun Model Matematika.**
> Berdasarkan informasi pada soal cerita, kita dapat menyusun sistem persamaan berikut:
> 1. Tiket 1 dewasa, 2 anak, 1 lansia: $x + 2y + z = 100.000 \quad \dots \text{(Pers 1)}$
> 2. Tiket dewasa dua kali tiket anak: $x = 2y \implies y = \frac{1}{2}x \quad \dots \text{(Pers 2)}$
> 3. Tiket 3 dewasa dan 2 lansia: $3x + 2z = 170.000 \quad \dots \text{(Pers 3)}$
> 
> **Langkah 3: Menyelesaikan Sistem Persamaan.**
> * Substitusikan Persamaan 2 ($2y = x$) ke dalam Persamaan 1 untuk mengeliminasi variabel $y$:
>   $$
>   \begin{aligned} x + (2y) + z &= 100.000 \\ x + x + z &= 100.000 \\ 2x + z &= 100.000 \implies z = 100.000 - 2x \quad \dots \text{(Pers 4)} \end{aligned}
>   $$
> * Substitusikan Persamaan 4 ke dalam Persamaan 3 untuk mencari nilai $x$:
>   $$
>   \begin{aligned} 3x + 2z &= 170.000 \\ 3x + 2(100.000 - 2x) &= 170.000 \\ 3x + 200.000 - 4x &= 170.000 \\ -x &= 170.000 - 200.000 \\ -x &= -30.000 \implies x = 30.000 \end{aligned}
>   $$
> * Cari nilai $y$ menggunakan Persamaan 2:
>   $$y = \frac{1}{2}(30.000) = 15.000$$
> * Cari nilai $z$ menggunakan Persamaan 4:
>   $$z = 100.000 - 2(30.000) = 100.000 - 60.000 = 40.000$$
> 
> **Langkah 4: Menarik Kesimpulan.**
> Berdasarkan perhitungan aljabar di atas, nilai yang diperoleh dikembalikan ke konteks objek nyata:
> * Harga tiket masuk 1 orang dewasa ($x$) adalah **Rp30.000,00**.
> * Harga tiket masuk 1 anak-anak ($y$) adalah **Rp15.000,00**.
> * Harga tiket masuk 1 lansia ($z$) adalah **Rp40.000,00**.

---

## Konsep Terkait

- [[Sistem Persamaan dan Pertidaksamaan Linear/02 - Metode Penyelesaian SPLDV Grafik, Substitusi, dan Eliminasi]]
- [[Sistem Persamaan dan Pertidaksamaan Linear/03 - Sistem Persamaan Linear Tiga Variabel (SPLTV)]]
- [[Sistem Persamaan dan Pertidaksamaan Linear/05 - Pertidaksamaan Linear Satu dan Dua Variabel]]