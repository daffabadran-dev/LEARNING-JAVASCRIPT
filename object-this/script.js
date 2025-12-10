function myData(name, status) {
  const result = {};
  result.name = name;
  result.status = status;
  return result;
}
console.log(myData("Saber", "WIFE"));
console.log(myData("Miyabi", "WIFE"));
//di atas menggunakan function deklarasi

function objLiteral(name, status) {
  return {
    name: name,
    status: status,
    greet() {
      return `hello, im ${this.name} `;
    },
  };
}

console.log(objLiteral("saber", "wife"));

let createObjLiteral = {
  name: "miyabi",
  age: 22,
  status: "wife",
};

console.log(createObjLiteral);

//menggunakan constructors
function Person(name, status) {
  this.name = name;
  this.status = status;
}

let Person2 = new Person("saber", "wifes");
console.log(Person2);
console.log(new Person("miyabi", "wife"));

function tesThis(nama, umur) {
  console.log(this);
  console.log("halo");
}
tesThis();

function TesKonstraktor(umur, nama) {
  this.umur = umur;
  this.nama = nama;
  console.log(this);
}

console.log(new TesKonstraktor(22, "saber"));
console.log(new TesKonstraktor(22, "miyabi"));

let obj = { a: 10, nama: "saber" };
obj.hello = function () {
  console.log(this);
};

obj.hello();
