import { useParams } from 'react-router-dom'
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
                {tab === 'about' && <CourseAbout />}
                {tab === 'lessons' && <CourseLessons />}
                {tab === 'reviews' && <CourseReviews />}
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
