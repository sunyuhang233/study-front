// 加法（+）
var num1 = 1;
var num2 = 2;

console.log(num1 + num2); // 3


var str1 = "hello";
var str2 = "world";
console.log(str1 + str2); // helloworld



// 减法（-）

var num1 = 10;
var num2 = 5;
console.log(num1 - num2); // 5



// 乘法（*）
var num1 = 10;
var num2 = 5;
console.log(num1 * num2); // 50


// 除法（/）
var num1 = 10;
var num2 = 5;
console.log(num1 / num2); // 2


// 取余（%）
var num1 = 10;
var num2 = 3;
console.log(num1 % num2); // 1

// 幂
console.log(2 ** 3); // 8  2的3次方


// 自增（++）
var num1 = 10;
num1++;
console.log(num1); // 11

// ++自增
var num1 = 10;
var num2 = ++num1;
console.log(num1); // 11


// 自减（--）
var num1 = 10;
num1--;
console.log(num1); // 9


// --自减
var num1 = 10;
var num2 = --num1;
console.log(num1); // 9


// 优先级
var res = 1 + 2 / 3 * 4 % 5 ** 7; // 1+(2/(3*(4 % ( 5 ** 7))))
console.log(res);

