import React from "react";
import Button from "@material-ui/core/Button";
import ProductImage from './ProductImage';


export default function({addItem, removeItem, imgFile, name, barcode, itemPrice, amount, product}){
	amount = amount || 0;

	return (
		<div className="product-wrap fl w-50 w-25-m w-20-l pa2">
			<div>
				<div className="f6 description">
					<div>{name}</div>
					<div className="ml0 black truncate w-100">price: {itemPrice}</div>
					<div>{barcode}</div>
				</div>
				<ProductImage imgFile={imgFile} name={name} />

			</div>

			<div className="product-button-wrap">
				<Button onClick={() => addItem({product})}>+</Button>
				<span>{amount}</span>
				<Button onClick={() => removeItem({product})}>-</Button>
			</div>
	</div>
	)
}