import { useState } from 'react'
import toast from 'react-hot-toast'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FilterBar from '../components/FilterBar'
import CourseCard from '../components/CourseCard'
import SearchBar from '../components/SearchBar'
import CategoryChip from '../components/CategoryChip'
import { categories, courses } from '../data'

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('Featured')
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const searchCategories = categories.slice(0, 9)

  // 18 courses to reproduce the 6 rows of 3 columns in Search Page.png
  const allCourses = Array.from({ length: 18 }, (_, i) => ({
    ...courses[i % courses.length],
    uniqueKey: `${courses[i % courses.length].id}-${i}`
  }))

  const filteredCourses = searchQuery
    ? allCourses.filter(c =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allCourses

  return (
    <div className="min-h-screen bg-white text-ink">
      {/* ========================================================
          BLUE GRID HEADER
          ======================================================== */}
      <section className="brand-grid relative overflow-hidden text-white">
        <Navbar />
        <div className="container-page pb-12 pt-6 text-center sm:pb-16 sm:pt-10">
          <h1 className="text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl lg:text-[46px]">
            Find Your Next Course
          </h1>
          <div className="mx-auto mt-6 flex justify-center sm:mt-7">
            <SearchBar variant="courses" onSearch={q => setSearchQuery(q)} />
          </div>
        </div>
      </section>

      {/* ========================================================
          WHITE MAIN COURSE LISTING
          ======================================================== */}
      <main className="py-8 sm:py-12 lg:py-14">
        <div className="container-page">
          {/* Filter Bar Controls */}
          <FilterBar />

          {/* Category Chips Bar */}
          <div className="no-scrollbar mt-6 flex gap-2.5 overflow-x-auto pb-2 sm:mt-7 lg:flex-wrap">
            {searchCategories.map(cat => (
              <CategoryChip
                key={cat}
                active={activeCategory === cat}
                onClick={() => {
                  setActiveCategory(cat)
                  toast.success(`Filter: ${cat}`)
                }}
              >
                {cat}
              </CategoryChip>
            ))}
          </div>

          {/* 3-Column Course Grid */}
          <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map(course => (
              <CourseCard key={course.uniqueKey} course={course} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-3 text-sm sm:mt-16 sm:gap-4">
            {/* Previous Page */}
            <button
              type="button"
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(p => p - 1)
                  window.scrollTo({ top: 300, behavior: 'smooth' })
                }
              }}
              disabled={currentPage === 1}
              aria-label="Previous Page"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-sm font-semibold text-gray-500 transition-all hover:border-black/30 hover:text-black disabled:opacity-40"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Page Numbers */}
            {[1, 2, 3, 4, 5].map(n => (
              <button
                key={n}
                type="button"
                onClick={() => {
                  setCurrentPage(n)
                  window.scrollTo({ top: 300, behavior: 'smooth' })
                }}
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                  currentPage === n
                    ? 'font-bold text-black'
                    : 'text-[#6B7280] hover:text-black'
                }`}
              >
                {n}
              </button>
            ))}

            {/* Next Page */}
            <button
              type="button"
              onClick={() => {
                if (currentPage < 5) {
                  setCurrentPage(p => p + 1)
                  window.scrollTo({ top: 300, behavior: 'smooth' })
                }
              }}
              disabled={currentPage === 5}
              aria-label="Next Page"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-sm font-semibold text-gray-500 transition-all hover:border-black/30 hover:text-black disabled:opacity-40"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  )
}
