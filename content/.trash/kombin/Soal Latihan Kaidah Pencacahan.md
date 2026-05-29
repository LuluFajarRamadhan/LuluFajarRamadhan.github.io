1. Dari angka-angka 1, 2, 3, dan 5 akan disusun bilangan yang terdiri atas 6 angka dengan syarat angka 3 dan 2 boleh muncul dua kali. Banyak bilangan yang dapat terbentuk adalah...
   (UTBK 2022) #permutasi 
- **A.** 720
- **B.** 360
- **C.** 180
- **D.** 120
- **E.** 60

> [!success]- Klik untuk Lihat Jawaban
> Suatu bilangan 6 angka disusun dari angka-angka 1, 2, 2, 3, 3, 5. Banyak bilangan yang dapat terbentuk adalah:
>  $$
>  \frac{6!}{2! \cdot 2!} = 180
>  $$
> **Jawaban: C**

2. Adi, Budi, dan tiga temannya akan duduk di 5 kursi berjajar. Jika Adi dan Budi tidak mau duduk berdampingan, maka banyaknya kemungkinan komposisi duduk mereka adalah….
   (UTBK 2020) #permutasi
   A. 72
   B. 84
   C. 96
   D. 108
   E. 120
> [!success]- Klik untuk Lihat Jawaban
> - Kemungkinan komposisi kelima orang tersebut duduk adalah $5!$
> - Kemungkinan komposisi Adi dan Budi duduk berdampingan adalah $2 \cdot 4!$
> - Kemungkinan komposisi Adi dan Budi **tidak duduk berdampingan** adalah:
> $$
> \begin{aligned} 5!-2\cdot4! &= 120 - 48 \\ &= 72 \end{aligned} 
> $$
> **Jawaban: A**

3. Dari 10 orang perawat yang terdiri dari 7 orang wanita dan 3 orang pria akan dibentuk tim yang beranggotakan 5 orang. Jika disyaratkan anggota tersebut berisi paling sedikit 2 wanita maka banyaknya kombinasi tim yang dapat dibentuk adalah….
   A. 168
   B. 189
   C. 210
   D. 231
   E. 252
> [!success]- Klik untuk Lihat Jawaban
> Terdapat beberapa kemungkinan yang dapat dibentuk dengan syarat **paling sedikit 2 wanita**, yaitu:
> - Banyak cara memilih 2 wanita dari 7 wanita **dan** 3 pria dari 3 pria
> 
> $$\begin{aligned} C(7,2) \cdot C(3,3) &= \frac{7!}{2!(7-2)!} \cdot \frac{3!}{3!(3-3)!} \\ &= \frac{7 \cdot 6 \cdot \cancel{5!}}{2! \cdot \cancel{5!}} \cdot 1 \\ &= \frac{7 \cdot 6}{2!} \\ &= 21 \end{aligned}$$
> 
> - Bayak cara memilih 3 wanita dari 7 wanita **dan** 2 pria dari 3 pria
> 
> $$\begin{aligned} C(7,3) \cdot C(3,2) &= \frac{7!}{3!(7-3)!} \cdot \frac{3!}{2!(3-2)!} \\ &= \frac{7 \cdot \cancel{6} \cdot 5 \cdot \cancel{4!}}{\cancel{3!} \cdot \cancel{4!}} \cdot 3 \\ &= 35 \cdot 3 \\ &= 105 \end{aligned}$$
> 
> - Bayak cara memilih 4 wanita dari 7 wanita dan 1 pria dari 3 pria
> 
> $$\begin{aligned} C(7,4) \cdot C(3,1) &= \frac{7!}{4!(7-4)!} \cdot \frac{3!}{1!(3-1)!} \\ &= \frac{7 \cdot \cancel{6} \cdot 5 \cdot \cancel{4!}}{\cancel{3!} \cdot \cancel{4!}} \cdot 3 \\ &= 35 \cdot 3 \\ &= 105 \end{aligned}$$
> 
> - Banyak cara memilih 5 wanita dari 7 wanita dan 0 pria dari 3 pria
> - 
>  $$\begin{aligned} C(7,5) \cdot C(3,0) &= \frac{7!}{5!(7-5)!} \cdot \frac{3!}{0!(3-0)!} \\ &= \frac{7 \cdot {6} \cdot \cancel{5!}}{2! \cdot \cancel{5!}} \cdot 1 \\ &= 7 \cdot 3 \\ &= 21 \end{aligned}$$
>  
>  Banyak tim yang dapat dibentuk adalah:
>  $$ 21+105+105+21 = 252$$
>  **Jawaban: E. 252**



