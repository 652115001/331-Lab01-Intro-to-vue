const { createApp, ref } = Vue
createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const productDetail = ref('This is boots')
        const productLink = ref('https://www.camt.cmu.ac.th/index.php/th/')
        return{
            product,
            productDetail,
            image,
            productLink
        }
    }
}).mount('#app')