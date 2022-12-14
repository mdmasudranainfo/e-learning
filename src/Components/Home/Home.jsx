import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2019/05/26/06/02/learn-4229622_960_720.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-white font-bold">Hello Learner</h1>
          <p className="mb-5 text-white">
            Take one of E Learning range of courses and learn how to code using
            this incredibly useful language.
          </p>
          <Link to="/courses" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
