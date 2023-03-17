app.component('t-object', {
    props: {
        object: {
            type: Object,
            required: true
        }
    },
    template: `
        <h1>苹果介绍</h1>
        <div>
           <div class="image">
            <img :src="object.img" alt="">
           </div>
            <div class="item">苹果名称:{{object.name}}</div>
            <div class="item">苹果产地:{{object.city}}</div>
            <div class="item">苹果价格:{{object.price}}元</div>
        </div>
    `
})