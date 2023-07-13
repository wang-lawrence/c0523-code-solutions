import { FaRegCircle, FaCircle } from 'react-icons/fa';

type props = {
  count: Number,
  currentIndex: Number,
  onClick: Function,
};

export default function Indicators({ count, currentIndex, onClick }: props) {
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
