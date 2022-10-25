import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDit = () => {
  const detail = useLoaderData();

  return (
    <div>
      <h1>Course Dit</h1>
      <h1>{detail.title}</h1>
    </div>
  );
};

export default CourseDit;
