import React, { Component } from 'react';
//provider

const NumberContext = React.createContext();

export default class NumberProvider extends Component {
	render() {
		return (
			<div>
			<NumberContext.Provider value="5">
				<div className="text-center">
					<NumberContext.Consumer>
						{(contextNa) => <h2>{contextNa}</h2>}
					</NumberContext.Consumer>
				</div>
			</NumberContext.Provider>
		</div>
		);
	}
}
