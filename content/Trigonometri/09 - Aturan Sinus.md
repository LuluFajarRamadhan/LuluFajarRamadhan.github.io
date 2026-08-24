---
title:
---
# Aturan Sinus

Pada segitiga siku-siku, hubungan antara sisi dan sudut dapat dianalisis menggunakan perbandingan trigonometri.

Namun, bagaimana jika segitiga yang diberikan bukan segitiga siku-siku?

Untuk segitiga sembarang, baik segitiga lancip maupun segitiga tumpul, salah satu aturan yang dapat digunakan adalah **Aturan Sinus**.

Aturan Sinus menghubungkan:

- Panjang suatu sisi.
- Besar sudut yang berada tepat di depan sisi tersebut.

Aturan ini terutama digunakan ketika diketahui beberapa sudut dan sisi, kemudian kita ingin menentukan sisi atau sudut lain yang belum diketahui.

---

## 1. Penamaan Sisi dan Sudut pada Segitiga

Misalkan terdapat segitiga $ABC$.

Pada segitiga tersebut:

- Sisi $a$ berada di depan sudut $A$.
- Sisi $b$ berada di depan sudut $B$.
- Sisi $c$ berada di depan sudut $C$.

Dengan demikian, pasangan sisi dan sudut yang saling berhadapan adalah:

| Sudut | Sisi di Depannya |
|---|---|
| $\angle A$ | $a$ |
| $\angle B$ | $b$ |
| $\angle C$ | $c$ |

Hubungan tersebut dapat dituliskan sebagai:

$$
a\leftrightarrow A
$$

$$
b\leftrightarrow B
$$

$$
c\leftrightarrow C
$$

> [!important] Pasangan Sisi dan Sudut
> Dalam Aturan Sinus, suatu sisi selalu dipasangkan dengan **sudut yang berada tepat di depannya**.
>
> $$
> \boxed{
> a\leftrightarrow A,\qquad
> b\leftrightarrow B,\qquad
> c\leftrightarrow C
> }
> $$
>
> Kesalahan dalam memasangkan sisi dan sudut akan menghasilkan persamaan yang salah.

---

## 2. Formulasi Aturan Sinus

Untuk setiap segitiga $ABC$, berlaku:

$$
\boxed{
\frac{a}{\sin A}
=
\frac{b}{\sin B}
=
\frac{c}{\sin C}
}
$$

Bentuk tersebut dapat dibalik menjadi:

$$
\boxed{
\frac{\sin A}{a}
=
\frac{\sin B}{b}
=
\frac{\sin C}{c}
}
$$

Kedua bentuk tersebut sama-sama benar.

Pemilihan bentuk dapat disesuaikan dengan besaran yang ingin dicari.

### Jika Mencari Panjang Sisi

Biasanya lebih mudah menggunakan bentuk:

$$
\frac{a}{\sin A}
=
\frac{b}{\sin B}
$$

Misalnya ingin menentukan sisi $b$, maka:

$$
\begin{aligned}
\frac{a}{\sin A}
&=
\frac{b}{\sin B}
\\
b\sin A
&=
a\sin B
\\
b
&=
\frac{a\sin B}{\sin A}
\end{aligned}
$$

Sehingga:

$$
\boxed{
b=\frac{a\sin B}{\sin A}
}
$$

### Jika Mencari Besar Sudut

Biasanya lebih mudah menggunakan bentuk:

$$
\frac{\sin A}{a}
=
\frac{\sin B}{b}
$$

Misalnya ingin menentukan sudut $B$, maka:

$$
\begin{aligned}
\frac{\sin A}{a}
&=
\frac{\sin B}{b}
\\
a\sin B
&=
b\sin A
\\
\sin B
&=
\frac{b\sin A}{a}
\end{aligned}
$$

Kemudian:

$$
B
=
\sin^{-1}
\left(
\frac{b\sin A}{a}
\right)
$$

---

## 3. Hubungan dengan Jari-Jari Lingkaran Luar

Aturan Sinus sebenarnya dapat dituliskan dalam bentuk yang lebih lengkap:

$$
\boxed{
\frac{a}{\sin A}
=
\frac{b}{\sin B}
=
\frac{c}{\sin C}
=
2R
}
$$

dengan:

$$
R
=
\text{jari-jari lingkaran luar segitiga}
$$

Lingkaran luar adalah lingkaran yang melalui ketiga titik sudut segitiga.

Dari hubungan:

