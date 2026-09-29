import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function SearchBar({ compact = false }) {
  const navigate = useNavigate()
  const submit = e => {
    e.preventDefault()
    const q = new FormData(e.currentTarget).get('search')
    navigate('/courses')
    toast.success(q ? `Searching for “${q}”` : 'Showing all courses')
  }

  return (
    <form
      onSubmit={submit}
      className={`mx-auto flex w-full items-center rounded-full bg-white shadow-[0_10px_35px_rgba(0,0,0,0.12)] transition-shadow duration-200 focus-within:shadow-[0_12px_40px_rgba(0,0,0,0.2)] ${
        compact ? 'max-w-[490px] p-1.5 pl-4 sm:pl-5' : 'max-w-2xl p-1.5 pl-5'
      }`}
    >
      {/* Magnifying Glass Icon */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        stroke="#8E95A2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-3 shrink-0"
      >
        <circle cx="8.5" cy="8.5" r="5.5" />
        <path d="M17.5 17.5l-4.5-4.5" />
      </svg>

      {/* Input */}
      <input
        name="search"
        placeholder={compact ? 'Course, topic, creator' : 'Search courses, subjects, tutors...'}
        className="w-full min-w-0 bg-transparent text-sm sm:text-base text-ink outline-none placeholder:text-[#8E95A2]"
      />

      {!compact && (
        <select className="mr-2 hidden rounded-full bg-[#f2f4f7] px-4 py-2 text-xs font-semibold text-ink outline-none sm:block">
          <option>All Categories</option>
          <option>Design</option>
          <option>Development</option>
          <option>Business</option>
        </select>
      )}

      {/* Search Button */}
      <button
        type="submit"
        className="shrink-0 rounded-full bg-lime px-6 sm:px-7 py-2.5 text-xs sm:text-sm font-bold text-ink transition-transform duration-150 hover:scale-[1.03] active:scale-[0.97]"
      >
        Search
      </button>
    </form>
  )
}
