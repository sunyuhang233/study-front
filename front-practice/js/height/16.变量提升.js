// 变量提升是 JavaScript 在运行时的一种机制。
// 在代码被执行前，JavaScript 会做一些准备工作，其中会准备一个执行上下文，也就是代码的执行时的环境，如 绑定this、准备变量等。
// 变量提升这一特性就是在准备执行上下文时进行的，这一特性也是和执行上下文相关的最常在面试中出现的内容。

console.log(number); // 输出：undefined
var number = 1;
console.log(number); // 输出：1

// 函数变量提升
fn("nb233")

function fn(a) {
    console.log(a);
}