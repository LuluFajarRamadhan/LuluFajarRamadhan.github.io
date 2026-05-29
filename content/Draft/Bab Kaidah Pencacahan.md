# Kaidah Pencacahan

Kaidah pencacahan adalah cabang matematika yang mempelajari cara menghitung banyaknya kemungkinan suatu kejadian tanpa harus menuliskan semua kemungkinan tersebut satu per satu. Materi ini menjadi dasar penting dalam pembelajaran matematika tingkat SMA karena melatih kemampuan berpikir logis, sistematis, dan efisien dalam menyelesaikan masalah.

Kaidah pencacahan tidak hanya digunakan dalam soal matematika, tetapi juga sangat berguna untuk menyelesaikan berbagai persoalan nyata yang melibatkan banyak kemungkinan pilihan atau susunan.

#### 1. Teknologi dan Keamanan Digital
Dalam dunia digital, kaidah pencacahan digunakan untuk menghitung banyak kemungkinan kombinasi yang dapat dibuat dari sekumpulan karakter atau angka.
Contohnya:
- Menentukan jumlah kemungkinan password dari kombinasi huruf dan angka
- Menghitung banyak kode OTP yang dapat dibuat
- Merancang sistem keamanan agar sulit ditebak
Semakin banyak kemungkinan kombinasi, semakin tinggi tingkat keamanan suatu sistem.

#### 2. Pendidikan dan Evaluasi
Dalam bidang pendidikan, kaidah pencacahan membantu guru dan lembaga pendidikan dalam menyusun berbagai alternatif pembelajaran dan evaluasi.
Contohnya:
- Menentukan jumlah variasi paket soal ujian
- Mengatur susunan tempat duduk siswa agar adil
- Menentukan kombinasi kelompok diskusi
Hal ini membantu menciptakan sistem pembelajaran yang lebih terstruktur dan efektif.

#### 3. Bisnis dan Manajemen
Dalam dunia kerja dan organisasi, banyak keputusan melibatkan pemilihan dan penyusunan.
Contohnya:
- Menentukan susunan anggota tim proyek
- Menyusun jadwal kerja karyawan secara bergiliran
- Menentukan kombinasi produk promosi
Dengan kaidah pencacahan, perusahaan dapat memilih strategi yang paling efisien dari berbagai kemungkinan.

#### 4. Statistik dan Peluang
Kaidah pencacahan merupakan dasar dari materi peluang dan statistika.
Contohnya:
- Menghitung peluang munculnya suatu kejadian
- Menentukan banyak kemungkinan hasil percobaan
- Menganalisis data berdasarkan berbagai kemungkinan susunan
Tanpa kaidah pencacahan, perhitungan peluang akan sulit dilakukan secara sistematis.

#### 5. Kehidupan Sehari-hari
Banyak aktivitas sederhana sehari-hari sebenarnya menggunakan konsep pencacahan tanpa disadari.
Contohnya:
- Memilih kombinasi pakaian untuk dipakai
- Menentukan urutan kegiatan harian
- Memilih paket makanan dari beberapa menu
- Menentukan rute perjalanan dari beberapa pilihan jalan
Melalui contoh-contoh ini, terlihat bahwa kaidah pencacahan membantu kita membuat keputusan secara logis dan efisien.

---
# 1. Aturan Penjumlahan

Aturan penjumlahan adalah kaidah pencacahan yang digunakan ketika suatu proses melibatkan beberapa pilihan yang ==**saling terpisah dan hanya salah satu yang dapat dipilih.**== Sehingga jika satu pilihan terjadi, maka pilihan lainnya tidak akan terjadi secara bersamaan.
Jika suatu kejadian pertama dapat dilakukan dengan $m$ cara dan kejadian kedua dapat dilakukan dengan $n$ cara, maka banyak cara untuk melakukan salah satu kejadian tersebut dapat dinyatakan dengan $m+n$ .
## Contoh Soal
Perjalanan dari kota A ke kota B tersedia beberapa pilihan mode transportasi:
- 4 jenis PO Bus 
- 3 jenis PO travel

