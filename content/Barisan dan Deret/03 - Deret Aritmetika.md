
# Deret Aritmetika

Jika barisan aritmetika membicarakan urutan angka-angkanya, maka **Deret Aritmetika** membahas tentang **jumlah total** dari suku-suku pada barisan aritmetika tersebut. Deret aritmetika dinotasikan dengan $S_n$, yang berarti jumlah $n$ suku pertama.

Secara matematis, bentuk deret dituliskan sebagai:
$$S_n = U_1 + U_2 + U_3 + \dots + U_n$$

---

## 1. Formulasi Rumus Jumlah $n$ Suku Pertama ($S_n$)

Terdapat dua bentuk rumus yang dapat digunakan untuk menghitung deret aritmetika, bergantung pada komponen apa yang diketahui di dalam soal:

### Bentuk 1: Jika Suku Terakhir ($U_n$) Diketahui
$$
✮\boxed{{S_n = \frac{n}{2}(a + U_n)}}
$$


### Bentuk 2: Jika Suku Terakhir Tidak Diketahui (Hanya $a$ dan $b$)
Substitusikan $U_n = a + (n-1)b$ ke bentuk pertama, sehingga diperoleh:
$$
✮\boxed{{S_n = \frac{n}{2}\Big[2a + (n - 1)b\Big]}}
$$

**Keterangan:**
- $S_n$ = Jumlah $n$ suku pertama
- $a$ = Suku pertama
- $b$ = Beda
- $n$ = Banyaknya suku yang dijumlahkan
- $U_n$ = Suku ke-$n$ (suku terakhir)

---

## 2. Hubungan Penting Antara $U_n$ dan $S_n$
Ada kalanya sebuah soal memberikan rumus $S_n$ dan meminta kita mencari nilai suku tertentu ($U_n$). Kita dapat memanfaatkan hubungan logis berikut:
$$U_n = S_n - S_{n-1}$$
*Artinya: Suku ke-$n$ adalah hasil pengurangan antara jumlah $n$ suku pertama dengan jumlah $(n-1)$ suku pertama.*

---

## Contoh Soal

Seorang buruh pabrik konveksi mendapat upah harian yang bertambah secara tetap setiap bulannya karena prestasi kerja. Pada bulan pertama ia menerima total akumulasi upah sebesar Rp1.200.000. Jika setiap bulan upah totalnya naik sebesar Rp50.000 secara konstan, berapakah total seluruh uang (tabungan upah) yang ia kumpulkan selama 1 tahun pertama bekerja?

>[!Success]- Klik untuk Lihat Jawaban
> **Penyelesaian:**
> 
> Komponen ekonomi dari soal dapat dimodelkan ke dalam deret aritmetika:
> - Suku pertama ($a$) = $1.200.000$
> - Beda kenaikan ($b$) = $50.000$
> - Periode waktu dalam bulan ($n$) = $1 \text{ tahun} = 12 \text{ bulan}$
> 
> Ditanyakan: Total seluruh uang selama 12 bulan pertama ($S_{12}$).
> 
> Gunakan rumus deret aritmetika bentuk kedua:
> $$
> \begin{aligned}
> S_n &= \frac{n}{2}\Big[2a + (n - 1)b\Big] \\
> S_{12} &= \frac{12}{2}\Big[2(1.200.000) + (12 - 1)50.000\Big] \\
> S_{12} &= 6 \Big[2.400.000 + (11 \times 50.000)\Big] \\
> S_{12} &= 6 \Big[2.400.000 + 550.000\Big] \\
> S_{12} &= 6 \Big[2.950.000\Big] = 17.700.000
> \end{aligned}
> $$
> Jadi, total seluruh upah yang dikumpulkan buruh tersebut selama 1 tahun pertama adalah **Rp17.700.000**.

---

## Konsep Terkait
* [[Barisan dan Deret/02 - Barisan Aritmetika|02 - Barisan Aritmetika]]
* [[Barisan dan Deret/04 - Sisipan dan Suku Tengah Aritmetika]]