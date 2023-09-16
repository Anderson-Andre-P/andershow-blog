/* eslint-disable prettier/prettier */
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiMysql,
  SiFirebase,
  SiGit,
  SiFlutter,
  SiDart,
  SiMobx,
} from 'react-icons/si'

import {AiFillFolderOpen,AiOutlineMobile,} from 'react-icons/ai'

import { motion } from 'framer-motion'
import { showHoverAnimation, removeHoverAnimation } from '../lib/windowAnimation'
import { FadeContainer, popUp } from '../lib/framerMotionVariants'

const skills = [
  {
    name: 'Flutter',
    logo: SiFlutter,
  },
  {
    name: 'React',
    logo: SiReact,
  },
  {
    name: 'Firebase',
    logo: SiFirebase,
  },
  
  {
    name: 'Gerenciamento de Estado',
    logo: SiMobx,
  },
  {
    name: 'Nextjs',
    logo: SiNextdotjs,
  },
  
  {
    name: 'MySql',
    logo: SiMysql,
  },

  
  {
    name: 'Dart',
    logo: SiDart,
  },
  {
    name: 'JavaScript',
    logo: SiJavascript,
  },
  {
    name: 'TypeScript',
    logo: SiTypescript,
  },

  {
    name: 'Arquitetura',
    logo: AiFillFolderOpen,
  },
  {
    name: 'Git',
    logo: SiGit,
  },
  {
    name: 'Desenvolvimento Mobile',
    logo: AiOutlineMobile,
  },

]

const Skills = () => {
  return (
    <>
      <span className="font-poppins title-font text-3xl font-bold">
        Minhas Principais Habilidades
      </span>
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
              className="dark:bg-darkPrimary hover:dark:bg-darkSecondary group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 hover:border-gray-400 p-4 dark:border-neutral-700 sm:justify-start md:origin-top"
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
