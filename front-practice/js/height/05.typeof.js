//  typeof 操作符返回一个字符串，表示未经计算的操作数的类型。(MDN)
// typeof 经常被用来检测基础类型，但是不够准确，无法区分数组、对象、null，更精准的检测应考虑使用 Object.prototype.toString 方法。

console.log(typeof 1); // number
console.log(typeof '1'); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function () { }); // function


var num = 1;
console.log(typeof num); // number

var num1 = Number(1);
console.log(typeof num1); // number

var fn = new Function('console.log("hello world")');
console.log(typeof fn); // function


// 更精准的检测类型
Object.prototype.toString.call(1); // [object Number]
Object.prototype.toString.call('1'); // [object String]
Object.prototype.toString.call(true); // [object Boolean]
Object.prototype.toString.call(undefined); // [object Undefined]
Object.prototype.toString.call(null); // [object Null]
Object.prototype.toString.call({}); // [object Object]
Object.prototype.toString.call([]); // [object Array]
Object.prototype.toString.call(function () { }); // [object Function]