'use strict';

// tag::vars[]
const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
// end::vars[]

// tag::app[]
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {products: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/products'}).done(response => {
			this.setState({products: response.entity._embedded.products});
		});
	}

	render() {
		return (
			<ProductList products={this.state.products}/>
		)
	}
}
// end::app[]

// tag::employee-list[]
class ProductList extends React.Component{
	render() {
		var products = this.props.products.map(product =>
			<Product key={product._links.self.href} product={product}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Title</th>
						<th>Price</th>
						<th>Description</th>
					</tr>
					{products}
				</tbody>
			</table>
		)
	}
}
// end::employee-list[]

// tag::employee[]
class Product extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.product.title}</td>
				<td>{this.props.product.price}</td>
				<td>{this.props.product.description}</td>
			</tr>
		)
	}
}
// end::employee[]

// tag::render[]
ReactDOM.render(
	<App />,
	document.getElementById('react')
)
// end::render[]

