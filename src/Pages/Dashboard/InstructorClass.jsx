import { useState } from "react";
import { IoMdNotifications } from "react-icons/io";

const InstructorClass = ({ items, index }) => {
    console.log(items);
    const { _id, coverPhoto, instructor, availableSet, price, status } = items;


    return (
        <div>
            <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-6 mb-5  items-center shadow-lg text-xl font-josefin p-2'>
                <td>
                    {index}
                </td>
                <td>
                    <img className='w-24 rounded-md' src={coverPhoto} alt="" />
                </td>
                <td>
                    {instructor}
                </td>
                <td>
                    {availableSet}
                </td>
                <td>
                    {price}
                </td>
                <td>
                    {status}
                </td>
            </tr>
            
        </div>
    );
};

export default InstructorClass;