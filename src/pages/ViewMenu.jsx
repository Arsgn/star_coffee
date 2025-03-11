import React from "react";
import scss from "./ViewMenu.module.scss";
const ViewMenu = () => {
  return (
    <section id={scss.viewmenu}>
      <div className="container">
        <div className={scss.box}>
          <div className={scss.content}>
            <img
              src="https://media.istockphoto.com/id/157774909/photo/frappuccino-beverage-from-starbucks-coffee.jpg?s=612x612&w=0&k=20&c=5lXK8UoUL-rQJGP-yEmS8iguA4kK0Xy_OVv1KX0xhe8="
              alt="img"
            />
            <div className={scss.menu_text}>
              <h1>The Spring Edit</h1>
              <h3>Fresh flavors, familiar joy.</h3>
              <button className={scss.button}>
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
              src="https://media.istockphoto.com/id/157774909/photo/frappuccino-beverage-from-starbucks-coffee.jpg?s=612x612&w=0&k=20&c=5lXK8UoUL-rQJGP-yEmS8iguA4kK0Xy_OVv1KX0xhe8="
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewMenu;
