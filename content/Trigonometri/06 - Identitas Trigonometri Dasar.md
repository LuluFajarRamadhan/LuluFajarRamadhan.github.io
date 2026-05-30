---
title:
---

# Identitas Trigonometri Dasar

Identitas trigonometri adalah suatu persamaan yang memuat fungsi-fungsi trigonometri dan bernilai benar untuk setiap nilai variabel (sudut) yang didefinisikan. Identitas ini merupakan alat manipulasi aljabar terpenting dalam menyederhanakan ekspresi matematika yang rumit atau membuktikan persamaan matematika tingkat lanjut.

---

## 1. Tiga Kategori Identitas Utama

Berdasarkan definisi perbandingan segitiga siku-siku, kita dapat mengelompokkan identitas dasar menjadi tiga kategori utama:

### A. Identitas Kebalikan (*Reciprocal Identities*)
Hubungan invers antar fungsi trigonometri:
- $\csc \theta = \frac{1}{\sin \theta}$
- $\sec \theta = \frac{1}{\cos \theta}$
- $\cot \theta = \frac{1}{\tan \theta}$

### B. Identitas Perbandingan (*Quotient Identities*)
Menyatakan tangen dan cotangen dalam bentuk sinus dan cosinus:
- $\tan \theta = \frac{\sin \theta}{\cos \theta}$
- $\cot \theta = \frac{\cos \theta}{\sin \theta}$

### C. Identitas Pythagoras (*Pythagorean Identities*)
Identitas yang diturunkan langsung dari teorema Pythagoras pada lingkaran satuan:
1. **$\sin^2 \theta + \cos^2 \theta = 1$**
2. **$1 + \tan^2 \theta = \sec^2 \theta$** *(Dihasilkan dengan membagi identitas pertama dengan $\cos^2 \theta$)*
3. **$1 + \cot^2 \theta = \csc^2 \theta$** *(Dihasilkan dengan membagi identitas pertama dengan $\sin^2 \theta$)*

---

## 2. Strategi Membuktikan Identitas Trigonometri
Untuk membuktikan suatu identitas trigonometri, Anda harus mengubah bentuk pada salah satu ruas (biasanya ruas yang lebih rumit) hingga bentuknya persis sama dengan ruas lainnya.
- **Tips 1:** Ubah semua fungsi seperti $\tan, \cot, \sec,$ atau $\csc$ ke dalam bentuk dasar $\sin$ dan $\cos$.
- **Tips 2:** Samakan penyebut pecahan jika terdapat penjumlahan atau pengurangan bentuk pecahan.
- **Tips 3:** Manfaatkan faktorisasi aljabar seperti $(a^2 - b^2) = (a-b)(a+b)$ jika polanya muncul.

---

## Contoh Soal

Buktikan bahwa persamaan berikut merupakan sebuah identitas trigonometri:
$$\frac{\cos \theta}{1 - \sin \theta} - \frac{\cos \theta}{1 + \sin \theta} = 2 \tan \theta$$

>[!Success]- Klik untuk Lihat Jawaban
> **Penyelesaian:**
> Kita akan memanipulasi ruas kiri agar menjadi sama dengan ruas kanan.
> 
> 1. Samakan penyebut kedua pecahan di ruas kiri:
>    $$\frac{\cos \theta(1 + \sin \theta) - \cos \theta(1 - \sin \theta)}{(1 - \sin \theta)(1 + \sin \theta)}$$
> 
> 2. Jabarkan pembilang dan kalikan penyebut:
>    $$\frac{(\cos \theta + \cos \theta \sin \theta) - (\cos \theta - \cos \theta \sin \theta)}{1 - \sin^2 \theta}$$
>    $$\frac{2 \cos \theta \sin \theta}{1 - \sin^2 \theta}$$
> 
> 3. Gunakan Identitas Pythagoras $\sin^2 \theta + \cos^2 \theta = 1 \implies 1 - \sin^2 \theta = \cos^2 \theta$:
>    $$\frac{2 \cos \theta \sin \theta}{\cos^2 \theta}$$
> 
> 4. Sederhanakan komponen $\cos \theta$:
>    $$2 \cdot \frac{\sin \theta}{\cos \theta} = 2 \tan \theta$$
> 
> Karena ruas kiri telah terbukti sama dengan ruas kanan, maka persamaan tersebut **Terbukti Benar**.

---

## Konsep Terkait
* [[Teorema Pythagoras dan Fondasi Perbandingan Segitiga]]
* [[Trigonometri/02 - Perbandingan Trigonometri Segitiga Siku-Siku|02 - Perbandingan Trigonometri Segitiga Siku-Siku]]