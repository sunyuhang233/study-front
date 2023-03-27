// 函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起构成闭包（closure）。也就是说，闭包可以让你从内部函数访问外部函数作用域。在 JavaScript 中，每当函数被创建，就会在函数生成时生成闭包。

// 闭包
var fn = function () {
    var number = 0;
    return function () {
        number++;
        console.log(number);
    }
}

var f = fn();
f();
f();
f();


// 模拟私有属性
// 在 JavaScript 中是没有私有属性特性的，利用闭包来隐藏变量，就可以模拟出私有属性的效果。
var counter = (function() {
  var count = 0;
  return {
    increment: function() {
      count++;
      return count;
    },
    zero: function() {
      count = 0;
      return count;
    },
    get value() {
      return count;
    },
  };
})();

counter.increment();
console.log(counter.value); // 输出：1
counter.increment();
console.log(counter.value); // 输出：2

console.log(counter.count); // 输出：undefined


// 回调函数几乎都用到了闭包的特性
// 回调函数通常会用到上层作用域的变量，然后在某一情况下进行调用。
var fn = function(cb) {
  console.log('异步操作开始');
  setTimeout(function() {
    console.log('异步操作结束');
    cb();
  }, 1000);
};

var obj = {
  flag: false,
};

fn(function() {
  obj.flag = true;
  console.log(obj);
});

