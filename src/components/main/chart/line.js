import React from 'react';

const Line = ({ right }) => {
	return(
		<div className="line" style={{ right: `${right}%`}} />
	)
}

export default Line