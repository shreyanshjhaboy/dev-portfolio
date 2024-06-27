import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { GithubIcon } from '@/components/Icons'
import Head from 'next/head'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'

const FeaturedProject = ({type, title, summery, img, link, github})=>{
    return(
        <div>
            <article className='w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light p-12 shadow-2xl relative'>
            
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl'/>
                 
                <Link href={link} target='blank' 
                 className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
                >
                    
                    <Image src={img} alt={title} className='w-full h-auto'/>
                </Link>
                <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                    <span className='text-primary font-medium text-xl'>
                        {type}
                    </span>

                    <Link href={link} target='blank' className='hover: underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-4xl font-bold'>
                            {title}
                        </h2>
                    </Link>

                    <p className='my-2 font-medium text-dark padding-12'>
                        {summery}
                    </p>

                    <div className='mt-2 flex items-center'>
                        <Link href={github} target='blank' className='w-10'>
                            <GithubIcon />
                        </Link>
                        <Link href={link} target='blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>
                            Visit Projects
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    )
}

const Project = ({title, type, img, link, github})=>{
    return(
        <>
            <article className='w-full flex items-center justify-center rounded-2xl border border-solid border-dark bg-light relative p-6 flex-col'>
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl'/>
                <Link href={link} target='blank' 
                 className='w-full cursor-pointer overflow-hidden rounded-lg'
                >
                    <Image src={img} alt={title} className='w-full h-auto'/>
                </Link>
                <div className='w-full flex flex-col items-start justify-between pt-4'>
                    <span className='text-primary font-medium text-xl'>
                        {type}
                    </span>

                    <Link href={link} target='blank' className='hover: underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-3xl font-bold'>
                            {title}
                        </h2>
                    </Link>


                    <div className='w-full mt-2 flex items-center justify-between'>
                        <Link href={link} target='blank' className='underline px-6 text-lg font-semibold'>
                                Visit 
                        </Link>
                        <Link href={github} target='blank' className='w-8'>
                            <GithubIcon />
                        </Link>
                    </div>
                </div>
            </article>
        </>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>takemeforward | Projects page</title>
            <meat name="description" content="any description" />
        </Head>
        <main className='justify-center w-full mb-16 flex flex-col items-center'>
            <Layout className={'pt-16'}>
                <AnimatedText text={'Imagination Trumps Knowledge!'} className='mb-16'/>

                <div className='grid grid-cols-12 gap-24 gap-y-32'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            title={'Crypto Screener Application'}
                            summery={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                local currency.`}
                            link={'/'}
                            type={'Featured Project'}
                            img={project1}
                            github={'www.github.com'}
                        
                        
                        />

                    </div>
                    <div className='col-span-6'>
                        <Project 
                                title={'Crypto Screener Application'}
                                link={'/'}
                                type={'Featured Project'}
                                img={project1}
                                github={'www.github.com'}
                            
                            
                            />
                    </div>
                    <div className='col-span-6'>
                        <Project 
                                title={'Crypto Screener Application'}
                                link={'/'}
                                type={'Featured Project'}
                                img={project1}
                                github={'www.github.com'}
                            
                            
                            />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject 
                                title={'Crypto Screener Application'}
                                summery={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                    local currency.`}
                                link={'/'}
                                type={'Featured Project'}
                                img={project1}
                                github={'www.github.com'}
                            
                            
                            />
                    </div>
                    <div className='col-span-6'>
                        <Project 
                                    title={'Crypto Screener Application'}
                                    link={'/'}
                                    type={'Featured Project'}
                                    img={project1}
                                    github={'www.github.com'}
                                
                                
                                />
                    </div>
                    <div className='col-span-6'>
                        <Project 
                                    title={'Crypto Screener Application'}
                                    link={'/'}
                                    type={'Featured Project'}
                                    img={project1}
                                    github={'www.github.com'}
                                
                                
                                />
                    </div>

                </div>
            </Layout>
        </main>
    
    </>
  )
}

export default projects