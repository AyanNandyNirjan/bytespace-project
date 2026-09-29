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
      <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-2.5 sm:flex-row sm:gap-3">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="h-[46px] min-w-0 flex-1 rounded-full border border-black/15 bg-white px-5 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
        <Button
          type="submit"
          variant="lime"
          className="h-[46px] px-7 text-sm font-bold text-black"
        >
          {buttonText}
        </Button>
      </form>
      <p className="mt-3.5 max-w-md text-[11px] leading-5 text-muted">
        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
      </p>
    </div>
  )
}
