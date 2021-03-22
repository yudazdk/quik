import { connect } from "react-redux";
import * as Actions from "../actions";
import { bindActionCreators } from "redux";
import Product from "../components/Product";
import { getItemPrice } from '../lib/utils';

const mapStateToProps = (state, {barcode}) => {
  var items = state.cart.items;
  var cartItem = items.get(barcode) || {amount: 0}

  var product = state.products.items.find(item => item.barcode === barcode);
  var itemPrice = getItemPrice(product)

  // console.log('product', product)
  // console.log('itemPrice', itemPrice)
  return {
    amount: cartItem.amount,
    itemPrice
  }
};

const mapDispatchToProps = (dispatch) => ({
  addItem: bindActionCreators(Actions.addItem, dispatch),
  removeItem: bindActionCreators(Actions.removeItem, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);