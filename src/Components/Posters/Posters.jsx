// Poster.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import styles from './Posters.module.scss'; // Import your styles
import { GenreNav} from './GenreNav';
// import { PosterList } from './PosterList';
// import { PosterDetails } from './PosterDetails';

const Posters = () => {
  return (
    <>
    <div className={styles.postersContainer}>
      <div className={styles.postersList}>
        <h2>Plakater</h2>
        <GenreNav />
      </div>
      <div className={styles.FilmResults}>
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default Posters;

