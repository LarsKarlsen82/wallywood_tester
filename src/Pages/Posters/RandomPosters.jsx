// RandomPosters.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PosterDetails from './PosterDetails';
import styles from './RandomPosters.module.scss';

const RandomPosters = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint =
          'http://localhost:3000/posters?sort_key=random&limit=2&attributes=name,description,price,image,slug';
        const response = await axios.get(endpoint);
        setApiData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Sidste nyt...</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data: {error.message}</p>}
      <div className={styles.randomPosters}>
        {apiData &&
          apiData.map((item, index) => (
            <div key={index} className={styles.posterItem}>
              {item.image && (
                <img src={item.image} alt={item.name} className={styles.posterImage}/>
              )}
              <div className={styles.posterDetails}>
                {item.name && <h3>{item.name}</h3>}
                {item.description && (
                  <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                )}
                {item.slug && (
                  <Link to={`/plakater/${item.slug}/${encodeURIComponent(item.name)}/${encodeURIComponent(item.image)}`}>
                  Læs mere &raquo;
                </Link>
                
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RandomPosters;
