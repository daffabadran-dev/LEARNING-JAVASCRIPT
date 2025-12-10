let input = prompt("Masukkan angka ");
//prompt untuk dialog ke user
let angka = Number(input);
//konversi input di atas menjadi number disimpan ke dalam variabel angka

if (input === "") {
  //jika input tidak diisi jalakan alert dibawah
  alert(`input tidak boleh kosong`);
} else if (isNaN(angka)) {
  //jika input bukan angka jalankan alert dibawah
  alert(`yang anda masukan bukanlah angka`);
} else if (angka < 0) {
  //jika angka lebih kecil dari 0 jalankan alert dibawah, yang mana artinya < 0 adalah angka negatif
  alert(`angka tidak boleh negatif`);
} else if (angka % 2 === 0) {
  //untuk mengecek angka genap atau ganjil
  alert(`angka ${angka} adalah bilangan genap`);
} else {
  alert(`angka ${angka} adalah bilangan ganjil`);
}

setTimeout(() => {
  //setTimeout untuk merefresh halaman setelah 300ms
  location.reload();
  //location adalah objek bawaan dari browser yang merepresentasikan halaman web saat ini
  //reload() adalah method dari objek location yang berfungsi untuk merefresh halaman
}, 300); //300ms atau 0.3 detik

//dengan adanya setTimout ini, halaman akan terus direfresh setiap 0.3 detik setelah user menginput angka
