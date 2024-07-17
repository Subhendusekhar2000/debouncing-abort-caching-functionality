import React from 'react'
import { CiBoxList } from "react-icons/ci";
import { TbBuildingCommunity } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";


const Navbar=()=>{
  return (
    <div>
      <div className='flex flex-row bg-upperbar w-[100vw] h-[5vh]'>
          <div className='flex flex-row w-full mx-[35px] my-[10px]'>
            <div className='text-asidebar font-medium italic'>Apartment Name</div>
           </div>
           
            <div className='flex flex-row justify-end w-full'>
                  <div className='text-asidebar font-medium italic mx-[35px] my-[10px]'>Admin </div>
                  <div className='text-asidebar  font-medium italic mx-[35px] my-[10px]'>Hello</div>
                  <div className='text-asidebar  font-medium italic mx-[35px] my-[10px]'>Logout</div>
            </div>
      </div>
    <div className='flex flex-row'>
      
    <div className=' bg-asidebar w-[15vw] h-[95vh] '>
          <div className='flex flex-row mt-[60px] mx-[40px] '>
          
             
          
                  <div className='text-icon text-3xl pr-[10px] hover:text-iconhover'><CiBoxList /></div>
                  
                  <div className='text-icon text-xl hidden lg:block'>Dashbord</div>
           
          </div>
          <div className='flex flex-row my-[20px] mx-[40px]'>
              <div className='text-icon text-3xl pr-[10px] hover:text-iconhover'><TbBuildingCommunity /></div>
              <div className='text-icon text-xl hidden lg:block'>My Unit</div>
          </div>
          <div className='flex flex-row my-[20px] mx-[40px]'>
              <div className='text-icon text-3xl pr-[10px] hover:text-iconhover'><FaPeopleGroup /></div>
              <div className='text-icon text-xl hidden lg:block'>Community</div>
          </div>
          <div className='flex flex-row my-[20px] mx-[40px]'>
              <div className='text-icon text-3xl pr-[10px] hover:text-iconhover'><IoSearchSharp /></div>
              <div className='text-icon text-xl hidden lg:block'>Find</div>
          </div>
          <div className='flex flex-row my-[20px] mx-[40px]'>
              <div className='text-icon text-3xl pr-[10px] hover:text-iconhover'><CiCircleMore/></div>
              <div className='text-icon text-xl hidden lg:block'>More</div>
          </div>
      </div>
      <div className='bg-white-400 mt-[60px] ml-[60px] w-[85vw] h-[95vh]'>
             Dashbord
      </div>
    </div>
    </div>
  )
}

export default Navbar