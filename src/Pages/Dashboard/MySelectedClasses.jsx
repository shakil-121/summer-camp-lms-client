import React from 'react';
import useEnrolledCourse from '../../Hooks/useCart';
import Mycoursecard from './Mycoursecard';

const MySelectedClasses = () => {
const [MyCourses]=useEnrolledCourse()
    return (
        <div>
            <table className="table w-full">
                <thead>
                    <tr className="grid md:grid-cols-9 rounded-md  mb-5 bg-slate-200">
                        <th className="bg-slate-200 font-josefin text-xl">Image</th>
                        <th className="bg-slate-200 font-josefin text-xl">Class name</th>
                        <th className="bg-slate-200 font-josefin text-xl">Price</th>
                       
                    </tr>
                </thead>
              <div>
                {
                    MyCourses.map(course=><Mycoursecard
                    key={course._id}
                    course={course}
                    >

                    </Mycoursecard>)
                }
              </div>
            </table>
        </div>
    );
};

export default MySelectedClasses;