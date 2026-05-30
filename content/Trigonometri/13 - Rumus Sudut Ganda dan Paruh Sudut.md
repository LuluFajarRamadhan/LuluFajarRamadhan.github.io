---
title: Rumus Sudut Ganda dan Paruh Sudut
---

# Rumus Sudut Ganda dan Paruh Sudut

Rumus Sudut Ganda (sudut rangkap) dan Paruh Sudut (setengah sudut) merupakan turunan langsung dari rumus jumlah dan selisih sudut yang telah kita pelajari sebelumnya. Rumus ini sangat penting untuk mereduksi pangkat tinggi dalam fungsi trigonometri (misalnya mengubah $\sin^2 x$ menjadi bentuk linear) yang sering dipakai dalam kalkulus integrasi.

---

## 1. Rumus Sudut Ganda (Rangkap Dua)

Jika kita mengasumsikan sudut $B = A$ pada rumus jumlah sudut, kita mendapatkan hubungan sudut ganda ($2A$) sebagai berikut:

### A. Sinus Sudut Ganda
$$\sin 2A = 2 \sin A \cos A$$

### B. Cosinus Sudut Ganda
Cosinus memiliki tiga bentuk variasi yang sama nilainya. Variasi ini didapatkan dengan mensubstitusikan identitas Pythagoras $\sin^2 A + \cos^2 A = 1$:
1. $\cos 2A = \cos^2 A - \sin^2 A$
2. $\cos 2A = 2\cos^2 A - 1$
3. $\cos 2A = 1 - 2\sin^2 A$

### C. Tangen Sudut Ganda
$$\tan 2A = \frac{2 \tan A}{1 - \tan^2 A}$$

---

## 2. Rumus Paruh Sudut (Setengah Sudut)

Rumus setengah sudut ($\frac{1}{2}A$) diturunkan dengan membalik persamaan cosinus sudut ganda di atas. Tanda $\pm$ ditentukan berdasarkan posisi kuadran tempat sudut $\frac{1}{2}A$ berada.

- **$\sin \frac{1}{2}A = \pm \sqrt{\frac{1 - \cos A}{2}}$**
- **$\cos \frac{1}{2}A = \pm \sqrt{\frac{1 + \cos A}{2}}$**
- **$\tan \frac{1}{2}A = \pm \sqrt{\frac{1 - \cos A}{1 + \cos A}} = \frac{\sin A}{1 + \cos A} = \frac{1 - \cos A}{\sin A}$**

---

## Contoh Soal

Diketahui nilai $\sin A = \frac{4}{5}$ dengan $A$ adalah sudut lancip di Kuadran I. Tentukan nilai eksak dari $\sin 2A$!

>[!Success]- Klik untuk Lihat Jawaban
> **Penyelesaian:**
> 1. Kita memerlukan nilai $\cos A$ terlebih dahulu. Karena $A$ berada di Kuadran I, semua fungsi bernilai positif. Gunakan tripel Pythagoras ($3, 4, 5$) atau rumus Pythagoras:
>    $$\cos A = \frac{sa}{mi} = \frac{3}{5}$$
> 
> 2. Masukkan nilai $\sin A$ dan $\cos A$ ke dalam rumus sinus sudut ganda:
>    $$\sin 2A = 2 \sin A \cos A$$
>    $$\sin 2A = 2 \cdot \left(\frac{4}{5}\right) \cdot \left(\frac{3}{5}\right)$$
>    $$\sin 2A = \frac{24}{25}$$
> 
> Jadi, nilai dari $\sin 2A$ adalah $\frac{24}{25}$.

---

## Konsep Terkait
* [[Trigonometri/06 - Identitas Trigonometri Dasar|06 - Identitas Trigonometri Dasar]]
* [[Trigonometri/12 - Rumus Jumlah dan Selisih Sudut|12 - Rumus Jumlah dan Selisih Sudut]]

