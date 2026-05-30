
Teorema Pythagoras merupakan salah satu konsep dasar yang sangat penting dalam matematika, khususnya pada bidang geometri. Teorema ini menjelaskan hubungan antara panjang sisi-sisi pada segitiga siku-siku, yaitu segitiga yang memiliki satu sudut sebesar $90 \degree$. Melalui teorema ini, kita dapat menentukan panjang suatu sisi jika dua sisi lainnya diketahui, sehingga sangat berguna dalam berbagai perhitungan, mulai dari pengukuran jarak hingga penerapan dalam bidang teknik, arsitektur, dan sains. 

---

## 1. Bunyi Teorema Pythagoras

Pada setiap segitiga siku-siku, kuadrat panjang sisi miring (*hipotenusa*) sama dengan jumlah kuadrat panjang sisi-sisi siku-sikunya.

Jika sebuah segitiga siku-siku memiliki sisi tegak $a$, sisi mendatar $b$, dan sisi miring $c$, maka berlaku hubungan:
$$a^2 + b^2 = c^2$$

Dari rumus dasar ini, kita dapat menurunkan pencarian panjang sisi lainnya:
- $c = \sqrt{a^2 + b^2}$
- $a = \sqrt{c^2 - b^2}$
- $b = \sqrt{c^2 - a^2}$

---

## 2. Mengapa Pythagoras Menjadi Fundamental bagi [[Trigonometri/00 - Peta Konsep Trigonometri|Trigonometri]]?


Trigonometri pada dasarnya adalah ilmu yang mempelajari **hubungan antara sudut dan jarak (panjang sisi)**. Teorema Pythagoras menjadi sangat vital dalam trigonometri karena alasan-alasan berikut:

1. **Penentu Sisi Ketiga**: Perbandingan trigonometri ($\sin, \cos, \tan$) membutuhkan informasi panjang sisi segitiga. Jika sebuah persoalan hanya menyediakan dua panjang sisi, Teorema Pythagoras adalah satu-satunya alat untuk menemukan panjang sisi ketiga sebelum kita bisa menentukan nilai trigonometrinya.
2. **Melahirkan Identitas Trigonometri Dasar**: Salah satu rumus paling sakral dalam trigonometri, yaitu Identitas Pythagoras:
   $$\sin^2 \theta + \cos^2 \theta = 1$$
   Rumus ini diturunkan secara langsung dari $a^2 + b^2 = c^2$ dengan membagi kedua ruas dengan $c^2$.
3. **Konsep Jarak pada Koordinat Kartesius**: Saat trigonometri diperluas ke berbagai kuadran (menggunakan lingkaran satuan), jari-jari lingkaran ($r$) dan titik koordinat $(x, y)$ selalu dihubungkan melalui rumus Pythagoras: $x^2 + y^2 = r^2$.

---

## 3. Bukti Perbandingan Sisi: Mengapa Sudut yang Sama Menghasilkan Rasio yang Sama?

Pertanyaan mendasar dalam trigonometri: *Mengapa nilai $\sin 30^{\circ}$ pada segitiga kecil berukuran saku sama persis dengan $\sin 30^{\circ}$ pada segitiga raksasa seukuran lapangan bola?*

Mari kita buktikan secara geometris bahwa **selama sudutnya sama, ukuran segitiga tidak akan mengubah nilai perbandingan sisinya**.



### Ilustrasi Pembuktian
Misalkan kita memiliki dua buah segitiga siku-siku dengan ukuran berbeda, yaitu **Segitiga $ABC$ (Kecil)** dan **Segitiga $A'B'C'$ (Besar)**, di mana:
- $\angle B = \angle B' = 90^{\circ}$ (Sama-sama siku-siku)
- $\angle A = \angle A' = \theta$ (Memiliki sudut lancip yang sama besar)

Berdasarkan prinsip geometri, jika dua buah segitiga memiliki dua sudut yang sama besar, maka sudut ketiganya pasti sama besar ($\angle C = \angle C'$), karena jumlah sudut segitiga selalu $180^{\circ}$. Kondisi ini membuat Segitiga $ABC$ dan Segitiga $A'B'C'$ dinyatakan **Sebangun (AA Criteria)**.

Karena kedua segitiga tersebut sebangun, maka **panjang sisi-sisi yang bersesuaian memiliki perbandingan (rasio) yang senilai**:
$$\frac{AB}{A'B'} = \frac{BC}{B'C'} = \frac{AC}{A'C'}$$

Melalui manipulasi aljabar, kita dapat menukar posisi penyebut pada persamaan di atas:

1. **Untuk perbandingan Sisi Depan/Miring ($\sin$):**
   $$\frac{BC}{B'C'} = \frac{AC}{A'C'} \,\,\Longrightarrow \,\,\frac{BC}{AC} = \frac{B'C'}{A'C'}$$
   *(Rasio sisi depan dibanding sisi miring pada segitiga kecil sama dengan segitiga besar).*

2. **Untuk perbandingan Sisi Samping/Miring ($\cos$):**
   $$\frac{AB}{A'B'} = \frac{AC}{A'C'} \,\,\Longrightarrow \,\,\frac{AB}{AC} = \frac{A'B'}{A'C'}$$
   *(Rasio sisi samping dibanding sisi miring pada segitiga kecil sama dengan segitiga besar).*

**Kesimpulan Bukti:**
Ukuran fisik (panjang-pendeknya) sisi segitiga tidak memengaruhi nilai perbandingannya. Nilai perbandingan tersebut **hanya dikontrol oleh besar sudutnya ($\theta$)**. Inilah alasan mengapa fungsi trigonometri dianggap valid dan konsisten di seluruh alam semesta.

---

## Konsep Terkait
* [[Kesebangunan]]
* [[Kongruensi]]
* [[Trigonometri/02 - Perbandingan Trigonometri Segitiga Siku-Siku |Perbandingan Trigonometri Segitiga Siku-Siku]]