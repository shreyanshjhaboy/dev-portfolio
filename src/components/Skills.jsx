import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y})=>{
    return(
        <motion.div 
        className='cursor-pointer flex items-center 
        justify-center rounded-full 
        font-semibold bg-dark text-light 
        py-3 px-6 shadow-dark
        absolute dark:bg-light dark:text-dark dark:shadow-light
        '
            whileHover={{scale:1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:x, y:y, transition:{duration:1.5}}}
            viewport={{once:true}}
        >
            {name}
        </motion.div>
    )
}
const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center lg:mt-32 sm:mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
        <Skill name="Web" x={'0vw'} y={'0vh'}/>
        <Skill name="Html" x={'-20vw'} y={'2vw'}/>
        <Skill name="css" x={'20vw'} y={'6vw'}/>
        <Skill name="tailwind" x={'0vw'} y={'12vw'}/>
        <Skill name="JavaScript" x={'0vw'} y={'-20vw'}/>
        <Skill name="ReactJs" x={'15vw'} y={'-12vw'}/>
        <Skill name="NextJs" x={'32vw'} y={'-5vh'}/>
        <Skill name="NodeJs" x={'0vw'} y={'-20vh'}/>
        <Skill name="ExpressJs" x={'-25vw'} y={'-18vh'} />
        <Skill name="MongoDb" x={'18vw'} y={'28vh'}/>
        <Skill name="MySql" x={'-24vw'} y={'28vh'} />
    </div>
    
    </>
  )
}

export default Skills
