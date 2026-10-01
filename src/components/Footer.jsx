import { Link } from 'react-router-dom'
import ByteSpaceLogo from './ByteSpaceLogo'
import NewsletterForm from './NewsletterForm'

const footerLinks = [
  {
    items: ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design']
  },
  {
    items: ['Development', 'Marketing', 'Photography', 'Finance', 'Sport']
  },
  {
    items: ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About']
  }
]

export default function Footer() {
  return (
    <footer className="bg-white pb-10 pt-12 sm:pb-14 sm:pt-16 lg:pb-16 lg:pt-20">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,470px)_1fr] lg:gap-14 xl:gap-20">
          {/* Left: Logo & Newsletter */}
          <div className="max-w-xl">
            <ByteSpaceLogo />
            <p className="mt-6 text-xs sm:text-[13.5px] leading-relaxed text-[#374151]">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <div className="mt-6">
              <NewsletterForm buttonText="Search" />
            </div>
          </div>

          {/* Right: 3 Navigation Link Columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 sm:gap-x-10 lg:gap-x-12 lg:pt-[56px]">
            {footerLinks.map((group, i) => (
              <ul key={i} className="space-y-3.5 sm:space-y-4 text-xs sm:text-[13.5px] text-[#1F2937]">
                {group.items.map(item => (
                  <li key={item}>
                    <Link
                      to={item === 'Become a Creator' ? '/creator/purepearl-studio' : '/courses'}
                      className="inline-block whitespace-nowrap transition-[color,transform] duration-150 hover:text-black hover:translate-x-1"
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
        <div className="mt-14 flex flex-col gap-4 border-t border-[#E5E7EB] pt-6 sm:pt-7 text-xs text-[#6B7280] sm:mt-18 sm:flex-row sm:items-center sm:justify-between">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 sm:gap-8">
            <Link to="/courses" className="transition-colors duration-150 hover:text-black">
              Privacy Policy
            </Link>
            <Link to="/courses" className="transition-colors duration-150 hover:text-black">
              Terms of Service
            </Link>
            <Link to="/courses" className="transition-colors duration-150 hover:text-black">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
