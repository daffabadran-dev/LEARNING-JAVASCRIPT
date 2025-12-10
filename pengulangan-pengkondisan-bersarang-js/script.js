// alert("LIHAT PADA CONSOLE");
let str = "";
for (let i = 0; i < 10; i++) {
  str += "\n";
  for (let j = 0; j <= i; j++) {
    str += "*";
  }
}
console.log(str);
console.log(str.length);
// -------------------------------------------
console.log("");
console.log(`~ membuat versi terbalik ~`);

let str2 = "";
for (let ii = 10; ii > 0; ii--) {
  str2 += "\n";
  for (let jj = 0; jj < ii; jj++) {
    str2 += "*";
  }
}

console.log(str2);
console.log("");
console.log(` ~ pola persegi dan persegi panjang ~`);
console.log("pola persegi 4x4");

let str3 = "";
for (let iii = 0; iii < 4; iii++) {
  str3 += "\n";
  for (let jjj = 0; jjj < 4; jjj++) {
    str3 += "*";
  }
}

console.log(str3);
console.log("");
console.log(`~ pola persegi panjang ~`);

let str4 = "";
for (let k = 0; k < 3; k++) {
  str4 += "\n";
  for (let l = 0; l < 7; l++) {
    str4 += "*";
  }
}
console.log(str4);
console.log("");
console.log("tabel perkalian");
for (let z = 1; z <= 5; z++) {
  let baris = "";
  for (let y = 1; y <= 5; y++) {
    baris += z * y + "\t"; // \t untuk tab
  }
  console.log(baris);
}
