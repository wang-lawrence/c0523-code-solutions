import { FaRegCircle, FaCircle } from 'react-icons/fa';

export default function Indicators({ count, currentIndex, onClick }) {
  function makeButtons(count) {
    const buttons = [];
    for (let i = 0; i < count; i++) {
      if (i === currentIndex) {
        buttons.push(
          <FaCircle className="dot" key={i} onClick={(e) => onClick(i)} />
        );
      } else {
        buttons.push(
          <FaRegCircle className="dot" key={i} onClick={(e) => onClick(i)} />
        );
      }
    }
    return buttons;
  }

  return (
    <div class="row progress-dots-container justify-center">
      <div>{makeButtons(count)}</div>
    </div>
  );
}
