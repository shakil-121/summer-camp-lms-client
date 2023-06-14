import React, { useContext, useEffect, useState } from 'react';
import InstructorClass from './InstructorClass';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const InstructorPersonalClass = () => {
    const [courses,setCourses]=useState([])

useEffect(()=>{
    fetch('http://localhost:5000/courses')
    .then(res=>res.json())
    .then(data=>setCourses(data))
},[])
    const { user } = useContext(AuthContext);

    const instructorTotalClass = courses.filter(item => item.email === user.email)

    return (
        <div className='col-start-2 col-span-5 p-16 bg-white'>
            <h1 className='text-4xl text-center font-josefin mb-10'>My Added Courses {instructorTotalClass.length}
            </h1>
            <div>
                <table className="table w-full">
                    <thead>
                        <tr className="grid md:grid-cols-6 rounded-md  mb-5 bg-slate-200">
                            <th className="bg-slate-200 font-josefin text-xl">Serial</th>
                            <th className="bg-slate-200 font-josefin text-xl">Image</th>
                            <th className="bg-slate-200 font-josefin text-xl">Class Name</th>
                            <th className="bg-slate-200 font-josefin text-xl">Available seats</th>
                            <th className="bg-slate-200 font-josefin text-xl">Price</th>
                            <th className="bg-slate-200 font-josefin text-xl">Approval</th>
                        </tr>
                    </thead>
                </table>
                {
                    instructorTotalClass.map((items, index) => <InstructorClass
                        key={items._id}
                        items={items}
                        index={index + 1 }
                    ></InstructorClass>)
                }
            </div>
        </div>
    );
};

export default InstructorPersonalClass;