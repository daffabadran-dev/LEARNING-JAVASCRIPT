//soal 1
let penumpang = [];

function tambahPenumpang(nama, array) {
  array.push(nama);
  return array;
}
console.log(tambahPenumpang("saber", penumpang));

//soal 2
let angkot = ["saber", undefined, "miyabi"];
let rumah = ["astra", undefined, "evelyn"];

function tambahPenumpang(nama, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === undefined) {
      array[i] = nama;
      return array;
    }
  }
  array.push(nama);
  return array;
}
console.log(tambahPenumpang("yanagi", rumah));

//soal 3

console.log("");

let bus = ["daffa", undefined, "miyabi"];

function buyTiket(nama, daftarKursi) {
  if (daftarKursi.length === 0) {
    daftarKursi.push(nama);
    return daftarKursi;
  } else {
    for (let i = 0; i < daftarKursi.length; i++) {
      if (daftarKursi[i] === undefined) {
        daftarKursi[i] = nama;
        return daftarKursi;
      } else if (daftarKursi[i] === nama) {
        console.log(`${nama} sudah terdaftar`);
        return daftarKursi;
      }
    }
    daftarKursi.push(nama);
    return daftarKursi;
  }
}

console.log(buyTiket("yanagi", bus));
console.log(buyTiket("daffa", bus));

function hapusPenumpang(namaPenumpang, daftarKursi) {
  if (daftarKursi.length === 0) {
    console.log("bus masih kosong");
    return daftarKursi;
  } else {
    for (let i = 0; i < daftarKursi.length; i++) {
      if (daftarKursi[i] === namaPenumpang) {
        daftarKursi[i] = undefined;
        console.log(`${namaPenumpang} berhasil turun`);
        return daftarKursi;
      }
    }
  }
  console.log(`$(namaPenumpang) tidak ada di dalam bus`);
  return daftarKursi;
}

console.log(hapusPenumpang("daffa", bus));
console.log(hapusPenumpang("miyabi", bus));
