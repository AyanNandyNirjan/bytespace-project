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
import GrowthVisual from '../components/GrowthVisual'
import ManageVisual from '../components/ManageVisual'
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
              className="transform-gpu flex items-center justify-center opacity-80 transition-[opacity,transform] duration-150 ease-out hover:opacity-100 hover:scale-105"
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
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 450, damping: 28, mass: 0.5 }}
                onClick={() => {
                  navigate('/courses')
                  toast.success(`${label} learning path selected`)
                }}
                key={label}
                className="transform-gpu group flex cursor-pointer flex-col items-center justify-center rounded-[22px] border border-[#E5E7EB] bg-white p-5 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-[border-color,box-shadow] duration-200 hover:border-black/20 hover:shadow-[0_14px_36px_rgba(7,18,67,0.09)] sm:py-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-lime text-black shadow-sm transition-transform duration-150 ease-out group-hover:scale-110">
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

      {/* 5 & 6. PROFESSIONAL GROWTH & COURSE MANAGEMENT SHOWCASE */}
      <section
        className="relative overflow-x-clip py-14 sm:py-18 lg:py-20"
        style={{
          background: `
            radial-gradient(ellipse 65% 50% at 85% 12%, rgba(212, 255, 0, 0.22) 0%, rgba(212, 255, 0, 0.05) 50%, transparent 75%),
            radial-gradient(ellipse 55% 45% at 5% 40%, rgba(59, 130, 246, 0.10) 0%, transparent 65%),
            radial-gradient(ellipse 60% 50% at 10% 88%, rgba(212, 255, 0, 0.26) 0%, rgba(212, 255, 0, 0.06) 55%, transparent 80%),
            radial-gradient(ellipse 55% 45% at 92% 92%, rgba(96, 165, 250, 0.14) 0%, transparent 70%),
            #ffffff
          `
        }}
      >
        {/* Soft Ambient Glow Orbs for Luminous Depth */}
        <div className="pointer-events-none absolute -top-16 right-4 h-[550px] w-[550px] rounded-full bg-[#D4FF00]/18 blur-[140px] lg:right-16" />
        <div className="pointer-events-none absolute top-[36%] -left-28 h-[450px] w-[450px] rounded-full bg-[#3B82F6]/10 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-4 -left-16 h-[520px] w-[520px] rounded-full bg-[#D4FF00]/22 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-10 right-4 h-[480px] w-[480px] rounded-full bg-[#60A5FA]/14 blur-[130px]" />

        <div className="container-page relative z-10 space-y-12 sm:space-y-14 lg:space-y-16">
          {/* Part A: Professional Growth */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left Content */}
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.035em] text-ink sm:text-4xl lg:text-[44px]">
                Your Path to Professional
                <br />
                Growth Starts Here!
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[#4B5563] sm:text-base sm:leading-7">
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
              </p>

              {/* Stats Numbers */}
              <div className="mt-8 flex flex-wrap gap-8 sm:gap-12">
                <div>
                  <b className="text-3xl font-extrabold text-[#0A43E6] sm:text-4xl">12K</b>
                  <p className="mt-1 text-xs font-semibold text-[#4B5563] sm:text-sm">Students</p>
                </div>
                <div>
                  <b className="text-3xl font-extrabold text-[#0A43E6] sm:text-4xl">70+</b>
                  <p className="mt-1 text-xs font-semibold text-[#4B5563] sm:text-sm">Courses</p>
                </div>
                <div>
                  <b className="text-3xl font-extrabold text-[#0A43E6] sm:text-4xl">16</b>
                  <p className="mt-1 text-xs font-semibold text-[#4B5563] sm:text-sm">Creators</p>
                </div>
              </div>
            </div>

            {/* Right Visual Art with Individual Components */}
            <div className="relative mx-auto flex w-full max-w-[480px] items-center justify-center select-none lg:mx-0">
              <GrowthVisual />
            </div>
          </div>

          {/* Part B: Create & Manage Courses Easily */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left Visual: Creator with Tablet & UI Overlays with Individual Components */}
            <div className="relative order-2 mx-auto flex w-full max-w-[480px] items-center justify-center select-none lg:order-1 lg:mx-0">
              <ManageVisual />
            </div>

            {/* Right Text */}
            <div className="order-1 max-w-xl lg:order-2">
              <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.035em] text-ink sm:text-4xl lg:text-[44px]">
                Create & Manage
                <br />
                Courses Easily.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[#4B5563] sm:text-base sm:leading-7">
                <strong className="font-bold text-ink">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
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
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0A43E6] text-white sm:h-6 sm:w-6 shadow-sm">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-[#111827] sm:text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CREATOR CTA BLUE GRID SECTION */}
      <BlueGridBackground className="py-16 text-center sm:py-20 lg:py-24">
        <BrandShapes />
        <div className="container-page relative z-20 mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.18]">
            Unlock Your Potential as a
            <br />
            Creator with ByteSpace
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xs font-normal leading-relaxed text-white/90 sm:mt-5 sm:text-sm sm:leading-relaxed lg:text-[14.5px] lg:leading-[1.65]">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <div className="mt-6 sm:mt-8">
            <Button
              type="button"
              variant="lime"
              onClick={() => {
                navigate('/creator/purepearl-studio')
                toast.success('Creator onboarding opened! 🚀')
              }}
              className="h-10 px-7 text-xs font-bold text-black sm:h-11 sm:px-8 sm:text-sm"
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
                transition={{ type: 'spring', stiffness: 450, damping: 28, mass: 0.5 }}
                key={name}
                className="transform-gpu flex flex-col justify-between rounded-[22px] border border-[#E5E7EB] bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-[border-color,box-shadow] duration-200 hover:border-black/20 hover:shadow-[0_14px_36px_rgba(7,18,67,0.09)]"
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
