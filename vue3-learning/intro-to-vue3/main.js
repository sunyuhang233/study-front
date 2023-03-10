const app = Vue.createApp({
    data() { 
        return {
            product: 'Socks',
            description: "A warm fuzzy pair of socks.",
            image: './assets/images/socks_green.jpg',
            url: "https://www.javascriptc.com/vue3js/guide/installation.html#cdn",
            inStock: true,
            count:100
        }
    }
})
