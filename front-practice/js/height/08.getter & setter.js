// 利用 getter/setter 可以拦截操作对象的属性，在设置属性前或获取属性前做一些事情。

// get语法将对象属性绑定到查询该属性时将被调用的函数

// set语法将对象属性绑定到设置该属性时将被调用的函数

var people = {
    name: "张三",
    age: "18",
    
    get info() {
        return this.name + "今年" + this.age + "岁";
    }
}

console.log(people.info); // 张三今年18岁


const student = {
  score: {
    english: 10,
    chinese: 99,
    math: 6,
  },

  // 总分 通过计算得出
  get totalScore() {
    var score = this.score;

    return score.english + score.chinese + score.math;
  },

  set english(value) {
    this.score.english = value;
  },

  set chinese(value) {
    this.score.chinese = value;
  },

  set math(value) {
    this.score.math = value;
  },
};
console.log(student);
student.math = 50;
student.chinese = 50;
student.english = 50;
console.log(student);
console.log(student.totalScore);



// 使用 Object.defineProperty 设置 setter/getter  参数 1：对象 2：属性 3：属性描述符
var car = {
    _price: 10000,
    _brand: "BMW",
}

Object.defineProperty(car, "car", {
    get: function () { 
       return this._price + " " + this._brand;
    }
})

console.log(car.car); // 10000 BMW

Object.defineProperty(car, "price", {
    set: function (value) { 
        if (value > 10000) {
            this._price = value;
        } else {
            console.log("价格太低");
        }
    }
})

car.price = 20000;
console.log(car.car); // 20000 BMW
