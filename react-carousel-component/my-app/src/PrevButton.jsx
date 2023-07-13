import { FaAngleLeft } from 'react-icons/fa';

type props = {
  onClick: Function,
};

export default function PrevButton({ onClick }: props) {
  return (
    <div class="row justify-center arrow-left">
      <FaAngleLeft className="fa-left" onClick={onClick} />
    </div>
  );
}
