// 作用域即代码片段的有效范围，这里的代码片段可以是一个函数、一个变量等。

// 1.全局作用域 在全局环境下定义的变量、函数，都属于全局作用域的范围，也就是这些变量、函数在任何地方都能被访问。

var number = 1;
function fn() { 
    console.log("我是一个全局函数");
    console.log("访问全局下的"+number);
}
fn()

// 2.局部作用域 在函数内部定义的变量、函数，都属于局部作用域的范围，也就是这些变量、函数只能在函数内部被访问。

function fn1() {
    var fn2 = function () { 
        console.log("我是一个局部函数");
    }
    var str="我是一个局部变量";
    fn2();
    console.log(str);
}
 
fn1();

// 3.eval 的作用域
// var storeEval = eval;
// (function() {
//   storeEval('var number1 = 1;');
//   eval('var number2 = 2');

//   console.log('自执行匿名函数内输出：', number2);
// })();
// console.log(number1); // 输出：1
// console.log(number2); // 输出：ReferenceError: number2 is not defined

// 4.作用域链
// var num3 = 1;
// function fn3() {
//     console.log(num3);
//     var str="我是一个局部变量";
// }
// fn3();
// console.log(str); // 输出：ReferenceError: str is not defined

// 通常情况下，内层作用域拥有访问上层作用域的能力，而外层无法访问到内层的作用域。
var number1 = 1;
var fn1 = function() {
  var number2 = 2;
  var fn2 = function() {
    var number3 = 3;
    var fn3 = function() {
      console.log('fn3 内的输出：');
      console.log(number1);
      console.log(number2);
      console.log(number3);
    }

    fn3();
  };
  fn2();
}

fn1();


// 5.利用函数作用域进行封装
// 函数作用域最常用的场景之一就是隔离作用域。 因为函数有自己的作用域，所以很多库、框架在实现的时候都会把内容写在一个函数中
(function() {
  var config = {};
  var fn = function() {
    // ...
  };
  window.$ = fn;
  window.jQuery = fn;
})();
