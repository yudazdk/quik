import React from "react";
import ProductImage from './ProductImage';

export default function CartItem({item}){
	const {imgFile, name} = item.product;
	// console.log('CartItem', item)

	return (
		<div className="fl w-50 w-25-m w-20-l pa2">
			<ProductImage imgFile={imgFile} name={name} />
			<p>total: {item.total}</p>
	</div>
	)
}