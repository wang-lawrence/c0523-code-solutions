import './styles.css'

export default function CustomButton({ text, count, onClick }) {
  return <button onClick={(e) => onClick(count)}>{text}</button>;
};
