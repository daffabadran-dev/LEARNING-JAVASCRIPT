//menangkap pilihan player
let player = prompt(`Pilih: gajah, semut, orang`);
//menangkap pilihan komputer

//membangkitkan pilihan random
let comp = Math.random();
if (comp < 0.34) {
  comp = "gajah";
} else if (comp >= 0.34 && comp < 0.67) {
  comp = "orang";
} else {
  comp = "semut";
}

let hasil = "";
//menentukan rules
if (player == comp) {
  hasil = "SERI!";
} else if (player == "gajah") {
  if (comp == "orang") {
    hasil = "MENANG!";
  } else {
    hasil = "KALAH!";
  }
} else if (player == "orang") {
  if (comp == "gajah") {
    hasil = "KALAH!";
  } else {
    hasil = "MENANG!";
  }
} else if (player == semut) {
  hasil = comp == "orang)" ? "MENANG!" : "KALAH!";
}

//menampilkan hasil
alert(`Lawan memilih: ${comp} \nHasilnya: ${hasil} \n${player} vs ${comp}`);
alert("Terima kasih sudah bermain Janken Game!");
