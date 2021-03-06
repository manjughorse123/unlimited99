import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Layout/Header';
import Meals from './Component/Meals/Meals';
import Cart from './Component/Cart/Cart';
function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header></Header>
      <main>
        <Meals />
      </main>
   </React.Fragment>
   );
}

export default App;
