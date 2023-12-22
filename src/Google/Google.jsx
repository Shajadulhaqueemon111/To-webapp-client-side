import React, { useContext } from 'react';

import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Documents/AuthProvider/AuthProvider';


const Google = () => {
    const {user,googleLogin}=useContext(AuthContext)
   console.log(user)
    const handelGoogle=(media)=>{
        media()
    }
    return (
        <div className='text-center '>
            
            <button className='btn  btn-accent' onClick={()=>handelGoogle(googleLogin)}><FcGoogle></FcGoogle>Google</button>
        </div>
    );
};

export default Google;