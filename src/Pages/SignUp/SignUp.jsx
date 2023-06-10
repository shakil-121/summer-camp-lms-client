import React from "react";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/101191-submit-application-successfully.json";
import logo from "../../assets/logo1.png"
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { FaGoogle, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";



const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <div className="hero w-full min-h-screen rounded-lg bg-base-200">
        <div className="hero-content w-4/6 flex-col py-4  lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <Lottie animationData={loginAnimation} loop={true} />
          </div>

          <div className="card flex-shrink-0 md:w-1/2  shadow-2xl bg-base-100">
         
            <form  className="card-body">
              <div className="bg-orange-500  rounded-xl">
                <img className="h-24 w-auto mx-auto" src={logo} alt="" />
                <h1 className="text-3xl pb-5 font-bold text-center text-white">
                  Registration Form
                </h1>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
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
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Photo url"
                  className="input input-bordered"
                />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#050931] border-none text-white hover:text-black">Registration</button>
              </div>
              <p className="text-center text-red-600">error</p>
              <p className="text-center">Or Sign-up with</p>
              <div className="flex text-center gap-8 py-4 justify-center">
                <Link>
                  <FaGithub className="h-6 w-6"></FaGithub>
                </Link>
                {/* <Link onClick={handleSigninGithub}><FaGithub  className="h-6 w-6"></FaGithub></Link>  */}
              </div>
            </form>
            <p className="text-center pb-6">
              Already have an account?
              <Link className="text-blue-600 ps-2" to="/login">
               LogIn
              </Link>
            </p>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SignUp;
