---
title:
---
# Sistem Persamaan Linear Dua Variabel (SPLDV)

Sistem Persamaan Linear Dua Variabel (SPLDV) adalah perkumpulan dua atau lebih persamaan linear yang memiliki dua jenis variabel yang sama. Dalam pembelajaran matematika, SPLDV digunakan untuk menentukan nilai dari dua variabel yang harus memenuhi beberapa persamaan secara bersamaan.

Secara sederhana, sebuah SPLDV dapat dipandang sebagai dua informasi matematika yang saling berkaitan. Masing-masing persamaan memberikan sebuah batasan terhadap nilai variabel. Karena kedua batasan tersebut harus dipenuhi pada saat yang sama, maka nilai penyelesaian harus memenuhi seluruh persamaan yang terdapat dalam sistem.

Bentuk umum dari sebuah SPLDV dengan variabel $x$ dan $y$ adalah:
$$
\begin{cases} a_1x + b_1y = c_1 \\ a_2x + b_2y = c_2 \end{cases}
$$

Dimana $a_1, b_1, a_2, b_2$ berperan sebagai **koefisien**, $x, y$ berperan sebagai **variabel**, dan $c_1, c_2$ berperan sebagai **konstanta**.

Agar suatu sistem dapat dipahami sebagai SPLDV, terdapat beberapa hal penting yang perlu diperhatikan:
- Terdapat **dua variabel** yang digunakan bersama, misalnya $x$ dan $y$.
- Pangkat tertinggi dari masing-masing variabel adalah **satu**.
- Setiap persamaan memiliki tanda sama dengan ($=$).
- Persamaan-persamaan tersebut harus dipenuhi **secara bersamaan** oleh pasangan nilai yang menjadi penyelesaian.
- Koefisien dan konstanta dapat berupa bilangan positif, negatif, nol, maupun pecahan, selama bentuk persamaannya tetap linear.

Sebagai contoh, sistem
$$
\begin{cases}
x + y = 10 \\
2x - y = 5
\end{cases}
$$
merupakan SPLDV karena kedua persamaan menggunakan variabel yang sama, yaitu $x$ dan $y$, serta pangkat masing-masing variabel adalah satu.

Sebaliknya, bentuk
$$
\begin{cases}
x^2 + y = 10 \\
x + y = 5
\end{cases}
$$
bukan merupakan SPLDV karena terdapat variabel $x$ yang berpangkat dua. Bentuk tersebut sudah tidak termasuk persamaan linear.

---

## Unsur-Unsur SPLDV

Untuk memahami SPLDV dengan baik, kita perlu mengenali bagian-bagian yang terdapat dalam persamaan. Perhatikan bentuk umum berikut:
$$
\begin{cases}
a_1x + b_1y = c_1 \\
a_2x + b_2y = c_2
\end{cases}
$$

Dari bentuk tersebut dapat dikenali:
- $x$ dan $y$ adalah **variabel**, yaitu nilai yang belum diketahui.
- $a_1, b_1, a_2,$ dan $b_2$ adalah **koefisien**, yaitu bilangan yang mengalikan variabel.
- $c_1$ dan $c_2$ adalah **konstanta**, yaitu bilangan yang tidak mengandung variabel.
- Masing-masing baris merupakan sebuah **persamaan linear**.
- Gabungan persamaan-persamaan tersebut membentuk sebuah **sistem persamaan**.

Misalnya diberikan:
$$
\begin{cases}
3x + 2y = 12 \\
x - 4y = 8
\end{cases}
$$

Pada persamaan pertama, $3$ merupakan koefisien $x$, $2$ merupakan koefisien $y$, dan $12$ merupakan konstanta. Pada persamaan kedua, $1$ merupakan koefisien $x$, $-4$ merupakan koefisien $y$, dan $8$ merupakan konstanta.

Mengenali unsur-unsur tersebut akan membantu ketika kita melakukan operasi aljabar pada SPLDV. Kesalahan membaca tanda negatif atau koefisien sering menyebabkan kesalahan pada proses penyelesaian.

---

## Penyelesaian SPLDV

Nilai penyelesaian dari SPLDV berupa pasangan berurutan $(x, y)$ yang ==**wajib memenuhi kedua persamaan tersebut secara bersamaan.**== Jika pasangan nilai hanya memenuhi salah satu persamaan, maka pasangan tersebut bukanlah solusi atau himpunan penyelesaian dari SPLDV.

Pasangan berurutan $(x,y)$ berarti bahwa nilai pertama merupakan nilai $x$ dan nilai kedua merupakan nilai $y$. Oleh karena itu, pasangan $(3,2)$ berbeda dengan pasangan $(2,3)$.

