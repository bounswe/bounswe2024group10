import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { IconHome, IconUser } from "@tabler/icons-react";
const navBarOptions = [
  { name: "Home", path: "/", Icon: IconHome },

  { name: "Profile", path: "/me", Icon: IconUser },
  { name: "Post", path: "/post", Icon: IconUser },
];

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.navList}>
        {navBarOptions.map(({ name, path, Icon }) => (
          <li key={name} className={styles.navElement}>
            <Link className={styles.navLink} to={path}>
              {Icon && <Icon size={24} />}
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
