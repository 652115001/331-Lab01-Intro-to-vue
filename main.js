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
        const variants = ref([
            {id: 2234 , color: 'green', image: "./assets/images/socks_green.jpg"},
            {id: 2235 , color: 'blue', image: "./assets/images/socks_blue.jpg"}

        ])
        const sizes = ref([
            'S',
            'M',
            'L'
        ])
        const cart = ref(0)
        function addToCart(){
            cart.value +=1

        }
        function updateImage(varientImage){
            image.value = varientImage
        }
        function toggleInStock(){
            inStock.value = !inStock.value
        }
        return{
            product,
            productDetail,
            image,
            productLink,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes,
            cart,
            addToCart,
            updateImage,
            toggleInStock

        }
    }
}).mount('#app')