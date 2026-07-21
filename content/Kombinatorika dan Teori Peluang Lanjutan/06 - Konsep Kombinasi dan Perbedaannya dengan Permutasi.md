---
title:
---
# Konsep Kombinasi dan Perbedaannya dengan Permutasi

Kombinasi adalah teknik pencacahan yang digunakan untuk menghitung banyaknya susunan objek di mana ==**URUTAN TIDAK DIPERHATIKAN.**== Dalam teori kombinasi, susunan objek $AB$ dianggap sama persis dengan susunan $BA$ ($AB = BA$). 

### 1. Perbedaan Mendasar: Permutasi vs Kombinasi
Untuk menghindari kesalahan dalam memilih rumus saat menyelesaikan soal cerita, perhatikan tabel komparasi berikut:

| Karakteristik | Permutasi | Kombinasi |
| :--- | :--- | :--- |
| **Urutan** | Sangat diperhatikan ($AB \neq BA$) | Diabaikan/Tidak penting ($AB = BA$) |
| **Kata Kunci** | Menyusun, mengurutkan, jabatan, peringkat | Memilih, mengambil, tim, kelompok, jabat tangan |
| **Logika Kasus** | Menentukan Ketua dan Wakil Ketua | Memilih 2 orang utusan untuk delegasi |

### 2. Rumus Umum Kombinasi
Banyaknya kombinasi dari $r$ objek yang dipilih dari $n$ objek yang tersedia (di mana $r \le n$) disimbolkan dengan $C(n, r)$, $_nC_r$, atau $\binom{n}{r}$.
Formulanya adalah:
$$
_nC_r = \frac{n!}{r! \times (n - r)!}
$$

---

## Contoh Soal

1. Hitunglah nilai dari ${}_5C_2$.
    

> [!success]- Klik untuk Lihat Jawaban  
> Gunakan rumus kombinasi:
> 
> $$  
> {}_nC_r = \frac{n!}{r!(n-r)!}  
> $$
> 
> Maka:
> 
> $$  
> \begin{aligned}  
> {}_5C_2 &= \frac{5!}{2!(5-2)!} \\  
> &= \frac{5!}{2! \times 3!} \\  
> &= \frac{5 \times 4 \times \cancel{3!}}{2 \times 1 \times \cancel{3!}} \\  
> &= 10  
> \end{aligned}  
> $$
> 
> Jadi, nilai dari ${}_5C_2$ adalah 10.

2. Dari 6 siswa akan dipilih 3 siswa untuk mengikuti kegiatan lomba. Berapa banyak cara pemilihan yang mungkin?
    

> [!success]- Klik untuk Lihat Jawaban  
> Karena urutan pemilihan siswa tidak diperhatikan, maka digunakan kombinasi.
> 
> $$  
> \begin{aligned}  
> {}_6C_3 &= \frac{6!}{3!(6-3)!} \\  
> &= \frac{6!}{3! \times 3!} \\  
> &= \frac{6 \times 5 \times 4 \times \cancel{3!}}{3! \times \cancel{3!}} \\  
> &= \frac{120}{6} \\  
> &= 20  
> \end{aligned}  
> $$
> 
> Jadi, banyak cara pemilihan siswa yang mungkin adalah 20 cara.

3. Sebuah kantong berisi 8 bola dengan warna berbeda. Jika 2 bola diambil sekaligus, berapa banyak pasangan bola yang dapat dipilih?
    

> [!success]- Klik untuk Lihat Jawaban  
> Karena bola diambil sekaligus sehingga urutan pengambilan tidak diperhatikan, gunakan kombinasi:
> 
> $$  
> \begin{aligned}  
> {}_8C_2 &= \frac{8!}{2!(8-2)!} \\  
> &= \frac{8!}{2! \times 6!} \\  
> &= \frac{8 \times 7 \times \cancel{6!}}{2 \times 1 \times \cancel{6!}} \\  
> &= 28  
> \end{aligned}  
> $$
> 
> Jadi, banyak pasangan bola yang dapat dipilih adalah 28 pasangan.

4. Dari 10 orang siswa akan dipilih 4 orang untuk menjadi anggota sebuah tim. Berapa banyak tim berbeda yang dapat dibentuk?
    

