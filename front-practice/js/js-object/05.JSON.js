/**
 * JSON 对象包含两个方法: 用于解析 JavaScript Object Notation (JSON) 的 parse() 方法，以及将对象/值转换为 JSON字符串的 stringify() 方法。除了这两个方法, JSON 这个对象本身并没有其他作用，也不能被调用或者作为构造函数调用。
 * JSON 几乎是目前前后端交互最常用的数据格式，所以 JSON 对象使用的频率也很高。
 * 在使用 JSON.parse 反序列化的时候，如果 JSON 格式不符合规范，是会报错的，日常开发中建议封装一层 JSON 的方法，将错误集中处理，方便定位与上报错误。
 */

// JSON.parse() 方法用于将一个 JSON 字符串转换为对象。
// JSON.stringify() 方法用于将一个 JavaScript 值(对象或者数组)转换为一个 JSON 字符串。

// JSON.parse() 方法
var str = '{ "name": "alibaba", "age": 12, "info": { "locate": "浙江" } }';
var obj = JSON.parse(str);
console.log(obj); // 输出：{ name: 'alibaba', age: 12, info: { locate: '浙江' } }


var str = '{ "name": "alibaba", "age": 12, "info": { "locate": "浙江" } }';
var user = JSON.parse(str, function (key, value) {
    console.log(key, value);
    return value;
})



// JSON.stringify() 方法
var user = {
    name: '小明',
    age: 14,
    skill: ['HTML', 'Java'],
};
var str = JSON.stringify(user);
console.log(str); // 输出：{"name":"小明","age":14,"skill":["HTML","Java"]}

var user = {
    name: '小明',
    age: 14,
    skill: ['HTML', 'Java'],
};

var json = JSON.stringify(user, function(key, value) {
    console.log(key, value);
    return value;
});
console.log(json);



var obj = [
    {
        path: '/',
        component: 'function() {}',
        children: [
            {
                path: 'note',
                component: 'function() {}',
            },
            {
                path: 'friends',
                component: 'function() {}',
            }
        ]
    },
    {
        path: '*',
        component: 'function() {}',
    }
];

var json1 = JSON.stringify(obj, null);
var json2 = JSON.stringify(obj, null, 2);
var json3 = JSON.stringify(obj, null, '*-*');

console.log(json1); // 没有格式
console.log(json2); // 使用两个空格控制的缩进
console.log(json3); // 使用 *-* 控制的缩进
// 传入参数后就会将处理后的 JSON 字符串进行格式化，缩进部分根据传入的参数值决定。


//深拷贝 根据结果可以看到新的对象修改，没有影响到原对象，两者之间不存在引用关系。
var obj = {prop: 'value'};
var obj1=JSON.parse(JSON.stringify(obj));
obj1.test=2;
console.log(obj1); // { prop: 'value', test: 2 }
console.log(obj); // { prop: 'value' }

// 如果对象中存在包装对象，则在转换过程中会变成原始值。
var obj = {
    string: new String('A promise is a promise.'),
    number: new Number(996),
};
var result = JSON.stringify(obj);
console.log(result); // 输出："{"string":"A promise is a promise.","number":996}"

// 如果转换的对象或者对象下的属性存在 toJSON 方法，那么这个方法的返回值会作为转换结果
var user = {
    nickname: 'joker',
    toJSON: function() {
        return 'hahahahahahaha';
    },
}
var result = JSON.stringify(user);
console.log(result); // 输出："hahahahahahaha"

//undefined、ES6 中的 symbol 值、函数在转换过程中都会被忽略，当然函数如果具有 toJSON 方法依然会优先选择 toJSON 方法的结果
var fn = function() {};
fn.toJSON = function() {return '我是函数'};
var result = JSON.stringify({
    a: fn,
    b: Symbol(1),
    c: undefined,
    d: function() {},
});
console.log(result); // 输出："{"a":"我是函数"}"


// 在 ES6 中，symbol 可以作为对象的属性值，但在处理的时候都会被忽略
var symbol = Symbol();
var obj = {
    prop1: 'value1',
    [symbol]: 'value2',
};
console.log(obj);
var result = JSON.stringify(obj);
console.log(result); // 输出：{"prop1":"value1"}

// null、正负 Infinity、NaN 在序列化时都会被当作 null 。
var obj = {
    null: null,
    infinity1: +Infinity,
    infinity2: -Infinity,
    NaN: NaN,
};
var result = JSON.stringify(obj);
console.log(result); // 输出：{"null":null,"infinity1":null,"infinity2":null,"NaN":null}


