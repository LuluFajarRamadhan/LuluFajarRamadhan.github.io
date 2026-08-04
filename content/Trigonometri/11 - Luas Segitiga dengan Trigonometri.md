---
title:
---
# Penerapan Aturan Sinus dan Cosinus pada Luas Segitiga

Luas segitiga dapat ditentukan dengan beberapa cara, bergantung pada informasi yang diketahui dalam soal.

Luas segitiga biasanya dihitung menggunakan alas dan tinggi. Namun, dalam banyak persoalan matematika tingkat lanjut, tinggi segitiga tidak diketahui secara langsung.

Dengan menggunakan aturan sinus, aturan cosinus, dan rumus Heron, kita dapat menentukan luas segitiga berdasarkan:

- Panjang alas dan tinggi.
- Dua sisi dan satu sudut apit.
- Dua sudut dan satu sisi.
- Tiga panjang sisi.
- Informasi lain yang perlu dilengkapi terlebih dahulu menggunakan aturan sinus atau aturan cosinus.

### 1. Unsur-Unsur pada Segitiga

Perhatikan segitiga $ABC$.

Dalam segitiga tersebut berlaku ketentuan berikut:

- Sisi $a$ terletak di depan sudut $A$.
- Sisi $b$ terletak di depan sudut $B$.
- Sisi $c$ terletak di depan sudut $C$.

Hubungan posisi sisi dan sudut dapat dituliskan sebagai:

| Sudut | Sisi di depannya |
|---|---|
| $A$ | $a$ |
| $B$ | $b$ |
| $C$ | $c$ |

Ketepatan memasangkan sisi dan sudut sangat penting ketika menggunakan aturan sinus maupun aturan cosinus.

> [!important] Pasangan Sisi dan Sudut
> Sisi dan sudut yang saling berhadapan harus ditulis sebagai pasangan yang sesuai.
>
> $$
> a\leftrightarrow A,
> \qquad
> b\leftrightarrow B,
> \qquad
> c\leftrightarrow C
> $$

### 2. Review Luas Segitiga Menggunakan Alas dan Tinggi

![[Trigonometri/Gambar/review luas segitiga.png]]
Rumus dasar luas segitiga adalah:

$$
\boxed{
L=\frac{1}{2}\times\text{alas}\times\text{tinggi}
}
$$

Jika sisi $a$ digunakan sebagai alas dan tinggi terhadap sisi $a$ dinyatakan dengan $h_a$, maka:

$$
L=\frac{1}{2}ah_a
$$

Jika sisi $b$ digunakan sebagai alas, maka:

$$
L=\frac{1}{2}bh_b
$$

Jika sisi $c$ digunakan sebagai alas, maka:

$$
L=\frac{1}{2}ch_c
$$

Dengan demikian:

$$
\boxed{
L
=
\frac{1}{2}ah_a
=
\frac{1}{2}bh_b
=
\frac{1}{2}ch_c
}
$$

#### Contoh Dasar

Sebuah segitiga mempunyai alas 12 cm dan tinggi 7 cm.

Luas segitiga tersebut adalah:

$$
\begin{aligned}
L
&=\frac{1}{2}\times 12\times 7
\\
&=6\times 7
\\
&=42
\end{aligned}
$$

Jadi:

$$
\boxed{L=42\text{ cm}^2}
$$

> [!warning] Tinggi Harus Tegak Lurus
> Tinggi segitiga adalah jarak yang tegak lurus dari sebuah titik sudut ke sisi di depannya atau ke perpanjangan sisi tersebut.
>
> Panjang salah satu sisi miring tidak dapat langsung dianggap sebagai tinggi.

### 3. Menghubungkan Tinggi dengan Perbandingan Sinus

Misalkan pada segitiga $ABC$, sisi $c$ digunakan sebagai alas dan ditarik tinggi $h_c$ dari titik $C$ menuju sisi $AB$.

Dari segitiga siku-siku yang terbentuk, berlaku:

$$
\sin A
=
\frac{h_c}{b}
$$

Maka:

$$
h_c=b\sin A
$$

Substitusikan nilai $h_c$ ke rumus luas:

$$
L=\frac{1}{2}ch_c
$$

sehingga:

$$
\begin{aligned}
L
&=\frac{1}{2}c(b\sin A)
\\
&=\frac{1}{2}bc\sin A
\end{aligned}
$$

