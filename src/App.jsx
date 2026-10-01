import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import CreatorProfile from './pages/CreatorProfile'
import Auth from './pages/Auth'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Only scroll to top on major page changes, not sub-tab switches
    if (!pathname.includes('/course/') || pathname === '/course/build-digital-asset') {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}

export default function App() {
  const location = useLocation()

  // Group sub-routes so tab changes inside CourseDetails do not tear down the whole page
  const pageGroupKey = location.pathname.startsWith('/course/')
    ? 'course-page'
    : location.pathname.startsWith('/creator/')
      ? 'creator-page'
      : location.pathname

  const pageVariants = {
    initial: {
      opacity: 0,
      filter: 'blur(6px)',
      y: 6,
      scale: 0.995,
    },
    animate: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
      transitionEnd: {
        filter: 'none',
        transform: 'none',
      },
    },
    exit: {
      opacity: 0,
      filter: 'blur(6px)',
      y: -6,
      scale: 0.995,
      transition: {
        duration: 0.18,
        ease: [0.32, 0, 0.67, 0],
      },
    },
  }

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.div
          key={pageGroupKey}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="transform-gpu will-change-[transform,opacity,filter] min-h-screen"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/build-digital-asset" element={<CourseDetails tab="about" />} />
            <Route path="/course/build-digital-asset/lessons" element={<CourseDetails tab="lessons" />} />
            <Route path="/course/build-digital-asset/reviews" element={<CourseDetails tab="reviews" />} />
            <Route path="/course/:slug" element={<CourseDetails tab="about" />} />
            <Route path="/creator/purepearl-studio" element={<CreatorProfile />} />
            <Route path="/creator/:slug" element={<CreatorProfile />} />
            <Route path="/login" element={<Auth mode="login" />} />
            <Route path="/register" element={<Auth mode="register" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

