// 当一个函数被 new 运算符调用的时候，这个函数就会被称为构造函数。
//任何函数都能被 new 运算符调用，但是一般会从设计上将一个函数考虑为构造函数，提供给 new 运算符调用。

function sum(a, b) {
    this.a = a;
    this.b = b;
    return a + b;
}

var sum = new sum(1, 2);
console.log(sum); // 3

/**
 * 使用 new 运算符调用函数的时，背后有一套运行机制，这套机制说明了构造函数是怎么产生对象的。
当 new 运算符调用函数时，大致会进行以下几个操作：
1. 创建一个空对象
2. 将函数的this指向这个空对象
3. 执行函数
4. 如果函数没有指定返回值，则直接返回 this（一开始创建的空对象），否则返回指定返回值
 */

function people(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

var people = new people("张三", 18, "男");
console.log(people.name); // 张三