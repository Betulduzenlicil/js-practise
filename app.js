console.log("welcome Codeclass");


//? 1- 18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını if/else ve ternary yapı ile konsola yazdıran kodu yazınız.

// let age= +prompt("enter your age")
// let vatandas=confirm("tc vatandaşı mısınız?")

// if (age>=18 && vatandas) {
//     console.log("oy kullanabilirsiniz");
       
// }else{
// console.log("daha çok küçüksünüz");}

//? alternative çözüm

// yas>=18 && vatandas? console.log("oy kullanabilirsiniz"): console.log("yasınız kuçuk bekleyin");

//? 2- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit
// sıcaklık= +prompt("sıcaklık değeri giriniz:")
// let changes= () => {
//     sıcaklık= +prompt("sıcaklık değeri giriniz:")
//     console.log((sıcaklık*9/5)+32);
//     return
// }
//  changes()

//? 3- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?
// let sentence = "Hello World"
// const reverseString=()=>{
//     let newSentence=""
//     for(let i=sentence.length-1; i>=0; i--){
//          newSentence+=sentence[i]

//     }
//     return newSentence
// };
// console.log(reverseString());

//? 4- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?

// let str = "yaya";
// let tersiniBul = (word) => {
//   let len = word.length;
//   let ters = "";
//   for (let k = len-1; k >= 0; k--) {
//     ters =ters + word[k];
//   }
//   return ters;
// };
// console.log(tersiniBul(str));

//? 5- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?

// let vow = ["a", "e", "i", "o", "u"]
// let cumle = "muaz naber";
// let counter = 0
// for(let i=0; i<cumle.length; i++){
//     if(vow.includes(cumle[i])) {
//         counter+=1
//     }
// }
// console.log(counter)

//?alternative yol
// const vowels = "aeıioöuü";
// const string = "hello world"
// const findVowels = (str) => {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (vowels[j] === str[i]) {
//         newStr += str[i];
//       }
//     }
//   }
//   return newStr;
// };
// console.log(findVowels("hello world"));

//? 6- Belirli bir sayının tam bölenlerinin toplamını bulan fonksiyonu yazınız?

// 7- Belirli bir sayının asal olup olmadığını bulan fonksiyonu yazınız? 2, 3, 5, 7, 11, … şeklinde devam eden, kendisinden ve 1'den başka pozitif böleni olmayan 2 ve 2'den büyük sayılara “asal sayı” denir.

// 8-Girilen bir cümledeki kelime sayısını bulan bir fonksiyon yazınız.

// 9- Bir kelime ve bir harf olmak üzere İki adet string parametre alan ve girilen harften girilen kelime içinde kaç adet olduğunu sonuç olarak dönen bir fonksiyon yazınız.
// Girilen harf kelime içinde yoksa 0 dönmeli.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:
// The first argument can be an empty string
