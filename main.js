const { createApp, ref, computed } = Vue;
const app = createApp({
  setup() {
       const cart = ref(0);
       const premium = ref(true)
       const details = ref("This are the high price sock?");
        return {
      cart,
      premium,
      details
    };
  },
})
app.component('product-display',productDisplay)
app.component('product-details',productDetails)
app.mount('#app')
