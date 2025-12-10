//kenapa object?
let mahasiswa = {
  nama: "daffa badran",
  lulus: true,
  ipSemester: [2.9, 3.1, 3.2, 2.8, 3.0],
  ipKumulatif: function () {
    let total = 0;
    let ips = this.ipSemester;
    for (let i = 0; i < ips.length; i++) {
      total += ips[i];
    }
    return total / ips.length;
  },
};

console.log(mahasiswa.ipKumulatif());

let orang = {
  nama: "saber",
  umur: 21,
  pekerjaan: "king",
  sapa: function () {
    return `hi, my name is ${this.nama} im ${this.umur} and my role is a ${this.pekerjaan}`;
  },
};

//nama umur dan pekerjaan disebut dengan properti
//function yang ada di dalam object dsb dengan method

//membuat object
let student = {
  nama: "saber",
  umur: 22,
  ip: [3.0, 2.5, 3.2],
  alamat: {
    jalan: "jl kingdom artoria, no 123",
    kota: "artoria city",
    provinsi: "artoria",
  },
};

console.log(student.umur, student.ip, student.alamat.jalan);
console.log(student);
