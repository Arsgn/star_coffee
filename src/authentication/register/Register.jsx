import React, { useState } from "react";
import scss from "./Register.module.scss";
import { Alert } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const { singInWithGoogle, register, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={scss.login}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.box}></div>
          <div className={scss.block}>
            {error && <Alert severity="error">{error}</Alert>}
            <h2>Sing up</h2>
            <input type="text" placeholder="Name" />
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <div className={scss.btn}>
              <button
                className={scss.first}
                onClick={() => register(email, password)}
              >
                Регистрация
              </button>
              <p>или</p>
              <button
                className={scss.google}
                onClick={() => singInWithGoogle()}
              >
                <img
                  src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
                  alt=""
                />{" "}
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
