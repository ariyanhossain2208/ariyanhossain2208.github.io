'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  FaBook,
  FaChalkboardTeacher,
  FaExternalLinkAlt,
  FaFilePowerpoint,
} from 'react-icons/fa'
import { miscellaneous } from '@/data/profile'

// Map icons based on category
const getIcon = (category: string) => {
  switch (category) {
    case 'Teaching':
      return <FaChalkboardTeacher className="text-3xl" />
    default:
      return <FaBook className="text-3xl" />
  }
}

export default function Miscellaneous() {
  const sectionsCount = miscellaneous[0]?.sections?.length || 0
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(sectionsCount).fill(false)
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newArr = [...prev]
                newArr[index] = true
                return newArr
              })
            }, index * 150)
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('[data-misc]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="teaching" className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Teaching
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              My teaching experience, courses, workshops, and academic services
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main Description */}
            {miscellaneous[0]?.description && (
              <div className="mb-8 text-center">
                <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
                  {miscellaneous[0].description}
                </p>
              </div>
            )}

            {/* Three Teaching Sections */}
            {miscellaneous[0]?.sections && (
              <div className="space-y-6">
                {miscellaneous[0].sections.map((section, sectionIndex) => (
                  <div
                    key={sectionIndex}
                    data-misc
                    data-index={sectionIndex}
                    className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 ${
                      visibleCards[sectionIndex]
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                  >
                    {section.workshops && section.workshops[0]?.images ? (
                      <>
                        {/* Full Width Content */}
                        <div className="p-6">
                          <h4 className={`font-semibold text-gray-800 mb-4 ${section.title === 'Courses I Teach/Taught' ? 'text-xl' : 'text-lg'}`}>
                            {section.title}
                          </h4>
                          <div className="space-y-4 pl-4">
                            {section.workshops.map((workshop, i) => (
                              <div key={i} className="mb-4">
                                <div className="font-semibold text-gray-800 flex items-center gap-2">
                                  <span>{workshop.title}</span>
                                  {workshop.slides && (
                                    <a
                                      href={workshop.slides}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-red-600 hover:text-red-700 transition-colors"
                                      title="View Slides"
                                    >
                                      <FaFilePowerpoint size={16} />
                                    </a>
                                  )}
                                </div>
                                <div className="text-gray-600 text-sm mt-1">
                                  {workshop.organization}
                                </div>
                                {workshop.date && (
                                  <div className="text-blue-600 text-sm mt-1">
                                    {workshop.date}
                                  </div>
                                )}
                                {workshop.period && (
                                  <div className="text-blue-600 text-sm mt-1">
                                    {workshop.period}
                                  </div>
                                )}
                                <div className="text-gray-700 text-sm mt-3">
                                  {workshop.description}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Images Below - Side by Side */}
                        <div className="p-6 pt-0">
                          <div className="grid grid-cols-2 gap-4">
                            {section.workshops && section.workshops[0]?.images?.map((img, idx) => {
                              const firstWorkshop = section.workshops?.[0]
                              return (
                                <div key={idx}>
                                  <div className="relative w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                                    <Image
                                      src={img}
                                      alt={`${section.title} ${idx + 1}`}
                                      fill
                                      className="object-cover"
                                      sizes="(max-width: 768px) 50vw, 50vw"
                                    />
                                  </div>
                                  {firstWorkshop?.imageTitles && firstWorkshop.imageTitles[idx] && (
                                    <div className="text-center mt-2 text-sm text-gray-800 opacity-60">
                                      {firstWorkshop.imageTitles[idx]}
                                    </div>
                                  )}
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Left Side - Content */}
                        <div className="p-6">
                          <h4 className={`font-semibold text-gray-800 mb-4 ${section.title === 'Courses I Teach/Taught' ? 'text-xl' : 'text-lg'}`}>
                            {section.title}
                          </h4>
                          {section.courses ? (
                            <div className="space-y-4 pl-4">
                              {[...section.courses]
                                .sort((a, b) => {
                                  const aHasPresent = a.period.includes('Present')
                                  const bHasPresent = b.period.includes('Present')
                                  if (aHasPresent && !bHasPresent) return -1
                                  if (!aHasPresent && bHasPresent) return 1
                                  return 0
                                })
                                .map((course, i) => {
                                  const periodParts = course.period.split('Present')
                                  return (
                                    <div key={i} className="mb-4">
                                      <div className="font-semibold text-gray-800 flex items-center gap-2">
                                        <span>{course.code}: {course.name}</span>
                                        {course.slides && (
                                          <a
                                            href={course.slides}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-red-600 hover:text-red-700 transition-colors"
                                            title="View Slides"
                                          >
                                            <FaFilePowerpoint size={16} />
                                          </a>
                                        )}
                                      </div>
                                      <div className="text-blue-600 text-sm mt-1">
                                        {periodParts.length > 1 ? (
                                          <>
                                            {periodParts[0]}
                                            <strong>Present</strong>
                                            {periodParts[1]}
                                          </>
                                        ) : (
                                          course.period
                                        )}
                                      </div>
                                    </div>
                                  )
                                })}
                            </div>
                          ) : section.services ? (
                            <div className="space-y-4 pl-4">
                              {section.services.map((service, i) => (
                                <div key={i} className="mb-4">
                                  <div className="font-semibold text-gray-800">
                                    {service.title}
                                    {service.organization && `, ${service.organization}`}
                                  </div>
                                  <div className="text-gray-700 text-sm mt-1">
                                    {service.description}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <ul className="space-y-2">
                              {section.items?.map((item, i) => (
                                <li
                                  key={i}
                                  className="text-gray-700 text-sm leading-relaxed pl-4 border-l-2 border-gray-200"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        {/* Right Side - Image */}
                        <div className="p-6">
                          {section.image ? (
                            <div>
                              <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                                <Image
                                  src={section.image}
                                  alt={section.title}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                />
                              </div>
                              {section.imageTitle && (
                                <div className="text-center mt-2 text-sm text-gray-800 opacity-60">
                                  {section.imageTitle}
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                              <p className="text-gray-400 text-sm">Add image</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


