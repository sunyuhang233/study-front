
// 比较运算符主要用于比较两个值的大小关系，特别需要注意的是严格相等与相等的区别。
// == 和 === 的区别
// == 会进行类型转换，=== 不会进行类型转换
// == 不比较类型，只比较值
// === 既比较类型，也比较值


console.log(3 == '3'); // true 3和'3'的值相等  字符串和数字比较时，会将字符串转换为数字

console.log(2 == 1); // false

var obj1 = {
    a:1
}

var obj2 = obj1;

console.log(obj1 == obj2); // true


console.log(1 == true); // true

console.log(0 == false); // true

console.log(null == undefined); // true


console.log(1 != 2); // true


console.log(1 === '1'); // false  1和'1'的值和类型都不相等

console.log(null === undefined); // false


console.log(2 > 1); // true

console.log(2 >= 2); // true


console.log(1 < 2); // true
console.log(0 <= 1); // true


console.log('a' > 'b'); // false

console.log('aaa' > 'aaaaaaaa'); // false


console.log('aaaz'>'aaaaaaaaaaaa'); // true 两个操作数前五位都是 a，所以第六位才能决定出结果。
