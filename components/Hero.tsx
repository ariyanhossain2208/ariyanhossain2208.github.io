'use client'

import { useEffect, useState } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBriefcase,
  FaDownload,
  FaGraduationCap,
  FaFlask,
  FaCode,
  FaExternalLinkAlt,
  FaLinux,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDatabase,
  FaServer,
  FaLaptopCode,
  FaMicrochip,
  FaChartLine,
} from 'react-icons/fa'
// Using only FontAwesome icons for reliability
import {
  personalInfo,
  workExperience,
  education,
  research,
  skills,
  type WorkExperience,
  type EducationItem,
  type ResearchItem,
  type Skill,
} from '@/data/profile'


// Color mapping for skill categories - all orange
const getCategoryGradient = (category: string) => {
  return 'from-orange-500 to-orange-600'
}

const getCategoryBorderColor = (category: string) => {
  return 'border-orange-500'
}

// Image Icon Component with fallback
const ImageIcon = ({ skillName, fallback }: { skillName: string, fallback: JSX.Element }) => {
  const [imageError, setImageError] = useState(false)
  const imagePath = `/icons/${skillName.toLowerCase().replace(/\s+/g, '-')}.png`
  
  if (imageError) {
    return fallback
  }
  
  return (
    <img 
      src={imagePath} 
      alt={skillName}
      className="w-4 h-4 object-contain"
      onError={() => setImageError(true)}
    />
  )
}

