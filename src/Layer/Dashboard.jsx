import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom"; 
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstractor";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Dashboard = () => {
    const [isAdmin,isAdminLoading] = useAdmin();
    const [isIstructor]=useInstructor(); 
    const {user}=useContext(AuthContext) 
    console.log(user);

    return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side border-r-8 border-amber-500 bg-indigo-800 text-white">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
        <div className="mx-auto">
            <h1 className="text-2xl font-bold text-center mb-20">Dashboard</h1>
           <img className="border-8 mx-auto border-gray-50 h-36 w-auto rounded-xl" src={user?.photoURL} alt="" />
         <h1 className="text-xl">Name: {user?.displayName}</h1>
          </div>
          <div className="divider bg-white h-1"></div>

          {
            isAdmin?<>
             <li>
                <NavLink to="/">
                  <FaHome></FaHome> Home
                </NavLink>
              </li>
            <li>
                <NavLink to="/dashboard/manage-classes">
                  <FaCalendarAlt></FaCalendarAlt> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-users">
                  <FaUsers></FaUsers> Manage User
                </NavLink>
              </li>
            </>:isIstructor?<>
            <li>
                <NavLink to="/">
                  <FaHome></FaHome> Home
                </NavLink>
              </li>
            <li>
                <NavLink to="/dashboard/add-classes">
                  <FaBook></FaBook> Add a Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-classes">
                  <FaCalendarAlt></FaCalendarAlt> My Classes
                </NavLink>
              </li>
            </>:user?<>
            <li>
                <NavLink to="/">
                  <FaHome></FaHome> Home
                </NavLink>
              </li>
            <li>
                <NavLink to="/dashboard/myselectedclasses">
                  <FaShoppingCart></FaShoppingCart> My Selected Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrolled-classes">
                  <FaCalendarAlt></FaCalendarAlt> My Enrolled Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment-history">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
            </>:<></>
          }
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