Berapa banyak cara seseorang melakukan perjalanan dari kota A ke kota B?
### Penyelesaian
Karena orang tersebut hanya bisa memilih **satu mode transportasi**, maka digunakan aturan penjumlahan:
$$
4+3 = 7
$$
Jadi, terdapat **7 cara** memilih mode transportasi untuk perjalanan dari kota A ke kota B.

---
# 2. Aturan Perkalian

Aturan perkalian adalah kaidah pencacahan yang digunakan ketika suatu kejadian dilakukan melalui ==**beberapa tahap yang saling bersamaan atau berurutan.**==  Sehingga jika terdapat dua pilihan, dimana kejadian pertama dilakukan dengan $m$ cara dan kejadian kedua dilakukan dengan $n$ cara, maka banyaknya cara terjadi kejadian $m$ dan $n$ secara bersamaan dinyatakan dengan $m \times n$ .
## Contoh Soal
Seseorang memiliki:
- 3 baju
- 2 celana

Berapa banyak kombinasi pakaian yang dapat dipilih?
### Penyelesaian
Karena menggunakan pakaian harus terjadi secara bersamaan antara penggunaan baju dan celana tanpa terpisah, maka digunakan aturan perkalian: 
$$
3 \times 2 = 6
$$
Jadi, terdapat **6 cara** dalam menggunakan pakaian secara berbeda yang dapat dilakukan oleh seseorang tersebut.

---
# 3. Operasi Faktorial

Operasi faktorial adalah operasi dasar dalam kombinatorika yang digunakan untuk menyatakan ==**hasil perkalian bilangan bulat positif secara berurutan dari bilangan tersebut hingga satu.**== Operasi ini menjadi dasar utama dalam perhitungan permutasi dan kombinasi.
## Faktorial Bilangan
Nilai faktorial suatu bilangan bulat positif $n$ dinyatakan dengan: 
$$
n! = n \times (n-1) \times (n-2) \times ... \times 1
$$
dengan catatan: khusus untuk nilai $0!=1$

## Contoh Soal
Hitung nilai dari $5!$ 
### Penyelesaian
Nilai dari $5!$ dihitung dengan menggunakan prinsip operasi faktorial:
$$
\begin{aligned} 5! &= 5 \times 4 \times 3 \times 2 \times 1 \\ &=120 \end{aligned}
$$
Jadi, nilai dari $5!=120$

---
# 4. Kombinasi

Operasi kombinasi adalah operasi pada kombinatorika dimana pemilihan objek dilakukan dengan ==**tanpa memperhatikan urutan kejadiannya.**== Jika urutan objek berubah, hasil pemilihan tetap dianggap sebagai kejadian yang sama.
Banyaknya cara memilih $r$ objek dari total sampel $n$ dinyatakan dengan: 
$$
C(n,r) = \frac{n!}{r! \times (n-r)!}
$$

## Contoh Soal
Dari 6 kandidat siswa akan dipilih 2 orang sebagai perwakilan kelas untuk pertandingan badminton. Tentukan banyaknya cara menentukan perwakilan tersebut!
### Penyelesaian
Karena hanya memilih perwakilan dengan tanpa memperhatikan jabatan dan aturan lainnya, maka urutan terpilihnya perwakilan menjadi tidak penting. artinya terpilih siswa $A$ baru kemudian siswa $B$ adalah perwakilan yang sama jika terpilih dulu $B$ baru kemudian $A$. Maka penyelesaiannya adalah:
$$
\begin{aligned} C(6,2) &= \frac{6!}{2! \times (6-2)!} \\ &= \frac{6 \times 5 \times \cancel{4!}}{2 \times 1 \times \cancel{4!}} \\ &= 15\end{aligned}
$$
Jadi, banyaknya cara untuk penentuan perwakilan 2 orang dari 6 orang kandidat adalah 15 cara.

---
# 5. Permutasi
Operasi permutasi adalah operasi pada kombinatorika dimana penyusunan objek dilakukan dengan ==**memperhatikan urutan kejadiannya.**== Jika urutan objek berubah, maka hasil penyusunan dianggap berbeda.
Terdapat beberapa jenis permutasi, yaitu:
## a. Permutasi $r$ dari $n$ Objek

