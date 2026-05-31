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
Hitunglah nilai operasi hitung pecahan faktorial berikut ini:
$$
\frac{6! \times 3!}{4! \times 0!}
$$

> [!success]- Klik untuk Lihat Jawaban
> Lakukan penjabaran secara taktis dengan melihat angka terbesar pada bagian penyebut ($4!$) dan ingat sifat $0! = 1$:
> 
> $$
> \begin{aligned}
> \frac{6! \times 3!}{4! \times 0!} &= \frac{(6 \times 5 \times \cancel{4!}) \times (3 \times 2 \times 1)}{\cancel{4!} \times 1} \\
> &= \frac{(6 \times 5) \times 6}{1} \\
> &= 30 \times 6 \\
> &= 180
> \end{aligned}
> $$
> Jadi, hasil akhir dari operasi hitung faktorial tersebut adalah 180.

---

## Konsep Terkait

- [[Kombinatorika dan Teori Peluang Lanjutan/01 - Aturan Penjumlahan dan Aturan Perkalian]]
- [[Kombinatorika dan Teori Peluang Lanjutan/03 - Pengantar Permutasi dan Permutasi Seluruh Objek]]