Jadi, tinggi yang tidak diketahui dapat digantikan oleh hasil kali sisi dengan sinus suatu sudut.

### 4. Luas Segitiga Menggunakan Sinus Sudut

Jika diketahui dua sisi dan sudut apitnya, luas segitiga dapat dihitung dengan rumus:

$$
\boxed{
L=\frac{1}{2}bc\sin A
}
$$

Rumus yang sama dapat dituliskan dalam tiga bentuk:

$$
\boxed{
L
=
\frac{1}{2}bc\sin A
=
\frac{1}{2}ca\sin B
=
\frac{1}{2}ab\sin C
}
$$

Pemilihan rumus bergantung pada dua sisi dan sudut apit yang diketahui.

| Dua sisi yang diketahui | Sudut apit | Rumus luas |
|---|---|---|
| $b$ dan $c$ | $A$ | $L=\frac{1}{2}bc\sin A$ |
| $c$ dan $a$ | $B$ | $L=\frac{1}{2}ca\sin B$ |
| $a$ dan $b$ | $C$ | $L=\frac{1}{2}ab\sin C$ |
![[Trigonometri/Gambar/luas segitiga aturan sinus.png]]


> [!important] Sudut Apit
> Sudut apit adalah sudut yang terletak di antara dua sisi yang digunakan dalam rumus.
>
> Jika sisi yang digunakan adalah $a$ dan $b$, maka sudut apitnya adalah $C$.
>
> Karena itu:
>
> $$
> L=\frac{1}{2}ab\sin C
> $$

### 5. Mengapa Rumus Luas Menggunakan Sinus?

Rumus:

$$
L=\frac{1}{2}bc\sin A
$$

berasal dari rumus dasar:

$$
L=\frac{1}{2}\times\text{alas}\times\text{tinggi}
$$

Jika sisi $c$ digunakan sebagai alas, tinggi segitiga adalah:

$$
h=b\sin A
$$

Maka:

$$
\begin{aligned}
L
&=\frac{1}{2}ch
\\
&=\frac{1}{2}c(b\sin A)
\\
&=\frac{1}{2}bc\sin A
\end{aligned}
$$

Dengan cara yang sama diperoleh:

$$
L=\frac{1}{2}ca\sin B
$$

serta:

$$
L=\frac{1}{2}ab\sin C
$$

### 6. Menentukan Luas Jika Dua Sisi dan Sudut Apit Diketahui

Gunakan langkah berikut:

1. Identifikasi dua sisi yang diketahui.
2. Tentukan sudut yang diapit oleh kedua sisi tersebut.
3. Pilih bentuk rumus luas yang sesuai.
4. Substitusikan panjang sisi dan nilai sinus sudut.
5. Tuliskan satuan luas dalam bentuk satuan kuadrat.

#### Contoh

Diketahui segitiga $ABC$ dengan:

$$
a=10\text{ cm}
$$

$$
b=8\text{ cm}
$$

$$
C=60^\circ
$$

Karena sisi yang diketahui adalah $a$ dan $b$, sedangkan sudut apitnya adalah $C$, gunakan:

$$
L=\frac{1}{2}ab\sin C
$$

Maka:

$$
\begin{aligned}
L
&=\frac{1}{2}(10)(8)\sin 60^\circ
\\
&=40\left(\frac{\sqrt{3}}{2}\right)
\\
&=20\sqrt{3}
\end{aligned}
$$

Jadi:

$$
\boxed{L=20\sqrt{3}\text{ cm}^2}
$$

### 7. Pengaruh Besar Sudut terhadap Luas Segitiga

Jika dua sisi segitiga tetap, luasnya ditentukan oleh nilai sinus sudut apit.

Misalkan panjang sisi $a$ dan $b$ tetap. Maka:

$$
L=\frac{1}{2}ab\sin C
$$

Karena nilai terbesar dari $\sin C$ adalah 1, luas terbesar terjadi ketika:

$$
C=90^\circ
$$

Pada saat itu:

$$
L_{\text{maksimum}}
=
\frac{1}{2}ab
$$

Jika sudut $C$ mendekati $0^\circ$ atau $180^\circ$, maka:

$$
\sin C\to 0
$$

sehingga:

