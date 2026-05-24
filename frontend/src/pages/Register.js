import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name:"",
    email:"",
    password:""
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try{

      await axios.post(
        "http://localhost:7100/api/auth/register",
        user
      );

      alert("Registration Successful 🎉");

      navigate("/login");

    }
    catch(err){

      alert("Something went wrong");

    }

  };

  return (

    <div className="auth-page">

      <div className="auth-box">

        <h1>
          Create Account 🚀
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            placeholder="Full Name"
            onChange={(e)=>
              setUser({
                ...user,
                name:e.target.value
              })
            }
          />

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
            Register
          </button>

        </form>

      </div>

    </div>

  );

}

export default Register;