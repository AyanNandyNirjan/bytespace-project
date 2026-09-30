import { useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Footer from '../components/Footer'
import CourseHero from '../components/course/CourseHero'
import CourseEnrollmentSidebar from '../components/course/CourseEnrollmentSidebar'
import CourseTabs from '../components/course/CourseTabs'
import CourseAbout from '../components/course/CourseAbout'
import CourseLessons from '../components/course/CourseLessons'
import CourseReviews from '../components/course/CourseReviews'

export default function CourseDetails({ tab = 'about' }) {
  const { slug } = useParams()
  const currentSlug = slug || 'build-digital-asset'

  return (
    <div className="min-h-screen bg-white text-ink">
      {/* ========================================================
          BLUE GRID HERO HEADER (Includes Navbar, Title, Video & Floating Sidebar)
          ======================================================== */}
      <CourseHero
        sidebar={<CourseEnrollmentSidebar />}
      />

      {/* ========================================================
          WHITE CONTENT SECTION (Tabs & Tab Body Content)
          ======================================================== */}
      <main className="relative z-10 bg-white py-8 sm:py-10">
        <div className="container-page">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_360px] xl:gap-10">
            {/* Left Column: Tabs & Tab Content */}
            <div className="w-full">
              <CourseTabs slug={currentSlug} />
              <div className="mt-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, filter: 'blur(8px)', y: 6 }}
                    animate={{
                      opacity: 1,
                      filter: 'blur(0px)',
                      y: 0,
                      transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
                      transitionEnd: { filter: 'none', transform: 'none' }
                    }}
                    exit={{
                      opacity: 0,
                      filter: 'blur(8px)',
                      y: -6,
                      transition: { duration: 0.16, ease: [0.32, 0, 0.67, 0] }
                    }}
                    className="transform-gpu will-change-[transform,opacity,filter]"
                  >
                    {tab === 'about' && <CourseAbout />}
                    {tab === 'lessons' && <CourseLessons />}
                    {tab === 'reviews' && <CourseReviews />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column: Spacer on desktop to reserve sidebar column; real sidebar on mobile */}
            <div className="mt-8 block lg:hidden">
              <CourseEnrollmentSidebar />
            </div>
            <div className="hidden min-h-[350px] w-full lg:block" aria-hidden="true" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
