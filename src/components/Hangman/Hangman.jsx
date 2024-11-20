import Level1 from '../../assets/images/1.svg';
import Level2 from '../../assets/images/2.svg';
import Level3 from '../../assets/images/3.svg';
import Level4 from '../../assets/images/4.svg';
import Level5 from '../../assets/images/5.svg';
import Level6 from '../../assets/images/6.svg';
import Level7 from '../../assets/images/7.svg';
import Level8 from '../../assets/images/8.svg';

export default function Hangman({step}) {
    const listOfImages = [Level1,Level2,Level3,Level4,Level5,Level6,Level7,Level8];
    
    return (
        <div>
            <img src={listOfImages.length <= step ? listOfImages[listOfImages.length -1 ]: listOfImages[step]} className='h-[200px] w-[300px]'>
            </img>
        </div>
    )
}