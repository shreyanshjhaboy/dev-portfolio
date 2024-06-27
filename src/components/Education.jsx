import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'


const Details = ({type, time, place, info})=>{
    const ref = useRef(null);
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref}/>

            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold  text-2xl'>{type}</h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full'>
                    {info}
                </p>
            </motion.div>
        </li>
    )

}
const Education = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

  return (
    <div className='my-64'>
        <h2 className='text-center font-bold text-8xl mb-32 w-full'>Education</h2>
    
        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div
                style={{
                    scaleY: scrollYProgress
                }}
                 
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' 
            />
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details type={'Master Of Computer Application(MCA)'} time={'Aug-2022 to Present'} place={"NIT Agartala, Tripura 799046"} info={'Pursuing a Master of Computer Applications, encompassing all fundamental computer science courses alongside modern CS subjects. This program provides a comprehensive foundation in both traditional and contemporary aspects of computer science.'}/>
                <Details type={'Bachelore Of Computer Application(BCA)'} time={'Aug-2017 to 2020'} place={"Hajipur, Bihar 844101"} info={'Completed a Bachelor of Computer Applications, covering essential computer fundamentals, multimedia, data structures, and computer networking. This program provided a robust understanding of key technical concepts and practical skills. The curriculum balanced foundational knowledge with hands-on experience in various computing domains.'}/>
            </ul>
        </div>
    </div>
  )
}

export default Education