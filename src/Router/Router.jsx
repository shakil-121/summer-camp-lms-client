import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layer/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllCourses from "../Pages/Home/AllCourses/AllCourses";
import PrivateRoute from "../Private/PrivateRoute";
import Dashboard from "../Dashboard/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        }, 
        {
            path:"/signup",
            element:<SignUp></SignUp>
        },
        {
          path:"/allcourses", 
          element:<PrivateRoute><AllCourses></AllCourses></PrivateRoute>
        }
      ]
    },
    {
      path:"dashboard", 
      element:<Dashboard></Dashboard>
    }
  ]);

  export default router;