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
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const varients = ref([
            {id: 2234 , color: 'green'},
            {id: 2235 , color: 'blue'}

        ])
        return{
            product,
            productDetail,
            image,
            productLink,
            inStock,
            inventory,
            onSale,
            details,
            varients

        }
    }
}).mount('#app')