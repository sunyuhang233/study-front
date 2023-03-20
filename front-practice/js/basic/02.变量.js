var number = 999;
console.log(number);

var result = 0;
console.log(result);

var result = 2 + 3;
console.log(result);

var demo = number + result + 1;
console.log(demo);

var str = 'hello world';
console.log(str);

str = 'hello javascript';
console.log(str);

// 这是两个不同的变量
var firstName = 'Hello';
var firstname = 'hello';
console.log(firstName, firstname);

// 变量的默认值
var num;
console.log(num);

// 同时声明多个变量
var num1 = 1,
    num2 = 2,
    num3 = 3;
console.log(num1, num2, num3);


// 变量在 window 上
// var number = 996;

// console.log(number); // 输出：996
// console.log(window.number); // 输出：996



// 常量
var CONFIG = {};

Object.defineProperty(CONFIG, 'DB_ACCOUNT', {
  value: 'root',
  writable: false,
});

console.log(CONFIG.DB_ACCOUNT); // 输出：root

CONFIG.DB_ACCOUNT = 'guest';

console.log(CONFIG.DB_ACCOUNT); // 因为不可被改写，所以输出：root



// Object.defineProperty(window, 'DB_ACCOUNT', {
//   value: 'root',
//   writable: false,
// });

// console.log(DB_ACCOUNT); // 输出：root

// DB_ACCOUNT = 'guest';

// console.log(DB_ACCOUNT); // 因为不可被改写，所以输出：root



// var define = function(name, value) {
//   Object.defineProperty(window, name, {
//     value: value,
//     writable: false,
//   });
// };

// define('DB_ACCOUNT', 'root');
// define('DB_PASSWORD', 'root');