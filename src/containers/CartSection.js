import { connect } from "react-redux";
import * as Actions from "../actions";
import { bindActionCreators } from "redux";
import CartSection from "../components/CartSection";
import _ from 'lodash';

const mapStateToProps = (state) => {
  var itemsMap = state.cart.items;
  var items = Array.from(itemsMap.values())

  return {
    items,
    totalPrice: _.sumBy(items, 'total'),
    products: state.products.items
  }
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(CartSection);
