import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Share01Icon,
  UserGroupIcon
} from '@hugeicons/core-free-icons'

import Navbar from '../Navbar'
import CourseVideoPreview from './CourseVideoPreview'

export default function CourseHero({
  title = 'Build Digital Asset: A Comprehensive Guide',
  subtitle = 'Unlock the Power of Digital Creation with Expert Guidance',
  creatorName = 'purepearl studio',
  creatorSlug = 'purepearl-studio',
  level = 'Intermediate',
  rating = '4.8 (172 reviews)',
  studentsCount = '199 Students',
  sidebar
}) {
  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      toast.success('Course link copied to clipboard!')
    }
  }

  return (
    <section className="brand-grid relative z-20 text-white">
      <Navbar />

      <div className="container-page pb-8 pt-6 sm:pb-10 sm:pt-8">
        {/* Top Row: Course Titles & Share Button */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl lg:text-4xl">
              {title}
            </h1>
            <p className="mt-2 text-sm font-medium text-white/90 sm:text-base">
              {subtitle}
            </p>
            <p className="mt-3 text-xs sm:text-sm text-white/80">
              by{' '}
              <Link
                to={`/creator/${creatorSlug}`}
                className="font-semibold text-lime transition-opacity hover:opacity-80"
              >
                {creatorName}
              </Link>
            </p>

            {/* Three White Badges */}
            <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-black shadow-sm sm:px-4 sm:py-2 sm:text-sm">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                  <rect x="2" y="10" width="3" height="5" rx="0.5" />
                  <rect x="6.5" y="6" width="3" height="9" rx="0.5" />
                  <rect x="11" y="2" width="3" height="13" rx="0.5" />
                </svg>
                {level}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-black shadow-sm sm:px-4 sm:py-2 sm:text-sm">
                <span className="text-[#FBBF24]">★</span>
                {rating}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-black shadow-sm sm:px-4 sm:py-2 sm:text-sm">
                <HugeiconsIcon icon={UserGroupIcon} size={15} />
                {studentsCount}
              </span>
            </div>
          </div>

          {/* Share Button (Lime Pill) */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
            type="button"
            onClick={handleShare}
            className="transform-gpu inline-flex items-center gap-2 self-start rounded-full bg-lime px-5 py-2 text-xs font-bold text-black shadow-sm transition-[filter,box-shadow] duration-150 hover:brightness-105 sm:px-6 sm:py-2.5 sm:text-sm"
          >
            <HugeiconsIcon icon={Share01Icon} size={16} />
            Share
          </motion.button>
        </div>

        {/* Video Preview and Floating Sidebar Row */}
        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_360px] xl:gap-10">
          {/* Left: Video Preview Player */}
          <CourseVideoPreview />

          {/* Right: Desktop Course Sidebar (hangs naturally into white section without stretching blue hero) */}
          {sidebar && (
            <div className="relative z-30 hidden h-0 w-full lg:block">
              <div className="absolute left-0 top-0 w-full">
                {sidebar}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
