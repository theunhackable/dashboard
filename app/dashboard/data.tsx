import { AiOutlineDollarCircle } from 'react-icons/ai'
import { CgNotes } from 'react-icons/cg'
import { IoBagOutline } from 'react-icons/io5'
import { LiaWalletSolid } from 'react-icons/lia'
export const businessDetails = [
  {
    id: 1,
    title: 'Earning',
    price:'194k',
    growth_percent: 37.8,
    icon: <AiOutlineDollarCircle className='text-[45px] text-green-600' />,
    bg: 'bg-green-300'
  },
  {
    id: 2,
    title: 'Orders',
    price:'2.4k',
    growth_percent: -2,
    icon: <CgNotes className='text-[45px] text-purple-600'/>,
    bg: 'bg-purple-300'
  },
  {
    id: 3,
    title: 'Balance',
    price:'2.4k',
    growth_percent: -2,
    icon: <LiaWalletSolid className='text-[45px] text-blue-600' />,
    bg: 'bg-blue-300'
  },
  {
    id: 4,
    title: 'Total Sales',
    price:'89k',
    growth_percent: 11,
    icon: <IoBagOutline className='text-[45px] text-pink-600' />,
    bg: 'bg-pink-300'
  }
]
