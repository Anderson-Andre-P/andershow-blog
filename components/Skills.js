import React from 'react'
import { SiFlutter, SiDart, SiKotlin, SiSwift, SiSentry, SiGooglemaps } from 'react-icons/si'

import {
  AiFillFolderOpen,
  AiOutlineApi,
  AiOutlineCheckCircle,
  AiOutlineMobile,
} from 'react-icons/ai'

import { motion } from 'framer-motion'
import { showHoverAnimation, removeHoverAnimation } from '../lib/windowAnimation'
import { FadeContainer, popUp } from '../lib/framerMotionVariants'

const skills = [
  { name: 'Flutter', logo: SiFlutter },
  { name: 'Dart', logo: SiDart },
  { name: 'Kotlin', logo: SiKotlin },
  { name: 'Swift', logo: SiSwift },
  { name: 'BLoC & Clean Architecture', logo: AiFillFolderOpen },
  { name: 'Real-time with WebSockets', logo: AiOutlineApi },
  { name: 'Testing & TDD', logo: AiOutlineCheckCircle },
  { name: 'Observability (Sentry, Graylog)', logo: SiSentry },
  { name: 'CI/CD & store releases', logo: AiOutlineMobile },
  { name: 'Maps & Geolocation', logo: SiGooglemaps },
]

const Skills = () => {
  return (
    <>
      <h2 className="font-poppins title-font text-3xl font-bold">Skills</h2>
      <p className="my-4 space-y-4 leading-loose text-zinc-500 dark:text-slate-300">
        Most of my work has been in logistics and industrial IoT: real-time features with
        WebSockets, native Kotlin and Swift SDKs integrated into Flutter, and legacy Android code
        modernized with Clean Architecture and BLoC.
      </p>

      {/* Grid de ícones */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="my-10 grid grid-cols-3 gap-4 sm:grid-cols-2"
      >
        {skills.map((skill, index) => {
          return (
            <motion.div
              title={skill.name}
              variants={popUp}
              key={skill.name}
              onMouseMove={(e) => showHoverAnimation(e)}
              onMouseLeave={(e) => removeHoverAnimation(e)}
              className="dark:bg-darkPrimary hover:dark:bg-darkSecondary group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 p-4 hover:border-gray-400 dark:border-neutral-700 sm:justify-start md:origin-top"
            >
              <div className="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
                <skill.logo className="h-8 w-8" />
              </div>
              <p className="pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base">
                {skill.name}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </>
  )
}

export default Skills
