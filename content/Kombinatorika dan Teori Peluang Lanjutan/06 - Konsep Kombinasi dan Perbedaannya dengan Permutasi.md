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
Sebutkan jenis teknik pencacahan (Permutasi atau Kombinasi) yang paling tepat untuk menyelesaikan dua kasus berikut, kemudian hitunglah hasil akhir untuk Kasus B:
* **Kasus A:** Menentukan banyaknya cara menyusun nomor punggung lari dari angka 1, 2, dan 3.
* **Kasus B:** Menentukan banyaknya cara memilih 2 orang siswa dari total 4 siswa untuk mewakili sekolah dalam lomba cerdas cermat.

> [!success]- Klik untuk Lihat Jawaban
> **Analisis Kasus A:**
> Nomor punggung sangat dipengaruhi oleh urutan angka (misal: angka 123 berbeda maknanya dengan 321). Oleh karena itu, Kasus A wajib diselesaikan menggunakan metode **Permutasi**.
> 
> **Analisis Kasus B:**
> Ketika memilih 2 orang siswa (misalkan si $A$ dan si $B$), urutan pemilihan tidak berpengaruh. Memilih $A$ lalu $B$ sama saja dengan memilih $B$ lalu $A$ karena keduanya berkedudukan sama sebagai delegasi tim. Maka, Kasus B diselesaikan menggunakan metode **Kombinasi**.
> 
> **Perhitungan Aljabar Kasus B:**
> Diketahui total siswa ($n$) = 4 dan jumlah siswa yang dipilih ($r$) = 2.
> $$
> \begin{aligned}
> _4C_2 &= \frac{4!}{2! \times (4 - 2)!} \\
> &= \frac{4!}{2! \times 2!} \\
> &= \frac{4 \times 3 \times \cancel{2!}}{(2 \times 1) \times \cancel{2!}} \\
> &= \frac{12}{2} = 6
> \end{aligned}
> $$
> Jadi, terdapat **6 cara** berbeda untuk memilih tim perwakilan tersebut.

---

## Konsep Terkait

- [[Kombinatorika dan Teori Peluang Lanjutan/04 - Permutasi Sebagian Objek dari Unsur Berbeda]]
- [[Kombinatorika dan Teori Peluang Lanjutan/07 - Aplikasi Kombinasi dalam Pemilihan Objek dan Soal Cerita]]