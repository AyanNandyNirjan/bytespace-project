import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'
import { HugeiconsIcon } from '@hugeicons/react'
import { Search01Icon, ArrowDown01Icon } from '@hugeicons/core-free-icons'

export default function SearchBar({ compact = false, variant = 'hero', onSearch }) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('Courses')
  const dropdownRef = useRef(null)

  useEffect(() => {
    if (!dropdownOpen) return
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [dropdownOpen])

  const submit = e => {
    e.preventDefault()
    const q = query.trim()
    if (onSearch) {
      onSearch(q)
    } else {
      navigate('/courses')
    }
    toast.success(q ? `Searching for “${q}”` : 'Showing all courses')
  }

  // Variant: Courses page header
  if (variant === 'courses') {
    return (
      <form
        onSubmit={submit}
        className="relative flex w-full min-w-0 max-w-[480px] items-center justify-center gap-2 sm:gap-3"
      >
        {/* Search Input Pill */}
        <div className="flex h-[46px] min-w-0 flex-1 items-center rounded-full bg-white px-4 shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-shadow duration-200 focus-within:shadow-[0_10px_30px_rgba(0,0,0,0.12)] sm:h-[50px] sm:px-5">
          <HugeiconsIcon icon={Search01Icon} size={18} className="mr-2.5 text-[#8E95A2]" />
          <input
            name="search"
            size="1"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full min-w-0 bg-transparent text-[14px] text-ink outline-none placeholder:text-[#8E95A2] sm:text-[15px]"
          />
        </div>

        {/* Lime Dropdown Button */}
        <div ref={dropdownRef} className="relative shrink-0">
          <motion.button
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
            type="button"
            onClick={() => setDropdownOpen(prev => !prev)}
            className="transform-gpu flex h-[46px] select-none items-center justify-center gap-1.5 rounded-full bg-lime px-4 text-xs font-bold text-black shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-[filter,box-shadow] duration-150 hover:brightness-105 sm:h-[50px] sm:px-5 sm:text-[15px]"
          >
            <span>{selectedCategory}</span>
            <HugeiconsIcon
              icon={ArrowDown01Icon}
              size={16}
              className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
            />
          </motion.button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -4, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -4, scale: 0.96 }}
                transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="transform-gpu absolute right-0 top-full z-50 mt-2.5 w-44 rounded-[18px] border border-[#E5E7EB] bg-white p-1.5 shadow-[0_14px_36px_rgba(7,18,67,0.18)]"
              >
                {['Courses', 'Creators', 'Lessons', 'Design', 'Business'].map(cat => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat)
                      setDropdownOpen(false)
                      toast.success(`Filter: ${cat}`)
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2 text-left text-xs font-semibold transition-colors duration-150 ${
                      selectedCategory === cat
                        ? 'bg-lime text-black font-bold'
                        : 'text-ink hover:bg-gray-100'
                    }`}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat && (
                      <span className="text-[11px] font-bold text-black">✓</span>
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    )
  }

  // Variant: Home Hero (compact mode)
  return (
    <form
      onSubmit={submit}
      className="flex w-full min-w-0 max-w-[580px] items-center justify-center gap-2 sm:gap-4"
    >
      {/* Search Input Pill */}
      <div className="flex h-[46px] min-w-0 flex-1 items-center rounded-full bg-white px-3 shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-200 focus-within:ring-4 focus-within:ring-lime/30 focus-within:shadow-[0_12px_32px_rgba(7,18,67,0.16)] sm:h-[52px] sm:flex-initial sm:w-[458px] sm:px-5">
        <HugeiconsIcon icon={Search01Icon} size={18} className="mr-2.5 text-[#8E95A2]" />
        <input
          name="search"
          size="1"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Course, topic, creator"
          className="w-full min-w-0 bg-transparent text-[13px] text-ink outline-none placeholder:text-[#8E95A2] sm:text-[16px]"
        />
      </div>

      {/* Separate Lime Pill Button */}
      <motion.button
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
        type="submit"
        className="transform-gpu flex h-[44px] shrink-0 select-none items-center justify-center rounded-full bg-lime px-4 text-xs font-bold text-black shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-[filter,box-shadow] duration-150 hover:brightness-105 hover:shadow-[0_10px_28px_rgba(199,255,0,0.3)] sm:h-[50px] sm:w-[104px] sm:px-0 sm:text-[16px]"
      >
        Search
      </motion.button>
    </form>
  )
}

