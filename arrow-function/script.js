/**
 * arrow function adalah cara penulisan fungsi yang lebih singkat di js
 * Aturan 1: Jika parameter hanya 1, bisa tanpa kurung
 * Aturan 2: Jika tidak ada parameter, harus pakai kurung kosong
 * Aturan 3: Jika 2 parameter atau lebih, harus pakai kurung
 * 
 * 
 *  Bentuk Implisit Return
 *  Kapan Tidak Bisa Pakai Implicit Return?

 */

//perbandingan dasar fungsi biasa dan arrow function

//fungsi biasa
function sapa(nama) {
  return `halo ${nama}`;
}
console.log(sapa("daffa"));

//arrow function
const sapaKedua = (nama) => {
  return `halo ${nama}`;
};
console.log(sapaKedua("saber"));
/**
 * pada contoh arrow function di atas sapaKedua,
 * tanda kurung bisa dihapus jika hanya terdapat 1 parameter saja
 * namun karena auto prettier codenya otomatis ada kurung,
 * tapi itu lebih baik
 * contoh implementasi sebagai berikut:
 */

const sapaKetiga = (nama) => {
  return `halo ${nama}`;
};
console.log(sapaKetiga("halo vivy"));

/**
 *dan bisa dibuat lebih singkat lagi jika hanya ada 1 baris,
 * karena jika hanya ada 1 baris maka akan di return otomatis
 * contoh:
 */
const sapaKeempat = (nama) => `halo ${nama}`;
console.log(sapaKeempat("miyabi"));

//Aturan 2: Jika tidak ada parameter, harus pakai kurung kosong
const sapaKelima = () => {
  return `halo semuanya`;
};
console.log(sapaKelima());

//aturan 3, jika 2 parameter atau lebih, harus pakai kurung
const tambah = (a, b) => {
  return a + b;
};
console.log(tambah(12, 10));

//bentuk implisit return
// Ini yang membuat arrow function sangat singkat:
const kali = (a, b) => {
  return a * b;
};

//bisa diubah menjadi tanpa return jika 1 baris
const kaliKedua = (a, b) => a * b;

/*
 * latihan arrow function
 */
console.log("");
console.log("dibawah ini adalah latihan arrow function  ");
//latihan 1
console.log("latihan 1:");
/**
 * function kaliDua(angka) {
    return angka * 2;
}
 */

const kaliDua = (angka) => angka * 2;
console.log(kaliDua(3));
console.log("");

//latihan 2, Ubah function biasa ini menjadi arrow function:
/** 
 * function sapa(nama) {
    return "Halo " + nama;
}
 */
console.log("latihan 2:");
const sapaNama = (nama) => `halo ${nama}`;
console.log(sapaNama("saber"));
console.log("");

//latihan 3, Single Parameter (tanpa kurung)
/**
 * karena aku menggunakan prettier, otomatis dibuatkan tanda kurungnya
 * latihan di atas sebelum latihan 3 juga sama, aku membuat semuanya dalam 1 baris
 * yang artinya tanpa perlu return dan karena hanya 1 parameter aku tidak menggunakan tanda kurung
 * namun dikarenakan prettier yang digunakan, dalam format on save, semuanya di ubah menjadi
 * menggunakan tanda kurung
 */
console.log("latihan 3");
const kapitalisasi = (kata) => kata.toUpperCase();
console.log(kapitalisasi("miyabi"));
console.log("");

//latihan 4, no parameter
console.log("latihan 4");
const beriSalam = () => `selamat pagi`;
console.log(beriSalam());

//latihan 5, multiple parameter
const gabungKata = (kata1, kata2) => {
  return `${kata1.toUpperCase()} dan ${kata2.toLowerCase()}`;
};

console.log(gabungKata("saber", "MIYABI"));

//latihan bagian 2
//soal 1, Buat arrow function yang menerima 3 parameter (nama, usia, kota) dan return string:
console.log("");
console.log("latihan bagian 2");
/**
 * // Input: introduce("Budi", 25, "Jakarta")
// Output: "Halo, nama saya Budi, usia 25 tahun, dari Jakarta"
 */

const dataDiri = (nama, umur, kota) => {
  return `"Halo, nama saya ${nama}, usia ${umur} tahun, dari ${kota}"`;
};
let hasilDataDiri = dataDiri("Budi", 25, "Jakarta");
console.log(hasilDataDiri);
console.log("");

//soal 2, Buat arrow function yang cek apakah angka genap:
/**
 * // Input: isEven(4) → Output: true
// Input: isEven(5) → Output: false
 */

const cekGenap = (angka) => {
  return angka % 2 == 0
    ? `${angka} adalah angka genap`
    : `${angka} adalah angka ganjil`;
};
console.log(cekGenap(4));
console.log(cekGenap(31));

//
