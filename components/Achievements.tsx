'use client'

import { useEffect, useState } from 'react'
import {
  FaTrophy,
  FaAward,
  FaMedal,
  FaCertificate,
  FaCalendarAlt,
  FaExternalLinkAlt,
} from 'react-icons/fa'
import { achievements } from '@/data/profile'

const getIcon = (type: string) => {
  switch (type) {
    case 'competition':
      return <FaTrophy className="text-yellow-500" />
    case 'award':
      return <FaAward className="text-blue-500" />
    case 'honor':
      return <FaMedal className="text-purple-500" />
    default:
      return <FaCertificate className="text-gray-500" />
  }
}

export default function Achievements() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(achievements.length).fill(false)
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setTimeout(() => {
              setVisibleItems((prev) => {
                const newArr = [...prev]
                newArr[index] = true
                return newArr
              })
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('[data-achievement]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="achievements" className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Recognition for excellence in research, academics, and competitions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                data-achievement
                data-index={index}
                className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-md p-6 border-l-4 transition-all duration-500 ${
                  visibleItems[index]
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-10'
                } ${
                  achievement.type === 'competition'
                    ? 'border-yellow-500'
                    : achievement.type === 'award'
                    ? 'border-blue-500'
                    : 'border-purple-500'
                } hover:shadow-xl transform hover:-translate-y-2`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {achievement.logo && (
                      <div className="flex-shrink-0 w-10 h-10 bg-transparent rounded-lg flex items-center justify-center">
                        <img 
                          src={achievement.logo} 
                          alt={`${achievement.organization} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div className="text-4xl">{getIcon(achievement.type)}</div>
                  </div>
                  {achievement.position && (
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-full text-xs font-bold">
                      {achievement.position}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {achievement.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                  <FaCalendarAlt />
                  <span>{achievement.date}</span>
                </div>
                <p className="text-gray-700 font-medium mb-2">
                  {achievement.organization}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {achievement.description}
                </p>
                {achievement.link && (
                  <a
                    href={achievement.link}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                  >
                    Learn more <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
