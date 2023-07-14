import { FaAngleLeft } from 'react-icons/fa';

type Props = {
  onClick: () => void;
};

export default function PrevButton({ onClick }: Props) {
  return (
    <div className="row justify-center arrow-left">
      <FaAngleLeft className="fa-left" onClick={onClick} />
    </div>
  );
}
