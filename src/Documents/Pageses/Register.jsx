import React, { useContext } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import Google from '../../Google/Google';

const Register = () => {
const location=useLocation()
const navigate=useNavigate()
    const {userSingUp}=useContext(AuthContext)
    const handelRegister=(e)=>{
        e.preventDefault()
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
   
        const newUser={name,
            email,
           password
       }
       console.log(newUser)

 
       if(password.length<6){
        Swal.fire({
          title: "FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password).",
          text: "You clicked the button!",
          icon: "error",
        });
       }else{
        Swal.fire({
          title: "You have been successfully Register",
          text: "You clicked the button!",
          icon: "success",
        });

       }
      

       userSingUp(email, password)
       .then(res => {
         console.log(res.user);
         navigate(location?.state?location.state:'/')
       })
       .catch(error => {
         console.log(error);
       });
     
    }
    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/th5DB14/desktop-wallpaper-beautiful-nature-latest-beauty-nature-1.jpg)' }}>
        <div className="hero min-h-screen mt-3">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
          {/* <img src={logo} alt="" /> */}
          
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-xl">
            <form onSubmit={handelRegister} className="card-body">
            <h1 className="text-3xl font-bold">Sing-Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                {/* {emailError && (
                  <p className="text-xs text-red-600">{emailError}</p>
                )} */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sing-Up</button>
              </div>
              <p className='text-blue-400'>
                Already have An Account? Please 
                 <Link className='text-red-600 font-bold' to='/login'>Login</Link>
              </p>
            </form>
             <Google></Google>
          </div>
        </div>
      </div>
      </div>
    );
};

export default Register;