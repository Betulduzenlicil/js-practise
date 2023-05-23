//?ÖRNEK:1   1'DEN n'ye KADAR OLAN SAYILARIN TOPLAMINI BULAN KODU YAZINIZ


// const n = +prompt("enter your number");
// let sum = 0;
// for (let i = 1; i <=n ; i++) {
// sum = sum + i;
// }
// console.log(`1 den ${n} ye kadar olan sayıların toplamı = ${sum}`);
// document.getElementById("problem").innerHTML += "<br/>" + (`1 den ${n} a kadar olan sayıların toplamı= ${sum}`);
//--------------------------------------------------------------------------------------------------------//
//?ÖRNEK:2 1 DEN 100e kadar olan sayılardan 3 e tam bölünnelerin karşısına FİZZ, 5 E TAM BÖLÜNENLERİN KARŞISINA BUZZ,
//* HEM 3 E HEM 5 E TAM BÖLÜNENLERİN KARŞISINA İSE FİZZBUZZ YAZAN KODU YAZDIRINIZ*//

// for (let i = 1; i < 100; i++) {
//     if (i%3==0 && i%5==0) {
//         console.log("FizzBuzz")
       
//     }else if (i%3==0) {
//         console.log("fizz");
       
//     }else if(i%5==0){
//         console.log("Buzz");
       
//     }else{
//         console.log(i);
        
//     }
// }

//? ÖRNEK:3  bilgisayardan 1 ile 100 arasında rastgele sayı üretmesini isteyen kodu yazdırınız

// for (let i = 1; i <= 10; i++) {
// let sayi = Math.random()*100;
// console.log(`${i}. sayi :`, sayi);
// }

//? ÖRNEK:4 KULLANICININ GİRDİĞİ SAYININ ASAL OLUP OLMADAIĞINI BELİRLEYEN KODU YAZDIRINIZ ----
//*1.YOL
// let sayi = +prompt("sayi giriniz")

// let asalMi = sayi>=2;
// for (let i = 2; i < sayi; i++) {
//     if (sayi%i==0) {
//         asalMi = false;
//         console.log(i);
//         break
//     }
// }


// if (asalMi) {
//     console.log("asal");
// }else{
//     console.log("asal degil");
// }

//? ÖRNEK:4 KULLANICININ GİRDİĞİ SAYININ FAKTÖRİYELİNİ HESAPLAYAN KODU YAZDIRINIZ

// let sayi = +prompt("sayi giriniz")
// let faktoriyel = 1;

// for (let i = 1; i <= sayi; i++) {
//     faktoriyel *= i
// }
// console.log(faktoriyel);
// document.getElementById("fizbuz").innerHTML += "<br/>" + (`${sayi} sayısının faktöriyeli: ${faktoriyel}`)


//? ÖRNEK:5 KULLANICININ GİRDİĞİ SAYININ POZİTİF BÖLENLERİNİ HESAPLAYAN KODU YAZDIRINIZ

// let number  = Number(prompt("Bir sayı girin:"));

// console.log(number+ " sayısının pozitif bölenleri:");

// for (let i = 1; i <= number; i++) {
//   if (number % i === 0) {
//     console.log(i);
//     document.getElementById("fizbuz").innerHTML += "<br/>" + (number + " sayısının pozitif bölenleri:" +i);
//   }
// }

//? ÖRNEK:6 KULLANICININ GİRDİĞİ DEĞERLER İLE İD VE PAROLASININ DOĞRU OLUP OLMADIĞINI BELİRLEYEN KODU YAZDIRINIZ

// let Id = "betul";
// let parola = "123";

// let kullaniciId = prompt("ID'nizi giriniz")
// let kullaniciParola = prompt("sifrenizi giriniz")
// let kalanHak = 2;
// while (kalanHak>0) {
//     kullaniciId = prompt(`id giriniz. ${kalanHak}`)
//     kullaniciParola = prompt(`sifre giriniz. ${kalanHak}`)
    
//     if (Id == kullaniciId && parola==kullaniciParola) {
//         console.log("giriş başarili");
//     }else if (Id == kullaniciId) {
//         console.log("id doğru ama parola yanlis");
//         kalanHak--;
//     }else if(parola == kullaniciParola){
//         console.log("parola doğru ama id yanlis");
//         kalanHak--;
//     }else{
//         console.log("hem id hem parola yanlis");
//         kalanHak--;
//     }
// }

//? ÖRNEK:7 0 İLE 100 ARASINDA GİRİLEN BİR SAYIYI BULMA OYUNUNU DÖNGÜLER İLE YAZINIZ -------
// let count = 1;
// do {
//     number = +prompt("please enter the number. (0-100)")
//     count++;
//     console.log(`your number is ${number}`);
//     if (number<0 || number>100) {
//         console.log("Please enter the number correctly");
//     }else{
//         console.log("your number is correct");
//     }
// } while ((number<0 || number>100) && count<=3);

