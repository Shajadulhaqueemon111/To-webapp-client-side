import React, { useEffect, useState } from 'react';
import GallaryCard from './GallaryCard';

const Galary = () => {

    const [gallarys,setGallary]=useState([])

    useEffect(()=>{

        fetch('/Task.json')
        .then(res=>res.json())
        .then(data=>setGallary(data))
    },[])
    return (
        <div>
           <h2 className='text-2xl font-bold text-center mt-4'>Task-<span className='text-[#B226E3]
           '>Gallary</span></h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                gallarys.map(gallary=><GallaryCard key={gallary._id} gallary={gallary}></GallaryCard>)
            }
           </div>
        </div>
    );
};

export default Galary;