import React from 'react';
import data from '../../dulieu/dulieu.json';

function Collections(props) {
	let Anh = () => {
		return data.imgBig.map(value=>{
			return (	
			<div>
			<img src={value} alt="" />
		</div>
			)
		})
	};
	return <div>f {Anh()}</div>;
}

export default Collections;
