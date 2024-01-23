import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import VendingMachine from "./VendingMachine"
import Soda from "./Soda"
import Chips from "./Chips"
import Candy from "./Candy"

/**
 * Renders vending machine component
 * Establishes routes with react router. 
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VendingMachine />} />
          <Route path='/soda' element={<Soda />} />
          <Route path='/chips' element={<Chips />} />
          <Route path='/candy' element={<Candy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
