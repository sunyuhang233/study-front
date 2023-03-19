// 逻辑运算符通常用于布尔型（逻辑）值。这种情况下，它们返回一个布尔值。然而，&& 和 || 运算符会返回一个指定操作数的值，因此，这些运算符也用于非布尔值。这时，它们也就会返回一个非布尔型值。 JavaScript 中有与&&、或||、非!三种逻辑运算符，用于处理值之间的逻辑关系，当需要多个条件的相互关系来决定结果的时候，就会用到逻辑运算符。

// 1.逻辑与（&&）
// 逻辑与（&&）运算符（称为逻辑乘法）是一个二元运算符，如果两个操作数都是真值，则返回真值。否则，返回假值。
// 表达式1 && 表达式2
//如果表达式1的结果成立则返回表达式2的结果，否则返回表达式1的结果

console.log(true && true); // true

console.log(true && false); // false

console.log(false && true); // false

var score = 60;
if (score >= 60 && score < 70) {
    console.log('及格');
} else {
    console.log('不及格');
}

// 2.逻辑或（||）
console.log(true || true); // true

console.log(true || false); // true

console.log(false || true); // true

console.log(false || false); // false

var score = 60;
if (score >= 60 || score < 70) {
    console.log('及格');
} else {
    console.log('不及格');
}

// 3.逻辑非（！）
console.log(!true); // false
console.log(!false); // true
console.log(!0); // true
console.log(!1); // false

// 4.双层非
console.log(!!true); // true
console.log(!!false); // false
console.log(!!0); // false
console.log(!!1); // true

// 5.短路运算
//判断一个数是 2 的倍数同时又是 5 的倍数。
var num = 10;
if (num % 2 == 0 && num % 5 == 0) {
    console.log('是2的倍数又是5的倍数');
} else {
    console.log('不是2的倍数又是5的倍数');
}
