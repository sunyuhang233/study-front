// JavaScript 常被描述为一种基于原型的语言 (prototype-based language)——每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)，它解释了为何一个对象会拥有定义在其他对象中的属性和方法。(MDN)

// 什么是原型
var one = {
    empty: true
}

console.log(one.toString()); // [object Object]

// 当在访问一个对象的属性时，如果当前对象没有这个属性，就会继续往这个对象的原型对象上去找这个属性。
// 如果原型对象上没有这个属性，则继续从这个 对象 的 原型对象 的 原型对象 找这个属性。
// 这就是属性查找的机制，直到查到原型的末端，也就是 null ，就会停止查找，这个时候已经确定没有这个属性了，就会返回 undefined。


console.log(one.__proto__); // {}

// 通过 __proto__ 可以访问到这个对象的原型对象，也就是上面的 {} 。

// 可以通过相等运算符来判断调用的 toString 方法是不是原型上的方法。
console.log(one.toString == one.__proto__.toString); // true


var date = new Date();
// 通过 Object.getPrototypeOf() 方法可以获取到一个对象的原型对象。
// 通过 __proto__ 属性也可以获取到一个对象的原型对象。

var dateProto = Object.getPrototypeOf(date);

console.log(dateProto);
console.log(dateProto === date.__proto__); // 输出：true



