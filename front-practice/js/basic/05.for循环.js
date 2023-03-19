//  基本语法
/**
 * for (初始语句; 条件; 条件为真值时执行的语句) {
  // 循环体
}
 */


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// for in 循环 用于对象
var obj = {
    name: '张三',
    age: 18,
    sex: '男'
}


for (const key in obj) {
  console.log("key: " + key + ", value: " + obj[key]);
}

// for of 循环 用于数组

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of arr) {
    console.log(num);
}

// 无限循环
// for (;;) {}


var num = 17;
var flag = false;
var len;
var i;

for (i = 2, len = 17 -1; i <= len; i++){
    if (num % i == 0) {
        flag = true;
        break;
    }
}

if (flag) { 
    console.log(num + '不是质数');
} else {
    console.log(num + '是质数');
}

// 输出："17是质数"


//计算阶乘

var num = 4;
var result = 1;

for (i = num; i > 1; i--){
    result *= i;
}

console.log(result); // 输出：24