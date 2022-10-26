import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import SingleCourse from "../SingleCourse/SingleCourse";

const Course = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-server-blond.vercel.app/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  //
  if (!data) {
    return <div>loading..</div>;
  }

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:mx-4  container mx-auto">
      <div className="">
        {data.map((Cours) => (
          <Cart key={Cours.id} Cours={Cours}></Cart>
        ))}
      </div>
      <div className="col-span-2  grid lg:grid-cols-3 md:grid-cols-3 sm:mx-5 gap-3">
        {data.map((Single) => (
          <SingleCourse key={Single.id} Single={Single}></SingleCourse>
        ))}
      </div>
    </div>
  );
};

export default Course;
