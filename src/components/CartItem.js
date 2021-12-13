import React from 'react';
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import { useGlobal } from './context';
import './CartItem.css';

function CartItem({ id, title, price, img, amount }) {
  const { removeItem, inc_dec } = useGlobal();
  return (
    <>
      <section className='cartItem'>
        {/* img */}
        <img src={img} alt='' className='cart_pic' />
        {/* info */}
        <div className='cart-info'>
          <h4>{title}</h4>
        </div>
        <div className='amount-button'>
          <button onClick={() => inc_dec(id, 'dec')}>
            <FaMinus />
          </button>
          <p>{amount}</p>
          <button onClick={() => inc_dec(id, 'inc')}>
            <FaPlus />
          </button>
        </div>
        <div className='price'>
          <h4>$ {price}</h4>
        </div>
        <button className='remove-items' onClick={() => removeItem(id)}>
          <FaTimes />
        </button>
      </section>
      <div className='line pd-3'></div>
    </>
  );
}

export default CartItem;
