import './App.css';
import Users from './components/users'
import VacationsList from './components/vacationsList'
import Register from './components/register'

function App() {
  return (
    <div className="App">
      <Register />
      <Users />
      <VacationsList />
    </div>
  );
}

export default App;
