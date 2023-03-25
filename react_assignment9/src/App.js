import logo from './logo.svg';
import Card from './components/Card.jsx'
import './App.css';

function App() {
  const p1 = {name: "Puss in Boots",
              job: "Fearless hero",
              hobby: "Drink milk"
            }
  return (
    <div className="App">
      <Card user={p1}/>
    </div>
  );
}

export default App;
