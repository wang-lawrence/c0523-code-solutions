export default function CustomButton({text, color, onCustomClick}) {

  // function handleClick() {
  //   alert('You clicked ' + text);

  return <button style={{backgroundColor: color}} onClick={e => {

      onCustomClick(text)}}>{text}</button>
}
