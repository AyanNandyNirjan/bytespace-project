import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Header from './Header'
import SearchBar from './SearchBar'

const springHover = { type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }

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

          {/* 1. Main Hero Heading (Smooth staggered entrance) */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-[175px] mx-auto w-[920px] text-center text-[72px] font-bold leading-[1.05] tracking-[-0.035em] text-white select-none"
          >
            Get Access to Hundreds
            <br />
            Courses Available
          </motion.h1>

          {/* 2. Subtitle (Smooth staggered entrance) */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-[376px] mx-auto w-[850px] text-center text-[17px] font-normal tracking-[0.01em] text-white/85 select-none"
          >
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </motion.p>

          {/* 3. Search Bar (Smooth scale and fade entrance) */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-[463px] z-20 mx-auto flex w-[580px] justify-center"
          >
            <SearchBar compact />
          </motion.div>

          {/* 4. Central Lime Arch (Official Figma Component) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute left-[145px] top-[583px] z-0 w-[1150px] select-none"
            style={{ willChange: 'transform' }}
          >
            <img
              src="/assets/hero_lime_arch_official.png"
              alt=""
              className="block h-auto w-full object-contain drop-shadow-[0_20px_60px_rgba(199,255,0,0.2)]"
              draggable={false}
            />
          </motion.div>

          {/* 5. Main Central Student Image (Official Figma Component with baked shadow) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute left-[378px] top-[516px] z-10 w-[728px] select-none"
          >
            <img
              src="/assets/hero_student_official.png"
              alt="ByteSpace student learning online"
              className="block h-auto w-full object-contain"
              draggable={false}
            />
          </motion.div>

          {/* ========================================================
              6. LEFT DECORATIVE SHAPES (GPU-Accelerated Compositor Floating)
              Zero stutter, silky smooth 60fps/120fps locked motion
              ======================================================== */}
          {/* A: Complete lime 3D squiggle spring (far left, y ≈ 280px) */}
          <div className="animate-float-1 pointer-events-none absolute left-[10px] top-[280px] z-10 w-[205px] select-none">
            <img
              src="/assets/hero_shape_lime_squiggle.png"
              alt=""
              className="block h-auto w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)]"
              draggable={false}
            />
          </div>

          {/* B: Complete small white squiggle (left, x ≈ 215px, y ≈ 505px) */}
          <div className="animate-float-2 pointer-events-none absolute left-[215px] top-[505px] z-10 w-[105px] select-none">
            <img
              src="/assets/hero_shape_white_squiggle.png"
              alt=""
              className="block h-auto w-full object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.20)]"
              draggable={false}
            />
          </div>

          {/* C: Complete large white ring (far left, x ≈ 45px, y ≈ 730px) */}
          <div className="animate-float-3 pointer-events-none absolute left-[45px] top-[730px] z-10 w-[240px] select-none">
            <img
              src="/assets/hero_shape_white_ring.png"
              alt=""
              className="block h-auto w-full object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.25)]"
              draggable={false}
            />
          </div>

          {/* ========================================================
              7. RIGHT DECORATIVE SHAPES (GPU-Accelerated Compositor Floating)
              Zero stutter, silky smooth 60fps/120fps locked motion
              ======================================================== */}
          {/* D: Complete large lime cylinder (far right, x ≈ 1235px, y ≈ 240px) */}
          <div className="animate-float-4 pointer-events-none absolute left-[1235px] top-[240px] z-10 w-[190px] select-none">
            <img
              src="/assets/hero_shape_lime_cylinder.png"
              alt=""
              className="block h-auto w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)]"
              draggable={false}
            />
          </div>

          {/* E: Complete white triangular pyramid (right, x ≈ 1130px, y ≈ 480px) */}
          <div className="animate-float-5 pointer-events-none absolute left-[1130px] top-[480px] z-10 w-[130px] select-none">
            <img
              src="/assets/hero_shape_white_triangle.png"
              alt=""
              className="block h-auto w-full object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.20)]"
              draggable={false}
            />
          </div>

          {/* F: Complete large white spiral (far right, x ≈ 1190px, y ≈ 705px) */}
          <div className="animate-float-6 pointer-events-none absolute left-[1190px] top-[705px] z-10 w-[235px] select-none">
            <img
              src="/assets/hero_shape_white_spiral.png"
              alt=""
              className="block h-auto w-full object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.25)]"
              draggable={false}
            />
          </div>

          {/* ========================================================
              8. OFFICIAL DESIGN COMPONENT CARDS (Exact Figma Components)
              Smooth GPU-Accelerated Floating & Tactile Micro-Interactions
              ======================================================== */}
          {/* Card 1: UI/UX Design (x = 404px, y = 640px, w = 208px, h = 70px) */}
          <div className="absolute left-[404px] top-[640px] z-20">
            <div className="animate-card-uiux">
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  transition: springHover
                }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  navigate('/courses')
                  toast.success('200 UI/UX Design courses available')
                }}
                className="transform-gpu will-change-transform cursor-pointer rounded-[16px] shadow-[0_16px_36px_rgba(7,18,67,0.18)] transition-shadow duration-200 hover:shadow-[0_24px_48px_rgba(7,18,67,0.26)]"
              >
                <img
                  src="/assets/hero_card_uiux_design.png"
                  alt="UI/UX Design - 200 Courses, 1000+ Students"
                  className="block h-auto w-[208px] rounded-[16px] select-none"
                  draggable={false}
                />
              </motion.div>
            </div>
          </div>

          {/* Card 2: Learning Progress (x = 842px, y = 652px, w = 232px, h = 131px) */}
          <div className="absolute left-[842px] top-[652px] z-20">
            <div className="animate-card-progress">
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  transition: springHover
                }}
                whileTap={{ scale: 0.96 }}
                onClick={() => toast('Your progress is 55% complete! 🎯', { icon: '📈' })}
                className="transform-gpu will-change-transform cursor-pointer rounded-[20px] shadow-[0_16px_36px_rgba(7,18,67,0.18)] transition-shadow duration-200 hover:shadow-[0_24px_48px_rgba(7,18,67,0.26)]"
              >
                <img
                  src="/assets/hero_card_learning_progress.png"
                  alt="Learning Progress - 55%"
                  className="block h-auto w-[232px] rounded-[20px] select-none"
                  draggable={false}
                />
              </motion.div>
            </div>
          </div>

          {/* Card 3: Happy Students (x = 328px, y = 838px, w = 258px, h = 121px) */}
          <div className="absolute left-[328px] top-[838px] z-20">
            <div className="animate-card-students">
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  transition: springHover
                }}
                whileTap={{ scale: 0.96 }}
                onClick={() => toast('Over 2,000+ students rated 4.5/5 stars! ⭐', { icon: '🎉' })}
                className="transform-gpu will-change-transform cursor-pointer rounded-[20px] shadow-[0_16px_36px_rgba(7,18,67,0.18)] transition-shadow duration-200 hover:shadow-[0_24px_48px_rgba(7,18,67,0.26)]"
              >
                <img
                  src="/assets/hero_card_happy_students.png"
                  alt="Happy Students - 4.5 (240) ★ - 2K+"
                  className="block h-auto w-[258px] rounded-[20px] select-none"
                  draggable={false}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE & TABLET RESPONSIVE VIEWPORT (< 1024px)
          Optimized for Android, iPhone, iPad & touch devices
          Using the official Figma design components
          ======================================================== */}
      <div className="relative z-30 lg:hidden">
        <Header />
      </div>

      <div className="container-page relative z-10 flex flex-col items-center pb-16 pt-5 text-center sm:pt-8 lg:hidden">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-[32px] font-bold leading-[1.12] tracking-[-0.035em] sm:text-5xl md:text-6xl"
        >
          Get Access to Hundreds
          <br />
          Courses Available
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3.5 max-w-lg px-2 text-sm font-normal leading-relaxed text-white/85 sm:text-base md:max-w-xl"
        >
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </motion.p>

        {/* Search Bar (fully fluid for mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex w-full max-w-[420px] justify-center px-1 sm:max-w-none sm:px-0"
        >
          <SearchBar compact />
        </motion.div>

        {/* Central Visual Composition with Official Components */}
        <div className="relative mx-auto mt-10 mb-4 w-full max-w-[340px] pb-10 sm:mt-14 sm:mb-8 sm:max-w-[460px] sm:pb-14">
          {/* Lime Arch & Student */}
          <div className="relative mx-auto w-[260px] sm:w-[360px]">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              src="/assets/hero_lime_arch_official.png"
              alt=""
              className="w-full object-contain drop-shadow-[0_16px_50px_rgba(199,255,0,0.18)]"
              draggable={false}
            />
            <motion.img
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              src="/assets/hero_student_official.png"
              alt="ByteSpace student learning online"
              className="absolute bottom-0 left-1/2 w-[220px] -translate-x-1/2 object-contain sm:w-[300px]"
              draggable={false}
            />
          </div>

          {/* Official Floating Card 1: UI/UX Design */}
          <div className="absolute -left-1 top-1 z-20 sm:-left-6 sm:top-4">
            <div className="animate-card-uiux">
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -4,
                  scale: 1.03,
                  transition: springHover
                }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  navigate('/courses')
                  toast.success('200 UI/UX Design courses available')
                }}
                className="transform-gpu will-change-transform w-[114px] cursor-pointer rounded-[12px] shadow-[0_12px_28px_rgba(7,18,67,0.18)] transition-shadow duration-200 hover:shadow-[0_16px_36px_rgba(7,18,67,0.26)] sm:w-[155px]"
              >
                <img
                  src="/assets/hero_card_uiux_design.png"
                  alt="UI/UX Design"
                  className="w-full object-contain rounded-[12px] select-none"
                  draggable={false}
                />
              </motion.div>
            </div>
          </div>

          {/* Official Floating Card 2: Learning Progress */}
          <div className="absolute -right-1 top-4 z-20 sm:-right-6 sm:top-8">
            <div className="animate-card-progress">
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -4,
                  scale: 1.03,
                  transition: springHover
                }}
                whileTap={{ scale: 0.96 }}
                onClick={() => toast('Your progress is 55% complete! 🎯', { icon: '📈' })}
                className="transform-gpu will-change-transform w-[122px] cursor-pointer rounded-[14px] shadow-[0_12px_28px_rgba(7,18,67,0.18)] transition-shadow duration-200 hover:shadow-[0_16px_36px_rgba(7,18,67,0.26)] sm:w-[160px]"
              >
                <img
                  src="/assets/hero_card_learning_progress.png"
                  alt="Learning Progress 55%"
                  className="w-full object-contain rounded-[14px] select-none"
                  draggable={false}
                />
              </motion.div>
            </div>
          </div>

          {/* Official Floating Card 3: Happy Students */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
            <div className="animate-card-students">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -4,
                  scale: 1.03,
                  transition: springHover
                }}
                whileTap={{ scale: 0.96 }}
                onClick={() => toast('Over 2,000+ students rated 4.5/5 stars! ⭐', { icon: '🎉' })}
                className="transform-gpu will-change-transform w-[165px] cursor-pointer rounded-[16px] shadow-[0_14px_32px_rgba(7,18,67,0.20)] transition-shadow duration-200 hover:shadow-[0_18px_40px_rgba(7,18,67,0.28)] sm:w-[215px]"
              >
                <img
                  src="/assets/hero_card_happy_students.png"
                  alt="Happy Students"
                  className="w-full object-contain rounded-[16px] select-none"
                  draggable={false}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
