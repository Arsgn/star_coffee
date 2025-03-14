import React, { useEffect, useState } from "react";
import scss from "./Menu.module.scss";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  getProduct,
  Tooltip,
} from "@mui/material";
import { useProduct } from "../context/ProductContext";
import PaginationProduct from "./PaginationProduct";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const {
    pageOne,
    deleteProduct,
    getOneProduct,
    getProduct,
    filterProduct,
    readProduct,
    handlerPage,
    searchProduct,
  } = useProduct();
  const navigate = useNavigate();

  useEffect(() => {
    readProduct();
  }, []);
  return (
    <>
      <section id={scss.menu}>
        <div className="container">
          <div className={scss.box}>
            <div className={scss.search}>
              <input
                onChange={(e) => searchProduct(e.target.value)}
                type="text"
                placeholder="Search"
              />
            </div>
            <FormControl>
              <FormLabel
                sx={{ color: "#fff" }}
                id="demo-radio-buttons-group-label"
              >
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(e) => filterProduct(e.target.value)}
              >
                <FormControlLabel
                  value="all"
                  sx={{ color: "#fff" }}
                  control={<Radio sx={{ color: "#fff" }} />}
                  label="All"
                />
                <FormControlLabel
                  value="burger"
                  sx={{ color: "#fff" }}
                  control={<Radio sx={{ color: "#fff" }} />}
                  label="Burger"
                />
                <FormControlLabel
                  value="drink"
                  sx={{ color: "#fff" }}
                  control={<Radio sx={{ color: "#fff" }} />}
                  label="Drink"
                />
                <FormControlLabel
                  value="souse"
                  sx={{ color: "#fff" }}
                  control={<Radio sx={{ color: "#fff" }} />}
                  label="Souse"
                />
              </RadioGroup>
            </FormControl>
            <div className={scss.card}>
              {handlerPage().length > 0 ? (
                handlerPage().map((item, index) => (
                  <div key={index}>
                    <div className={scss.cards}>
                      <img src={item.imageUrl} alt="" />
                      <h2>{item.name}</h2>
                      <p>{item.price} $</p>
                      <div className={scss.btn}>
                        <button onClick={() => deleteProduct(item._id)}>
                          delete
                        </button>
                        <button onClick={() => navigate(`/edit/${item._id}`)}>
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className={scss.aa}>
                  <div class={scss.loader}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
            </div>
            <div className={scss.pagi}>
              <PaginationProduct />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
