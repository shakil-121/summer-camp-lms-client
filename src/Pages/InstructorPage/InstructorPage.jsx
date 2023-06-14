import React, { useEffect, useState } from 'react';
import InstructorCard from './InstructorCard';
import bg from "../../assets/bg.png"


const InstructorPage = () => {
    const [instractors, setainstractors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user/instructor")
      .then((res) => res.json())
      .then((data) => setainstractors(data));
  }, []);
    return (
        <div className='my-4' >
        <div className='mt-10'>
            <img className='w-full h-72' src={bg} alt="" />
            <h1 className='-mt-36 md:ms-28 ms-8 border-l-4 border-red-700 ps-4 absolute text-white text-4xl font-bold '>All Instructor</h1>
        </div>
         <div className='md:mx-24 mx-6 md:grid md:grid-cols-3 my-16 gap-8'>
            {
                instractors.map(instructor=><InstructorCard
                key={instructor._id} 
                instructor={instructor}
                >   
                </InstructorCard>)
            }
        </div>
       </div>
    );
};

export default InstructorPage;