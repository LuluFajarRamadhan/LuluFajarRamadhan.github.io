---
title: Barisan Geometri
---

# Barisan Geometri

Jika pada barisan aritmetika perubahan antar suku terjadi karena operasi penjumlahan atau pengurangan, maka pada **Barisan Geometri** perubahan dari satu suku ke suku berikutnya terjadi karena operasi **perkalian atau pembagian** dengan suatu bilangan tetap. Bilangan pengali yang konstan ini disebut sebagai **rasio** dan dinotasikan dengan huruf $r$.

---

## 1. Rumus Menentukan Rasio ($r$)
Rasio merupakan hasil perbandingan atau pembagian antara suatu suku dengan suku tepat sebelumnya:
$$r = \frac{U_2}{U_1} = \frac{U_3}{U_2} = \frac{U_n}{U_{n-1}}$$

- Jika $r > 1$, maka nilai suku-suku barisan akan semakin besar (**Barisan Geometri Naik/Pertumbuhan**).
- Jika $0 < r < 1$, maka nilai suku-suku barisan akan semakin kecil (**Barisan Geometri Turun/Peluruhan**).

## 2. Rumus Suku Ke-$n$ ($U_n$)
Misalkan suku pertama ($U_1$) dinotasikan dengan huruf $a$, susunan suku-sukunya dapat kita bedah sebagai berikut:
- $U_1 = a$
- $U_2 = a \cdot r$
- $U_3 = a \cdot r^2$
- $U_4 = a \cdot r^3$

Secara induktif, kita dapat menyimpulkan rumus umum suku ke-$n$ Barisan Geometri:
$$\bbox[10px,border:2px solid #2cc7b0]{U_n = a \cdot r^{n-1}}$$

**Keterangan:**
- $U_n$ = Suku ke-$n$
- $a$ = Suku pertama
- $r$ = Rasio pengali
- $n$ = Banyaknya suku ($n = 1, 2, 3, \dots$)

---

## Contoh Soal

Sebuah laboratorium biologi mengamati pertumbuhan populasi bakteri pada suatu media kultur. Pada awal pengamatan (jam ke-0), terdapat 10 bakteri. Jika setiap jam setiap bakteri membelah diri menjadi 2 secara konstan, berapakah jumlah total bakteri yang terbentuk setelah waktu berjalan selama 6 jam?

>[!Success]- Klik untuk Lihat Jawaban
> **Penyelesaian:**
> Mari kita petakan komponen waktu dan pertumbuhan bakteri ke dalam barisan geometri:
> - Kondisi awal (Jam ke-0) = $a = 10$
> - Rasio pembelahan diri ($r$) = $2$
> - Hati-hati dengan penentuan $n$: 
>   - Jam ke-0 ($U_1$) = $10$
>   - Jam ke-1 ($U_2$) = $10 \cdot 2^1$
>   - Jam ke-6 ($U_7$) $\implies n = 7$
> 
> Terapkan rumus suku ke-$n$:
> $$U_n = a \cdot r^{n-1}}$$
> $$U_7 = 10 \cdot 2^{7-1}$$
> $$U_7 = 10 \cdot 2^6$$
> $$U_7 = 10 \cdot 64 = 640$$
> 
> Jadi, jumlah bakteri setelah berjalan selama 6 jam adalah **640 bakteri**.

---

## Konsep Terkait
* [[Barisan dan Deret/01 - Definisi Barisan dan Pola Bilangan|01 - Definisi Barisan dan Pola Bilangan]]
* [[Barisan dan Deret/06 - Deret Geometri|06 - Deret Geometri]]