//App.js
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import MyProfile from "./pages/MyProfile";
import Settings from "./pages/Settings";
import Post from "./pages/Post";
import Login from "./pages/LoginSignUp";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<Post />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/me" element={<MyProfile />} />
          <Route path="/me/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
