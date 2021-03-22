import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Products from "./Products";

export default function ProductsSection({actions, products}) {
  // console.log('actions', actions);
  // console.log('products', products);

  useEffect(() => {
    actions.fetchData()
  }, [actions])

  return (
    <Container component="main">
      <CssBaseline />
      <article>
        <h2 className="f3 fw4 pa3 mv0">Products</h2>
        <div className="cf pa2">
          <Products items={products} />
       </div>
      </article>
    </Container>
  );
}

ProductsSection.propTypes = {
  // products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export { ProductsSection };
