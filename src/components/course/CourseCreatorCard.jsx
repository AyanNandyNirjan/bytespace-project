import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CourseCreatorCard({
  name = 'PurePearl Studio',
  role = 'Professional Creator',
  avatar = '/assets/creator-avatar.jpg',
  slug = 'purepearl-studio',
  tagline = 'Ready to Dive In? Enroll Now and Start Building Your Digital Future!'
}) {
  return (
    <div className="mt-7 border-t border-gray-100 pt-6">
      <div className="flex items-center gap-3.5">
        <img
          src={avatar}
          alt={name}
          className="h-11 w-11 rounded-full object-cover shadow-sm"
        />
        <div>
          <p className="text-sm font-bold text-ink">{name}</p>
          <p className="text-xs text-muted">{role}</p>
        </div>
      </div>
      <p className="mt-3.5 text-xs leading-relaxed text-muted">
        {tagline}
      </p>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
        className="mt-4 inline-block transform-gpu"
      >
        <Link
          to={`/creator/${slug}`}
          className="inline-block rounded-full border border-gray-300 px-5 py-2 text-xs font-semibold text-ink transition-[background-color,border-color] duration-150 hover:border-black/40 hover:bg-gray-50"
        >
          See Full Profile
        </Link>
      </motion.div>
    </div>
  )
}

