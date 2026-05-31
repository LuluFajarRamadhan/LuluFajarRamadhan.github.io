---
title: Ringkasan Limit Fungsi
---
# Ringkasan Limit Fungsi

Bab limit fungsi mengajarkan kita cara menganalisis nilai kecenderungan suatu fungsi saat mendekati titik tertentu dari arah kiri maupun kanan. Berikut rangkuman poin-poin terpenting yang wajib dipahami:

### 1. Eksistensi dan Nilai Batas
* Limit sebuah fungsi dinyatakan ada (eksis) jika dan hanya jika ==**nilai pendekatan dari arah kiri sama dengan nilai pendekatan dari arah kanan**== ($\lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x)$).
* Kontinuitas fungsi di titik $c$ menuntut kesamaan mutlak antara nilai limit fungsi dengan nilai fungsi realnya ($\lim_{x \to c} f(x) = f(c)$).

### 2. Strategi Penyelesaian Berdasarkan Bentuk Hasil
| Jenis Bentuk | Kondisi Hasil | Solusi Teknik |
| :--- | :--- | :--- |
| **Bentuk Tertentu** | Berupa Angka Real ($k, 0$) | Langsung menjadi nilai akhir limit. |
| **Bentuk Tak Tentu Aljabar** | Menghasilkan $\frac{0}{0}$ | Gunakan Pemfaktoran, Perkalian Sekawan, atau Aturan L'Hopital. |
| **Bentuk Tak Tentu Trigonometri** | Menghasilkan $\frac{0}{0}$ | Gunakan Sifat Dasar $\frac{\sin ax}{bx} = \frac{a}{b}$ atau Identitas Sudut Rangkap Cosinus. |
| **Limit di Tak Hingga** | Menghasilkan $\frac{\infty}{\infty}$ | Bandingkan derajat pangkat tertinggi, atau gunakan permisalan $y = \frac{1}{x}$ untuk fungsi trigonometri tak hingga. |

---
## Contoh Soal Campuran
Tentukan nilai akhir dari operasi limit fungsi trigonometri berikut ini:
$$
\lim_{x \to 0} \frac{x \sin 2x}{\tan^2 3x}
$$

> [!success]- Klik untuk Lihat Jawaban
> Substitusi langsung memicu bentuk tak tentu $\frac{0}{0}$. Kita selesaikan menggunakan sifat perbandingan koefisien limit trigonometri dengan menjabarkan pangkat kuadratnya:
> $$
> \begin{aligned} \lim_{x \to 0} \frac{x \sin 2x}{\tan^2 3x} &= \lim_{x \to 0} \frac{x \times \sin 2x}{\tan 3x \times \tan 3x} \end{aligned}
> $$
> Pecah menjadi perkalian pasangan limit standar:
> $$
> \begin{aligned} &= \left( \lim_{x \to 0} \frac{x}{\tan 3x} \right) \times \left( \lim_{x \to 0} \frac{\sin 2x}{\tan 3x} \right) \\ &= \left(\frac{1}{3}\right) \times \left(\frac{2}{3}\right) \\ &= \frac{2}{9} \end{aligned}
> $$
> Jadi, nilai akhir dari limit campuran tersebut adalah $\frac{2}{9}$.

---

## Konsep Terkait

- [[Limit/00 - Peta Konsep Limit]]
- [[Limit/03 - Menghitung Limit Fungsi Aljabar Bentuk Tertentu dan Tak Tentu]]
- [[Limit/06 - Menghitung Limit Fungsi Trigonometri]]