$$
\frac{a}{\sin A}=2R
$$

diperoleh:

$$
\boxed{
R=\frac{a}{2\sin A}
}
$$

Demikian pula:

$$
R=\frac{b}{2\sin B}
$$

dan:

$$
R=\frac{c}{2\sin C}
$$

> [!important] Hubungan dengan Lingkaran Luar
> Untuk setiap sisi segitiga berlaku:
>
> $$
> a=2R\sin A
> $$
>
> $$
> b=2R\sin B
> $$
>
> $$
> c=2R\sin C
> $$

---

## 4. Kapan Menggunakan Aturan Sinus?

Aturan Sinus paling efektif digunakan jika diketahui salah satu kondisi berikut.

### Kondisi 1: Dua Sudut dan Satu Sisi

Misalnya diketahui:

$$
A,\quad B,\quad a
$$

Karena jumlah sudut dalam segitiga adalah:

$$
A+B+C=180^\circ
$$

maka sudut ketiga dapat dicari terlebih dahulu:

$$
C=180^\circ-A-B
$$

Setelah itu, sisi yang belum diketahui dapat ditentukan menggunakan Aturan Sinus.

Kondisi ini dapat berupa:

- Sudut-Sisi-Sudut.
- Sudut-Sudut-Sisi.

### Kondisi 2: Dua Sisi dan Satu Sudut di Depan Salah Satu Sisi

Misalnya diketahui:

$$
a,\quad b,\quad A
$$

Karena sisi $a$ dan sudut $A$ merupakan pasangan yang saling berhadapan, maka:

$$
\frac{\sin A}{a}
=
\frac{\sin B}{b}
$$

dapat digunakan untuk menentukan sudut $B$.

> [!important] Syarat Praktis
> Agar Aturan Sinus dapat langsung digunakan, biasanya harus terdapat setidaknya **satu pasangan sisi dan sudut yang sudah diketahui**.
>
> Misalnya:
>
> $$
> a\text{ dan }A
> $$
>
> atau:
>
> $$
> b\text{ dan }B
> $$

---

## 5. Langkah Menggunakan Aturan Sinus

Untuk menyelesaikan soal menggunakan Aturan Sinus, gunakan langkah berikut:

1. Tentukan sisi dan sudut yang diketahui.
2. Identifikasi pasangan sisi dan sudut yang saling berhadapan.
3. Cari satu pasangan sisi-sudut yang keduanya sudah diketahui.
4. Tentukan sisi atau sudut yang ingin dicari.
5. Pilih dua rasio Aturan Sinus yang diperlukan.
6. Substitusikan nilai yang diketahui.
7. Selesaikan persamaan.

Sebagai contoh, jika diketahui:

$$
A,\quad B,\quad a
$$

dan ingin mencari:

$$
b
$$

maka cukup gunakan:

$$
\frac{a}{\sin A}
=
\frac{b}{\sin B}
$$

Tidak perlu menggunakan seluruh bentuk:

$$
\frac{a}{\sin A}
=
\frac{b}{\sin B}
=
\frac{c}{\sin C}
$$

---

## 6. Menentukan Sisi dengan Aturan Sinus

Misalkan diketahui:

$$
A=30^\circ
$$

$$
B=45^\circ
$$

dan:

$$
a=8
$$

Tentukan panjang sisi $b$.

Gunakan:

$$
\frac{a}{\sin A}
=
\frac{b}{\sin B}
$$

Substitusikan nilai:

$$
\frac{8}{\sin30^\circ}
=
\frac{b}{\sin45^\circ}
$$

Karena:

$$
\sin30^\circ
=
\frac{1}{2}
$$

dan:

$$
\sin45^\circ
=
\frac{\sqrt2}{2}
$$

maka:

$$
\begin{aligned}
b
&=
\frac{8\sin45^\circ}{\sin30^\circ}
\\
&=
\frac{
8\left(\frac{\sqrt2}{2}\right)
}{
\frac12
}
\\
&=
8\sqrt2
\end{aligned}
$$

Jadi:

$$
\boxed{
b=8\sqrt2
}
$$

---

## 7. Menentukan Sudut dengan Aturan Sinus

Misalkan diketahui:

$$
a=6
$$

$$
b=6\sqrt2
$$

dan:

$$
A=30^\circ
$$

Tentukan sudut $B$.

Gunakan:

$$
\frac{\sin A}{a}
=
\frac{\sin B}{b}
$$

Substitusikan:

