import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BasketProvider, useBasket } from '../Basket/BasketContext';


import styles from './NavBar.module.scss';

const NavBar = () => {
  const { basket } = useBasket();
  const basketCount = basket.length;
  const location = useLocation();

  return (
    <nav className={styles.NavContainer}>
      <div className={styles.NavDiv}>
        <h2 className={styles.NavH2}>
          <span>Wallywood</span>
        </h2>

        <div className={styles.NavBasket}>
          <NavLink to="/basket" className={styles.NavLink} activeClassName={styles.activeLink}>
            <FontAwesomeIcon icon={faShoppingBasket} size="lg" />
            {basketCount > 0 && <span className={styles.BasketCount}>{basketCount}</span>}
          </NavLink>
        </div>

        <ul className={styles.NavList}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/plakater">Plakater</Link></li>
          <li><Link to="/om-os">Om os</Link></li>
          <li><Link to="/kontakt">Kontakt</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
