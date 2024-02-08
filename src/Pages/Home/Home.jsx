// Home.jsx
import React from 'react';
import RandomPosters from '../Posters/RandomPosters';
import styles from './Home.module.scss';

const Home = () => {
    return (
      <>
      <div className={styles.Home}>
      
      <RandomPosters/>
      </div>
      </>
    );
  };
  
  export default Home;
  