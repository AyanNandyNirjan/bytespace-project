import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function AuthLayout({
  title,
  subtitle,
  children
}) {
  return (
    <div className="brand-grid relative flex min-h-screen w-full items-center justify-center overflow-x-hidden overflow-y-auto lg:overflow-hidden select-none">
      {/* 1024x728 Pixel-Snapped Layout Frame */}
      <div className="relative flex w-full max-w-[1024px] flex-col px-6 py-10 lg:h-[728px] lg:block lg:p-0">
        {/* Top-Left Logo with Smooth Back to Home Action */}
        <header className="z-50 lg:absolute lg:top-[25px] lg:left-[87px]">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-full transition-all duration-200 hover:bg-white/10"
            title="Back to Home"
            aria-label="Back to ByteSpace Home"
          >
            <img
              src="/assets/logo_icon_auth.png"
              alt="ByteSpace"
              className="h-[22px] w-[20px] object-contain transition-transform duration-200 group-hover:scale-110"
              draggable={false}
            />
            <span className="text-[12px] font-semibold text-white/80 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 pr-2">
              ← Back to Home
            </span>
          </Link>
        </header>

        {/* Left Side: Title & Subtitle */}
        <div className="z-10 mt-6 lg:mt-0 lg:absolute lg:top-[86px] lg:left-[87px] lg:w-[352px]">
          <h1 className="text-[18px] font-bold tracking-tight text-white">
            {title}
          </h1>
          <p className="mt-2 text-[12px] leading-[1.4] text-white/80 max-w-[340px]">
            {subtitle}
          </p>
        </div>

        {/* Left Side: Seamless 3D Graphic Artwork */}
        <div className="z-10 mt-6 lg:mt-0 lg:absolute lg:top-[216px] lg:left-[86px] lg:w-[352px] select-none pointer-events-none">
          <motion.img
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            src="/assets/auth_art_composite.png"
            alt="ByteSpace visual preview"
            className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,18,70,0.35)]"
            draggable={false}
          />
        </div>

        {/* Right Side: White Card Container (Pixel-matched X=[527,937], Y=[86,642]) */}
        <div className="z-20 mt-8 lg:mt-0 lg:absolute lg:top-[86px] lg:left-[527px] w-full max-w-[411px] lg:w-[411px] lg:h-[557px] bg-white rounded-[28px] px-[45px] pt-[45px] pb-[34px] shadow-[0_20px_60px_rgba(7,18,67,0.18)] flex flex-col justify-between">
          {children}
        </div>
      </div>
    </div>
  )
}