Untuk memeriksa apakah suatu pasangan merupakan penyelesaian SPLDV, kita dapat melakukan substitusi nilai $x$ dan $y$ ke masing-masing persamaan. Jika kedua persamaan menghasilkan pernyataan yang benar, maka pasangan tersebut merupakan penyelesaian.

Secara umum, proses pemeriksaannya dapat dilakukan dengan langkah berikut:
1. Tentukan nilai $x$ dan $y$ dari pasangan yang diberikan.
2. Substitusikan nilai tersebut ke persamaan pertama.
3. Periksa apakah persamaan pertama bernilai benar.
4. Substitusikan nilai yang sama ke persamaan kedua.
5. Periksa apakah persamaan kedua juga bernilai benar.
6. Jika keduanya benar, pasangan tersebut merupakan penyelesaian SPLDV.

Cara pemeriksaan ini penting karena satu pasangan nilai dapat saja memenuhi satu persamaan, tetapi belum tentu memenuhi persamaan yang lain.

---

## Memahami Makna Penyelesaian Secara Geometri

SPLDV juga dapat dipahami melalui hubungan antara dua garis lurus. Setiap persamaan linear dua variabel dapat direpresentasikan sebagai sebuah garis pada bidang koordinat.

Sebagai contoh, persamaan
$$
x+y=5
$$
dan
$$
2x-y=4
$$
masing-masing dapat digambarkan sebagai garis lurus.

Jika kedua garis tersebut berpotongan pada satu titik, maka koordinat titik potong tersebut merupakan pasangan penyelesaian SPLDV. Dengan demikian, pasangan $(x,y)$ tidak hanya merupakan dua bilangan yang memenuhi perhitungan aljabar, tetapi juga dapat dipahami sebagai koordinat titik yang memenuhi kedua persamaan.

Pemahaman ini menjadi dasar untuk mempelajari metode grafik. Selain metode grafik, SPLDV juga dapat diselesaikan menggunakan metode substitusi dan eliminasi. Ketiga metode tersebut akan dibahas lebih lanjut pada materi berikutnya.

---

## Contoh Soal

### Contoh Soal 1

Manakah di antara pasangan nilai berikut yang merupakan penyelesaian dari sistem persamaan $x + y = 5$ dan $2x - y = 4$?

A. $(2, 3)$  
B. $(3, 2)$  
C. $(0,0)$  
D. $(-3,-2)$  
E. $(-2,-3)$

> [!success]- Klik untuk Lihat Jawaban
> Kita uji setiap pasangan nilai dengan cara menyubstitusikannya ke dalam kedua persamaan:
> * **Uji Pilihan A $(2, 3) \rightarrow x = 2, y = 3$:**
>   - Persamaan 1: $2 + 3 = 5$ ==**(Benar)**==
>   - Persamaan 2: $2(2) - 3 = 4 - 3 = 1 \neq 4$ ==**(Salah)**==
> * **Uji Pilihan B $(3, 2) \rightarrow x = 3, y = 2$:**
>   - Persamaan 1: $3 + 2 = 5$ ==**(Benar)**==
>   - Persamaan 2: $2(3) - 2 = 6 - 2 = 4$ ==**(Benar)**==
> 
> Jadi, pasangan nilai yang merupakan penyelesaian dari SPLDV tersebut adalah **$(3, 2)$**.

### Contoh Soal 2

Tentukan apakah pasangan $(4, 1)$ merupakan penyelesaian dari SPLDV berikut:
$$
\begin{cases}
x+y=5 \\
3x-y=11
\end{cases}
$$

> [!success]- Klik untuk Lihat Jawaban
> Diketahui pasangan $(4,1)$, sehingga $x=4$ dan $y=1$.
> 
> * **Persamaan 1:**
>   $$
>   x+y=4+1=5
>   $$
>   ==**(Benar)**==
> * **Persamaan 2:**
>   $$
>   3x-y=3(4)-1=12-1=11
>   $$
>   ==**(Benar)**==
> 
> Karena pasangan $(4,1)$ memenuhi kedua persamaan, maka **$(4,1)$ merupakan penyelesaian SPLDV tersebut.**

### Contoh Soal 3

Manakah pasangan nilai yang merupakan penyelesaian dari sistem persamaan berikut?
$$
\begin{cases}
2x+y=7 \\
x-y=2
\end{cases}
$$

A. $(1,5)$  
B. $(2,3)$  
C. $(3,1)$  
D. $(4,-1)$  
E. $(5,-3)$

> [!success]- Klik untuk Lihat Jawaban
> Kita periksa pilihan yang diberikan.
> 
> * **Pilihan A $(1,5)$:**
>   - $2(1)+5=7$ ==**(Benar)**==
>   - $1-5=-4\neq2$ ==**(Salah)**==
> * **Pilihan B $(2,3)$:**
>   - $2(2)+3=7$ ==**(Benar)**==
>   - $2-3=-1\neq2$ ==**(Salah)**==
> * **Pilihan C $(3,1)$:**
>   - $2(3)+1=7$ ==**(Benar)**==
>   - $3-1=2$ ==**(Benar)**==
> 
> Jadi, pasangan nilai yang merupakan penyelesaian adalah **$(3,1)$**.

