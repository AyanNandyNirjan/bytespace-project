import { motion } from 'framer-motion'

export default function ReviewCard({
  name,
  role,
  time,
  avatar,
  text,
  rating = 5
}) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 450, damping: 28, mass: 0.5 }}
      className="transform-gpu rounded-[22px] border border-[#E5E7EB] bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-[border-color,box-shadow] duration-200 hover:border-black/20 hover:shadow-[0_14px_36px_rgba(7,18,67,0.09)]"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt={name}
            className="h-10 w-10 rounded-full object-cover shadow-sm"
          />
          <div>
            <p className="text-sm font-bold text-ink">{name}</p>
            <p className="text-xs text-muted">{role}</p>
          </div>
        </div>
        <span className="text-xs text-muted">{time}</span>
      </div>
      <div className="mt-3 flex items-center text-black">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-xs">★</span>
        ))}
      </div>
      <p className="mt-3 text-xs leading-relaxed text-[#4B5563] sm:text-sm sm:leading-6">
        {text}
      </p>
    </motion.article>
  )
}

