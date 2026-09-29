import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  PenTool01Icon,
  CodeIcon,
  ComputerIcon,
  Film01Icon,
  Megaphone01Icon,
  Camera01Icon
} from '@hugeicons/core-free-icons'

import HomeHero from '../components/HomeHero'
import Footer from '../components/Footer'
import CourseCard from '../components/CourseCard'
import BrandShapes from '../components/BrandShapes'
import CategoryChip from '../components/CategoryChip'
import Button from '../components/Button'
import BlueGridBackground from '../components/BlueGridBackground'
import MotionSection from '../components/MotionSection'
import AvatarStack from '../components/AvatarStack'
import { categories, courses } from '../data'

const pathCards = [
  { icon: PenTool01Icon, label: 'Design' },
  { icon: CodeIcon, label: 'Development' },
  { icon: ComputerIcon, label: 'Business' },
  { icon: Film01Icon, label: 'Animation' },
  { icon: Megaphone01Icon, label: 'Marketing' },
  { icon: Camera01Icon, label: 'Photography' }
]

export default function Home() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('Featured')

  const homeCategories = [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
    'Cooking',
    'Financial Literacy',
    'Web Design',
    'Sports',
    'Freelance & Entrepreneurship',
    'Photography',
    'Film Making',
    'Productivity',
    'Game Development',
    'User Python',
    'Security',
    '+ More'
  ]

  return (
    <div className="min-h-screen bg-white text-ink">
      {/* 1. HERO SECTION */}
      <HomeHero />

      {/* 2. PARTNER LOGO STRIP */}
      <section className="border-b border-black/5 bg-[#F7F8F9] py-7">
        <div className="container-page flex flex-wrap items-center justify-around gap-6 text-center text-xs font-semibold text-[#6C7280] sm:gap-10 sm:text-sm">
          {['Logipsum', 'Logipsum', 'Logipsum', 'Logipsum', 'Logipsum'].map((item, i) => (
            <div key={i} className="flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </svg>
              <span className="tracking-tight text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DISCOVER YOUR PASSION, BUILD YOUR SKILLS */}
      <MotionSection className="py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          {/* Section Heading & Subtitle */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-[-0.035em] text-ink sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
              Discover Your Passion,
              <br />
              Build Your Skills
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Explore a world of knowledge and expand your skills with our wide range of courses. Learn from experts in design, business, technology, and more, all at your own pace.
            </p>
          </div>

          {/* Category Chips (3 Rows) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-2.5">
            {homeCategories.map(cat => (
              <CategoryChip
                key={cat}
                active={activeCategory === cat}
                onClick={() => {
                  setActiveCategory(cat)
                  toast.success(`Filter: ${cat}`)
                }}
              >
                {cat}
              </CategoryChip>
            ))}
          </div>

          {/* Course Grid (3 Columns Desktop, 2 Columns Tablet, 1 Column Mobile) */}
          <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 6).map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </MotionSection>

      {/* 4. EXPLORE DIVERSE LEARNING PATHS */}
      <MotionSection className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-ink sm:text-3xl lg:text-[38px]">
              Explore Diverse Learning Paths at Bytespace
            </h2>
            <p className="mt-3.5 text-sm leading-relaxed text-muted sm:text-base">
              Are you ready to embark on a journey of discovery and growth? Welcome to ByteSpace, where learning knows no bounds. Our platform offers a diverse array of categories designed to cater to every passion and aspiration.
            </p>
          </div>

          {/* 6 Category Path Cards */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-5">
            {pathCards.map(({ icon, label }) => (
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => {
                  navigate('/courses')
                  toast.success(`${label} learning path selected`)
                }}
                key={label}
                className="group flex cursor-pointer flex-col items-center justify-center rounded-[22px] border border-[#E5E7EB] bg-white p-5 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:border-black/20 hover:shadow-[0_12px_30px_rgba(7,18,67,0.08)] sm:py-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-lime text-black shadow-sm transition-transform duration-200 group-hover:scale-110">
                  <HugeiconsIcon icon={icon} size={24} />
                </div>
                <span className="mt-3.5 block text-sm font-bold text-ink sm:text-[15px]">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* 5. PROFESSIONAL GROWTH SECTION (With Student Visual & Overlays) */}
      <MotionSection className="relative overflow-hidden bg-gradient-to-br from-[#FEFFE8]/50 via-white to-[#EBF0FF]/40 py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.035em] text-ink sm:text-4xl lg:text-[44px]">
                Your Path to Professional
                <br />
                Growth Starts Here!
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base sm:leading-7">
                ByteSpace is your key to unlocking endless potential. Whether you're seeking to advance your current career, pivot to a new field, or simply satisfy your thirst for knowledge, our platform offers a transformative learning experience.
              </p>

              {/* Stats Numbers */}
              <div className="mt-8 flex flex-wrap gap-8 sm:gap-12">
                <div>
                  <b className="text-3xl font-extrabold text-brand sm:text-4xl">12K</b>
                  <p className="mt-1 text-xs font-semibold text-muted sm:text-sm">Students</p>
                </div>
                <div>
                  <b className="text-3xl font-extrabold text-brand sm:text-4xl">70+</b>
                  <p className="mt-1 text-xs font-semibold text-muted sm:text-sm">Courses</p>
                </div>
                <div>
                  <b className="text-3xl font-extrabold text-brand sm:text-4xl">16</b>
                  <p className="mt-1 text-xs font-semibold text-muted sm:text-sm">Creators</p>
                </div>
              </div>
            </div>

            {/* Right Visual Art with Layered Overlays */}
            <div className="relative mx-auto flex w-full max-w-[460px] items-center justify-center select-none lg:mx-0">
              {/* Central Student with Headphones */}
              <img
                src="/assets/student_cutout_clean.png"
                alt="Student learning"
                className="relative z-10 w-[300px] object-contain sm:w-[360px]"
                draggable={false}
              />

              {/* Background Card: Learn Figma from Basic */}
              <div className="absolute -left-2 top-4 z-0 w-[200px] rounded-[18px] border border-gray-100 bg-white p-2.5 shadow-[0_16px_36px_rgba(7,18,67,0.12)] sm:left-2 sm:w-[220px]">
                <img
                  src="/assets/course-figma.jpg"
                  alt=""
                  className="aspect-[1.8/1] w-full rounded-xl object-cover"
                />
                <p className="mt-2 text-xs font-bold text-ink truncate">Learn Figma from Basic</p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="rounded-full bg-[#F3F4F6] px-2 py-0.5 text-[9px] text-[#555]">
                    Beginner
                  </span>
                  <span className="text-[10px] text-gray-500">4.5 ★</span>
                </div>
              </div>

              {/* Foreground Card: Learning Progress 55% */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-2 top-28 z-20 w-[170px] rounded-[18px] bg-white p-3.5 shadow-[0_16px_36px_rgba(7,18,67,0.14)] sm:right-2 sm:w-[190px]"
              >
                <p className="text-[11px] font-medium text-muted">Learning Progress</p>
                <p className="mt-1 text-2xl font-extrabold text-ink leading-none">55%</p>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#EAECEF]">
                  <div className="h-full w-[55%] rounded-full bg-lime" />
                </div>
              </motion.div>

              {/* Lime Squiggle Graphic */}
              <motion.img
                animate={{ y: [0, 6, 0], rotate: [0, 4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                src="/assets/hero_shape_lime_squiggle.png"
                alt=""
                className="pointer-events-none absolute -right-6 bottom-8 z-20 h-24 w-24 object-contain sm:h-28 sm:w-28"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </MotionSection>

      {/* 6. CREATE & MANAGE COURSES EASILY SECTION */}
      <MotionSection className="py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Visual: Creator with Tablet & UI Overlays */}
            <div className="relative order-2 mx-auto flex w-full max-w-[460px] items-center justify-center select-none lg:order-1 lg:mx-0">
              <img
                src="/assets/feature-create.jpg"
                alt="Course Creator"
                className="relative z-10 max-h-[440px] w-full max-w-[380px] rounded-[28px] object-cover shadow-[0_20px_50px_rgba(7,18,67,0.15)]"
                draggable={false}
              />

              {/* UI Overlay 1: Earnings Pill ($1,200.00) */}
              <div className="absolute -left-2 top-6 z-20 rounded-[18px] bg-[#002FB6] p-3 text-white shadow-xl sm:left-0">
                <p className="text-[10px] text-white/70">Course Revenue</p>
                <p className="text-base font-extrabold sm:text-lg">$1,200.00</p>
                <div className="mt-1.5 h-1.5 w-24 rounded-full bg-white/20">
                  <div className="h-full w-3/4 rounded-full bg-lime" />
                </div>
              </div>

              {/* UI Overlay 2: Balance Pill ($5,110.65) */}
              <div className="absolute -left-4 bottom-24 z-20 rounded-[18px] bg-[#002FB6] p-3 text-white shadow-xl sm:-left-2">
                <p className="text-[10px] text-white/70">Total Balance</p>
                <p className="text-base font-extrabold sm:text-lg">$5,110.65</p>
                <span className="mt-1 inline-block rounded-full bg-lime px-2 py-0.5 text-[9px] font-bold text-black">
                  +18.4%
                </span>
              </div>

              {/* UI Overlay 3: Happy Students */}
              <div className="absolute -right-3 bottom-12 z-20 flex w-[210px] items-center justify-between rounded-[18px] bg-white p-3 shadow-2xl sm:right-0">
                <div>
                  <p className="text-xs font-bold text-ink">Happy Students</p>
                  <p className="text-[10px] text-[#FBBF24]">4.8 ★★★★★</p>
                </div>
                <AvatarStack count="2K+" />
              </div>

              {/* Lime Squiggle */}
              <motion.img
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                src="/assets/hero_shape_lime_squiggle.png"
                alt=""
                className="pointer-events-none absolute -right-6 top-10 z-20 h-24 w-24 object-contain"
                draggable={false}
              />
            </div>

            {/* Right Text */}
            <div className="order-1 max-w-xl lg:order-2">
              <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.035em] text-ink sm:text-4xl lg:text-[44px]">
                Create & Manage
                <br />
                Courses Easily.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base sm:leading-7">
                ByteSpace gives creators intuitive tools to publish, organize and improve learning experiences without unnecessary complexity. Share your passion, build your student community, and generate sustainable income.
              </p>

              {/* Bullet Points with Blue Circle Checkmarks */}
              <div className="mt-8 space-y-4">
                {[
                  'Effortless Course Creation',
                  'Interactive Quizzes and Assignments',
                  'Seamless Video Hosting',
                  'Dedicated Instructor Support'
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#003be2] text-white">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-ink sm:text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* 7. CREATOR CTA BLUE GRID SECTION */}
      <BlueGridBackground className="py-20 text-center sm:py-24 lg:py-28">
        <BrandShapes />
        <div className="container-page relative z-10 mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl lg:text-[48px] lg:leading-[1.15]">
            Unlock Your Potential as a
            <br />
            Creator with ByteSpace
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base sm:leading-7">
            ByteSpace provides the ultimate platform to showcase your expertise and earn from your knowledge. Join a thriving community of creators and take full control of your courses, students, and revenue.
          </p>
          <div className="mt-8 sm:mt-10">
            <Button
              type="button"
              variant="lime"
              onClick={() => {
                navigate('/creator/purepearl-studio')
                toast.success('Creator onboarding opened')
              }}
              className="h-12 px-9 text-base font-bold text-black"
            >
              Join as Creator
            </Button>
          </div>
        </div>
      </BlueGridBackground>

      {/* 8. TESTIMONIALS SECTION */}
      <MotionSection className="relative overflow-hidden bg-gradient-to-br from-[#FEFFE8]/50 via-white to-[#EBF0FF]/40 py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          {/* Header Row */}
          <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr] lg:items-end">
            <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.035em] text-ink sm:text-4xl lg:text-[44px]">
              Discover What Our
              <br />
              Community Is Saying
            </h2>
            <p className="text-sm leading-relaxed text-muted sm:text-base sm:leading-7">
              At ByteSpace, our mission is to empower individuals to achieve their full potential through accessible, high-quality online education. But don't just take our word for it. Read the real stories and testimonials from students and creators whose lives have been transformed.
            </p>
          </div>

          {/* 3 Testimonial Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                avatar: '/assets/avatar-sarah.jpg',
                name: 'Sarah M.',
                role: 'UI Designer',
                quote:
                  'ByteSpace has made learning feel flexible and approachable. The course structure is clean, practical and easy to follow. It completely changed the way I build designs.'
              },
              {
                avatar: '/assets/avatar-james.jpg',
                name: 'James L.',
                role: 'Web Developer',
                quote:
                  'The lessons are practical enough to apply right away. I especially like the way topics are broken down step-by-step with real code examples and mentors.'
              },
              {
                avatar: '/assets/avatar-alex.jpg',
                name: 'Alex D.',
                role: 'Product Designer',
                quote:
                  'The creator-focused approach makes this platform feel modern, useful and built around real growth. The community support is outstanding!'
              }
            ].map(({ avatar, name, role, quote }) => (
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                key={name}
                className="flex flex-col justify-between rounded-[24px] border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgba(7,18,67,0.04)] sm:p-7"
              >
                <div>
                  <img
                    src={avatar}
                    alt={name}
                    className="h-12 w-12 rounded-full object-cover shadow-sm"
                  />
                  <p className="mt-4 text-base font-bold text-ink">{name}</p>
                  <p className="text-xs font-semibold text-brand">{role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-[#4B5563]">"{quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* 9. SHARED FOOTER */}
      <Footer />
    </div>
  )
}
