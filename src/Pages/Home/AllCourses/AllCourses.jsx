import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import bg from "../../../assets/bg.png"

const AllCourses = () => {
const [courses,setCourses]=useState([])

useEffect(()=>{
    fetch('http://localhost:5000/courses')
    .then(res=>res.json())
    .then(data=>setCourses(data))
},[])

    return (
       <div className='my-4' >
        <div className='mt-10'>
            <img className='w-full h-72' src={bg} alt="" />
            <h1 className='-mt-36 md:ms-28 ms-8 border-l-4 border-amber-500 ps-4 absolute text-white text-4xl font-bold '>All Course</h1>
        </div>
         <div className='md:mx-24 mx-6 md:grid md:grid-cols-3 my-16 gap-8'>
            {
                courses.map(course=><CourseCard
                key={course._id} 
                course={course}
                >   
                </CourseCard>)
            }
        </div>
       </div>
    );
};

export default AllCourses;