import React from "react";
import { FaUserFriends,FaRegBookmark, FaShareAlt,FaRegStar,FaStar,FaEye } from "react-icons/fa";
import Rating from "react-rating";

const CourseCard = ({course}) => {
    // console.log(course);
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
          <button className="btn btn-primary">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
