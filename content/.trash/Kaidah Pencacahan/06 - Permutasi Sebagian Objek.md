---
title:
---
# Permutasi $r$ dari $n$
Permutasi $r$ dari $n$ objek digunakan pada ==**penyusunan sebagian objek**== dari seluruh objek yang tersedia. Banyaknya cara menyusun $r$ objek dari total $n$ objek dinyatakan dengan:
$$
P(n,r)=\frac{n!}{(n-r)!}
$$
---
## Contoh Soal
Dari 6 siswa akan dipilih ketua, wakil, dan sekretaris. Banyak cara penentuannya adalah….

> [!success]- Klik untuk Lihat Jawaban
> Karena urutan jabatan berbeda, maka terpilihnya siswa $A$ sebagai ketua, siswa $B$ sebagai wakil, dan siswa $C$ sebagai sekretaris adalah kejadian berbeda saat siswa $B$ sebagai ketua, siswa $A$ sebagai wakil, dan siswa $C$ sebagai sekretaris. Maka penyelesaiannya adalah:
> $$
> \begin{aligned} P(6,3) &= \frac{6!}{(6-3)!} \\ &= \frac{6\times 5 \times 4 \times \cancel{3!}}{\cancel{3!}} \\ &=120 \end{aligned}
> $$
> Jadi, terdapat **120 susunan jabatan** berbeda yang dapat dilakukan.

---

## Konsep Terkait

- [[Kaidah Pencacahan/03 - Faktorial]]
- [[Kaidah Pencacahan/05 - Permutasi|05 - Permutasi]]