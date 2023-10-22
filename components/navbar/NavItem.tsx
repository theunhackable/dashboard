import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import {TbChevronRight} from 'react-icons/tb'
type NavItemProps = {
  title: string;
  icon: React.ReactNode;
  href: string;
}

const NavItem = ({title, icon, href}: NavItemProps) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`flex items-center rounded-sm justify-between m-2 p-2 hover:bg-main-dark-blue-bg ${pathname===href ? 'bg-main-dark-blue-bg': ''}`}>
      
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
    </Link>
  )
}

export default NavItem
