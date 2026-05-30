---
title: Barisan Aritmetika
---

# Barisan Aritmetika

Barisan Aritmetika adalah barisan bilangan di mana selisih antara dua suku yang berurutan selalu bernilai **tetap** atau **konstan**. Selisih yang konstan ini disebut sebagai **beda** dan dinotasikan dengan huruf $b$.

Jika perubahan dari satu suku ke suku berikutnya melibatkan operasi penjumlahan atau pengurangan dengan bilangan yang sama, maka barisan tersebut dipastikan merupakan Barisan Aritmetika.

---

## 1. Rumus Menentukan Beda ($b$)
Beda dapat dicari dengan mengurangkan suatu suku dengan suku tepat sebelum suku tersebut:
$$b = U_2 - U_1 = U_3 - U_2 = U_n - U_{n-1}$$

- Jika $b > 0$, maka barisan dinamakan **Barisan Aritmetika Naik** (nilainya semakin besar).
- Jika $b < 0$, maka barisan dinamakan **Barisan Aritmetika Turun** (nilainya semakin kecil).

## 2. Rumus Suku Ke-$n$ ($U_n$)
Misalkan suku pertama ($U_1$) dinotasikan dengan huruf $a$, susunan barisannya menjadi:
- $U_1 = a$
- $U_2 = a + b$
- $U_3 = a + 2b$
- $U_4 = a + 3b$

Secara induktif, kita dapat menyimpulkan rumus umum suku ke-$n$ Barisan Aritmetika:
$$\bbox[10px,border:2px solid #2cc7b0]{U_n = a + (n - 1)b}$$

**Keterangan:**
- $U_n$ = Suku ke-$n$
- $a$ = Suku pertama ($U_1$)
- $b$ = Beda antar suku
- $n$ = Banyaknya suku ($n = 1, 2, 3, \dots$)

---

## Contoh Soal

Di sebuah aula pertunjukan, kursi penonton diatur membentuk barisan aritmetika. Baris pertama (paling depan) berisi 15 kursi, baris kedua berisi 19 kursi, baris ketiga berisi 23 kursi, dan begitu seterusnya. Jika aula tersebut memuat total 25 baris kursi, berapakah kapasitas kursi yang tersedia tepat pada baris paling belakang?

>[!Success]- Klik untuk Lihat Jawaban
> **Penyelesaian:**
> Dari deskripsi soal, kita dapat mengidentifikasi komponen barisan:
> - Suku pertama ($a$) = $15$
> - Suku kedua ($U_2$) = $19$
> - Beda ($b$) = $U_2 - U_1 = 19 - 15 = 4$
> - Banyaknya baris ($n$) = $25$
> 
> Ditanyakan: Suku ke-25 ($U_{25}$) untuk menghitung kapasitas baris paling belakang.
> 
> Terapkan rumus suku ke-$n$:
> $$U_n = a + (n - 1)b$$
> $$U_{25} = 15 + (25 - 1)4$$
> $$U_{25} = 15 + (24 \times 4)$$
> $$U_{25} = 15 + 96 = 111$$
> 
> Jadi, kapasitas kursi yang tersedia tepat pada baris paling belakang (baris ke-25) adalah $111$ kursi.

---

## Konsep Terkait
* [[Barisan dan Deret/01 - Definisi Barisan dan Pola Bilangan|01 - Definisi Barisan dan Pola Bilangan]]
* [[Barisan dan Deret/03 - Deret Aritmetika|03 - Deret Aritmetika]]