import React, { Component } from 'react';
import ProductItem from '../cpn/ProductItem';
import { connect } from 'react-redux';
import { actFetchDataAllProductsRequest } from '../../actions/actFetchData';
class ProductsDetail extends Component {
  render() {
    // console.log(this.props);     in ra tat ca cac props cua component nay
    console.log(this.props.match.params.id);
    console.log(this.props.match.params.slug);
    return (
      <section className="Detail">
        <h1>DAY LA TRANG DETAIL</h1>
        {this.props.DbAllProducts.filter(
          (item) => item.id === this.props.match.params.id
        ).map((value, key) => {
          return (
            <ProductItem
              key={key}
              id={value.id}
              src={value.src}
              name={value.name}
              price={value.price}
              oldPrice={value.oldPrice}
              sale={value.sale}
            ></ProductItem>
          );
        })}
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductsDetail);
