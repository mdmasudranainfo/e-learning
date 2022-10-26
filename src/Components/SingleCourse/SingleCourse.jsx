import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({ Single }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="max-w-full" src={Single.course_thumb} alt="Shoes" />
      </figure>
      <div className="card-body grow-0 mt-0 pt-0">
        <h2 className="card-title">{Single.title}</h2>
        <p className="p-0 m-0">Price: {Single.advance_price}$</p>
        <p className="p-0 m-0">Students: {Single.student}</p>

        <div className="card-actions justify-end">
          <Link to={`/courses/${Single.id}`} className="btn btn-primary">
            Course Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
