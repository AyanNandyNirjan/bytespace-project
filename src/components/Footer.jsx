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
    <footer className="bg-white pb-10 pt-12 sm:pb-14 sm:pt-16">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 xl:grid-cols-[1.15fr_1fr]">
          {/* Left: Logo & Newsletter */}
          <div className="max-w-md">
            <ByteSpaceLogo />
            <p className="mt-5 text-[14px] leading-relaxed text-[#374151]">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <div className="mt-6">
              <NewsletterForm buttonText="Search" />
            </div>
          </div>

          {/* Right: 3 Navigation Link Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10 lg:pt-[44px]">
            {footerLinks.map((group, i) => (
              <ul key={i} className="space-y-[7px] text-[13.5px] sm:text-[14px] text-[#262626]">
                {group.items.map(item => (
                  <li key={item}>
                    <Link
                      to={item === 'Become a Creator' ? '/creator/purepearl-studio' : '/courses'}
                      className="transition-colors hover:text-black"
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
        <div className="mt-16 flex flex-col gap-4 border-t border-[#E5E7EB] pt-7 text-[12px] text-[#6B7280] sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:text-[13px]">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 sm:gap-8">
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
