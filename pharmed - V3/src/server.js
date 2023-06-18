import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const WooCommerce = new WooCommerceRestApi({
  url: 'https://genmed.pk/',
  consumerKey: 'ck_c0cc7b39a7003a840e40eeedfb39ab5b83818436',
  consumerSecret: 'cs_2c3db277388d9812f7ff7d514fca4392fcf085ae',
  version: 'wc/v3',
  queryStringAuth: true,
});
const data = async ( ) => {
	return await WooCommerce.get('products');
};