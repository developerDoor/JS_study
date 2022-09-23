// Object
// one of the javascript's data types.
// a collection of related data and/or functionality.
// Neally all object in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const name = "ellie";
const age = 4;

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

// with Javascript magic (dynamically typed language)
// can be properties later
ellie.hasJob = true; // 피하자
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. computerd properties 계산된프로퍼티
// key should be always string
console.log(ellie.name); // . 사용헐때는 코딩하는 그 순간 그 jey에 해당하는 값을 받아오고 싶을때 사용
console.log(ellie["name"]); // 우리가 정확하게 어떤 key가 필요한지 모를때 즉 런타임에서 결정될 때 사용한다.
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
  //console.log(obj.key); //하면 undefined 나온다.
}

printValue(ellie, "name");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("ellie", 30);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
  // this = {}; 생락되어 있음
  this.name = name;
  this.age = age;
  // return this; 생략되어 있음
}

// 5. in operator : property exitence check (key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}

// for (value of iterable) iterable => 배열 리스트와 같이 순차적으로 순회할 수있는 자료들
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assing(dest, [obj1, obj2, obj3...])
const user = { name: "ellie", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
