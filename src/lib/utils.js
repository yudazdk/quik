import _ from 'lodash';

export function getItemPrice(product, isDiscount) {
  if (isDiscount) {
    
    return product.sale.price;
  }
  return product.price;
}

// export function getItemPrice(product){
//   var price = _.get(product, 'sale.price');
//   if (price) return price;

//   return product.price;
// }