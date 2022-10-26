import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const data = useLoaderData();
  // console.log(data);
  const { title, advance_price } = data;
  return (
    <div className="my-10 mb-64 text-center">
      <h1 className="text-center text-5xl">{title}</h1>
      <p className=" text-5xl mt-3">Price: {advance_price}$</p>
    </div>
  );
};

export default CheckOut;