$$
\frac{\sin30^\circ}{6}
=
\frac{\sin B}{6\sqrt2}
$$

Maka:

$$
\begin{aligned}
\sin B
&=
\frac{6\sqrt2\sin30^\circ}{6}
\\
&=
\sqrt2
\left(
\frac12
\right)
\\
&=
\frac{\sqrt2}{2}
\end{aligned}
$$

Karena:

$$
\sin45^\circ
=
\frac{\sqrt2}{2}
$$

maka salah satu kemungkinan adalah:

$$
B=45^\circ
$$

Namun, terdapat hal penting yang perlu diperhatikan ketika menentukan sudut menggunakan nilai sinus.

---

## 8. Kasus Ambigu pada Aturan Sinus

Untuk sudut antara $0^\circ$ dan $180^\circ$, berlaku sifat:

$$
\boxed{
\sin\theta
=
\sin(180^\circ-\theta)
}
$$

Sebagai contoh:

$$
\sin30^\circ
=
\sin150^\circ
=
\frac12
$$

Artinya, jika diperoleh:

$$
\sin B=\frac12
$$

maka terdapat dua kemungkinan sudut:

$$
B=30^\circ
$$

atau:

$$
B=150^\circ
$$

Kedua kemungkinan tersebut kemudian harus diperiksa apakah dapat membentuk sebuah segitiga.

Karena jumlah sudut segitiga adalah:

$$
A+B+C=180^\circ
$$

maka harus berlaku:

$$
A+B<180^\circ
$$

agar masih terdapat sudut $C$ yang positif.

> [!warning] Kasus Ambigu
> Kasus dua kemungkinan sudut terutama dapat muncul ketika diketahui:
>
> - Dua sisi.
> - Satu sudut yang bukan merupakan sudut apit.
>
> Setelah memperoleh suatu sudut $\theta$, periksa juga kemungkinan:
>
> $$
> 180^\circ-\theta
> $$
>
> kemudian tentukan apakah kedua kemungkinan tersebut dapat membentuk segitiga.

---

## 9. Menentukan Sudut Ketiga

Jumlah ketiga sudut dalam segitiga adalah:

$$
\boxed{
A+B+C=180^\circ
}
$$

Jika dua sudut diketahui, maka sudut ketiga dapat dicari menggunakan:

$$
\boxed{
C=180^\circ-A-B
}
$$

Sebagai contoh, jika:

$$
A=45^\circ
$$

dan:

$$
B=60^\circ
$$

maka:

$$
\begin{aligned}
C
&=
180^\circ-45^\circ-60^\circ
\\
&=
75^\circ
\end{aligned}
$$

Jadi:

$$
\boxed{
C=75^\circ
}
$$

---

## 10. Strategi Memilih Rasio

Dalam mengerjakan soal Aturan Sinus, tidak perlu menggunakan ketiga rasio sekaligus.

Misalnya diketahui:

$$
a,\quad A,\quad B
$$

dan ingin mencari $b$.

Cukup gunakan:

$$
\boxed{
\frac{a}{\sin A}
=
\frac{b}{\sin B}
}
$$

Jika diketahui:

$$
a,\quad A,\quad C
$$

dan ingin mencari $c$, gunakan:

$$
\boxed{
\frac{a}{\sin A}
=
\frac{c}{\sin C}
}
$$

> [!tip] Strategi Cepat
> Cari terlebih dahulu pasangan sisi dan sudut yang **sama-sama diketahui**.
>
> Pasangan tersebut menjadi titik awal dalam menyusun Aturan Sinus.

---

## 11. Hubungan Panjang Sisi dengan Besar Sudut

Dari Aturan Sinus:

$$
\frac{a}{\sin A}
=
\frac{b}{\sin B}
$$

dapat disimpulkan bahwa sisi yang lebih panjang akan berhadapan dengan sudut yang lebih besar.

Jika:

$$
a>b
$$

maka:

$$
A>B
$$

Sebaliknya, jika:

$$
A>B
$$

maka:

$$
a>b
$$

Dengan demikian:

$$
\boxed{
\text{sisi terbesar berhadapan dengan sudut terbesar}
}
$$

dan:

$$
\boxed{
\text{sisi terkecil berhadapan dengan sudut terkecil}
}
$$

Sebagai contoh, jika:

$$
A=80^\circ,\quad
B=60^\circ,\quad
C=40^\circ
$$

maka:

$$
a>b>c
$$

---

