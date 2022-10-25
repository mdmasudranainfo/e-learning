import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import SingleCourse from "../SingleCourse/SingleCourse";

const Course = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="grid grid-cols-3 container mx-auto">
      <div className="">
        {data.map((Cours) => (
          <Cart key={Cours.id} Cours={Cours}></Cart>
        ))}
      </div>
      <div className="col-span-2 grid grid-cols-3 gap-3">
        {data.map((Single) => (
          <SingleCourse key={Single.id} Single={Single}></SingleCourse>
        ))}
      </div>
    </div>
  );
};

export default Course;
