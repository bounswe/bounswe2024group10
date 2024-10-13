import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
const navBarOptions = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
]
const Navbar = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.navList}>
        {
          navBarOptions.map(({ name, path }) => (
            <li key={name} className={styles.navElement}>
              <Link className={styles.navLink} to={path}>{name}</Link>
            </li>
          ))
        }
      </ul>
      <hr />
    </nav>
  );
}
export default Navbar