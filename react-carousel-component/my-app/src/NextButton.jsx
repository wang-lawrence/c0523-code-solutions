import { FaAngleRight } from 'react-icons/fa';

type props = {
  onClick: Function,
};

export default function NextButton({ onClick }: props) {
  return (
    <div className="row justify-center arrow-right">
      <FaAngleRight className="fa-right" onClick={onClick} />
    </div>
  );
}
