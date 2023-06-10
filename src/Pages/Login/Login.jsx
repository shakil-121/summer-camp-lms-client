import React from 'react'; 
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from "lottie-react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import loginAnimation from "../../assets/login.json";
import { BiError } from "react-icons/bi";
import logo from "../../assets/logo2.png"


const Login = () => {

    const handleLogin=()=>{

    } 

    const handelResetPassword=()=>{

    }
    return (
        <div>
        <div className="hero w-full min-h-screen rounded-lg bg-base-200">
        <div className="hero-content w-4/6 flex-col py-4  lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <Lottie animationData={loginAnimation} loop={true} />
          </div>
          
          <div className="card flex-shrink-0 md:w-1/2  shadow-2xl bg-base-100">
            
            <form onSubmit={handleLogin} className="card-body">
              <div className='bg-indigo-700  rounded-xl'> 
                <img className='h-24 w-auto mx-auto' src={logo} alt="" />
              <h1 className="text-3xl pb-5 font-bold text-center text-white">Login Form</h1>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input 
               
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link onClick={handelResetPassword}><p className="text-blue-600"> Forgot password?</p></Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#050931] border-none text-white hover:text-black">Login</button>
              </div>  
              <p className="text-center text-red-600">error</p>
              <p className="text-center">Or Sign-in with</p>
              <div className="flex text-center gap-8 py-4 justify-center">
                  <Link><FaGithub  className="h-6 w-6"></FaGithub></Link> 
                  {/* <Link onClick={handleSigninGithub}><FaGithub  className="h-6 w-6"></FaGithub></Link>  */}
                
              </div>
            </form>
              <p className="text-center pb-6">Are you New?<Link className="text-blue-600 ps-2" to='/signup'>Registration</Link></p>
          </div>
        </div>
      </div>
  
        <ToastContainer />
      </div>
    );
};

export default Login;