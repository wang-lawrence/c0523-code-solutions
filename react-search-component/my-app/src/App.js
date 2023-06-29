import SearchableList from './SearchableList';

const quotes = [
  'May the Force be with you.',
  "There's no place like home.",
  "I'm the king of the world!",
  'Elementary, my dear Watson.',
  "You're gonna need a bigger boat.",
  "I'll be back.",
  "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
  'Just keep swimming.',
  'Nobody puts Baby in a corner.',
  'I see dead people.',
];

function App() {
  return (
    <div className="App">
      <SearchableList list={quotes} />
    </div>
  );
}

export default App;
