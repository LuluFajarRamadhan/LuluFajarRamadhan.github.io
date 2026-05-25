### 1. Pengertian Limit Fungsi
Limit fungsi adalah nilai yang didekati oleh suatu fungsi ketika variabelnya mendekati nilai tertentu. jika sebuah fungsi mempunyai nilai limit kiri dan nilai limit kanan yang sama, maka disebutkan bahwa nilai limit fungsi tersebut adalah ada. 

Ditulis sebagai:

$$
\lim_{x \to a} f(x) = L
$$

Artinya: nilai fungsi $f(x)$ saat $x$ mendekati $a$ adalah $L$.

Contoh:

$$
\lim_{x \to 2}(x+3)=5
$$

---

## 2. Sifat-Sifat Limit
Sifat-sifat limit adalah sekumpulan teorema yang digunakan untuk memudahkan penyelesaian perhitungan nilai limit dari suatu fungsi.
Jika fungsi $f(x)$ dan $g(x)$ memiliki nilai limit saat $x$ mendekati suatu konstanta $a$, dan $k$ adalah konstanta bilangan riil, maka berlaku sifat-sifat sebagai berikut:
1. **Limit Konstanta:** $\displaystyle \lim_{x \to a} k = k$
2. **Limit Identitas:** $\displaystyle \lim_{x \to a} = a$
3. **Perkalian Konstanta:** $\displaystyle \lim_{x \to a} [k \cdot f(x)] = k \cdot \lim_{x \to a} f(x)$
4. **Penjumlahan:** $\displaystyle \lim_{x \to a} [f(x) + g(x)] = \lim_{x \to a} f(x) + \lim_{x \to a} g(x)$
5. **Pengurangan:** $\displaystyle \lim_{x \to a} [f(x) - g(x)] = \lim_{x \to a} f(x) - \lim_{x \to a} g(x)$
6. **Perkalian:** $\displaystyle \lim_{x \to a} [f(x) \cdot g(x)] = \lim_{x \to a} f(x) \cdot \lim_{x \to a} g(x)$
7. Pemangkatan: $\displaystyle \lim_{x \to a}[f(x)]^n = \left(\lim_{x \to a} f(x) \right)^n$ 
8. **Penarikan Akar:** $\displaystyle \lim_{x \to a} \sqrt{f(x)} = \sqrt{\lim_{x \to a}f(x)}$

Sifat-sifat tersebut akan digunakan untuk membantu menyelesaikan soal-soal limit baik aljabar ataupun trigonometri

---
## 3. Metode Menyelesaikan Limit Fungsi Aljabar

### A. Limit untuk $x \to c$
Untuk mengerjakan soal limit selalu lakukan subsititusi nilai $x$ secara langsung dengan $c$ terlebih dahulu. Jika nilai $f(c)$ adalah sebuah bilangan riil, maka nilai yang dihasilkan adalah nilai limitnya.

Tapi jika menghasilkan bentuk tak tentu $\frac{0}{0}$, maka $f(x)$ diubah terlebih dahulu sehingga dapat menghasilkan nilai dalam bentuk tertentu dengan cara:
#### **Faktorisasi**
Cara faktorisasi digunakan saat pembilang dan penyebut mempunyai faktor pembuat nol yang sama dengan tujuan untuk 'menghilangkan' faktor pembuat nol-nya di pembilang dan penyebut, sehingga limit bisa menghasilkan nilai tertentu.
##### **Contoh Faktorisasi**
Nilai dari $\displaystyle \lim_{x \to 2} \left(\frac{x^2+x-6}{x-2} \right)$ adalah....
> [!success]- Klik untuk Lihat Jawaban
> Jika dilakukan substitusi $x=2$ secara langsung, maka akan menghasilkan $\frac{0}{0}$, maka perlu dilakukan faktorisasi untuk menghilangkan faktor pembuat nol
>
> $$
> \begin{aligned} \lim_{x \to 2} \left(\frac{x^2+x-6}{x-2} \right)  &= \lim_{x \to 2} \left( \frac{\cancel{(x-2)}(x+3)}{\cancel{(x-2)}} \right) \\ &= \lim_{x\to2} (x+3) \\&= (2+3) \\ &= 5\end{aligned}
> $$
> Maka $\displaystyle \lim_{x \to 2} \left(\frac{x^2+x-6}{x-2} \right) = 5$
 
#### **Perkalian Sekawan**
Cara perkalian sekawan digunakan saat terdapat bentuk akar di pembilang atau penyebut yang menyebabkan cara faktorisasi sulit untuk dilakukan secara langsung dalam 'menghilangkan' faktor pembuat nolnya dengan tujuan limit akan menghasilkan nilai tertentu.
##### Contoh Perkalian Sekawan
NIlai dari $\displaystyle \lim_{x \to 4} \left( \frac{x-4}{\sqrt{x}-2} \right)$ adlah....
> [!success]- Klik untuk Lihat Jawaban
> Jika dilakukan substitusi $x=4$ secara langsung, maka akan menghasilkan $\frac{0}{0}$, maka perlu dilakukan perkalian sekawan untuk menghilangkan bentuk akar yang berada di bagian penyebutnya. >
> $$
> \begin{aligned}
> \lim_{x \to 4} \left( \frac{x-4}{\sqrt{x}-2} \right) &= \lim_{x \to 4} \left( \frac{x-4}{\sqrt{x}-2} \right) \cdot \left( \frac{\sqrt{x}+2}{\sqrt{x}+2} \right) \\ 
> &= \lim_{x \to 4} \frac{\cancel{(x-4)}\cdot(\sqrt{x}+2)}{\cancel{(x-4)}} \\
> &= \lim_{x \to 4} \sqrt{x}+2 \\ 
> &= 4
> \end{aligned}
> $$
> Maka $\displaystyle \lim_{x \to 4} \left( \frac{x-4}{\sqrt{x}-2} \right) = 4$

