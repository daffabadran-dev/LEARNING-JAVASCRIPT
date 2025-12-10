//
//
//membuat sebuah object

//cara 1, object literal
let student = {
  name: "saber",
  age: 22,
  id: 1234567,
  role: "king",
};

let student2 = {
  name: "rin",
  age: 21,
  id: 2345678,
  role: "mage",
};

//cara 2, menggunakan functiond declaration
function createObjStudent(name, id, role) {
  let std = {};
  std.name = name;
  std.id = id;
  std.role = role;
  return std;
}

let std3 = createObjStudent("miyabi", 3456789, "void hunter");
let std4 = createObjStudent("yanagi", 4567899, "HSO 6");

//cara 3, menggunakan constructor
function Student(name, age, id, role) {
  this.name = name;
  this.age = age;
  this.id = id;
  this.role = role;
}

let std5 = new Student("yixuan", 22, 5678989, "shifu");
console.log(std5);
console.log(createObjStudent("astra yao", 789897, "idol"));

function Phones(brand, snapdragon) {
  this.brand = brand;
  this.snapdragon = snapdragon;
}

let phoneList = new Phones("ASUS ROG Phone", "snapdragon elite");
console.log(phoneList);
