---
title:
---
# Permutasi Khusus Beberapa Unsur Sama dan Siklis

Dalam perkembangannya, terdapat kondisi khusus di mana objek yang akan disusun memiliki karakteristik tertentu, seperti adanya kembaran objek atau disusun dalam formasi melingkar.

### 1. Permutasi dengan Beberapa Unsur yang Sama
Jika kita ingin menyusun objek yang di dalamnya terdapat ==**beberapa unsur yang identik atau sama**==, kita harus membagi total permutasi dengan faktorial dari unsur-unsur yang sama tersebut agar tidak terjadi duplikasi perhitungan susunan.
Formulanya adalah:
$$
P = \frac{n!}{k_1! \times k_2! \times \dots \times k_m!}
$$
*Dimana $n$ adalah total seluruh unsur, dan $k_1, k_2, \dots$ adalah jumlah unsur-unsur yang sama.*

### 2. Permutasi Siklis (Susunan Melingkar)
Permutasi siklis digunakan untuk menghitung banyaknya susunan objek yang ==**ditempatkan secara melingkar**== (misalnya duduk mengelilingi meja bundar atau membuat gelang manik-manik). Karena bentuknya melingkar, harus ada 1 objek yang dikunci sebagai titik acuan tetap.
Formulanya adalah:
$$
P_{\text{siklis}} = (n - 1)!
$$

---
## Contoh Soal
1. Berapa banyak susunan kata berbeda yang dapat dibentuk dari huruf-huruf pada kata **"MAMA"**?
2. Ada 5 orang menteri yang mengadakan rapat dinas dan duduk mengelilingi sebuah meja bundar. Berapa banyak susunan posisi duduk yang mungkin terjadi?

> [!success]- Klik untuk Lihat Jawaban
> Mari kita selesaikan kedua kasus permutasi khusus ini:
> 
> **Jawaban Soal 1 (Unsur Sama):**
> * Total huruf ($n$) = 4
> * Unsur yang sama: Huruf 'M' ($k_1$) = 2, Huruf 'A' ($k_2$) = 2
> $$P = \frac{4!}{2! \times 2!} = \frac{4 \times 3 \times \cancel{2!}}{\cancel{2!} \times (2 \times 1)} = \frac{12}{2} = 6 \text{ susunan}$$
> *(Susunan aslinya adalah: MAMA, MAAM, MMAA, AMAM, AMMA, AAMM).*
> 
> **Jawaban Soal 2 (Siklis):**
> * Total orang ($n$) = 5. Karena formasi duduk melingkar, gunakan rumus siklis:
> $$
> \begin{aligned}
> P_{\text{siklis}} &= (5 - 1)! \\
> &= 4! \\
> &= 4 \times 3 \times 2 \times 1 = 24 \text{ posisi}
> \end{aligned}
> $$
> Jadi, terdapat **6 susunan** kata untuk soal pertama dan **24 variasi posisi duduk** untuk soal kedua.

---

## Konsep Terkait

- [[Kombinatorika dan Teori Peluang Lanjutan/04 - Permutasi Sebagian Objek dari Unsur Berbeda]]
- [[Kombinatorika dan Teori Peluang Lanjutan/06 - Konsep Kombinasi dan Perbedaannya dengan Permutasi]]