$$
L\to 0
$$

> [!important] Luas Maksimum
> Untuk dua sisi dengan panjang tetap, luas segitiga paling besar diperoleh ketika kedua sisi tersebut saling tegak lurus.
>
> $$
> \boxed{C=90^\circ}
> $$

### 8. Review Aturan Sinus

Aturan sinus menyatakan bahwa perbandingan antara panjang sisi dan sinus sudut di depannya adalah sama.

$$
\boxed{
\frac{a}{\sin A}
=
\frac{b}{\sin B}
=
\frac{c}{\sin C}
}
$$

Aturan sinus digunakan apabila informasi dalam soal belum cukup untuk langsung menghitung luas.

Sebagai contoh, apabila diketahui satu sisi dan dua sudut, langkahnya adalah:

1. Tentukan sudut ketiga.
2. Gunakan aturan sinus untuk mencari sisi lain.
3. Gunakan rumus luas dengan dua sisi dan sudut apit.

#### Menentukan Sudut Ketiga

Jumlah sudut dalam segitiga adalah:

$$
A+B+C=180^\circ
$$

Maka:

$$
C=180^\circ-A-B
$$

### 9. Menggunakan Aturan Sinus Sebelum Menghitung Luas

Diketahui segitiga $ABC$ dengan:

$$
A=30^\circ
$$

$$
B=120^\circ
$$

$$
a=8\text{ cm}
$$

Tentukan luas segitiga tersebut.

Sudut ketiga adalah:

$$
\begin{aligned}
C
&=180^\circ-A-B
\\
&=180^\circ-30^\circ-120^\circ
\\
&=30^\circ
\end{aligned}
$$

Gunakan aturan sinus untuk menentukan sisi $b$:

$$
\frac{a}{\sin A}
=
\frac{b}{\sin B}
$$

Maka:

$$
\begin{aligned}
\frac{8}{\sin 30^\circ}
&=
\frac{b}{\sin 120^\circ}
\\
b
&=
\frac{8\sin 120^\circ}{\sin 30^\circ}
\\
&=
\frac{8\left(\frac{\sqrt{3}}{2}\right)}{\frac{1}{2}}
\\
&=8\sqrt{3}
\end{aligned}
$$

Sekarang diketahui sisi $a$, sisi $b$, dan sudut apit $C$.

Gunakan:

$$
L=\frac{1}{2}ab\sin C
$$

Maka:

$$
\begin{aligned}
L
&=\frac{1}{2}(8)(8\sqrt{3})\sin 30^\circ
\\
&=32\sqrt{3}\left(\frac{1}{2}\right)
\\
&=16\sqrt{3}
\end{aligned}
$$

Jadi:

$$
\boxed{L=16\sqrt{3}\text{ cm}^2}
$$

### 10. Review Aturan Cosinus

Aturan cosinus menghubungkan tiga sisi segitiga dengan salah satu sudutnya.

$$
\boxed{
a^2=b^2+c^2-2bc\cos A
}
$$

Bentuk lainnya adalah:

$$
b^2=c^2+a^2-2ca\cos B
$$

$$
c^2=a^2+b^2-2ab\cos C
$$

Jika ketiga sisi diketahui, nilai cosinus suatu sudut dapat ditentukan dengan mengubah bentuk rumus.

$$
\boxed{
\cos A
=
\frac{b^2+c^2-a^2}{2bc}
}
$$

$$
\cos B
=
\frac{c^2+a^2-b^2}{2ca}
$$

$$
\cos C
=
\frac{a^2+b^2-c^2}{2ab}
$$

### 11. Menggunakan Aturan Cosinus Sebelum Menghitung Luas

Jika diketahui tiga sisi, kita dapat mencari salah satu sudut terlebih dahulu menggunakan aturan cosinus, lalu menghitung luas dengan rumus sinus.

Misalkan diketahui:

$$
a=5\text{ cm},
\qquad
b=7\text{ cm},
\qquad
c=8\text{ cm}
$$

Tentukan sudut $A$ menggunakan aturan cosinus:

$$
\cos A
=
\frac{b^2+c^2-a^2}{2bc}
$$

Maka:

$$
\begin{aligned}
\cos A
&=
\frac{7^2+8^2-5^2}{2(7)(8)}
\\
&=
\frac{49+64-25}{112}
\\
&=
\frac{88}{112}
\\
&=
\frac{11}{14}
\end{aligned}
$$

