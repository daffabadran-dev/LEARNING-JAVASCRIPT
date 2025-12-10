//filter dan find
/**
 * filter untuk mencari nilai pada array dan mengembalikannya dalam bentuk array
 *
 */

let angka = [1, 2, 3, 4, 5, 10, 1000, 26, 14];
let angka2 = angka.filter(function (e) {
  return e < 5;
});
console.log(angka2.join(" - "));

let angka3 = angka2.filter(function (e) {
  return e > 2;
});
console.log(angka3.join(", "));

/**
 * find, sedangkan untuk find ini hanya mengembalikan 1 nilai saja
 *
 */

let angka4 = angka.find(function (e) {
  return e == 2;
});

console.log(angka4);

let angka5 = angka.find((e) => {
  return e > 100;
});

console.log(angka5);
//hasil dari find itu berbentuk string
