import React from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useGlobalContext } from './context';

const CartItem = ({ id, title, price, img, amount }) => {
  const { remove, increase, decrease } = useGlobalContext();
  return (
    <article>
      <div key={id} className="item-contents">
        <div className="item">
          <img src={img} alt={title} />
          <div>
            <h3>{title}</h3>
            <h2>${price}</h2>
            <button className="btn-remove" onClick={() => remove(id)}>
              remove
            </button>
          </div>
        </div>
        <div className="amount">
          <button className="btn" onClick={() => increase(id)}>
            <ExpandLessIcon />
          </button>
          <h2>{amount}</h2>
          <button className="btn" onClick={() => decrease(id)}>
            <ExpandMoreIcon />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
