---
title:
---
# Pengantar Permutasi dan Permutasi Seluruh Objek

Permutasi adalah teknik pencacahan yang digunakan untuk menghitung banyaknya susunan atau urutan objek yang mungkin terbentuk dari sekumpulan unsur. Ciri utama dari permutasi adalah ==**URUTAN SANGAT DIPERHATIKAN.**== Artinya, susunan objek $AB$ tidak sama dengan susunan $BA$ ($AB \neq BA$).

### 1. Kapan Harus Menggunakan Permutasi?
Permutasi wajib digunakan ketika objek yang dipilih memiliki peran, jabatan, tingkatan, atau posisi yang spesifik. Contoh klasiknya adalah:
* Menyusun posisi kepengurusan (Ketua, Sekretaris, Bendahara).
* Menentukan juara perlombaan (Juara 1, Juara 2, Juara 3).
* Menyusun angka untuk membentuk bilangan atau huruf untuk membentuk kata sandi.

### 2. Permutasi Seluruh Objek ($n$ dari $n$ Unsur)
Jika kita ingin menyusun **seluruh** objek yang tersedia tanpa ada objek yang ditinggalkan ($r = n$), maka total susunan urutan yang dapat terbentuk langsung menggunakan operasi faktorial dari jumlah seluruh objek tersebut.
Formulanya adalah:
$$
P = n!
$$

---
## Contoh Soal

### Soal 1
Berapa banyak susunan berbeda yang dapat dibuat dari 4 buku berbeda yang disusun berjajar di atas meja?
    

> [!success]- Klik untuk Lihat Jawaban  
> Karena seluruh objek disusun dan setiap buku berbeda, gunakan rumus permutasi seluruh objek:
> 
> $$  
> P_n = n!  
> $$
> 
> Dengan $n=4$, diperoleh:
> 
> $$  
> \begin{aligned}  
> P_4 &= 4! \\  
> &= 4 \times 3 \times 2 \times 1 \\  
> &= 24  
> \end{aligned}  
> $$
> 
> Jadi, banyak susunan buku yang dapat dibuat adalah 24 susunan.

### Soal 2
Lima orang akan duduk berjajar pada sebuah bangku. Berapa banyak susunan tempat duduk yang mungkin?
    

> [!success]- Klik untuk Lihat Jawaban  
> Karena seluruh orang akan disusun dalam satu barisan dan setiap orang berbeda, maka:
> 
> $$  
> \begin{aligned}  
> P_5 &= 5! \\  
> &= 5 \times 4 \times 3 \times 2 \times 1 \\  
> &= 120  
> \end{aligned}  
> $$
> 
> Jadi, banyak susunan tempat duduk yang mungkin adalah 120 susunan.

### Soal 3
Berapa banyak bilangan yang dapat dibentuk dari semua angka 1, 2, 3, 4, dan 5 jika setiap angka hanya digunakan satu kali?
    

> [!success]- Klik untuk Lihat Jawaban  
> Karena seluruh angka digunakan tepat satu kali, maka banyak susunan yang mungkin adalah permutasi seluruh objek:
> 
> $$  
> \begin{aligned}  
> P_5 &= 5! \\  
> &= 120  
> \end{aligned}  
> $$
> 
> Jadi, banyak bilangan yang dapat dibentuk adalah 120 bilangan.

### Soal 4
Enam siswa berbeda akan berbaris untuk mengikuti upacara. Jika Andi harus berada di posisi paling depan, berapa banyak susunan barisan yang mungkin?
    

> [!success]- Klik untuk Lihat Jawaban  
> Karena posisi paling depan sudah ditempati oleh Andi, maka tersisa 5 siswa yang dapat disusun.
> 
> Dengan demikian, banyak susunan yang mungkin adalah:
> 
> $$  
> \begin{aligned}  
> P_5 &= 5! \\  
> &= 120  
> \end{aligned}  
> $$
> 
> Jadi, banyak susunan barisan yang mungkin adalah 120 susunan.

### Soal 5
Tujuh buku berbeda akan disusun berjajar pada sebuah rak. Jika buku Matematika dan buku Fisika harus selalu berdampingan, berapa banyak susunan buku yang mungkin?
    

> [!success]- Klik untuk Lihat Jawaban  
> Anggap buku Matematika dan buku Fisika sebagai satu kesatuan atau satu blok.
> 
> Dengan demikian, terdapat 6 objek yang akan disusun, sehingga:
> 
> $$  
> 6!  
> $$
> 
> Namun, buku Matematika dan Fisika dapat bertukar posisi di dalam blok tersebut sebanyak:
> 
> $$  
> 2!  
> $$
> 
> Maka, banyak susunan yang mungkin adalah:
> 
> $$  
> \begin{aligned}  
> 6! \times 2! &= 720 \times 2 \\  
> &= 1440  
> \end{aligned}  
> $$
> 
> Jadi, banyak susunan buku yang mungkin adalah 1440 susunan.


---

## Konsep Terkait

- [[Kaidah Pencacahan dan Peluang/02 - Notasi Faktorial]]
- [[Kaidah Pencacahan dan Peluang/04 - Permutasi Sebagian Objek dari Unsur Berbeda]]