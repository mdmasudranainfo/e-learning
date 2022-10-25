import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ Cours }) => {
  return (
    <div>
      <h1 className="border-2 m-3 p-2 rounded-md  hover:bg-slate-300 border-sky-500">
        <Link to={`/courses/${Cours.id}`}> {Cours.title}</Link>
      </h1>
    </div>
  );
};

export default Cart;
