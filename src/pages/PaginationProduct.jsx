import { Pagination } from "@mui/material";
import React from "react";
import { useProduct } from "../context/ProductContext";

const PaginationProduct = () => {
  const { setPage, count } = useProduct();
  const handlerPage = (prev, next) => setPage(next);

  return (
    <div className="page">
      <Pagination onChange={handlerPage} count={count} color="primary" />
    </div>
  );
};

export default PaginationProduct;
