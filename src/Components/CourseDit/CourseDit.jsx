import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDit = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    instructor_name,
    course_thumb,
    title,
    lectures,
    rating,
    subject,
    watch_time,
  } = data;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl my-8 w-8/12   mx-auto">
      <figure className=" lg:w-6/12 sm:w-12/12">
        <img src={course_thumb} alt="Album" />
      </figure>
      <div className="card-body w-6/12">
        <h2 className="card-title">{title}</h2>
        <p>Instructor: {instructor_name}</p>
        <p>Lectures: {lectures}</p>
        <p>watch time: {watch_time}</p>
        <p>Subject: {subject}</p>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 text-orange-500 h-6 inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          : {rating}
        </p>
        <div className="card-actions justify-end">
          <Link to="/checkout" className="btn btn-primary">
            Get Premium Access
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDit;
