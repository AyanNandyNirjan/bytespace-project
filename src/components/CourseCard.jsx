import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CourseCard({ course, dense = false }) {
  return (
    <motion.article whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 280, damping: 20 }} className="overflow-hidden rounded-[20px] border border-black/15 bg-white p-3 shadow-[0_10px_30px_rgba(15,26,66,0.02)]">
      <Link to="/course/build-digital-asset" className="block overflow-hidden rounded-[14px] bg-[#efefef]">
        <img src={course.image} alt="" className={`w-full object-cover ${dense ? 'aspect-[1.95/1]' : 'aspect-[1.9/1]'}`} />
      </Link>
      <div className="px-1 pb-1 pt-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link to="/course/build-digital-asset" className="block truncate text-[15px] font-extrabold tracking-[-0.025em] hover:text-brand">{course.title}</Link>
            <Link to="/creator/purepearl-studio" className="mt-1 block text-[10px] font-medium text-brand">by {course.creator}</Link>
          </div>
          <span className="shrink-0 text-xs text-[#777]">{course.rating} <span className="text-[#bbb]">★</span></span>
        </div>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="rounded-full bg-[#F5F5F5] px-3 py-1.5 text-[10px] text-[#555]">▥&nbsp; {course.level}</span>
          <div className="flex -space-x-2">
            {[1,2,3,4].map(n => <span key={n} className="h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br from-[#ffc4b3] to-[#4861a9]" />)}
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-lime px-1 text-[8px] font-bold">26+</span>
          </div>
        </div>
        <p className="mt-3 text-[15px] font-extrabold text-brand">{course.price}<span className="ml-1 text-[9px] font-normal text-[#777]">/lifetime</span></p>
      </div>
    </motion.article>
  )
}
