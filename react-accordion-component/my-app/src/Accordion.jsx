import './styles.css'
import { useState } from 'react'

export default function Accordiion({data}) {
  const [id, setId] = useState(data[0].id);
  const [showDesc, setShowDesc] = useState(true);

  function handleToggle(selId) {
    if (selId === id) {
      setShowDesc(!showDesc)
    } else {
      setId(selId);
      setShowDesc(true);
    }
  }

  const accordion = data.map(topic => {
    return id === topic.id && showDesc ? (
      <div>
        <Header headerText={topic.header} keyId={topic.id} onToggle={handleToggle}/>
        <Description descText={topic.description} />
      </div>
    ) : (
      <div>
        <Header headerText={topic.header} keyId={topic.id} onToggle={handleToggle}/>
      </div>
    );
    }
  )
  return (
    <>{accordion}</>
  )
}

function Header({headerText, keyId, onToggle}) {
  return (
    <header
      key={keyId}
      id={keyId}
      onClick={e => onToggle(+e.target.getAttribute('id'))}>
      {headerText}
    </header>
  );
}

function Description({descText}) {
  return <p>{descText}</p>;
}
