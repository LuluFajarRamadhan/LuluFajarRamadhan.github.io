---
title:
---

---
title:
---

# Aturan Cosinus

Aturan Sinus sangat efektif ketika terdapat pasangan sisi dan sudut yang saling berhadapan.

Namun, bagaimana jika yang diketahui adalah:

- Dua sisi dan sudut yang diapit oleh kedua sisi tersebut.
- Ketiga panjang sisi segitiga.

Pada kondisi tersebut, kita dapat menggunakan **Aturan Cosinus**.

Aturan Cosinus menghubungkan:

- Ketiga panjang sisi segitiga.
- Cosinus salah satu sudutnya.

Aturan ini berlaku untuk semua jenis segitiga:

- Segitiga lancip.
- Segitiga siku-siku.
- Segitiga tumpul.

Aturan Cosinus juga dapat dipandang sebagai bentuk umum dari **Teorema Pythagoras**.

---

## 1. Penamaan Sisi dan Sudut pada Segitiga

Misalkan terdapat segitiga $ABC$.

Pada segitiga tersebut:

- Sisi $a$ berada di depan sudut $A$.
- Sisi $b$ berada di depan sudut $B$.
- Sisi $c$ berada di depan sudut $C$.

Dengan demikian:

$$
a\leftrightarrow A
$$

$$
b\leftrightarrow B
$$

$$
c\leftrightarrow C
$$

| Sudut | Sisi di Depannya |
|---|---|
| $\angle A$ | $a$ |
| $\angle B$ | $b$ |
| $\angle C$ | $c$ |

> [!important] Pasangan Sisi dan Sudut
> Sama seperti pada Aturan Sinus, penamaan sisi pada Aturan Cosinus mengikuti sudut yang berada di depannya.
>
> $$
> \boxed{
> a\leftrightarrow A,\qquad
> b\leftrightarrow B,\qquad
> c\leftrightarrow C
> }
> $$

---

## 2. Formulasi Aturan Cosinus

Pada segitiga $ABC$, berlaku tiga bentuk Aturan Cosinus.

### Untuk Sisi $a$

$$
\boxed{
a^2=b^2+c^2-2bc\cos A
}
$$

### Untuk Sisi $b$

$$
\boxed{
b^2=a^2+c^2-2ac\cos B
}
$$

### Untuk Sisi $c$

$$
\boxed{
c^2=a^2+b^2-2ab\cos C
}
$$

Perhatikan pola setiap rumus.

Misalnya:

$$
a^2=b^2+c^2-2bc\cos A
$$

Sisi yang dicari adalah:

$$
a
$$

maka sudut yang digunakan adalah sudut di depannya:

$$
A
$$

Sedangkan dua sisi lainnya:

$$
b\text{ dan }c
$$

merupakan sisi yang mengapit sudut $A$.

> [!tip] Pola Aturan Cosinus
> Untuk mencari suatu sisi:
>
> $$
> \boxed{
> (\text{sisi})^2
> =
> (\text{sisi lain})^2
> +
> (\text{sisi lain})^2
> -
> 2(\text{kedua sisi lain})\cos(\text{sudut di depan sisi yang dicari})
> }
> $$

---

## 3. Aturan Cosinus sebagai Perluasan Teorema Pythagoras

Perhatikan rumus:

$$
c^2=a^2+b^2-2ab\cos C
$$

Jika:

$$
C=90^\circ
$$

maka:

$$
\cos90^\circ=0
$$

Sehingga:

$$
\begin{aligned}
c^2
&=
a^2+b^2-2ab\cos90^\circ
\\
&=
a^2+b^2-2ab(0)
\\
&=
a^2+b^2
\end{aligned}
$$

Kita memperoleh:

$$
\boxed{
c^2=a^2+b^2
}
$$

yang merupakan Teorema Pythagoras.

> [!important] Hubungan dengan Pythagoras
> Teorema Pythagoras sebenarnya merupakan kasus khusus Aturan Cosinus ketika sudut yang diapit bernilai:
>
> $$
> 90^\circ
> $$

