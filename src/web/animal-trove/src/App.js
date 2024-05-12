//App.js
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Settings from "./pages/Settings";
import Login from "./pages/LoginSignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "./context/AuthContext";
import SearchPage from "./pages/SearchPage";
import NewPost from "./pages/NewPost";

function App() {
  return (
    <div className="App">
      <AuthContext>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/me" element={<MyProfile />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/me/settings" element={<Settings />} />
          <Route path="/newpost" element={<NewPost />} />
        </Routes>
      </AuthContext>
    </div>
  );
}

export default App;