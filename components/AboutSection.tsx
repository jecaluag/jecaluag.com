import React from 'react'
import { motion } from "framer-motion"
import { aboutDetails } from '../data/about'

const About = () => {
  return (
    <section className='mb-14'>
      {/* <h2 className='text-white mb-2'>{aboutDetails.title}</h2> */}
      <div className='relative w-full h-auto'>
        <motion.div
          whileHover={{ rotate: 28 }}
          whileTap={{ scale: 1.5 }}
          transition={{ type: "spring" }}
          className='absolute text-3xl mb-1 -top-12 cursor-default select-none'
        >
          <span>{aboutDetails.emoji}</span>
        </motion.div>
      </div>
      <p className="mt-20">{aboutDetails.description}</p>
    </section>
  )
}

export default About