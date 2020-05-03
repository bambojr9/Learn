import React, { Component } from 'react';
import ProductItem from '../cpn/ProductItem';
import { connect } from 'react-redux';
// import { actFetchData } from '../../actions/actFetchData';
import { actFetchDataAllProductsRequest } from '../../actions/actFetchData';
import TitlePage from '../TitlePage/TitlePage';
import SidebarLeft from '../SidebarLeft/SidebarLeft';
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
        <div className="col-md-4">
          <ProductItem
            key={key}
            src={value.src}
            name={value.name}
            price={value.price}
            oldPrice={value.oldPrice}
          ></ProductItem>
        </div>
      ));
    }
  };
  render() {
    return (
      <div>
        <TitlePage></TitlePage>
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <SidebarLeft></SidebarLeft>
              </div>
              <div className="col-lg-9">
                <div className="row">{this.showAllProducts()}</div>
              </div>
            </div>
          </div>
          <p onClick={() => this.log()}>----------CHECK DATA-----------</p>
        </div>
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
