import { Input } from '@/components/ui/input'
import React from 'react'
import {businessDetails} from './data'
import SalesCard from '@/components/card/SalesCard'
import BarChartStat from '@/components/chart/bar/BarChartStat'
import PieChart from '@/components/chart/pie/PieChart'
import TableData from '@/components/table/TableData'

const Dashboard = () => {
  return (
    <main className='main'>

      <section id="heading">
        <div className='flex flex-col items-center gap-3 sm:flex-row sm:justify-between'>
          <h1 className='text-xl font-extrabold'>Hello Jhon Wick 👋🏼,</h1>
          <Input 
            className='w-fit'
            placeholder=' 🔍 Search'/>
        </div>
      </section>
      
      <section id='business-details' className='my-10'>
        <div className='flex gap-5 flex-wrap justify-evenly items-center'>
          {businessDetails.map((item) => (<SalesCard key={item.id} {...item}/>))}
        </div>
      </section>

      <section id='business-stats' className='my-10'>
        <div className="max-lg:flex-col max-md:items-center w-full flex self-center gap-10 flex-1">
          <div className='max-lg:w-full w-2/3 bg-white p-3 rounded-xl shadow-md'>
            <BarChartStat />
          </div>
          <div className="max-lg:w-full w-1/3 relative rounded-xl p-5 shadow-md bg-white">
            <h1 className="text-2xl font-extrabold">
              Customers
            </h1>
            <p className='text-gray-400 text-xs font-bold'>
              Customers that buy products
            </p>
            <div className='p-2 h-3/4 max-lg:h-[200px] flex justify-center flex-col items-center'>
              <div className='text-center absolute flex-1'>
                <h1 className='text-2xl font-extrabold'>65%</h1>
                <p className='text-gray-400 text-xs font-bold'>
                  of new <br /> customers 
                </p>

              </div>
              <PieChart />
            </div>
          </div>
        </div>
      </section>

      <section id='table' className='my-10'>
        
        <TableData />
      </section>
     
    </main>
  )
}

export default Dashboard
