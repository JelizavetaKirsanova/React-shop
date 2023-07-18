import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import userStore from "../store/store.js";
import {observer} from "mobx-react"

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const login = ()=>{
  userStore.signIn(email, password)
  .then(()=>{window.location.href = "/"}) 
}


  
  return (
    <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <h1>login</h1>
    <input
      type="email"
      placeholder="email..."
      onChange={(event) => setEmail(event.currentTarget.value)}
    />
    <input
      type="password"
      placeholder="password..."
      onChange={(event) => setPassword(event.currentTarget.value)}
    />
    <button onClick={login}>Submit</button>
    <Link to="/">Home</Link>
  </div>
  );
}

export default observer(Login) ;
