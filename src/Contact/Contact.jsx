import React, { useEffect, useState } from 'react';
import ContactCard from './ContactCard';

const Contact = () => {

    const [contacts,setContacts]=useState([])

    useEffect(()=>{

        fetch('http://localhost:5000/contact')
        .then(res=>res.json())
        .then(data=>setContacts(data))
    },[])
    return (
        <div>
            <h2 className='text-2xl font-bold text-center mt-4'>Contuct <span className='text-[#B226E3]'>Us</span></h2>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3'>
                {
                    contacts.map(contact=><ContactCard key={contact._id} contact={contact}></ContactCard>)
                }
            </div>
        </div>
    );
};

export default Contact;