import React from "react";
import scss from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id={scss.header}>
      <div className="container">
        <div className={scss.header}>
          <div className={scss.header_text}>
            <img
              src="https://img.icons8.com/?size=100&id=tpEHoPSOVXPm&format=png&color=000000"
              alt=""
            />
            <nav>
              <Link to="">
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
            <button className={scss.button}>
              <span class={scss.button__text}>Sign in</span>
            </button>
            <div className={scss.button}>
              <span class={scss.button__text}>Sign up</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