---

## 4. Kapan Menggunakan Aturan Cosinus?

Aturan Cosinus terutama digunakan pada dua kondisi.

### Kondisi 1: Dua Sisi dan Sudut Apit

Misalnya diketahui:

$$
b,\quad c,\quad A
$$

Sudut $A$ terletak di antara sisi $b$ dan $c$.

Untuk mencari sisi $a$, gunakan:

$$
\boxed{
a^2=b^2+c^2-2bc\cos A
}
$$

Kondisi ini biasa disebut:

$$
\text{Sisi-Sudut-Sisi}
$$

atau:

$$
\text{SAS}
$$

---

### Kondisi 2: Ketiga Sisi Diketahui

Misalnya diketahui:

$$
a,\quad b,\quad c
$$

dan ingin menentukan sudut $A$.

Rumus:

$$
a^2=b^2+c^2-2bc\cos A
$$

dapat diubah menjadi rumus untuk mencari sudut.

Kondisi ini disebut:

$$
\text{Sisi-Sisi-Sisi}
$$

atau:

$$
\text{SSS}
$$

> [!important] Strategi Pemilihan
> Gunakan Aturan Cosinus jika:
>
> 1. Diketahui **dua sisi dan sudut apit**.
> 2. Diketahui **ketiga sisi** dan ingin mencari sudut.

---

## 5. Menentukan Panjang Sisi

Misalkan diketahui:

$$
b,\quad c,\quad A
$$

dan ingin mencari sisi:

$$
a
$$

Gunakan:

$$
a^2=b^2+c^2-2bc\cos A
$$

Setelah memperoleh $a^2$, jangan lupa mencari akar positifnya:

$$
\boxed{
a=
\sqrt{
b^2+c^2-2bc\cos A
}
}
$$

Karena panjang sisi selalu positif, kita menggunakan akar positif.

---

## 6. Menentukan Besar Sudut

Jika ketiga sisi diketahui, Aturan Cosinus dapat disusun kembali untuk menentukan sudut.

### Mencari Sudut $A$

Mulai dari:

$$
a^2=b^2+c^2-2bc\cos A
$$

Pindahkan:

$$
2bc\cos A=b^2+c^2-a^2
$$

Sehingga:

$$
\boxed{
\cos A
=
\frac{b^2+c^2-a^2}{2bc}
}
$$

Maka:

$$
\boxed{
A
=
\cos^{-1}
\left(
\frac{b^2+c^2-a^2}{2bc}
\right)
}
$$

### Mencari Sudut $B$

$$
\boxed{
\cos B
=
\frac{a^2+c^2-b^2}{2ac}
}
$$

### Mencari Sudut $C$

$$
\boxed{
\cos C
=
\frac{a^2+b^2-c^2}{2ab}
}
$$

> [!warning] Perhatikan Notasi
> Notasi:
>
> $$
> \cos^{-1}x
> $$
>
> berarti invers cosinus atau **arccos**, bukan:
>
> $$
> \frac{1}{\cos x}
> $$
>
> Dalam kalkulator biasanya digunakan tombol:
>
> $$
> \boxed{\cos^{-1}}
> $$

---

## 7. Langkah Menggunakan Aturan Cosinus

### Jika Mencari Sisi

Gunakan langkah berikut:

1. Tentukan sisi yang ingin dicari.
2. Tentukan sudut yang berada di depan sisi tersebut.
3. Identifikasi dua sisi yang mengapit sudut.
4. Pilih rumus Aturan Cosinus yang sesuai.
5. Substitusikan nilai.
6. Hitung kuadrat sisi.
7. Ambil akar positif.

Misalnya ingin mencari $a$:

$$
a^2=b^2+c^2-2bc\cos A
$$

---

### Jika Mencari Sudut

Gunakan langkah berikut:

