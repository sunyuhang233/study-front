const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A warm fuzzy pair of socks.',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.javascriptc.com/vue3js/guide/installation.html#cdn',
            inStock: true,
            inventory: 10,
            details: ['50% cotton', '30% wool', '20% polyester'],
            totalTime: 100,
            course: [
                {
                    name: "后端工程化开发",
                    author: "许莫淇",
                    url: "https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/e81eb0929b869d2098cb441da709ae66.jpeg?x-oss-process=style/s300x300",
                    level: "软件2242 Web2班",
                    avatar: "https://public-cdn-oss.mosoteach.cn/avatar/2020/01/a2f12c73eed9ee74b87f8f05865a8d3b.jpg?v=1579922683&x-oss-process=style/s300x300",
                    isShow: true,
                    time:"2023-03-01"
                }, {
                    name: "前端工程化开发",
                    author: "许莫淇",
                    url: "https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/effaea97669cecb86c6b9e9d2dce54cd.jpg?x-oss-process=style/s300x300",
                    level: "软件2242 Web2班",
                    avatar: "https://public-cdn-oss.mosoteach.cn/avatar/2020/01/a2f12c73eed9ee74b87f8f05865a8d3b.jpg?v=1579922683&x-oss-process=style/s300x300",
                    isShow: true,
                     time:"2023-03-07"
                }, {
                    name: "Web应用开发",
                    author: "许莫淇",
                    url: "https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/319aa0a5a02386312000d5df99aa1a9d.jpeg?x-oss-process=style/s300x300",
                    level: "软件2242 Web2班",
                    avatar: "https://public-cdn-oss.mosoteach.cn/avatar/2020/01/a2f12c73eed9ee74b87f8f05865a8d3b.jpg?v=1579922683&x-oss-process=style/s300x300",
                    isShow: true,
                     time:"2023-03-05"
                },
                {
                    name: "游亦有道之旅游文化",
                    author: "刘畅",
                    url: "https://public-cdn-oss.mosoteach.cn/mssvc/cover/2019/11/0a349326aa36862dda4d60b323396a6e.jpg?x-oss-process=style/s300x300",
                    level: "海门公选课",
                    avatar: "https://public-cdn-oss.mosoteach.cn/avatar/2018/63/62d0daf7e64b0e7da8eb41009e56dc31.jpg?v=1537007710&x-oss-process=style/s300x300",
                    isShow: false,
                     time:"2022-03-01"
                }
            ]
        };
    },
    methods: {
        addToCart() {
            // 判断分钟 是否在10分钟内

            // let clock = setInterval(() => {
            //     this.totalTime--
            //     this.inStock = false
            //     if(this.totalTime <= 0) {
            //         clearInterval(clock)
            //         this.inStock = true
            //         this.totalTime = 10
            //     }
            // }, 1000)

            setInterval(() => {
                let miniute = new Date().getSeconds();
                this.totalTime--;
                this.inStock = false;
                if (miniute < 10) {
                    this.inStock = true;
                    this.totalTime = 10;
                    clearInterval(miniute);
                }
                if (this.totalTime <= 0) {
                    this.totalTime = 1000;
                }
            }, 1000);


        },
    },
});
