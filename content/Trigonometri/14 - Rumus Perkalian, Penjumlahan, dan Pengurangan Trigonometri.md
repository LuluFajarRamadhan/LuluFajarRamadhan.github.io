
---
title: Rumus Perkalian, Penjumlahan, dan Pengurangan Trigonometri
---

# Rumus Perkalian, Penjumlahan, dan Pengurangan Trigonometri

Materi ini membahas cara mengubah ekspresi perkalian dua fungsi trigonometri menjadi bentuk penjumlahan/pengurangan, atau sebaliknya. Konsep ini sangat vital dalam analisis sinyal radio, akustik, serta penyederhanaan persamaan kalkulus tingkat lanjut.

---

## 1. Rumus Perkalian ke Penjumlahan/Pengurangan

Rumus ini digunakan untuk memecah perkalian fungsi sin dan cos menjadi penjumlahan atau pengurangan linear:

- **$2 \sin A \cos B = \sin(A + B) + \sin(A - B)$**
- **$2 \cos A \sin B = \sin(A + B) - \sin(A - B)$**
- **$2 \cos A \cos B = \cos(A + B) + \cos(A - B)$**
- **$-2 \sin A \sin B = \cos(A + B) - \cos(A - B)$**

---

## 2. Rumus Penjumlahan/Pengurangan ke Perkalian

Sebaliknya, jika kita memiliki operasi penjumlahan atau pengurangan fungsi, kita bisa menyatukannya menjadi bentuk perkalian:

- **$\sin P + \sin Q = 2 \sin\left(\frac{P+Q}{2}\right) \cos\left(\frac{P-Q}{2}\right)$**
- **$\sin P - \sin Q = 2 \cos\left(\frac{P+Q}{2}\right) \sin\left(\frac{P-Q}{2}\right)$**
- **$\cos P + \cos Q = 2 \cos\left(\frac{P+Q}{2}\right) \cos\left(\frac{P-Q}{2}\right)$**
- **$\cos P - \cos Q = -2 \sin\left(\frac{P+Q}{2}\right) \sin\left(\frac{P-Q}{2}\right)$**

---

## Contoh Soal

Sederhanakan ekspresi penjumlahan berikut menjadi bentuk perkalian: $\sin 75^{\circ} + \sin 15^{\circ}$, lalu tentukan nilai akhirnya!

>[!Success]- Klik untuk Lihat Jawaban
> **Penyelesaian:**
> Gunakan rumus penjumlahan sinus ke perkalian dengan asumsi $P = 75^{\circ}$ dan $Q = 15^{\circ}$:
> $$\sin P + \sin Q = 2 \sin\left(\frac{P+Q}{2}\right) \cos\left(\frac{P-Q}{2}\right)$$
> 
> 1. Substitusikan nilai sudut ke dalam rumus:
>    $$\sin 75^{\circ} + \sin 15^{\circ} = 2 \sin\left(\frac{75^{\circ}+15^{\circ}}{2}\right) \cos\left(\frac{75^{\circ}-15^{\circ}}{2}\right)$$
> 
> 2. Hitung nilai sudut di dalam kurung:
>    $$\sin 75^{\circ} + \sin 15^{\circ} = 2 \sin\left(\frac{90^{\circ}}{2}\right) \cos\left(\frac{60^{\circ}}{2}\right)$$
>    $$\sin 75^{\circ} + \sin 15^{\circ} = 2 \sin 45^{\circ} \cos 30^{\circ}$$
> 
> 3. Masukkan nilai dari tabel sudut istimewa:
>    $$\sin 75^{\circ} + \sin 15^{\circ} = 2 \cdot \left(\frac{1}{2}\sqrt{2}\right) \cdot \left(\frac{1}{2}\sqrt{3}\right)$$
>    $$\sin 75^{\circ} + \sin 15^{\circ} = \frac{1}{2}\sqrt{6}$$
> 
> Jadi, bentuk sederhana sekaligus nilai akhir dari ekspresi tersebut adalah $\frac{1}{2}\sqrt{6}$.

---

## Konsep Terkait
* [[Trigonometri/03 - Nilai Perbandingan Sudut Istimewa|03 - Nilai Perbandingan Sudut Istimewa]]
* [[Trigonometri/12 - Rumus Jumlah dan Selisih Sudut|12 - Rumus Jumlah dan Selisih Sudut]]