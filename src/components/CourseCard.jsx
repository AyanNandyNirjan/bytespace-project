import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AvatarStack from './AvatarStack'

export default function CourseCard({ course, dense = false }) {
  const lessonsCount = course.lessonsCount || '17 Lessons'
  const duration = course.duration || '2 hours 16 mins'
  const commentsCount = course.commentsCount || '59 Comments'

  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 450, damping: 28, mass: 0.5 }}
      className="transform-gpu group flex flex-col justify-between overflow-hidden rounded-[22px] border border-[#E5E7EB] bg-white p-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-[border-color,box-shadow] duration-200 hover:border-black/20 hover:shadow-[0_14px_36px_rgba(7,18,67,0.09)]"
    >
      <div>
        {/* Course Thumbnail with Bottom Floating Badges */}
        <Link
          to="/course/build-digital-asset"
          className="relative block aspect-[1.85/1] w-full overflow-hidden rounded-[16px] bg-[#EAECEF]"
        >
          <img
            src={course.image}
            alt={course.title}
            className="transform-gpu h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            draggable={false}
          />
          {/* Metadata Overlay Badges on Image */}
          <div className="absolute inset-x-2.5 bottom-2.5 flex items-center justify-between gap-1 text-[10px] font-medium text-white sm:text-[11px]">
            <span className="rounded-full bg-black/45 px-2.5 py-1 backdrop-blur-md">
              {lessonsCount}
            </span>
            <span className="rounded-full bg-black/45 px-2.5 py-1 backdrop-blur-md">
              {duration}
            </span>
            <span className="rounded-full bg-black/45 px-2.5 py-1 backdrop-blur-md">
              {commentsCount}
            </span>
          </div>
        </Link>

        {/* Card Body */}
        <div className="pt-3.5">
          {/* Title & Rating */}
          <div className="flex items-start justify-between gap-2">
            <Link
              to="/course/build-digital-asset"
              className="line-clamp-1 text-[16px] font-bold tracking-[-0.02em] text-ink transition-colors group-hover:text-brand"
            >
              {course.title}
            </Link>
            <div className="flex shrink-0 items-center gap-1 text-[13px] font-medium text-[#4B5563]">
              <span>{course.rating || '4.5'}</span>
              <span className="text-[#FBBF24]">★</span>
            </div>
          </div>

          {/* Creator Link */}
          <Link
            to="/creator/purepearl-studio"
            className="mt-1 block text-xs font-semibold text-brand transition-opacity hover:opacity-80"
          >
            by {course.creator || 'purepearl studio'}
          </Link>

          {/* Level Pill & Avatars */}
          <div className="mt-3.5 flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F3F4F6] px-3 py-1 text-[11px] font-medium text-[#4B5563]">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                <rect x="2" y="10" width="3" height="5" rx="0.5" />
                <rect x="6.5" y="6" width="3" height="9" rx="0.5" />
                <rect x="11" y="2" width="3" height="13" rx="0.5" />
              </svg>
              {course.level || 'Beginner'}
            </span>
            <AvatarStack />
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="mt-4 border-t border-gray-100 pt-3">
        <p className="text-[17px] font-extrabold text-brand">
          {course.price || '$25'}
          <span className="ml-1 text-xs font-normal text-muted">/lifetime</span>
        </p>
      </div>
    </motion.article>
  )
}
