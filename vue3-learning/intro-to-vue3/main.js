const app = Vue.createApp({
    data() {
        return {
            name: 'first',
            x: true,
            y: false,
            num: 100,
            num1: 1000,
            apple: {
                name: '红富士',
                price: 6,
                city: '中国',
                img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F6280a9d4-f0fe-408d-a4d5-2e645df2320c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1681635831&t=298b12b9f9d187fd5dbf6ea102c61917',
            },
            goods: [
                {
                    name: '苹果',
                    price: 3,
                    city: '山东',
                },
                {
                    name: '香蕉',
                    price: 4,
                    city: '广东',
                },
                {
                    name: '桃子',
                    price: 5,
                    city: '广西',
                },
                {
                    name: '梨子',
                    price: 6,
                    city: '广东',
                },
                {
                    name: '橘子',
                    price: 4,
                    city: '四川',
                },
            ],
        };
    },
    computed: {},
    methods: {
        handleOpen(data) {
            this.goods.splice(data, 1);
            alert(`子组件传递编号${data},父组件删除成功`);
        },
    },
});