1. Tentukan sudut yang ingin dicari.
2. Tentukan sisi yang berada di depan sudut tersebut.
3. Gunakan bentuk Aturan Cosinus untuk sudut.
4. Hitung nilai cosinus sudut.
5. Gunakan fungsi $\cos^{-1}$.

Misalnya ingin mencari $A$:

$$
\cos A
=
\frac{b^2+c^2-a^2}{2bc}
$$

kemudian:

$$
A
=
\cos^{-1}
\left(
\frac{b^2+c^2-a^2}{2bc}
\right)
$$

---

## 8. Menentukan Jenis Segitiga dengan Aturan Cosinus

Aturan Cosinus dapat digunakan untuk menentukan apakah suatu segitiga merupakan:

- Segitiga lancip.
- Segitiga siku-siku.
- Segitiga tumpul.

Misalkan $c$ merupakan sisi terpanjang.

Gunakan:

$$
c^2
\quad\text{dan}\quad
a^2+b^2
$$

### Segitiga Lancip

Jika:

$$
\boxed{
c^2<a^2+b^2
}
$$

maka:

$$
C<90^\circ
$$

sehingga segitiga tersebut adalah segitiga lancip.

### Segitiga Siku-Siku

Jika:

$$
\boxed{
c^2=a^2+b^2
}
$$

maka:

$$
C=90^\circ
$$

sehingga segitiga tersebut adalah segitiga siku-siku.

### Segitiga Tumpul

Jika:

$$
\boxed{
c^2>a^2+b^2
}
$$

maka:

$$
C>90^\circ
$$

sehingga segitiga tersebut adalah segitiga tumpul.

> [!important] Sisi Terpanjang
> Dalam pengujian ini, gunakan **sisi terpanjang** sebagai sisi $c$.
>
> Bandingkan:
>
> $$
> c^2
> $$
>
> dengan:
>
> $$
> a^2+b^2
> $$

---

## 9. Mengapa Tanda Cosinus Menentukan Jenis Sudut?

Perhatikan:

$$
c^2=a^2+b^2-2ab\cos C
$$

### Jika $C$ Lancip

Untuk:

$$
0^\circ<C<90^\circ
$$

berlaku:

$$
\cos C>0
$$

Sehingga:

$$
-2ab\cos C<0
$$

dan:

$$
c^2<a^2+b^2
$$

### Jika $C=90^\circ$

$$
\cos90^\circ=0
$$

sehingga:

$$
c^2=a^2+b^2
$$

### Jika $C$ Tumpul

Untuk:

$$
90^\circ<C<180^\circ
$$

berlaku:

$$
\cos C<0
$$

Maka:

$$
-2ab\cos C>0
$$

sehingga:

$$
c^2>a^2+b^2
$$

---

## 10. Hubungan Panjang Sisi dengan Besar Sudut

Pada setiap segitiga berlaku:

$$
\boxed{
\text{sisi yang lebih panjang berhadapan dengan sudut yang lebih besar}
}
$$

Misalnya:

$$
a>b>c
$$

maka:

$$
A>B>C
$$

Sebaliknya:

$$
A>B>C
$$

maka:

$$
a>b>c
$$

Prinsip ini berguna untuk memeriksa apakah hasil perhitungan masuk akal.

Sebagai contoh, jika sisi $a$ merupakan sisi terpanjang, tetapi hasil perhitungan menghasilkan:

$$
A=20^\circ
$$

sementara sudut lain lebih besar, maka perhitungan perlu diperiksa kembali.

---

## 11. Aturan Sinus atau Aturan Cosinus?

Pemilihan rumus sangat bergantung pada informasi yang diketahui.

| Informasi yang Diketahui | Metode yang Biasanya Digunakan |
|---|---|
| Dua sudut dan satu sisi | Aturan Sinus |
| Dua sisi dan sudut di depan salah satu sisi | Aturan Sinus |
| Dua sisi dan sudut apit | Aturan Cosinus |
| Tiga sisi | Aturan Cosinus |

### Contoh 1

Diketahui:

