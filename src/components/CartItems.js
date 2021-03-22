import React from "react";
import CartItem from './CartItem';

export default function CartItems({items}){
	if (!items || !items.length) return null;
	// console.log('CartItems', items);

	return items.map(item => {
		return (
			<CartItem item={item} {...item} key={item.id} />
		)
	})
}