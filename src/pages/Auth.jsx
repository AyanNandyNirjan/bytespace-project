import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import AuthLayout from '../components/AuthLayout'

export default function Auth({ mode = 'login' }) {
  const isRegister = mode === 'register'
  const navigate = useNavigate()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

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
        <div className="flex flex-1 flex-col justify-between">
          <div>
            {/* Category / Subtitle */}
            <p className="text-[13px] font-medium text-[#2563EB]">Create an Account</p>

            {/* Heading */}
            <h2 className="mt-1 text-[30px] font-bold leading-[1.12] tracking-[-0.03em] text-[#111827]">
              Welcome to<br />ByteSpace
            </h2>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="mt-5 flex flex-col space-y-2.5">
              <div>
                <label className="mb-1 block text-[11px] font-semibold text-[#374151]">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  placeholder="Jamie Davis"
                  className="h-[38px] w-full rounded-[10px] border border-[#E5E7EB] px-3.5 text-[13px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-[border-color,box-shadow] duration-150 hover:border-gray-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15"
                />
              </div>

              <div>
                <label className="mb-1 block text-[11px] font-semibold text-[#374151]">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  className="h-[38px] w-full rounded-[10px] border border-[#E5E7EB] px-3.5 text-[13px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-[border-color,box-shadow] duration-150 hover:border-gray-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15"
                />
              </div>

              <div>
                <label className="mb-1 block text-[11px] font-semibold text-[#374151]">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="********"
                    className="h-[38px] w-full rounded-[10px] border border-[#E5E7EB] pl-3.5 pr-9 text-[13px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-[border-color,box-shadow] duration-150 hover:border-gray-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(prev => !prev)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
                  >
                    {showPassword ? (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Continue Pill Button on Right (w: 87px, h: 32px) */}
              <div className="flex justify-end pt-1.5">
                <button
                  type="submit"
                  className="flex h-[32px] w-[87px] items-center justify-center rounded-full bg-[#D4FF00] text-[13px] font-semibold text-black transition-all duration-150 hover:bg-[#c6f000] hover:shadow-[0_4px_16px_rgba(212,255,0,0.45)] hover:scale-[1.03] active:scale-[0.97] shadow-sm cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>

          {/* Footer Switch Link */}
          <p className="mt-auto pt-4 text-center text-[12px] text-[#4B5563]">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-[#2563EB] hover:underline">
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
      <div className="flex flex-1 flex-col">
        {/* Category / Subtitle */}
        <p className="text-[13px] font-medium leading-none text-[#2563EB]">Sign In</p>

        {/* Heading */}
        <h2 className="mt-[9px] text-[30px] font-bold leading-none tracking-[-0.03em] text-[#111827]">
          Welcome Back
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="mt-[26px] flex flex-col">
          <div>
            <label className="mb-1.5 block text-[11px] font-semibold text-[#374151]">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="designer@example.com"
              className="h-[38px] w-full rounded-[10px] border border-[#E5E7EB] px-3.5 text-[13px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-[border-color,box-shadow] duration-150 hover:border-gray-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15"
            />
          </div>

          <div className="mt-3.5">
            <label className="mb-1.5 block text-[11px] font-semibold text-[#374151]">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="********"
                className="h-[38px] w-full rounded-[10px] border border-[#E5E7EB] pl-3.5 pr-9 text-[13px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-[border-color,box-shadow] duration-150 hover:border-gray-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15"
              />
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                {showPassword ? (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Sign In Pill Button on Right (w: 74px, h: 33px) */}
          <div className="flex justify-end mt-3">
            <button
              type="submit"
              className="flex h-[33px] w-[74px] items-center justify-center rounded-full bg-[#D4FF00] text-[13px] font-semibold text-black transition-all duration-150 hover:bg-[#c6f000] hover:shadow-[0_4px_16px_rgba(212,255,0,0.45)] hover:scale-[1.03] active:scale-[0.97] shadow-sm cursor-pointer"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Divider with "or" (aligned to rel y: 367px) */}
        <div className="mt-[55px] flex items-center">
          <div className="flex-1 border-t border-[#E5E7EB]" />
          <span className="px-3.5 text-[12px] text-[#9CA3AF]">or</span>
          <div className="flex-1 border-t border-[#E5E7EB]" />
        </div>

        {/* Social Buttons (52x52 rounded-[18px] matching Figma) */}
        <div className="mt-[28px] flex items-center justify-center gap-3">
          {/* Facebook */}
          <button
            type="button"
            onClick={() => handleSocialAuth('Facebook')}
            aria-label="Sign in with Facebook"
            className="flex h-[52px] w-[52px] items-center justify-center rounded-[18px] border border-[#E5E7EB] bg-white transition-all duration-150 hover:bg-gray-50 hover:border-black/30 hover:scale-[1.04] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] active:scale-95 shadow-sm cursor-pointer"
          >
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                fill="#000000"
              />
            </svg>
          </button>

          {/* Google */}
          <button
            type="button"
            onClick={() => handleSocialAuth('Google')}
            aria-label="Sign in with Google"
            className="flex h-[52px] w-[52px] items-center justify-center rounded-[18px] border border-[#E5E7EB] bg-white transition-all duration-150 hover:bg-gray-50 hover:border-black/30 hover:scale-[1.04] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] active:scale-95 shadow-sm cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#000000"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#000000"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                fill="#000000"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                fill="#000000"
              />
            </svg>
          </button>
        </div>

        {/* Footer Switch Link */}
        <p className="mt-auto text-center text-[12px] text-[#4B5563]">
          New user?{' '}
          <Link to="/register" className="font-medium text-[#2563EB] hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