//? ÖRNEK:8 SAYI BULMACA OYUNU KURGULAYINIZ--------------------
// let again = true
// while (again) {
//     const number = Math.round(Math.random()*100)
// // const number = 5;
// let userNumber;
// let count = 1
// let tryAgain =0;
// while (count<=5) {
//     userNumber = +prompt(`Please enter your guess. This is your ${count}. guess`)
//     if (userNumber<0 || userNumber>=0) {
//         if (userNumber == number) {
//             console.log(`Nice try. Your ${count}. guess is right`);
//             break;
//         }else{
//             console.log(`Please enter your guess again. Your ${count}. guess is wrong`);
//             count++;
//             if (userNumber> number) {
//                 console.log("Lower");
//             }else{
//                 console.log("Bigger");
//             }
//         }
//     }
//     else{
//         console.log(`Please enter NUMBER`);
//         count++
//     }
// }
//     console.log(`Number was ${number}`);
//     tryAgain = prompt("Press 1 to try again");
//     if (tryAgain == 1) {
//     }else{
//         console.log("See You Next Time");
//         again = false;
//     }
// }
//? ÖRNEK:9 FİBONACİ DİZİSİNDEKİ SAYILARI BULAN KODU YAZDIRINIZ --------------

 //* Fibonacci sayısı 0 1 1 2 3 5 8 13 21 34 

// let adet = +prompt("Kaç tane fibonacci sayisi istiyorsunuz")
// while (adet<= 0) {
//     adet = +prompt("0'dan büyük sayi girmeniz gerekiyor")
// }
// let kucukSayi = 0;
// let buyukSayi = 1;
// let toplamSayi;

// for (let i = 1; i <= adet; i++) {
//     console.log(kucukSayi);
//     toplamSayi = kucukSayi + buyukSayi;
//     kucukSayi = buyukSayi;
//     buyukSayi = toplamSayi;
// }

// -------------

// // let kacinci = +prompt("Kacinci fibonacci sayisini istiyorsun")
// let kacinci = 5;
// while (kacinci<= 0) {
//     kacinci = +prompt("0'dan büyük sayi girmeniz gerekiyor")
// }
// let kucukSayi1 = 0;
// let buyukSayi1 = 5;
// let toplamSayi1;
// ​
// for (let i = 1; i <= kacinci; i++) {
//     if (i==kacinci) {
//         console.log(`${kacinci}. sayi ${kucukSayi1}`);
//     }
//     toplamSayi1 = kucukSayi1 + buyukSayi1;
//     kucukSayi1 = buyukSayi1;
//     buyukSayi1 = toplamSayi1;
// }

//? ÖRNEK:10 kullanıcıdan alğınız boy ve kilo bilgilerine göre vücut kitle indeksini hesaplayan kodu yazınız

//* vücut kitle indeksi: kilo / boyun karesi

//0--18 zayıf
//19--25 normal
//26--30 kilolu
//31--35 şişman
// let indexfirstPerson;
// let indexsecondPerson;
// let firstPersonkg= +prompt("kilo biginizi giriniz")
// let secondPersonkg= +prompt("kilo biginizi giriniz")

// let firstPersonBoy= +prompt("boyunuzu giriniz")
// let secondPersonBoy= +prompt("boyunuzu giriniz")

// indexfirstPerson=(secondPersonkg) /(secondPersonBoy**2);
// indexsecondPerson=(secondPersonkg) /(secondPersonBoy**2);

// console.log(indexfirstPerson, indexsecondPerson)

//  let higherİndex= indexfirstPerson > indexsecondPerson;

//  console.log(higherİndex);



//? ÖRNEK: 11 
// let d = new Date();
// let birthday = new Date (1984,4,5);
// console.log(d.getFullYear());
// console.log(d.getDay());
// console.log(d.getHours());
// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getTime());

// console.log(d.getFullYear()- birthday.getFullYear());
// console.log(d.getMonth()- birthday.getMonth());
// console.log(d.getDay()- birthday.getDay());
// console.log(d.getFullYear()- birthday.getFullYear());


// console.log(d.setFullYear(2020));


//? ÖRNEK:12
let tarih = new Date();

console.log(tarih);
console.log(tarih.getMonth()+1);
console.log(tarih.getDate());

let atarih = new Date("12/4/1984 22:25:10")
console.log(atarih)


//? 1/1/1990 tarihinden birgün öncesini gösteren kodu yazınız

// let guncelTarih = new Date("1/1/1990")
// dayOfMonth= guncelTarih.getDate();
// guncelTarih.setDate(dayOfMonth-1);
// console.log(guncelTarih);



//? ÖRNEK:13 2019 YILINDA ANNELER GÜNÜ AYIN KAÇINDA KUTLANACAK HER YIL MAYIS AYININ İKİNCİ PAZAR GÜNÜ KUTLANMAKTADIR.

//  let mumDay = new Date();
//  mumDay.setFullYear(2019);
//  mumDay.setDate(1);
//  mumDay.setMonth(4);
 
//  while(mumDay.getDay() !=0){
//    mumDay.setDate(mumDay.getDate()+1)
//  }
//  mumDay.setDate(mumDay.getDate()+7)
//  console.log(mumDay)




