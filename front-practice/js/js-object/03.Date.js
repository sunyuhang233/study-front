var date = new Date();

// 获取时间戳
console.log(date.getTime());
// 第二种获取时间戳的方法
console.log(date.valueOf());

// 获取年份
console.log(date.getFullYear());

// 获取月份
console.log(date.getMonth());

// 获取日期
console.log(date.getDate());

// 获取小时
console.log(date.getHours());

// 获取分钟
console.log(date.getMinutes());

// 获取秒
console.log(date.getSeconds());

// 获取星期
console.log(date.getDay());

// 获取毫秒
console.log(date.getMilliseconds());


// 时间戳字符串
var timestamp = Date.parse('2023/03/02 11:22:33');

var date1 = new Date(timestamp);
var date2 = new Date('2023/03/02 11:22:33');
console.log(date1);
console.log(date2);
