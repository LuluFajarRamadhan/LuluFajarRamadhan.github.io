---
title:
---
# Pemodelan Masalah Nyata Menggunakan Persamaan Kuadrat

Dalam kehidupan nyata, banyak fenomena fisik dan geometris yang tidak bergerak secara linear, melainkan melibatkan perkalian antar-variabel yang menghasilkan ==**Hubungan Kuadratik**==. Pemodelan matematika mengubah narasi masalah kontekstual menjadi bentuk persamaan kuadrat baku agar solusinya dapat dihitung secara presisi.

## Langkah-Langkah Sistematis Pemodelan
Untuk menyelesaikan soal cerita atau masalah nyata menggunakan instrumen persamaan kuadrat, terapkan tahapan operasional berikut:

1. **Identifikasi dan Tetapkan Variabel:** Pilih satu besaran yang belum diketahui untuk dijadikan variabel utama (misalkan $x$). Ekspresikan besaran lain dalam bentuk variabel $x$ tersebut berdasarkan hubungan yang ada di dalam soal.
2. **Susun Persamaan Aljabar:** Terjemahkan informasi atau kondisi batas pada soal (seperti luas, total biaya, atau jarak keliling) menjadi sebuah persamaan matematika.
3. **Ubah ke Bentuk Umum:** Lakukan operasi aljabar untuk menata ulang suku-suku hingga membentuk format standar:
$$
ax^2 + bx + c = 0
$$
4. **Selesaikan Persamaan:** Cari akar-akar persamaan ($x_1$ dan $x_2$) menggunakan metode faktorisasi, kuadrat sempurna, atau rumus ABC.
5. **Validasi Solusi (Analisis Kontekstual):** Periksa kembali akar-akar yang didapat terhadap logika nyata. Misalkan, nilai panjang, lebar, atau waktu ==**tidak pernah bernilai negatif ($x \ge 0$)**==. Gugurkan akar yang tidak memenuhi logis alamiah tersebut.

---
## Contoh Soal

1. Sebidang tanah berbentuk persegi panjang memiliki panjang yang berukuran 4 meter lebih dari lebarnya. Jika luas tanah tersebut adalah 96 meter persegi, tentukan ukuran panjang dan lebar tanah sebenarnya!

> [!success]- Klik untuk Lihat Jawaban 1
> Mari lakukan prosedur pemodelan aljabar:
> * **Langkah 1:** Misalkan lebar tanah = $x$ meter. Karena panjangnya 4 meter lebih dari lebarnya, maka panjang tanah = $x + 4$ meter.
> * **Langkah 2:** Rumus luas persegi panjang adalah $\text{panjang} \times \text{lebar} = \text{Luas}$:
> $$
> (x + 4) \cdot x = 96
> $$
> * **Langkah 3:** Jabarkan dan ubah ke bentuk umum persamaan kuadrat:
> $$
> \begin{aligned}
> x^2 + 4x &= 96 \\
> x^2 + 4x - 96 &= 0
> \end{aligned}
> $$
> * **Langkah 4:** Selesaikan menggunakan metode faktorisasi. Cari dua angka yang jika dikali menghasilkan $-96$ dan jika dijumlahkan menghasilkan $4$. Angka yang memenuhi adalah $12$ dan $-8$:
> $$
> \begin{aligned}
> (x + 12)(x - 8) &= 0 \\
> x_1 = -12 \quad &\text{atau} \quad x_2 = 8
> \end{aligned}
> $$
> * **Langkah 5:** Validasi kontekstual fisis. Karena lebar persegi panjang tidak boleh bernilai negatif, maka nilai $x = -12$ digugurkan (tidak memenuhi). Kita ambil nilai $x = 8$.
>   * Lebar tanah = $x = 8$ meter.
>   * Panjang tanah = $x + 4 = 8 + 4 = 12$ meter.
> Jadi, ukuran tanah tersebut adalah **panjang 12 meter dan lebar 8 meter**.

2. Sebuah peluru kendali ditembakkan tegak lurus ke atas. Hubungan antara ketinggian peluru ($h$ dalam meter) dan waktu tempuh ($t$ dalam detik) dinyatakan oleh rumus matematika $h = 60t - 5t^2$. Hitunglah pada detik ke berapa peluru berada pada ketinggian tepat 160 meter di atas permukaan tanah!

> [!success]- Klik untuk Lihat Jawaban 2
> Masukkan kondisi batas ketinggian yang diinginkan ($h = 160$) ke dalam rumus fungsi:
> $$
> \begin{aligned}
> 60t - 5t^2 &= 160 \\
> -5t^2 + 60t - 160 &= 0
> \end{aligned}
> $$
> Sederhanakan persamaan dengan membagi seluruh suku dengan $-5$ agar koefisien depan menjadi positif:
> $$
> t^2 - 12t + 32 = 0
> $$
> Faktorkan persamaan trinomial tersebut:
> $$
> \begin{aligned}
> (t - 4)(t - 8) &= 0 \\
> t_1 = 4 \quad &\text{atau} \quad t_2 = 8
> \end{aligned}
> $$
> **Analisis Kontekstual:** Kedua nilai $t$ bernilai positif, yang berarti keduanya valid. 
> * Pada $t = 4$ detik, peluru mencapai ketinggian 160 meter saat sedang bergerak **naik ke atas**.
> * Pada $t = 8$ detik, peluru kembali berada di ketinggian 160 meter saat sedang bergerak **turun ke bawah** akibat gaya gravitasi.
> Jadi, peluru berada pada ketinggian 160 meter pada detik ke-4 dan detik ke-8.

---

## Konsep Terkait

- [[Persamaan dan Pertidaksamaan Kuadrat/02 - Metode Penyelesaian Persamaan Kuadrat (Faktorisasi dan Kuadrat Sempurna)]]
- [[Persamaan dan Pertidaksamaan Kuadrat/10 - Aplikasi Pertidaksamaan Kuadrat dalam Analisis Batas Bisnis]]