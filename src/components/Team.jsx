import React from 'react'
import TeamMember from './TeamMember'

const Team = () => {
  const teamMembersData = [
    {imgSrc: 'team-1.jpg', name: 'Alan Walker', role: 'Photographer', socialMediaUrls: ['facebook', 'twitter.com', 'youtube.com', 'instagram.com' ]},
    {imgSrc: 'team-2.jpg', name: 'Ava Max', role: 'Director', socialMediaUrls: ['facebook', 'twitter.com', 'youtube.com', 'instagram.com' ]},
    {imgSrc: 'team-3.jpg', name: 'Anne-marie', role: 'Manager', socialMediaUrls: ['facebook', 'twitter.com', 'youtube.com', 'instagram.com' ]},
    {imgSrc: 'team-4.jpg', name: 'Billie Eilish', role: 'Assistant', socialMediaUrls: ['facebook', 'twitter.com', 'youtube.com', 'instagram.com' ]},
  ]

  const teamMembers = teamMembersData.map((teamMemberData, index) =>{
    return <TeamMember data={teamMemberData} key={index} />
  })

  return (
    <div className='w-full h-[50rem] bg-[blu] flex flex-col items-center justify-center gap-4 '>
        <div className='w-full h-[20%] flex items-center justify-around gap-[15rem]'>
          <div className='w-[30rem] flex flex-col items-start justify-center gap-4'>
            <span className='font-black text-4xl uppercase'>Our Team</span>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <button className='px-8 py-3 text-white bg-[green] uppercase'>Appointment</button>
        </div>

        <div className='w-[76%] h-[58%] flex items-center justify-center gap-[1rem]'>
          {teamMembers}
        </div>
    </div>
  )
}

export default Team
