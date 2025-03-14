import React, { useEffect, useState } from "react";
import scss from "./AddProduct.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../context/ProductContext";

const initialValue = {
  name: "",
  price: "",
  imageUrl: "",
  category: "",
};

const Edit = () => {
  const { getOneProduct, oneProduct, editProduct, user } = useProduct();
  const { id } = useParams();
  const [inputValues, setInputValues] = useState(initialValue);

  const navigate = useNavigate();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setInputValues(oneProduct);
    }
  }, [oneProduct]);

  const handlerInput = (e) => {
    if (e.target.name === "price") {
      let obj = { ...inputValues, [e.target.name]: Number(e.target.value) };
      setInputValues(obj);
    } else {
      let obj = { ...inputValues, [e.target.name]: e.target.value };
      setInputValues(obj);
    }
  };
  const save = () => {
    editProduct(id, inputValues);
  };

  return (
    <div className={scss.product}>
      <div className="container">
        <div className={scss.box}>
          <div className={scss.git}></div>
          <div className={scss.content}>
            <h2>save</h2>
            <input
              onChange={(e) => handlerInput(e)}
              name="name"
              type="text"
              value={inputValues.name}
              placeholder="Name"
            />
            <input
              onChange={(e) => handlerInput(e)}
              name="price"
              type="number"
              value={inputValues.price}
              placeholder="Price"
            />
            <input
              onChange={(e) => handlerInput(e)}
              name="imageUrl"
              type="text"
              value={inputValues.imageUrl}
              placeholder="ImageUrl"
            />
            <input
              onChange={(e) => handlerInput(e)}
              name="category"
              type="text"
              value={inputValues.category}
              placeholder="Category"
            />
            <button onClick={save} className={scss.button}>
              <span onClick={() => navigate("/menu")} class={scss.button__text}>
                Save
              </span>
            </button>
            {/* {user
              ? (user.email === "black@gmail.com",
                "arsenkonurbaev122@gmail.com" ? (
                  <button onClick={save} className={scss.button}>
                    <span class={scss.button__text}>Save</span>
                  </button>
                ) : (
                  ""
                ))
              : ""} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