$$
a,\quad A,\quad B
$$

Karena terdapat pasangan:

$$
a\leftrightarrow A
$$

gunakan Aturan Sinus.

### Contoh 2

Diketahui:

$$
b,\quad c,\quad A
$$

Sudut $A$ diapit oleh sisi $b$ dan $c$.

Gunakan Aturan Cosinus.

### Contoh 3

Diketahui:

$$
a,\quad b,\quad c
$$

Gunakan Aturan Cosinus untuk menentukan sudut.

> [!tip] Strategi Cepat
> **Ada pasangan sisi-sudut yang diketahui?**
>
> Pertimbangkan Aturan Sinus.
>
> **Diketahui dua sisi dan sudut apit?**
>
> Gunakan Aturan Cosinus.
>
> **Diketahui tiga sisi?**
>
> Gunakan Aturan Cosinus.

---

## 12. Kesalahan yang Sering Terjadi

> [!warning] Kesalahan yang Sering Terjadi
> - Salah menentukan sisi yang berada di depan suatu sudut.
> - Menggunakan sudut yang bukan sudut apit ketika dua sisi diketahui.
> - Salah menentukan dua sisi yang dikalikan pada suku $-2bc\cos A$.
> - Lupa tanda negatif pada suku cosinus.
> - Lupa mengkuadratkan panjang sisi.
> - Berhenti pada nilai $a^2$ tanpa mencari $a$.
> - Salah menggunakan $\cos^{-1}$ pada kalkulator.
> - Menggunakan kalkulator dalam mode radian ketika sudut dinyatakan dalam derajat.
> - Salah memasangkan rumus $a^2$ dengan sudut selain $A$.
> - Membulatkan nilai terlalu awal.
> - Menganggap Aturan Cosinus hanya berlaku untuk segitiga lancip.
> - Menganggap $\cos^{-1}x=\frac{1}{\cos x}$.

Pola yang benar adalah:

$$
\boxed{
a^2=b^2+c^2-2bc\cos A
}
$$

$$
\boxed{
b^2=a^2+c^2-2ac\cos B
}
$$

$$
\boxed{
c^2=a^2+b^2-2ab\cos C
}
$$

---

# Contoh Soal

## Contoh Soal 1

Pada segitiga $ABC$ diketahui:

$$
b=7
$$

$$
c=5
$$

dan:

$$
A=60^\circ
$$

Tentukan panjang sisi $a$.

> [!success]- Klik untuk Lihat Jawaban
> Karena diketahui dua sisi dan sudut apit, gunakan Aturan Cosinus:
>
> $$
> a^2
> =
> b^2+c^2-2bc\cos A
> $$
>
> Substitusikan:
>
> $$
> \begin{aligned}
> a^2
> &=
> 7^2+5^2-2(7)(5)\cos60^\circ
> \\
> &=
> 49+25-70\left(\frac12\right)
> \\
> &=
> 74-35
> \\
> &=
> 39
> \end{aligned}
> $$
>
> Maka:
>
> $$
> a=\sqrt{39}
> $$
>
> Jadi:
>
> $$
> \boxed{
> a=\sqrt{39}
> }
> $$

---

## Contoh Soal 2

Pada segitiga $ABC$ diketahui:

$$
a=6
$$

$$
b=8
$$

dan:

$$
C=60^\circ
$$

Tentukan panjang sisi $c$.

> [!success]- Klik untuk Lihat Jawaban
> Gunakan:
>
> $$
> c^2
> =
> a^2+b^2-2ab\cos C
> $$
>
> Substitusikan:
>
> $$
> \begin{aligned}
> c^2
> &=
> 6^2+8^2-2(6)(8)\cos60^\circ
> \\
> &=
> 36+64-96\left(\frac12\right)
> \\
> &=
> 100-48
> \\
> &=
> 52
> \end{aligned}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> c
> &=
> \sqrt{52}
> \\
> &=
> 2\sqrt{13}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> c=2\sqrt{13}
> }
> $$

