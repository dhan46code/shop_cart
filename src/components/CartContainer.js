import React from 'react';
import { useGlobal } from './context';
import CartItem from './CartItem';
import './CartContainer.css';
import { FaShoppingCart } from 'react-icons/fa';

function CartContainer() {
  const { cart, total, clearItem } = useGlobal();

  if (cart.length === 0) {
    return (
      <section className='cart-container'>
        <div className='cart-center'>
          <header>
            <h2>Barang kamu saat ini : {cart.length}</h2>
          </header>
          <div className='empty'>
            <h2>
              <FaShoppingCart />
              empty item
            </h2>
          </div>
          <footer>
            <h3>summary</h3>
            <div className='line'></div>
            {/* total price */}
            <div className='total-price'>
              <h3>total price : </h3>
              <h3>${total}</h3>
            </div>
          </footer>
        </div>
      </section>
    );
  }
  return (
    <section className='cart-container'>
      <div className='cart-center'>
        <header>
          <h3>Barang kamu saat ini : {cart.length}</h3>
        </header>
        <div>
          {cart.map((cartItem) => {
            return <CartItem {...cartItem} key={cartItem.id} />;
          })}
        </div>
        <footer>
          <h3>summary</h3>
          <div className='line'></div>
          {/* total price */}
          <div className='total-price'>
            <h3>total price : </h3>
            <h3>${total}</h3>
          </div>
          <button onClick={clearItem}>clear items</button>
        </footer>
      </div>
    </section>
  );
}

export default CartContainer;
