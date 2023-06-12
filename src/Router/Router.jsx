import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layer/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllCourses from "../Pages/Home/AllCourses/AllCourses";
import PrivateRoute from "../Private/PrivateRoute";
import Dashboard from "../Layer/Dashboard";
import MyEnrollClass from "../Pages/Dashboard/MyEnrollClass";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import AddClass from "../Pages/Dashboard/AddClass";
import MyClass from "../Pages/Dashboard/MyClass";
import ManageClass from "../Pages/Dashboard/ManageClass";
import ManageUser from "../Pages/Dashboard/ManageUser";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses";

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
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>, 
      children:[
        {
          path:"myselectedclasses", 
          element:<MySelectedClasses></MySelectedClasses>
        },
        {
          path:"enrolled-classes",
          element:<MyEnrollClass></MyEnrollClass>
        },
        {
          path:"payment-history",
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:"add-classes",
          element:<AddClass></AddClass>
        },
        {
          path:"my-classes",
          element:<MyClass></MyClass>
        },
        {
          path:"manage-classes",
          element:<ManageClass></ManageClass>
        },
        {
          path:"manage-users",
          element:<ManageUser></ManageUser>  
        }
      ]
    }
  ]);

  export default router;