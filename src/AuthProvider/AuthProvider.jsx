import React, { createContext, useEffect, useState } from 'react'; 
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from 'axios';



export const AuthContext=createContext(null)
const auth = getAuth(app); 
const googleProvider=new GoogleAuthProvider()

const AuthProvider = ({children}) => { 
    const [user,setUser]=useState(null) 
    const [lodding,setLodding]=useState(true)

    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser) 
        setLodding(false)
        
        if(currentUser){
          axios.post('http://localhost:5000/jwt', {email: currentUser.email})
          .then(data =>{
              // console.log(data.data.token)
              localStorage.setItem('access-token', data.data.token)
              setLodding(false);
          })
      }
      else{
          localStorage.removeItem('access-token')
      }

      })
      return ()=>{
        unsubscribe();
      }
    },[])
    const registration=(email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const login=(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }
    
    const logout=()=>{
      signOut(auth)
    }
    
    const googleLogin=()=>{
      return signInWithPopup(auth,googleProvider)
    }


  const  authinfo={
    user,
    registration, 
    login,
    logout,
    lodding,
    googleLogin
  }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;