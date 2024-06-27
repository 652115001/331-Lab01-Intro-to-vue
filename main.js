const { createApp, ref, computed } = Vue;
const app = createApp({
  setup() {
       const cart = ref([]);
       const premium = ref(true)
       const details = ref(["50% cotton","30% wool","20% plyster"])
       function removeFromCart(_id){
        for (var i = 0; i < cart.value.length; i++) {
            if(cart.value[i].id === _id){
                if(--cart.value[i].amount === 0){
                    cart.value.splice(i, 1);
                }
                return;
            }
        }
    }
       function updateCart(_id) {
        for (var i = 0; i < cart.value.length; i++) {
            if(cart.value[i].id === _id){
                cart.value[i].amount++;
                return;
            }
        }
        cart.value.push({id:_id, amount: 1})
        return;
    }
     
        return {
      cart,
      premium,
      details,
      updateCart,
      removeFromCart
      
    };
  },
})
app.component('product-display',productDisplay).component("product-details",productDetails).component("review-form",reviewForm)


app.mount('#app')
