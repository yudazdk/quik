import { connect } from "react-redux";
import * as Actions from "../actions";
import { bindActionCreators } from "redux";
import ProductsSection from "../components/ProductsSection";

const mapStateToProps = (state) => {
  // console.log('item', state.products.items[0]);
  return {
    products: state.products.items
  }
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSection);
