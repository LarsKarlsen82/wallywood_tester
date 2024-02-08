import React from 'react';
import { Link } from 'react-router-dom';
import { useBasket } from '../../components/Basket/BasketContext';

export const PosterItem = ({ name, image, price, slug }) => {

  const { addToBasket } = useBasket();

  const handleAddToBasket = () => {
    addToBasket({ name, price, slug });
    console.log('Item added to basket:', { name, price, slug });
  };

  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>Pris: {price},00 DKK</p>
      <Link to={`/plakater/${slug}/${encodeURIComponent(name)}/${encodeURIComponent(image)}`}>Læs mere &raquo;</Link>

      <button onClick={() => handleAddToBasket()}>Læg i kurv</button>
    </div>
  );
};

export default PosterItem;
