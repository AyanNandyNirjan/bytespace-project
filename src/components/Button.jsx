import { motion } from 'framer-motion'

export default function Button({
  children,
  variant = 'lime',
  size = 'md',
  type = 'button',
  onClick,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 select-none'

  const variants = {
    lime: 'bg-lime text-black shadow-sm hover:opacity-95',
    outline: 'border border-gray-200 bg-white text-[#374151] hover:border-black/30 hover:bg-gray-50',
    white: 'bg-white text-ink shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)]',
    brand: 'bg-[#003be2] text-white shadow-sm hover:bg-[#0034c7]'
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant] || variants.lime} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
