//  用于调用函数表达式
// 立即执行函数
// void function() {
//   alert('马上执行！冲冲冲！');
// }();


// 如果需要获取到函数的返回值，就不能使用 void。
var num1 = 1;
var num2 = 2;

var result = void function(number1, number2) {
  return [number1 + number2, number1 * number2];
}(num1, num2);

result.forEach(function(res) {
  console.log(res);
});



// 内联在 HTML 中，阻止 a 标签的默认事件
{/* <a href="javascript: void;">跳转！</a>
<a href="javascript: void 0;">跳转！</a>
<a href="javascript: void (0);">跳转！</a> */}


// 这种情况如果不加 void，页面内容就会发生改变，因为 log 函数存在非 undefined 的返回值。
{/* <script>
  function log(who) {
    console.log('点击了：' + who);

    return who;
  }
</script>

<a href="javascript: void log('add');">添加</a>
<a href="javascript: void log('update');">修改</a>
<a href="javascript: void log('delete');">删除</a> */}