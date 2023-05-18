import {
    createBrowserRouter,
  } from "react-router-dom";
  import Main from '../Layout/Main';
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Blog/Blog";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "blog",
          element: <Blog></Blog>
        },
      ],
    },
  ]);

  export default router;