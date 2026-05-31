---
title:
---
# Definisi Intuitif dan Eksistensi Limit

Secara intuitif, limit fungsi menyatakan bahwa nilai $f(x)$ akan mendekati suatu nilai real $L$ ketika variabel $x$ bergerak mendekati suatu titik $c$ dari kedua sisi (kiri dan kanan), tetapi ==**$x$ tidak pernah sama dengan $c$.**== Notasi matematisnya ditulis sebagai:
$$
\lim_{x \to c} f(x) = L
$$

Sebuah fungsi dikatakan memiliki nilai limit di titik $c$ (limitnya eksis) jika dan hanya jika ==**nilai pendekatan dari kiri sama dengan nilai pendekatan dari kanan.**== Ini disebut sebagai Teorema Eksistensi Limit:
$$
\lim_{x \to c} f(x) = L \iff \lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x) = L
$$
Jika limit kiri tidak sama dengan limit kanan ($\lim_{x \to c^-} f(x) \neq \lim_{x \to c^+} f(x)$), maka fungsi tersebut dikatakan tidak memiliki nilai limit di titik $c$.

---
## Contoh Soal
Diketahui sebuah fungsi sepotong-sepotong (*piecewise function*) sebagai berikut:
$$
f(x) = \begin{cases} 2x + 1, & \text{untuk } x < 2 \\ 3x - 1, & \text{untuk } x \ge 2 \end{cases}
$$
Selidiki apakah nilai $\lim_{x \to 2} f(x)$ itu ada!

> [!success]- Klik untuk Lihat Jawaban
> Untuk menentukan eksistensi limit di $x = 2$, kita harus menguji nilai limit kiri dan limit kanan fungsi tersebut:
> * **Limit Kiri ($\lim_{x \to 2^-}$):** Menggunakan fungsi untuk daerah $x < 2$
>     $$\lim_{x \to 2^-} (2x + 1) = 2(2) + 1 = 5$$
> * **Limit Kanan ($\lim_{x \to 2^+}$):** Menggunakan fungsi untuk daerah $x \ge 2$
>     $$\lim_{x \to 2^+} (3x - 1) = 3(2) - 1 = 5$$
> 
> Karena nilai limit kiri sama dengan nilai limit kanan ($\lim_{x \to 2^-} f(x) = \lim_{x \to 2^+} f(x) = 5$), maka nilai $\lim_{x \to 2} f(x)$ **ada** dengan nilai limit sama dengan 5.

---

## Konsep Terkait

- [[Limit/00 - Peta Konsep Limit]]
- [[Limit/02 - Sifat-Sifat Teorema Limit]]