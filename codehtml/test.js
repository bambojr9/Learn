componentDidMount() {
    axios
        .get('https://5ea82ce535f37200166089b5.mockapi.io/api/products')
        .then((res) => {
            this.setState({ data: res.data });
            this.props.fetchDatabaseAllProducts(res.data);
        })
        .catch((err) => console.log(err));
}