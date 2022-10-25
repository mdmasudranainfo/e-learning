import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import CourseDit from "./Components/CourseDit/CourseDit";
import Course from "./Components/Courses/Course";
import FaQ from "./Components/FAq/FaQ";
import Home from "./Components/Home/Home";
import Main from "./Components/Layout/Main";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

//
//
//
//

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Course></Course>,
      },
      {
        path: "/faq",
        element: <FaQ></FaQ>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/courses/:id",
        element: <CourseDit></CourseDit>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/data/${params.id}`),
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
