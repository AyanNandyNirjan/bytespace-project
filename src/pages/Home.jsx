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
  'Learn Python',
  'Security',
  '+ More'
]

const brandLogos = [
  { src: '/assets/logoipsum_1_waves.png', srcSet: '/assets/logoipsum_1_waves@2x.png 2x', alt: 'Logoipsum' },
  { src: '/assets/logoipsum_2_sunburst.png', srcSet: '/assets/logoipsum_2_sunburst@2x.png 2x', alt: 'Logoipsum' },
  { src: '/assets/logoipsum_3_bolt.png', srcSet: '/assets/logoipsum_3_bolt@2x.png 2x', alt: 'Logoipsum' },
  { src: '/assets/logoipsum_4_flower.png', srcSet: '/assets/logoipsum_4_flower@2x.png 2x', alt: 'Logoipsum' },
  { src: '/assets/logoipsum_5_rings.png', srcSet: '/assets/logoipsum_5_rings@2x.png 2x', alt: 'Logoipsum' },
]

export default function Home() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('Featured')

  return (
    <div className="min-h-screen bg-white text-ink">
      {/* 1. HERO SECTION */}
      <HomeHero />

      {/* 2. PARTNER LOGO STRIP (Exact Figma Logoipsum Component) */}
      <section className="border-b border-black/5 bg-[#F5F5F6] py-8 sm:py-9">
        <div className="container-page flex flex-wrap items-center justify-center gap-8 sm:justify-between sm:gap-10 lg:gap-14">
          {brandLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center opacity-85 transition-all duration-200 hover:opacity-100 hover:scale-105"
            >
              <img
                src={logo.src}
                srcSet={logo.srcSet}
                alt={logo.alt}
                className="h-6 sm:h-[26px] lg:h-[28px] w-auto object-contain select-none"
                draggable={false}
              />
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
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-2.5">
            {homeCategories.map(cat => (
              <CategoryChip
                key={cat}
                active={activeCategory === cat}
                onClick={() => {
                  if (cat === '+ More') {
                    navigate('/courses')
                    toast.success('Browsing all categories')
                    return
                  }
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
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
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

            {/* Right Visual Art */}
            <div className="relative mx-auto flex w-full max-w-[460px] items-center justify-center select-none lg:mx-0">
              <img
                src="/assets/feature_growth_composite.png"
                alt="Your Path to Professional Growth Starts Here"
                className="relative z-10 w-full max-w-[430px] object-contain drop-shadow-[0_20px_40px_rgba(7,18,67,0.10)] transition-transform duration-300 hover:scale-[1.02]"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </MotionSection>

      {/* 6. CREATE & MANAGE COURSES EASILY SECTION */}
      <MotionSection className="relative overflow-hidden bg-gradient-to-tr from-[#FEFFE8]/40 via-white to-[#EBF0FF]/40 py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Visual: Creator with Tablet & UI Overlays */}
            <div className="relative order-2 mx-auto flex w-full max-w-[460px] items-center justify-center select-none lg:order-1 lg:mx-0">
              <img
                src="/assets/feature_manage_composite.png"
                alt="Create & Manage Courses Easily"
                className="relative z-10 w-full max-w-[420px] object-contain drop-shadow-[0_20px_40px_rgba(7,18,67,0.10)] transition-transform duration-300 hover:scale-[1.02]"
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
                ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
              </p>

              {/* Bullet Points with Blue Circle Checkmarks */}
              <div className="mt-8 space-y-4">
                {[
                  'Share Your Expertise',
                  'Monetize Your Passion',
                  'Flexibility and Autonomy',
                  'Build a Community'
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1B59F8] text-white sm:h-6 sm:w-6 shadow-sm">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
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
      <MotionSection className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        {/* Visible Ambient Background Glows Matching Design Reference */}
        {/* 1. Large Vibrant Yellow / Lime Glow (Top-Right / Center) */}
        <div
          className="pointer-events-none absolute -top-28 right-0 h-[520px] w-[620px] rounded-full bg-[#D4FF00]/45 blur-[100px] lg:-top-32 lg:right-6 lg:h-[600px] lg:w-[720px] lg:bg-[#D4FF00]/50"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -top-16 left-1/3 h-[400px] w-[460px] rounded-full bg-[#E5FF4D]/35 blur-[90px]"
          aria-hidden="true"
        />
        {/* 2. Soft Periwinkle Blue Glow (Bottom-Left) */}
        <div
          className="pointer-events-none absolute -bottom-24 -left-20 h-[440px] w-[480px] rounded-full bg-[#9BB6FF]/40 blur-[95px]"
          aria-hidden="true"
        />

        <div className="container-page relative z-10">
          {/* Header Row */}
          <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr] lg:items-end">
            <h2 className="text-3xl font-extrabold leading-[1.15] tracking-[-0.035em] text-ink sm:text-4xl lg:text-[44px]">
              Discover What Our
              <br />
              Community Is Saying
            </h2>
            <p className="text-sm leading-relaxed text-[#555A64] sm:text-base sm:leading-7">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>

          {/* 3 Testimonial Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-7">
            {[
              {
                avatar: '/assets/avatar_sarah_circle.png',
                avatar2x: '/assets/avatar_sarah_circle@2x.png',
                name: 'Sarah M.',
                role: 'Enthusiastic Learner',
                quote:
                  '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."'
              },
              {
                avatar: '/assets/avatar_james_circle.png',
                avatar2x: '/assets/avatar_james_circle@2x.png',
                name: 'James L.',
                role: 'Lifelong Learner',
                quote:
                  '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."'
              },
              {
                avatar: '/assets/avatar_alex_circle.png',
                avatar2x: '/assets/avatar_alex_circle@2x.png',
                name: 'Alex B.',
                role: 'Inspired Creator',
                quote:
                  '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."'
              }
            ].map(({ avatar, avatar2x, name, role, quote }) => (
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                key={name}
                className="flex flex-col justify-between rounded-[28px] border border-gray-100/90 bg-white p-7 shadow-[0_16px_40px_rgba(7,18,67,0.06)] sm:rounded-[32px] sm:p-8"
              >
                <div>
                  <img
                    src={avatar}
                    srcSet={avatar2x ? `${avatar2x} 2x` : undefined}
                    alt={name}
                    className="h-14 w-14 rounded-full object-cover select-none sm:h-16 sm:w-16"
                    draggable={false}
                  />
                  <p className="mt-5 text-[17px] font-bold text-ink sm:text-[18px]">{name}</p>
                  <p className="mt-0.5 text-xs font-semibold text-[#1B59F8] sm:text-sm">{role}</p>
                  <p className="mt-4 text-xs leading-relaxed text-[#4B5563] sm:text-[13.5px] sm:leading-6">{quote}</p>
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