> [!success]- Klik untuk Lihat Jawaban  
> Karena yang diperhatikan adalah anggota tim dan bukan urutan pemilihannya, maka digunakan kombinasi.
> 
> $$  
> \begin{aligned}  
> {}_{10}C_4 &= \frac{10!}{4!(10-4)!} \\  
> &= \frac{10!}{4! \times 6!} \\  
> &= \frac{10 \times 9 \times 8 \times 7 \times \cancel{6!}}{4 \times 3 \times 2 \times 1 \times \cancel{6!}} \\  
> &= \frac{5040}{24} \\  
> &= 210  
> \end{aligned}  
> $$
> 
> Jadi, banyak tim berbeda yang dapat dibentuk adalah 210 tim.

5. Dalam sebuah kelas terdapat 12 siswa. Akan dipilih 5 siswa untuk mengikuti kegiatan studi wisata. Jika Andi harus ikut dalam kegiatan tersebut, berapa banyak pilihan kelompok yang mungkin?
    

> [!success]- Klik untuk Lihat Jawaban  
> Karena Andi harus ikut, maka posisi Andi dianggap sudah pasti terpilih.
> 
> Dengan demikian, tersisa 11 siswa dan akan dipilih 4 siswa lainnya.
> 
> $$  
> \begin{aligned}  
> {}_{11}C_4 &= \frac{11!}{4!(11-4)!} \\  
> &= \frac{11!}{4! \times 7!} \\  
> &= \frac{11 \times 10 \times 9 \times 8 \times \cancel{7!}}{4 \times 3 \times 2 \times 1 \times \cancel{7!}} \\  
> &= \frac{7920}{24} \\  
> &= 330  
> \end{aligned}  
> $$
> 
> Jadi, banyak pilihan kelompok yang mungkin adalah 330 kelompok.

6. Dari 10 orang siswa akan dipilih 4 orang untuk mengikuti lomba. Jika Budi dan Citra tidak boleh terpilih secara bersamaan, berapa banyak kelompok yang dapat dibentuk?
    

> [!success]- Klik untuk Lihat Jawaban  
> Hitung terlebih dahulu seluruh kemungkinan kelompok:
> 
> $$  
> \begin{aligned}  
> {}_{10}C_4 &= \frac{10!}{4! \times 6!} \\  
> &= 210  
> \end{aligned}  
> $$
> 
> Banyak kelompok yang memuat Budi dan Citra secara bersamaan adalah:
> 
> $$  
> \begin{aligned}  
> {}_8C_2 &= \frac{8!}{2! \times 6!} \\  
> &= 28  
> \end{aligned}  
> $$
> 
> Karena Budi dan Citra tidak boleh terpilih secara bersamaan, maka:
> 
> $$  
> \begin{aligned}  
> P &= 210 - 28 \\  
> &= 182  
> \end{aligned}  
> $$
> 
> Jadi, banyak kelompok yang dapat dibentuk adalah 182 kelompok.

7. Dari 12 siswa akan dipilih 5 siswa untuk mengikuti seleksi olimpiade. Jika Andi harus terpilih dan Budi tidak boleh terpilih, berapa banyak kelompok siswa yang dapat dibentuk?
    

> [!success]- Klik untuk Lihat Jawaban  
> Karena Andi harus terpilih, maka Andi sudah pasti menjadi salah satu anggota kelompok.
> 
> Karena Budi tidak boleh terpilih, maka tersisa 10 siswa lainnya untuk dipilih 4 siswa.
> 
> $$  
> \begin{aligned}  
> {}_{10}C_4 &= \frac{10!}{4!(10-4)!} \\  
> &= \frac{10!}{4! \times 6!} \\  
> &= \frac{10 \times 9 \times 8 \times 7 \times \cancel{6!}}{4 \times 3 \times 2 \times 1 \times \cancel{6!}} \\  
> &= 210  
> \end{aligned}  
> $$
> 
> Jadi, banyak kelompok siswa yang dapat dibentuk adalah 210 kelompok.


---

## Konsep Terkait

- [[Kombinatorika dan Teori Peluang Lanjutan/04 - Permutasi Sebagian Objek dari Unsur Berbeda]]
- [[Kombinatorika dan Teori Peluang Lanjutan/07 - Pengantar Ekspansi Binomial Newton|07 - Pengantar Ekspansi Binomial Newton]]
