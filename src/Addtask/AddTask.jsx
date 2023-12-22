import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddTask = () => {

    const navigate=useNavigate()
    const handelAddbrand = (e) => {
        
        e.preventDefault()
        const name = e.target.name.value
        const task_name = e.target.task_name.value.toLowerCase();
        const date = e.target.date.value
        const priority= e.target.priority.value
       

        const addTask = { name, task_name, date, priority}
        console.log(addTask)
         navigate('/dashboard/task')
            // fetch('https://automotive-server-side-9y95p1e4j-md-emons-projects.vercel.app/users', {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"

            //     },
            //     body: JSON.stringify(addCar)

            // })
            // .then(res => res.json())
            // .then(data => {
            //     console.log(data)
            //     if (data.insertedId) {
            //         Swal.fire({
            //             position: 'top-end',
            //             icon: 'success',
            //             title: 'User Added Successfully',
            //             showConfirmButton: false,
            //             timer: 1500
            //         })
            //     }
            // })
    }
    return (
        <div className='bg-[#F4F3F0] p-24  '>
            <h2 className='text-3xl font-bold text-center mb-4'>Add TO-Do Task</h2>
            <p className='mb-4 text-center'>
                A to-do task is a concise description of an action or activity that needs to be completed, typically written in a brief, two-line format outlining the task and any essential details or deadlines.</p>
            <form onSubmit={handelAddbrand}>
                {/* Form row */}
                <div className=' md:flex gap-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Task Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='name' placeholder="Enter car name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Task-List</span>
                        </label>
                        <select name="task_name" className="select select-bordered w-full my-custom-select">
                            <option disabled selected>Select a Task</option>
                            <option value="to-do">to-do list</option>
                            <option value="ongoing">ongoing list</option>
                            <option value="completed">completed list</option>

                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>
                {/* Form row */}
                <div className=' md:flex gap-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <label className="input-group">

                            <input type="date" name='date' placeholder="Enter Deadline" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <label className="input-group">

                        </label>
                        <select name="priority" className="select select-bordered w-full my-custom-select">
                            <option disabled selected>Select a Priority</option>
                            <option value="high">High</option>
                            <option value="low">Low</option>


                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>

                {/* Form row */}

                <button className="btn mt-4 btn-block bg-[#D2B48C]">Add</button>
            </form>
        </div>
    );
};

export default AddTask;