Gunakan identitas:

$$
\sin^2 A+\cos^2 A=1
$$

Maka:

$$
\begin{aligned}
\sin A
&=
\sqrt{1-\cos^2 A}
\\
&=
\sqrt{1-\left(\frac{11}{14}\right)^2}
\\
&=
\sqrt{\frac{196-121}{196}}
\\
&=
\sqrt{\frac{75}{196}}
\\
&=
\frac{5\sqrt{3}}{14}
\end{aligned}
$$

Gunakan rumus luas:

$$
L=\frac{1}{2}bc\sin A
$$

Maka:

$$
\begin{aligned}
L
&=\frac{1}{2}(7)(8)\left(\frac{5\sqrt{3}}{14}\right)
\\
&=10\sqrt{3}
\end{aligned}
$$

Jadi:

$$
\boxed{L=10\sqrt{3}\text{ cm}^2}
$$

> [!note] Pilihan Metode
> Jika tiga sisi diketahui, penggunaan aturan cosinus kemudian rumus luas sinus tetap benar.
>
> Namun, rumus Heron biasanya memberikan penyelesaian yang lebih langsung karena tidak perlu mencari sudut terlebih dahulu.

### 12. Luas Segitiga Menggunakan Rumus Heron

Rumus Heron digunakan untuk menentukan luas segitiga jika ketiga panjang sisinya diketahui.

Misalkan panjang sisi segitiga adalah $a$, $b$, dan $c$.

Tentukan semiperimeter atau setengah keliling:

$$
\boxed{
s=\frac{a+b+c}{2}
}
$$

Kemudian luas segitiga ditentukan dengan:

$$
\boxed{
L
=
\sqrt{s(s-a)(s-b)(s-c)}
}
$$

Huruf $s$ menyatakan semiperimeter, bukan salah satu sisi segitiga.

![[Trigonometri/Gambar/luas segitiga heron.png]]

### 13. Langkah Menggunakan Rumus Heron

Gunakan langkah berikut:

1. Pastikan ketiga panjang sisi diketahui.
2. Periksa apakah ketiga sisi dapat membentuk segitiga.
3. Hitung semiperimeter:

$$
s=\frac{a+b+c}{2}
$$

4. Hitung nilai $s-a$, $s-b$, dan $s-c$.
5. Substitusikan seluruh nilai ke rumus Heron.
6. Sederhanakan bentuk akar jika memungkinkan.
7. Tuliskan satuan luas dalam satuan kuadrat.

### 14. Syarat Tiga Sisi Membentuk Segitiga

Tiga bilangan positif dapat menjadi panjang sisi segitiga jika jumlah setiap dua sisi lebih besar daripada sisi ketiga.

$$
a+b>c
$$

$$
b+c>a
$$

$$
c+a>b
$$

Syarat tersebut disebut ketaksamaan segitiga.

Sebagai contoh, panjang 4 cm, 5 cm, dan 8 cm dapat membentuk segitiga karena:

$$
4+5>8
$$

$$
5+8>4
$$

$$
8+4>5
$$

Sebaliknya, panjang 3 cm, 4 cm, dan 8 cm tidak dapat membentuk segitiga karena:

$$
3+4<8
$$

> [!warning] Periksa Ketaksamaan Segitiga
> Rumus Heron hanya digunakan jika ketiga panjang sisi benar-benar dapat membentuk segitiga.
>
> Jika jumlah dua sisi sama dengan atau lebih kecil daripada sisi ketiga, bangun yang terbentuk bukan segitiga.

### 15. Contoh Penggunaan Rumus Heron

Diketahui sebuah segitiga mempunyai sisi:

$$
a=13\text{ cm}
$$

$$
b=14\text{ cm}
$$

$$
c=15\text{ cm}
$$

Hitung semiperimeter:

$$
\begin{aligned}
s
&=\frac{a+b+c}{2}
\\
&=\frac{13+14+15}{2}
\\
&=\frac{42}{2}
\\
&=21
\end{aligned}
$$

Gunakan rumus Heron:

