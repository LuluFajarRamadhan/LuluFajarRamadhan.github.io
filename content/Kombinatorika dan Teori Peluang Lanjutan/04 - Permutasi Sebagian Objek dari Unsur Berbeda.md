---
title:
---
# Permutasi Sebagian Objek dari Unsur Berbeda

Jika pada materi sebelumnya kita menyusun seluruh objek, pada subbab ini kita hanya memilih dan menyusun **sebagian objek ($r$)** dari total keseluruhan **objek yang tersedia ($n$)**, di mana nilai $r \le n$ dan seluruh unsur objek tersebut bersifat unik (berbeda satu sama lain).

Sama seperti prinsip dasar permutasi, ==**posisi atau urutan objek yang terpilih tetap menjadi aturan mutlak.**== Notasi permutasi biasa ditulis dengan lambang $P(n, r)$ atau $_nP_r$.
Formulanya adalah:
$$
_nP_r = \frac{n!}{(n - r)!}
$$

---
## Contoh Soal

1. Di sebuah kelas yang terdiri dari 7 orang siswa, akan dipilih 3 orang untuk menduduki jabatan sebagai Ketua Kelas, Sekretaris, dan Bendahara. Tentukan banyaknya variasi susunan pengurus kelas yang dapat terbentuk!
    

> [!success]- Klik untuk Lihat Jawaban  
> Karena jabatan Ketua Kelas, Sekretaris, dan Bendahara berbeda, maka urutan penempatan siswa diperhatikan. Gunakan rumus permutasi sebagian objek:
> 
> $$  
> P(n,r) = \frac{n!}{(n-r)!}  
> $$
> 
> Dengan $n=7$ dan $r=3$, diperoleh:
> 
> $$  
> \begin{aligned}  
> P(7,3) &= \frac{7!}{(7-3)!} \\  
> &= \frac{7!}{4!} \\  
> &= 7 \times 6 \times 5 \\  
> &= 210  
> \end{aligned}  
> $$
> 
> Jadi, banyaknya variasi susunan pengurus kelas yang dapat terbentuk adalah 210 susunan.

2. Dari angka 1, 2, 3, 4, dan 5 akan dibentuk bilangan dua angka tanpa pengulangan angka. Berapa banyak bilangan yang dapat dibentuk?
    

> [!success]- Klik untuk Lihat Jawaban  
> Karena akan dibentuk bilangan dua angka dari 5 angka berbeda dan urutan angka diperhatikan, maka:
> 
> $$  
> \begin{aligned}  
> P(5,2) &= \frac{5!}{(5-2)!} \\  
> &= \frac{5!}{3!} \\  
> &= 5 \times 4 \\  
> &= 20  
> \end{aligned}  
> $$
> 
> Jadi, banyak bilangan yang dapat dibentuk adalah 20 bilangan.

3. Sebuah sekolah memiliki 7 calon siswa berbeda untuk mengikuti lomba. Jika hanya 3 siswa yang akan dipilih untuk menempati posisi juara 1, juara 2, dan juara 3, berapa banyak kemungkinan susunan pemenangnya?
    

> [!success]- Klik untuk Lihat Jawaban  
> Karena posisi juara 1, juara 2, dan juara 3 berbeda, maka urutan diperhatikan.
> 
> $$  
> \begin{aligned}  
> P(7,3) &= \frac{7!}{(7-3)!} \\  
> &= \frac{7!}{4!} \\  
> &= 7 \times 6 \times 5 \\  
> &= 210  
> \end{aligned}  
> $$
> 
> Jadi, banyak kemungkinan susunan pemenangnya adalah 210 susunan.

4. Dari 8 buku berbeda, akan disusun 4 buku berjajar pada sebuah rak. Berapa banyak susunan buku yang mungkin?
    

> [!success]- Klik untuk Lihat Jawaban  
> Karena hanya 4 buku yang disusun dari 8 buku dan urutan penyusunan diperhatikan, maka:
> 
> $$  
> \begin{aligned}  
> P(8,4) &= \frac{8!}{(8-4)!} \\  
> &= \frac{8!}{4!} \\  
> &= 8 \times 7 \times 6 \times 5 \\  
> &= 1680  
> \end{aligned}  
> $$
> 
> Jadi, banyak susunan buku yang mungkin adalah 1680 susunan.

5. Dari 10 orang berbeda akan dipilih 4 orang untuk mengisi posisi Ketua, Wakil Ketua, Sekretaris, dan Bendahara. Jika Budi harus selalu menjadi Ketua, berapa banyak susunan kepengurusan yang mungkin?
    

> [!success]- Klik untuk Lihat Jawaban  
> Karena Budi harus menjadi Ketua, maka posisi Ketua sudah tetap. Dengan demikian, tersisa 9 orang untuk mengisi 3 posisi lainnya.
> 
> $$  
> \begin{aligned}  
> P(9,3) &= \frac{9!}{(9-3)!} \\  
> &= \frac{9!}{6!} \\  
> &= 9 \times 8 \times 7 \\  
> &= 504  
> \end{aligned}  
> $$
> 
> Jadi, banyak susunan kepengurusan yang mungkin adalah $504$ susunan.


---

## Konsep Terkait

- [[Kombinatorika dan Teori Peluang Lanjutan/03 - Pengantar Permutasi dan Permutasi Seluruh Objek]]
- [[Kombinatorika dan Teori Peluang Lanjutan/05 - Permutasi Khusus Beberapa Unsur Sama dan Siklis]]