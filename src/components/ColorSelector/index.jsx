import { colorsData } from '../../data';
import { useSettings } from '../../setting-context'

const ColorSelector = () => {
	const { color, changeColor } = useSettings();

	const handleClick = (item) => {
		console.log('color', item.id);
		changeColor(item.id)
	}

	return (
		<div className="items">
			{colorsData.map(colorItem =>
				<div
					className={colorItem.id === color ? 'item active' : 'item'}
					key={colorItem.id}
					style={{ backgroundColor: colorItem.value}}
					onClick={() => { handleClick(colorItem) }}
					/>
			)}
		</div>
	);
}

export default ColorSelector;