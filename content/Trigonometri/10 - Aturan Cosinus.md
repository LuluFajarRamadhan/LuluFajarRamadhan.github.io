---
title:
---

# Aturan Cosinus

Jika Aturan Sinus memerlukan pasangan sisi-sudut yang saling berhadapan secara lengkap, maka **Aturan Cosinus** digunakan ketika komponen yang diketahui justru saling "mengapit". Aturan Cosinus sebenarnya merupakan perluasan langsung dari Teorema Pythagoras yang berlaku untuk segala jenis segitiga, baik siku-siku maupun sembarang.

---

## 1. Formulasi Aturan Cosinus

Pada segitiga sembarang $ABC$ dengan panjang sisi $a, b,$ dan $c$, hukum kuadrat Aturan Cosinus dirumuskan sebagai berikut:

$$a^2 = b^2 + c^2 - 2bc \cdot \cos A$$
$$b^2 = a^2 + c^2 - 2ac \cdot \cos B$$
$$c^2 = a^2 + b^2 - 2ab \cdot \cos C$$

Jika Anda ingin mencari besar sudut dari tiga sisi yang sudah diketahui nilainya, rumus di atas dapat dibalik secara aljabar menjadi:
$$\cos A = \frac{b^2 + c^2 - a^2}{2bc} \quad \Big| \quad \cos B = \frac{a^2 + c^2 - b^2}{2ac} \quad \Big| \quad \cos C = \frac{a^2 + b^2 - c^2}{2ab}$$

> [!TIP] Jembatan Keledai
> *Kuadrat sebuah sisi sama dengan jumlah kuadrat sisi pengapit dikurangi dua kali perkalian sisi pengapit dikali cosinus sudut yang diapit.*

---

## 2. Kapan Harus Menggunakan Aturan Cosinus?

Aturan Cosinus mutlak digunakan jika komponen segitiga yang diketahui berupa:
1. **Sisi-Sudut-Sisi (Ss-Sd-Ss):** Diketahui dua sisi beserta satu sudut yang diapit oleh kedua sisi tersebut.
2. **Sisi-Sisi-Sisi (Ss-Ss-Ss):** Ketiga panjang sisi segitiga diketahui seluruhnya, dan Anda diminta mencari nilai sudutnya.

---

## Contoh Soal

Dua kapal motor meninggalkan pelabuhan yang sama pada waktu yang bersamaan. Kapal A berlayar dengan kecepatan $12\text{ knot}$ ke arah utara, sementara Kapal B berlayar dengan kecepatan $10\text{ knot}$ dengan arah sudut $60^{\circ}$ dihitung dari jalur Kapal A. Hitunglah jarak antara kedua kapal tersebut setelah berlayar selama 2 jam!

>[!Success]- Klik untuk Lihat Jawaban
> **Penyelesaian:**
> Misalkan Pelabuhan adalah titik $C$, Kapal A di titik $A$, dan Kapal B di titik $B$.
> 1. Hitung jarak masing-masing kapal setelah 2 jam:
>    - Jarak Kapal A (sisi $b$) = $12\text{ knot} \times 2\text{ jam} = 24\text{ mil laut}$.
>    - Jarak Kapal B (sisi $a$) = $10\text{ knot} \times 2\text{ jam} = 20\text{ mil laut}$.
> 2. Sudut diapit oleh kedua jalur pelayaran tersebut adalah $\angle C = 60^{\circ}$.
> 3. Gunakan Aturan Cosinus untuk mencari jarak kedua kapal (sisi $c$):
>    $$c^2 = a^2 + b^2 - 2ab \cdot \cos C$$
>    $$c^2 = 20^2 + 24^2 - 2(20)(24) \cdot \cos 60^{\circ}$$
>    $$c^2 = 400 + 576 - 960 \cdot \left(\frac{1}{2}\right)$$
>    $$c^2 = 976 - 480$$
>    $$c^2 = 496 \implies c = \sqrt{496} = \sqrt{16 \times 31} = 4\sqrt{31}\text{ mil laut}$$
> 
> Jadi, jarak antara kedua kapal tersebut setelah 2 jam adalah $4\sqrt{31}$ mil laut ($\approx 22,27$ mil laut).

---

## Konsep Terkait
* [[Teorema Pythagoras dan Fondasi Perbandingan Segitiga]]
* [[Trigonometri/09 - Aturan Sinus|09 - Aturan Sinus]]