import React from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from './context';

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <div className="center">
        <h1>Your Cart</h1>
        <h2>is empty.</h2>
      </div>
    );
  }
  return (
    <div className="center">
      <h1>Your Cart</h1>
      <section className="item-container">
        <main>
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </main>
        <footer className="total-section">
          <h2>Total</h2>
          <h2>${total}</h2>
        </footer>
        <button className="clear-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </section>
    </div>
  );
};

export default CartContainer;
