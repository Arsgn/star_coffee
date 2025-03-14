import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const initialState = {
  data: [],
  model: [],
  pageOne: [],
  FullData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, data: action.payload, fullData: action.payload };
    case "GET_MODEL":
      return { ...state, pageOne: [action.payload] };
    case "FILTER":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const API = "https://api-crud.elcho.dev/api/v1/7ffab-5fd79-07473/data";
  const [state, dispatch] = useReducer(reducer, initialState);
  const [oneProduct, setOneProduct] = useState();
  const [modelProduct, setModelProduct] = useState([]);
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
    let { data } = await axios(`${API}/ ${id}`);
    setOneProduct(data);
  }

  async function getProduct(id) {
    let data = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_MODEL",
      payload: data.data,
    });
  }

  async function editProduct(id, editedProduct) {
    delete editedProduct._id;
    await axios.patch(`${API}/${id}`, editedProduct);
  }

  const [page, setPage] = useState(1);
  const itemPerPages = 3;
  const count = Math.ceil(state.data.length / itemPerPages);

  function handlerPage() {
    let start = (page - 1) * itemPerPages;
    let end = start + itemPerPages;
    return state.data.slice(start, end);
  }

  function searchProduct(searchValue) {
    let result = state.data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.category.toLowerCase().includes(searchValue.toLowerCase())
    );
    dispatch({
      type: "GET",
      payload: result,
    });
    if (!searchValue) {
      readProduct();
    }
  }

  function filterProduct(value) {
    if (value === "all") {
      dispatch({
        type: "FILTER",
        payload: state.data.fullData, // Возвращаем полный список товаров
      });
    } else {
      let result = state.data.fullData.filter(
        (item) => item.category.toLowerCase() === value
      );
      dispatch({
        type: "FILTER",
        payload: result,
      });
    }
  }

  const values = {
    addProduct,
    data: state.data,
    model: state.data,
    modelProduct,
    readProduct,
    pageOne: state.pageOne,
    deleteProduct,
    filterProduct,
    getOneProduct,
    handlerPage,
    count,
    setPage,
    editProduct,
    oneProduct,
    getProduct,
    searchProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
