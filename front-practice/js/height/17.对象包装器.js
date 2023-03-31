// 对象包装器也被称为 包装器、包装对象.
// 所有包装器都是内置对象，如 Number、String、Boolean 等。


// 装箱 通常在对一个变量赋值的时候，都会直接给定一个字面量。
var str = "hello";

console.log(typeof str); // 输出：string

// 通过类型的检测，可以知道他是一个字符串。 但又可以访问到一些属性，比如 length：
console.log(str.length); // 输出：5


var string = '996 say no!';
console.log(typeof string); // 输出："string"
console.log((new String(string)).length); // 输出：11


// 拆箱 通常在对一个变量进行运算的时候，会自动将其转换为基本类型。
var obj = {
  toString: function() {
    return '996';
  },
};

console.log(
  '996' == obj,
); // 输出：true


