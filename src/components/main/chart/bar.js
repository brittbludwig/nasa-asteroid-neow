import React from 'react';

const Bar = ({ width, height, right, starName, url }) => {
	return(
		<div className='bar' 
				 style={{width: `${width}%`, height: `${height}px`, right: `${right}%`}} >
			<div className='starLabel'>
				<a className='starName' href={url} target='_blank'  rel='noopener noreferrer'>
					{starName}
				</a>
			</div>
		</div>
	)
}

export default Bar