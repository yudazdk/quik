import { ADD_ITEM, REMOVE_ITEM } from "../constants/ActionTypes";
import { getItemPrice } from "../lib/utils";
import _ from 'lodash';

const initialState = {
  items: new Map(),
};

export default function cartReducer(state = initialState, action) {
	const { type, payload } = action;
	var product;
  switch (type) {
    case ADD_ITEM:
			product = payload.product;
      console.log("ADD_ITEM", action);
      return {
				...state,
				items: setCartItems(state.items, product, 1)
			};

    case REMOVE_ITEM:
			product = payload.product;
      console.log("REMOVE_ITEM", action);
      return {
				...state,
				items: setCartItems(state.items, product, -1)
			};

		default:
			return state;
	}
}

class CartItem{
	constructor(product) {
		this.id = product.barcode;
		this.product = product;
		this.amount = 0;
		this.sale = this.product.sale;
		this.saleAmount = _.get(this.sale, 'amount');
		this.saleName = _.get(this.sale, 'name', '', product.name);


	}

  get total() {
    var total = 0;

    for (let i = 0; i < this.amount; i++) {
      var isDiscount = this.isDiscount(i+1);
			total += getItemPrice(this.product, false);
			if (isDiscount) {
				console.log('total isDiscoutn', isDiscount)
				total -= this.difference;
			}
		}
		console.log('total total', total)
    return Math.round(total);
  }
  get price() {
		var discount = this.isDiscount(this.amount);
		console.log('discoutn', discount);
    return getItemPrice(this.product, discount);
	}

	get difference(){
		const {sale} = this.product;
		var regularPrice = getItemPrice(this.product, false);
		var discountPrice = getItemPrice(this.product, true);
		var diff = (regularPrice - discountPrice) * sale.numOfProducts;
		return diff;
	}

  isDiscount(amount) {
		const {sale} = this.product;
		var limitAmount = sale.limit * sale.numOfProducts;

		console.log(this.product)

    var cond1 = amount % sale.numOfProducts === 0;
    var cond2 = amount <= limitAmount

		console.log('isDiscount', cond1, cond2)
    return cond1 && cond2
  }

	get salesNumber(){
		const { saleAmount, amount} = this;

		if (!this.sale) return this.amount;

		return Math.floor(amount/saleAmount);

	}
}
function setCartItems(map, product, change){
	var item;
	var id = product.barcode;

	if (map.has(id)) {
		item = map.get(id);
	} else {
		item = new CartItem(product)
		map.set(id, item);
	}

	var newVal = item.amount + change;

	item.amount = setAmount(item.amount, newVal, product.totalSalesUnits)

	// console.log('item', item.amount, item);
	return map;
}
function setAmount(current, newVal, max){
	if (newVal < 0) return current;
	if (newVal > max) return current;

	return newVal;
}