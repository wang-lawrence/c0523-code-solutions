import './styles.css'

export default function CustomButton({ text, onClick }) {
  return <button onClick={(e) => onClick()}>{text}</button>;
};
