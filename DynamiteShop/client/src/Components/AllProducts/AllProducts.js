import React, { Component } from 'react';
import ProductItem from '../cpn/ProductItem';
import { connect } from 'react-redux';
// import { actFetchData } from '../../actions/actFetchData';
import { actFetchDataAllProductsRequest } from '../../actions/actFetchData';
class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    this.props.fetchDatabaseAllProducts();
  }
  log = () => {
    console.log(' \n ' + JSON.stringify(this.props.DbAllProducts) + ' \n');
  };

  showAllProducts = () => {
    if (this.props.DbAllProducts !== null) {
      return this.props.DbAllProducts.map((value, key) => (
        <ProductItem
          key={key}
          src={value.src}
          name={value.name}
          price={value.price}
          oldPrice={value.oldPrice}
        ></ProductItem>
      ));
    }
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="col-md-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              dolorum obcaecati quod hic reiciendis repellendus fuga
              reprehenderit et. Sapiente tempora, architecto quaerat dolore
              ipsam fuga distinctio aliquid libero rem. Quod!
            </p>

            {this.showAllProducts()}
          </div>
        </div>
        <p onClick={() => this.log()}>----------CHECK DATA-----------</p>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    DbAllProducts: state.DbAllProducts,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDatabaseAllProducts: () => {
      dispatch(actFetchDataAllProductsRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
