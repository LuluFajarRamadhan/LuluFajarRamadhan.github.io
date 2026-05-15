# Peluang

## Pengantar Bab

### Kata Pengantar
Peluang adalah cabang matematika yang mempelajari ==**kemungkinan terjadinya suatu kejadian.**== Dalam kehidupan sehari-hari, banyak peristiwa yang hasil akhirnya belum dapat dipastikan secara mutlak, tetapi dapat diperkirakan kemungkinan terjadinya.

Melalui bab ini, siswa akan mempelajari cara menentukan peluang suatu kejadian menggunakan konsep ruang sampel, titik sampel, dan berbagai aturan perhitungan peluang.

### Aplikasi Peluang dalam Kehidupan Nyata

#### 1. Statistik dan Penelitian
Digunakan untuk menganalisis kemungkinan munculnya suatu data atau kejadian.

#### 2. Asuransi dan Keuangan
Digunakan untuk memperkirakan risiko kerugian.

#### 3. Permainan dan Strategi
Digunakan untuk menentukan kemungkinan menang atau kalah.

#### 4. Sains dan Teknologi
Digunakan dalam analisis eksperimen.

#### 5. Kehidupan Sehari-hari
Digunakan dalam pengambilan keputusan berdasarkan kemungkinan.

---

# 1. Ruang Sampel

Ruang sampel adalah himpunan semua hasil yang mungkin terjadi dari suatu percobaan acak. Ruang sampel dinotasikan dengan ==**S**==. 

## Bentuk Himpunan
Jika sebuah dadu dilempar satu kali, maka ruang sampelnya adalah:
$$
S = \{1,2,3,4,5,6\}
$$

### Contoh Soal
Sebuah koin dilempar satu kali.

### Penyelesaian
Kemungkinan hasil:
$$
S = \{A,G\}
$$

Jadi, ruang sampelnya terdiri dari **2 titik sampel.**

---

# 2. Titik Sampel

Titik sampel adalah setiap anggota dari ruang sampel yang ==**mewakili satu kemungkinan hasil percobaan.**==

## Contoh Himpunan
Jika dua koin dilempar:
$$
S = \{AA,AG,GA,GG\}
$$
Maka:
- $AA$ adalah titik sampel
- $AG$ adalah titik sampel
- $GA$ adalah titik sampel
- $GG$ adalah titik sampel

### Contoh Soal
Berapa banyak titik sampel pada pelemparan dua dadu?
### Penyelesaian
Banyak titik sampel:
$$
6 \times 6 = 36
$$

Jadi, terdapat **36 titik sampel.**

---

# 3. Peluang Suatu Kejadian

Peluang suatu kejadian adalah perbandingan antara ==**banyaknya kejadian yang diinginkan dengan banyaknya seluruh kemungkinan kejadian.**==

## Rumus Peluang
Besar peluang kejadian $A$ dinyatakan dengan:
$$
P(A)=\frac{n(A)}{n(S)}
$$

Keterangan:
- $n(A)$ = banyak anggota kejadian A
- $n(S)$ = banyak anggota ruang sampel

### Contoh Soal
Sebuah dadu dilempar sekali. Tentukan peluang muncul angka genap.

### Penyelesaian
Ruang sampel:
$$
S=\{1,2,3,4,5,6\}
$$
Kejadian muncul angka genap:
$$
A=\{2,4,6\}
$$
Maka:
$$
P(A)=\frac{3}{6}=\frac{1}{2}
$$
Jadi, peluangnya adalah $\frac{1}{2}$.

---
# 4. Frekuensi Harapan

Frekuensi harapan adalah banyaknya kejadian yang ==**diperkirakan terjadi dalam sejumlah percobaan tertentu.**==
## Rumus Frekuensi Harapan
$$
F_h = P(A) \times n
$$
### Contoh Soal
Sebuah koin dilempar 100 kali. Tentukan frekuensi harapan muncul angka.

### Penyelesaian
Peluang muncul angka:
$$
P(A)=\frac{1}{2}
$$
Maka:
$$
F_h=\frac{1}{2}\times100=50
$$
Jadi, frekuensi harapannya adalah **50 kali.**

---

# 5. Peluang Komplemen

Peluang komplemen adalah peluang tidak terjadinya suatu kejadian.

Jika kejadian A terjadi, maka komplemennya dinotasikan $A^c$.

## Rumus Peluang Komplemen
$$
P(A^c)=1-P(A)
$$
### Contoh Soal
Peluang seorang siswa lulus ujian adalah $0,8$. Tentukan peluang siswa tidak lulus.
### Penyelesaian
$$
P(A^c)=1-0,8=0,2
$$
Jadi, peluang tidak lulus adalah $0,2$.

---
# 6. Peluang Kejadian Majemuk
Kejadian majemuk adalah kejadian yang melibatkan lebih dari satu peristiwa.
## Peluang Irisan
Peluang dua kejadian terjadi bersama:
$$
P(A\cap B)=P(A)\times P(B)
$$
### Contoh Soal
Dua koin dilempar. Tentukan peluang muncul dua angka.
### Penyelesaian
$$
P(A)=\frac{1}{2}\times\frac{1}{2}=\frac{1}{4}
$$
Jadi, peluangnya $\frac{1}{4}$.

---
## Peluang Gabungan
Peluang salah satu kejadian terjadi.
$$
P(A\cup B)=P(A)+P(B)-P(A\cap B)
$$
### Contoh Soal
Peluang siswa suka matematika $0,6$ dan fisika $0,5$, keduanya $0,3$.
### Penyelesaian
$$
P(A\cup B)=0,6+0,5-0,3=0,8
$$
Jadi, peluangnya $0,8$.

---

# Ringkasan Bab

Dalam bab peluang dipelajari:

- **Ruang Sampel** → semua kemungkinan
- **Titik Sampel** → setiap hasil
- **Peluang Kejadian** → perbandingan kejadian
- **Frekuensi Harapan** → prediksi kemunculan
- **Komplemen** → peluang tidak terjadi
- **Kejadian Majemuk** → gabungan beberapa kejadian

Kunci utama:

==**Peluang selalu bernilai antara 0 dan 1.**==

- Jika $P(A)=0$, kejadian mustahil
- Jika $P(A)=1$, kejadian pasti

