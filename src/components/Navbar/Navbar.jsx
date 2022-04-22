import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.text_link} to="/">
        Home
      </NavLink>
      <HashLink className={styles.text_link} smooth to="#CardsContainer">
        Products
      </HashLink>
      <NavLink className={styles.text_link} to="/about">
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;
