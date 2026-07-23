---
title:
---
# Peluang Kejadian Majemuk Saling Lepas dan Tidak Saling Lepas

Kejadian majemuk adalah gabungan dari dua atau lebih kejadian tunggal. Ketika dua kejadian (kita sebut kejadian $A$ dan $B$) digabungkan dengan kata hubung **"atau"** (disimbolkan dengan $\cup$), kita harus menganalisis apakah kedua kejadian tersebut memiliki titik potong irisan atau tidak.

### 1. Kejadian Saling Lepas
Dua kejadian dikatakan saling lepas jika kejadian $A$ dan $B$ ==**TIDAK DAPAT terjadi secara bersamaan.**== Artinya, tidak ada irisan anggota antara kelompok $A$ dan kelompok $B$ ($A \cap B = \emptyset$).
Formulanya adalah:
$$
P(A \cup B) = P(A) + P(B)
$$

### 2. Kejadian Tidak Saling Lepas
Dua kejadian dikatakan tidak saling lepas jika kejadian $A$ dan $B$ ==**DAPAT terjadi secara bersamaan.**== Artinya, ada anggota yang sekaligus menjadi bagian dari kelompok $A$ dan kelompok $B$ ($A \cap B \neq \emptyset$). Nilai irisan ini harus dikurangkan agar tidak terhitung dua kali.
Formulanya adalah:
$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

---
## Contoh Soal Kejadian Saling Lepas

### Soal 1
Sebuah dadu bermata enam dilempar satu kali. Tentukan peluang munculnya angka **1 atau 4**.

> [!success]- Klik untuk Lihat Jawaban
> Karena angka 1 dan angka 4 tidak mungkin muncul secara bersamaan, kedua kejadian **saling lepas**.
>
> Diketahui:
> $$
> P(1)=\frac16,\qquad
> P(4)=\frac16
> $$
>
> Gunakan rumus:
> $$
> P(A\cup B)=P(A)+P(B)
> $$
>
> Maka:
> $$
> P(1\cup4)=\frac16+\frac16=\frac26=\frac13
> $$
>
> Jadi, peluang munculnya angka **1 atau 4** adalah **$\frac13$**.

### Soal 2
Sebuah kotak berisi 5 bola merah, 4 bola biru, dan 3 bola hijau. Diambil 1 bola secara acak. Tentukan peluang terambilnya bola **merah atau hijau**.

> [!success]- Klik untuk Lihat Jawaban
> Bola merah dan bola hijau tidak mungkin terambil bersamaan dalam satu pengambilan, sehingga kedua kejadian **saling lepas**.
>
> Jumlah seluruh bola:
> $$
> 5+4+3=12
> $$
>
> Diketahui:
> $$
> P(\text{merah})=\frac5{12},\qquad
> P(\text{hijau})=\frac3{12}
> $$
>
> Maka:
> $$
> P(\text{merah}\cup\text{hijau})
> =\frac5{12}+\frac3{12}
> =\frac8{12}
> =\frac23
> $$
>
> Jadi, peluang terambilnya bola **merah atau hijau** adalah **$\frac23$**.


### Soal 3
Dari satu set kartu remi (52 kartu), diambil 1 kartu secara acak. Tentukan peluang kartu yang terambil merupakan **As atau King**.

> [!success]- Klik untuk Lihat Jawaban
> Sebuah kartu tidak mungkin sekaligus merupakan As dan King, sehingga kedua kejadian **saling lepas**.
>
> Diketahui:
> $$
> P(\text{As})=\frac4{52},\qquad
> P(\text{King})=\frac4{52}
> $$
>
> Maka:
> $$
> P(\text{As}\cup\text{King})
> =\frac4{52}+\frac4{52}
> =\frac8{52}
> =\frac2{13}
> $$
>
> Jadi, peluang terambilnya kartu **As atau King** adalah **$\frac2{13}$**.


---

# Contoh Soal Kejadian Tidak Saling Lepas

### Soal 1
Dari bilangan 1 sampai 20 dipilih satu bilangan secara acak. Tentukan peluang bilangan yang terpilih merupakan **bilangan genap atau kelipatan 3**.

