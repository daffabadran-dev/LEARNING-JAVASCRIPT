// let angka = prompt("masukan angka");

// if (angka % 2 === 0) {
//   alert(`angka ${angka} adalah bilangan genap`);
// } else if (angka === null || angka.trim() === "") {
//   alert("Input tidak valid");
// } else {
//   alert(`angka ${angka} adalah bilangan ganjil`);
// }

let input = prompt("masukan angka");

if (input === "" || input === null) {
  // jika kosong or input adalah null
  alert(`input kosong, tidak valid`); //jalankan alert ini
} else {
  //kondisi jika bukan di atas
  let angka = Number(input);
  //konversi input ke number untuk menghindari user memasukan tipe data string
  if (isNaN(angka)) {
    //jika yang dimasukan user bukan angka (isNaN), angka disini menyimpan input yang sudah di convert
    alert("yang anda masukan tidak valid"); //tampilkan alert ini
  } else if (angka % 2 === 0) {
    //else untuk kondisi jika input adalah angka, cek genap atau ganjil
    alert(`angka ${angka} adalah bilangan genap`);
  } else {
    alert(`angka ${angka} adalah bilangan ganjil`);
  }
}

//kodenya if - else - else if - else, atau bisa disebut nested if
