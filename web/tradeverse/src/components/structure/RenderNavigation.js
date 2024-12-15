import { Link, Route, Routes, Navigate } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
import { nav } from "./navigation";
import styles from "../styles/style.module.css";
import React, { useState , useEffect } from "react";
import Home from "../../pages/Home";
import PostPage from "../../pages/PostPage";
import SubforumNavbar from "./subforumNavbar";
import mockData from "../../data/mockData";
import Account from "../../pages/Account";
import User from "../../pages/User";
import AssetInfo from "../../pages/AssetInfo";
import Subforum from "../../pages/Subforum";
import TagPage from "../../pages/TagPage";
import logo from "../../data/logo_new.png";
import part_logo from "../../data/part_logo.png";


export const RenderRoutes = () => {
  const { user } = AuthData();
  return (
    <Routes>
      {nav.map((r, i) => {
        if (r.path === "/login" && user.isAuthenticated) {
          // Redirect logged-in users trying to access the login page
          return (
            <Route
              key={i}
              path="/login"
              element={<Navigate to="/" replace />}
            />
          );
        } else if (r.isPrivate && user.isAuthenticated) {
          if (r.isAdmin && !user.isAdmin) {
            // Redirect non-admin users trying to access admin routes

            return (
              <Route
                key={i}
                path={r.path}
                element={<Navigate to="/notauthorized" replace />}
              />
            );
          }
          return <Route key={i} path={r.path} element={r.element} />;
        } else if (r.isPrivate && !user.isAuthenticated) {
          // Redirect unauthenticated users trying to access private routes

          return (
            <Route
              key={i}
              path={r.path}
              element={<Navigate to="/login" replace />}
            />
          );
        } else if (!r.isPrivate) {
          return <Route key={i} path={r.path} element={r.element} />;
        }
        return null;
      })}
      {/* Route for MessageDetails with authentication check */}
      {/*user.isAuthenticated ? (
                         <Route path="/messages/:id" element={<MessageDetails />} />
                    ) : (
                         <Route path="/messages/:id" element={<Navigate to="/notauthorized" replace />} />
                    )}
                    {(user.isAuthenticated  && user.role==='admin')?(
                         <Route path="/users/:id" element={<EditUser />} />
                    ) : (
                         <Route path="/users/:id" element={<Navigate to="/notauthorized" replace />} />
                    )*/}
      <Route path="/:name" element={<Home />} />

      <Route path="/:parentId/:postId" element={<PostPage />} />
      <Route path="/account" element={<Account />} />
      <Route path="/user" element={<User />} />
      <Route path="/assets/:id" element={<AssetInfo />} />
      <Route path="/subforum/:subforumId" element={<Subforum />} />
      <Route path="/tag/:tag" element={<TagPage />} />

      {/*<Route path="*" element={<NotFound />} />*/}
    </Routes>
  );
};
export const RenderMenu = () => {
  const { user, logout } = AuthData();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [subforums, setSubforums] = useState([]); // State for subforums

  useEffect(() => {
    fetch("http://35.246.188.121:8080/api/subforum/all") // New endpoint
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API directly returns an array of subforums
        if (Array.isArray(data)) {
          const formattedSubforums = data.map((subforum) => ({
            id: subforum.id,
            name: subforum.name, // Adjusted to the 'name' field
            description: subforum.description, // Including description if needed
            tagColor: subforum.tagColor, // Including tag color if needed
          }));
          setSubforums(formattedSubforums.slice(0, 5)); // Take the first 5 subforums
        } else {
          console.error("Unexpected data format:", data);
        }
      })
      .catch((error) => console.error("Error fetching subforums:", error));
  }, []);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const MenuItem = ({ r }) => {
    return (
      <div className={styles.menuItem}>
        <Link to={r.path}>{r.name}</Link>
      </div>
    );
  };

  return (
    <div className={styles.topbarContainer}>
      <div
        className={`${styles.sidebar} ${
          isSidebarOpen ? styles.expanded : styles.collapsed
        }`}
      >
        <div className={styles.sidebarLogoContainer}>
          {isSidebarOpen ? (
            <img
              src={logo}
              alt="Tradeverse Logo"
              className={styles.sidebarLogo}
            />
          ) : (
            <img
              src={part_logo}
              alt="Tradeverse Logo"
              className={styles.sidebarSmallLogo}
            />
          )}
        </div>
        <Link to={"/"} className={styles.link}>
          <div className={styles.sidebarElement}>
            <div className={styles.iconContainer}>
              <i className="fas fa-home"></i>
            </div>
            {isSidebarOpen && (
              <div className={styles.sidebarText}>
                <h3>Home</h3>
              </div>
            )}
          </div>
        </Link>
        <Link to={"/search"} className={styles.link}>
          <div className={styles.sidebarElement}>
            <div className={styles.iconContainer}>
              <i className="fas fa-search"></i>
            </div>
            {isSidebarOpen && (
              <div className={styles.sidebarText}>
                <h3>Search</h3>
              </div>
            )}
          </div>
        </Link>
        {user.isAuthenticated && (
          <div>
            <Link to={"/portfolio"} className={styles.link}>
              <div className={styles.sidebarElement}>
                <div className={styles.iconContainer}>
                  <i className="fas fa-chart-pie"></i>
                </div>
                {isSidebarOpen && (
                  <div className={styles.sidebarText}>
                    <h3>Portfolio</h3>
                  </div>
                )}
              </div>
            </Link>
            <Link to={"/account"} className={styles.link}>
            <div className={styles.sidebarElement}>
              <div className={styles.iconContainer}>
                <i className="fas fa-user"></i>
              </div>
              {isSidebarOpen && (
                <div className={styles.sidebarText}>
                  <h3>Account</h3>
                </div>
              )}
            </div>
            </Link>
            {user.isAdmin && (
              <Link to={"/create-subforum"} className={styles.link}>
              <div className={styles.sidebarElement}>
                <div className={styles.iconContainer}>
                  <i className="fas fa-plus-circle"></i>
                </div>
                {isSidebarOpen && (
                  <div className={styles.sidebarText}>
                    <h3>Create Subforum</h3>
                  </div>
                )}
              </div>
              </Link>
            )}
          </div>
        )}
        <button className={styles.sidebarToggle} onClick={toggleSidebar}>
          {isSidebarOpen ? "<" : ">"}
        </button>
      </div>

      <div className={styles.menu}>
        <div className={styles.leftMenu}>
          {nav.map((r, i) => {
            if (!r.isPrivate && r.isMenu) {
              return <MenuItem key={i} r={r} />;
            } else if (user.isAuthenticated && r.isMenu && !r.isAdmin) {
              return <MenuItem key={i} r={r} />;
            } else if (
              user.isAuthenticated &&
              r.isMenu &&
              r.isAdmin &&
              user.role === "admin"
            ) {
              return <MenuItem key={i} r={r} />;
            } else return false;
          })}
        </div>

        <div className={styles.centerTitle}>
          <Link to={"/"} className={styles.link}>
            <img
              src={logo}
              alt="Tradeverse Logo"
              className={styles.logo}
            />
          </Link>
        </div>

        <div className={styles.rightMenu}>
          {user.isAuthenticated ? (
            <div className={styles.menuItem}>
              <div className={styles.userDropdown} onClick={toggleDropdown}>
                <h5>{user.name}</h5>
                {isDropdownOpen && (
                  <div className={styles.dropdownContent}>
                    <Link
                      className={styles.clickableLink}
                      to="/account"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        marginBottom: "5",
                        display: "block",
                      }}
                    >
                      {user.name}
                    </Link>
                    <Link
                      className={styles.clickableLink}
                      to={"#"}
                      onClick={logout}
                      style={{ color: "red", fontWeight: "lighter" }}
                    >
                      Log out
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className={styles.menuItem}>
              <Link to={"signup"} className={styles.registerButton}>
                <i className="fas fa-user-plus"></i> Register
              </Link>
              <Link to={"login"} className={styles.loginButton}>
                Log in
              </Link>
            </div>
          )}
        </div>
      </div>
      <SubforumNavbar subforums={subforums} />
    </div>
  );
};
