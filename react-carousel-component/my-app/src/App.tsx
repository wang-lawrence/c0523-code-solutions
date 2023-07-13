import RotatingBanner from './RotatingBanner';

const images = ['001', '004', '007', '025', '039'];

function App() {
  return (
    <div className="App">
      <RotatingBanner items={images} />
    </div>
  );
}

export default App;
