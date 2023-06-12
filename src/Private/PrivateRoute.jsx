import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({children}) => { 
    const {user,lodding}=useContext(AuthContext)

    if(lodding)
    {
        return <div className='flex justify-center items-center'>   <progress className="progress w-56 "></progress></div>
    }
    
    if(user)
    {
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;