$$
\begin{aligned}
L
&=\sqrt{s(s-a)(s-b)(s-c)}
\\
&=\sqrt{21(21-13)(21-14)(21-15)}
\\
&=\sqrt{21(8)(7)(6)}
\\
&=\sqrt{7056}
\\
&=84
\end{aligned}
$$

Jadi:

$$
\boxed{L=84\text{ cm}^2}
$$

### 16. Rumus Heron pada Segitiga Sama Kaki

Misalkan segitiga sama kaki mempunyai sisi yang sama panjang $a$, $a$, dan alas $b$.

Semiperimeternya adalah:

$$
s=\frac{2a+b}{2}
$$

Luasnya dapat dihitung menggunakan:

$$
L
=
\sqrt{s(s-a)(s-a)(s-b)}
$$

Sebagai contoh, sebuah segitiga sama kaki mempunyai sisi 5 cm, 5 cm, dan 6 cm.

Semiperimeternya:

$$
\begin{aligned}
s
&=\frac{5+5+6}{2}
\\
&=8
\end{aligned}
$$

Luasnya:

$$
\begin{aligned}
L
&=\sqrt{8(8-5)(8-5)(8-6)}
\\
&=\sqrt{8(3)(3)(2)}
\\
&=\sqrt{144}
\\
&=12
\end{aligned}
$$

Jadi:

$$
\boxed{L=12\text{ cm}^2}
$$

### 17. Luas Segitiga Siku-Siku

Pada segitiga siku-siku, dua sisi yang saling tegak lurus dapat digunakan sebagai alas dan tinggi.

Jika sisi siku-sikunya adalah $a$ dan $b$, maka:

$$
\boxed{
L=\frac{1}{2}ab
}
$$

Rumus tersebut juga sesuai dengan rumus sinus karena sudut apitnya adalah $90^\circ$.

$$
\begin{aligned}
L
&=\frac{1}{2}ab\sin 90^\circ
\\
&=\frac{1}{2}ab(1)
\\
&=\frac{1}{2}ab
\end{aligned}
$$

### 18. Luas Segitiga Sama Sisi

Jika panjang sisi segitiga sama sisi adalah $a$, maka setiap sudutnya adalah:

$$
60^\circ
$$

Gunakan rumus luas dengan sinus:

$$
\begin{aligned}
L
&=\frac{1}{2}a^2\sin 60^\circ
\\
&=\frac{1}{2}a^2\left(\frac{\sqrt{3}}{2}\right)
\\
&=\frac{\sqrt{3}}{4}a^2
\end{aligned}
$$

Jadi:

$$
\boxed{
L=\frac{\sqrt{3}}{4}a^2
}
$$

### 19. Memilih Metode yang Tepat

Pemilihan metode harus disesuaikan dengan data yang diketahui.
![[Trigonometri/Gambar/rekap luas segitiga.png]]

| Informasi yang diketahui | Metode yang disarankan |
|---|---|
| Alas dan tinggi | $L=\frac{1}{2}at$ |
| Dua sisi dan sudut apit | Rumus luas dengan sinus |
| Satu sisi dan dua sudut | Aturan sinus, kemudian rumus luas dengan sinus |
| Dua sisi dan sudut yang bukan sudut apit | Aturan sinus atau aturan cosinus untuk melengkapi data |
| Tiga sisi | Rumus Heron |
| Tiga sisi dan diminta menggunakan aturan cosinus | Cari sudut dengan aturan cosinus, kemudian gunakan rumus luas dengan sinus |

> [!tip] Strategi Cepat
> Sebelum menghitung, tanyakan:
>
> 1. Apakah alas dan tinggi diketahui?
> 2. Apakah terdapat dua sisi dan sudut apit?
> 3. Apakah ketiga sisi diketahui?
> 4. Apakah data perlu dilengkapi terlebih dahulu dengan aturan sinus atau aturan cosinus?

### 20. Membandingkan Rumus Sinus dan Rumus Heron

Misalkan sebuah segitiga mempunyai sisi:

$$
a=7,
\qquad
b=8,
\qquad
c=9
$$

#### Menggunakan Rumus Heron

Semiperimeter:

$$
\begin{aligned}
s
&=\frac{7+8+9}{2}
\\
&=12
\end{aligned}
$$

Luas:

