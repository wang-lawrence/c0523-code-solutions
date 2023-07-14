import { FaRegCircle, FaCircle } from 'react-icons/fa';

type Props = {
  count: number;
  currentIndex: number;
  onClick: (i: number) => void;
};

export default function Indicators({ count, currentIndex, onClick }: Props) {
  function makeButtons(count: number) {
    const buttons = [];
    for (let i = 0; i < count; i++) {
      if (i === currentIndex) {
        buttons.push(
          <FaCircle className="dot" key={i} onClick={() => onClick(i)} />
        );
      } else {
        buttons.push(
          <FaRegCircle className="dot" key={i} onClick={() => onClick(i)} />
        );
      }
    }
    return buttons;
  }

  return (
    <div className="row progress-dots-container justify-center">
      <div>{makeButtons(count)}</div>
    </div>
  );
}
