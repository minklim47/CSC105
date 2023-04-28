import Home from './components/Home'
import Todo from './components/Todo'
import TodoPage from './Pages/TodoPage';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import TodayPage from './Pages/TodayPage'
import CalendarPage from './Pages/CalendarPage';

function App() {
  console.log(<TodoPage/>)
  return (
    <Routes>
      <Route exect path="/" element={<HomePage />}  />
      <Route path="/todo" element={<TodoPage />}  />
      <Route path="/today" element={<TodayPage />}  />
      <Route path="/calendar" element={<CalendarPage />}  />
    </Routes>
  );
}

export default App;
