import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email:"",
    password:""
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try{

      const res = await axios.post(
        "http://localhost:7100/api/auth/login",
        user
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      navigate("/");

      window.location.reload();

    }
    catch(err){

      alert("Invalid Credentials");

    }

  };

  return (

    <div className="auth-page">

      <div className="auth-box">

        <h1>
          Welcome Back 👋
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e)=>
              setUser({
                ...user,
                email:e.target.value
              })
            }
          />

          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e)=>
              setUser({
                ...user,
                password:e.target.value
              })
            }
          />

          <button className="auth-btn">
            Login
          </button>

        </form>

      </div>

    </div>

  );

}

export default Login;