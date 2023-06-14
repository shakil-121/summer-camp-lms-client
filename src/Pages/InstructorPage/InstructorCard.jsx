import React from 'react';
import { FaBookOpen } from "react-icons/fa";


const InstructorCard = ({instructor}) => {
    return (
        <div>
            <div className="card w-62 bg-base-100 shadow-xl">
                <img
                  src={instructor?.image}
                  alt="Shoes"
                  className="rounded-xl"
                />
              
              <div className="card-body items-center text-center">
                <h2 className="card-title">{instructor?.name}</h2>
                <p className="text-base">Instructor</p>
                <div className="flex items-center">
                    <FaBookOpen className="text-indigo-700 me-3"></FaBookOpen>
                    <p>Total Course: {instructor?.totalClasses}</p>
                </div>
                {/* <div className="card-actions">
                  <button className="btn btn-primary">See Details</button>
                </div> */}
              </div>
            </div>
        </div>
    );
};

export default InstructorCard;