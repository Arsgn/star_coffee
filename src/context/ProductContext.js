import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const API = "https://api-crud.elcho.dev/api/v1/25524-ba9ea-89769/MC";
  const [state, dispatch] = useReducer(reducer, initialState);
  const [oneProduct, setOneProduct] = useState();
  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
  }

  async function readProduct() {
    let { data } = await axios.get(API);
    dispatch({
      type: "GET",
      payload: data.data,
    });
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/ ${id}`);
    readProduct();
  }

  async function getOneProduct(id) {
    let data = await axios(`${API}/ ${id}`);
    setOneProduct(data);
  }

  async function editProduct(id, editedProduct) {
    delete editedProduct._id;
    await axios.patch(`${API}/${id}`, editedProduct);
  }
  const values = {
    addProduct,
    data: state.data,
    readProduct,
    deleteProduct,
    getOneProduct,
    editProduct,
    oneProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
