import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.text_link} to="/">
        Home
      </NavLink>
      <NavLink className={styles.text_link} to="/card_container">
        Products
      </NavLink>
      <NavLink className={styles.text_link} to="/about">
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;
