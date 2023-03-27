// JavaScript 的严格模式是使用受限制的 JavaScript 的一种方式，从而隐式地退出“草率模式”。严格模式不仅仅是一个子集：这种模式有意地与普通情形下的代码有所区别。(MDN)

// 开启严格模式后，部分特性会发生改变，如 this 指向 window 的函数不再指向 window，而是变成了 undefined。
function Test() {
    "use strict";
    console.log("this",this);
}

Test(); // this undefined

// 单个 js 文件或者 script 标签的严格模式，可以通过在所有代码执行前加上 'use strict' 字符串开启。
// "use strict"
// function Test1() {
//   console.log('this:', this);
// }

// Test1(); // 输出：this: undefined


// 对一个函数开启严格模式
// function testWith() {
//   'use strict';

//   var person = {
//     name: '张三',
//     age: 24,
//   };

//   var age = 11;

//   with (person) {
//     console.log(name);
//     console.log(age);
//   }
// }

// testWith(); // 严格模式不能使用 with 语句 (with statement)

// 非严格模式
// number = 1;
// console.log(number); // 输出：1

// 严格模式
// 'use strict';
// number1 = 1;
// console.log(number1); // 输出：ReferenceError: number is not defined

// 非严格模式下

var number = 1;
eval('var number = 3; console.log(number)'); // 输出：3
console.log(number); // 输出：3

// 严格模式下
'use strict';
var number = 1;
eval('var number = 3; console.log(number)'); // 输出：3
console.log(number); // 输出：1

// 函数的 arguments 不能被修改
function fn() {
  console.log(arguments);
  arguments = 1;
  console.log(arguments);
}

fn(1, 2, 3);


// 严格模式下，函数的 arguments 不能被修改
'use strict';
function fn() {
  console.log(arguments);
  arguments = 1;
  console.log(arguments);
}
fn(1, 2, 3);


// function testThis() {
//   console.log(this);
// }
// testThis();

// 严格模式下
// 'use strict';
// function testThis() {
//   console.log(this);
// }

// testThis();

//  caller 与 arguments.callee 被禁用
function fn1() {
  console.log(arguments.callee === fn1);
}
fn1();

'use strict';
function fn2() {
  console.log(arguments.callee === fn2);
}
fn2();


var obj = {};
Object.defineProperty(obj, 'prop', {
  configurable: false,
  value: 1,
});
console.log(obj);
delete obj.prop;
console.log(obj);


'use strict';
var obj1 = {};

Object.defineProperty(obj1, 'prop', {
  configurable: false,
  value: 1,
});
console.log(obj1);
delete obj1.prop;
console.log(obj1);


// 修改 writable 为 false 的属性时会报错
var obj = {};
Object.defineProperty(obj, 'prop', {
  writable: false,
  value: 1,
});
console.log(obj.prop);
obj.prop = 2;
console.log(obj.prop);


'use strict';
var obj = {};
Object.defineProperty(obj, 'prop', {
  writable: false,
  value: 1,
});
console.log(obj.prop);
obj.prop = 2;
console.log(obj.prop);


// 非严格模式中
var num = 010;
console.log(num); // 输出：8


// 严格模式下
'use strict';
var num = 010;
console.log(num); // 输出：8


// 新增了一些不能作为变量的关键字
var yield = 1;
console.log(yield);

'use strict';
var yield = 1;
console.log(yield);
