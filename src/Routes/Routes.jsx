import {
    createBrowserRouter,
  } from "react-router-dom";
  import Main from '../Layout/Main';
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Blog/Blog";
import Register from "../Pages/Register/Register";
import AllToys from "../Pages/allToys/allToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

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
        {
          path: "register",
          element: <Register></Register>
        },
        {
          path: "allToys",
          element: <AllToys></AllToys>
        },
        {
          path: "myToys",
          element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
        },
        {
          path: "addAToy",
          element: <PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>
        },
      ],
    },
  ]);

  export default router;