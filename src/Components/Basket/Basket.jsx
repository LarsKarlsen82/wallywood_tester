import React from 'react';
import { useBasket } from './BasketContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faTrashAlt } from '@fortawesome/free-solid-svg-icons'; // Import the trash icon
import styles from './Basket.module.scss';

const Basket = () => {
  const { basket, removeFromBasket } = useBasket();
  const basketCount = basket.length;

  // Calculate the total price
  const totalPrice = basket.reduce((total, item) => total + item.price, 0);

  const handleRemoveFromBasket = (index) => {
    removeFromBasket(index);
  };

  return (
    <div className={styles.BasketClass}>
      <h2>
        <FontAwesomeIcon icon={faShoppingBasket} size="lg" />
        Kurv ({basketCount})
      </h2>
      <ul>
        {basket.map((item, index) => (
          <li key={index}>
            {item.name} &ndash; ({item.price} DKK){' '}
            <FontAwesomeIcon
              icon={faTrashAlt}
              className={styles.trashIcon} // Add a class for styling if needed
              onClick={() => handleRemoveFromBasket(index)}
            />
          </li>
        ))}
      </ul>
      <p style={{ fontWeight: 'bold' }}>Pris i alt: {totalPrice},00 DKK</p>
    </div>
  );
};

export default Basket;


