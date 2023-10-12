import { Input } from '@/components/ui/input'
import React from 'react'

const Dashboard = () => {
  return (
    <main className='main'>
      <section id="heading">
        <div className='flex justify-between items-center'>
          <h1 className='text-xl font-extrabold'>Hello Jhon Wick 👋🏼,</h1>
          <Input 
            className='w-fit'
            placeholder=' 🔍 Search'/>
        </div>
      </section>
      <section className='my-6'>
        
      </section>
    </main>
  )
}

export default Dashboard
