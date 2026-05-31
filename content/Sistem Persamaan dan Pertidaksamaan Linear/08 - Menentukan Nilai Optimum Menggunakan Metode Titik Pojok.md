---
title:
---
# Menentukan Nilai Optimum Menggunakan Metode Titik Pojok

Metode Titik Pojok (Titik Ekstrem) didasarkan pada teorema program linear yang menyatakan bahwa ==**nilai optimum (maksimum atau minimum) dari suatu fungsi objektif pasti terletak pada titik-titik sudut (pojok)**== yang membatasi Daerah Penyelesaian (DP) tersebut.

Langkah-langkah sistematis menentukan nilai optimum menggunakan metode titik pojok:
* **Langkah 1: Membuat Permisalan Variabel.** Identifikasi dan definisikan objek tidak diketahui sebagai variabel $x$ dan $y$.
* **Langkah 2: Menyusun Model Matematika.** Susun sistem pertidaksamaan fungsi kendala serta fungsi objektif $f(x,y) = ax + by$.
* **Langkah 3: Menyelesaikan Sistem Persamaan (Mencari Titik Pojok).** Gambarkan daerah penyelesaian pada grafik Kartesius. Cari koordinat seluruh titik pojok wilayah tersebut. Jika ada titik pojok berupa perpotongan dua garis, cari koordinatnya menggunakan bantuan eliminasi-substitusi.
* **Langkah 4: Menarik Kesimpulan.** Substitusikan koordinat semua titik pojok tersebut ke dalam fungsi objektif. Nilai terbesar menjadi nilai maksimum, dan nilai terkecil menjadi nilai minimum.

---
## Contoh Soal
Tentukan nilai maksimum dari fungsi objektif $f(x, y) = 5x + 4y$ yang dibatasi oleh daerah kendala sistem pertidaksamaan $x + y \le 5$, $x \ge 0$, dan $y \ge 0$!

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1 & 2: Identifikasi model matematika.**
> Fungsi kendala dan fungsi objektif sudah terdefinisi secara matematis pada teks soal.
> 
> **Langkah 3: Mencari koordinat seluruh titik pojok.**
> Garis pembatas $x + y = 5$ memotong sumbu koordinat di titik $(5,0)$ dan $(0,5)$. Karena dibatasi oleh syarat $x \ge 0, y \ge 0$ dengan arah arsiran ke bawah (menuju $(0,0)$), maka wilayah DP berbentuk segitiga tegak dengan tiga buah titik pojok utama, yaitu:
> 1. Titik pusat asal: $A(0, 0)$
> 2. Titik potong sumbu $X$: $B(5, 0)$
> 3. Titik potong sumbu $Y$: $C(0, 5)$
> 
> **Langkah 4: Substitusi titik pojok ke fungsi objektif $f(x, y) = 5x + 4y$ dan menarik kesimpulan.**
> * Uji Titik $A(0, 0) \rightarrow f(0, 0) = 5(0) + 4(0) = 0$
> * Uji Titik $B(5, 0) \rightarrow f(5, 0) = 5(5) + 4(0) = 25$
> * Uji Titik $C(0, 5) \rightarrow f(0, 5) = 5(0) + 4(5) = 20$
> 
> Perhatikan keluaran hasil uji nilai di atas. Nilai terbesar yang dihasilkan dari proses substitusi titik sudut tersebut adalah 25.
> 
> Jadi, nilai maksimum dari fungsi objektif tersebut adalah **25** yang tercapai tepat pada koordinat titik pojok $(5, 0)$.

---

## Konsep Terkait

- [[Sistem Persamaan dan Pertidaksamaan Linear/06 - Menentukan Daerah Penyelesaian (DP) Sistem Pertidaksamaan Linear]]
- [[Sistem Persamaan dan Pertidaksamaan Linear/07 - Pengantar Program Linear dan Fungsi Objektif]]
- [[Sistem Persamaan dan Pertidaksamaan Linear/Ringkasan Sistem Persamaan dan Pertidaksamaan Linear]]