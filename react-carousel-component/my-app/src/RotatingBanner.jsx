import './styles.css';
import Banner from './Banner';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
import Indicators from './Indicators';
import { useState, useEffect } from 'react';

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(
      () => setCurrentIndex((currentIndex + 1) % items.length),
      2000
    );
    return () => clearInterval(timerId);
  }, [currentIndex, items.length]);

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
      <div className="row justify-space-bw align-center">
        <PrevButton onClick={handleClickPrev} />
        <Banner image={items[currentIndex]} />
        <NextButton onClick={handleClickNext} />
      </div>
      <Indicators
        count={items.length}
        currentIndex={currentIndex}
        onClick={handleClickIndicators}
      />
    </div>
  );
}
