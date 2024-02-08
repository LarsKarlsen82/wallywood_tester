// NoPage.jsx
import React from 'react';
import styles from './NoPage.module.scss';

const NoPage = () => {
  return (
    <div className={styles.noPageContainer}>
      <h1 className={styles.noPageHeading}>404 - Page Not Found <br /> <br />Please scrool down</h1>
      <img
        src="/assets/img/Error2.jpg"
        alt="404 Not Found"
        className={styles.noPageImage}
      />
      {/* Add any additional content for the not found page */}
    </div>
  );
};

export default NoPage;
