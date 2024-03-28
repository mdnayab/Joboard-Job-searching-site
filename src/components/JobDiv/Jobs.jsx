import React from 'react'
import { FaRegClock } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";

const data = [
  {
    id: 1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Noida',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, fugit?',
    company: 'Novac Linus Co.'
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    time: '2 hr',
    location: 'Bengluru',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, fugit?',
    company: 'Uber India'
  },
  {
    id: 3,
    title: 'Sofware Engg',
    time: '4 hr',
    location: 'Gurugram',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, fugit?',
    company: 'Delliote'
  },
  {
    id: 4,
    title: 'Sofware Engg',
    time: '8 hr',
    location: 'Gurugram',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, fugit?',
    company: 'Microsoft'
  },
  {
    id: 5,
    title: 'Sofware Engg',
    time: '13 hr',
    location: 'Bengluru',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, fugit?',
    company: 'Google'
  },
  {
    id: 6,
    title: 'Frontend Developer Intern',
    time: '16 hr',
    location: 'Noida',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, fugit?',
    company: 'Technoledge India'
  },
  {
    id: 7,
    title: 'Java Developer',
    time: '17 hr',
    location: 'Pune',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, fugit?',
    company: 'TCS India'
  },
  {
    id: 8,
    title: 'JavaScript Developer',
    time: '22 hr',
    location: 'Gurugram',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, fugit?',
    company: 'KPMG'
  }
]

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {
          data.map(({ id, title, time, location, desc, company }) => {
            return (
              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blue-600 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                <span className='flex justify-between items-center gap-4'>
                  <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>

                  <span className='flex items-center text-[#ccc] gap-1'>
                    <FaRegClock />{time}
                  </span>
                </span>

                <h6 className='text-[#ccc]'>{location}</h6>

                <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{desc}</p>

                <div className='company flex items-center gap-2'>
                  <FaRegBuilding />
                  <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                </div>

                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>Apply Now</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Jobs