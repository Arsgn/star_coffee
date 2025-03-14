import React, { useState } from "react";
import scss from "./AddProduct.module.scss";
import { useProduct } from "../context/ProductContext";

const initialValue = {
  name: "",
  price: "",
  imageUrl: "",
  category: "",
};

const AddProduct = () => {
  const { addProduct, data } = useProduct();

  console.log(data);

  const [inputValues, setInputValues] = useState(initialValue);
  const handlerInput = (e) => {
    if (e.target.name === "price") {
      let obj = { ...inputValues, [e.target.name]: Number(e.target.value) };
      setInputValues(obj);
    } else {
      let obj = { ...inputValues, [e.target.name]: e.target.value };
      setInputValues(obj);
    }
  };
  const handlerSubmit = () => {
    addProduct(inputValues);
    setInputValues(initialValue);
  };

  return (
    <div className={scss.product}>
      <div className="container">
        <div className={scss.box}>
          <div className={scss.git}></div>
          <div className={scss.content}>
            <h2>Products</h2>
            <input
              class="name"
              onChange={(e) => handlerInput(e)}
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              class="price"
              onChange={(e) => handlerInput(e)}
              type="text"
              name="price"
              placeholder="Price"
            />
            <input
              class="imageUrl"
              onChange={(e) => handlerInput(e)}
              type="text"
              name="imageUrl"
              placeholder="ImageUrl"
            />
            <input
              class="category"
              onChange={(e) => handlerInput(e)}
              type="text"
              name="category"
              placeholder="Category"
            />
            <button onClick={handlerSubmit} className={scss.button}>
              <span class={scss.button__text}>Create</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
