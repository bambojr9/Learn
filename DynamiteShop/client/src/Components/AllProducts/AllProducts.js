import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import ProductItem from '../cpn/ProductItem';
import { connect } from 'react-redux';
// import { actFetchData } from '../../actions/actFetchData';
import { actFetchDataRequest } from '../../actions/actFetchData';
class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    this.props.fetchDatabase();
  }
  log = () => {
    console.log(' \n ' + JSON.stringify(this.props.Database) + ' \n');
  };

  showAllProducts = () => {
    if (this.props.Database !== null) {
      const DB = this.props.Database;
      const DB1 = DB.map((value) =>
        value.FeaturedProducts.forEach((product) => console.log(product))
      );

      // const FeaturedProducts = this.props.Database.map(
      //   (value) => value.FeaturedProducts
      // );
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
    Database: state.Database,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDatabase: () => {
      dispatch(actFetchDataRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
