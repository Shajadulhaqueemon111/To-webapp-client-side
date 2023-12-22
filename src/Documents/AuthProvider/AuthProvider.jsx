import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';


export const AuthContext=createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [user,setUser]=useState([])
    const [loading,setLoading]=useState(true)

   const googleLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
   }
   
   useEffect(()=>{
    onAuthStateChanged(auth,currentUser=>{
        console.log('user in the auth stage change',currentUser)

        setUser(currentUser)
        setLoading(false)
    })
  

},[])
  console.log(user)

  

    const userSingUp=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userSingIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userSingOut=()=>{
      return signOut(auth)
    }

      
    const usreInfo={
          user,
          loading,
          userSingUp,
          userSingIn,
          googleLogin,
          userSingOut
    }
    return (
        <AuthContext.Provider value={usreInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;