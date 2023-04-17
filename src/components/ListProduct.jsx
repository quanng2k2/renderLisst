import React, { useState } from "react";
import { DataProduct } from "./DataProduct";

function ListProduct() {
  // tạo một mảng mới có quality trong từng object
  const [dataApi, setDataApi] = useState(
    DataProduct.map((item) => ({ ...item, quality: 0 })) 
  );

  // hàm xử lý khi add sản phẩm thì cộng lên 1
  const handlePlus = (id) => {
    setDataApi((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, quality: item.quality + 1 };
        }
        return item;
      })
    );
  };

  // hàm xử lý khi minus sản phẩm.
  // prevData là state hiện tại của dataApi trước khi thay đổi ,
  // Nó được sử dụng để cập nhật state mới của dataApi dựa trên state hiện tại,
  // Khi sử dụng useState, prevData được trả về bởi setDataApi và nó tương,
  // ứng với giá trị của dataApi trước khi bị thay đổi bởi setDataApi.
  const handleMinus = (id) => {
    setDataApi((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, quality: item.quality > 0 ? item.quality - 1 : 0 };
        }
        return item;
      })
    );
  };

  return (
    <div className="mainProduct">
      {dataApi.map((itemCart, index) => (
        <div key={itemCart.id} className="card" style={{ width: "18rem" }}>
          <img src={itemCart.image} className="card-img-top" alt="load" />
          <div className="card-body">
            <div className="flexNamePrice">
              <div>
                <h4 className="card-title">{itemCart.title} </h4>
              </div>
              <div>
                <p> {itemCart.price} $ </p>
              </div>
            </div>
          </div>
          <div className="flexButtonPro">
            <div>
              <button
                onClick={() => handleMinus(itemCart.id)}
                id="buttonInterest"
                className="buttonProduct"
              >
                {" "}
                Interest{" "}
              </button>
            </div>
            <div>
              <span> {itemCart.quality} </span>
            </div>
            <div>
              <button
                onClick={() => handlePlus(itemCart.id)}
                id="buttonAdd"
                className="buttonProduct"
              >
                {" "}
                Add{" "}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListProduct;
  