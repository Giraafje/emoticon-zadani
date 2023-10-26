import './style.css';
import { useSettings } from '../../setting-context'
import {eyesData, mouthData} from '../../data'

// import eyesImg from '../../img/eyes2.svg';
// import mouthImg from '../../img/mouth2.svg';

const Emoticon = () => {
	const value = useSettings();

	const eyes = eyesData.find((eye) => eye.id === value.eyes)
	const mouth = mouthData.find((mouth) => mouth.id === value.mouth)

	return (
		<div className='emoticon' style={{ backgroundColor: '#ff2e12' }}>
			<img className="emoticon__eyes" src={eyes.image} />
			<img className="emoticon__mouth" src={mouth.image} />
		</div>
	);
}

export default Emoticon;