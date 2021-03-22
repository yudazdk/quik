import React from "react";
import Container from "@material-ui/core/Container";
import CartItems from './CartItems'

export default function CartSection({items, totalPrice}) {
  // console.log('CartSection', items)
  return (
    <Container component="main">
      <article>
        <div className="cf pa2">
          <h2>CartSection</h2>
          <CartItems items={items} />
       </div>
       <div>
        <h2>Total Price: {totalPrice}</h2>
       </div>
      </article>
    </Container>
  );
}
