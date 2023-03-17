const app = Vue.createApp({
    data() {
        return {
            food: [
                {
                    name: "苹果",
                    price: 1.99,
                    num: 1
                },
                {
                    name: "橘子",
                    price: 2.99,
                    num: 1
                },
                {
                    name: "香蕉",
                    price: 3.99,
                    num: 1
                }
            ],
            firstName: "张",
            lastName: "三",
        }
    },
    computed: {
        total() {
            return this.food.map(item => item.price * item.num).reduce((prev, next) => prev += next, 0).toFixed(2)
        },
        fullName: {
            get() {
                return this.firstName + '-' + this.lastName;
            },
            set(newValue) {
                [this.firstName, this.lastName] = newValue.split('-');
            }
        }
      }
    })