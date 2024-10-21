import { Link, Route, Routes, Navigate } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
import { nav } from "./navigation";
import '../styles/style.css';
import React, { useState } from 'react';
import Home from '../../pages/Home';
import PostPage from '../../pages/PostPage';
import SubforumNavbar from "./subforumNavbar";
import mockData from "../../data/mockData";

export const RenderRoutes = () => {

        const { user } = AuthData();   
        return (
               <Routes>
                    {nav.map((r, i) => {
                    if (r.path === '/login' && user.isAuthenticated) {
                         // Redirect logged-in users trying to access the login page
                         return <Route key={i} path="/login" element={<Navigate to="/" replace />} />;
                    } else if (r.isPrivate && user.isAuthenticated) {
                         if (r.isAdmin && user.role !== 'admin') {
                              // Redirect non-admin users trying to access admin routes
                              
                              return <Route key={i} path={r.path} element={<Navigate to="/notauthorized" replace />} />;
                         }
                         return <Route key={i} path={r.path} element={r.element} />;
                    } else if (r.isPrivate && !user.isAuthenticated) {
                         // Redirect unauthenticated users trying to access private routes
                         
                         return <Route key={i} path={r.path} element={<Navigate to="/login" replace />} />;
                    }     
                     else if (!r.isPrivate) {
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
                    <Route path="/:name/:postId" element={<PostPage />} />
                    {/*<Route path="*" element={<NotFound />} />*/}
               </Routes>
        )
}
export const RenderMenu = () => {
   
    const { user, logout } = AuthData()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

     const toggleDropdown = () => {
     setIsDropdownOpen(!isDropdownOpen);
     };

    const MenuItem = ({r}) => {
         return (
              <div className="menuItem"><Link to={r.path}>{r.name}</Link></div>
         )
    }
    return (
    <div className="topbarContainer">
     <div className="menu">
       <div className="leftMenu">
         {nav.map((r, i) => {
           if (!r.isPrivate && r.isMenu) {
             return <MenuItem key={i} r={r} />;
           } else if (user.isAuthenticated && r.isMenu && !r.isAdmin) {
             return <MenuItem key={i} r={r} />;
           } else if (user.isAuthenticated && r.isMenu && r.isAdmin && user.role === 'admin') {
             return <MenuItem key={i} r={r} />;
           } else return false;
         })}
       </div>
   
       <div className="centerTitle">
          <Link to={'/'} className="link">
              <img src="logo.png" alt="Tradeverse Logo" className="logo" />
          </Link>
       </div>
   
       <div className="rightMenu">
         {user.isAuthenticated ? (
           <div className="menuItem">
             <div className="userDropdown" onClick={toggleDropdown}>
               <h5>{user.name}</h5>
               {isDropdownOpen && (
                 <div className="dropdownContent">
                   <p style={{ color: 'black', fontWeight: 'bold', marginBottom: '5' }}>{user.name}</p>
                   <Link to={'#'} onClick={logout} style={{ color: 'red', fontWeight: 'lighter' }}>
                     Log out
                   </Link>
                 </div>
               )}
             </div>
           </div>
         ) : (
           <div className="menuItem">
             <Link to={'signup'} className="registerButton">
               <i className="fas fa-user-plus"></i> Register
             </Link>
             <Link to={'login'} className="loginButton">Log in</Link>
             
           </div>
         )}
       </div>
     </div>
      <SubforumNavbar subforums={mockData.subforums}/>
     </div>
   );
}