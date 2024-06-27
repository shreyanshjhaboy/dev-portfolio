import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
const FeaturedArticle = ({img, title, time, summery, link})=>{
    return(
        <li>
            <Link href={link} target='blank' 
                 className='w-full cursor-pointer overflow-hidden rounded-lg'
                >
                    <Image src={img} alt={title} className='w-full h-auto'/>
            </Link>
        </li>
    )
}
const articles = () => {
  return (
    <>
        <Head>
            <title>takemeforward | Articles Page</title>
            <meat name="description" content="any description" />
        </Head>
        <main className='w-full mb-16 flex flex-col justify-center items-center overflow-hidden'>
            <Layout className={'pt-16'}>
                <AnimatedText text={'Words Can Change The World!'} className='mb-16'/>
            </Layout>
            <ul className='grid grid-co-2 gap-16'>
                <lin>Featured article-1</lin>
                <lin>Featured article-2</lin>
            </ul>
        </main>
    </>
  )
}

export default articles