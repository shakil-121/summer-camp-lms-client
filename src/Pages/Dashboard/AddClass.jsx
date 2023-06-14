import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddClass = () => {
    const {user}=useContext(AuthContext)
    console.log(user.email);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
const onSubmit=data=>{  
    const courseinfo={status:"pending",coverPhoto:data.coverPhoto,courseDetails:data.courseDetails,courseName:data.courseName,instructor:data.instructor,availableSet:data.availableSet,duration:data.duration,price:data.price,rating:parseFloat(4.0),email:data.email}
    console.log(courseinfo);
    fetch('http://localhost:5000/course', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(courseinfo)
    })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                toast("Added Successfully ") 
            }
        })
}
    return (
        <div className='w-full'>
            <div className='bg-indigo-800 text-white h-24'>
                <h1 className='text-3xl text-center pt-6'>ADD New Class or Course</h1>
            </div>
        
              <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className='flex w-full'>
              <div className='pe-2 w-1/2'>
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Course Name</span>
                  </label>
                  <input
                    {...register("courseName", { required: true })}
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Course Details</span>
                  </label>
                  <input
                    {...register("courseDetails", { required: true })}
                    type="text"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    {...register("price", { required: true })}
                    type="text"
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
                    {...register("coverPhoto", { required: true })}
                    placeholder="Photo url"
                    className="input input-bordered"
                  />
                  
                </div>
              </div>
              <div className='pe-2 w-1/2'>
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Instructor Name</span>
                  </label>
                  <input
                    {...register("instructor", { required: true })}
                    type="text"
                    defaultValue={user.displayName}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="text"
                    defaultValue={user.email}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available Set</span>
                  </label>
                  <input
                    {...register("availableSet", { required: true })}
                    type="text"
                    className="input input-bordered"
                  />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Duration</span>
                  </label>
                  <input
                    name="image"
                    type="text"
                    {...register("duration", { required: true })}
                    className="input input-bordered"
                  />
                  
                </div>
              </div>
              </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#050931] border-none text-white hover:text-black">ADD Class</button>
                </div>
              </form>
        <ToastContainer />
      </div>
    );
};

export default AddClass;