---

## Contoh Soal 3

Suatu segitiga memiliki panjang sisi:

$$
a=5,\qquad
b=7,\qquad
c=8
$$

Tentukan besar sudut $C$.

> [!success]- Klik untuk Lihat Jawaban
> Gunakan:
>
> $$
> \cos C
> =
> \frac{a^2+b^2-c^2}{2ab}
> $$
>
> Substitusikan:
>
> $$
> \begin{aligned}
> \cos C
> &=
> \frac{5^2+7^2-8^2}{2(5)(7)}
> \\
> &=
> \frac{25+49-64}{70}
> \\
> &=
> \frac{10}{70}
> \\
> &=
> \frac17
> \end{aligned}
> $$
>
> Maka:
>
> $$
> C
> =
> \cos^{-1}
> \left(
> \frac17
> \right)
> $$
>
> Sehingga:
>
> $$
> C\approx81.79^\circ
> $$
>
> Jadi:
>
> $$
> \boxed{
> C\approx81.79^\circ
> }
> $$

---

## Contoh Soal 4

Tentukan jenis segitiga yang mempunyai panjang sisi:

$$
6,\quad 8,\quad 10
$$

> [!success]- Klik untuk Lihat Jawaban
> Sisi terpanjang adalah:
>
> $$
> c=10
> $$
>
> Dua sisi lainnya:
>
> $$
> a=6
> $$
>
> dan:
>
> $$
> b=8
> $$
>
> Bandingkan:
>
> $$
> c^2
> $$
>
> dengan:
>
> $$
> a^2+b^2
> $$
>
> Hitung:
>
> $$
> c^2=10^2=100
> $$
>
> Sedangkan:
>
> $$
> \begin{aligned}
> a^2+b^2
> &=
> 6^2+8^2
> \\
> &=
> 36+64
> \\
> &=
> 100
> \end{aligned}
> $$
>
> Karena:
>
> $$
> c^2=a^2+b^2
> $$
>
> maka segitiga tersebut merupakan:
>
> $$
> \boxed{
> \text{segitiga siku-siku}
> }
> $$

---

## Contoh Soal 5

Tentukan apakah segitiga dengan panjang sisi:

$$
5,\quad 6,\quad 10
$$

merupakan segitiga lancip, siku-siku, atau tumpul.

> [!success]- Klik untuk Lihat Jawaban
> Sisi terpanjang adalah:
>
> $$
> c=10
> $$
>
> Bandingkan:
>
> $$
> c^2
> $$
>
> dengan:
>
> $$
> a^2+b^2
> $$
>
> Hitung:
>
> $$
> c^2=10^2=100
> $$
>
> dan:
>
> $$
> \begin{aligned}
> a^2+b^2
> &=
> 5^2+6^2
> \\
> &=
> 25+36
> \\
> &=
> 61
> \end{aligned}
> $$
>
> Karena:
>
> $$
> 100>61
> $$
>
> maka:
>
> $$
> c^2>a^2+b^2
> $$
>
> sehingga sudut di depan sisi $c$ merupakan sudut tumpul.
>
> Jadi:
>
> $$
> \boxed{
> \text{segitiga tumpul}
> }
> $$

---

## Contoh Soal 6

Dua kapal meninggalkan pelabuhan yang sama pada waktu yang bersamaan.

Kapal A berlayar dengan kecepatan:

$$
12\text{ knot}
$$

Kapal B berlayar dengan kecepatan:

$$
10\text{ knot}
$$

Sudut antara arah perjalanan kedua kapal adalah:

$$
60^\circ
$$

Tentukan jarak kedua kapal setelah:

$$
2\text{ jam}
$$

