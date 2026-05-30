---
title: Deret Geometri Tak Hingga
---

# Deret Geometri Tak Hingga

Bagaimana jika proses penjumlahan suku-suku deret geometri dilakukan terus-menerus tanpa pernah berhenti? Kondisi inilah yang disebut sebagai **Deret Geometri Tak Hingga**, yang dinotasikan dengan lambang $S_{\infty}$. 

Berdasarkan nilai rasionya, deret tak hingga terbagi menjadi dua sifat ekstrim yang bertolak belakang: **Divergen** (menyebar tak terbatas) dan **Konvergen** (memusat menuju sebuah nilai konkrit).

---

## 1. Jenis-Jenis Deret Tak Hingga

### A. Deret Divergen ($r \le -1$ atau $r \ge 1$)
Deret ini nilainya terus membesar atau mengecil secara ekstrem hingga menuju tak hingga ($\infty$). Nilai jumlahnya tidak dapat ditentukan secara pasti:
$$S_{\infty} = \pm\infty$$

### B. Deret Konvergen ($-1 < r < 1$)
Deret ini unik karena meskipun suku yang dijumlahkan ada tak terhingga banyaknya, nilai total penjumlahannya akan **makin memusat dan berhenti di satu angka tertentu** karena suku-suku ujungnya mendekati nol.



Rumus umum untuk menghitung nilai jumlah Deret Geometri Tak Hingga Konvergen sangat sederhana:
$$\bbox[10px,border:2px solid #2cc7b0]{S_{\infty} = \frac{a}{1 - r}}$$

> [!TIP] Jembatan Keledai
> *Ingat saja rumusnya sebagai kata **"AIR"** ($a$ per $1$ minus $r$).*

---

## 2. Kasus Khusus: Lintasan Pantulan Bola
Aplikasi fisika yang paling sering menggunakan deret konvergen adalah perhitungan panjang seluruh lintasan bola yang memantul jatuh hingga berhenti. Jika bola dijatuhkan dari ketinggian $H$ dan memantul kembali dengan rasio $\frac{p}{q}$, kita bisa menggunakan rumus praktis ini:
$$\text{Total Lintasan} = H \cdot \left( \frac{q + p}{q - p} \right)$$

---

## Contoh Soal

Sebuah bola tenis dijatuhkan secara vertikal dari atas menara yang memiliki ketinggian 12 meter. Setiap kali menyentuh lantai lantai, bola memantul kembali ke atas dengan mencapai ketinggian $\frac{3}{4}$ dari ketinggian sebelumnya secara konstan. Tentukan total panjang seluruh lintasan yang dilalui bola tersebut hingga benar-benar berhenti memantul!

>[!Success]- Klik untuk Lihat Jawaban
> **Penyelesaian:**
> 
> **Cara 1: Menggunakan Konsep Deret Konvergen Sembari Memisahkan Lintasan**
> - **Lintasan Turun:** Dimulai dari ketinggian $a = 12$ dengan rasio $r = \frac{3}{4}$
>   $$S_{\infty \text{ (turun)}} = \frac{a}{1-r} = \frac{12}{1 - \frac{3}{4}} = \frac{12}{\frac{1}{4}} = 48\text{ meter}$$
> - **Lintasan Naik:** Dimulai setelah pantulan pertama, sehingga suku pertamanya berubah menjadi $a = 12 \cdot \frac{3}{4} = 9\text{ meter}$ dengan rasio tetap $r = \frac{3}{4}$
>   $$S_{\infty \text{ (naik)}} = \frac{a}{1-r} = \frac{9}{1 - \frac{3}{4}} = \frac{9}{\frac{1}{4}} = 36\text{ meter}$$
> - **Total Jarak Lintasan:** $S_{\infty \text{ (turun)}} + S_{\infty \text{ (naik)}} = 48 + 36 = 84\text{ meter}$.
> 
> **Cara 2: Menggunakan Rumus Cepat Pantulan Bola**
> - Ketinggian awal ($H$) = $12$
> - Rasio pantulan $\frac{p}{q} = \frac{3}{4} \implies (p = 3, \, q = 4)$
> 
> $$\text{Total Lintasan} = H \cdot \left( \frac{q + p}{q - p} \right)$$
> $$\text{Total Lintasan} = 12 \cdot \left( \frac{4 + 3}{4 - 3} \right) = 12 \cdot \left( \frac{7}{1} \right) = 84\text{ meter}$$
> 
> Kedua metode memberikan hasil yang sama konsisten. Jadi, total panjang lintasan bola hingga berhenti adalah **84 meter**.

---

## Konsep Terkait
* [[Barisan dan Deret/06 - Deret Geometri|06 - Deret Geometri]]
* [[Barisan dan Deret/09 - Aplikasi Barisan dan Deret Pertumbuhan dan Peluruhan]]