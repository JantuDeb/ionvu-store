import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axioxPrivate } from "../../utils/axios-instance";

export const Order = () => {
  const [orderItems, setOrderItems] = useState([]);
  useEffect(() => {
    const getMyOrders = async (req, res) => {
      const { data } = await axioxPrivate.get("/myorders");
      const orderItems = data.orders.reduce((acc, curr) => {
        const { orderStatus, paymentInfo, address, createdAt, totalAmount } =
          curr;
        return [
          ...acc,
          ...curr.orderItems.map((order) => ({
            ...order,
            orderStatus,
            paymentInfo,
            address,
            createdAt,
            totalAmount,
          })),
        ];
      }, []);
      setOrderItems(orderItems);
    };

    getMyOrders();
  }, []);

  return (
    <div>
      {orderItems.map(({ _id, image, title, price, orderStatus, quantity, product }) => (
        <div className="flex list-item" key={_id}>
          <Link to={`/products/${product}`} className="image-container flex center">
            <img src={image} alt={title} className="img-fluid" />
          </Link>
          <div className="flex-col p-2">
            <div className="cart-product-title flex">
              <h6>{title}</h6>
            </div>
            <span className=" text-green"> ₹{price}</span>
            <span className="text-gray"> Status: {orderStatus}</span>
            <div className="text-gray">Quantity: {quantity}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
