import React from "react";

const Mycoursecard = ({ course }) => {
    console.log(course);
  return (
    <div>
      <tbody>
        <tr className="bg-[#EEEEEE] rounded-md grid md:grid-cols-9 mb-5 items-center shadow-lg">
          <td>
            <img className="w-20 h-20 rounded-md" src={course.image} alt="" />
          </td>
          <td>
            <p className="font-serif font-semibold">{course.courseName}</p>
          </td>
          <td>
            <p className="font-serif font-semibold">{course.price}</p>
          </td>
          
        </tr>
                
      </tbody>
    </div>
  );
};

export default Mycoursecard;
