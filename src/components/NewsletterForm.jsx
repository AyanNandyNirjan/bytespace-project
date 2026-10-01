import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

export default function NewsletterForm({ buttonText = 'Search', className = '' }) {
  const [email, setEmail] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) {
      toast.error('Please enter your email address')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast.error('Please enter a valid email address')
      return
    }
    toast.success('Thanks for subscribing to ByteSpace! 📬')
    setEmail('')
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3.5">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="h-11 sm:h-[44px] w-full sm:w-[280px] md:w-[300px] rounded-full border border-[#D1D5DB] bg-white px-5 text-xs sm:text-[13.5px] text-[#111827] placeholder-[#6B7280] outline-none transition-[border-color,box-shadow] duration-150 focus:border-black/50 focus:ring-2 focus:ring-black/5"
        />
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
          type="submit"
          className="transform-gpu h-11 sm:h-[44px] shrink-0 select-none rounded-full bg-lime px-7 text-xs sm:text-[13.5px] font-semibold text-black shadow-sm transition-[filter,box-shadow] duration-150 hover:brightness-105 hover:shadow-[0_4px_16px_rgba(212,255,0,0.35)]"
        >
          {buttonText}
        </motion.button>
      </form>
      <p className="mt-3.5 max-w-[400px] text-[10.5px] sm:text-[11px] leading-[1.6] text-[#4B5563]">
        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
      </p>
    </div>
  )
}
