/* eslint-disable prettier/prettier */
import {
  SiJavascript,
  SiFirebase,
  SiGit,
  SiFlutter,
  SiDart,
  SiAngular,
  SiGooglemaps,
  SiKotlin,
  SiSwift,
} from 'react-icons/si'

import { AiFillFolderOpen, AiOutlineAreaChart, AiOutlineMobile } from 'react-icons/ai'

import { motion } from 'framer-motion'
import { showHoverAnimation, removeHoverAnimation } from '../lib/windowAnimation'
import { FadeContainer, popUp } from '../lib/framerMotionVariants'

const skills = [
  {
    name: 'Flutter (Cross-Platform)',
    logo: SiFlutter,
  },
  {
    name: 'Swift',
    logo: SiSwift,
  },
  {
    name: 'Dart',
    logo: SiDart,
  },
  {
    name: 'Kotlin',
    logo: SiKotlin,
  },
  {
    name: 'Angular',
    logo: SiAngular,
  },
  {
    name: 'JavaScript & TypeScript',
    logo: SiJavascript,
  },
  {
    name: 'Firebase / WebSockets',
    logo: SiFirebase,
  },
  {
    name: 'Maps & Geolocation',
    logo: SiGooglemaps,
  },
  {
    name: 'Performance & Otimization',
    logo: AiOutlineAreaChart,
  },
  {
    name: 'Publish in Stores',
    logo: AiOutlineMobile,
  },
  {
    name: 'Code Management (Git & Perforce)',
    logo: SiGit,
  },
  {
    name: 'Architecture & Feature Design',
    logo: AiFillFolderOpen,
  },
]

const Skills = () => {
  return (
    <>
      <h2 className="font-poppins title-font text-3xl font-bold">My Main Skills</h2>
      <p className="my-4 space-y-4 leading-loose text-zinc-500 dark:text-slate-300">
        I specialize in cross-platform mobile app development with Flutter, delivering fast,
        scalable, and intuitive experiences for both iOS and Android. I also work on native app
        maintenance, integrating features like maps, geolocation, and WebSockets, optimizing
        performance, and managing app releases on the App Stores. Additionally, I complement my
        mobile work with web development in TypeScript and Angular, providing integrated,
        high-quality solutions for users.
      </p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="my-10 grid grid-cols-3 gap-4"
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
