const { createApp, ref } = Vue
createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const productDetail = ref('This is boots')
        const productLink = ref('https://www.camt.cmu.ac.th/index.php/th/')
        const inStock = ref(false)
        const inventory = ref(7)
        const onSale = ref(true)
        return{
            product,
            productDetail,
            image,
            productLink,
            inStock,
            inventory,
            onSale

        }
    }
}).mount('#app')