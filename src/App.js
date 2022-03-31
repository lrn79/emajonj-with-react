import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/invebtory/Inventory';
import Order from './components/ORDERS/Order';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Order></Order>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>} ></Route>
      </Routes>

    </div>
  );
}

export default App;
