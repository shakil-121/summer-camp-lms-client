import React, { useContext } from "react";
import { FaUserFriends,FaRegBookmark, FaShareAlt,FaRegStar,FaStar,FaEye } from "react-icons/fa";
import Rating from "react-rating";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const CourseCard = ({course}) => {
    console.log(course);
    const {user}=useContext(AuthContext)

    const handlecart=(course)=>{
             if (user && user.email) {
            const enrolledCourse = { courseID:course._id, courseName:course.courseName, price: course.price, instructor_name: course.instructor, image: course.coverPhoto, user_email: user.email };
            console.log(enrolledCourse);
            fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(enrolledCourse)
            })
                .then(res => res.json())
                .then(data => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfull',
                        text: 'Course successfully added.Go to Dashboard',
                    })
                    console.log(data);
                })
        }

    }





  return (
    <div className="card card-compact w-90% bg-base-100 mb-6 shadow-xl">
      <figure>
        <img 
        className="w-full rounded-t-lg"
          src={course?.coverPhoto}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title border-l-4 border-amber-500 ps-2 font-bold">{course?.courseName}</h2>
        <h1 className="text-xl font-semibold">Course Fee: ${course?.price}</h1>
        
        <div className="flex justify-between mt-6">
            <Rating 
          className="text-yellow-500"
            placeholderRating={course?.rating}
            readonly
            emptySymbol={
                <FaRegStar></FaRegStar>
            }
            placeholderSymbol={
                <FaStar></FaStar>
            }
            fullSymbol={
                <FaStar></FaStar>
            }
          /> 
          <div className="flex items-center">
        <FaUserFriends></FaUserFriends><h1 className="ps-2">Available Set: {course?.availableSet}</h1>
        </div>
        </div>
        <div className="card-actions justify-end">
          <button onClick={()=>handlecart(course)} className="btn btn-primary">Add to Enroll</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
