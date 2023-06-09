import  './styles.css'
import Banner from './Banner';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
import Indicators from './Indicators';
import { useState } from 'react';

export default function RotatingBanner ({items}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClickPrev() {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  }

  function handleClickNext() {
    setCurrentIndex((currentIndex + 1) % items.length);
  }

  function handleClickIndicators(selIndex) {
    setCurrentIndex(selIndex);
  }

  return (
    <div className="container">
      <Banner text={items[currentIndex]} />
      <PrevButton onClick={handleClickPrev} />
      <Indicators maxNumButton={items.length} currentIndex={currentIndex} onClick={handleClickIndicators}/>
      <NextButton onClick={handleClickNext} />
    </div>
  );
}
