import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/counter';
import Todos from './features/todolist/todolist';

function App() {
  return (
   <div>
    <Counter></Counter>
    <Todos></Todos>
   </div>
  );
}

export default App;
