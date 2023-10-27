import React from 'react';
import { useSettings } from '../../setting-context'
import { mouthData } from '../../data';

const MouthSelector = () => {
	const { mouth, changeMouth } = useSettings();

	const handleClick = (item) => {
		console.log('mouth', item.id);
		changeMouth(item.id)
	}

	return (
		<div className="items">
			{mouthData.map(mouthItem =>
				<img
					className={mouthItem.id === mouth ? 'item active' : 'item'}
					key={mouthItem.id}
					src={mouthItem.image}
					onClick={() => { handleClick(mouthItem) }}
					/>
			)}
		</div>
	);
}

export default MouthSelector;