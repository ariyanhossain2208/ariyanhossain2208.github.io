'use client'

import { useState, useEffect } from 'react'
import {
  FaEnvelope,
  FaPaperPlane,
} from 'react-icons/fa'
import { send } from '@emailjs/browser'
import { personalInfo } from '@/data/profile'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [formVisible, setFormVisible] = useState(false)

  useEffect(() => {
    // Fade in the header section
    setIsVisible(true)
    
    // Fade in the form after a short delay
    const timer = setTimeout(() => {
      setFormVisible(true)
    }, 150)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      // EmailJS configuration - these should be set in environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.')
      }

      // Send email using EmailJS
      await send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      )

      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      console.error('Email sending failed:', err)
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Contact
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto transition-all duration-500 delay-150"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Let's connect! Feel free to reach out for collaborations, questions,
              or just to say hello.
            </p>
          </div>

          <div className="flex justify-center">
            {/* Contact Form */}
            <div
              className={`w-full max-w-2xl transition-all duration-500 delay-150 ${
                formVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div
                  className={`transition-all duration-300 delay-250 ${
                    formVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-5'
                  }`}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all hover:border-gray-300"
                  />
                </div>
                <div
                  className={`transition-all duration-300 delay-300 ${
                    formVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-5'
                  }`}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all hover:border-gray-300"
                  />
                </div>
                <div
                  className={`transition-all duration-300 delay-350 ${
                    formVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-5'
                  }`}
                >
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all hover:border-gray-300"
                  />
                </div>
                <div
                  className={`transition-all duration-300 delay-400 ${
                    formVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-5'
                  }`}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all hover:border-gray-300"
                  />
                </div>
                {error && (
                  <div
                    className={`p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm transition-all duration-300 delay-450 ${
                      formVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-5'
                    }`}
                  >
                    {error}
                  </div>
                )}
                <div
                  className={`transition-all duration-300 delay-500 ${
                    formVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5'
                  }`}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <FaPaperPlane /> Message Sent!
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
