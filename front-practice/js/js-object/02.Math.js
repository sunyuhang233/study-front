// Math 是一个内置对象， 它具有数学常数和函数的属性和方法

// Math.floor() 返回小于或等于一个给定数字的最大整数。 Math.floor就是对一个数进行向下取整
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4
console.log(Math.floor(4.0)); // 4


// Math.ceil() 函数返回大于或等于一个给定数字的最小整数。 遇5进1
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.0)); // 4

// Math 下的 random 方法调用后返回一个大于等于零且小于一的随机数，即区间 [0, 1) 。
// // 随机数区间：[下限, 上限]
// Math.floor(Math.random() * 上限 + 下限);
console.log(Math.random()); // 0.12345678901234567
console.log(Math.random()); // 0.12345678901234567


// 随机数0-100
console.log(Math.random() * 100); // 12.345678901234567
// 取整1-100  
console.log(Math.floor(Math.random() * 100 + 1)); // 12

//数学常量
var e = Math.E;
var pi = Math.PI;
console.log(e); // 2.718281828459045
console.log(pi); // 3.141592653589793



