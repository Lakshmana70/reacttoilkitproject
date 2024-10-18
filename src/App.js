import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/counter';
import Todos from './features/todolist/todolist';
import Productsdetails from './features/products/Productsdetais';
import productsdata from './features/products/Productsdata.json'
import { Outlet } from 'react-router-dom';

function App() {
  console.log(productsdata)
  return (
   <div>
    {/* <Counter></Counter>
    <Todos></Todos> */}
    <Productsdetails></Productsdetails>
    {/* <Outlet/> */}
   </div>
  );
}

export default App;
