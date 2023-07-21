import { Link } from "react-router-dom";
import { useState } from "react";
import {observer} from "mobx-react"
import userStore from "../store/store.js";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    userStore.signUp(email, password)
  .then(()=>{window.location.href = "/"})
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Registration</h1>
      <input
        type="email"
        placeholder="email..."
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
      />
      <input
        type="password"
        placeholder="password..."
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <button onClick={register}>Submit</button>
      <Link to="/">Home</Link>
    </div>
  );
}

export default observer(Registration) ;
