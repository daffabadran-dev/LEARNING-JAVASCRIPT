//
//
//contoh menggunakan for biasa
let angka = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < angka.length; i++) {
  console.log(angka[i]);
}

console.log("");

//menggunakan forEach
let abjad = ["a", "b", "c", "d", "e", "f", "g", "h"];

abjad.forEach(function (e) {
  console.log(e);
});

//coba dan memahami forEach bagian 2
let namaStudent = ["saber", "miyabi", "vivy", "yanagi"];

namaStudent.forEach(function (e, i) {
  console.log(`studentList:\nNo.${i + 1} adalah ${e}`);
});

/**
 * mencoba map,
 * map sama seperti forEach,
 * namun map akan mengembalikan nilai dan membuat array baru
 * konsepnya sama seperti slice
 * hanya saja ini versi loop (menurutku)
 * coba praktek
 */

let angkaPuluhan = [10, 20, 30, 40, 50];
let angkaPuluhanMap = angkaPuluhan.map(function (e) {
  return e;
});

console.log(angkaPuluhanMap.join(" - "));
/**
 * di atas angkaPuluhan ditampung ke dalam variabel baru
 * mengembalikan nilai menggunakan return, bukan console.log
 * jika syntaq / cara ini diubah dari map menjadi forEach maka akan error
 * hasil dari return bisa di manipulasi lagi sebeleum di kembalikan
 * contoh:
 */

let angkaPuluhan3 = angkaPuluhan.map(function (e) {
  return e * 11;
});
console.log(angkaPuluhan3);
