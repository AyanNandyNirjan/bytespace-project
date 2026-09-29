import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { HugeiconsIcon } from '@hugeicons/react'
import { Search01Icon, ArrowDown01Icon } from '@hugeicons/core-free-icons'

export default function SearchBar({ compact = false, variant = 'hero', onSearch }) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('Courses')

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
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => setDropdownOpen(prev => !prev)}
            className="flex h-[46px] items-center justify-center gap-1.5 rounded-full bg-lime px-4 text-xs font-bold text-black shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] sm:h-[50px] sm:px-5 sm:text-[15px]"
          >
            <span>{selectedCategory}</span>
            <HugeiconsIcon icon={ArrowDown01Icon} size={16} />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-2xl border border-gray-100 bg-white py-1 shadow-xl">
              {['Courses', 'Creators', 'Lessons', 'Design', 'Business'].map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat)
                    setDropdownOpen(false)
                    toast.success(`Filter: ${cat}`)
                  }}
                  className="block w-full px-4 py-2 text-left text-xs font-semibold text-ink hover:bg-lime/20"
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
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
      <div className="flex h-[46px] min-w-0 flex-1 items-center rounded-full bg-white px-3 shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-200 focus-within:ring-4 focus-within:ring-lime/30 focus-within:shadow-[0_12px_32px_rgba(7,18,67,0.16)] sm:h-[52px] sm:flex-initial sm:w-[458px] sm:px-5">
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
      <button
        type="submit"
        className="flex h-[44px] shrink-0 items-center justify-center rounded-full bg-lime px-4 text-xs font-bold text-black shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all duration-150 hover:brightness-105 hover:shadow-[0_10px_28px_rgba(199,255,0,0.3)] active:scale-[0.97] sm:h-[50px] sm:w-[104px] sm:px-0 sm:text-[16px]"
      >
        Search
      </button>
    </form>
  )
}
