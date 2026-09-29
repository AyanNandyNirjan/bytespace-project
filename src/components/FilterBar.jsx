import { useState } from 'react'
import toast from 'react-hot-toast'
import FilterChip from './FilterChip'

export default function FilterBar({ onFilterChange }) {
  const [level, setLevel] = useState('All')
  const [category, setCategory] = useState('All')
  const [sortBy, setSortBy] = useState('Most relevant')

  const toggleLevel = () => {
    const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']
    const next = levels[(levels.indexOf(level) + 1) % levels.length]
    setLevel(next)
    toast.success(`Filter: ${next} level`)
    onFilterChange?.({ level: next, category, sortBy })
  }

  const toggleCategory = () => {
    toast('Category filter options opened', { icon: '🏷️' })
  }

  const toggleSort = () => {
    const sorts = ['Most relevant', 'Highest rated', 'Newest', 'Price: Low to High']
    const next = sorts[(sorts.indexOf(sortBy) + 1) % sorts.length]
    setSortBy(next)
    toast.success(`Sorted by: ${next}`)
    onFilterChange?.({ level, category, sortBy: next })
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {/* Left Filters */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <FilterChip
          label="Filter"
          onClick={() => toast('All filter panels opened', { icon: '⚡' })}
          icon={
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
          }
        />
        <FilterChip
          label={level === 'All' ? 'Level' : `Level: ${level}`}
          active={level !== 'All'}
          onClick={toggleLevel}
          icon={
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 20V10M12 20V4M6 20v-6" />
            </svg>
          }
        />
        <FilterChip
          label="Category"
          onClick={toggleCategory}
          icon={
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
            </svg>
          }
        />
      </div>

      {/* Right Sort */}
      <FilterChip
        label={sortBy}
        onClick={toggleSort}
        className="self-start sm:self-auto"
        icon={
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="21" y1="10" x2="7" y2="10" />
            <line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="14" x2="11" y2="14" />
            <line x1="21" y1="18" x2="15" y2="18" />
          </svg>
        }
      />
    </div>
  )
}
