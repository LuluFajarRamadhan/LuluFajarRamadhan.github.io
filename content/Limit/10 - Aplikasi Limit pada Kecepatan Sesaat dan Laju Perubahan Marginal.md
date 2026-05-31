---
title:
---
# Aplikasi Limit pada Kecepatan Sesaat dan Laju Perubahan Marginal

Konsep limit merupakan dasar utama untuk menghitung laju perubahan sesuatu pada ==**satu saat yang sangat spesifik (seketika).**== Dua penerapan paling populer konsep ini di dunia nyata adalah:

1. **Kecepatan Sesaat (Fisika):**
   Jika $s(t)$ adalah fungsi posisi sebuah benda terhadap waktu $t$, maka kecepatan rata-rata pada selang waktu $\Delta t$ adalah $\frac{\Delta s}{\Delta t}$. Untuk mencari kecepatan tepat pada detik ke-$t$ (sesaat), kita memperkecil selang waktu hingga mendekati nol menggunakan limit:
   $$
   v(t) = \lim_{\Delta t \to 0} \frac{s(t + \Delta t) - s(t)}{\Delta t}
   $$
2. **Biaya Marginal / Pendapatan Marginal (Ekonomi):**
   Mengukur laju perubahan pengeluaran atau pemasukan sesaat ketika jumlah produksi ($x$) bertambah mendekati satu unit tertentu.

---
## Contoh Soal
Sebuah benda bergerak mengikuti fungsi jarak $s(t) = t^2 + 2t$ (dalam meter). Tentukan kecepatan sesaat benda tersebut tepat pada detik ke-3 ($t = 3$)!

> [!success]- Klik untuk Lihat Jawaban
> Kita gunakan rumus limit laju perubahan sesaat untuk fungsi $s(t) = t^2 + 2t$:
> $$
> \begin{aligned} v(t) &= \lim_{\Delta t \to 0} \frac{s(t + \Delta t) - s(t)}{\Delta t} \\ &= \lim_{\Delta t \to 0} \frac{[(t+\Delta t)^2 + 2(t+\Delta t)] - [t^2 + 2t]}{\Delta t} \\ &= \lim_{\Delta t \to 0} \frac{\cancel{t^2} + 2t\Delta t + (\Delta t)^2 + \cancel{2t} + 2\Delta t - \cancel{t^2} - \cancel{2t}}{\Delta t} \\ &= \lim_{\Delta t \to 0} \frac{2t\Delta t + (\Delta t)^2 + 2\Delta t}{\Delta t} \end{aligned}
> $$
> Faktorkan dan eliminasi variabel $\Delta t$ pada pembilang dan penyebut:
> $$
> \begin{aligned} v(t) &= \lim_{\Delta t \to 0} \frac{\cancel{\Delta t}(2t + \Delta t + 2)}{\cancel{\Delta t}} \\ &= \lim_{\Delta t \to 0} (2t + \Delta t + 2) \end{aligned}
> $$
> Substitusikan nilai $\Delta t = 0$, sehingga didapat rumus kecepatan sesaat: $v(t) = 2t + 2$.
> 
> Untuk mencari kecepatan sesaat tepat pada detik ke-3 ($t = 3$):
> $$v(3) = 2(3) + 2 = 8$$
> Jadi, kecepatan sesaat benda tersebut pada detik ke-3 adalah $8 \text{ m/s}$.

---

## Konsep Terkait

- [[Limit/03 - Menghitung Limit Fungsi Aljabar Bentuk Tertentu dan Tak Tentu]]
- [[Limit/11 - Pengenalan Aturan L'Hopital menggunakan Turunan Dasar]]