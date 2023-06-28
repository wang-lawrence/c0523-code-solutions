import  './styles.css'
import Banner from './Banner';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
import Indicators from './Indicators';
import { useState } from 'react';

export default function RotatingBanner ({items}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="container">
      <Banner text={items[currentIndex]} />
      <PrevButton />
      <Indicators maxNumButton={items.length} currentIndex={currentIndex} />
      <NextButton />
    </div>
  );
}
