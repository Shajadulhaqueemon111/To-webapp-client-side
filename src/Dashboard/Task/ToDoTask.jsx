import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TaskCard from './TaskCard';

const ToDoTask = () => {
    const [tasks,setTasks]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/getTask')
        .then(res=>res.json())
        .then(data=>setTasks(data))
    },[])

    const refetch = () => {
       
        fetch('http://localhost:5000/getTask')
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(error => console.error('Error fetching data:', error));
    };
    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='text-center mt-6'>
                <h2 className='text-2xl font-bold'>Add A New Task</h2>
                </div>
                <div className='text-center mt-4 mb-2'>
               <Link to='/dashboard/addTask'>
               <button className='btn  btn-outline btn-secondary'>ADD TASK</button>
               </Link>
                </div>
            </div>
            <hr />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                  tasks.map(task=><TaskCard key={task._id} refetch={refetch} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default ToDoTask;