> [!success]- Klik untuk Lihat Jawaban
> Bilangan yang merupakan genap sekaligus kelipatan 3 adalah kelipatan 6, sehingga kedua kejadian **tidak saling lepas**.
>
> Diketahui:
> $$
> P(\text{genap})=\frac{10}{20},\qquad
> P(\text{kelipatan 3})=\frac6{20},\qquad
> P(\text{kelipatan 6})=\frac3{20}
> $$
>
> Maka:
> $$
> P(A\cup B)
> =\frac{10}{20}+\frac6{20}-\frac3{20}
> =\frac{13}{20}
> $$
>
> Jadi, peluang bilangan yang terpilih merupakan **genap atau kelipatan 3** adalah **$\frac{13}{20}$**.


### Soal 2
Dari satu set kartu remi (52 kartu), diambil 1 kartu secara acak. Tentukan peluang kartu yang terambil merupakan **kartu hati atau kartu bergambar (J, Q, K)**.

> [!success]- Klik untuk Lihat Jawaban
> Terdapat kartu yang sekaligus merupakan kartu hati dan kartu bergambar, yaitu **J♥, Q♥, dan K♥**, sehingga kedua kejadian **tidak saling lepas**.
>
> Diketahui:
> $$
> P(\text{hati})=\frac{13}{52},\qquad
> P(\text{bergambar})=\frac{12}{52},\qquad
> P(\text{hati dan bergambar})=\frac3{52}
> $$
>
> Maka:
> $$
> P(A\cup B)
> =\frac{13}{52}+\frac{12}{52}-\frac3{52}
> =\frac{22}{52}
> =\frac{11}{26}
> $$
>
> Jadi, peluang kartu yang terambil merupakan **kartu hati atau kartu bergambar** adalah **$\frac{11}{26}$**.


### Soal 3
Dalam sebuah kelas terdapat 40 siswa. Sebanyak 24 siswa mengikuti ekstrakurikuler Basket, 18 siswa mengikuti Futsal, dan 10 siswa mengikuti keduanya. Jika dipilih satu siswa secara acak, tentukan peluang siswa tersebut mengikuti **Basket atau Futsal**.

> [!success]- Klik untuk Lihat Jawaban
> Karena terdapat siswa yang mengikuti kedua ekstrakurikuler, maka kedua kejadian **tidak saling lepas**.
>
> Diketahui:
> $$
> P(\text{Basket})=\frac{24}{40},\qquad
> P(\text{Futsal})=\frac{18}{40},\qquad
> P(\text{keduanya})=\frac{10}{40}
> $$
>
> Maka:
> $$
> P(A\cup B)
> =\frac{24}{40}+\frac{18}{40}-\frac{10}{40}
> =\frac{32}{40}
> =\frac45
> $$
>
> Jadi, peluang siswa tersebut mengikuti **Basket atau Futsal** adalah **$\frac45$**.


### Soal 4
Dari bilangan 1 sampai 60 dipilih satu bilangan secara acak. Tentukan peluang bilangan yang terpilih merupakan **kelipatan 4 atau kelipatan 6**.

> [!success]- Klik untuk Lihat Jawaban
> Bilangan yang merupakan kelipatan 4 sekaligus kelipatan 6 adalah kelipatan KPK$(4,6)=12$, sehingga kedua kejadian **tidak saling lepas**.
>
> Banyak kelipatan 4:
> $$
> \frac{60}{4}=15
> $$
>
> Banyak kelipatan 6:
> $$
> \frac{60}{6}=10
> $$
>
> Banyak kelipatan 12:
> $$
> \frac{60}{12}=5
> $$
>
> Maka:
> $$
> P(A\cup B)
> =\frac{15}{60}+\frac{10}{60}-\frac5{60}
> =\frac{20}{60}
> =\frac13
> $$
>
> Jadi, peluang bilangan yang terpilih merupakan **kelipatan 4 atau kelipatan 6** adalah **$\frac13$**.
---

---

## Konsep Terkait

- [[Kaidah Pencacahan dan Peluang/08 - Ruang Sampel dan Peluang Kejadian Tunggal]]
- [[Kaidah Pencacahan dan Peluang/10 - Peluang Kejadian Majemuk Saling Bebas dan Tidak Saling Bebas]]