---
title:
---
# Menentukan Daerah Penyelesaian (DP) Sistem Pertidaksamaan Linear

Sistem Pertidaksamaan Linear Dua Variabel adalah gabungan dari dua atau lebih pertidaksamaan linear dua variabel yang grafiknya digabungkan pada satu bidang Kartesius. Daerah Penyelesaian (DP) dari sistem ini adalah ==**daerah irisan yang memenuhi seluruh syarat pertidaksamaan secara serentak.**==

Langkah-langkah sistematis menentukan Daerah Penyelesaian (DP):
1. **Gambar Garis Pembatas:** Ubah tanda ketaksamaan menjadi persamaan ($=$), tentukan titik potong sumbu $X$ (saat $y=0$) dan sumbu $Y$ (saat $x=0$), lalu tarik garis lurus.
   * *Catatan:* Gunakan **garis tegas** jika tanda memuat komponen sama dengan ($\le, \ge$) dan gunakan **garis putus-putus** jika tanda tidak memuat komponen sama dengan ($<, >$).
2. **Uji Titik (Arah Arsiran):** Ambil sebarang titik uji di luar garis (paling mudah titik $(0,0)$), lalu substitusikan ke dalam pertidaksamaan. Jika benar, arsir wilayah yang memuat titik $(0,0)$. Jika salah, arsir wilayah sebaliknya.

---
## Contoh Soal
Gambarkan dan tentukan daerah penyelesaian dari sistem pertidaksamaan berikut pada bidang Kartesius untuk nilai $x \ge 0$ dan $y \ge 0$:
$$
\begin{cases} x + y \le 4 \\ 2x + y \ge 6 \end{cases}
$$

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Mencari titik potong masing-masing garis pembatas.**
> * Garis $x + y = 4 \rightarrow$ memotong sumbu $Y$ di $(0,4)$ dan memotong sumbu $X$ di $(4,0)$.
> * Garis $2x + y = 6 \rightarrow$ memotong sumbu $Y$ di $(0,6)$ dan memotong sumbu $X$ di $(3,0)$.
> 
> **Langkah 2: Melakukan uji titik $(0,0)$ untuk menentukan arah arsiran.**
> * Uji pada $x + y \le 4 \rightarrow 0 + 0 \le 4 \implies 0 \le 4$ ==**(Benar)**==. Maka arsiran mengarah mendekati titik $(0,0)$ atau ke arah bawah garis.
> * Uji pada $2x + y \ge 6 \rightarrow 2(0) + 0 \ge 6 \implies 0 \ge 6$ ==**(Salah)**==. Maka arsiran bergerak menjauhi titik $(0,0)$ atau ke arah atas garis.
> 
> Karena dibatasi oleh syarat kuadran I ($x \ge 0, y \ge 0$), maka Daerah Penyelesaian (DP) dari sistem tersebut adalah ==**wilayah segitiga di kuadran pertama yang berada di bawah garis $x+y=4$ sekaligus berada di atas garis $2x+y=6$.**==

---

## Konsep Terkait

- [[Sistem Persamaan dan Pertidaksamaan Linear/05 - Pertidaksamaan Linear Satu dan Dua Variabel]]
- [[Sistem Persamaan dan Pertidaksamaan Linear/07 - Pengantar Program Linear dan Fungsi Objektif]]