## 12. Aturan Sinus atau Aturan Cosinus?

Sebelum memilih rumus, perhatikan informasi yang tersedia.

| Informasi yang Diketahui | Metode yang Biasanya Digunakan |
|---|---|
| Dua sudut dan satu sisi | Aturan Sinus |
| Dua sisi dan satu sudut di depan salah satu sisi | Aturan Sinus |
| Dua sisi dan sudut apit | Aturan Cosinus |
| Tiga sisi | Aturan Cosinus |

### Dua Sisi dan Sudut Apit

Misalnya diketahui:

$$
b,\quad c,\quad A
$$

Pada kondisi ini belum terdapat pasangan sisi-sudut yang lengkap karena sisi $a$ belum diketahui.

Maka biasanya digunakan Aturan Cosinus:

$$
a^2
=
b^2+c^2-2bc\cos A
$$

### Dua Sisi dan Sudut di Depan Salah Satu Sisi

Misalnya diketahui:

$$
a,\quad b,\quad A
$$

Karena:

$$
a\leftrightarrow A
$$

merupakan pasangan yang diketahui, maka Aturan Sinus dapat digunakan.

> [!important] Pemilihan Aturan
> **Aturan Sinus** digunakan ketika terdapat pasangan sisi dan sudut di depannya.
>
> **Aturan Cosinus** biasanya digunakan ketika diketahui dua sisi dan sudut apit atau ketika ketiga sisi diketahui.

---

## 13. Kesalahan yang Sering Terjadi

> [!warning] Kesalahan yang Sering Terjadi
> - Memasangkan sisi dengan sudut yang bukan berada di depannya.
> - Menganggap sisi $a$ berpasangan dengan sudut $B$ atau $C$.
> - Salah menentukan sudut ketiga.
> - Menggunakan Aturan Sinus ketika belum terdapat pasangan sisi-sudut yang diketahui.
> - Mengabaikan kemungkinan sudut kedua pada kasus ambigu.
> - Menggunakan kalkulator dalam mode radian padahal sudut dinyatakan dalam derajat.
> - Membulatkan nilai sinus terlalu awal.
> - Salah menggunakan fungsi $\sin^{-1}$ ketika mencari sudut.
> - Menganggap $\sin^{-1}x=\frac{1}{\sin x}$.

Perhatikan bahwa:

$$
\sin^{-1}x
$$

dalam konteks mencari sudut berarti fungsi invers sinus atau arcsinus.

Sedangkan:

$$
\frac{1}{\sin x}
$$

adalah:

$$
\csc x
$$

Keduanya berbeda.

---

# Contoh Soal

## Contoh Soal 1

Pada segitiga $ABC$ diketahui:

$$
A=30^\circ
$$

$$
B=45^\circ
$$

dan:

$$
a=10
$$

Tentukan panjang sisi $b$.

> [!success]- Klik untuk Lihat Jawaban
> Gunakan Aturan Sinus:
>
> $$
> \frac{a}{\sin A}
> =
> \frac{b}{\sin B}
> $$
>
> Substitusikan:
>
> $$
> \frac{10}{\sin30^\circ}
> =
> \frac{b}{\sin45^\circ}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> b
> &=
> \frac{10\sin45^\circ}{\sin30^\circ}
> \\
> &=
> \frac{
> 10\left(\frac{\sqrt2}{2}\right)
> }{
> \frac12
> }
> \\
> &=
> 10\sqrt2
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> b=10\sqrt2
> }
> $$

---

## Contoh Soal 2

Pada segitiga $ABC$ diketahui:

$$
A=45^\circ
$$

$$
C=60^\circ
$$

dan:

$$
a=6
$$

Tentukan panjang sisi $c$.

> [!success]- Klik untuk Lihat Jawaban
> Pasangan yang digunakan adalah:
>
> $$
> a\leftrightarrow A
> $$
>
> dan:
>
> $$
> c\leftrightarrow C
> $$
>
> Gunakan:
>
> $$
> \frac{a}{\sin A}
> =
> \frac{c}{\sin C}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> c
> &=
> \frac{a\sin C}{\sin A}
> \\
> &=
> \frac{
> 6\left(\frac{\sqrt3}{2}\right)
> }{
> \frac{\sqrt2}{2}
> }
> \\
> &=
> \frac{6\sqrt3}{\sqrt2}
> \\
> &=
> 3\sqrt6
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> c=3\sqrt6
> }
> $$

---

## Contoh Soal 3

