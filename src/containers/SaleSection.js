import { connect } from "react-redux";
import * as Actions from "../actions";
import { bindActionCreators } from "redux";
import SaleSection from "../components/SaleSection";

const mapStateToProps = (state) => {
  var itemsMap = state.cart.items;
  var items = Array.from(itemsMap.values())

  return {
    items,
  }
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SaleSection);
