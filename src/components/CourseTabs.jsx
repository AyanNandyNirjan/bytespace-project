import { NavLink } from 'react-router-dom'

const tabStyle = ({isActive}) => `rounded-full px-5 py-2.5 text-sm transition ${isActive ? 'bg-lime text-black' : 'bg-[#F4F4F4] text-[#4c5058]'}`

export default function CourseTabs() {
  return (
    <div className="flex flex-wrap gap-3">
      <NavLink end to="/course/build-digital-asset" className={tabStyle}>About</NavLink>
      <NavLink to="/course/build-digital-asset/lessons" className={tabStyle}>Lessons</NavLink>
      <NavLink to="/course/build-digital-asset/reviews" className={tabStyle}>Reviews</NavLink>
    </div>
  )
}
