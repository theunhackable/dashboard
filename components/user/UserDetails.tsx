import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {TbChevronDown} from 'react-icons/tb';
const UserDetails = () => {
  return (
  
    <div className=' bg-main-dark-blue-bg rounded-md p-2 flex items-center justify-between gap-2 cursor-pointer'>
      
      <div className='flex items-center gap-3'>
        
        <div id="user-image">
          <Avatar>
            <AvatarImage src="/jhon-wick.webp" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div id="user-details">
          <h1 className='text-md font-bold'>
            Jhon Wick
          </h1>
          <p className='text-[12px] text-blue-100'>Project Manager</p>
        </div>

      </div>

      <div id="user-dropdown">
        <TbChevronDown size={20} />
      </div>
    </div>
  )
}

export default UserDetails
