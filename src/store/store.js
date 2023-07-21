import { makeAutoObservable } from "mobx";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { validateEmail } from "../services/validateEmail";
import { validatePassword } from "../services/validatePassword";

class User {
  user = null;

  constructor() {
    makeAutoObservable(this);
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      this.setUser(JSON.parse(storedUser));
    }
  }
  setUser(user) {
    this.user = user;
    localStorage.setItem("user", JSON.stringify(user));
  }


  
  async signIn(email, password) {
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Signed in
      const user = userCredential.user;
      this.setUser(user);
      alert("logged in");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    }
  }
  async signUp(email, password) {
    const auth = getAuth();

    if (!validateEmail(email) || !validatePassword(password)) {
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        window.location.href = "/";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
}

const userStore = new User();

export default userStore;
