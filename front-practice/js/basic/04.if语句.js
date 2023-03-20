// 基本语法
// 方式1
// if (条件) {
//   // 条件满足做的事情;
// }

// // 方式2
// if (条件) 条件满足时候做的事情;

var score = 91;
if (score > 90) {
    console.log('优秀');
} else if (score > 80) {
    console.log('良好');
}

function calcArea(r) {
    if (!r) {
        return 0;
    }
    return r * r * Math.PI;
}
console.log(calcArea(10));

// 分支
/*
// 单个分支
if (条件1) {
  // 条件1满足的时候执行的代码
} else {
  // 条件1不满足的时候执行的代码
}

// 多个分支
if (条件1) {
  // 条件1满足的时候执行的代码
} else if (条件2) {
  // 条件2满足的时候执行的代码
} else if (条件3) {
  // 条件3满足的时候执行的代码
} else {
  // 条件1、条件2、条件3都不满足的时候执行
}
*/

var score = 77;

if (score >= 60) {
    console.log('及格了');
} else {
    console.log('不及格');
}

// 输出："及格了"

var score = 88;

if (score < 60) {
    console.log('不及格');
} else if (score < 80) {
    console.log('良好');
} else if (score < 90) {
    console.log('优秀！');
} else {
    // 剩下的肯定是大于等于九十的情况
    console.log('太强了！');
}

// 输出："优秀！"

var score = 0;

if (score < 60) {
    console.log('不及格');
} else if (score < 80) {
    console.log('良好');
} else if (score < 90) {
    console.log('优秀！');
} else if (score <= 100) {
    console.log('太强了！');
}

// 输出：不及格

// 判断一个数是不是偶数
function isEven(num) {
    if (num % 2 === 0) {
        console.log(num + '是偶数');
    } else {
        console.log(num + '是奇数');
    }
}

isEven(10);

//计算成人的标准体重

var sex = '男';
var height = 178;

var offset = 0;
if (sex === '男') {
    offset = 105;
} else {
    offset = 100;
}
var weight = height - offset;
console.log('身高为' + height + 'cm的' + sex + '性标准体重为' + weight + 'KG');
// 输出：身高为178cm的男性标准体重为73KG
