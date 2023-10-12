import React from 'react'
import {TbChevronRight} from 'react-icons/tb'
type NavItemProps = {
  title: string;
  icon: React.ReactNode;
}

const NavItem = ({title, icon}: NavItemProps) => {
  return (
    <div className='flex items-center rounded-sm justify-between m-2 p-2 hover:bg-main-dark-blue-bg'>
      
      <div id='option-details' className='flex items-center gap-2'>
        <div id='icon'>
          {icon}
        </div>
        <div id='title'>
          {title}
        </div>
      </div>

      <div>
        <TbChevronRight size={20} />
      </div>
    </div>
  )
}

export default NavItem
