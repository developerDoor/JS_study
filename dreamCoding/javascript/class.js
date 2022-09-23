"use strict";

// OOP 객체지향 프로그래밍
// 클래스 : 템플릿 == 오브젝트 찍어내는 기계다
// 오브젝트 :  클래스의 인스턴스
// Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class decarations
// class Person {
//   // constructor
//   constructor(name, age) {
//     //field
//     this.name = name;
//     this.age = age;
//   }
//   speak() {
//     console.log(`${this.name}: hello!`);
//   }
// }

// const ellie = new Person("ellie", 20);
// console.log(ellie.name);
// console.log(ellie.age);
// ellie.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if(value < 0) {
    //     throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

// 3. Field (public, private)
// Too soon!
class Experiment {
  publicField = 2; // 그냥 정의하면 public
  #privateFiled = 0; // # 붙이면 private
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. static properties and methods
// Too soon!
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 상속 & 다형성
// 5. Inherutance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log("△");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking : instanceOf
// 왼쪽에 있는 오브젝트가 오른쪽에 있는 클래스로 만들어진 오브젝트인지 확인해준다.
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