> [!success]- Klik untuk Lihat Jawaban
> Tentukan terlebih dahulu jarak yang ditempuh masing-masing kapal.
>
> Kapal A:
>
> $$
> \begin{aligned}
> s_A
> &=
> 12(2)
> \\
> &=
> 24\text{ mil laut}
> \end{aligned}
> $$
>
> Kapal B:
>
> $$
> \begin{aligned}
> s_B
> &=
> 10(2)
> \\
> &=
> 20\text{ mil laut}
> \end{aligned}
> $$
>
> Misalkan jarak antara kedua kapal adalah $c$.
>
> Karena sudut antara jalur kedua kapal adalah:
>
> $$
> 60^\circ
> $$
>
> gunakan Aturan Cosinus:
>
> $$
> c^2
> =
> 20^2+24^2-2(20)(24)\cos60^\circ
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> c^2
> &=
> 400+576-960\left(\frac12\right)
> \\
> &=
> 976-480
> \\
> &=
> 496
> \end{aligned}
> $$
>
> Sehingga:
>
> $$
> \begin{aligned}
> c
> &=
> \sqrt{496}
> \\
> &=
> \sqrt{16(31)}
> \\
> &=
> 4\sqrt{31}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> c=4\sqrt{31}\text{ mil laut}
> }
> $$
>
> atau kira-kira:
>
> $$
> \boxed{
> c\approx22.27\text{ mil laut}
> }
> $$

---

## Contoh Soal 7

Suatu segitiga mempunyai dua sisi:

$$
a=10
$$

dan:

$$
b=14
$$

Sudut yang diapit oleh kedua sisi tersebut adalah:

$$
C=120^\circ
$$

Tentukan panjang sisi $c$.

> [!success]- Klik untuk Lihat Jawaban
> Gunakan:
>
> $$
> c^2
> =
> a^2+b^2-2ab\cos C
> $$
>
> Substitusikan:
>
> $$
> \begin{aligned}
> c^2
> &=
> 10^2+14^2-2(10)(14)\cos120^\circ
> \\
> &=
> 100+196-280
> \left(
> -\frac12
> \right)
> \\
> &=
> 296+140
> \\
> &=
> 436
> \end{aligned}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> c
> &=
> \sqrt{436}
> \\
> &=
> 2\sqrt{109}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{
> c=2\sqrt{109}
> }
> $$
>
> Perhatikan bahwa $C=120^\circ$ merupakan sudut tumpul.
>
> Karena:
>
> $$
> \cos120^\circ<0
> $$
>
> suku:
>
> $$
> -2ab\cos C
> $$
>
> menjadi positif. Akibatnya, sisi $c$ menjadi relatif panjang.

---

## Ringkasan

Aturan Cosinus pada segitiga $ABC$ adalah:

$$
\boxed{
a^2=b^2+c^2-2bc\cos A
}
$$

$$
\boxed{
b^2=a^2+c^2-2ac\cos B
}
$$

$$
\boxed{
c^2=a^2+b^2-2ab\cos C
}
$$

Untuk mencari sudut:

$$
\boxed{
\cos A
=
\frac{b^2+c^2-a^2}{2bc}
}
$$

$$
\boxed{
\cos B
=
\frac{a^2+c^2-b^2}{2ac}
}
$$

$$
\boxed{
\cos C
=
\frac{a^2+b^2-c^2}{2ab}
}
$$

Aturan Cosinus terutama digunakan ketika:

1. Diketahui dua sisi dan sudut apit.
2. Diketahui ketiga sisi dan ingin menentukan sudut.

Jika $c$ merupakan sisi terpanjang:

$$
\boxed{
c^2<a^2+b^2
\Rightarrow
\text{segitiga lancip}
}
$$

$$
\boxed{
c^2=a^2+b^2
\Rightarrow
\text{segitiga siku-siku}
}
$$

$$
\boxed{
c^2>a^2+b^2
\Rightarrow
\text{segitiga tumpul}
}
$$

---

## Konsep Terkait

- [[Teorema Pythagoras dan Fondasi Perbandingan Segitiga]]
- [[Trigonometri/09 - Aturan Sinus|09 - Aturan Sinus]]
- [[Trigonometri/Penerapan Aturan Sinus dan Cosinus - Luas Segitiga]]