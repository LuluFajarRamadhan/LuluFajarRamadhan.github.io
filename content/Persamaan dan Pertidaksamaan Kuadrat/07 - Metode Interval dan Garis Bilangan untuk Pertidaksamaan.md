
# Metode Interval dan Garis Bilangan untuk Pertidaksamaan

Untuk menyelesaikan pertidaksamaan kuadrat secara akurat, kita tidak bisa menebak batas angka secara acak. Kita memerlukan instrumen analitis berupa ==**Garis Bilangan (Metode Interval)**== untuk memetakan perubahan tanda positif ($+$) dan negatif ($-$) dari ekspresi kuadratik tersebut.

## Prosedur Sistematis Penyelesaian
Berikut adalah urutan langkah matematis universal untuk menentukan himpunan penyelesaian pertidaksamaan kuadrat:

1. **Ubah ke Bentuk Umum:** Pastikan salah satu ruas sudah bernilai nol ($0$).
2. **Cari Titik Pembuat Nol (Titik Kritis):** Ubah tanda pertidaksamaan menjadi tanda sama dengan ($=$) untuk sementara waktu. Selesaikan persamaan kuadrat yang terbentuk (lewat faktorisasi atau rumus ABC) untuk mendapatkan akar $x_1$ dan $x_2$.
3. **Plot Titik Kritis pada Garis Bilangan:** Letakkan nilai $x_1$ dan $x_2$ pada garis bilangan secara berurutan. 
   * Gunakan **Bulatan Kosong ($\circ$)** jika tanda soal berupa $>$ atau $<$.
   * Gunakan **Bulatan Penuh ($\bullet$)** jika tanda soal berupa $\ge$ atau $\le$.
4. **Lakukan Uji Titik Koordinat:** Ambil satu angka sembarang di luar titik kritis (angka $0$ adalah pilihan termudah) dan substitusikan ke ekspresi kuadratik untuk melihat apakah wilayah tersebut menghasilkan nilai positif ($+$) atau negatif ($-$).
5. **Arsir Daerah Solusi:** * Jika tanda soal berupa $>$ atau $\ge$, arsir daerah yang bertanda ==**Positif**==($+$).
   * Jika tanda soal berupa $<$ atau $\le$, arsir daerah yang bertanda ==**Negatif**== ($-$).



---
## Contoh Soal

1. Tentukan himpunan penyelesaian dari pertidaksamaan kuadrat $x^2 - 3x - 10 > 0$!

> [!success]- Klik untuk Lihat Jawaban 1
> Mari selesaikan menggunakan prosedur garis bilangan:
> * **Langkah 1:** Bentuk sudah baku ($x^2 - 3x - 10 > 0$).
> * **Langkah 2:** Cari pembuat nol dengan faktorisasi:
> $$
> \begin{aligned}
> x^2 - 3x - 10 &= 0 \\
> (x - 5)(x + 2) &= 0 \\
> x_1 = 5 \quad &\text{atau} \quad x_2 = -2
> \end{aligned}
> $$
> * **Langkah 3 & 4:** Plot $-2$ dan $5$ pada garis bilangan (bulatan kosong). Lakukan uji titik $x = 0$ (berada di antara $-2$ dan $5$):
> $$
> (0)^2 - 3(0) - 10 = -10 \quad \text{(Negatif)}
> $$
> Maka daerah tengah bernilai ($-$), sementara daerah luar kanan-kiri bernilai ($+$).
> * **Langkah 5:** Karena tanda soal adalah $> 0$, ambil wilayah positif.
> Jadi, Himpunan Penyelesaiannya adalah $HP = \{x \mid x < -2 \text{ atau } x > 5, x \in \mathbb{R}\}$.

2. Carilah nilai $x$ yang memenuhi pertidaksamaan kuadrat $x^2 - 6x + 8 \le 0$!

> [!success]- Klik untuk Lihat Jawaban 2
> Lakukan pengerjaan secara taktis:
> * **Pembuat nol fungsi:**
> $$
> \begin{aligned}
> x^2 - 6x + 8 &= 0 \\
> (x - 2)(x - 4) &= 0 \\
> x_1 = 2 \quad &\text{atau} \quad x_2 = 4
> \end{aligned}
> $$
> * **Garis bilangan:** Plot angka $2$ dan $4$ dengan bulatan penuh (karena tanda $\le$). 
> * **Uji titik:** Misalkan ambil $x = 0$ (di sebelah kiri angka 2): $0^2 - 6(0) + 8 = +8$ (Positif). Maka area kiri ($+$), area tengah ($-$), area kanan ($+$).
> * **Arsir daerah:** Karena tanda soal adalah $\le 0$, maka ambil wilayah negatif yang berada di bagian dalam tengah.
> Jadi, interval nilai $x$ yang memenuhi adalah $2 \le x \le 4$.

---

## Konsep Terkait

- [[Persamaan dan Pertidaksamaan Kuadrat/06 - Definisi dan Bentuk Umum Pertidaksamaan Kuadrat]]
- [[Persamaan dan Pertidaksamaan Kuadrat/08 - Menyelesaikan Pertidaksamaan Kuadrat Bentuk Khusus]]