### Contoh Soal 4

Tentukan apakah pasangan $(-2,4)$ merupakan penyelesaian dari sistem:
$$
\begin{cases}
x+2y=6 \\
2x-y=-8
\end{cases}
$$

> [!success]- Klik untuk Lihat Jawaban
> Diketahui $x=-2$ dan $y=4$.
> 
> * **Persamaan 1:**
>   $$
>   x+2y=-2+2(4)=-2+8=6
>   $$
>   ==**(Benar)**==
> * **Persamaan 2:**
>   $$
>   2x-y=2(-2)-4=-4-4=-8
>   $$
>   ==**(Benar)**==
> 
> Kedua persamaan terpenuhi. Jadi, **$(-2,4)$ merupakan penyelesaian SPLDV tersebut.**

### Contoh Soal 5

Diberikan SPLDV:
$$
\begin{cases}
3x+y=10 \\
x+y=6
\end{cases}
$$

Tentukan pasangan $(x,y)$ yang memenuhi kedua persamaan tersebut.

A. $(1,5)$  
B. $(2,4)$  
C. $(3,3)$  
D. $(4,2)$  
E. $(5,1)$

> [!success]- Klik untuk Lihat Jawaban
> Kita dapat memanfaatkan kedua persamaan untuk mencari pasangan yang memenuhi keduanya.
> 
> Dari persamaan kedua:
> $$
> x+y=6
> $$
> Perhatikan pilihan yang memenuhi jumlah $x+y=6$. Beberapa pilihan yang memenuhi adalah $(1,5)$, $(2,4)$, $(3,3)$, $(4,2)$, dan $(5,1)$.
> 
> Selanjutnya kita periksa persamaan pertama, yaitu $3x+y=10$.
> 
> * $(1,5)\rightarrow3(1)+5=8\neq10$
> * $(2,4)\rightarrow3(2)+4=10$ ==**(Benar)**==
> * $(3,3)\rightarrow3(3)+3=12\neq10$
> 
> Jadi, pasangan yang memenuhi kedua persamaan adalah **$(2,4)$**.

### Contoh Soal 6

Perhatikan sistem persamaan berikut:
$$
\begin{cases}
2x+3y=13 \\
x+y=5
\end{cases}
$$

Tentukan pasangan penyelesaiannya.

> [!success]- Klik untuk Lihat Jawaban
> Dari persamaan kedua diketahui:
> $$
> x+y=5
> $$
> Sehingga pasangan nilai harus memiliki jumlah $x$ dan $y$ sama dengan $5$.
> 
> Kita dapat memeriksa beberapa kemungkinan. Jika $x=2$, maka:
> $$
> y=5-2=3
> $$
> 
> Substitusikan $x=2$ dan $y=3$ ke persamaan pertama:
> $$
> 2(2)+3(3)=4+9=13
> $$
> ==**(Benar)**==
> 
> Periksa kembali persamaan kedua:
> $$
> 2+3=5
> $$
> ==**(Benar)**==
> 
> Jadi, pasangan penyelesaian SPLDV tersebut adalah **$(2,3)$**.

### Contoh Soal 7

Diberikan SPLDV:
$$
\begin{cases}
4x-2y=10 \\
x+y=5
\end{cases}
$$

Tentukan pasangan $(x,y)$ yang memenuhi kedua persamaan tersebut.

> [!success]- Klik untuk Lihat Jawaban
> Dari persamaan kedua:
> $$
> x+y=5
> $$
> Kita dapat menuliskan beberapa pasangan bilangan yang jumlahnya $5$. Selanjutnya, pasangan tersebut harus diperiksa pada persamaan pertama.
> 
> Misalkan $x=2$, maka:
> $$
> y=5-2=3
> $$
> 
> Periksa pada persamaan pertama:
> $$
> 4(2)-2(3)=8-6=2
> $$
> Hasilnya bukan $10$, sehingga $(2,3)$ bukan penyelesaian.
> 
> Coba $x=3$, maka:
> $$
> y=5-3=2
> $$
> 
> Periksa:
> $$
> 4(3)-2(2)=12-4=8
> $$
> Masih bukan $10$.
> 
> Coba $x=4$, maka:
> $$
> y=5-4=1
> $$
> 
> Periksa:
> $$
> 4(4)-2(1)=16-2=14
> $$
> 
> Karena nilai berubah dari $8$ menjadi $14$, terdapat nilai di antaranya yang dapat memenuhi persamaan. Dengan menggunakan metode penyelesaian SPLDV pada materi berikutnya, pasangan tersebut dapat ditentukan secara lebih sistematis.
> 
> Dari sistem:
> $$
> \begin{cases}
> 4x-2y=10 \\
> x+y=5
> \end{cases}
> $$
> diperoleh:
> $$
> x=\frac{10}{6}=\frac{5}{3}
> $$
> dan
> $$
> y=5-\frac{5}{3}=\frac{10}{3}
> $$
> 
> Jadi, pasangan penyelesaiannya adalah **$\left(\frac{5}{3},\frac{10}{3}\right)$**.

