import React from "react";
import scss from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const Header = () => {
  const { user, logOutUser } = useAuth();
  const navigate = useNavigate();
  return (
    <header id={scss.header}>
      <div className="container">
        <div className={scss.header}>
          <div className={scss.header_text}>
            <img
              onClick={() => navigate("/")}
              src="https://img.icons8.com/?size=100&id=XvRFJSfgZ328&format=png&color=000000"
              alt=""
            />
            <nav>
              <Link to="/menu">
                <p>MENU</p>
              </Link>
              <Link to="">
                <p>GIFT CARDS</p>
              </Link>
              <Link to="">
                <p>ORDER</p>
              </Link>
            </nav>
          </div>
          <nav>
            <Link to="/add">
              <div className="icon" onClick={() => navigate("/add")}>
                <ion-icon name="person-outline"></ion-icon>
              </div>
            </Link>
            <Link to="/login">
              <button className={scss.button}>
                <span class={scss.button__text}>Sign in</span>
              </button>
            </Link>
            <Link to="/register">
              <div className={scss.button}>
                <span class={scss.button__text}>Sign up</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
