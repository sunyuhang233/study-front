// RegExp 构造函数创建了一个正则表达式对象，用于将文本与一个模式匹配。
//正则表达式字面量需要使用 / 包裹，通常字面量会用于写死固定的正则表达式，如果需要动态生成，都会使用构造函数的方式

//  创建实例
var regexp = new RegExp(/^a*$/);
console.log(regexp.test('aaaa')) // true
console.log(regexp.test('a')); // true
console.log(regexp.test('a1')); // false
//上面这个例子创建了一个规则为从开头到结尾必须是任意个a正则表达式。
// test 方法可以用来校验某个字符串能否使用这个正则表达式匹配到目标。

// 传递字符串的时候还能传递第二个参数，作为正则表达式的符号，部分文献也称其为描述符。
var regexp1 = new RegExp('^a*$', 'i');
var regexp2 = new RegExp('^a*$');

var str = 'AAAAA';

console.log(regexp1.test(str)); // 输出：true
console.log(regexp2.test(str)); // 输出：false
//符号 i 表示忽略大小写，所以 regexp2 无法在 str 中匹配到值。

// 如果需要多个符号，则将多个符号放在一起作为字符串即可。
var regexp3 = new RegExp('^a*$', 'gi');


//字面量
var regexp1 = /^a*$/g;
var regexp2 = /^a*$/ig;

//  符号
//  g 全局匹配
//  i 忽略大小写
//  m 多行匹配

var regexp1 = /a/g;
var regexp2 = /a/;

var str = 'abcdeabcde';

console.log(str.match(regexp1)); // 匹配到两个 a
console.log(str.match(regexp2)); // 只匹配到一个，并返回相应信息

var regexp1 = /apple/i;
var regexp2 = /apple/;

var str = 'AN APPLE A DAY KEEPS THE DOCTOR AWAY.';

console.log(str.match(regexp1)); // 可以找到一个
console.log(str.match(regexp2)); // 找不到 输出：null


