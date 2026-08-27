import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Preloader.css'

const MESSAGES = [
  { text: 'Setting the table…', emoji: '🍽️' },
  { text: 'The tandoor is heating up…', emoji: '🔥' },
  { text: 'Something delicious is coming…', emoji: '✨' },
  { text: 'Bas, almost ready…', emoji: '👨‍🍳' },
  { text: 'Come hungry.', emoji: '' },
]

export default function Preloader({ onComplete }) {
  const [messageIndex, setMessageIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    // Simulate loading progress tied to actual content loading
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        // Accelerating progress curve
        const increment = prev < 60 ? 3 : prev < 85 ? 2 : 1
        return Math.min(prev + increment, 100)
      })
    }, 60)

    return () => clearInterval(interval)
  }, [])

  // Cycle through messages
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex(prev => {
        if (prev >= MESSAGES.length - 1) {
          clearInterval(messageInterval)
          return MESSAGES.length - 1
        }
        return prev + 1
      })
    }, 800)

    return () => clearInterval(messageInterval)
  }, [])

  // When progress is complete, start exit
  useEffect(() => {
    if (progress >= 100 && messageIndex >= MESSAGES.length - 1) {
      const timeout = setTimeout(() => {
        setExiting(true)
      }, 600)
      return () => clearTimeout(timeout)
    }
  }, [progress, messageIndex])

  // After exit animation, call onComplete
  useEffect(() => {
    if (exiting) {
      const timeout = setTimeout(() => {
        onComplete()
      }, 800)
      return () => clearTimeout(timeout)
    }
  }, [exiting, onComplete])

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="preloader"
          exit={{ 
            clipPath: 'circle(0% at 50% 50%)',
            transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] }
          }}
        >
          {/* Ember particles */}
          <div className="preloader__embers">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="preloader__ember"
                style={{
                  left: `${15 + Math.random() * 70}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          <div className="preloader__content">
            {/* Brand Mark */}
            <motion.div
              className="preloader__brand"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="preloader__brand-n">N</span>
            </motion.div>

            {/* Message */}
            <div className="preloader__message-wrapper">
              <AnimatePresence mode="wait">
                <motion.p
                  key={messageIndex}
                  className="preloader__message"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                >
                  {MESSAGES[messageIndex].emoji && (
                    <span className="preloader__emoji">{MESSAGES[messageIndex].emoji}</span>
                  )}
                  {MESSAGES[messageIndex].text}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Progress Bar */}
            <div className="preloader__progress-track">
              <motion.div
                className="preloader__progress-fill"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
