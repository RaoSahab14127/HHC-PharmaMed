import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"
const WooCommerce = new WooCommerceRestApi({
    url: 'https://genmed.pk/wp-json/wc/v3',
    consumerKey: 'ck_b12bb93ce3dbf61dcb869e325eef5cc15877faf8',
    consumerSecret: 'cs_b259633ee484740298ebc68da832cbab9d97fc5d',
    version: 'wc/v3',
  });


  let data = ()=>{
  WooCommerce.get("/products")
    .then((response) => {
        
      
      return response
    })
    .catch((error) => {
      console.log(error);
    })

}


export { data};
