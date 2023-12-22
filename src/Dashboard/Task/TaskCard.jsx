import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
const TaskCard = ({ task,refetch }) => {

    const {_id, name, task_name, date, priority } = task;

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >

        </Box>
    );

    
    const handelDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/deleteTask/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            console.log(res.data.deletedCount);
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting data:', error);
                        Swal.fire({
                            title: "Error!",
                            text: "An error occurred while deleting the file.",
                            icon: "error"
                        });
                    });
            }
        });
    };



    return (
        <div className=' mx-auto mt-4'>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 16 }} variant="h5" color="text.secondary" gutterBottom>
                        Title: {name}
                    </Typography>
                    <Typography variant="h6" component="div">
                        Priority: {priority}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Date: {date}
                    </Typography>
                    <Typography variant="h6">
                        Task: {task_name}
                    </Typography>
                </CardContent>
                <div>
                    <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                       
                       <Button onClick={() => handelDelete(task._id)} style={{ fontSize: '20px' }} size="large">
                            <MdOutlineDelete className='text-xl font-bold' />
                        </Button>
                       
                      <Link to={`/dashboard/updateTask/${_id}`}>
                      <Button  style={{ fontSize: '20px' }} size="large">
                            <FaRegEdit />
                        </Button>
                      </Link>
                    </CardActions>
                </div>

            </Card>
        </div>
    );
};

export default TaskCard;