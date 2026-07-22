---
title:
---
# Peluang Kejadian Majemuk Saling Bebas dan Tidak Saling Bebas

Jika pada materi sebelumnya kejadian majemuk dihubungkan oleh kata "atau", pada subbab ini kita menganalisis dua kejadian yang digabungkan oleh kata hubung **"dan"** (disimbolkan dengan $\cap$). Hubungan ini terbagi berdasarkan pengaruh kejadian pertama terhadap kejadian kedua.

### 1. Kejadian Saling Bebas (*Independent Events*)
Dua kejadian dikatakan saling bebas jika munculnya kejadian $A$ ==**SAMA SEKALI TIDAK MEMPENGARUHI**== peluang terjadinya kejadian $B$. Contoh klasiknya adalah melempar dadu dan koin secara bersamaan, atau mengambil bola dari kotak dengan syarat **dikembalikan lagi**.
Formulanya adalah:
$$
P(A \cap B) = P(A) \times P(B)
$$

### 2. Kejadian Tidak Saling Bebas / Bersyarat Dasar (*Dependent Events*)
Dua kejadian dikatakan tidak saling bebas jika munculnya kejadian $A$ ==**MEMPENGARUHI**== peluang terjadinya kejadian $B$. Kasus ini umumnya terjadi pada pengambilan objek dari suatu wadah **TANPA PENGEMBALIAN**, sehingga jumlah ruang sampel keseluruhan berkurang di tahap berikutnya.
Formulanya adalah:
$$
P(A \cap B) = P(A) \times P(B|A)
$$
*Dimana $P(B|A)$ adalah peluang kejadian B setelah kejadian A terjadi.*

---
# Contoh Soal Kejadian Saling Bebas

### Soal 1
Sebuah koin dilempar satu kali dan sebuah dadu dilempar satu kali. Tentukan peluang munculnya **gambar pada koin dan angka genap pada dadu**.

> [!success]- Klik untuk Lihat Jawaban
> Hasil pelemparan koin tidak memengaruhi hasil pelemparan dadu, sehingga kedua kejadian **saling bebas**.
>
> Diketahui:
> $$
> P(\text{gambar})=\frac12
> $$
>
> Banyak angka genap pada dadu adalah 2, 4, dan 6, sehingga:
> $$
> P(\text{genap})=\frac36=\frac12
> $$
>
> Gunakan rumus:
> $$
> P(A\cap B)=P(A)\times P(B)
> $$
>
> Maka:
> $$
> P(A\cap B)=\frac12\times\frac12=\frac14
> $$
>
> Jadi, peluang munculnya **gambar dan angka genap** adalah **$\frac14$**.


### Soal 2
Sebuah dadu dilempar dua kali. Tentukan peluang munculnya **angka 5 pada lemparan pertama dan angka genap pada lemparan kedua**.

> [!success]- Klik untuk Lihat Jawaban
> Hasil lemparan pertama tidak memengaruhi hasil lemparan kedua, sehingga kedua kejadian **saling bebas**.
>
> Diketahui:
> $$
> P(\text{angka 5})=\frac16
> $$
>
> $$
> P(\text{genap})=\frac36=\frac12
> $$
>
> Maka:
> $$
> P(A\cap B)=\frac16\times\frac12=\frac1{12}
> $$
>
> Jadi, peluang munculnya **angka 5 pada lemparan pertama dan angka genap pada lemparan kedua** adalah **$\frac1{12}$**.

### Soal 3
Sebuah kantong berisi 4 bola merah dan 6 bola biru. Diambil satu bola, kemudian bola tersebut dikembalikan ke dalam kantong. Setelah itu diambil lagi satu bola. Tentukan peluang kedua bola yang terambil sama-sama berwarna merah.

> [!success]- Klik untuk Lihat Jawaban
> Karena bola pertama dikembalikan ke dalam kantong, komposisi bola tetap sama. Oleh karena itu kedua kejadian **saling bebas**.
>
> Diketahui:
> $$
> P(\text{merah})=\frac4{10}=\frac25
> $$
>
> Maka:
> $$
> P(A\cap B)=\frac25\times\frac25=\frac4{25}
> $$
>
> Jadi, peluang kedua bola yang terambil sama-sama merah adalah **$\frac4{25}$**.


### Soal 4
Peluang seorang siswa lulus Matematika adalah $\frac45$, sedangkan peluang ia lulus Bahasa Inggris adalah $\frac34$. Jika kedua kejadian dianggap saling bebas, tentukan peluang siswa tersebut lulus kedua mata pelajaran.

