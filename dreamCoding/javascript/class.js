"use strict";

// OOP 객체지향 프로그래밍
// 클래스 : 템플릿
// 오브젝트 :  클래스의 인스턴스
// Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

class nerdDev {
  constructor() {
    (this.동동 = 29), (this.영준 = 28), (this.장혁 = 29);
  }
  취업() {
    console.log("취뽀가즈아!");
  }
}

let 무야호1 = new nerdDev();

console.log(무야호1.취업());
console.log(무야호1.영준);
