import { FaAngleRight } from 'react-icons/fa';

export default function NextButton({ onClick }) {
  return (
    <div className="row justify-center arrow-right">
      <FaAngleRight className="fa-right" onClick={onClick} />
    </div>
  );
}