Permutasi $r$ dari $n$ objek digunakan pada ==**penyusunan sebagian objek**== dari seluruh objek yang tersedia. Banyaknya cara menyusun $r$ objek dari total $n$ objek dinyatakan dengan:
$$
P(n,r)=\frac{n!}{(n-r)!}
$$

### Contoh Soal
Dari 6 siswa akan dipilih ketua, wakil, dan sekretaris. Banyak cara penentuannya adalah….
### Penyelesaian
Karena urutan jabatan berbeda, maka terpilihnya siswa $A$ sebagai ketua, siswa $B$ sebagai wakil, dan siswa $C$ sebagai sekretaris adalah kejadian berbeda saat siswa $B$ sebagai ketua, siswa $A$ sebagai wakil, dan siswa $C$ sebagai sekretaris. Maka penyelesaiannya adalah:
$$
\begin{aligned} P(6,3) &= \frac{6!}{(6-3)!} \\ &= \frac{6\times 5 \times 4 \times \cancel{3!}}{\cancel{3!}} \\ &=120 \end{aligned}
$$

Jadi, terdapat **120 susunan jabatan** berbeda yang dapat dilakukan.

## b. Permutasi $n$ dari $n$ Objek

Permutasi $n$ dari $n$ objek digunakan pada ==**penyusunan seluruh objek yang tersedia**==, sehingga semua unsur digunakan. Banyaknya cara menyusun $r$ objek dari total $n$ objek dinyatakan dengan:
$$
\begin{aligned} P(n,n)&=\frac{n!}{(n-n)!} \\ P(n,n) &= n!\end{aligned}
$$
### Contoh Soal

Banyaknya cara menyusun 5 buku berbeda pada sebuah rak buku adalah….

### Penyelesaian
Terdapat 5 buah buku yang akan disimpan untuk 5 posisi urutan berbeda. Maka penyelesaiannya adalah:
$$
\begin{aligned} P(5,5)&=5! \\ &= 5\times 4 \times 3\times 2 \times 1 \\ &= 120 \end{aligned}
$$
Jadi, terdapat **120 cara** menyusun berbeda untuk buku-buku tersebut.

## c. Permutasi dengan Unsur yang Sama

Permutasi unsur sama digunakan ketika terdapat ==**beberapa objek identik**==, sehingga pertukaran antar objek identik tidak menghasilkan susunan baru. Jika terdapat $n$ objek dengan objek $p$ yang sama sebanyak $k_1$, objek $q$ yang sama sebanyak $k_2$, dst. Maka banyak cara penyusunannya dinyatakan dengan: 
$$
P = \frac{n!}{k_1 \times k_2 \times ... \times k_n}
$$
### Contoh Soal

Banyak susunan kata berbeda yang dapat dibuat dari kata **MATEMATIKA** adalah….
### Penyelesaian
Kata **MATEMATIKA** terdiri dari $n= 10$ karakter dengan huruf yang sama $M = 2$ huruf, $A =3$ huruf, dan $T=2$ huruf. Maka penyelesaiannya adalah:
$$
\begin{aligned} P&=\frac{10!}{2! \times 3! \times 2!} \\ &=151.200 \end{aligned}
$$
Jadi, terdapat **151.200 kata berbeda** yang dapat dibuat dari kata MATEMATIKA .

## d. Permutasi Siklis

Permutasi siklis digunakan pada penyusunan seluruh objek dalam ==**posisi melingkar**==. Pada susunan ini, posisi awal dianggap sama jika hanya berbeda putarannya dan dianggap berbeda hanya pada pengurutannya saja. Permutasi siklis dinyatakan dengan:
$$
P_\text{siklis}=(n-1)!
$$
### Contoh Soal
Banyak cara 7 orang duduk secara melingkar adalah…..

### Penyelesaian
Posisi duduk untuk 7 orang tersebut adalah secara melinggkar. Maka banyaknya cara posisi duduk berbeda adalah:
$$
\begin{aligned} P &= (7-1)! \\ &= 720 \end{aligned}
$$

Jadi, terdapat **120 susunan melingkar berbeda** yang dapat terjadi.

---
