import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import * as Message from '../../constants/Message';
import { actAddToCart } from '../../actions/cart';
class CartContainer extends Component {
  showTotalAmount = () => {
    let total = 0;
    if (this.props.Cart.length > 0) {
      for (let i = 0; i < this.props.Cart.length; i++) {
        total += this.props.Cart[i].product.price * this.props.Cart[i].quantity;
      }
    }
    return total;
  };
  render() {
    const showCartItem = () => {
      if (this.props.Cart.length > 0) {
        return this.props.Cart.map((item, key) => {
          return <CartItem key={key} item={item}></CartItem>;
        });
      } else return <h2>Khong co san pham nao trong gio hang</h2>;
    };

    const showTheadTable = () => {
      if (this.props.Cart.length > 0) {
        return (
          <tr>
            <th>San Pham</th>
            <th>Don Gia</th>
            <th>So luong</th>
            <th>Tien</th>
            <th>Thao Tac</th>
          </tr>
        );
      }
    };

    console.log('chao' + JSON.stringify(this.props.Cart));
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md">
              <table className="table table-striped ">
                <thead className="thead-inverse">{showTheadTable()}</thead>
                <tbody>{showCartItem()}</tbody>
              </table>
            </div>
          </div>
          <h1>Tong tien : {this.showTotalAmount()}</h1>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    Cart: state.Cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
