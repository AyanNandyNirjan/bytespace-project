import { motion } from 'framer-motion'

export default function FilterChip({
  icon,
  label,
  active = false,
  onClick,
  hasDropdown = false,
  className = ''
}) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-xs sm:text-sm font-medium text-[#374151] transition-all hover:border-black/20 hover:bg-gray-50 ${
        active ? 'border-brand text-brand' : ''
      } ${className}`}
    >
      {icon && <span className="text-[#6B7280]">{icon}</span>}
      <span>{label}</span>
      {hasDropdown && (
        <svg
          className="ml-0.5 h-3.5 w-3.5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      )}
    </motion.button>
  )
}
