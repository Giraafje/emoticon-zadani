import './style.css';
import { useSettings } from '../../setting-context'
import { eyesData, mouthData, colorsData } from '../../data'

// import eyesImg from '../../img/eyes2.svg';
// import mouthImg from '../../img/mouth2.svg';

const Emoticon = () => {
	const value = useSettings();

	const selectedEyes = eyesData.find((eye) => eye.id === value.eyes)
	const selectedMouth = mouthData.find((mouth) => mouth.id === value.mouth)
	const selectedColor = colorsData.find((color) => color.id === value.color)

	return (
		<div className='emoticon' style={{ backgroundColor: selectedColor.value }}>
			<img className="emoticon__eyes" src={selectedEyes.image} />
			<img className="emoticon__mouth" src={selectedMouth.image} />
		</div>
	);
}

export default Emoticon;