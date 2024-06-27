const productDisplay = {
    template: `
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
          <p>Shipping: {{shipping}}</p>        
          <p v-if="onSale">The product is onSale</p>
          <p v-else>The product is not sale</p>
           <product-details :details></product-details>
          <div v-for ="(variant,index) in variants" :key = "variant.id" @mouseover ="updateVariant(index)" class="color-circle" :style="{backgroundColor: variant.color}">
              {{variant.color}}
          </div> 
          <p><span v-for ="size in sizes" >{{size}}</span></p>
          <button class="button" :disabled='!inStock'@click="addToCart":class="{disabledButton: !inStock}">Add to cart</button>
          <button class ="button" @click="toggleInStock">toggleStock</button>
          <review-form></review-form>
          
        </div>
       `,
    props: {
      premium: Boolean,
      details: Array,
    },
    setup(props, {emit}) {
      const shipping = computed(()=>{
          if (props.premium){
              return 'Free'
          } else {
              return 30
          }
      })
      const product = ref("Boots");
      const brand = ref("SE 311");
  
      const productDetail = ref("This is boots");
      const productLink = ref("https://www.camt.cmu.ac.th/index.php/th/");
  
      const inventory = ref(7);
      const variants = ref([
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
          onSale: true,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
          onsale: false,
        },
      ]);
      const selectedVariant = ref(0);
      function updateVariant(index) {
        selectedVariant.value = index;
      }
      const sizes = ref(["S", "M", "L"]);
      const cart = ref(0);
      function addToCart() {
        emit('add-to-cart',variants.value[selectedVariant.value].id)
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
        return brand.value + "" + product.value + "Is on sale";
      });
      const image = computed(() => {
        return variants.value[selectedVariant.value].image;
      });
      const inStock = computed(() => {
        return variants.value[selectedVariant.value].quantity;
      });
      const onSale = computed(() => {
        return variants.value[selectedVariant.value].onSale;
      });
      return {
        productDetail,
        image,
        productLink,
        inStock,
        inventory,
        onSale,
        variants,
        sizes,
        cart,
        title,
        addToCart,
        updateImage,
        toggleInStock,
        updateVariant,
        onSaleTitle,
        shipping,
      };
    },
  };
  