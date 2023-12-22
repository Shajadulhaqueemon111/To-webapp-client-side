import React from 'react';
import { Link } from 'react-router-dom';

const ToDoTask = () => {
    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='text-center mt-6'>
                <h2 className='text-2xl font-bold'>Add A New Task</h2>
                </div>
                <div className='text-center mt-4'>
               <Link to='/dashboard/addTask'>
               <button className='btn  btn-outline btn-secondary'>ADD TASK</button>
               </Link>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default ToDoTask;