Pada segitiga $ABC$ diketahui:

$$
A=30^\circ
$$

$$
a=5
$$

dan:

$$
b=5\sqrt2
$$

Tentukan kemungkinan besar sudut $B$.

> [!success]- Klik untuk Lihat Jawaban
> Gunakan:
>
> $$
> \frac{\sin A}{a}
> =
> \frac{\sin B}{b}
> $$
>
> Substitusikan:
>
> $$
> \frac{\sin30^\circ}{5}
> =
> \frac{\sin B}{5\sqrt2}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> \sin B
> &=
> \frac{5\sqrt2\sin30^\circ}{5}
> \\
> &=
> \sqrt2
> \left(
> \frac12
> \right)
> \\
> &=
> \frac{\sqrt2}{2}
> \end{aligned}
> $$
>
> Karena:
>
> $$
> \sin45^\circ
> =
> \frac{\sqrt2}{2}
> $$
>
> maka:
>
> $$
> B=45^\circ
> $$
>
> Namun:
>
> $$
> \sin135^\circ
> =
> \frac{\sqrt2}{2}
> $$
>
> sehingga terdapat kemungkinan:
>
> $$
> B=135^\circ
> $$
>
> Periksa jumlah sudut.
>
> Untuk:
>
> $$
> B=45^\circ
> $$
>
> diperoleh:
>
> $$
> C
> =
> 180^\circ-30^\circ-45^\circ
> =
> 105^\circ
> $$
>
> Sedangkan untuk:
>
> $$
> B=135^\circ
> $$
>
> diperoleh:
>
> $$
> C
> =
> 180^\circ-30^\circ-135^\circ
> =
> 15^\circ
> $$
>
> Kedua nilai menghasilkan sudut $C$ yang positif.
>
> Jadi terdapat dua kemungkinan:
>
> $$
> \boxed{
> B=45^\circ
> }
> $$
>
> atau:
>
> $$
> \boxed{
> B=135^\circ
> }
> $$

---

## Contoh Soal 4

Pada segitiga $ABC$ diketahui:

$$
A=45^\circ
$$

$$
B=60^\circ
$$

dan:

$$
c=12
$$

Tentukan panjang sisi $a$.

> [!success]- Klik untuk Lihat Jawaban
> Pertama, tentukan sudut $C$:
>
> $$
> \begin{aligned}
> C
> &=
> 180^\circ-A-B
> \\
> &=
> 180^\circ-45^\circ-60^\circ
> \\
> &=
> 75^\circ
> \end{aligned}
> $$
>
> Gunakan:
>
> $$
> \frac{a}{\sin A}
> =
> \frac{c}{\sin C}
> $$
>
> Maka:
>
> $$
> a
> =
> \frac{12\sin45^\circ}{\sin75^\circ}
> $$
>
> Karena:
>
> $$
> \sin45^\circ
> =
> \frac{\sqrt2}{2}
> $$
>
> dan:
>
> $$
> \sin75^\circ
> =
> \frac{\sqrt6+\sqrt2}{4}
> $$
>
> maka:
>
> $$
> \begin{aligned}
> a
> &=
> \frac{
> 12\left(\frac{\sqrt2}{2}\right)
> }{
> \frac{\sqrt6+\sqrt2}{4}
> }
> \\
> &=
> \frac{24\sqrt2}{\sqrt6+\sqrt2}
> \\
> &=
> 12(\sqrt3-1)
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> a=12(\sqrt3-1)
> }
> $$

---

## Contoh Soal 5

Dua orang pengamat, Andi dan Budi, terpisah sejauh:

$$
10\text{ km}
$$

Mereka mengamati sebuah balon udara yang berada di antara keduanya.

Dari posisi Andi, garis pandang ke balon membentuk sudut:

$$
45^\circ
$$

terhadap garis Andi-Budi.

Dari posisi Budi, garis pandang ke balon membentuk sudut:

$$
60^\circ
$$

Tentukan jarak Andi ke balon udara.

