import React from 'react'
import { SiFlutter, SiDart, SiKotlin, SiSwift, SiSentry, SiGooglemaps } from 'react-icons/si'

import {
  AiFillFolderOpen,
  AiOutlineApi,
  AiOutlineCheckCircle,
  AiOutlineMobile,
} from 'react-icons/ai'

import { motion } from 'framer-motion'
import { localize, useLocale, useT } from '@/lib/i18n'
import { showHoverAnimation, removeHoverAnimation } from '../lib/windowAnimation'
import { FadeContainer, popUp } from '../lib/framerMotionVariants'

const skills = [
  { name: 'Flutter', logo: SiFlutter },
  { name: 'Dart', logo: SiDart },
  { name: 'Kotlin', logo: SiKotlin },
  { name: 'Swift', logo: SiSwift },
  { name: 'BLoC & Clean Architecture', logo: AiFillFolderOpen },
  {
    name: { 'en-US': 'Real-time with WebSockets', 'pt-BR': 'Tempo real com WebSockets' },
    logo: AiOutlineApi,
  },
  { name: { 'en-US': 'Testing & TDD', 'pt-BR': 'Testes e TDD' }, logo: AiOutlineCheckCircle },
  {
    name: {
      'en-US': 'Observability (Sentry, Graylog)',
      'pt-BR': 'Observabilidade (Sentry, Graylog)',
    },
    logo: SiSentry,
  },
  {
    name: { 'en-US': 'CI/CD & store releases', 'pt-BR': 'CI/CD e publicação nas lojas' },
    logo: AiOutlineMobile,
  },
  {
    name: { 'en-US': 'Maps & Geolocation', 'pt-BR': 'Mapas e geolocalização' },
    logo: SiGooglemaps,
  },
]

const Skills = () => {
  const t = useT()
  const locale = useLocale()
  return (
    <>
      <h2 className="font-poppins title-font text-3xl font-bold">{t.skills.title}</h2>
      <p className="my-4 space-y-4 leading-loose text-zinc-500 dark:text-slate-300">
        {t.skills.intro}
      </p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="my-10 grid grid-cols-3 gap-4 sm:grid-cols-2"
      >
        {skills.map((skill) => {
          const name = localize(skill.name, locale)
          return (
            <motion.div
              title={name}
              variants={popUp}
              key={name}
              onMouseMove={(e) => showHoverAnimation(e)}
              onMouseLeave={(e) => removeHoverAnimation(e)}
              className="dark:bg-darkPrimary hover:dark:bg-darkSecondary group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 p-4 hover:border-gray-400 dark:border-neutral-700 sm:justify-start md:origin-top"
            >
              <div className="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
                <skill.logo className="h-8 w-8" />
              </div>
              <p className="pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base">
                {name}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </>
  )
}

export default Skills