$$
\begin{aligned}
L
&=\sqrt{12(12-7)(12-8)(12-9)}
\\
&=\sqrt{12(5)(4)(3)}
\\
&=\sqrt{720}
\\
&=12\sqrt{5}
\end{aligned}
$$

#### Menggunakan Aturan Cosinus dan Rumus Sinus

Cari sudut $A$:

$$
\begin{aligned}
\cos A
&=\frac{b^2+c^2-a^2}{2bc}
\\
&=\frac{8^2+9^2-7^2}{2(8)(9)}
\\
&=\frac{64+81-49}{144}
\\
&=\frac{96}{144}
\\
&=\frac{2}{3}
\end{aligned}
$$

Maka:

$$
\begin{aligned}
\sin A
&=\sqrt{1-\cos^2 A}
\\
&=\sqrt{1-\left(\frac{2}{3}\right)^2}
\\
&=\sqrt{\frac{5}{9}}
\\
&=\frac{\sqrt{5}}{3}
\end{aligned}
$$

Luasnya:

$$
\begin{aligned}
L
&=\frac{1}{2}bc\sin A
\\
&=\frac{1}{2}(8)(9)\left(\frac{\sqrt{5}}{3}\right)
\\
&=12\sqrt{5}
\end{aligned}
$$

Kedua metode menghasilkan luas yang sama.

$$
\boxed{L=12\sqrt{5}}
$$

### 21. Kesalahan yang Sering Terjadi

> [!warning] Kesalahan yang Sering Terjadi
> - Menggunakan sudut yang bukan sudut apit dalam rumus $L=\frac{1}{2}ab\sin C$.
> - Salah memasangkan sisi dengan sudut di depannya pada aturan sinus.
> - Lupa menentukan sudut ketiga sebelum menggunakan rumus luas.
> - Menggunakan aturan sinus ketika belum mempunyai satu pasangan sisi dan sudut yang saling berhadapan.
> - Salah mengubah bentuk aturan cosinus.
> - Menggunakan keliling sebagai $s$ pada rumus Heron, padahal $s$ adalah setengah keliling.
> - Tidak memeriksa ketaksamaan segitiga sebelum menggunakan rumus Heron.
> - Menggunakan kalkulator dalam mode radian ketika sudut dinyatakan dalam derajat.
> - Membulatkan nilai sinus, cosinus, atau panjang sisi terlalu awal.
> - Menuliskan satuan panjang, bukan satuan luas.

Satuan luas harus berbentuk satuan kuadrat, misalnya:

$$
\text{cm}^2,
\qquad
\text{m}^2,
\qquad
\text{km}^2
$$

---

## Contoh Soal

### Contoh Soal 1

Sebuah segitiga mempunyai alas 18 cm dan tinggi 11 cm. Tentukan luasnya.

> [!success]- Klik untuk Lihat Jawaban
> Gunakan rumus dasar luas segitiga:
>
> $$
> L=\frac{1}{2}\times\text{alas}\times\text{tinggi}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> L
> &=\frac{1}{2}(18)(11)
> \\
> &=9(11)
> \\
> &=99
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{L=99\text{ cm}^2}
> $$

### Contoh Soal 2

Diketahui segitiga $ABC$ dengan:

$$
a=12\text{ cm},
\qquad
b=10\text{ cm},
\qquad
C=30^\circ
$$

Tentukan luas segitiga tersebut.

> [!success]- Klik untuk Lihat Jawaban
> Sisi yang diketahui adalah $a$ dan $b$, sedangkan sudut apitnya adalah $C$.
>
> Gunakan:
>
> $$
> L=\frac{1}{2}ab\sin C
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> L
> &=\frac{1}{2}(12)(10)\sin 30^\circ
> \\
> &=60\left(\frac{1}{2}\right)
> \\
> &=30
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{L=30\text{ cm}^2}
> $$

### Contoh Soal 3

Diketahui segitiga $PQR$ dengan:

$$
PQ=9\text{ cm}
$$

$$
PR=14\text{ cm}
$$

$$
\angle QPR=45^\circ
$$

Tentukan luas segitiga $PQR$.

> [!success]- Klik untuk Lihat Jawaban
> Sudut $QPR$ merupakan sudut apit antara sisi $PQ$ dan $PR$.
>
> Gunakan:
>
> $$
> L=\frac{1}{2}(PQ)(PR)\sin\angle QPR
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> L
> &=\frac{1}{2}(9)(14)\sin45^\circ
> \\
> &=63\left(\frac{\sqrt{2}}{2}\right)
> \\
> &=\frac{63\sqrt{2}}{2}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{L=\frac{63\sqrt{2}}{2}\text{ cm}^2}
> $$

