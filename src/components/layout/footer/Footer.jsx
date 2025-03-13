import React from "react";
import scss from "./Footer.module.scss";
import { GrInstagram } from "react-icons/gr";
import { SiFacebook } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer class={scss.footer}>
      <img src="" alt="" />
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <img
              src="https://img.icons8.com/?size=100&id=XvRFJSfgZ328&format=png&color=000000"
              alt=""
            />
            <h1>McDonald's</h1>
          </div>
          <div className={scss.block}>
            <div className={scss.box}>
              <ul>
                <li>Contact</li>
                <li>+7-989-586-41-54</li>
                <li>+7-989-485-54-76</li>
                <a href="">mcDonalds@gmail.com</a>
              </ul>
              <ul>
                <li>Products</li>
                <li>Coffee</li>
                <li>Cappuccino</li>
                <li>Fast</li>
              </ul>
            </div>
            <div className={scss.icons}>
              <GrInstagram className={scss.ion} />
              <SiFacebook className={scss.ion} />
              <FiTwitter className={scss.ion} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
