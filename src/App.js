import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase-config";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div className="d-flex justify-content-center">
        <div className="m-4 p-5 bg-light rounded shadow-sm">
          <h3>Register User</h3>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email..."
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password..."
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
          <button className="btn btn-warning" onClick={register}>
            Create User
          </button>
        </div>
        <div className="m-4 p-5 bg-light rounded shadow-sm">
          <h3>Login</h3>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password..."
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <button className="btn btn-primary" onClick={login}>
            Login
          </button>
        </div>
      </div>
<div className="m-3 p-4 bg-light rounded shadow-sm">
      <h1 className="mt-4 ">User Logged In:</h1>
      {user?.email && <p>{user.email}</p>}

      {user && (
        <button className="btn btn-danger mt-2" onClick={logout}>
          Sign Out
        </button>
      )}
      </div>
    </div>
  );
}

export default App;
