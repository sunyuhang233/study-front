// 逗号操作符 对它的每个操作数求值（从左到右），并返回最后一个操作数的值。(MDN)

// var 表达式3的结果 = (表达式1, 表达式2, 表达式3);

var arr = [1, 2, 3, 4, 5, 6];
var i, len;

for (i = 0, len = arr.length; i < len; i++) {
    console.log(arr[i]);
}



var person = {
  father: {
    father: {
      father: {
        mother: {
          hobby: ['吃饭', '睡觉', '打游戏'],
        }
      }
    }
  }
};
var i, len;

for (i = 0, len = person.father.father.father.mother.hobby.length; i < len; i++) {
  console.log(person.father.father.father.mother.hobby[i]);
}


var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

var i, j, len;
for (i = 0, j = arr.length - 1; arr[i]; i++, j--) {
  console.log(arr[i][j]);
}



