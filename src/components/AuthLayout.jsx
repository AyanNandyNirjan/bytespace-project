import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ByteSpaceLogo from './ByteSpaceLogo'
import AvatarStack from './AvatarStack'

export default function AuthLayout({
  title,
  subtitle,
  children
}) {
  return (
    <div className="brand-grid relative flex min-h-screen w-full items-center justify-center p-4 sm:p-8 lg:p-12">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center justify-between gap-10 lg:flex-row lg:items-center lg:gap-16">
        {/* ========================================================
            LEFT SIDE: Branding, Copy & Layered Artwork
            ======================================================== */}
        <div className="flex w-full flex-1 flex-col justify-center lg:max-w-[560px]">
          {/* Top Logo Mark */}
          <div className="mb-6 sm:mb-8">
            <Link to="/" className="inline-block transition-transform hover:scale-105">
              <img
                src="/assets/logo_icon_2x.png"
                alt="ByteSpace"
                className="h-10 w-auto object-contain"
                draggable={false}
              />
            </Link>
          </div>

          {/* Heading & Subtitle */}
          <h1 className="text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            {title}
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
            {subtitle}
          </p>

          {/* Layered Cards & 3D Shapes Composition */}
          <div className="relative mx-auto mt-8 h-[440px] w-full max-w-[480px] select-none sm:mt-10 sm:h-[480px] lg:mx-0">
            {/* 3D Shape 1: Vibrant Lime Torus (Top-Left) */}
            <motion.img
              animate={{ y: [0, -6, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              src="/assets/auth_shape_lime_torus_clean.png"
              alt=""
              className="pointer-events-none absolute -left-4 top-8 z-30 h-20 w-20 object-contain sm:h-24 sm:w-24"
              draggable={false}
            />

            {/* Layer 1 (Back Left): Build Digital Asset Card (Straight, no tilt) */}
            <div className="absolute left-2 top-14 z-10 w-[250px] rounded-[22px] border border-white/20 bg-white/95 p-3.5 shadow-[0_16px_40px_rgba(7,18,67,0.18)] backdrop-blur-sm sm:left-4 sm:w-[280px]">
              <div className="relative aspect-[1.8/1] overflow-hidden rounded-[14px] bg-gray-100">
                <img
                  src="/assets/course-digital.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-2 left-2 rounded-full bg-black/45 px-2 py-0.5 text-[9px] font-medium text-white backdrop-blur-md">
                  17 Lessons
                </span>
              </div>
              <div className="pt-2.5">
                <p className="text-xs font-bold text-ink sm:text-[13px]">Build Digital Asset</p>
                <p className="text-[10px] font-semibold text-brand">by purepearl studio</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#F3F4F6] px-2.5 py-0.5 text-[9px] font-medium text-[#555]">
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor">
                      <rect x="2" y="10" width="3" height="5" rx="0.5" />
                      <rect x="6.5" y="6" width="3" height="9" rx="0.5" />
                      <rect x="11" y="2" width="3" height="13" rx="0.5" />
                    </svg>
                    Beginner
                  </span>
                  <AvatarStack count="26+" className="scale-80 origin-right" />
                </div>
                <p className="mt-1.5 text-[13px] font-bold text-brand">
                  $25<span className="text-[10px] font-normal text-muted">/lifetime</span>
                </p>
              </div>
            </div>

            {/* Layer 2 (Front Right): the Power of Big Data Card */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-0 top-0 z-20 w-[270px] rounded-[24px] border border-white/40 bg-white p-4 shadow-[0_20px_50px_rgba(7,18,67,0.22)] sm:right-2 sm:w-[310px]"
            >
              <div className="relative aspect-[1.8/1] overflow-hidden rounded-[14px] bg-gray-100">
                <img
                  src="/assets/course-data.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-2 bottom-2 flex items-center justify-between text-[9px] text-white">
                  <span className="rounded-full bg-black/50 px-2 py-0.5 backdrop-blur-md">
                    17 Lessons
                  </span>
                  <span className="rounded-full bg-black/50 px-2 py-0.5 backdrop-blur-md">
                    2 hours 16 mins
                  </span>
                  <span className="rounded-full bg-black/50 px-2 py-0.5 backdrop-blur-md">
                    59 Comments
                  </span>
                </div>
              </div>
              <div className="pt-3">
                <div className="flex items-start justify-between">
                  <p className="text-xs font-bold text-ink sm:text-[14px]">
                    the Power of Big Data
                  </p>
                  <span className="text-[11px] font-medium text-gray-500">
                    4.5 <span className="text-[#FBBF24]">★</span>
                  </span>
                </div>
                <p className="text-[10px] font-semibold text-brand">by purepearl studio</p>
                <div className="mt-2.5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#F3F4F6] px-2.5 py-0.5 text-[9px] font-medium text-[#555]">
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor">
                      <rect x="2" y="10" width="3" height="5" rx="0.5" />
                      <rect x="6.5" y="6" width="3" height="9" rx="0.5" />
                      <rect x="11" y="2" width="3" height="13" rx="0.5" />
                    </svg>
                    Beginner
                  </span>
                  <AvatarStack count="26+" className="scale-90 origin-right" />
                </div>
                <p className="mt-2 text-[14px] font-bold text-brand">
                  $25<span className="text-[10px] font-normal text-muted">/lifetime</span>
                </p>
              </div>
            </motion.div>

            {/* Layer 3 (Bottom Right): Happy Students Card with Lime Background */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 right-2 z-30 flex w-[230px] flex-col justify-between rounded-[22px] bg-lime p-3.5 shadow-[0_16px_40px_rgba(7,18,67,0.25)] sm:right-4 sm:w-[250px]"
            >
              <div>
                <p className="text-xs font-bold text-black sm:text-sm">Happy Students</p>
                <div className="mt-0.5 flex items-center gap-1 text-[11px]">
                  <span className="font-bold text-black">4.5</span>
                  <span className="text-black/70">(240)</span>
                  <span className="text-[#002FB6]">★</span>
                </div>
              </div>
              <div className="mt-2.5 flex items-center">
                <AvatarStack count="2K+" />
              </div>
            </motion.div>

            {/* 3D Shape 2: Vibrant Lime Pyramid (Bottom-Left) */}
            <motion.img
              animate={{ y: [0, 5, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              src="/assets/auth_shape_lime_pyramid_clean.png"
              alt=""
              className="pointer-events-none absolute -bottom-4 left-2 z-30 h-20 w-20 object-contain sm:left-4 sm:h-26 sm:w-26"
              draggable={false}
            />

            {/* 3D Shape 3: White Squiggle (Bottom-Right) */}
            <motion.img
              animate={{ y: [0, -6, 0], rotate: [0, 6, 0] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
              src="/assets/hero_shape_white_squiggle.png"
              alt=""
              className="pointer-events-none absolute bottom-14 -right-4 z-20 h-18 w-18 object-contain sm:-right-6 sm:h-22 sm:w-22"
              draggable={false}
            />
          </div>
        </div>

        {/* ========================================================
            RIGHT SIDE: Large White Rounded Form Panel
            ======================================================== */}
        <div className="flex w-full flex-1 justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[500px] rounded-[32px] bg-white p-6 shadow-2xl sm:rounded-[40px] sm:p-10 lg:p-12"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
