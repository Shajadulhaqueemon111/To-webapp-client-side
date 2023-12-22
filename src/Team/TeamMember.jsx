import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';

const TeamMember = () => {

    const [teams,setTeams]=useState([])

    useEffect(()=>{
        fetch('/Team.json')
        .then(res=>res.json())
        .then(data=>setTeams(data))
    },[])
    return (
        <div>
            <h2 className='text-2xl font-bold text-center mt-6'>Team- <span className='text-[#B226E3]'>Member</span></h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    teams.map(team=><TeamCard key={team._id} team={team}></TeamCard>)
                }
            </div>
        </div>
    );
};

export default TeamMember;