import { Link, NavLink } from 'react-router-dom'
import toast from 'react-hot-toast'
import Logo from './Logo'

const navClass = ({ isActive }) =>
  `transition-colors duration-200 text-sm font-medium ${
    isActive ? 'text-white font-semibold' : 'text-white/80 hover:text-white'
  }`

export default function Header() {
  return (
    <header className="relative z-30 text-white">
      <div className="container-page flex h-[76px] items-center justify-between sm:h-[84px]">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Logo inverse />
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden items-center gap-9 md:flex">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>
          <NavLink to="/courses" className={navClass}>
            Courses
          </NavLink>
          <NavLink to="/creator/purepearl-studio" className={navClass}>
            Creators
          </NavLink>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-6 text-sm">
          <Link
            to="/login"
            className="font-medium text-white/90 transition-colors hover:text-white"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="font-medium text-white/90 transition-colors hover:text-white"
          >
            Join Us
          </Link>
          <button
            onClick={() => toast('Your cart is currently empty', { icon: '🛍️' })}
            aria-label="Shopping Cart"
            className="p-1 text-white/90 transition-all hover:text-lime hover:scale-110 active:scale-95"
          >
            <svg
              width="19"
              height="20"
              viewBox="0 0 20 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h12l1.5 13H2.5L4 6z" />
              <path d="M7 6V4a3 3 0 0 1 6 0v2" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
