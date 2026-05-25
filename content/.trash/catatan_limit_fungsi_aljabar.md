## Catatan Bab: Limit Fungsi Aljabar

### 1. Pengertian Limit Fungsi
Limit fungsi adalah nilai yang didekati oleh suatu fungsi ketika variabelnya mendekati nilai tertentu.

Ditulis sebagai:

$$
\lim_{x \to a} f(x)
$$

Artinya: nilai fungsi $f(x)$ saat $x$ mendekati $a$.

Contoh:

$$
\lim_{x \to 2}(x+3)=5
$$

---

## 2. Sifat-Sifat Limit

Jika:

$$
\lim_{x\to a}f(x)=L
$$

dan

$$
\lim_{x\to a}g(x)=M
$$

maka:

### a. Penjumlahan/Pengurangan

$$
\lim_{x\to a}[f(x)\pm g(x)] = L\pm M
$$

### b. Perkalian

$$
\lim_{x\to a}[f(x)\cdot g(x)] = L\cdot M
$$

### c. Pembagian

$$
\lim_{x\to a}\frac{f(x)}{g(x)}=\frac{L}{M}, \quad M\neq0
$$

---

## 3. Metode Menyelesaikan Limit Fungsi Aljabar

### A. Substitusi Langsung
Dipakai jika hasil substitusi tidak menghasilkan bentuk tak tentu.

### B. Faktorisasi
Digunakan jika hasil substitusi menghasilkan:

$$
\frac{0}{0}
$$

### C. Merasionalkan
Digunakan jika ada bentuk akar.

---

# Contoh Soal

## Contoh 1
Hitung:

$$
\lim_{x\to5}(3x-7)
$$

> [!success]- Klik untuk Lihat Jawaban
> Substitusi langsung:
>
> $$
> =3(5)-7
> $$
>
> $$
> =8
> $$
>
> **Jawaban: 8**

---

## Contoh 2
Hitung:

$$
\lim_{x\to3}\frac{x^2-9}{x-3}
$$

> [!success]- Klik untuk Lihat Jawaban
> Faktorkan:
>
> $$
> x^2-9=(x-3)(x+3)
> $$
>
> $$
> \lim_{x\to3}(x+3)=6
> $$
>
> **Jawaban: 6**

---

## Contoh 3
Hitung:

$$
\lim_{x\to9}\frac{\sqrt{x}-3}{x-9}
$$

> [!success]- Klik untuk Lihat Jawaban
> Kalikan sekawan:
>
> $$
> \frac{\sqrt{x}-3}{x-9}\times\frac{\sqrt{x}+3}{\sqrt{x}+3}
> $$
>
> $$
> =\frac{1}{\sqrt{x}+3}
> $$
>
> $$
> =\frac16
> $$
>
> **Jawaban: $\frac16$**

---

## Ringkasan Cepat

- Tidak bentuk tak tentu → substitusi langsung  
- Bentuk $\frac00$ → faktorisasi  
- Ada akar → sekawan
