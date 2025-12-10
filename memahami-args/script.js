//Praktik
//Contoh 1: function penjumlahan

function jumlahkan(...numbers) {
  let total;
  total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

let hasilDariJumlahkan = jumlahkan(1, 2, 3, 4, "daffa", true, false);
console.log(hasilDariJumlahkan);
//hasilnya menjadi concat string karena ada string di dalam argumen

//contoh sederhana
function tasBelanja(...barang) {
  console.log(barang);
}
tasBelanja("🍇", "🍈", "🍉", "🍌");

//contoh simple
//hitung jumlah
function hitungTotal(...angka) {
  let total = 0;

  //loop sederhana
  for (let i = 0; i < angka.length; i++) {
    total = total + angka[i];
  }

  return total;
}
let totalDariHitungTotal = hitungTotal(10, 20, 30, 40, 50);
console.log(totalDariHitungTotal);

//contoh selanjutnya, list nama
function daftarTeman(...namaTeman) {
  console.log(`saya punya teman ${namaTeman.length} orang`);
  for (let i = 0; i < namaTeman.length; i++) {
    console.log(`teman ke ${i + 1} adalah ${namaTeman[i]}`);
  }
}
daftarTeman("saber", "vivy", "miyabi", "evelyn");

let sambutan = function (...kata) {
  let kalimat = "";

  for (let i = 0; i < kata.length; i++) {
    kalimat = kalimat + kata[i] + " ";
  }
  return kalimat;
};

console.log(sambutan("halo", "selamat", "pagi"));

//versi improve

let sayhi = function (...words) {
  let kalimat = "";

  for (i = 0; i < words.length; i++) {
    kalimat += words[i];

    if (i < words.length - 1) {
      kalimat += " ";
    }
  }

  return kalimat;
};

console.log(sayhi("hallo", "daffa", "miyabi!"));

console.log("");
//lvl up
//rest parameter di berbagai situasi

// function belanjaBerbagaiHal(pembeli, metodeBayar, ...items) {
//   console.log(`pembeli ${pembeli}`);
//   console.log(`metode bayar ${metodeBayar}`);
//   console.log(`items ${items}`);
// }
// belanjaBerbagaiHal("saber", "debit", "motorcyle", "suit", "ice cream", "daffa");

// //membuat function biodata (latihan)
// function biodataDiri(nama, umur, ...hobbies) {
//   let hasil = "";
//   console.log(`nama: ${nama}, umur ${umur}, list hobi: ${[hobbies]}`);

//   for (let i = 0; i < hobbies.length; i++) {
//     hasil += hobbies[i];
//   }
// }

// biodataDiri("daffa", 22, "game", "anime", "eat");

//salah

//memahami jawaban yang diberikan dibawah ini

function belanjaDulu(toko, ...listBarang) {
  let hasil = `Belanja di: ${toko}\n Daftar barang:\n`;

  if (listBarang.length > 0) {
    for (let i = 0; i < listBarang.length; i++) {
      hasil += `✅ ${listBarang[i]}\n`;
    }
  } else {
    hasil += `📝 tidak ada barang`;
  }
  return hasil;
}

let hasilBelanjadulu = belanjaDulu(
  "indomaret",
  "susu",
  "keju",
  "roti",
  "telur"
);

console.log(hasilBelanjadulu);
