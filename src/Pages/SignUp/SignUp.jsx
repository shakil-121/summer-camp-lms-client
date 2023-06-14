import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/101191-submit-application-successfully.json";
import logo from "../../assets/logo1.png"
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { FaGoogle, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";



const SignUp = () => { 
  const [error,setError]=useState('')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const {registration,googleLogin}=useContext(AuthContext)


  const onSubmit = data =>{
    console.log(data);
    
    registration(data.email,data.password)
    .then(result=>{
      const loggedUser=result.user; 
      const saveUser = { name: data.name, email: data.email,image:data.image}
      console.log(saveUser);
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    toast("SignUp Successfully ") 
                                }
                            })
      updatePofiledata(loggedUser,data.name,data.image)
    })
    .catch(error=>{
      console.log(error);
      setError(error.message) 
    })
  } 
      
const updatePofiledata=(user,name,photo)=>{
  updateProfile(user,
   {
    displayName:name, 
    photoURL:photo,
   
   }
    )
    .then(()=>{


    })
    .catch(error=>console.log(error))
}
const handlegooglelogin=()=>{
  googleLogin()
}
  return (
    <div>
      <div className="hero w-full min-h-screen rounded-lg mt-24 bg-base-200">
        <div className="hero-content w-4/6 flex-col py-4  lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <Lottie animationData={loginAnimation} loop={true} />
          </div>

          <div className="card flex-shrink-0 md:w-1/2  shadow-2xl bg-base-100">
         
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  {...register("name", { required: true })}
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
                  {...register("email", { required: true })}
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
                  {...register("password", { required: true })}
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
                  name="image"
                  type="text"
                  {...register("image", { required: true })}
                  placeholder="Photo url"
                  className="input input-bordered"
                />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#050931] border-none text-white hover:text-black">Registration</button>
              </div>
              <p className="text-center text-red-600">{error}</p>
              <p className="text-center">Or Sign-up with</p>
              <div className="flex text-center gap-8 py-4 justify-center">
                <Link>
                  <FaGoogle onClick={handlegooglelogin} className="h-6 w-6"></FaGoogle>
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
