
import React from 'react'

import Layout from '@/components/Layout'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import lightBlub from '../../public/images/svgs/miscellaneous_icons_1.svg'
import Footer from '@/components/Footer'
import HireMe from '@/components/HireMe'
const Home = () => {

  
  return (
    <>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className={'pt-0'}>
          <div className='flex items-center justify-between w-full'>
              <div className='w-1/2'>
                <Image src={profilePic} alt="Vishal Kumar" className='h-auto'/>
              </div>
              <div className='w-1/2 flex-col items-center self-center'>
                <AnimatedText text={'Turning Vision Into Reality With Code And Design.'} className='!text-6xl text-left'/>
                <p className='my-4 text-base font-medium'>
                    As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                </p>
                <div className='flex items-cente self-start mt-2'>
                  <Link href={'/dummy.pdf'}  target='blank' 
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border border-solid border-transparent hover:border-dark'
                  download={true}
                  >
                    Resume {' '}
                    <LinkArrow className={'w-6 m-1'}/>
                  </Link>
                  <Link href={'mailto:vishalkumarkaushik.dev@gmail.com'} target='blank'
                  className='mx-4 text-lg font-medium capitalize text-dark underline pt-2.5'
                  >
                    Contact
                  </Link>

                </div>
             
              </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 inline-block w-24'>
          <Image src={lightBlub} alt='Vishal Kumar' className='w-full h-auto'/>
        </div>
      </main>
    </>
  )
}

export default Home