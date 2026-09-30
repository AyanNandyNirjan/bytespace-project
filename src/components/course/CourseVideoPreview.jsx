import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

export default function CourseVideoPreview({
  thumbnail = '/assets/course-hero.jpg',
  alt = 'Build Digital Asset Preview'
}) {
  return (
    <div className="group relative aspect-[1.55/1] w-full overflow-hidden rounded-[24px] bg-black/10 shadow-2xl">
      <img
        src={thumbnail}
        alt={alt}
        className="transform-gpu h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
      <button
        type="button"
        onClick={() => toast.success('Playing course introduction preview...')}
        aria-label="Play course video"
        className="absolute inset-0 flex items-center justify-center bg-black/5 transition-colors duration-200 hover:bg-black/15"
      >
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          className="transform-gpu flex h-16 w-16 items-center justify-center rounded-2xl bg-black/40 backdrop-blur-md shadow-2xl sm:h-20 sm:w-20"
        >
          <div className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md sm:h-12 sm:w-12">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-black"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </motion.div>
      </button>
    </div>
  )
}

