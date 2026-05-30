---
title:
---

# Lembar Cepat (Cheat Sheet) Ringkasan Barisan dan Deret

Halaman ini merangkum seluruh formula inti, karakteristik pola, dan aplikasi praktis dari bab Barisan dan Deret untuk mempermudah pemetaan konsep dan *review* cepat sebelum evaluasi.

---

## 1. Komparasi Inti: Aritmetika vs Geometri

| Karakteristik               | Barisan & Deret Aritmetika                                         | Barisan & Deret Geometri                                                                       |
| :-------------------------- | :----------------------------------------------------------------- | :--------------------------------------------------------------------------------------------- |
| **Operasi Dasar**           | Penjumlahan / Pengurangan ($\pm$)                                  | Perkalian / Pembagian ($\times$ / $\div$)                                                      |
| **Faktor Pengubah**         | Beda ($b = U_n - U_{n-1}$)                                         | Rasio ($r = \frac{U_n}{U_{n-1}}$)                                                              |
| **Grafik Fungsi**           | Linear (Garis Lurus)                                               | Eksponensial (Kurva Melengkung)                                                                |
| **Suku Ke-$n$ ($U_n$)**     | $U_n = a + (n-1)b$                                                 | $U_n = a \cdot r^{n-1}$                                                                        |
| **Jumlah $n$ Suku ($S_n$)** | $S_n = \frac{n}{2}(a + U_n)$ <br> $S_n = \frac{n}{2}[2a + (n-1)b]$ | $S_n = \frac{a(r^n - 1)}{r - 1}$ untuk $r>1$ <br> $S_n = \frac{a(1 - r^n)}{1 - r}$ untuk $r<1$ |

---

## 2. Modifikasi Barisan (Sisipan & Suku Tengah)

### A. Barisan Aritmetika Modifikasi
- **Beda Baru ($b'$)** setelah disisipkan $k$ suku:
$$
b' = \frac{b}{k + 1}
$$
- **Suku Tengah ($U_t$)** (Hanya untuk jumlah suku $n$ ganjil):
$$
U_t = \frac{a + U_n}{2} \quad \text{dengan indeks } t = \frac{n+1}{2}
$$

### B. Barisan Geometri Modifikasi
- **Rasio Baru ($r'$)** setelah disisipkan $k$ suku:
$$
r' = \sqrt[k+1]{r}
$$
- **Suku Tengah ($U_t$)** (Hanya untuk jumlah suku $n$ ganjil):
$$
U_t = \sqrt{a \cdot U_n}
$$

---

## 3. Deret Geometri Tak Hingga ($S_{\infty}$)

Berlaku hanya jika deret bersifat **Konvergen** dengan syarat batas rasio: **$-1 < r < 1$**.
$$
{S_{\infty} = \frac{a}{1 - r}}
$$

### Kasus Khusus Lintasan Pantulan Bola:
Jika bola dijatuhkan dari ketinggian awal $H$ dan memantul setinggi $\frac{p}{q}$ kali dari tinggi sebelumnya:
$$
\text{Total Panjang Lintasan} = H \cdot \left( \frac{q + p}{q - p} \right)
$$

---

## 4. Aplikasi Konsep Lanjut & Finansial

### A. Pertumbuhan dan Peluruhan
- **Pertumbuhan (Sains/Demografi):** 
$$
M_n = M_0(1 + i)^n
$$
- **Peluruhan (Penyusutan Aset/Radioaktif):** 
$$
M_n = M_0(1 - i)^n
$$

### B. Matematika Keuangan
- **Bunga Majemuk:** 
$$
M_n = M_0(1 + i)^n
$$
- **Sistem Anuitas (Angsuran Berkala):**
$$
A = a_n + b_n \quad (\text{Anuitas} = \text{Angsuran Pokok} + \text{Bunga})
$$
  $$
  A = \frac{M_0 \cdot i}{1 - (1 + i)^{-n}}
  $$

---

## 5. Notasi Lambang & Validasi
- **Notasi Sigma:** 
$$
\sum_{k=1}^{n} U_k = U_1 + U_2 + \dots + U_n
$$
- **Prinsip Induksi Matematika:** 
1. Buktikan benar untuk $n = 1$.
  2. Asumsikan benar untuk $n = k$, lalu buktikan benar untuk $n = k + 1$.

---

## Navigasi Folder Materi
* [[Barisan dan Deret/00 - Peta Konsep Barisan dan Deret|Kembali ke Peta Konsep Utama]]

