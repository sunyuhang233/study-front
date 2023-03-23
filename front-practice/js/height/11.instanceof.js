// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。(MDN)
// instanceof 是另一种检测类型的手段，但通常用于检测对象之间的关系，如某个对象是不是由某个构造函数生成的。
// 对象 instanceof 构造函数;
/**
 * instanceof 可以用来检测对象和构造函数之间的关系，其检测的原理是左操作数的原型上是否有右操作数的 prototype 属性，所以要注意一些检测的特殊情况
 */

function people(name) {
    this.name = name;
}

var p1 = new people("张三");

console.log(p1 instanceof people); // true
console.log(p1 instanceof Object); // true