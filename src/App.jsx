import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import SearchBar from "./components/SearchBar/SearchBar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Register";
import CommentForm from "./pages/CommentForm/CommentForm";
import { Logger } from "sass";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <div className="main">
      <Nav />
      <div className="body">
        <SearchBar />
        <div className="rightBody">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-comment" element={<CommentForm />} />
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
