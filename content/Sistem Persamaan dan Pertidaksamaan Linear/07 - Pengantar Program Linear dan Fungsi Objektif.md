---
title:
---
# Pengantar Program Linear dan Fungsi Objektif

Program linear adalah suatu metode optimasi matematika aljabar yang digunakan untuk ==**mencari nilai maksimum atau nilai minimum**== dari suatu fungsi linear yang tunduk pada serangkaian batasan keterbatasan (kendala) berbentuk sistem pertidaksamaan linear.

Komponen penyusun Program Linear meliputi:
1. **Fungsi Kendala:** Sistem pertidaksamaan linear yang membatasi ruang gerak alokasi variabel (mewakili keterbatasan bahan baku, modal, atau waktu di dunia nyata).
2. **Fungsi Objektif / Fungsi Sasaran:** Fungsi linear yang ingin dioptimalkan nilai keluarannya (biasanya mewakili maksimasi keuntungan atau minimasi biaya produksi). Fungsi ini disimbolkan dengan:
$$
f(x, y) = ax + by
$$

---
## Contoh Soal
Sebuah toko kue memproduksi kue jenis $A$ (membutuhkan 2 unit tepung) dan kue jenis $B$ (membutuhkan 1 unit tepung). Total persediaan tepung toko tersebut hanya ada 20 unit. Jika keuntungan dari penjualan setiap kue jenis $A$ adalah Rp3.000,00 dan kue jenis $B$ adalah Rp2.000,00, susunlah model fungsi kendala tepung serta fungsi objektif dari masalah program linear tersebut!

> [!success]- Klik untuk Lihat Jawaban
> Kita terjemahkan informasi soal cerita ke dalam model matematika program linear:
> * **Langkah 1: Permisalan Variabel.**
>   - Misalkan jumlah kue jenis $A$ yang diproduksi = $x$
>   - Misalkan jumlah kue jenis $B$ yang diproduksi = $y$
> 
> * **Langkah 2: Menyusun Model Matematika Fungsi Kendala.**
>   Kebutuhan tepung tidak boleh melebihi persediaan yang ada (menggunakan tanda $\le$):
>   $$2x + y \le 20$$
>   Karena jumlah kue tidak mungkin bernilai negatif, tambahkan syarat mutlak: $x \ge 0$ dan $y \ge 0$.
> 
> * **Langkah 3: Menyusun Model Fungsi Objektif.**
>   Fungsi objektif disusun berdasarkan target total keuntungan penjualan yang ingin dimaksimalkan:
>   $$f(x, y) = 3.000x + 2.000y$$
> 
> Jadi, fungsi kendala utamanya adalah $2x + y \le 20$ (dengan $x,y \ge 0$) dan fungsi objektif sasarannya adalah $f(x, y) = 3.000x + 2.000y$.

---

## Konsep Terkait

- [[Sistem Persamaan dan Pertidaksamaan Linear/06 - Menentukan Daerah Penyelesaian (DP) Sistem Pertidaksamaan Linear]]
- [[Sistem Persamaan dan Pertidaksamaan Linear/08 - Menentukan Nilai Optimum Menggunakan Metode Titik Pojok]]