### Contoh Soal 4

Diketahui segitiga $ABC$ dengan:

$$
A=30^\circ,
\qquad
B=120^\circ,
\qquad
a=8\text{ cm}
$$

Tentukan luas segitiga $ABC$.

> [!success]- Klik untuk Lihat Jawaban
> Tentukan sudut $C$:
>
> $$
> \begin{aligned}
> C
> &=180^\circ-A-B
> \\
> &=180^\circ-30^\circ-120^\circ
> \\
> &=30^\circ
> \end{aligned}
> $$
>
> Gunakan aturan sinus untuk mencari sisi $b$:
>
> $$
> \frac{a}{\sin A}
> =
> \frac{b}{\sin B}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> b
> &=\frac{a\sin B}{\sin A}
> \\
> &=\frac{8\sin120^\circ}{\sin30^\circ}
> \\
> &=8\sqrt{3}
> \end{aligned}
> $$
>
> Gunakan rumus luas:
>
> $$
> L=\frac{1}{2}ab\sin C
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> L
> &=\frac{1}{2}(8)(8\sqrt{3})\sin30^\circ
> \\
> &=16\sqrt{3}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{L=16\sqrt{3}\text{ cm}^2}
> $$

### Contoh Soal 5

Diketahui panjang sisi segitiga $ABC$ adalah:

$$
a=5\text{ cm},
\qquad
b=7\text{ cm},
\qquad
c=8\text{ cm}
$$

Gunakan aturan cosinus dan rumus luas sinus untuk menentukan luas segitiga.

> [!success]- Klik untuk Lihat Jawaban
> Cari nilai $\cos A$:
>
> $$
> \begin{aligned}
> \cos A
> &=\frac{b^2+c^2-a^2}{2bc}
> \\
> &=\frac{7^2+8^2-5^2}{2(7)(8)}
> \\
> &=\frac{88}{112}
> \\
> &=\frac{11}{14}
> \end{aligned}
> $$
>
> Tentukan $\sin A$:
>
> $$
> \begin{aligned}
> \sin A
> &=\sqrt{1-\cos^2A}
> \\
> &=\sqrt{1-\left(\frac{11}{14}\right)^2}
> \\
> &=\frac{5\sqrt{3}}{14}
> \end{aligned}
> $$
>
> Gunakan rumus luas:
>
> $$
> \begin{aligned}
> L
> &=\frac{1}{2}bc\sin A
> \\
> &=\frac{1}{2}(7)(8)\left(\frac{5\sqrt{3}}{14}\right)
> \\
> &=10\sqrt{3}
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{L=10\sqrt{3}\text{ cm}^2}
> $$

### Contoh Soal 6

Sebuah segitiga mempunyai panjang sisi 13 cm, 14 cm, dan 15 cm. Tentukan luasnya menggunakan rumus Heron.

> [!success]- Klik untuk Lihat Jawaban
> Hitung semiperimeter:
>
> $$
> \begin{aligned}
> s
> &=\frac{13+14+15}{2}
> \\
> &=21
> \end{aligned}
> $$
>
> Gunakan rumus Heron:
>
> $$
> \begin{aligned}
> L
> &=\sqrt{s(s-a)(s-b)(s-c)}
> \\
> &=\sqrt{21(8)(7)(6)}
> \\
> &=\sqrt{7056}
> \\
> &=84
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{L=84\text{ cm}^2}
> $$

### Contoh Soal 7

Sebuah segitiga sama kaki mempunyai panjang sisi 5 cm, 5 cm, dan 6 cm. Tentukan luasnya menggunakan rumus Heron.

> [!success]- Klik untuk Lihat Jawaban
> Hitung semiperimeter:
>
> $$
> \begin{aligned}
> s
> &=\frac{5+5+6}{2}
> \\
> &=8
> \end{aligned}
> $$
>
> Gunakan rumus Heron:
>
> $$
> \begin{aligned}
> L
> &=\sqrt{8(8-5)(8-5)(8-6)}
> \\
> &=\sqrt{8(3)(3)(2)}
> \\
> &=\sqrt{144}
> \\
> &=12
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{L=12\text{ cm}^2}
> $$

