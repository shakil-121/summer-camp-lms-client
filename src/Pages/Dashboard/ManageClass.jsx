import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ManageClass = () => {
    // const [courses,setCourses]=useState([])

    const [axiosSecure] = useAxiosSecure();
    const { data: courses = [], refetch } = useQuery(['courses'], async () => {
        const res = await axiosSecure.get('/courses')
        return res.data;
    })

    // useEffect(()=>{
    //     fetch('http://localhost:5000/courses')
    //     .then(res=>res.json())
    //     .then(data=>setCourses(data))
    // },[])

    const handleconfirmed = course =>{
      const approved={id:course._id,status:"confirmed"}
      fetch(`http://localhost:5000/course/status/${course._id}`, {
          method: 'PATCH',
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(approved)

      })
      .then(res => res.json())
      .then(data => {
          console.log(data)
          if(data.modifiedCount){
            refetch()
              Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: `${user.name} confirmed!`,
                  showConfirmButton: false,
                  timer: 1500
                })
          }
      })
  }
  const handledeny = course =>{
    const deny={id:course._id,status:"deny"}
    fetch(`http://localhost:5000/course/status/${course._id}`, {
        method: 'PATCH',
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(deny)

    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
          refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} Deny!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
}


    return (
        <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead className="bg-violet-900 text-white">
            <tr>
              <th>
                <label>
                 <h1>#</h1>
                </label>
              </th>
              <th>classes</th>
              <th>Status</th>
              <div>
              <th>Action</th>
              </div>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                courses.map((course,index)=>(
                    <tr className="">
              <th>
                {
                    index+1
                }
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-24 h-12">
                      <img
                        src={course?.coverPhoto}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{course?.courseName}</div>
                    <div className="text-sm opacity-50">Price: ${course?.price}</div>
                  </div>
                </div>
              </td>
                   <td>
                   <div className="text-sm opacity-50">{course?.status}</div>
                   </td>
              <td onClick={()=>handleconfirmed(course)} className="btn bg-lime-400">
               Approve
              </td>
              <td onClick={()=>handledeny(course)}  className="btn bg-red-700 mx-2">
               Deny
              </td>
              <td  className="btn bg-orange-600 mx-2">
               Feedback
              </td>
            </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default ManageClass;