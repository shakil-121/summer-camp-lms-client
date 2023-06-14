import React, { useContext } from "react";
import logo from "../assets/logo1.png"
import { Link } from "react-router-dom"; 
import { AuthContext } from "../AuthProvider/AuthProvider";


const Header = () => {
  const {user,logout}=useContext(AuthContext) 
  // console.log(user.photoURL);

  const handleLogout=()=>{
    logout()
  }
  return (
    <div className="md:px-28 z-10 navbar top-0 bg-base-100 fixed">
      <div className="navbar-start">
        <div className="dropdown z-10">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="text-sm font-bold">Home</Link>
            </li>
            <li>
              <Link className="text-sm font-bold" to="/allcourses">Classes</Link>
            </li>
            <li>
              <Link to="/instructor" className="text-sm font-bold">Instructor</Link>
            </li> 
            {
              user?<>
              <li>
              <Link to="/dashboard" className="text-sm font-bold">Dashboard</Link>
            </li> 
              </>:<></>
            }
          </ul>
        </div>
        <Link to="/"><img className="h-16" src={logo} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="text-sm font-bold">Home</Link>
          </li>
          <li tabIndex={0}>
             <Link className="text-sm font-bold" to="/allcourses">Classes</Link>
          </li>
          <li>
            <Link to="/instructor" className="text-sm font-bold">Instructor</Link>
          </li>
          {
              user?<>
              <li>
              <Link to="/dashboard" className="text-sm font-bold">Dashboard</Link>
            </li> 
              </>:<></>
            }
        </ul>
      </div>
      <div className="navbar-end">
          {
            user?<>
            <div>
            <Link>
            <img className="h-10 me-4 w-auto rounded-lg"
            title={user?.displayName}
            src={user.photoURL} alt="" /></Link>
            </div>
            <button onClick={handleLogout} className="btn">Logout</button>
            </>:<>
            <Link to="/login" className="btn">SignIn</Link>
            <Link to="/signup" className="btn ms-3">SignUp</Link>
            </>
          }
      </div>
    </div>
  );
};

export default Header;
