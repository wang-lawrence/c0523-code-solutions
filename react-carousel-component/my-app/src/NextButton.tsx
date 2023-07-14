import { FaAngleRight } from 'react-icons/fa';

type Props = {
  onClick: () => void;
};

export default function NextButton({ onClick }: Props) {
  return (
    <div className="row justify-center arrow-right">
      <FaAngleRight className="fa-right" onClick={onClick} />
    </div>
  );
}