> [!success]- Klik untuk Lihat Jawaban
> Karena kedua kejadian saling bebas, gunakan aturan perkalian peluang.
>
> Diketahui:
> $$
> P(M)=\frac45,\qquad
> P(B)=\frac34
> $$
>
> Maka:
> $$
> P(M\cap B)=\frac45\times\frac34=\frac35
> $$
>
> Jadi, peluang siswa tersebut lulus kedua mata pelajaran adalah **$\frac35$**.

---

# Contoh Soal Kejadian Tidak Saling Bebas

### Soal 1
Sebuah kotak berisi 5 bola merah dan 3 bola biru. Diambil dua bola berturut-turut **tanpa pengembalian**. Tentukan peluang kedua bola yang terambil berwarna merah.

> [!success]- Klik untuk Lihat Jawaban
> Karena bola pertama tidak dikembalikan, hasil pengambilan pertama memengaruhi pengambilan kedua. Oleh karena itu kedua kejadian **tidak saling bebas**.
>
> Diketahui:
> $$
> P(\text{merah pertama})=\frac58
> $$
>
> Setelah satu bola merah terambil, tersisa 4 bola merah dari 7 bola.
> $$
> P(\text{merah kedua}|\text{merah pertama})=\frac47
> $$
>
> Maka:
> $$
> P(A\cap B)=\frac58\times\frac47=\frac5{14}
> $$
>
> Jadi, peluang kedua bola yang terambil berwarna merah adalah **$\frac5{14}$**.


### Soal 2
Dari satu set kartu remi (52 kartu), diambil dua kartu berturut-turut tanpa pengembalian. Tentukan peluang kedua kartu yang terambil merupakan kartu As.

> [!success]- Klik untuk Lihat Jawaban
> Karena kartu pertama tidak dikembalikan, kedua kejadian **tidak saling bebas**.
>
> Diketahui:
> $$
> P(\text{As pertama})=\frac4{52}=\frac1{13}
> $$
>
> Setelah satu As terambil, tersisa 3 As dari 51 kartu.
> $$
> P(\text{As kedua}|\text{As pertama})=\frac3{51}=\frac1{17}
> $$
>
> Maka:
> $$
> P(A\cap B)=\frac1{13}\times\frac1{17}
> =\frac1{221}
> $$
>
> Jadi, peluang kedua kartu merupakan As adalah **$\frac1{221}$**.


### Soal 3
Sebuah kantong berisi 6 bola putih dan 4 bola hitam. Diambil dua bola berturut-turut tanpa pengembalian. Tentukan peluang bola pertama putih dan bola kedua hitam.

> [!success]- Klik untuk Lihat Jawaban
> Karena pengambilan dilakukan tanpa pengembalian, kedua kejadian **tidak saling bebas**.
>
> Diketahui:
> $$
> P(\text{putih pertama})=\frac6{10}=\frac35
> $$
>
> Setelah bola putih terambil, tersisa 4 bola hitam dari 9 bola.
> $$
> P(\text{hitam kedua}|\text{putih pertama})=\frac49
> $$
>
> Maka:
> $$
> P(A\cap B)=\frac35\times\frac49=\frac4{15}
> $$
>
> Jadi, peluang bola pertama putih dan bola kedua hitam adalah **$\frac4{15}$**.


### Soal 4
Dalam sebuah kotak terdapat 7 lampu yang masih baik dan 3 lampu rusak. Diambil dua lampu berturut-turut tanpa pengembalian. Tentukan peluang kedua lampu yang terambil masih baik.

> [!success]- Klik untuk Lihat Jawaban
> Karena lampu pertama tidak dikembalikan, kedua kejadian **tidak saling bebas**.
>
> Diketahui:
> $$
> P(\text{baik pertama})=\frac7{10}
> $$
>
> Setelah satu lampu baik terambil, tersisa 6 lampu baik dari 9 lampu.
> $$
> P(\text{baik kedua}|\text{baik pertama})=\frac69=\frac23
> $$
>
> Maka:
> $$
> P(A\cap B)=\frac7{10}\times\frac23=\frac7{15}
> $$
>
> Jadi, peluang kedua lampu yang terambil masih baik adalah **$\frac7{15}$**.
---

---

## Konsep Terkait

- [[Kaidah Pencacahan dan Peluang/09 - Peluang Kejadian Majemuk Saling Lepas dan Tidak Saling Lepas]]
- [[Kaidah Pencacahan dan Peluang/11 - Peluang Bersyarat dan Pengantar Teorema Bayes]]