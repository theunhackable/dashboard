import { type } from 'os'
import React from 'react'

type SalesCardProps = {
  id: number
  title: string
  price: string
  growth_percent: number
  icon: React.ReactNode
  bg: string
}

const ProfitLoss = ({growth_percent}: {growth_percent: number}) => {

  const profit = growth_percent > 0
  const loss = growth_percent < 0
  const neutral = growth_percent === 0

  return (
    <div className='w-fit'>
      <span className={`text-[12px] font-bold ${profit ? 'text-green-600' : loss ? 'text-red-600' : 'text-gray-400'}`}>
        {profit && '+'}{growth_percent}%
      </span>
      &nbsp;
      <span className='text-[12px] whitespace-nowrap'>
        this month
      </span>
    </div>
  )
}

const SalesCard = ({id, title, price, growth_percent, icon, bg}: SalesCardProps) => {
  return (
    <div className=' bg-white flex flex-1 gap-1 p-2 py-4 rounded-xl shadow-md'>
      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${bg}`}>
        {icon}
      </div>
      <div className='flex flex-col'>
        <h1 className='text-[12px] font-bold'>{title}</h1>
        <p className='text-2xl font-extrabold'>${price}</p>
        <ProfitLoss growth_percent={growth_percent}/>
      </div>

    </div>
  )
}

export default SalesCard
