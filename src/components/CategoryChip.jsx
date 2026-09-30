import { motion } from 'framer-motion'

export default function CategoryChip({
  children,
  active = false,
  onClick,
  className = ''
}) {
  const isMore = typeof children === 'string' && children.trim() === '+ More'

  if (isMore) {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
        type="button"
        onClick={onClick}
        className={`transform-gpu inline-flex shrink-0 items-center justify-center px-2 py-1.5 text-xs sm:text-[13px] font-semibold text-[#1E52E5] transition-opacity duration-150 hover:underline hover:opacity-80 ${className}`}
      >
        {children}
      </motion.button>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      type="button"
      onClick={onClick}
      className={`transform-gpu shrink-0 select-none rounded-full px-5 py-2 text-xs sm:text-[13px] font-medium transition-[background-color,color,box-shadow] duration-150 ${
        active
          ? 'bg-lime font-bold text-black shadow-sm'
          : 'bg-[#F4F4F6] text-[#45484F] hover:bg-[#EAECEF] hover:text-black'
      } ${className}`}
    >
      {children}
    </motion.button>
  )
}

