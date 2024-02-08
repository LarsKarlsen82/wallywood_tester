// NavBar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.NavContainer}>
      <div className={styles.NavDiv}>
        <h2 className={styles.NavH2}>
          <span>Wallywood</span>
        </h2>

        <div className={styles.NavBasket}>
          <a href="/">
            <FontAwesomeIcon icon={faShoppingBasket} size="lg" className={styles.BasketIcon} />
          </a>
        </div>

        <ul className={styles.NavList}>
          <li><a href="/">Home</a></li>
          <li><a href="/">Plakater</a></li>
          <li><a href="/">Om os</a></li>
          <li><a href="/">Kontakt</a></li>
          <li><a href="/">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
