import React, { useState } from 'react';
import PropTypes from 'prop-types';
function getRandomColor() {
	const ListColor = ['deeppink', 'red', 'orange', 'yellow', 'black'];
	const randomIndex = Math.trunc(Math.random() * 5);
	return ListColor[randomIndex];
}

UseState1.propTypes = {};

function UseState1() {
	const initColor = localStorage.getItem('box_color') || 'deeppink';
	const [color, setColor] = useState(initColor);
	function handleBoxClick() {
		const newColor = getRandomColor();
		setColor(newColor);
		localStorage.setItem('box_color', newColor);
	}
	return (
		<div
			onClick={() => handleBoxClick()}
			className="color-box"
			style={{ backgroundColor: color }}
		>
			Color Box
		</div>
	);
}

export default UseState1;
