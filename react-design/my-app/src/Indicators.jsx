export default function Indicators({ maxNumButton, currentIndex, onClick }) {

  function makeButtons (maxNumButton) {
    const buttons = [];
    for(let i = 0; i < maxNumButton; i++) {
      if (i === {currentIndex}) {
        buttons.push(<button className="blue-bg" key={i}>{i}</button>);
      } else {
        buttons.push(<button key={i}>{i}</button>);
      }

     }
    return buttons;
  }

  return (
    <div>
      {makeButtons(maxNumButton)}
    </div>
    )
}
