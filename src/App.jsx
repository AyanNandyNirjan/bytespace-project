import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import CreatorProfile from './pages/CreatorProfile'
import Auth from './pages/Auth'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
  )
}
