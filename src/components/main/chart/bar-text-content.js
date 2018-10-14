import React from 'react';

const BarTextContent = ({ left }) => {
	return(
		<div className='bar-text-content'>
			<h2 className='distance'>Distance (in miles) from Earth</h2>
			<span className='range'>0-99,000</span>
			<span className='range'>100,000-199,999</span>
			<span className='range'>200,000-299,999</span>
			<span className='range'>300,000-399,999</span>
			<span className='range'>400,000-499,999</span>
			<span className='range'>500,000-599,999</span>
			<span className='range'>600,000-699,999</span>			
		</div>
	)
}

export default BarTextContent