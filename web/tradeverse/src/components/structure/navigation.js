import  Home  from "../../pages/Home"
import About from "../../pages/About"
import Login from "../../pages/Login"
import SignUp from "../../pages/SignUp"
import Search from "../../pages/Search"
import AssetInfo from "../../pages/AssetInfo"

export const nav = [
     { path:     "/",         name: "Home",        element: <Home />,       isMenu: false,     isPrivate: false  , isAdmin:false},
     { path:     "/login",    name: "Login",       element: <Login />,      isMenu: false,    isPrivate: false  , isAdmin:false},
     { path:     "/signup", name: "Signup",    element: <SignUp />,   isMenu: false,     isPrivate: false  , isAdmin:false},
     { path:      "/Home",    name: "Home",       element: <Home />,      isMenu: false,     isPrivate: false  , isAdmin:false},
     { path:      "/subforum",  name: "Subforum",     element: <About />,    isMenu: false,     isPrivate: false  , isAdmin:false},
     { path:    "/notfound", name: "Not Found",  element: <Home />,   isMenu: false,    isPrivate: false  , isAdmin:false},
     { path:   "/notauthorized", name: "Not Authorized", element: <Home />, isMenu: false, isPrivate: false  , isAdmin:false},
     { path: "/adduser", name: "Add User", element: <Home />, isMenu: false, isPrivate: false, isAdmin: false },
     { path: "/search", name: "Search", element: <Search />, isMenu: false, isPrivate: false, isAdmin: false },
     { path: "/asset", name: "Asset", element: <AssetInfo />, isMenu: false, isPrivate: false, isAdmin: false },
]