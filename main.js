const { createApp, ref, computed } = Vue;
createApp({
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
}).mount("#app");
