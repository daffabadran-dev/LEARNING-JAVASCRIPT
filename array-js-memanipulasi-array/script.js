//memanipulasi array
//1. menambah array
let arr = [0, 1, true];
console.log(arr[2]);
console.log(arr);

//cara pertema (manual);
let tambahArray = [];
tambahArray[0] = "saber";
tambahArray[1] = "miyabi";

console.log(tambahArray);
console.log("");
console.log("di atas section tambah array, di bawah section hapus array");
console.log("");
//menghapus isi array
//cara pertama (manual):
let hapusArray = ["saber", "miyabi", "vivy", 1];
hapusArray[3] = undefined;
console.log(hapusArray);

console.log("");
console.log("menampikan isi array:");
//menampilkan isi array
let tampilIsiArray = ["satu", "dua", "tiga"];
for (let i = 0; i < tampilIsiArray.length; i++) {
  console.log(`Urutan angka:\n${i + 1 + "."} ${tampilIsiArray[i]}`);
}

console.log("");
console.log("method - method");
console.log("join, push, pop, shift, unshift");
let cobaMethod = ["yanagi", "astra yao", "evelyn"];

//push + akhir array
cobaMethod.push("yixuan");
cobaMethod.push("rina", "zhuyuan");
cobaMethod.push("qinyi");
//pop - akhir array
cobaMethod.pop();
//unshift + depan array
cobaMethod.unshift("burnice", "caesar");
//shift - depan array
cobaMethod.shift();
//splice + dan - di tengah tengah array
/**
 * rumus menggunakan splice
 * array.splice(indexAwal, mauDiHapusBerapa, elemenbaru1, elemenBaru2, ..)
 */

console.log("-dari sini menggunakan slice dan splice juga-");
cobaMethod.splice(0, 0, "miyabi");
/**
 * dari kiri ke kanan
 * cara bacanya, mulai dari index 0,
 * hapus 0, (tidak ada yang di hapus)
 * tambahkan 'miyabi'
 */

//bisa juga seperti ini
cobaMethod.splice(1, 1, "saber", "ruan mei");
//mulai dari index 1, hapus 1, tambah saber dan ruan mei

/**
 * slice mengambil elemen dari array yang sudah ada dan dibentuk menjadi array baru
 * karena jadi array baru jadi, HARUS DI TAMPUNG KEDALAM SEBUAH VARIABEL DL
 * contoh:
 */

let cobaMethodSplice = cobaMethod.slice(1, 4);
console.log(cobaMethod.join(" - "));
console.log("");
console.log(
  `ini menggunakan slice, dan menghasilkan array yang baru: \n ${cobaMethodSplice.join(
    " <-> "
  )}`
);
console.log(cobaMethodSplice);
