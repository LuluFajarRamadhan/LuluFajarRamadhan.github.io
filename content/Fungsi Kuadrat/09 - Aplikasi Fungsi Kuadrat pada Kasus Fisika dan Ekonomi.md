---
title:
---
# Aplikasi Fungsi Kuadrat pada Kasus Fisika dan Ekonomi

Fungsi kuadrat merupakan alat pemodelan yang sangat vital pada bidang sains fisik (mekanika) dan ilmu terapan seperti manajemen ekonomi. Struktur nonlinear dari kurva parabola mampu menangkap realitas dinamika alam dan pasar secara akurat.

### 1. Implementasi pada Sektor Fisika (Gerak Parabola)
Setiap objek yang dilemparkan ke udara dengan sudut elevasi tertentu akan mengalami ==**Gerak Peluru (Gerak Parabola)**== akibat pengaruh gaya gravitasi bumi. Persamaan ketinggian fungsi terhadap waktu ($h(t)$) selalu membentuk fungsi kuadrat dengan koefisien kuadratik negatif ($a < 0$):
$$
h(t) = -\frac{1}{2}gt^2 + v_0t + h_0
$$
Melalui formula ini, waktu untuk mencapai ketinggian maksimum serta tinggi maksimum absolut objek dapat dihitung secara presisi menggunakan konsep titik ekstrem kurva.

### 2. Implementasi pada Sektor Ekonomi (Analisis Keuntungan)
Dalam dunia bisnis, hubungan antara harga barang dengan jumlah permintaan sering kali tidak linear. Fungsi Pendapatan Total ($R$) diperoleh dari hasil perkalian antara harga per unit ($P$) dengan jumlah barang yang terjual ($Q$). Jika fungsi harga bersifat linear, maka fungsi pendapatan akan berbentuk ==**Kurva Kuadrat Terbalik**==.
* Titik puncak kurva mewakili target operasional perusahaan untuk mencapai keuntungan atau pendapatan maksimal sebelum terjadi kejenuhan pasar.

---
## Contoh Soal

1. Sebuah peluru ditembakkan vertikal ke atas. Ketinggian peluru (dalam meter) setelah $t$ detik dinyatakan oleh fungsi $h(t) = 40t - 5t^2$. Tentukan waktu yang dibutuhkan peluru untuk mencapai tinggi maksimum!

> [!success]- Klik untuk Lihat Jawaban 1
> Fungsi ketinggian peluru adalah $h(t) = -5t^2 + 40t$. Ini adalah fungsi kuadrat dengan variabel bebas berupa waktu ($t$).
> * Identifikasi komponen koefisien: $a = -5, b = 40$.
> * Waktu untuk mencapai titik tertinggi identik dengan mencari nilai sumbu simetri ($t_p$):
>   $$
>   \begin{aligned}
>   t_p &= -\frac{b}{2a} \\
>   t_p &= -\frac{40}{2(-5)} \\
>   t_p &= \frac{-40}{-10} = 4
>   \end{aligned}
>   $$
>   Jadi, peluru tersebut membutuhkan waktu **4 detik** untuk mencapai posisi ketinggian maksimumnya.

2. Sebuah perusahaan memodelkan keuntungan total hariannya (dalam ribuan rupiah) melalui fungsi $U(x) = -x^2 + 10x - 12$, dengan $x$ menyatakan banyaknya unit barang yang diproduksi. Hitunglah keuntungan maksimum yang bisa diraup perusahaan tersebut!

> [!success]- Klik untuk Lihat Jawaban 2
> Fungsi keuntungan adalah $U(x) = -x^2 + 10x - 12$, dengan koefisien $a = -1, b = 10, c = -12$.
> * **Langkah 1:** Cari jumlah produksi optimum ($x_p$) agar profit maksimal:
>   $$x_p = -\frac{10}{2(-1)} = \frac{-10}{-2} = 5 \text{ unit}$$
> * **Langkah 2:** Hitung nilai keuntungan maksimum dengan mensubstitusikan $x_p = 5$ ke dalam fungsi $U(x)$:
>   $$
>   \begin{aligned}
>   U(5) &= -(5)^2 + 10(5) - 12 \\
>   &= -25 + 50 - 12 \\
>   &= 13
>   \end{aligned}
>   $$
>   Karena unit dalam ribuan rupiah, maka keuntungan maksimumnya adalah $13 \times 1.000 = 13.000$. Jadi, keuntungan maksimum harian perusahaan adalah **Rp13.000,00**.

---

## Konsep Terkait

- [[Fungsi Kuadrat/03 - Karakteristik Titik Puncak dan Sumbu Simetri]]
- [[Fungsi Kuadrat/08 - Pemodelan Masalah Nilai Maksimum dan Minimum]]