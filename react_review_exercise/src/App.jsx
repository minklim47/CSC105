import './App.css';

import FavoriteSites from './components/FavoriteSites';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import StateAssignmentTwo from './components/StateAssignmentTwo';
import StateAssignmentOne from './components/StateAssignmentOne';

function App() {
  return (
    <div className="App">
      <FavoriteSites/>
      <Profile/>
      <Gallery/>
      <StateAssignmentOne/>
      <StateAssignmentTwo/>
    </div>
  );
}

export default App;
