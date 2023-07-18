import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const login = ()=>{
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("logged in")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
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

export { Login };
