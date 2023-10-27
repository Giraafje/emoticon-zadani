import React from 'react';
import { eyesData } from '../../data';
import { useSettings } from '../../setting-context'

const EyesSelector = () => {
	const { eyes, changeEyes } = useSettings();

	const handleClick = (item) => {
		console.log('eyes', item.id);
		changeEyes(item.id)
	}

	return (
		<div className="items">
			{eyesData.map(eyesItem =>
				<img
					className={eyesItem.id === eyes ? 'item active' : 'item'}
					key={eyesItem.id}
					src={eyesItem.image}
					onClick={() => { handleClick(eyesItem) }}
					/>
			)}
		</div>
	);
}

export default EyesSelector;