// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import styles from './PosterDetails.module.scss';
// import { useBasket } from '../../components/Basket/BasketContext';

// const PosterDetails = () => {
//   const { slug, name, image } = useParams();
//   const [posterDetails, setPosterDetails] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/posters/${slug}`);
//         setPosterDetails(response.data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [slug]);

//   return (
//     <div>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error fetching data: {error.message}</p>}
//       {posterDetails && (
//         <div>
//           <h2>{name}</h2>
//           {image && <img className={styles.posterDetails} src={image} alt={name} />}
//           {posterDetails.description && (
//             <p dangerouslySetInnerHTML={{ __html: posterDetails.description }}></p>
//           )}
//         </div>
//       )}
//     </div>
    
//   );
// };
// <button onClick={() => handleAddToBasket()}>Læg i kurv</button>
// export default PosterDetails;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './PosterDetails.module.scss';
import { useBasket } from '../../components/Basket/BasketContext';

const PosterDetails = () => {
  const { slug, name, image } = useParams();
  const [posterDetails, setPosterDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToBasket } = useBasket();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posters/${slug}`);
        setPosterDetails(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const handleAddToBasket = () => {
    addToBasket({ name, price: posterDetails.price, slug });
    console.log('Item added to basket:', { name, price: posterDetails.price, slug });
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data: {error.message}</p>}
      {posterDetails && (
        <div>
          <h2>{name}</h2>
          {image && <img className={styles.posterDetails} src={image} alt={name} />}
          {posterDetails.description && (
            <p dangerouslySetInnerHTML={{ __html: posterDetails.description }}></p>
          )}
          <p>Pris: {posterDetails.price} DKK</p>
          <button onClick={() => handleAddToBasket()}>Læg i kurv</button>
        </div>
      )}
    </div>
  );
};

export default PosterDetails;

