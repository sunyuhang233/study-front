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
                    img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F6280a9d4-f0fe-408d-a4d5-2e645df2320c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1681635831&t=298b12b9f9d187fd5dbf6ea102c61917"
                },
                {
                    name: '香蕉',
                    price: 4,
                    city: '广东',
                    img:"https://ts1.cn.mm.bing.net/th/id/R-C.ffd844ec624f872acc363d789c675eb5?rik=7YlA4ygvQBLtLw&riu=http%3a%2f%2fpic20.nipic.com%2f20120407%2f1369025_122031519000_2.jpg&ehk=JrTz0S82WtuYhSmhzTempXU32h7TmV3lw8kND0lZiZA%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    name: '桃子',
                    price: 5,
                    city: '广西',
                    img:"https://tse1-mm.cn.bing.net/th/id/OIP-C.e2WIONWEZwxFCmhmbB_wqQHaEo?pid=ImgDet&rs=1"
                },
                {
                    name: '梨子',
                    price: 6,
                    city: '广东',
                    img:"https://ts1.cn.mm.bing.net/th/id/R-C.00061771a9c5e30b9999547893b61f75?rik=UsMHkO3Av4at0Q&riu=http%3a%2f%2fpic.52112.com%2f180327%2f180327_109%2f2yqaVu1VaS_small.jpg&ehk=PcK8aj88Pjz4%2f4gVfkVRyjZcYrNe2gjU8ZDPJC2FafY%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    name: '橘子',
                    price: 4,
                    city: '四川',
                    img:"https://img.zcool.cn/community/0114b15dea2e39a801209568c5ced3.jpg@1280w_1l_2o_100sh.jpg"
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
