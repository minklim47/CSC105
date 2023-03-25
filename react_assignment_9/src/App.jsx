import logo from './logo.svg';
import Card from './components/Card.jsx'
import List from './components/List'
import './App.css';
import TypeMe from './components/TypeMe';
import MyForm from './components/MyForm';

function App() {
  const p1 = {name: "Puss in Boots",
              job: "Fearless hero",
              hobby: "Drink milk"
            }
  const l1 = [
          {name: "Puss in Boots",
          job: "Fearless hero",
          hobby: "Drink milk"},
          {name: "Puss in Boots",
          job: "Fearless hero",
          hobby: "Drink milk"},
          {name: "Puss in Boots",
          job: "Fearless hero",
          hobby: "Drink milk"},
        ]
  return (
    <div className="App">
      <MyForm/>
      <TypeMe />
      <Card user={p1}/>
      <List users={l1}/>
    </div>
  );
}

export default App;
