import "./styles/app.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import MyBlogs from "./pages/MyBlogs";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/create"
          element={<CreatePost />}
        />
        <Route
  path="/edit/:id"
  element={<EditPost />}
/>
        <Route
  path="/myblogs"
  element={<MyBlogs />}
/>

      </Routes>

    </BrowserRouter>

  );

}

export default App;