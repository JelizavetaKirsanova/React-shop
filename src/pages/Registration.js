import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { validateEmail } from "../services/validateEmail";
import { validatePassword } from "../services/validatePassword";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();


  const register = () => {
    if (!validateEmail(email) || !validatePassword(password)){
        return
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
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

export { Registration };
