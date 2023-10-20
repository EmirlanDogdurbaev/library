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
import AuthForm from "./components/AuthForm/AuthForm";
import { useContext } from "react";
import { Context } from "./main";

function App() {
  const {store} = useContext(Context)
  return (
    <div className="main">
      <div className="nav">
        <Nav />
      </div>
      <div className="body">
        <SearchBar />
        <div className="rightBody">
        <Routes>
          {store.isAuthed
          ?
          <>
          <Route path="/login" element={<AuthForm><Login/></AuthForm>} />
          <Route path="/register" element={<AuthForm><Register/></AuthForm>} />
          </>
          :
          <>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/create-comment" element={<CommentForm />}/>
          </>}
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
