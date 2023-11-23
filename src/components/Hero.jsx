import { motion } from "framer-motion";

import { styles } from "../style";
import {ComputersCanvas} from "./canvas/index"

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[110px]  max-w-7xl mx-auto  flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="mb-4">
          <h1 className={`${styles.heroHeadText} text-white-100`}>Hi, I'm <span className="text-[#915eff]">Aryan</span> </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop beautiful and creative<br className="sm:block hidden"/> User interface and web application</p>
        </div>
      </div>
     <ComputersCanvas/>
     <div className='absolute mb-0 xs:bottom-0 bottom-0 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[30px] h-[40px] rounded-2xl border-4 border-secondary flex justify-center items-start '>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero