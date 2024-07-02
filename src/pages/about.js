import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/profile/profile.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experiance from '@/components/Experiance'
import Education from '@/components/Education'

const AnimatedNumbers = ({value})=>{
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref, {once:true});

    useEffect(()=>{
        if(isInView){
            motionValue.set(value);
        }
    },[isInView, value, motionValue])

    useEffect(()=>{
        springValue.on("change", (latest)=>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])
    return <span ref={ref}></span>
}
    


const about = () => {
  return (
    <div>
      <Head>
        <title>takemeforward | About Page</title>
        <meat name="description" content="any description" />
      </Head>
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className={'pt-16'}>
            <AnimatedText className='mb-16 sm:mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl' text={'Passion Fuels Purpose! '} />
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                <div className='col-span-3 md:order-2 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8'>
                    <h2 className='uppercase text-lg md:text-sm font-bold text-dark/75 dark:text-light/75'>About me.</h2>

                    <p className='font-medium md:text-sm'>
                        Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                        and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
                        new and innovative ways to bring my clients' visions to life.
                    </p>
                
                    <p className='my-4 font-medium md:text-sm'>
                        I believe that design is about more than just making things look pretty – it's about solving problems and 
                        creating intuitive, enjoyable experiences for users. 
                    </p>

                    <p className='font-medium md:text-sm'>
                        Whether I'm working on a website, mobile app, or 
                        other digital product, I bring my commitment to design excellence and user-centered thinking to 
                        every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                    </p>

                </div>
                <div className='col-span-3 xl:col-span-4 md:col-span-8 md:order-1 relative h-max rounded-lg border-2 border-solid border-dark bg-light p-4 dark:border-light dark:bg-dark'>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                        <Image src={profilePic} alt='Profile picture' 
                            priority
                            sizes='(max-width: 768px) 100vw,
                                    (max-width:1200px) 50vw,
                                    33vw' 
                            className='w-full h-auto rounded-2xl ' />
                </div>
                <div className='col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3 flex flex-col items-end justify-between'>
                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block text-7xl lg:text-6xl md:text-4xl font-bold'>
                            <AnimatedNumbers value={50} />+
                        </span>
                        <h2 className='text-xl lg:text-sm sm:text-xs font-medium capitalize text-dark/75 dark:text-light/75'>satisfied clients </h2>
                    </div>
                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block text-7xl font-bold lg:text-6xl md:text-4xl'>
                        <AnimatedNumbers value={50} />+
                        </span>
                        <h2 className='text-xl lg:text-sm sm:text-xs lg:text-center font-medium capitalize text-dark/75 dark:text-light/75'>Projects completed </h2>
                    </div>
                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block text-7xl font-bold lg:text-6xl md:text-4xl'>
                        <AnimatedNumbers value={50} />+
                        </span>
                        <h2 className='text-xl lg:text-sm sm:text-xs lg:text-center font-medium capitalize text-dark/75 dark:text-light/75'>satisfied clients </h2>
                    </div>
                </div>
            </div>
            <Skills />
            <Experiance />
            <Education />
        </Layout>
      </main>
    </div>
  )
}

export default about
