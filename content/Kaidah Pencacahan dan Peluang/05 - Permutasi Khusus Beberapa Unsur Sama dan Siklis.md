---
title:
---
# Permutasi Khusus Beberapa Unsur Sama dan Siklis

Dalam perkembangannya, terdapat kondisi khusus di mana objek yang akan disusun memiliki karakteristik tertentu, seperti adanya kembaran objek atau disusun dalam formasi melingkar.

### 1. Permutasi dengan Beberapa Unsur yang Sama
Jika kita ingin menyusun objek yang di dalamnya terdapat ==**beberapa unsur yang identik atau sama**==, kita harus membagi total permutasi dengan faktorial dari unsur-unsur yang sama tersebut agar tidak terjadi duplikasi perhitungan susunan.
Formulanya adalah:
$$
_nP_{k_1,k_2,...} = \frac{n!}{k_1! \times k_2! \times \dots \times k_m!}
$$
*Dimana $n$ adalah total seluruh unsur, dan $k_1, k_2, \dots$ adalah jumlah unsur-unsur yang sama.*

### 2. Permutasi Siklis (Susunan Melingkar)
Permutasi siklis digunakan untuk menghitung banyaknya susunan objek yang ==**ditempatkan secara melingkar**== (misalnya duduk mengelilingi meja bundar atau membuat gelang manik-manik). Karena bentuknya melingkar, harus ada 1 objek yang dikunci sebagai titik acuan tetap.
Formulanya adalah:
$$
_nP_{\text{siklis}} = (n - 1)!
$$

---
## Contoh Soal Permutasi Khusus Beberapa Unsur Sama

### Soal 1
Tentukan banyak susunan huruf yang dapat dibentuk dari semua huruf pada kata **MAMA**.
    

> [!success]- Klik untuk Lihat Jawaban  
> Kata **MAMA** terdiri dari 4 huruf dengan:
> 
> - Huruf M sebanyak 2
>     
> - Huruf A sebanyak 2
>     
> 
> Maka:
> 
> $$  
> \begin{aligned}  
> _4P_{2,2} &= \frac{4!}{2! \times 2!} \\  
> &= \frac{4 \times 3 \times \cancel{2!}}{\cancel{2!} \times 2!} \\  
> &= \frac{12}{2} \\  
> &= 6  
> \end{aligned}  
> $$
> 
> Jadi, banyak susunan huruf yang dapat dibentuk adalah 6 susunan.

### Soal 2
Berapa banyak susunan berbeda yang dapat dibentuk dari semua huruf pada kata **STATISTIK**?
    

> [!success]- Klik untuk Lihat Jawaban  
> Kata **STATISTIK** terdiri dari 9 huruf dengan:
> 
> - Huruf T sebanyak 3
>     
> - Huruf S sebanyak 2
>     
> - Huruf I sebanyak 2
>     
> 
> Maka:
> 
> $$  
> \begin{aligned}  
> _9P_{3,2,2} &= \frac{9!}{3! \times 2! \times 2!} \\  
> &= \frac{9\times 8 \times 7 \times 6 \times 5 \times \cancel{4} \times \cancel{3!}}{\cancel{3!} \times \cancel{2} \times \cancel{2}} \\  
> &= 7560  
> \end{aligned}  
> $$
> 
> Jadi, banyak susunan huruf yang dapat dibentuk adalah 7560 susunan.

### Soal 3
Tentukan banyak susunan berbeda yang dapat dibentuk dari semua huruf pada kata **MATEMATIKA**.
    

> [!success]- Klik untuk Lihat Jawaban  
> Kata **MATEMATIKA** terdiri dari 10 huruf dengan:
> 
> - Huruf A sebanyak 3
>     
> - Huruf M sebanyak 2
>     
> - Huruf T sebanyak 2
>     
> 
> Maka:
> 
> $$  
> \begin{aligned}  
> _{10}P_{3,2,2} &= \frac{10!}{3! \times 2! \times 2!} \\  
> &= \frac{10 \times 9 \times 8 \times 7 \times 6 \times 5 \times \cancel{4} \times \cancel{3!}}{\cancel{3!} \times \cancel{2} \times \cancel{2}} \\  
> &= 151200  
> \end{aligned}  
> $$
> 
> Jadi, banyak susunan huruf yang dapat dibentuk adalah 151200 susunan.

### Soal 4
Berapa banyak susunan berbeda yang dapat dibentuk dari semua huruf pada kata **MATEMATIKA** jika huruf A harus selalu berada di posisi pertama?
    

