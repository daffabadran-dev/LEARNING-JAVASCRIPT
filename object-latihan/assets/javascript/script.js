//latihan object
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] === undefined) {
        this.penumpang[i] = namaPenumpang;
        return this.penumpang;
      }
    }

    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  //coba dengan multiple value
  //   this.penumpangNaik = function (...penumpangNaik) {
  //     //untuk setiap yang mau naik
  //     for (let i = 0; i < penumpangNaik; i++) {
  //       //simpan nama orang saat ini
  //       let namaOrang = penumpangNaik[i];
  //       //asumsi belum mendapat kursi atau belum duduk
  //       let sudahDuduk = false;

  //       for (let j = 0; j < this.penumpang.length; i++) {
  //         if (this.penumpang.length === undefined) {
  //           this.penumpang[j] = namaOrang; //ketemu kursi kosong, duduk di kursi itu
  //           sudahDuduk = true; //tandai dia sudah duduk
  //           break; //berhenti cari kursi untuk orang ini
  //         }
  //       }
  //       //jika sudah dicari tetap belum duduk atau tidak ada kursi kosong
  //       if (sudahDuduk === false) {
  //         this.penumpang.push(namaOrang); //orang ini duduk di belakang
  //       }
  //     }

  //     return this.penumpang;
  //   };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      alert("angkot masih kosong");
      return false;
    }

    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] === namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return `${namaPenumpang} telah turun, membayar ${bayar}`;
      }
    }
  };
}

let angkot1 = new Angkot(
  "saber",
  ["cicahem", "cibiru"],
  ["miyabi", "astra", "evelyn", "yanagi"],
  0
);
