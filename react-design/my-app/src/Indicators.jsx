export default function Indicators({ maxNumButton, onClick }) {

  function makeButtons (maxNumButton) {
    const buttons = [];
    for(let i = 0; i < maxNumButton; i++) {
      buttons.push(<button>{i}</button>)
    }
    return buttons;
  }

  return (
    <div>
      {makeButtons(maxNumButton)}
    </div>
    )
}
