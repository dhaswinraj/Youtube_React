import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

export default function SignIn() {
  const navigate = useNavigate();
  const [nameuser, setNameuser] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
   if(!nameuser || !password){
    alert("Please enter valid details");
   } 
   else{
    navigate('/body')
   }
   return;
  }
  return (
    <form onSubmit={handleLogin}>
      <h3>Login</h3>
      <input type="email" value={nameuser} placeholder="Enter Your Email" onChange={(e)=>setNameuser(e.target.value)}/><br />
      <input type="password" value={password} placeholder="Enter Your Password"  onChange={(e)=>setPassword(e.target.value)}/><br />
      <button type="submit" onClick={handleLogin} >Sign In</button>
    </form>
  );
}
