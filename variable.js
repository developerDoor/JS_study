// 1. Use strict
// added in ES 5
// use this for Vanilla JS
'use strict';


// 2. Variable
// let (aadded in ES6)

// global scope
// 블럭 밖에서 정의된 변수들
let globalName = 'global name';

// block scope
// 블럭안에 코드를 작성하면 블럭 밖에서는 접근을 할 수 없다.
{
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
}

console.log(name);
console.log(globalName);

// var 절대 사용하지마!
// var hoisting (move declaration from bottom to top)
// 호이스팅이란 어디에 선언했느냐는 상관없이 항상 제일 위로 선언을 끌어 올려주는 것!
// has no block scope (블럭을 철저히 무시)
console.log(age);
age = 4;
var age;

// 3. constant
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistake
// mutable data type - 값이 계속 변경될 수 있음
// immutable data type - 값을 변경할 수 없음

const daysInWeek = 7;
const maxNumber = 5;

// variable types
// primitive, single item : number, string, boolean, null, undefine, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof  count}`);
console.log(`value: ${size}, type: ${typeof  size}`);

// number - special numberic values : infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/ 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 213132184913850985980968096820980980928093n; // over (-2**53) ~ (2*53)
console.log(`value: ${bigInt}, type: ${typeof  bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendon = 'brendon';
const greeting = 'hello' + brendon;
console.log(`value: ${greeting}, type: ${typeof  greeting}`);
const helloBob = `hi ${brendon}!`; // template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3<1; // false
console.log(`value: ${canRead}, type: ${typeof  canRead}`);
console.log(`value: ${test}, type: ${typeof  test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof  nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof  x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1===symbol2); //false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof  symbol1}`);

// object, real-life object, data structure
const JH = { name: '장혁', age: 28 };
JH.age = 30; // 가능!

console.log('--------------------------------------------')
// 5. Dynamic typing: dynamically type language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);