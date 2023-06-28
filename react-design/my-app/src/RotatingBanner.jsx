import  './styles.css'
import Banner from './Banner';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
import Indicators from './Indicators';

export default function RotatingBanner ({items}) {
  return (
    <div className="container">
      <Banner text={items[0]}/>
      <PrevButton />
      <Indicators maxNumButton={items.length}/>
      <NextButton />
    </div>
  );
}
