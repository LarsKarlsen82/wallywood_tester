// PosterList.jsx

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { PosterItem } from './PosterItem';
import styles from './PosterList.module.scss';

export const PosterList = () => {
  const [apiData, setApiData] = useState([]);
  const { genre } = useParams();

  const getData = async () => {
    const endpoint = `http://localhost:3000/posters/list_by_genre/${genre}`;
    const result = await axios.get(endpoint);
    setApiData(result.data);
  };

  useEffect(() => {
    getData();
  }, [genre]);

  return (
    <div className={styles.posterResults}>
      {apiData &&
        apiData.map((item) => (
          <div key={item.id} className={styles.posterItem}>
            {/* Use individual poster item styles here */}
            <PosterItem
              name={item.name}
              price={item.price}
              image={item.image}
              slug={item.slug}
            />
          </div>
        ))}
    </div>
  );
};

export default PosterList;
