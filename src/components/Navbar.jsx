import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ShoppingBag01Icon,
  Menu01Icon,
  Cancel01Icon
} from '@hugeicons/core-free-icons'
import ByteSpaceLogo from './ByteSpaceLogo'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const navClass = ({ isActive }) =>
    `transition-colors duration-150 hover:text-white ${
      isActive ? 'font-medium text-white' : 'font-normal text-white/90'
    }`

  const mobileNavClass = ({ isActive }) =>
    `flex items-center px-4 py-3 rounded-xl text-base font-semibold transition-all ${
      isActive
        ? 'bg-white/15 text-white'
        : 'text-white/80 hover:bg-white/10 hover:text-white'
    }`

  return (
    <header className="relative z-40 w-full pt-6 sm:pt-8 lg:pt-[34px]">
      <div className="container-page flex items-center justify-between">
        {/* Left: ByteSpace Logo */}
        <div className="flex shrink-0 items-center">
          <ByteSpaceLogo inverse />
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-[16px] md:flex">
          <NavLink to="/" className={navClass} end>
            Home
          </NavLink>
          <NavLink to="/courses" className={navClass}>
            Courses
          </NavLink>
          <NavLink to="/creator/purepearl-studio" className={navClass}>
            Creators
          </NavLink>
        </nav>

        {/* Right: Desktop Actions & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 text-[16px] text-white sm:gap-6 lg:gap-7">
          {/* Desktop Sign In / Join Us */}
          <Link
            to="/login"
            className="hidden font-normal text-white/90 transition-colors hover:text-white md:block"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="hidden font-normal text-white/90 transition-colors hover:text-white md:block"
          >
            Join Us
          </Link>

          {/* Shopping Bag Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
            onClick={() => toast('Your cart is currently empty', { icon: '🛍️' })}
            aria-label="Shopping Cart"
            className="transform-gpu flex h-10 w-10 items-center justify-center rounded-full text-white/95 transition-opacity duration-150 hover:opacity-80"
          >
            <HugeiconsIcon icon={ShoppingBag01Icon} size={22} />
          </motion.button>

          {/* Mobile Hamburger Toggle Button (< md) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            className="transform-gpu flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-150 hover:bg-white/20 md:hidden"
          >
            <HugeiconsIcon icon={mobileMenuOpen ? Cancel01Icon : Menu01Icon} size={22} />
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 380, mass: 0.7 }}
              className="fixed bottom-0 right-0 top-0 z-50 flex w-[82%] max-w-[340px] flex-col justify-between bg-[#002FB6] p-6 text-white shadow-2xl md:hidden"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <ByteSpaceLogo inverse />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                  >
                    <HugeiconsIcon icon={Cancel01Icon} size={20} />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="mt-6 flex flex-col space-y-2">
                  <NavLink to="/" className={mobileNavClass} onClick={() => setMobileMenuOpen(false)} end>
                    Home
                  </NavLink>
                  <NavLink to="/courses" className={mobileNavClass} onClick={() => setMobileMenuOpen(false)}>
                    Courses
                  </NavLink>
                  <NavLink to="/creator/purepearl-studio" className={mobileNavClass} onClick={() => setMobileMenuOpen(false)}>
                    Creators
                  </NavLink>
                </nav>
              </div>

              {/* Bottom Auth Actions */}
              <div className="border-t border-white/10 pt-6">
                <div className="flex flex-col gap-3">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex h-[46px] w-full items-center justify-center rounded-full border border-white/30 text-[15px] font-semibold text-white transition hover:bg-white/10"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex h-[46px] w-full items-center justify-center rounded-full bg-lime text-[15px] font-bold text-black transition hover:opacity-95"
                  >
                    Join Us Free
                  </Link>
                </div>
                <p className="mt-4 text-center text-xs text-white/50">
                  ByteSpace © 2026. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
