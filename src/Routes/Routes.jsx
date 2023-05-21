import {
    createBrowserRouter,
  } from "react-router-dom";
  import Main from '../Layout/Main';
  import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Blog/Blog";
import Register from "../Pages/Register/Register";
import AllToys from "../Pages/allToys/allToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import SingleToyDetails from "../Pages/SingleToyDetails/SingleToyDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import UpdateMyToys from "../Pages/UpdateMyToys/UpdateMyToys";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader:()=> fetch('https://music-store-server-nz5vqtaax-75mdnazmul.vercel.app/shopByCategory')
        },
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
          element: <AllToys></AllToys>,
          loader: ()=> fetch('https://music-store-server-nz5vqtaax-75mdnazmul.vercel.app/musicToy')
        },
        {
          path: "myToys",
          element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
        },
        {
          path: "addAToy",
          element: <PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>
        },
        {
          path: "singleToyDetails/:id",
          element: <PrivateRoutes><SingleToyDetails></SingleToyDetails></PrivateRoutes>,
          loader:({params})=> fetch(`https://music-store-server-nz5vqtaax-75mdnazmul.vercel.app/shopByCategory/${params.id}`)
        },
        {
          path: "musicToy/:id",
          element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
          loader:({params})=> fetch(`https://music-store-server-nz5vqtaax-75mdnazmul.vercel.app/musicToy/${params.id}`)
        },
        {
          path: "updateMyToys/:id",
          element: <UpdateMyToys></UpdateMyToys>,
          loader:({params})=> fetch(`https://music-store-server-nz5vqtaax-75mdnazmul.vercel.app/updateMyToys/${params.id}`)
        },
      ],
    },
  ]);

  export default router;