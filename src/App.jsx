import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import SearchBar from "./components/SearchBar/SearchBar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";
import CommentForm from "./pages/CommentForm/CommentForm";

function App() {
  return (
    <div className="main">
      <div className="nav">
        <Nav />
      </div>
      <div className="body">
        <SearchBar />
        <div className="rightBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/create-comment" element={<CommentForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
