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
            <p className="text-[13px] font-medium text-[#0047FF]">Create an Account</p>

            {/* Heading */}
            <h2 className="mt-1 text-[32px] font-bold leading-[1.12] tracking-[-0.03em] text-[#111827]">
              Welcome to<br />ByteSpace
            </h2>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col space-y-3">
              <div>
                <label className="mb-1 block text-[12px] font-medium text-[#374151]">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  placeholder="Jamie Davis"
                  className="h-[38px] w-full rounded-xl border border-[#E5E7EB] px-3.5 text-[13px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF]"
                />
              </div>

              <div>
                <label className="mb-1 block text-[12px] font-medium text-[#374151]">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  className="h-[38px] w-full rounded-xl border border-[#E5E7EB] px-3.5 text-[13px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF]"
                />
              </div>

              <div>
                <label className="mb-1 block text-[12px] font-medium text-[#374151]">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="********"
                  className="h-[38px] w-full rounded-xl border border-[#E5E7EB] px-3.5 text-[13px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF]"
                />
              </div>

              {/* Continue Pill Button on Right */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="flex h-[32px] w-[87px] items-center justify-center rounded-full bg-[#D2FF00] text-[13px] font-medium text-black transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>

          {/* Footer Switch Link */}
          <p className="mt-auto pt-6 text-center text-[12px] text-[#6B7280]">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-[#0047FF] hover:underline">
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
      <div className="flex flex-1 flex-col justify-between">
        <div>
          {/* Category / Subtitle */}
          <p className="text-[13px] font-medium text-[#0047FF]">Sign In</p>

          {/* Heading */}
          <h2 className="mt-1 text-[32px] font-bold leading-[1.12] tracking-[-0.03em] text-[#111827]">
            Welcome Back
          </h2>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col space-y-3">
            <div>
              <label className="mb-1 block text-[12px] font-medium text-[#374151]">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="designer@example.com"
                className="h-[38px] w-full rounded-xl border border-[#E5E7EB] px-3.5 text-[13px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF]"
              />
            </div>

            <div>
              <label className="mb-1 block text-[12px] font-medium text-[#374151]">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="********"
                className="h-[38px] w-full rounded-xl border border-[#E5E7EB] px-3.5 text-[13px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF]"
              />
            </div>

            {/* Sign In Pill Button on Right */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="flex h-[32px] w-[74px] items-center justify-center rounded-full bg-[#D2FF00] text-[13px] font-medium text-black transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Divider with "or" */}
          <div className="mt-6 mb-5 flex items-center">
            <div className="flex-1 border-t border-[#E5E7EB]" />
            <span className="px-3.5 text-[12px] text-[#9CA3AF]">or</span>
            <div className="flex-1 border-t border-[#E5E7EB]" />
          </div>

          {/* Social Buttons */}
          <div className="flex items-center justify-center gap-4">
            {/* Facebook */}
            <button
              type="button"
              onClick={() => handleSocialAuth('Facebook')}
              aria-label="Sign in with Facebook"
              className="flex h-[48px] w-[48px] items-center justify-center rounded-[16px] border border-[#E5E7EB] bg-white transition hover:bg-gray-50 hover:border-gray-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="black" />
                <path
                  d="M15.117 12l.608-3.966h-3.805V5.467c0-1.087.533-2.146 2.239-2.146h1.733V.01a21.137 21.137 0 0 0-3.076-.264c-3.139 0-5.19 1.902-5.19 5.348v2.94H4.15v3.966h3.476v9.593c.698.11 1.411.167 2.138.167.727 0 1.44-.057 2.138-.167V12h3.215z"
                  fill="white"
                />
              </svg>
            </button>

            {/* Google */}
            <button
              type="button"
              onClick={() => handleSocialAuth('Google')}
              aria-label="Sign in with Google"
              className="flex h-[48px] w-[48px] items-center justify-center rounded-[16px] border border-[#E5E7EB] bg-white transition hover:bg-gray-50 hover:border-gray-300"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="black">
                <path d="M21.35 11.1h-9.17v2.98h5.36c-.46 2.15-2.34 3.73-4.86 3.73-2.91 0-5.27-2.36-5.27-5.27s2.36-5.27 5.27-5.27c1.27 0 2.43.45 3.34 1.2l2.25-2.25C16.89 4.8 14.7 4 12.18 4 7.66 4 4 7.66 4 12.18s3.66 8.18 8.18 8.18c4.73 0 7.87-3.32 7.87-8.01 0-.6-.06-1.1-.18-1.55z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Footer Switch Link */}
        <p className="mt-auto pt-6 text-center text-[12px] text-[#6B7280]">
          New user?{' '}
          <Link to="/register" className="font-medium text-[#0047FF] hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
