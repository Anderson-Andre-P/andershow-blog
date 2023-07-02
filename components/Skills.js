/* eslint-disable prettier/prettier */
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiMysql,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiGit,
  SiFlutter,
  SiDart,
  SiSass,
  SiStyledcomponents,
  SiAndroid,
} from 'react-icons/si'

import { motion } from 'framer-motion'
import { showHoverAnimation, removeHoverAnimation } from '../lib/windowAnimation'
import { FadeContainer, popUp } from '../lib/framerMotionVariants'

const skills = [
  {
    name: 'HTML',
    logo: SiHtml5,
  },
  {
    name: 'CSS',
    logo: SiCss3,
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
    name: 'React',
    logo: SiReact,
  },
  {
    name: 'Nextjs',
    logo: SiNextdotjs,
  },

  {
    name: 'Tailwind CSS',
    logo: SiTailwindcss,
  },
  {
    name: 'Styled Components',
    logo: SiStyledcomponents,
  },
  {
    name: 'Sass',
    logo: SiSass,
  },
  {
    name: 'Git',
    logo: SiGit,
  },

  {
    name: 'MySql',
    logo: SiMysql,
  },
  {
    name: 'Desenvolvimento Android',
    logo: SiAndroid,
  },
  {
    name: 'Dart',
    logo: SiDart,
  },
  {
    name: 'Flutter',
    logo: SiFlutter,
  },
  {
    name: 'Firebase',
    logo: SiFirebase,
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
              className="dark:bg-darkPrimary hover:dark:bg-darkSecondary group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 p-4 dark:border-neutral-700 sm:justify-start md:origin-top"
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
