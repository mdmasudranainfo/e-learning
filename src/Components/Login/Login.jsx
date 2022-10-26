import React from "react";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContex";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
  //
  const Navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // console.log(userInfo);
  const formSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    //
    // login
    loginUser(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        toast.success("Successfully toasted!");
        // console.log(user);
        Navigate(from, { replace: true });
        // updateProfile
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);

        // ..
      });
    console.log(email, password);
  };

  const google = () => {
    googleLogin().then((result) => {
      // The signed-in user info.
      const user = result.user;
      Navigate(from, { replace: true });
      // ...
    });
    //
  };
  const githubSing = () => {
    githubLogin()
      .then((result) => {
        // console.log(result.user);
        Navigate(from, { replace: true });
        toast.success("Successfully Login!");
      })
      .catch((error) => {
        // console.log(error.message);
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={formSubmit} className="card-body">
              <h2 className="text-2xl font-semibold">Login Now</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    New member? Register here.
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className=" flex justify-center gap-4">
                <span onClick={google}>
                  <FaGoogle className="text-2xl text-red-500 cursor-pointer"></FaGoogle>
                </span>
                <span onClick={githubSing}>
                  <FaGithub className="text-2xl text-blue-500 cursor-pointer"></FaGithub>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
