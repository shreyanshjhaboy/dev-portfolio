import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import  { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './Icons'
import {motion} from 'framer-motion'
const CustomLink = ({href, title, className=""})=>{
    const router = useRouter();

    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block
             bg-dark absolute left-0 -bottom-0.5
             group-hover:w-full transition-[width] ease duration-300
              ${router.asPath === href ? 'w-full': 'w-0'}
              `}
                
            >&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
  return (
    <header 
        className='w-full px-32 py-8 font-medium flex items-center justify-between'
    >

        <nav>
            <CustomLink href={'/'} title={'Home'} className={'mr-4'}/>
            <CustomLink href={'about'} title={'About'} className={'mx-4'}/>
            <CustomLink href={'projects'}title={'Projects'}  className={'mx-4'}/>
            <CustomLink href={'articles'} title={'Articles'} className={'ml-4'}/>
        </nav>
        <nav className='flex items-center justify-center flex-wrap space-x-3'>
            <motion.a href={'www.twitter.com'} target={'blank'} whileHover={{y:-4}} whileTap={{scale:.9}}>
                <TwitterIcon className={'w-5 mr-2'} />
            </motion.a>
            <motion.a href={'www.twitter.com'} target={'blank'} whileHover={{y:-4}} whileTap={{scale:.9}}>
                <GithubIcon className={'w-5 mx-2'} />
            </motion.a>
            <motion.a href={'www.twitter.com'} target={'blank'} whileHover={{y:-4}} whileTap={{scale:.9}}>
                <LinkedInIcon className={'w-5 mx-2'} />
            </motion.a>
            <motion.a href={'www.twitter.com'} target={'blank'} whileHover={{y:-4}} whileTap={{scale:.9}}>
                <PinterestIcon className={'w-5 mx-2'} />
            </motion.a>
            <motion.a href={'www.twitter.com'} target={'blank'} whileHover={{y:-4}} whileTap={{scale:.9}}>
                <DribbbleIcon className={'w-5 ml-2'} />
            </motion.a>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo />
        </div>
    </header>
  )
}

export default NavBar