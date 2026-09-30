import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import AuthLayout from '../components/AuthLayout'
import Button from '../components/Button'

export default function Auth({ mode = 'login' }) {
  const isRegister = mode === 'register'
  const navigate = useNavigate()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (isRegister && !fullName.trim()) {
      toast.error('Please enter your full name')
      return
    }

    const trimmedEmail = email.trim()
    if (!trimmedEmail) {
      toast.error('Please enter your email')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      toast.error('Please enter a valid email address')
      return
    }

    if (!password) {
      toast.error('Please enter your password')
      return
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }

    toast.success(
      isRegister ? 'Account created successfully! Welcome to ByteSpace.' : 'Welcome back to ByteSpace!'
    )
    setTimeout(() => {
      navigate('/')
    }, 600)
  }

  const handleSocialAuth = provider => {
    toast.success(`Signed in with ${provider}`)
    setTimeout(() => navigate('/'), 600)
  }

  if (isRegister) {
    return (
      <AuthLayout
        title="Sign up and come in"
        subtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      >
        <div className="flex flex-col text-ink">
          {/* Subtitle / Category */}
          <p className="text-sm font-semibold text-brand">Create an Account</p>

          {/* Heading */}
          <h2 className="mt-1.5 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
            Welcome to
            <br />
            ByteSpace
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-7 flex flex-col space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#374151]">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                placeholder="Jamie Davis"
                className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#374151]">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="designer@example.com"
                className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#374151]">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="********"
                className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>

            {/* Lime Continue Button on Right */}
            <div className="flex justify-end pt-3">
              <Button
                type="submit"
                variant="lime"
                className="h-11 px-8 text-sm font-bold text-black"
              >
                Continue
              </Button>
            </div>
          </form>

          {/* Bottom Switch Link */}
          <p className="mt-8 text-center text-xs text-[#6B7280]">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-brand hover:underline">
              Login
            </Link>
          </p>
        </div>
      </AuthLayout>
    )
  }

  // Login Mode
  return (
    <AuthLayout
      title="Sign in with ease"
      subtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="flex flex-col text-ink">
        {/* Subtitle / Category */}
        <p className="text-sm font-semibold text-brand">Sign In</p>

        {/* Heading */}
        <h2 className="mt-1.5 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
          Welcome Back
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-7 flex flex-col space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-[#374151]">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="designer@example.com"
              className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold text-[#374151]">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="********"
              className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          </div>

          {/* Lime Sign In Button on Right */}
          <div className="flex justify-end pt-3">
            <Button
              type="submit"
              variant="lime"
              className="h-11 px-8 text-sm font-bold text-black"
            >
              Sign In
            </Button>
          </div>
        </form>

        {/* Divider with "or" */}
        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-200" />
          <span className="px-4 text-xs text-[#9CA3AF]">or</span>
          <div className="flex-1 border-t border-gray-200" />
        </div>

        {/* Social Buttons */}
        <div className="flex items-center justify-center gap-4">
          {/* Facebook */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
            type="button"
            onClick={() => handleSocialAuth('Facebook')}
            className="transform-gpu flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-gray-200 p-3.5 transition-[border-color,background-color,box-shadow] duration-150 hover:border-black/30 hover:bg-gray-50 hover:shadow-sm"
            aria-label="Sign in with Facebook"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </motion.button>

          {/* Google */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
            type="button"
            onClick={() => handleSocialAuth('Google')}
            className="transform-gpu flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-gray-200 p-3.5 transition-[border-color,background-color,box-shadow] duration-150 hover:border-black/30 hover:bg-gray-50 hover:shadow-sm"
            aria-label="Sign in with Google"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.344-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
            </svg>
          </motion.button>
        </div>

        {/* Bottom Switch Link */}
        <p className="mt-8 text-center text-xs text-[#6B7280]">
          New user?{' '}
          <Link to="/register" className="font-semibold text-brand hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
