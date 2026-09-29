import { Link } from 'react-router-dom'
import ByteSpaceLogo from './ByteSpaceLogo'
import NewsletterForm from './NewsletterForm'

const footerLinks = [
  {
    category: 'Featured Courses',
    items: ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design']
  },
  {
    category: 'Development',
    items: ['Development', 'Marketing', 'Photography', 'Finance', 'Sport']
  },
  {
    category: 'Become a Creator',
    items: ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About']
  }
]

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white py-12 sm:py-16">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* Left: Logo & Newsletter */}
          <div>
            <ByteSpaceLogo />
            <p className="mt-4 max-w-md text-sm leading-6 text-muted">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <div className="mt-5">
              <NewsletterForm buttonText="Search" />
            </div>
          </div>

          {/* Right: 3 Navigation Link Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerLinks.map((group, i) => (
              <ul key={i} className="space-y-3.5 text-sm text-[#444950]">
                {group.items.map(item => (
                  <li key={item}>
                    <Link
                      to={item === 'Become a Creator' ? '/creator/purepearl-studio' : '/courses'}
                      className="transition-colors hover:text-brand"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Bottom Legal / Copyright Row */}
        <div className="mt-12 flex flex-col gap-4 border-t border-black/10 pt-6 text-[12px] text-[#52565D] sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link to="/courses" className="transition-colors hover:text-black">
              Privacy Policy
            </Link>
            <Link to="/courses" className="transition-colors hover:text-black">
              Terms of Service
            </Link>
            <Link to="/courses" className="transition-colors hover:text-black">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
