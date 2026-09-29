import { useState } from 'react'
import toast from 'react-hot-toast'
import Button from './Button'

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
    toast.success('Thanks for subscribing to ByteSpace!')
    setEmail('')
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="h-[48px] w-full sm:w-[270px] rounded-full border border-[#D1D5DB] bg-white px-5 text-[14px] text-[#111827] placeholder-[#6B7280] outline-none transition focus:border-black/40"
        />
        <button
          type="submit"
          className="h-[48px] shrink-0 rounded-full bg-[#d4fb20] px-8 text-[14px] font-semibold text-black transition-all hover:bg-[#c2ea1b] active:scale-[0.98]"
        >
          {buttonText}
        </button>
      </form>
      <p className="mt-3.5 max-w-[390px] text-[11.5px] leading-relaxed text-[#4B5563]">
        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
      </p>
    </div>
  )
}
