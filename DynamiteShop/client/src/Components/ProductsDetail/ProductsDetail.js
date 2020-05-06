import React, { Component } from 'react';
import ProductItem from '../cpn/ProductItem';
import { connect } from 'react-redux';
import { actFetchDataAllProductsRequest } from '../../actions/actFetchData';
import TitlePage from '../TitlePage/TitlePage';
class ProductsDetail extends Component {
	componentDidMount() {
		this.props.fetchDatabaseAllProducts();
	}
	showProductDetail = () => {
		return this.props.DbAllProducts.filter(
			(item) => item.id === this.props.match.params.id
		).map((value, key) => {
			return (
				// <ProductItem
				// 	key={key}
				// 	id={value.id}
				// 	src={value.src}
				// 	name={value.name}
				// 	price={value.price}
				// 	oldPrice={value.oldPrice}
				// 	sale={value.sale}
				// ></ProductItem>
				<div className="productDetail" key={key}>
					<div className="container">
						<div className="row">
							<div className="col-md-1 productDetail__smallImg">
								{value.src.map((img) => (
									<img
										src={require('../../assets/img/products/' + img)}
										alt="Small img"
										className="img-fluid "
									/>
								))}
							</div>
							<div className="col-md-5 productDetail__bigImg">
								<img
									src={require('../../assets/img/products/' + value.src[0])}
									alt="Big img"
									className="img-fluid"
								/>
							</div>
							<div className="col-md-6">
								<h2 className="productDetail__name">{value.name}</h2>
								<span className="productDetail__status">
									{value.status ? 'Stock up' : 'Sold out'}
								</span>
								<div className="productDetail__price">
									<span>{value.price}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		});
	};
	render() {
		// console.log(this.props);     in ra tat ca cac props cua component nay
		console.log(this.props.match.params.id);
		console.log(this.props.match.params.name);
		return (
			<section className="Detail">
				<TitlePage
					slug={this.props.match.params.slug}
					name={this.props.match.params.name}
				></TitlePage>
				<h1>DAY LA TRANG DETAIL</h1>

				{this.showProductDetail()}
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
