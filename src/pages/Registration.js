import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  function validateEmail(inputText) {
    var mailFormat =  /\S+@\S+\.\S+/;
    if (inputText.match(mailFormat)) {
      return true;
    } else {
        alert("invalid email")
      return false;

    }
  }
  function validatePassword(inputText){
    if (inputText.length > 7){
        return true
    } else{
        alert("invalid password")
        return false
    }
  }

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
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <button onClick={register}>Submit</button>
      <Link to="/">Home</Link>
    </div>
  );
}

export { Registration };