> [!success]- Klik untuk Lihat Jawaban
> Misalkan:
>
> - Titik $A$ adalah posisi Andi.
> - Titik $B$ adalah posisi Budi.
> - Titik $C$ adalah posisi balon.
>
> Maka:
>
> $$
> A=45^\circ
> $$
>
> $$
> B=60^\circ
> $$
>
> dan:
>
> $$
> c=AB=10
> $$
>
> Jarak Andi ke balon adalah:
>
> $$
> b=AC
> $$
>
> Tentukan sudut $C$:
>
> $$
> \begin{aligned}
> C
> &=
> 180^\circ-45^\circ-60^\circ
> \\
> &=
> 75^\circ
> \end{aligned}
> $$
>
> Gunakan Aturan Sinus:
>
> $$
> \frac{b}{\sin B}
> =
> \frac{c}{\sin C}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> b
> &=
> \frac{10\sin60^\circ}{\sin75^\circ}
> \\
> &\approx
> 8.97
> \end{aligned}
> $$
>
> Jadi, jarak Andi ke balon udara kira-kira:
>
> $$
> \boxed{
> 8.97\text{ km}
> }
> $$

---

## Contoh Soal 6

Pada segitiga $ABC$ diketahui:

$$
a=8
$$

dan:

$$
A=30^\circ
$$

Tentukan jari-jari lingkaran luar segitiga.

> [!success]- Klik untuk Lihat Jawaban
> Gunakan:
>
> $$
> \frac{a}{\sin A}
> =
> 2R
> $$
>
> Substitusikan:
>
> $$
> \frac{8}{\sin30^\circ}
> =
> 2R
> $$
>
> Karena:
>
> $$
> \sin30^\circ
> =
> \frac12
> $$
>
> maka:
>
> $$
> \begin{aligned}
> \frac{8}{\frac12}
> &=
> 2R
> \\
> 16
> &=
> 2R
> \\
> R
> &=
> 8
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> R=8
> }
> $$

---

## Contoh Soal 7

Pada segitiga $ABC$ diketahui:

$$
A=30^\circ
$$

$$
a=10
$$

dan:

$$
b=10
$$

Tentukan sudut $B$ dan $C$.

> [!success]- Klik untuk Lihat Jawaban
> Karena:
>
> $$
> a=b
> $$
>
> sebenarnya dapat langsung disimpulkan bahwa:
>
> $$
> A=B
> $$
>
> Kita dapat memverifikasinya menggunakan Aturan Sinus:
>
> $$
> \frac{\sin A}{a}
> =
> \frac{\sin B}{b}
> $$
>
> Substitusikan:
>
> $$
> \frac{\sin30^\circ}{10}
> =
> \frac{\sin B}{10}
> $$
>
> sehingga:
>
> $$
> \sin B
> =
> \sin30^\circ
> $$
>
> Salah satu kemungkinan:
>
> $$
> B=30^\circ
> $$
>
> Kemungkinan lainnya:
>
> $$
> B=150^\circ
> $$
>
> Namun, jika:
>
> $$
> B=150^\circ
> $$
>
> maka:
>
> $$
> A+B
> =
> 30^\circ+150^\circ
> =
> 180^\circ
> $$
>
> sehingga tidak terdapat sudut positif untuk $C$.
>
> Maka:
>
> $$
> B=30^\circ
> $$
>
> Selanjutnya:
>
> $$
> \begin{aligned}
> C
> &=
> 180^\circ-A-B
> \\
> &=
> 180^\circ-30^\circ-30^\circ
> \\
> &=
> 120^\circ
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> B=30^\circ,\qquad C=120^\circ
> }
> $$

---

## Ringkasan

Aturan Sinus menyatakan:

$$
\boxed{
\frac{a}{\sin A}
=
\frac{b}{\sin B}
=
\frac{c}{\sin C}
}
$$

Pasangan sisi dan sudutnya adalah:

$$
\boxed{
a\leftrightarrow A,\qquad
b\leftrightarrow B,\qquad
c\leftrightarrow C
}
$$

Aturan Sinus terutama digunakan jika:

1. Diketahui dua sudut dan satu sisi.
2. Diketahui dua sisi dan satu sudut di depan salah satu sisi.
3. Terdapat setidaknya satu pasangan sisi dan sudut yang sudah diketahui.

Hubungan Aturan Sinus dengan jari-jari lingkaran luar adalah:

$$
\boxed{
\frac{a}{\sin A}
=
\frac{b}{\sin B}
=
\frac{c}{\sin C}
=
2R
}
$$

---

## Konsep Terkait

- [[Trigonometri/02 - Perbandingan Trigonometri Segitiga Siku-Siku|02 - Perbandingan Trigonometri Segitiga Siku-Siku]]
- [[Trigonometri/10 - Aturan Cosinus]]
- [[Trigonometri/Penerapan Aturan Sinus dan Cosinus - Luas Segitiga]]