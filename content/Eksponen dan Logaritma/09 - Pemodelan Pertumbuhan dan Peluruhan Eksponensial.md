---
title:
---
# Pemodelan Pertumbuhan dan Peluruhan Eksponensial

Fungsi eksponen sangat efektif digunakan untuk memodelkan fenomena alam atau sosial yang laju perubahannya ==**sebanding dengan jumlah atau ukuran awal objek tersebut.**== Secara umum, pemodelan ini dibagi menjadi dua jenis:

1. **Pertumbuhan Eksponensial (Nilai Bertambah):**
   Digunakan pada fenomena seperti pertumbuhan bakteri, pembelahan sel, atau pertumbuhan penduduk. Rumus umumnya:
   $$
   N(t) = N_0 \times (1 + r)^t
   $$
2. **Peluruhan Eksponensial (Nilai Menyusut):**
   Digunakan pada fenomena seperti peluruhan zat radioaktif (waktu paruh) atau penurunan dosis obat dalam tubuh. Rumus umumnya:
   $$
   N(t) = N_0 \times (1 - r)^t
   $$

*Keterangan: $N(t)$ = jumlah akhir setelah waktu $t$, $N_0$ = jumlah awal, $r$ = persentase laju pertumbuhan/peluruhan, dan $t$ = jangka waktu.*

---
## Contoh Soal
Sebuah laboratorium mengamati bahwa kultur bakteri tertentu membelah menjadi dua kali lipat setiap 1 jam. Jika pada awal pengamatan terdapat 100 bakteri, tentukan total banyaknya bakteri setelah 5 jam!

> [!success]- Klik untuk Lihat Jawaban
> Karena bakteri membelah menjadi dua kali lipat secara konstan, kita menggunakan konsep pertumbuhan eksponensial dengan basis (faktor pertumbuhan) bernilai 2:
> * $N_0 = 100$
> * Faktor pertumbuhan = 2
> * $t = 5$ jam
> 
> Maka pemodelan fungsinya adalah:
> $$
> \begin{aligned} N(5) &= N_0 \times 2^t \\ &= 100 \times 2^5 \\ &= 100 \times 32 \\ &= 3.200 \end{aligned}
> $$
> Jadi, banyaknya bakteri setelah dilakukan pengamatan selama 5 jam adalah 3.200 bakteri.

---

## Konsep Terkait

- [[Eksponen dan Logaritma/02 - Grafik Fungsi Eksponen]]
- [[Eksponen dan Logaritma/10 - Aplikasi Skala Logaritma pada Richter, Desibel, dan pH]]