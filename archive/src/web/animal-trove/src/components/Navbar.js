import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Icons, {
  IconHome,
  IconPlus,
  IconSearch,
  IconUser,
} from "@tabler/icons-react";
import { useContext, useEffect } from "react";
import { authContext } from "../context/AuthContext";
const navBarOptions = {
  authenticated: [
    {
      name: "New Post",
      Icon: IconPlus,
      path: "/newpost",
    },
    { name: "Profile", path: "/me", Icon: IconUser },
  ],
  unauthenticated: [
    { name: "Home", path: "/", Icon: IconHome },
    { name: "Search", path: "/search", Icon: IconSearch },
  ],
};

const Navbar = () => {
  const { user } = useContext(authContext);
  useEffect(() => {}, [user]);
  return (
    <nav className={styles.container}>
      <ul className={styles.navList}>
        {navBarOptions.unauthenticated.map(({ name, path, Icon }) => (
          <li key={name} className={styles.navElement}>
            <Link className={styles.navLink} to={path}>
              {Icon && <Icon size={24} />}
              {name}
            </Link>
          </li>
        ))}
        {user ? (
          navBarOptions.authenticated.map(({ name, path, Icon }) => (
            <li key={name} className={styles.navElement}>
              <Link className={styles.navLink} to={path}>
                {Icon && <Icon size={24} />}
                {name}
              </Link>
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
