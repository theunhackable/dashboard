import {AiOutlineDollarCircle} from 'react-icons/ai'
import {CgNotes} from 'react-icons/cg'
import {IoBagOutline} from 'react-icons/io5'

export const businessDetails = [
  {
    id: 1,
    title: 'Earning',
    price:'194k',
    growth_precent: 37.8,
    icon: <AiOutlineDollarCircle className=' text-green-600' />,
    bg: 'green'
  },
  {
    id: 2,
    title: 'Orders',
    price:'2.4k',
    growth_precent: -2,
    icon: <CgNotes className=' text-purple-600'/>,
    bg: 'bg-text-purple-300'
  },
  {
    id: 3,
    title: 'Balance',
    price:'2.4k',
    growth_precent: -2,
    icon: <CgNotes />,
    bg: 'bg-blue-300'
  },
  {
    id: 4,
    title: 'Total Sales',
    price:'89k',
    growth_precent: 11,
    icon: <IoBagOutline className=' text-pink-600' />,
    bg: 'bg-pink-300'
  }
]
