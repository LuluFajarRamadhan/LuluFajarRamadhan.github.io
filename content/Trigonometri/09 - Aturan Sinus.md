---
title: Aturan Sinus
---

# Aturan Sinus

Hingga materi sebelumnya, kita selalu membatasi diri pada segitiga siku-siku. Namun, bagaimana jika kita menghadapi segitiga lancip atau tumpul sembarang? **Aturan Sinus** hadir sebagai penjembatan untuk menganalisis hubungan perbandingan antara panjang sisi dengan nilai sinus sudut di hadapannya pada segitiga sembarang.

---

## 1. Formulasi Aturan Sinus

Misalkan terdapat sebuah segitiga sembarang $ABC$. Kita sepakati penamaan sisinya: sisi $a$ berada di depan sudut $A$, sisi $b$ di depan sudut $B$, dan sisi $c$ di depan sudut $C$.


Aturan Sinus menyatakan bahwa rasio antara panjang sisi dengan sinus sudut di hadapannya selalu konstan:
$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$$
*(Keterangan: $R$ adalah jari-jari lingkaran luar segitiga tersebut).*

---

## 2. Kapan Harus Menggunakan Aturan Sinus?

Aturan Sinus dapat digunakan untuk memecahkan komponen segitiga yang belum diketahui jika kondisi soal memenuhi salah satu kriteria berikut:
1. Diketahui **dua sudut dan satu sisi** (kondisi: Sudut-Sudut-Sisi atau Sudut-Sisi-Sudut).
2. Diketahui **dua sisi dan satu sudut di depan salah satu sisi tersebut** (kondisi: Sisi-Sisi-Sudut).

---

## Contoh Soal

Dua orang pengamat, Andi dan Budi, terpisah sejauh $10\text{ km}$ untuk memantau puncak sebuah balon udara. Dari posisi Andi, balon udara terlihat dengan sudut elevasi $45^{\circ}$, sedangkan dari posisi Budi, sudut elevasinya adalah $60^{\circ}$. Jika balon berada di antara keduanya, tentukan jarak dari posisi Andi ke balon udara tersebut!

>[!Success]- Klik untuk Lihat Jawaban
> **Penyelesaian:**
> Ilustrasikan masalah sebagai segitiga $ABC$, di mana:
> - Titik $A$ = Posisi Andi ($\angle A = 45^{\circ}$)
> - Titik $B$ = Posisi Budi ($\angle B = 60^{\circ}$)
> - Titik $C$ = Posisi Balon Udara
> - Sisi $c$ = Jarak Andi ke Budi = $10\text{ km}$
> - Sisi $a$ = Jarak Budi ke Balon Udara
> - Sisi $b$ = Jarak Andi ke Balon Udara (Komponen yang ditanyakan)
> 
> 1. Hitung besar sudut $C$ (Sudut di puncak balon):
>    $$\angle C = 180^{\circ} - (\angle A + \angle B) = 180^{\circ} - (45^{\circ} + 60^{\circ}) = 75^{\circ}$$
>    *(Catatan nilai: $\sin 75^{\circ} \approx 0,96$)*
> 
> 2. Terapkan Aturan Sinus untuk mencari sisi $b$:
>    $$\frac{b}{\sin B} = \frac{c}{\sin C}$$
>    $$\frac{b}{\sin 60^{\circ}} = \frac{10}{\sin 75^{\circ}}$$
>    $$b = \frac{10 \cdot \sin 60^{\circ}}{\sin 75^{\circ}} = \frac{10 \cdot (\frac{1}{2}\sqrt{3})}{0,96} = \frac{5\sqrt{3}}{0,96} \approx 9,02\text{ km}$$
> 
> Jadi, jarak dari posisi Andi ke balon udara tersebut adalah sekitar $9,02\text{ km}$.

---

## Konsep Terkait
* [[Trigonometri/02 - Perbandingan Trigonometri Segitiga Siku-Siku|02 - Perbandingan Trigonometri Segitiga Siku-Siku]]
* [[Trigonometri/10 - Aturan Cosinus]]