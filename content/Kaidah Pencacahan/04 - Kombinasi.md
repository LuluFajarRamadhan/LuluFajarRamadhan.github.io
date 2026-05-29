---
title:
---
# Kombinasi

Operasi kombinasi adalah operasi pada kombinatorika dimana pemilihan objek dilakukan dengan ==**tanpa memperhatikan urutan kejadiannya.**== Jika urutan objek berubah, hasil pemilihan tetap dianggap sebagai kejadian yang sama.
Banyaknya cara memilih $r$ objek dari total sampel $n$ dinyatakan dengan: 
$$
C(n,r) = \frac{n!}{r! \times (n-r)!}
$$
---
## Contoh Soal
Dari 6 kandidat siswa akan dipilih 2 orang sebagai perwakilan kelas untuk pertandingan badminton. Tentukan banyaknya cara menentukan perwakilan tersebut!

> [!success]- Klik untuk Lihat Jawaban
> Karena hanya memilih perwakilan dengan tanpa memperhatikan jabatan dan aturan lainnya, maka urutan terpilihnya perwakilan menjadi tidak penting. artinya terpilih siswa $A$ baru kemudian siswa $B$ adalah perwakilan yang sama jika terpilih dulu $B$ baru kemudian $A$. Maka penyelesaiannya adalah:
> $$
> \begin{aligned} C(6,2) &= \frac{6!}{2! \times (6-2)!} \\ &= \frac{6 \times 5 \times \cancel{4!}}{2 \times 1 \times \cancel{4!}} \\ &= 15\end{aligned}
> $$
> Jadi, banyaknya cara untuk penentuan perwakilan 2 orang dari 6 orang kandidat adalah 15 cara.

---

## Konsep Terkait

- [[Kaidah Pencacahan/03 - Faktorial]]
- [[Kaidah Pencacahan/05 - Permutasi]]