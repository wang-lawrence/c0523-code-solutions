import MainPage from "./MainPage";
import './styles.css';

const headings= ['Menu', 'About', 'Get Started', 'Sign In', 'Contact Us']

function App() {
  return (
    <div className="App">
      <MainPage items={headings}/>
    </div>
  );
}

export default App;
