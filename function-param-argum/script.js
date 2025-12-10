// function tambah(a, b) {
//   return a + b;
// }
// let hasil = tambah(2, 3);
// console.log(hasil);

// function tambahLagi(a, b) {
//   return a + b;
// }

// let a = 10;
// let b = parseInt(
//   prompt("Masukkan angka untuk di jumlahkan dengan 10 yang dikali dengan 3: ")
// );
// let hasilKedua = tambahLagi(a * 3, b);
// console.log(hasilKedua);

// function kali(c, d) {
//   return c * d;
// }
// let hasilKali = kali(tambah(1, 1), tambah(2, 1));
// console.log(hasilKali);

console.log("arguments");
function coba(...args) {
  let hasil = 0;
  for (let i = 0; i < args.length; i++) {
    hasil += args[i];
  }
  return hasil;
}

console.log(coba(1, 2, 3, 4, 5));
