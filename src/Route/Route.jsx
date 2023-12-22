import React from 'react';

import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainRoute from '../MainRoute/MainRoute';
import ErrorPage from '../Errors/ErrorPage';
import Home from '../Documents/Pageses/Home/Home';
import Galary from '../Galary/Galary';
import Contact from '../Contact/Contact';
import Login from '../Documents/Login';
import Register from '../Documents/Pageses/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Dashboard from '../Dashboard/Dashboard';
import ToDoTask from '../Dashboard/Task/ToDoTask';
import AddTask from '../Addtask/AddTask';
import UpdateTask from '../Update/UpdateTask';

  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainRoute></MainRoute>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/gallary',
            element:<PrivateRoute><Galary></Galary></PrivateRoute>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
       
      ]
      
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'task',
          element:<ToDoTask></ToDoTask>
      },
      {
          path:'addTask',
          element:<AddTask></AddTask>
      },
      {
        path:"updateTask/:id",
        element:<UpdateTask></UpdateTask>,
        loader:({params})=>fetch(`http://localhost:5000/tasks/${params.id}`)
      },
      ]

  },
 
  ]);

  export default router;