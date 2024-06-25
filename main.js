const { createApp, ref } = Vue
createApp({
    setup(){
        const product = ref('Boots')
        const productDetail = ref('This is boots')
        return{
            product,
            productDetail
        }
    }
}).mount('#app')