### Contoh Soal 8

Sebuah tempat parkir memiliki sejumlah sepeda dan sepeda motor. Jumlah kendaraan seluruhnya adalah $20$ kendaraan. Setiap sepeda memiliki $2$ roda, sedangkan setiap sepeda motor memiliki $2$ roda. Jika banyak kendaraan dinyatakan dengan $x$ dan $y$, buatlah model SPLDV yang sesuai berdasarkan informasi tersebut.

> [!success]- Klik untuk Lihat Jawaban
> Misalkan:
> 
> $x$ = banyak sepeda  
> $y$ = banyak sepeda motor
> 
> Berdasarkan jumlah kendaraan, diperoleh:
> $$
> x+y=20
> $$
> 
> Namun, informasi jumlah roda yang diberikan juga menghasilkan:
> $$
> 2x+2y=\text{jumlah seluruh roda}
> $$
> 
> Karena pada soal tidak diberikan jumlah seluruh roda, maka **belum tersedia informasi kedua yang independen** untuk menentukan nilai $x$ dan $y$ secara tunggal.
> 
> Jadi, informasi yang tersedia baru dapat membentuk persamaan:
> $$
> x+y=20
> $$
> dan belum cukup untuk membentuk SPLDV yang dapat menentukan satu pasangan penyelesaian.
> 
> Soal ini menunjukkan bahwa dalam masalah nyata, kita harus memastikan bahwa setiap informasi yang diterjemahkan menjadi persamaan benar-benar memberikan batasan yang diperlukan. Tidak semua dua pernyataan otomatis menghasilkan SPLDV yang dapat menentukan dua nilai variabel.

---

## Latihan Bertahap

Delapan contoh soal di atas disusun secara bertahap. Soal pertama dan kedua berfokus pada kemampuan memeriksa pasangan nilai secara langsung. Soal ketiga dan keempat melatih ketelitian terhadap tanda dan koefisien. Soal kelima dan keenam mulai mengarahkan siswa untuk menemukan pasangan penyelesaian berdasarkan dua persamaan.

Pada soal ketujuh, siswa mulai berhadapan dengan penyelesaian yang menghasilkan pecahan. Hal ini penting karena penyelesaian SPLDV tidak selalu berupa bilangan bulat. Pada soal kedelapan, fokus latihan bergeser dari perhitungan menuju kemampuan menerjemahkan informasi dari masalah kontekstual ke dalam model matematika.

Urutan latihan tersebut membantu membangun pemahaman bahwa SPLDV bukan sekadar kumpulan operasi hitung. Hal yang paling penting adalah memahami hubungan antara variabel, persamaan, informasi yang diketahui, dan syarat yang harus dipenuhi secara bersamaan.

---

## Hal Penting yang Perlu Diingat

Beberapa gagasan utama dalam SPLDV yang perlu dikuasai adalah:

- SPLDV memiliki **dua variabel** yang digunakan bersama dalam persamaan-persamaannya.
- Pangkat tertinggi variabel dalam persamaan linear adalah **satu**.
- Penyelesaian SPLDV berupa pasangan berurutan **$(x,y)$**.
- Pasangan penyelesaian harus memenuhi **semua persamaan secara bersamaan**.
- Memenuhi satu persamaan saja belum cukup untuk menyatakan bahwa suatu pasangan merupakan penyelesaian SPLDV.
- Urutan pasangan penting, sehingga $(x,y)$ tidak sama dengan $(y,x)$ kecuali jika $x=y$.
- SPLDV dapat dikaitkan dengan **titik potong dua garis** pada bidang koordinat.
- SPLDV dapat digunakan untuk memodelkan berbagai persoalan, misalnya jumlah benda, harga barang, komposisi, dan hubungan dua besaran.
- Dalam masalah kontekstual, setiap informasi harus diterjemahkan dengan tepat agar model matematika yang terbentuk sesuai dengan kondisi masalah.

---

## Konsep Terkait

- [[Sistem Persamaan dan Pertidaksamaan Linear/00 - Peta Konsep Sistem Persamaan dan Pertidaksamaan Linear]]
- [[Sistem Persamaan dan Pertidaksamaan Linear/02 - Metode Penyelesaian SPLDV Grafik, Substitusi, dan Eliminasi]]
