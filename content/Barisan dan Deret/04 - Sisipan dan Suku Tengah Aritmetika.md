---
title: Sisipan dan Suku Tengah Aritmetika
---

# Sisipan dan Suku Tengah Aritmetika

Konsep sisipan dan suku tengah merupakan modifikasi tingkat lanjut dari barisan aritmetika standar. Konsep ini sering muncul dalam pemodelan pembagian wilayah, interpolasi data statistik, maupun penataan ruang geometri.

---

## 1. Sisipan pada Barisan Aritmetika (*Interpolation*)

Misalkan kita memiliki dua buah bilangan, yaitu $x$ dan $y$. Di antara kedua bilangan tersebut, kita sisipkan sebanyak $k$ buah bilangan baru sehingga seluruh bilangan tersebut membentuk barisan aritmetika baru.



Akibat penambahan bilangan ini, **beda dari barisan akan berubah menjadi lebih kecil**, dan banyaknya suku akan bertambah.

- **Beda Baru ($b'$) setelah disisipkan:**
  $$b' = \frac{y - x}{k + 1} \quad \text{atau} \quad b' = \frac{b}{k + 1}$$
  *(di mana $b$ adalah beda barisan lama sebelum disisipkan).*
- **Banyaknya Suku Baru ($n'$):**
  $$n' = a + (n - 1)(k + 1)$$

---

## 2. Suku Tengah Barisan Aritmetika ($U_t$)

Jika sebuah barisan aritmetika memiliki **banyak suku ganjil** ($n$ adalah bilangan ganjil), maka barisan tersebut pasti memiliki satu suku yang tepat berada di tengah-tengah barisan. Suku tengah dinotasikan dengan $U_t$.

Nilai suku tengah merupakan rata-rata aritmetika dari suku pertama ($a$) dan suku terakhir ($U_n$):
$$\bbox[10px,border:2px solid #2cc7b0]{U_t = \frac{a + U_n}{2}}$$

- **Posisi indeks suku tengah ($t$):**
  $$t = \frac{n + 1}{2}$$

---

## Contoh Soal

Di antara bilangan 4 dan 28 disisipkan sebanyak 5 buah bilangan sehingga terbentuk barisan aritmetika yang baru. Tentukan beda barisan baru tersebut, lalu tuliskan susunan barisan lengkapnya!

>[!Success]- Klik untuk Lihat Jawaban
> **Penyelesaian:**
> Diketahui dari data soal:
> - Bilangan pertama ($x$ atau $a$) = $4$
> - Bilangan terakhir ($y$) = $28$
> - Banyaknya bilangan yang disisipkan ($k$) = $5$
> 
> 1. Hitung beda barisan baru ($b'$):
>    $$b' = \frac{y - x}{k + 1}$$
>    $$b' = \frac{28 - 4}{5 + 1} = \frac{24}{6} = 4$$
> 
> 2. Susun barisan aritmetika baru dengan menambahkan beda baru ($b'=4$) secara berurutan dimulai dari angka 4:
>    - $U_1 = 4$
>    - $U_2 = 4 + 4 = 8$
>    - $U_3 = 8 + 4 = 12$
>    - $U_4 = 12 + 4 = 16$
>    - $U_5 = 16 + 4 = 20$
>    - $U_6 = 20 + 4 = 24$
>    - $U_7 = 24 + 4 = 28$
> 
> Jadi, beda barisan baru tersebut adalah $4$, dan susunan barisan lengkapnya adalah **$4, 8, 12, 16, 20, 24, 28$**.

---

## Konsep Terkait
* [[Barisan dan Deret/02 - Barisan Aritmetika|02 - Barisan Aritmetika]]
* [[Barisan dan Deret/03 - Deret Aritmetika|03 - Deret Aritmetika]]