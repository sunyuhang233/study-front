app.component('product-list', {
    props: {
        list: {
            type: Array,
            required: true,
        },
    },
    template: `
        <h1>商品列表</h1>
       <div v-for="(item,index) in list" :key="index">
            <div class="list">
                <span class="number">{{index+1}}</span>
                <img :src="item.img" alt="">
                <span class="left">名称:{{item.name}}</span>
                <span class="left">价格:{{item.price}}元</span>
                <span class="left">产地:{{item.city}}</span>
                <button class="right" @click="deleteItem(index)">-</button>
            </div>
        </div>
    `,
    methods: {
        deleteItem(index) { 
           this.$emit('delete-item', index);
        }
    }
});
