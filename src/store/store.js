import { makeAutoObservable } from "mobx";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

class User {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }
  setUser(user) {
    this.user = user;
    console.log(user);
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
}

const userStore = new User();

export default userStore;
