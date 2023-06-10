import React, { createContext, useState } from 'react'; 

export const AuthContext=createContext(null)
const auth = getAuth(app);

const AuthProvider = () => { 
    const [user,setUser]=useState()

  const  authinfo={

  }
    return (
        <AuthContext.Provider value={authinfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;