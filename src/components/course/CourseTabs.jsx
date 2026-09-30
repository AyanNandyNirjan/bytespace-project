import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const tabClass = ({ isActive }) =>
  `inline-block rounded-full px-6 py-2 text-sm font-semibold select-none transition-[background-color,color,box-shadow] duration-150 ${
    isActive
      ? 'bg-lime text-black shadow-sm'
      : 'bg-[#F3F4F6] text-[#4B5563] hover:bg-gray-200 hover:text-ink'
  }`

export default function CourseTabs({ slug = 'build-digital-asset' }) {
  const tabs = [
    { label: 'About', to: `/course/${slug}`, end: true },
    { label: 'Lesson', to: `/course/${slug}/lessons`, end: false },
    { label: 'Reviews', to: `/course/${slug}/reviews`, end: false }
  ]

  return (
    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
      {tabs.map(tab => (
        <motion.div
          key={tab.label}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
          className="transform-gpu"
        >
          <NavLink
            to={tab.to}
            end={tab.end}
            className={tabClass}
          >
            {tab.label}
          </NavLink>
        </motion.div>
      ))}
    </div>
  )
}

