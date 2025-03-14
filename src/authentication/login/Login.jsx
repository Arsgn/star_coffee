import React, { useState } from "react";
import scss from "./Login.module.scss";
import { Alert } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { login, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // return (
  //   <div className={scss.login}>
  //     <div className="container">
  //       <div className={scss.content}>
  //         <div className={scss.box}></div>
  //         <div className={scss.block}>
  //           <h2>Login</h2>
  //           <input type="text" placeholder="Email" />
  //           <input type="text" placeholder="Password" />
  //           <button>Sing in</button>
  //           <a href="#">Forgot password?</a>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className={scss.login}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.box}></div>
          <div className={scss.block}>
            {error && <Alert severity="error">{error}</Alert>}
            <h2>Sing in</h2>
            {/* <input type="text" placeholder="Name" /> */}
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
            <div className={scss.btn} onClick={() => login(email, password)}>
              <button className={scss.first}>Войти</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
