import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import * as Message from '../../constants/Message';
import { actAddToCart, actResetCart } from '../../actions/cart';
import { Link } from 'react-router-dom';

class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
      //validate form
      fields: {},
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }
  handleChange(e) {
    let { fields } = this.state;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
    // console.log(fields);
  }

  handleSubmitForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields['username'] = '';
      fields['mobileno'] = '';
      this.setState({ fields: fields });
      //reset cart
      this.props.onResetCart();
      alert('Form submitted');
    }
  }

  validateForm() {
    let { fields } = this.state;
    let errors = {};
    let formIsValid = true;

    if (!fields['username']) {
      formIsValid = false;
      errors['username'] = '*Please enter your username.';
    }

    if (typeof fields['username'] !== 'undefined') {
      if (!fields['username'].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors['username'] = '*Please enter alphabet characters only.';
      }
    }

    if (!fields['mobileno']) {
      formIsValid = false;
      errors['mobileno'] = '*Please enter your mobile no.';
    }

    if (typeof fields['mobileno'] !== 'undefined') {
      if (!fields['mobileno'].match(/^[0-9]{10,11}$/)) {
        formIsValid = false;
        errors['mobileno'] = '*Please enter valid mobile no.';
      }
    }
    if (!fields['address']) {
      formIsValid = false;
      errors['address'] = '*Please enter your address no.';
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }

  //total
  showTotalAmount = () => {
    let total = 0;
    let { Cart } = this.props;
    if (Cart.length > 0) {
      for (let i = 0; i < Cart.length; i++) {
        total += Cart[i].product.price * Cart[i].quantity;
      }
    }
    return total;
  };

  //validate
  // const validateInput = (checkingText) => {
  //   /* reg exp để kiểm tra xem chuỗi có chỉ bao gồm 10 - 11 chữ số hay không */

  //   const regexp = /^\d{10,11}$/;
  //   const checkingResult = regexp.exec(checkingText);
  //   if (checkingResult !== null) {
  //     return { isInputValid: true, errorMessage: '' };
  //   } else {
  //     return {
  //       isInputValid: false,
  //       errorMessage: 'Số điện thoại phải có 10 - 11 chữ số.',
  //     };
  //   }
  // };
  // //validate

  render() {
    //showItem product in cart
    const showCartItemTest = () => {
      if (this.props.Cart.length > 0) {
        return this.props.Cart.map((item, key) => {
          return <CartItem key={key} item={item}></CartItem>;
        });
      } else return <li>Khong co san pham nao trong gio hang</li>;
    };

    return (
      <div className="cart">
        <div className="container">
          <h2 className="cart-products__title">Cart</h2>
          <div className="row">
            <div className="col-md-9">
              <div className="cart-products">
                <div className="cart-products__inner">
                  <ul className="cart-products__products">
                    {showCartItemTest()}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <form
                method="POST"
                name="userInfoForm"
                onSubmit={this.handleSubmitForm}
              >
                <div className="info-form">
                  <h3 className=" info-form__title">Your info</h3>
                  <div className="info-form__item info-form__name">
                    {/* <div className="info-form__text">Name :</div> */}
                    <div className="info-form__form-control">
                      <input
                        // onChange={(event) => this.handleInput(event)}
                        name="username"
                        value={this.state.fields.username}
                        onChange={this.handleChange}
                        // onBlur={(event) => this.handleInputValidation(event)}
                        // defaultValue=""
                        // name="name"
                        type="text"
                        placeholder="Your Name "
                        className="input-name"
                      />
                      <div className="errorMsg">
                        {this.state.errors.username}
                      </div>
                    </div>
                  </div>
                  <div className="info-form__item  info-form__tel">
                    {/* <div className="info-form__text">Your Phone :</div> */}
                    <div className="info-form__form-control">
                      <input
                        // onChange={(event) => this.handleInput(event)}
                        name="mobileno"
                        value={this.state.fields.mobileno}
                        onChange={this.handleChange}
                        // defaultValue=""
                        // name="tel"
                        type="text"
                        placeholder="Your Phone "
                        className="input-tel"
                      />
                      <div className="errorMsg">
                        {this.state.errors.mobileno}
                      </div>
                    </div>
                  </div>
                  <div className="info-form__item info-form__address">
                    {/* <div className="info-form__text">Address :</div> */}
                    <div className="info-form__form-control">
                      <input
                        onChange={this.handleChange}
                        value={this.state.fields.address}
                        name="address"
                        type="text"
                        placeholder="Your Address "
                        className="input-Address"
                      />
                      <div className="errorMsg">
                        {this.state.errors.address}
                      </div>
                    </div>
                  </div>
                  <div className="info-form__item info-form__message">
                    {/* <div className="info-form__text">Message :</div> */}
                    <div className="info-form__form-control">
                      <textarea
                        name="message "
                        id="message "
                        placeholder="Your Message "
                        rows={4}
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
                <div className="cart-total-prices">
                  <div className="cart-total-prices__inner">
                    <div className="prices">
                      <div className="prices__total">
                        <span className="prices__text">Total :</span>
                        <span className="prices__value prices__value--final">
                          $ {this.showTotalAmount()}
                        </span>
                      </div>
                    </div>
                    {/* <button
                      type="submit"
                      onClick={(event) => this.submitForm(event)}
                      className="cart__submit btn-block"
                    >
                      Proceed to ordering
                    </button> */}
                    <input
                      type="submit"
                      className="button cart__submit btn-block"
                      value="Proceed to ordering"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
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
    onResetCart: () => {
      dispatch(actResetCart());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
