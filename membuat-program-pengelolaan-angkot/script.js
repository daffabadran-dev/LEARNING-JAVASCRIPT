//jika angkot kosong
//tambah penumpang di awal array
//kembalikan isi array dan keluar dari function
//else
//telusuri seluruh kursi dari awal
//jika ada kursi kosong
//tambah penumpang di kursi tersebut
//kembalikan isi array & keluar dari function
//jika sudah ada nama yang sama
//tampilkan pesan kesalahannya
//kembalikan isi array dan keluar dari function
//jika seluruh kursi terisi
//tambang penumpang di akhir array
//kembalikan isi array dan keluar dari function

let angkot = ["astra", undefined, "miyabi"];

function tambahPenumpang(namaPenumpang, daftarKursiAngkot) {
  if (daftarKursiAngkot.length === 0) {
    daftarKursiAngkot.push(namaPenumpang);
    return daftarKursiAngkot;
  } else {
    //telusuri isi array
    for (let i = 0; i < daftarKursiAngkot.length; i++) {
      if (daftarKursiAngkot[i] === undefined) {
        daftarKursiAngkot[i] = namaPenumpang;
        return daftarKursiAngkot;
      } else if (daftarKursiAngkot.length === namaPenumpang) {
        return "${namaPenumpang} sudah terdaftar";
      }
    }
  }
  daftarKursiAngkot.push(namaPenumpang);
  return daftarKursiAngkot;
}
console.log(tambahPenumpang("yanagi", angkot));
//
//

function hapusPenumpang(namaPenumpang, daftarKursiAngkot) {
  if (daftarKursiAngkot.length === 0) {
    console.log("angkot masih kosong, tidak ada penumpang yang turun");
    return daftarKursiAngkot;
  } else {
    for (let i = 0; i < daftarKursiAngkot.length; i++) {
      if (daftarKursiAngkot[i] === namaPenumpang) {
        daftarKursiAngkot[i] = undefined;
        console.log(`${namaPenumpang} sudah turun`);
        return daftarKursiAngkot;
      }
    }
  }
  console.log(`${namaPenumpang} tidak ada di dalam angkot`);
  return daftarKursiAngkot;
}

console.log(hapusPenumpang("astra", angkot));
console.log(tambahPenumpang("evelyn", angkot));
console.log(hapusPenumpang("vivian", angkot));
