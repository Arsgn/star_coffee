import React from "react";
import scss from "./ViewMenu.module.scss";
import { useNavigate } from "react-router-dom";
const ViewMenu = () => {
  const navigate = useNavigate();
  return (
    <section id={scss.viewmenu}>
      <div className="container">
        <div className={scss.box}>
          <div className={scss.content}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/48d596153372955.632e2efe72dc4.jpg"
              alt="img"
            />
            <div className={scss.menu_text}>
              <h1>The Spring Edit</h1>
              <h3>Fresh flavors, familiar joy.</h3>
              <button onClick={() => navigate("/menu")} className={scss.button}>
                <span class={scss.button__text}>View the menu</span>
              </button>
            </div>
          </div>
          <div className={scss.content}>
            <div className={scss.join_text}>
              <h1>Your first taste of Rewards is free</h1>
              <p>
                Unlock Rewards with your first order. Enjoy a free handcrafted
                drink when you make a qualifying purchase during your first week
                as a Starbucks® Rewards member.*
              </p>
              <button className={scss.button}>
                <span class={scss.button__text}>Join now</span>
              </button>
            </div>
            <img
              src="https://i.pinimg.com/736x/5b/dc/fb/5bdcfb99bf71d82feb5885520a5bf9dd.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewMenu;
