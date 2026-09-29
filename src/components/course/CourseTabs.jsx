import { NavLink } from 'react-router-dom'

const tabClass = ({ isActive }) =>
  `rounded-full px-6 py-2 text-sm font-semibold transition-all ${
    isActive
      ? 'bg-lime text-black shadow-sm'
      : 'bg-[#F3F4F6] text-[#4B5563] hover:bg-gray-200 hover:text-ink'
  }`

export default function CourseTabs({ slug = 'build-digital-asset' }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
      <NavLink
        end
        to={`/course/${slug}`}
        className={tabClass}
      >
        About
      </NavLink>
      <NavLink
        to={`/course/${slug}/lessons`}
        className={tabClass}
      >
        Lesson
      </NavLink>
      <NavLink
        to={`/course/${slug}/reviews`}
        className={tabClass}
      >
        Reviews
      </NavLink>
    </div>
  )
}
