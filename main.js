const { createApp, ref } = Vue
createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const productDetail = ref('This is boots')
        return{
            product,
            productDetail,
            image
        }
    }
}).mount('#app')