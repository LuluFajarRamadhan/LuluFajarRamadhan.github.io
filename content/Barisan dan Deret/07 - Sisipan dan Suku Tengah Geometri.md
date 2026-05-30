---
title: Sisipan dan Suku Tengah Geometri
---

# Sisipan dan Suku Tengah Geometri

Sama seperti pada barisan aritmetika, kita juga dapat memodifikasi struktur barisan geometri melalui metode penyisipan suku baru (*interpolasi*) ataupun mencari nilai pembagi tepat di tengah barisan ganjil.

---

## 1. Sisipan pada Barisan Geometri

Jika di antara dua buah bilangan $x$ dan $y$ disisipkan sebanyak $k$ buah bilangan baru sehingga seluruh bilangan tersebut membentuk barisan geometri yang baru, maka **nilai rasio barisan akan berubah**.



- **Rasio Baru ($r'$) setelah disisipkan:**
  $$r' = \sqrt[k+1]{\frac{y}{x}} \quad \text{atau} \quad r' = \sqrt[k+1]{r}$$
  *(di mana $r$ adalah rasio barisan lama sebelum disisipkan).*
- **Banyaknya Suku Baru ($n'$):**
  $$n' = n + (n - 1)k$$

---

## 2. Suku Tengah Barisan Geometri ($U_t$)

Suku tengah hanya berlaku pada barisan geometri yang memiliki **banyak suku ganjil** ($n$ adalah bilangan ganjil). Nilai suku tengah diperoleh melalui akar kuadrat dari hasil kali suku pertama ($a$) dengan suku terakhir ($U_n$).

$$\bbox[10px,border:2px solid #2cc7b0]{U_t = \sqrt{a \cdot U_n}}$$

- **Posisi indeks suku tengah ($t$):**
  $$t = \frac{n + 1}{2}$$

---

## Contoh Soal

Di antara bilangan 2 dan 162 disisipkan sebanyak 3 buah bilangan baru sehingga terbentuk suatu barisan geometri baru yang konstan. Tentukan rasio baru dari barisan tersebut dan tuliskan barisan lengkapnya!

>[!Success]- Klik untuk Lihat Jawaban
> **Penyelesaian:**
> Diketahui data dari soal:
> - Bilangan pertama ($x$ atau $a$) = $2$
> - Bilangan terakhir ($y$) = $162$
> - Banyaknya suku yang disisipkan ($k$) = $3$
> 
> 1. Cari nilai rasio baru ($r'$):
>    $$r' = \sqrt[k+1]{\frac{y}{x}}$$
>    $$r' = \sqrt[3+1]{\frac{162}{2}} = \sqrt[4]{81}$$
>    $$r' = 3 \quad \text{(karena } 3^4 = 81\text{)}$$
> 
> 2. Susun barisan geometri baru dengan mengalikan setiap suku dengan $r'=3$:
>    - $U_1 = 2$
>    - $U_2 = 2 \cdot 3 = 6$
>    - $U_3 = 6 \cdot 3 = 12$
>    - $U_4 = 18 \cdot 3 = 54$
>    - $U_5 = 54 \cdot 3 = 162$
> 
> Jadi, rasio barisan baru adalah $3$, dan susunan barisan lengkapnya adalah **$2, 6, 18, 54, 162$**.

---

## Konsep Terkait
* [[Barisan dan Deret/05 - Barisan Geometri|05 - Barisan Geometri]]
* [[Barisan dan Deret/06 - Deret Geometri|06 - Deret Geometri]]