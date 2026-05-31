---
title: Kontinuitas dan Diskontinuitas Fungsi
---
# Kontinuitas dan Diskontinuitas Fungsi

Dalam kalkulus, sebuah fungsi dikatakan kontinu di suatu titik jika grafiknya tidak terputus, tidak berlubang, dan tidak melompat pada titik tersebut. Secara matematis, fungsi $f(x)$ dikatakan ==**kontinu di titik $x = c$**== jika dan hanya jika memenuhi tiga syarat mutlak berikut:

1. $f(c)$ terdefinisi (nilai fungsinya ada/real).
2. $\lim_{x \to c} f(x)$ ada (limit kiri sama dengan limit kanan).
3. $\lim_{x \to c} f(x) = f(c)$ (nilai limit sama dengan nilai fungsi).

Jika salah satu atau lebih dari ketiga syarat di atas tidak terpenuhi, maka fungsi $f(x)$ dikatakan ==**diskontinu (tidak kontinu)**== di $x = c$.

---
## Contoh Soal
Selidiki apakah fungsi $f(x) = \frac{x^2 - 9}{x - 3}$ kontinu di titik $x = 3$!

> [!success]- Klik untuk Lihat Jawaban
> Mari kita uji berdasarkan syarat-syarat kontinuitas fungsi di titik $x = 3$:
> * **Uji Syarat 1:** Kita cari nilai fungsi $f(3)$ lewat substitusi langsung:
>     $$f(3) = \frac{3^2 - 9}{3 - 3} = \frac{0}{0} \quad \text{(Tidak Terdefinisi)}$$
> 
> Karena syarat pertama saja sudah tidak terpenuhi ($f(3)$ tidak menghasilkan bilangan real), maka kita tidak perlu melanjutkan ke uji syarat berikutnya.
> 
> Jadi, fungsi $f(x)$ tersebut **diskontinu** di titik $x = 3$ (grafiknya berlubang di titik tersebut).

---

## Konsep Terkait

- [[Limit/01 - Definisi Intuitif dan Eksistensi Limit]]
- [[Limit/03 - Menghitung Limit Fungsi Aljabar Bentuk Tertentu dan Tak Tentu]]