#### ***L'Hopital***
Cara *L'Hopital* atau turunan digunakan sebagai cara pendek selain menggunakan faktorisasi. Hanya saja pada beberapa kesempatan, cara pendek ini tidak boleh digunakan secara langsung seperti saat berhadapan dengan Kalkulus di level kuliah.

##### Contoh  *L'Hopital*
Nilai dari $\displaystyle \lim_{x \to 2} \left(\frac{x^2+x-6}{x-2} \right)$ adalah....
> [!success]- Klik untuk Lihat Jawaban
> Jika dilakukan substitusi $x=2$ secara langsung, maka akan menghasilkan $\frac{0}{0}$, maka perlu dilakukan faktorisasi untuk menghilangkan faktor pembuat nol dengan melakukan operasi turunan untuk pembilang dan penyebutnya.
>
> $$
> \begin{aligned} \lim_{x \to 2} \left(\frac{x^2+x-6}{x-2} \right)  &= \lim_{x \to 2} \frac{2x+1}{1} \\ 
> &= 5
> \end{aligned}
> $$
> Maka $\displaystyle \lim_{x \to 2} \left(\frac{x^2+x-6}{x-2} \right) = 5$

### B. Limit untuk $x \to \infty$
Untuk mengerjakan limit dengan nilai $x$ menuju tak hingga, selalu perhatikan pangkat tertinggi dan gunakan pangkat tertingginya sebagai pembagi dari soal limit yang diberikan.
Secara umum, untuk limit $x \to \infty$ selalu memenuhi sifat berikut:
* $\displaystyle \lim_{x \to \infty} k \cdot x^n = \infty$
* $\displaystyle \lim_{x \to \infty} k\cdot\frac{1}{x} = 0$

#### Bentuk Tak Tentu $\frac{\infty}{\infty}$
Saat substitusi limit menghasilkan bentuk tak tentu $\frac{\infty}{\infty}$, maka selalu perhatikan pangkat tertingginya dan bagi baik pembilang dan penyebutnya dengan pangkat tertinggi tersebut, dimana:
$$
\lim_{x \to \infty} \frac{a_mx^m + a_{m-1}x^{m-1}+\cdots+a_0}{b_m x^n + b_{m-1}x^{m-1}+ \cdots +b_0} = 
\begin{cases} 
\frac{a_m}{b_m}, m=n \\
\pm \infty, m>n \\
0, m<n
\end{cases}
$$
##### Contoh Bentuk Tak Tentu $\frac{\infty}{\infty}$
NIlai dari $\displaystyle \lim_{x \to \infty} \left( \frac{2x^5-3x^3+2}{8x^5-2x+3}  \right)$ adalah...
> [!success]- Klik untuk Lihat Jawaban
> Jika dilakukan substitusi $x=\infty$ secara langsung, maka akan menghasilkan $\frac{\infty}{\infty}$, maka perhatikan pangkat tertingginya adalah $x^5$, sehingga
>
> $$
> \begin{aligned} 
> \lim_{x \to \infty} \left( \frac{2x^5-3x^3+2}{8x^5-2x+3}\right) \cdot \frac{\frac{1}{x^5}}{\frac{1}{x^5}} &= \lim_{x \to \infty} \frac{\frac{2x^5}{x^5}-\frac{3x^3}{x^5}+\frac{2}{x^5}}{\frac{8x^5}{x^5}-\frac{2x}{x^5}+\frac{3}{x^5}} \\ 
> &= \frac{2 \cdot 1 - 0 + 0}{8 \cdot 1 - 0 + 0} \\ 
> &= \frac{1}{4}
> \end{aligned}
> $$
> 
> Maka $\displaystyle \lim_{x \to \infty} \left( \frac{\boxed{2x^5}-3x^3+2}{\boxed{8x^5}-2x+3}  \right) = \frac{1}{4}$

#### Bentuk Tak Tentu $\infty - \infty$
Saat limit $\displaystyle \lim_{x \to \infty} \sqrt{ax^2 +bx +c} - \sqrt{px^2 + qx +r}$ menghasilkan bentuk tak tentu $\infty - \infty$, maka kita dapat menyelesaikan limit tersebut dengan menggunakan **perkalian sekawan** atau dengan menggunakan:
$$
\lim_{x \to \infty} \sqrt{ax^2 +bx +c} - \sqrt{px^2 + qx +r} = 
\begin{cases}
\infty, a>p \\
-\infty, a<p \\ 
\frac{b-q}{2\sqrt{a}}
\end{cases}
$$
NIlai dari $\displaystyle \lim_{x \to \infty} \left( \sqrt{x^2-2x+1} - \sqrt{x^2+3x-1} \right)$ adalah...
> [!success]- Klik untuk Lihat Jawaban
> Jika dilakukan substitusi $x=\infty$ secara langsung, maka akan menghasilkan $\infty - \infty$. Dan jika diperhatikan $a=p$, maka
>
> $$
> \begin{aligned} 
> \frac{b-q}{2\sqrt{a}} &= \frac{-2-3}{2\sqrt{1}} \\ 
> &= \frac{-5}{2}
> \end{aligned}
> $$
> 
> Maka $\displaystyle \lim_{x \to \infty} \left( \sqrt{x^2-2x+1} - \sqrt{x^2+3x-1} \right) = -\frac{5}{2}$

