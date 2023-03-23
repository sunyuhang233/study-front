// delete 操作符用于删除对象的某个属性；如果没有指向这个属性的引用，那它最终会被释放。(MDN)
//delete 操作符可以删除对象的一个属性。



var people = {
    name: '张三',
}

delete people.name;


console.log(people);

// 当一个属性为不可配置的时候：
var person = {};
Object.defineProperty(person, 'age', {
  value: 17,
  writable: true,
  configurable: false,
});

delete person.age; // 返回false

console.log(person); // 输出：{age: 17}


// 在严格模式下的 delete
// 在严格模式下，delete 操作符不能删除一个不可配置的属性，否则会抛出错误。
'use strict'; // 开启严格模式
var person = {};

Object.defineProperty(person, 'age', {
  value: 17,
  writable: true,
  configurable: false,
});

delete person.age; // TypeError: Cannot delete property 'age'


// 对使用 var 声明的变量进行 delete 所以对 var 声明的变量进行 delete 操作是无效的。
var num = 1;
delete num; // 返回 false
console.log(num); // 输出：1


// 使用 delete 删除数组成员 delete 可以用于删除数组成员，并且是真正意义的删除，可以让指定的成员变成 empty 。
var numList = [1, 2, 3, 4, 5];
delete numList[2];
console.log(numList); // 输出：[1, 2, empty, 4, 5]