> [!success]- Klik untuk Lihat Jawaban  
> Karena satu huruf A harus berada di posisi pertama, maka tersisa 9 huruf dengan:
> 
> - Huruf A sebanyak 2
>     
> - Huruf M sebanyak 2
>     
> - Huruf T sebanyak 2
>     
> 
> Maka:
> 
> $$  
> \begin{aligned}  
> _9P_{2,2,2} &= \frac{9!}{2! \times 2! \times 2!} \\  
> &= \frac{9 \times \cancel{8} \times 7 \times 6 \times 5 \times 4 \times 3 \times 2 \times 1}{\cancel{2} \times \cancel{2} \times \cancel{2}} \\   
> &= 45360  
> \end{aligned}  
> $$
> 
> Jadi, banyak susunan huruf yang mungkin adalah 45360 susunan.

---
## Contoh Soal Permutasi Siklis

### Soal 1
Enam orang siswa akan duduk mengelilingi sebuah meja bundar. Berapa banyak susunan tempat duduk yang mungkin?
    

> [!success]- Klik untuk Lihat Jawaban  
> Karena susunan dilakukan secara melingkar, gunakan rumus permutasi siklis:
> 
> $$  
> _nP_\text{siklis} = (n-1)!  
> $$
> 
> Dengan $n=6$, diperoleh:
> 
> $$  
> \begin{aligned}  
> _6P_\text{siklis} &= (6-1)! \\  
> &= 5! \\  
> &= 120  
> \end{aligned}  
> $$
> 
> Jadi, banyak susunan tempat duduk yang mungkin adalah 120 susunan.

### Soal 2
Enam orang siswa akan duduk mengelilingi sebuah meja bundar. Jika Andi dan Budi harus duduk bersebelahan, berapa banyak susunan tempat duduk yang mungkin?
    

> [!success]- Klik untuk Lihat Jawaban  
> Anggap Andi dan Budi sebagai satu kesatuan atau satu blok.
> 
> Dengan demikian, terdapat 5 objek yang disusun secara siklis. Andi dan Budi juga dapat bertukar posisi sebanyak $2!$ cara.
> 
> Maka:
> 
> $$  
> \begin{aligned}  
> _6P_\text{siklis} &= (5-1)! \times 2! \\  
> &= 4! \times 2! \\  
> &= 24 \times 2 \\ 
> &= 48  
> \end{aligned}  
> $$
> 
> Jadi, banyak susunan tempat duduk yang mungkin adalah 48 susunan.

### Soal 3
Enam orang siswa akan duduk mengelilingi sebuah meja bundar. Jika Andi dan Budi tidak boleh duduk bersebelahan, berapa banyak susunan tempat duduk yang mungkin?
    

> [!success]- Klik untuk Lihat Jawaban  
> Hitung terlebih dahulu seluruh susunan tempat duduk:
> 
> $$  
> \begin{aligned}  
> _6P_\text{siklis} &= (6-1)! \\  
> &= 5! \\  
> &= 120  
> \end{aligned}  
> $$
> 
> Banyak susunan ketika Andi dan Budi duduk bersebelahan adalah:
> 
> $$  
> \begin{aligned}  
> 5P_\text{siklis} &= (5-1)! \times 2! \\  
> &= 4! \times 2! \\  
> &= 24 \times 2 \\  
> &= 48  
> \end{aligned}  
> $$
> 
> Karena Andi dan Budi tidak boleh bersebelahan, maka:
> 
> $$  
> \begin{aligned}  
> P &= 120 - 48 \\  
> &= 72  
> \end{aligned}  
> $$
> 
> Jadi, banyak susunan tempat duduk yang mungkin adalah 72 susunan.

### Soal 4
Delapan orang akan duduk mengelilingi sebuah meja bundar. Jika Ani dan Budi tidak boleh duduk bersebelahan, tentukan banyak susunan tempat duduk yang mungkin.
    

> [!success]- Klik untuk Lihat Jawaban  
> Banyak seluruh susunan tempat duduk adalah:
> 
> $$  
> \begin{aligned}  
> _8P_\text{siklis} &= (8-1)! \\  
> &= 7! \\  
> &= 5040  
> \end{aligned}  
> $$
> 
> Banyak susunan ketika Ani dan Budi duduk bersebelahan adalah:
> 
> $$  
> \begin{aligned}  
> 7P_\text{siklis} &= (7-1)! \times 2! \\  
> &= 6! \times 2! \\  
> &= 720 \times 2 \\  
> &= 1440  
> \end{aligned}  
> $$
> 
> Karena Ani dan Budi tidak boleh bersebelahan, maka:
> 
> $$  
> \begin{aligned}  
> P &= 5040 - 1440 \\  
> &= 3600  
> \end{aligned}  
> $$
> 
> Jadi, banyak susunan tempat duduk yang mungkin adalah 3600 susunan.


---

## Konsep Terkait

- [[Kaidah Pencacahan dan Peluang/04 - Permutasi Sebagian Objek dari Unsur Berbeda]]
- [[Kaidah Pencacahan dan Peluang/06 - Konsep Kombinasi dan Perbedaannya dengan Permutasi]]