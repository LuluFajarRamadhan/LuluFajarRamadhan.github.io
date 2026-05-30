

# Notasi Sigma dan Induksi Matematika Sederhana

Untuk menuliskan bentuk penjumlahan deret panjang secara ringkas dan efisien, matematikawan menggunakan lambang khusus yang disebut **Notasi Sigma**. Setelah deret tersebut berhasil diringkas atau diprediksi rumusnya, kita memerlukan alat validasi formal untuk membuktikan kebenaran rumus tersebut, yaitu melalui **Induksi Matematika**.

---

## 1. Notasi Sigma ($\sum$)

Notasi Sigma menggunakan huruf kapital Yunani $\Sigma$ (Sigma) untuk melambangkan jumlahan beruntun dari suatu fungsi matematika dengan batas indeks tertentu.

$$
\sum_{k=1}^{n} U_k = U_1 + U_2 + U_3 + \dots + U_n
$$

- $k$ disebut sebagai **indeks penjumlahan** (variabel berjalan).
- $1$ disebut sebagai **batas bawah** (titik awal substitusi).
- $n$ disebut sebagai **batas atas** (titik akhir substitusi).

### Sifat-Sifat Penting Notasi Sigma:
1. $\sum_{k=1}^{n} c = n \cdot c$ *(di mana $c$ adalah konstanta)*
2. $\sum_{k=1}^{n} c \cdot U_k = c \cdot \sum_{k=1}^{n} U_k$
3. $\sum_{k=1}^{n} (U_k \pm V_k) = \sum_{k=1}^{n} U_k \pm \sum_{k=1}^{n} V_k$

---

## 2. Pengantar Induksi Matematika

Induksi matematika adalah metode pembuktian deduktif yang sah untuk memastikan bahwa suatu rumus deret atau pernyataan matematika berlaku untuk **semua bilangan asli ($n \in \mathbb{N}$)**.

Pembuktian menggunakan induksi matematika wajib melewati **dua langkah sakral**:
1. **Langkah Basis (*Base Step*):** Buktikan bahwa pernyataan benar untuk nilai awal $n = 1$.
2. **Langkah Induksi (*Inductive Step*):** 
    - Asumsikan (andaikan) bahwa pernyataan bernilai **benar** untuk $n = k$.
    - Berdasarkan asumsi tersebut, buktikan secara aljabar bahwa pernyataan tersebut **juga terbukti benar** untuk suku berikutnya, yaitu $n = k + 1$.

Jika kedua langkah di atas terpenuhi, maka rumus deret tersebut dinyatakan valid secara universal.

---

## Contoh Soal

Buktikan menggunakan induksi matematika bahwa jumlah $n$ suku pertama bilangan ganjil memenuhi rumus berikut:
$$1 + 3 + 5 + \dots + (2n - 1) = n^2$$

>[!Success]- Klik untuk Lihat Jawaban
> **Penyelesaian:**
> Kita akan menguji rumus $P(n): 1 + 3 + 5 + \dots + (2n - 1) = n^2$
> 
> **Langkah 1: Langkah Basis ($n = 1$)**
> Ambil suku pertama di ruas kiri dan substitusikan $n=1$ di ruas kanan:
> Ruas Kiri: $1$
> Ruas Kanan: $(1)^2 = 1$
> *Karena Ruas Kiri = Ruas Kanan, maka Langkah Basis **Benar**.*
> 
> **Langkah 2: Langkah Induksi**
> - **Asumsikan benar** untuk $n = k$:
>   $$1 + 3 + 5 + \dots + (2k - 1) = k^2$$
> - **Buktikan benar** untuk $n = k + 1$. Kita perlu menunjukkan bahwa:
>   $$1 + 3 + 5 + \dots + (2k - 1) + [2(k+1) - 1] = (k+1)^2$$
> 
> Mari kita utak-atik ruas kiri persamaan:
> $$
> \underbrace{1 + 3 + 5 + \dots + (2k - 1)}_{\text{Ganti dengan } k^2 \text{ (dari asumsi)}} + (2k + 2 - 1)= k^2 + (2k + 1)= k^2 + 2k + 1
> $$
> 
> Melalui faktorisasi bentuk kuadrat sempurna aljabar, kita tahu bahwa $k^2 + 2k + 1 = (k + 1)^2$.
> Bentuk ini persis sama dengan ruas kanan yang ingin kita tuju.
> 
> *Karena Langkah Basis dan Langkah Induksi terpenuhi, rumus tersebut **Terbukti Benar** untuk seluruh bilangan asli $n$.*

---

## Konsep Terkait
* [[Barisan dan Deret/03 - Deret Aritmetika|03 - Deret Aritmetika]]
* [[Barisan dan Deret/06 - Deret Geometri|06 - Deret Geometri]]