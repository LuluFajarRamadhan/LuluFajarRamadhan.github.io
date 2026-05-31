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
Di sebuah kelas yang terdiri dari 7 orang siswa, akan dipilih 3 orang untuk menduduki jabatan sebagai Ketua Kelas, Sekretaris, dan Bendahara. Tentukan banyaknya variasi susunan pengurus kelas yang dapat terbentuk!

> [!success]- Klik untuk Lihat Jawaban
> **Langkah 1: Identifikasi Masalah.**
> * Total siswa yang tersedia ($n$) = 7
> * Jumlah posisi pengurus yang dicari ($r$) = 3
> * Jabatan bersifat spesifik (Ketua $\neq$ Sekretaris $\neq$ Bendahara), sehingga urutan diperhatikan. Gunakan rumus $_nP_r$.
> 
> **Langkah 2: Perhitungan Aljabar.**
> Substitusikan nilai $n = 7$ dan $r = 3$ ke dalam rumus:
> $$
> \begin{aligned}
> _7P_3 &= \frac{7!}{(7 - 3)!} \\
> &= \frac{7!}{4!} \\
> &= \frac{7 \times 6 \times 5 \times \cancel{4!}}{\cancel{4!}} \\
> &= 7 \times 6 \times 5 \\
> &= 210
> \end{aligned}
> $$
> Jadi, banyaknya variasi susunan pengurus kelas yang dapat terbentuk adalah **210 variasi**.

---

## Konsep Terkait

- [[Kombinatorika dan Teori Peluang Lanjutan/03 - Pengantar Permutasi dan Permutasi Seluruh Objek]]
- [[Kombinatorika dan Teori Peluang Lanjutan/05 - Permutasi Khusus Beberapa Unsur Sama dan Siklis]]