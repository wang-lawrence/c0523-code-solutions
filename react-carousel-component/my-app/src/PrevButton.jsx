import { FaAngleLeft } from 'react-icons/fa';

export default function PrevButton({ onClick }) {
  return (
    <div class="row justify-center arrow-left">
      <FaAngleLeft className="fa-left" onClick={onClick} />
    </div>
  );
}