### Contoh Soal 8

Diketahui sebuah segitiga mempunyai sisi 7 cm, 8 cm, dan 9 cm. Tunjukkan bahwa rumus Heron dan gabungan aturan cosinus dengan rumus sinus menghasilkan luas yang sama.

> [!success]- Klik untuk Lihat Jawaban
> **Menggunakan Rumus Heron**
>
> $$
> \begin{aligned}
> s
> &=\frac{7+8+9}{2}
> \\
> &=12
> \end{aligned}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> L
> &=\sqrt{12(5)(4)(3)}
> \\
> &=\sqrt{720}
> \\
> &=12\sqrt{5}
> \end{aligned}
> $$
>
> **Menggunakan Aturan Cosinus dan Rumus Sinus**
>
> Ambil $a=7$, $b=8$, dan $c=9$.
>
> $$
> \begin{aligned}
> \cos A
> &=\frac{b^2+c^2-a^2}{2bc}
> \\
> &=\frac{8^2+9^2-7^2}{2(8)(9)}
> \\
> &=\frac{2}{3}
> \end{aligned}
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> \sin A
> &=\sqrt{1-\left(\frac{2}{3}\right)^2}
> \\
> &=\frac{\sqrt{5}}{3}
> \end{aligned}
> $$
>
> Luasnya:
>
> $$
> \begin{aligned}
> L
> &=\frac{1}{2}(8)(9)\left(\frac{\sqrt{5}}{3}\right)
> \\
> &=12\sqrt{5}
> \end{aligned}
> $$
>
> Jadi, kedua metode menghasilkan:
>
> $$
> \boxed{L=12\sqrt{5}\text{ cm}^2}
> $$

### Contoh Soal 9

Sebuah segitiga mempunyai dua sisi dengan panjang 10 cm dan 16 cm. Tentukan luas maksimum yang dapat dibentuk oleh kedua sisi tersebut.

> [!success]- Klik untuk Lihat Jawaban
> Luas segitiga dengan dua sisi tetap adalah:
>
> $$
> L=\frac{1}{2}ab\sin C
> $$
>
> Luas maksimum terjadi ketika:
>
> $$
> \sin C=1
> $$
>
> yaitu ketika:
>
> $$
> C=90^\circ
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> L_{\text{maksimum}}
> &=\frac{1}{2}(10)(16)
> \\
> &=80
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{L_{\text{maksimum}}=80\text{ cm}^2}
> $$

### Contoh Soal 10

Dua jalan lurus bertemu di titik $O$ dan membentuk sudut $75^\circ$. Titik $A$ berada pada jalan pertama sejauh 120 m dari $O$, sedangkan titik $B$ berada pada jalan kedua sejauh 80 m dari $O$. Tentukan luas daerah segitiga $AOB$.

> [!success]- Klik untuk Lihat Jawaban
> Diketahui:
>
> $$
> OA=120\text{ m}
> $$
>
> $$
> OB=80\text{ m}
> $$
>
> $$
> \angle AOB=75^\circ
> $$
>
> Gunakan rumus luas dengan dua sisi dan sudut apit:
>
> $$
> L=\frac{1}{2}(OA)(OB)\sin\angle AOB
> $$
>
> Maka:
>
> $$
> \begin{aligned}
> L
> &=\frac{1}{2}(120)(80)\sin75^\circ
> \\
> &=4800\sin75^\circ
> \end{aligned}
> $$
>
> Karena:
>
> $$
> \sin75^\circ
> =
> \frac{\sqrt{6}+\sqrt{2}}{4}
> $$
>
> maka:
>
> $$
> \begin{aligned}
> L
> &=4800\left(\frac{\sqrt{6}+\sqrt{2}}{4}\right)
> \\
> &=1200(\sqrt{6}+\sqrt{2})
> \end{aligned}
> $$
>
> Jadi:
>
> $$
> \boxed{L=1200(\sqrt{6}+\sqrt{2})\text{ m}^2}
> $$
>
> Nilai pendekatannya adalah:
>
> $$
> \boxed{L\approx 4636,44\text{ m}^2}
> $$

---

## Konsep Terkait
