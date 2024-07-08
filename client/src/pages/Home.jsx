import { AnimatePresence, motion } from "framer-motion"
import { useSnapshot } from "valtio"
import state from "../store"
import { CustomButton } from "../components"

import {
headContainerAnimation,
headContentAnimation,
headTextAnimation,
slideAnimation
} from '../config/motion'


const Home = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./threejs.png'
              alt="logo"
              className="w-12 h-16 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">Hello
                 <br className="xl:block hidden" /> Fashino!..
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-amber-200 text-base">
              Introducing our exclusive 3D customization tool, designed to let you create your unique and personalized shirt.  </p>
            </motion.div>
            <CustomButton  
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm flex-initial"
              />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home