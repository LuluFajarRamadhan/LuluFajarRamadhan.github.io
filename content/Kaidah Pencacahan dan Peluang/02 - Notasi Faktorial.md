---
title:
---
# Notasi Faktorial

Sebelum mempelajari perhitungan permutasi dan kombinasi yang lebih kompleks, kita wajib menguasai operasi hitung **Faktorial**. Faktorial merupakan notasi matematika yang digunakan untuk menyatakan ==**hasil kali berurutan dari bilangan bulat positif secara menurun hingga angka 1.**==

Notasi faktorial dilambangkan dengan tanda seru ($!$). Secara matematis, jika $n$ adalah bilangan bulat positif, maka $n!$ (dibaca: $n$ faktorial) didefinisikan sebagai:
$$
n! = n \times (n - 1) \times (n - 2) \times \dots \times 3 \times 2 \times 1
$$

### Sifat dan Ketentuan Khusus Faktorial
* **Definisi Khusus Nilai Nol:** Berdasarkan kesepakatan matematis demi konsistensi rumus peluang, nilai dari nol faktorial didefinisikan sebagai satu:
$$
0! = 1
$$
* **Penyederhanaan Pecahan Faktorial:** Untuk mempermudah pembagian dua buah faktorial, kita tidak perlu menjabarkan seluruh angka sampai habis, melainkan cukup ==**menghentikan penjabaran faktorial terbesar pada angka yang setara dengan faktorial terkecil**== untuk kemudian saling disederhanakan menggunakan fungsi eliminasi $\cancel{}$.
$$
\frac{8!}{6!} = \frac{8 \times 7 \times \cancel{6!}}{\cancel{6!}} = 8 \times 7 = 56
$$

---
## Contoh Soal

### Soal 1
Hitunglah nilai dari $4!$.

> [!success]- Klik untuk Lihat Jawaban  
> Berdasarkan definisi faktorial, diperoleh:
> 
> $$  
> \begin{aligned}  
> 4! &= 4 \times 3 \times 2 \times 1 \\  
> &= 24  
> \end{aligned}  
> $$
> 
> Jadi, hasil dari $4!$ adalah 24.

### Soal 2
Hitunglah nilai dari $\frac{6!}{4!}$.

> [!success]- Klik untuk Lihat Jawaban  
> Lakukan penyederhanaan dengan menghentikan penjabaran $6!$ pada $4!$:
> 
> $$  
> \begin{aligned}  
> \frac{6!}{4!} &= \frac{6 \times 5 \times \cancel{4!}}{\cancel{4!}} \\  
> &= 6 \times 5 \\  
> &= 30  
> \end{aligned}  
> $$
> 
> Jadi, hasil dari $\frac{6!}{4!}$ adalah 30.

### Soal 3
Hitunglah nilai dari $\frac{5! \times 2!}{3!}$.

> [!success]- Klik untuk Lihat Jawaban  
> Lakukan penjabaran secara taktis dengan melihat faktorial terbesar pada bagian penyebut ($3!$):
> 
> $$  
> \begin{aligned}  
> \frac{5! \times 2!}{3!} &= \frac{(5 \times 4 \times \cancel{3!}) \times (2 \times 1)}{\cancel{3!}} \\  
> &= 5 \times 4 \times 2 \\  
> &= 40  
> \end{aligned}  
> $$
> 
> Jadi, hasil akhir dari operasi hitung faktorial tersebut adalah 40.

### Soal 4
Sederhanakan bentuk faktorial berikut ini:  $$\frac{(n+2)!}{n!}$$
> [!success]- Klik untuk Lihat Jawaban  
> Berdasarkan definisi faktorial, diperoleh:
> 
> $$  
> \begin{aligned}  
> \frac{(n+2)!}{n!} &= \frac{(n+2)(n+1)n!}{n!} \\  
> &= (n+2)(n+1)  
> \end{aligned}  
> $$
> 
> Jadi, bentuk sederhana dari $\frac{(n+2)!}{n!}$ adalah $(n+2)(n+1)$.

### Soal 5
Jika $\frac{(n+1)!}{(n-1)!}=20$, tentukan nilai $n$.

> [!success]- Klik untuk Lihat Jawaban  
> Sederhanakan terlebih dahulu bentuk faktorialnya:
> 
> $$  
> \begin{aligned}  
> \frac{(n+1)!}{(n-1)!} &= \frac{(n+1)n(n-1)!}{(n-1)!} \\  
> &= n(n+1)  
> \end{aligned}  
> $$
> 
> Karena diketahui:
> 
> $$  
> n(n+1)=20  
> $$
> 
> Maka:
> 
> $$  
> \begin{aligned}  
> n^2+n-20 &= 0 \\  
> (n+5)(n-4) &= 0  
> \end{aligned}  
> $$
> 
> Karena $n$ merupakan bilangan bulat positif, maka $n=4$.
> 
> Jadi, nilai $n$ adalah 4.


---

## Konsep Terkait

- [[Kaidah Pencacahan dan Peluang/01 - Aturan Penjumlahan dan Aturan Perkalian]]
- [[Kaidah Pencacahan dan Peluang/03 - Pengantar Permutasi dan Permutasi Seluruh Objek]]