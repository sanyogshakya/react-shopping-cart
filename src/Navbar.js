import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useGlobalContext } from './context';

function Navbar() {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <div className="nav-header">
        <h1>darazo</h1>
        <div className="cart">
          <a className="cart-icon" href="/">
            <FaShoppingCart />
          </a>
          <p className="amount">{amount}</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
