import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({ Single }) => {
  console.log(Single);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="max-w-full" src={Single.course_thumb} alt="Shoes" />
      </figure>
      <div className="card-body grow-0">
        <h2 className="card-title">{Single.title}</h2>
        <p className="p-0 m-0">Watch Time: {Single.watch_time}</p>
        <p className="p-0 m-0"> {Single.lectures}</p>

        <div className="card-actions justify-end">
          <Link className="btn btn-primary">Course Details</Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
