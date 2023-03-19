// Function 构造函数创建一个新的 Function 对象。直接调用此构造函数可用动态创建函数，但会遭遇来自 eval 的安全问题和相对较小的性能问题。

// 语法
// var fn = new Function(函数参数1, 函数参数2, ..., 函数参数n, 函数体);

var fn = new Function('a', 'b', 'return a + b');
var result = fn(1, 2);

console.log(result); // 3

// 相当于
var fn1 = function (a, b) {
    return a + b;
};

console.log(fn1(1, 2)); // 3

// 与常规方式创建函数的区别
var num = 20;

function fn() {
    var num = 10;

    var func = new Function('console.log(num)');

    console.log(num);

    func();
}

fn();

// 输出：
//  10
//  20

// 使用场景
/**
 * 使用 Function 来创建函数是比较麻烦的，照道理讲不会有小伙伴会喜欢用这种方式创建函数。
Function 的使用主要场景与 eval 类似，用于动态的运行代码。
如在线的代码解析器就可以配合 Function 完成。
 */

// var run = function(code, callback) {
//   window._callback = callback;

//   var fn = Function(code + ';_callback()');

//   fn();
// };


// run('console.log("动态执行的代码");', function() {
//   console.log('代码执行后做的事');
// });

var run = function (code, callback) { 
    console.log('code', code);

    callback();
}

run('console.log("动态执行的代码");', function () {
    console.log('代码执行后做的事');
})
 
// 输出： code console.log("动态执行的代码"); 代码执行后做的事



