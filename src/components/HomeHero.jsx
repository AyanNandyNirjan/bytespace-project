import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Header from './Header'
import SearchBar from './SearchBar'

export default function HomeHero() {
  const navigate = useNavigate()
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      if (w >= 1440) {
        setScale(1)
      } else if (w >= 1024) {
        setScale(w / 1440)
      } else {
        setScale(1)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="brand-grid relative w-full overflow-hidden text-white">
      {/* ========================================================
          DESKTOP & LAPTOP VIEWPORT (>= 1024px)
          Dynamically scales to fit laptops (1024px - 1440px)
          and remains 100% pixel-perfect at >= 1440px
          ======================================================== */}
      <div
        className="relative mx-auto hidden w-full overflow-hidden lg:block"
        style={{ height: `${1024 * scale}px` }}
      >
        <div
          className="absolute left-1/2 top-0 h-[1024px] w-[1440px]"
          style={{
            transform: `translateX(-50%) scale(${scale})`,
            transformOrigin: 'top center'
          }}
        >
          {/* Header (Top: 0 with pt-[34px] inside) */}
          <div className="absolute left-0 right-0 top-0 z-30 w-full">
            <Header />
          </div>

          {/* 1. Main Hero Heading (y = 185px target glyph start, two lines, centered) */}
          <motion.h1
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 right-0 top-[175px] mx-auto w-[920px] text-center text-[72px] font-bold leading-[1.05] tracking-[-0.035em] text-white select-none"
          >
            Get Access to Hundreds
            <br />
            Courses Available
          </motion.h1>

          {/* 2. Subtitle (y = 382px target glyph start, centered, single line) */}
          <motion.p
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="absolute left-0 right-0 top-[376px] mx-auto w-[850px] text-center text-[17px] font-normal tracking-[0.01em] text-white/85 select-none"
          >
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </motion.p>

          {/* 3. Search Bar (y = 463px target, centered, separate input and lime button) */}
          <motion.div
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="absolute left-0 right-0 top-[463px] z-20 mx-auto flex w-[580px] justify-center"
          >
            <SearchBar compact />
          </motion.div>

          {/* 4. Central Green Semicircle (Apex around y = 585px, width = 1150px) */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[585px] z-0 mx-auto h-[1150px] w-[1150px] rounded-full bg-lime"
            style={{ willChange: 'transform' }}
          />

          {/* 5. Main Central Student Image (Starts around y = 535px, bottom = 1024px) */}
          <motion.div
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="pointer-events-none absolute left-0 right-0 top-[535px] z-10 mx-auto w-[470px] select-none"
          >
            <img
              src="/assets/student_cutout_clean.png"
              alt="ByteSpace student learning online"
              className="block h-auto w-full object-contain"
              draggable={false}
            />
          </motion.div>

          {/* 6. Left Decorative Shapes */}
          {/* A: Large lime 3D squiggle (far left, y ≈ 285px) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute -left-[10px] top-[285px] z-10 w-[215px] select-none"
          >
            <img
              src="/assets/hero_shape_lime_squiggle.png"
              alt=""
              className="block h-auto w-full object-contain"
              draggable={false}
            />
          </motion.div>

          {/* B: Small white squiggle (left, x ≈ 215px, y ≈ 505px) */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="pointer-events-none absolute left-[215px] top-[505px] z-10 w-[95px] select-none"
          >
            <img
              src="/assets/hero_shape_white_squiggle.png"
              alt=""
              className="block h-auto w-full object-contain"
              draggable={false}
            />
          </motion.div>

          {/* C: Large white ring (far left, x ≈ 55px, y ≈ 735px) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7.0, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="pointer-events-none absolute left-[55px] top-[735px] z-10 w-[250px] select-none"
          >
            <img
              src="/assets/hero_shape_white_ring.png"
              alt=""
              className="block h-auto w-full object-contain"
              draggable={false}
            />
          </motion.div>

          {/* 7. Right Decorative Shapes */}
          {/* D: Large lime cylinder (far right, x ≈ 1270px, y ≈ 250px) */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="pointer-events-none absolute left-[1270px] top-[250px] z-10 w-[170px] select-none"
          >
            <img
              src="/assets/hero_shape_lime_cylinder.png"
              alt=""
              className="block h-auto w-full object-contain"
              draggable={false}
            />
          </motion.div>

          {/* E: White triangular pyramid (right, x ≈ 1130px, y ≈ 480px) */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            className="pointer-events-none absolute left-[1130px] top-[480px] z-10 w-[130px] select-none"
          >
            <img
              src="/assets/hero_shape_white_triangle.png"
              alt=""
              className="block h-auto w-full object-contain"
              draggable={false}
            />
          </motion.div>

          {/* F: Large white spiral (far right, x ≈ 1195px, y ≈ 705px) */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            className="pointer-events-none absolute left-[1195px] top-[705px] z-10 w-[245px] select-none"
          >
            <img
              src="/assets/hero_shape_white_spiral.png"
              alt=""
              className="block h-auto w-full object-contain"
              draggable={false}
            />
          </motion.div>

          {/* 8. Floating Cards (Positioned in front of student and lime circle) */}
          {/* Card 1: UI/UX Design (x = 405px, y = 640px) */}
          <motion.div
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.04, y: -2 }}
            onClick={() => {
              navigate('/courses')
              toast.success('200 UI/UX Design courses available')
            }}
            className="absolute left-[405px] top-[640px] z-20 flex h-[68px] w-[205px] cursor-pointer flex-col justify-center rounded-[16px] bg-white px-4 py-3 shadow-[0_16px_36px_rgba(7,18,67,0.12)] transition-shadow hover:shadow-[0_20px_42px_rgba(7,18,67,0.18)]"
          >
            <p className="text-[15px] font-bold text-[#111318]">UI/UX Design</p>
            <p className="mt-0.5 text-[11px] font-medium text-[#6C7280]">
              200 Courses &nbsp;•&nbsp; 1000+ Students
            </p>
          </motion.div>

          {/* Card 2: Learning Progress (x = 843px, y = 652px) */}
          <motion.div
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.03, y: -2 }}
            onClick={() => toast('Your progress is 55% complete! 🎯', { icon: '📈' })}
            className="absolute left-[843px] top-[652px] z-20 flex h-[128px] w-[230px] cursor-pointer flex-col justify-between rounded-[20px] bg-white p-5 shadow-[0_16px_36px_rgba(7,18,67,0.12)] transition-shadow hover:shadow-[0_20px_42px_rgba(7,18,67,0.18)]"
          >
            <div>
              <p className="text-[12px] font-medium text-[#6C7280]">Learning Progress</p>
              <p className="mt-1 text-[36px] font-extrabold leading-none text-[#111318]">
                55%
              </p>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-[#EAECEF]">
              <div className="h-full w-[55%] rounded-full bg-lime" />
            </div>
          </motion.div>

          {/* Card 3: Happy Students (x = 329px, y = 838px) */}
          <motion.div
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.03, y: -2 }}
            onClick={() => toast('Over 2,000+ students rated 4.5/5 stars! ⭐', { icon: '🎉' })}
            className="absolute left-[329px] top-[838px] z-20 flex h-[118px] w-[256px] cursor-pointer flex-col justify-between rounded-[20px] bg-white p-4 shadow-[0_16px_36px_rgba(7,18,67,0.12)] transition-shadow hover:shadow-[0_20px_42px_rgba(7,18,67,0.18)]"
          >
            <div>
              <p className="text-[15px] font-bold text-[#111318]">Happy Students</p>
              <div className="mt-0.5 flex items-center gap-1.5 text-[12px]">
                <span className="font-bold text-[#111318]">4.5</span>
                <span className="text-[#6C7280]">(240)</span>
                <span className="text-[#FFB800]">★</span>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="/assets/target_avatars_row.png"
                alt="Happy students avatars"
                className="h-[38px] w-auto object-contain"
                draggable={false}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ========================================================
          MOBILE & TABLET RESPONSIVE VIEWPORT (< 1024px)
          Optimized for Android, iPhone, iPad & touch devices
          ======================================================== */}
      <div className="relative z-30 lg:hidden">
        <Header />
      </div>

      <div className="container-page relative z-10 flex flex-col items-center pb-16 pt-5 text-center sm:pt-8 lg:hidden">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl text-[32px] font-bold leading-[1.12] tracking-[-0.035em] sm:text-5xl md:text-6xl"
        >
          Get Access to Hundreds
          <br />
          Courses Available
        </motion.h1>

        {/* Subtitle */}
        <p className="mt-3.5 max-w-lg px-2 text-sm font-normal leading-relaxed text-white/85 sm:text-base md:max-w-xl">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar (fully fluid for mobile) */}
        <div className="mt-6 flex w-full max-w-[420px] justify-center px-1 sm:max-w-none sm:px-0">
          <SearchBar compact />
        </div>

        {/* Central Visual Composition with Student & Lime Backdrop */}
        <div className="relative mx-auto mt-8 w-full max-w-[320px] sm:mt-12 sm:max-w-[480px]">
          {/* Lime Circle Backdrop */}
          <div className="relative mx-auto aspect-square w-[240px] overflow-hidden rounded-full bg-lime sm:w-[330px] md:w-[360px]">
            <img
              src="/assets/student_cutout_clean.png"
              alt="ByteSpace student learning online"
              className="absolute bottom-0 left-1/2 w-[210px] -translate-x-1/2 object-contain sm:w-[290px] md:w-[320px]"
              draggable={false}
            />
          </div>

          {/* Floating Card 1: UI/UX Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => {
              navigate('/courses')
              toast.success('200 UI/UX Design courses available')
            }}
            className="absolute left-1 top-6 z-20 flex h-[54px] w-[140px] cursor-pointer flex-col justify-center rounded-[14px] bg-white px-3 py-1.5 text-left shadow-[0_12px_28px_rgba(7,18,67,0.18)] sm:-left-6 sm:top-10 sm:h-[66px] sm:w-[195px] sm:px-4"
          >
            <p className="text-[12px] font-bold text-[#111318] sm:text-[14px]">UI/UX Design</p>
            <p className="text-[9px] font-medium text-[#6C7280] sm:text-[11px]">
              200 Courses • 1k+ Students
            </p>
          </motion.div>

          {/* Floating Card 2: Learning Progress */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => toast('Your progress is 55% complete! 🎯', { icon: '📈' })}
            className="absolute right-1 top-12 z-20 flex h-[72px] w-[120px] cursor-pointer flex-col justify-between rounded-[16px] bg-white p-2.5 text-left shadow-[0_12px_28px_rgba(7,18,67,0.18)] sm:-right-6 sm:top-16 sm:h-[92px] sm:w-[160px] sm:p-3.5"
          >
            <div>
              <p className="text-[9px] font-medium text-[#6C7280] sm:text-[11px]">Progress</p>
              <p className="text-[18px] font-extrabold leading-none text-[#111318] sm:text-[24px]">55%</p>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#EAECEF]">
              <div className="h-full w-[55%] rounded-full bg-lime" />
            </div>
          </motion.div>

          {/* Floating Card 3: Happy Students */}
          <motion.div
            initial={{ opacity: 0, y: 10, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            transition={{ duration: 0.4, delay: 0.25 }}
            whileHover={{ scale: 1.03, x: '-50%' }}
            onClick={() => toast('Over 2,000+ students rated 4.5/5 stars! ⭐', { icon: '🎉' })}
            className="absolute -bottom-2.5 left-1/2 z-20 flex w-[210px] cursor-pointer items-center justify-between rounded-[16px] bg-white px-3 py-2 shadow-[0_14px_32px_rgba(7,18,67,0.2)] sm:-bottom-4 sm:w-[250px] sm:px-4 sm:py-3"
          >
            <div className="text-left">
              <p className="text-[12px] font-bold text-[#111318] sm:text-[13px]">Happy Students</p>
              <div className="flex items-center gap-1 text-[10px] sm:text-[11px]">
                <span className="font-bold text-[#111318]">4.5</span>
                <span className="text-[#FFB800]">★</span>
                <span className="text-[#6C7280]">(240)</span>
              </div>
            </div>
            <img
              src="/assets/target_avatars_row.png"
              alt="Happy students"
              className="h-[24px] w-auto object-contain sm:h-[30px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
