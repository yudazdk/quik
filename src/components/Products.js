import React from "react";
import Product from '../containers/Product';

export default function Products({items}){
	if (!items || !items.length) return null;

	return items.map(product => {
		return (
			<Product product={product} {...product} key={product.barcode} />
		)
	})
}