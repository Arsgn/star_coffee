import React, { useEffect } from "react";
import { useProduct } from "../context/ProductContext";

const Menu = () => {
  const { data, readProduct, deleteProduct, editProduct } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);

  console.log(data);

  return (
    <div>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index}>
            <img src={item.imageUrl} alt="" />
            <h1>{item.name}</h1>
            <h1>{item.price}</h1>
            <button onClick={() => deleteProduct(item._id)}>Delete</button>
            <button onClick={() => editProduct()}>Edit</button>
          </div>
        ))
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default Menu;
