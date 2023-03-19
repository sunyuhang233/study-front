// 字符串
var str1 = "我是一个字符串";
var str2 = '我也是一个字符串';
console.log(str1, str2);



var str1 = '使\'用\'单\'引\'号';
var str2 = "使\"用\"双\"引\"号";

console.log(str1); // 输出："使'用'单'引'号"
console.log(str2); // 输出："使"用"双"引"号"

// 以下代码会报错
// var str3 = "哼"！";
// var str4 = ''哼！';


// 数字
var num1 = 5;
var num2 = .1;
var num3 = 0.5;
var num4 = -10;
var num5 = 884739573;


var base = 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;

var num1 = 99999 * base;

var num2 = -99999 * base;

console.log(num1); // 输出：Infinity
console.log(num2); // 输出：-Infinity


var num1 = 0b101; // 二进制
var num2 = 0o10; // 八进制
var num3 = 0x10; // 十六进制
console.log(num1, num2, num3); // 输出：5 8 16



// 布尔值
var bool1 = true;
var bool2 = false;
console.log(bool1, bool2); // 输出：true false


// null
var n = null;
console.log(n); // 输出：null

// undefined
var u;
console.log(u); // 输出：undefined

// 一个函数在没有指定返回值的时候，默认就会返回undefined。
function test() {
    console.log('test');
}

var t = test();
console.log(t); // 输出：undefined

// console.log('undefined' in window); // 输出：true


// 引用类型 函数 

function sum(a, b) {
    return a + b;
}

var res1 = sum(10, 20);
var res2 = sum(1, 3);
console.log(res1, res2); // 输出：30 4
// 上面这个例子就是声明了一个名为 sum 的函数，其功能就是把两个参数求和并返回。


// 引用类型 对象
var people = {
    name: "张三",
    age: 19,
    sex: "男",
    say() {
        console.log("我是" + this.name+"，今年"+this.age+"岁");
    }
}

console.log(people.name); // 输出：张三
console.log(people["age"]); // 输出：19
people.say(); // 输出：我是张三，今年19岁



var animal = {
    name: "狗",
    age: 3,
    color: {
        color1: "黑色",
        color2: "白色"
    }
}

console.log(animal.color.color1); // 输出：黑色



// 引用类型 数组
var numList = [1, 3, 4, 5, "a", "b", true];
console.log(numList); // 输出：[1, 3, 4, 5, "a", "b", true]
console.log(numList[2]); // 输出：4
// 数组遍历
numList.forEach((item, index) => {
    console.log(item, index);
})
// 数组长度
console.log(numList.length); // 输出：7


// 值类型和引用类型的区分方式
var obj1 = {
  name: '小明',
};

var obj2 = obj1;

obj2.name = '小红';

console.log(obj1.name); // 输出：小红


var val1 = 1;
var val2 = val1;

val2 = 2;
console.log(val1); // 输出：1
