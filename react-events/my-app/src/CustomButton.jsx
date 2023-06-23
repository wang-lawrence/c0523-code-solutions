export default function CustomButton({text, color, onCustomClick}) {

  return <button style={{backgroundColor: color}} onClick={e => {onCustomClick(text)}}>{text}</button>

}