// Icon mapping for skills - supports PNG images from public/icons/ folder
// If PNG exists, it will be used; otherwise react-icons will be used
const getSkillIcon = (skillName: string): JSX.Element => {
  const iconMap: Record<string, JSX.Element> = {
    // Programming Languages
    'Python': <FaPython className="text-blue-500" size={16} />,
    'Java': <FaJava className="text-orange-500" size={16} />,
    'MATLAB': <ImageIcon skillName="MATLAB" fallback={<FaCode className="text-orange-600" size={16} />} />,
    'Bash': <FaLinux className="text-gray-700" size={16} />,
    'x86 Assembly': <FaMicrochip className="text-purple-500" size={16} />,
    'Verilog': <FaMicrochip className="text-indigo-500" size={16} />,
    // Web Technologies
    'HTML': <FaHtml5 className="text-orange-500" size={16} />,
    'CSS': <FaCss3Alt className="text-blue-500" size={16} />,
    'PHP': <ImageIcon skillName="PHP" fallback={<FaCode className="text-indigo-600" size={16} />} />,
    'JavaScript': <FaJs className="text-yellow-500" size={16} />,
    'MySQL': <FaDatabase className="text-blue-600" size={16} />,
    // ML/AI Libraries
    'TensorFlow': <ImageIcon skillName="TensorFlow" fallback={<FaFlask className="text-orange-500" size={16} />} />,
    'PyTorch': <ImageIcon skillName="PyTorch" fallback={<FaFlask className="text-red-500" size={16} />} />,
    'Keras': <ImageIcon skillName="Keras" fallback={<FaFlask className="text-red-600" size={16} />} />,
    'Scikit-learn': <ImageIcon skillName="Scikit-learn" fallback={<FaFlask className="text-orange-500" size={16} />} />,
    'Pandas': <ImageIcon skillName="Pandas" fallback={<FaChartLine className="text-blue-600" size={16} />} />,
    'NumPy': <ImageIcon skillName="NumPy" fallback={<FaCode className="text-blue-700" size={16} />} />,
    'Transformers': <FaFlask className="text-purple-500" size={16} />,
    'NLTK': <ImageIcon skillName="NLTK" fallback={<FaFlask className="text-green-500" size={16} />} />,
    'Matplotlib': <ImageIcon skillName="Matplotlib" fallback={<FaChartLine className="text-blue-400" size={16} />} />,
    // Tools
    'Git': <FaGitAlt className="text-orange-600" size={16} />,
    'GitHub': <FaGithub className="text-gray-800" size={16} />,
    'Visual Studio Code': <ImageIcon skillName="Visual Studio Code" fallback={<FaLaptopCode className="text-blue-500" size={16} />} />,
    'Jupyter Notebook': <ImageIcon skillName="Jupyter Notebook" fallback={<FaCode className="text-orange-600" size={16} />} />,
    'Linux': <FaLinux className="text-yellow-600" size={16} />,
    'Cisco Packet Tracer': <FaServer className="text-blue-600" size={16} />,
    'Proteus': <FaMicrochip className="text-indigo-600" size={16} />,
    'Quartus': <FaMicrochip className="text-red-600" size={16} />,
  }
  
  // Return icon if found, otherwise use placeholder
  return iconMap[skillName] || <FaCode className="text-gray-500" size={16} />
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [showResumeModal, setShowResumeModal] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen bg-white py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Top Section: Profile and About Me */}
            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              {/* Left Side - Profile Picture, Name, Icons */}
              <div className="flex flex-col items-center mt-12">
                {/* Profile Picture */}
                <div className="mb-6">
                  <div className="w-56 h-56 md:w-64 md:h-64 rounded-lg overflow-hidden bg-gray-200 shadow-md">
                    <img src={personalInfo.profileImage} alt={personalInfo.name} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Name */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 text-center">
                  {personalInfo.name}
                </h1>

                {/* Icons: Email, GitHub, LinkedIn, Google Scholar */}
                <div className="flex gap-4 items-center justify-center">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-600 transition-colors"
                    aria-label="Email"
                  >
                    <FaEnvelope size={24} />
                  </a>
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-900 transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href={personalInfo.socialLinks.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                    aria-label="Google Scholar"
                  >
                    <FaGraduationCap size={24} />
                  </a>
                </div>
              </div>

              {/* Right Side - About Me */}
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">About Me</h2>
                  <div className="w-16 h-1 bg-gray-800"></div>
                </div>
                <div className="text-gray-700 leading-relaxed space-y-4 [&_a]:text-blue-600 [&_a]:hover:text-blue-700 [&_a]:font-bold [&_a]:transition-colors">
                  {personalInfo.aboutMe.map((paragraph, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Separating Line */}
            <div className="w-full border-t border-gray-300 my-12"></div>

            {/* Full Width Section: My Resume */}
            <div className="w-full">
              <div className="flex items-center justify-between mb-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  My Resume
                </h2>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    setShowResumeModal(true)
                  }}
                  className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 shadow-md cursor-pointer"
                  aria-label="Download Resume"
                >
                  <FaDownload size={18} />
                </button>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>

              {/* Work Experience Section */}
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md">
                    <FaBriefcase className="text-xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Work Experience</h3>
                </div>
                
                <div className="space-y-6">
                  {workExperience.map((work, index) => (
                    <div 
                      key={index} 
                      className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg border-l-4 border-blue-500 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-4">
                        {work.logo && (
                          <div className="flex-shrink-0 w-24 h-24 bg-transparent rounded-lg p-2 flex items-center justify-center">
                            <img 
                              src={work.logo} 
                              alt={`${work.organization} logo`}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-800 mb-1">
                            {work.title}
                          </h4>
                          <p className="text-gray-700 font-medium mb-1">
                            {work.organization}
                          </p>
                          {work.advisors && (
                            <p className="text-gray-600 text-sm mb-1">
                              Advisors: {work.advisors}
                            </p>
                          )}
                          {work.department && (
                            <p className="text-gray-600 text-sm mb-1">
                              {work.department}
                            </p>
                          )}
                          <p className="text-gray-600 text-sm mb-1">
                            {work.location}
                          </p>
                          <p className="text-gray-600 text-sm font-medium mb-3">
                            {work.period}
                          </p>
                          {work.details && (
                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                              {work.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                              ))}
                            </ul>
                          )}
                          {work.description && (
                            <p className="text-gray-700 mt-2 text-sm">{work.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research Experience Section */}
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-md">
                    <FaFlask className="text-xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Research Experience</h3>
                </div>
                <div className="space-y-6">
                  {research.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-lg border-l-4 border-purple-500 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <h4 className="text-lg font-bold text-gray-800 mb-2">
                        {item.title}
                      </h4>
                      {item.authors && (
                        <p className="text-gray-700 mb-2 text-sm">
                          <strong>{item.authors}</strong>
                        </p>
                      )}
                      {item.venue && (
                        <p className="text-gray-600 italic text-sm mb-2">
                          {item.venue} ({item.year})
                        </p>
                      )}
                      <p className="text-gray-700 mb-3 leading-relaxed text-sm">
                        {item.description}
                      </p>
                      {item.links && (
                        <div className="flex flex-wrap gap-3">
                          {item.links.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                            >
                              {link.text} <FaExternalLinkAlt className="text-xs" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-md">
                    <FaGraduationCap className="text-xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Education</h3>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-white to-green-50 p-6 rounded-lg border-l-4 border-green-500 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-4">
                        {edu.logo && (
                          <div className="flex-shrink-0 w-24 h-24 bg-transparent rounded-lg p-2 flex items-center justify-center">
                            <img 
                              src={edu.logo} 
                              alt={`${edu.institution} logo`}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-800 mb-2">
                            {edu.degree}
                          </h4>
                          <p className="text-gray-700 font-medium mb-1 text-sm">
                            {edu.institution}
                          </p>
                          <p className="text-gray-600 text-sm mb-1">{edu.location}</p>
                          <p className="text-gray-600 text-sm font-medium mb-2">
                            {edu.period}
                          </p>
                          {edu.gpa && (
                            <p className="text-gray-700 font-medium text-sm mb-2">{edu.gpa}</p>
                          )}
                          {edu.details && (
                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                              {edu.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills Section */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-md">
                    <FaCode className="text-xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Technical Skills</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br from-white to-orange-50 p-6 rounded-lg border-l-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${getCategoryBorderColor(skill.category)}`}
                    >
                      <h4 className="font-semibold mb-4 text-sm text-gray-800">
                        {skill.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-2 bg-white text-gray-800 rounded-lg text-xs font-medium border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
                          >
                            <span className="flex-shrink-0">
                              {getSkillIcon(item)}
                            </span>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Not Available Modal */}
      {showResumeModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowResumeModal(false)}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex items-center justify-center mb-4">
              <h3 className="text-xl font-bold text-gray-800 text-center">Resume Not Available</h3>
              <button
                onClick={() => setShowResumeModal(false)}
                className="absolute right-0 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              The resume is not yet publicly available. Please contact me directly if you need a copy.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setShowResumeModal(false)}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
