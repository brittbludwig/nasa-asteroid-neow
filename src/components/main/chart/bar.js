import React from 'react';

const Bar = ({ width, height, right, starName }) => {
	return(
		<div className="bar" 
				 style={{width: `${width}%`, height: `${height}px`, right: `${right}%`}} >
			<div className='starLabel'>
				<span className="starName">
					{starName}
				</span>
			</div>
		</div>
	)
}

export default Bar