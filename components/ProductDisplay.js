const app = createApp({

})
app.component('product-display',productDisplay)
app.mount('#app')
const productDisplay = {
    template:`
    <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <!-- image goes here -->
            <img :src="image" :class="{outOfStockImage :!inStock}" />
          </div>
        </div>
      </div>
      <div class="product-info">
        <h1 v-if ="onSale"><a :href="productLink">{{onSaleTitle}}</a></h1>
        <h1 v-else ="onSale"><a :href="productLink">{{title}}</a></h1>
        <p>{{productDetail}}</p>
       
        <p v-if="!inStock">Out of Stock</p>
                <p v-else-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory > 0">Low Stock</p>
                <p v-else>Out of Stock</p>
        <p v-if="onSale">The product is onSale</p>
        <p v-else>The product is not sale</p>
        <ul>
            <li v-for="detail in details">{{detail}}</li>
        </ul>
        <div v-for ="(variant,index) in variants" :key = "variant.id" @mouseover ="updateVariant(index)" class="color-circle" :style="{backgroundColor: variant.color}">
            {{variant.color}}
        </div> 
        <p><span v-for ="size in sizes" >{{size}}</span></p>
        <button class="button" :disabled='!inStock'@click="addToCart":class="{disabledButton: !inStock}">Add to cart</button>
        <button class ="button" @click="toggleInStock">toggleStock</button>
      </div>
     `,
     setup() {
        const product = ref("Boots");
        const brand = ref("SE 311");
       
        const productDetail = ref("This is boots");
        const productLink = ref("https://www.camt.cmu.ac.th/index.php/th/");
       
        const inventory = ref(7);
        const details = ref(["50% cotton", "30% wool", "20% polyester"]);
        const variants = ref([
          {
            id: 2234,
            color: "green",
            image: "./assets/images/socks_green.jpg",
            quantity: 50, onSale:true
          },
          {
            id: 2235,
            color: "blue",
            image: "./assets/images/socks_blue.jpg",
            quantity: 0, onsale:false
          },
        ]);
        const selectedVariant = ref(0);
        function updateVariant(index) {
          selectedVariant.value = index;
        }
        const sizes = ref(["S", "M", "L"]);
        const cart = ref(0);
        function addToCart() {
          cart.value += 1;
        }
        function updateImage(varientImage) {
          image.value = varientImage;
        }
        function toggleInStock() {
          inStock.value = !inStock.value;
        }
        const title = computed(() => {
          return brand.value + "" + product.value;
        });
        const onSaleTitle = computed(() => {
            return brand.value + "" + product.value +"Is on sale";
          });
        const image = computed(() =>{
            return variants.value[selectedVariant.value].image
        })
        const inStock = computed(() =>{
            return variants.value[selectedVariant.value].quantity
        })
        const onSale = computed(() =>{
            return variants.value[selectedVariant.value].onSale
        })
        return {
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
          title,
          addToCart,
          updateImage,
          toggleInStock,
          updateVariant,
          onSaleTitle
        };
      },
}