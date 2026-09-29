import toast from 'react-hot-toast'
import Logo from './Logo'

const groups = [
  ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'],
  ['Development', 'Marketing', 'Photography', 'Finance', 'Sport'],
  ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About']
]

export default function Footer() {
  const submit = e => {
    e.preventDefault()
    const email = new FormData(e.currentTarget).get('email')
    toast.success(email ? 'Thanks for joining ByteSpace!' : 'Enter your email first')
  }
  return (
    <footer className="border-t border-black/10 bg-white py-14 sm:py-16">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <Logo />
            <p className="mt-4 max-w-lg text-sm leading-6 text-muted">Stay Up to date with our latest features and releases by joining our newsletter.</p>
            <form onSubmit={submit} className="mt-6 flex max-w-lg gap-3">
              <input name="email" type="email" placeholder="Enter your email" className="min-w-0 flex-1 rounded-full border border-black/15 px-5 py-3 outline-none transition focus:border-brand" />
              <button className="lime-btn px-7 py-3">Search</button>
            </form>
            <p className="mt-4 max-w-lg text-[11px] leading-5 text-muted">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {groups.map((group, i) => (
              <ul key={i} className="space-y-4 text-sm text-[#444950]">
                {group.map(item => <li key={item}><a href="#" className="transition hover:text-brand">{item}</a></li>)}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-5 border-t border-black/10 pt-6 text-[11px] text-[#52565d] sm:flex-row sm:items-center sm:justify-between">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap gap-6"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookies Settings</a></div>
        </div>
      </div>
    </footer>
  )
}
