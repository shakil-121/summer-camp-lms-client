import React from 'react';
import CountUp from 'react-countup';
import { FaUserGraduate,FaBookOpen,FaGlobeAsia } from "react-icons/fa";

const ServicesInfo = () => {
    return (
        <div className='my-10 md:flex justify-around items-center md:h-36 h-full ps-6 md:ps-0 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 mx-10 rounded-3xl text-white'> 
            <div className='flex items-center gap-2'>
                <FaUserGraduate className='h-28 w-16'></FaUserGraduate> 
                <div className='ps-4'>
                    <h1 className='text-3xl font-bold'>
                        <CountUp 
                        duration={10} 
                        delay={2}
                        scrollSpyOnce
                        end={2000000} />
                        +
                        </h1>
                    <h1 className='text-xl font-bold'>Students Enrolled</h1>
                </div>
            </div>
            <div className='flex items-center gap-2'>
               <FaBookOpen className='h-28 w-16'></FaBookOpen> 
               <div className='ps-4'>
                    <h1 className='text-3xl font-bold'>
                        <CountUp 
                        duration={10} 
                        delay={1}
                        scrollSpyOnce
                        end={20} />+
                        </h1>
                    <h1 className='text-xl font-bold'>Total Language Courses</h1>
                </div>
            </div>
            <div className='flex items-center gap-2'>
             <FaGlobeAsia className='h-28 w-16'></FaGlobeAsia> 
             <div className='ps-4'>
                    <h1 className='text-3xl font-bold'>
                        <CountUp 
                        duration={10} 
                        delay={2}
                        scrollSpyOnce
                        end={15} />
                        </h1>
                    <h1 className='text-xl font-bold'>Countries</h1>
                </div>
            </div>
        </div>
    );
};

export default ServicesInfo;