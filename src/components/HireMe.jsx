import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div 
    className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0 z-20'
    
    >
        <div className='w-48 md:w-24 h-auto flex items-center justify-center relative'>
            <CircularText className={'fill-dark animate-spin-slow dark:fill-light'} />

            <Link href={'mailto:vishalkumarkaushik.dev@gmail.com'} target='blank'  className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:border-light hover:dark:bg-dark hover:dark:text-light md:w-12 md:h-12 md:text-[10px]'>Hire me.</Link>
        </div>
       
    </div>
  )
}

export default HireMe