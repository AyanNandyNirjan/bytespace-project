import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthVisualGraphics from './AuthVisualGraphics'

export default function AuthLayout({
  title,
  subtitle,
  children
}) {
  const calculateScale = () => {
    if (typeof window === 'undefined') return 1
    const w = window.innerWidth
    const h = window.innerHeight
    if (w >= 1024) {
      // Dynamic proportional scale allowing comfortable expansion on desktop & laptop screens
      // At 1920x1080 (or innerHeight ~940-1080px), scales up to 1.25x (~25% bigger)
      const scaleW = (w - 48) / 1024
      const scaleH = (h - 36) / 728
      const target = Math.min(scaleW, scaleH, 1.25)
      return Math.max(0.92, target)
    }
    return 1
  }

  const [scale, setScale] = useState(calculateScale)

  useEffect(() => {
    const handleResize = () => {
      setScale(calculateScale())
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="brand-grid relative flex min-h-screen w-full items-center justify-center overflow-x-hidden overflow-y-auto py-6 sm:py-8 lg:py-4 select-none">
      {/* ========================================================
          DESKTOP CANVAS: 1024x728 Pixel-Matched Figma Coordinate Space
          Dynamically scaled up by ~25% on desktop displays
          ======================================================== */}
      <div
        className="relative hidden w-full lg:block"
        style={{
          width: `${Math.floor(1024 * scale)}px`,
          height: `${Math.floor(728 * scale)}px`
        }}
      >
        <div
          className="absolute left-1/2 top-0 h-[728px] w-[1024px]"
          style={{
            transform: `translateX(-50%) scale(${scale})`,
            transformOrigin: 'top center'
          }}
        >
          {/* 1. Top-Left Logo with Return to Home */}
          <header className="absolute left-[87px] top-[25px] z-50">
            <Link
              to="/"
              className="group inline-flex items-center gap-2.5 rounded-full transition-all duration-200"
              title="Return to Home"
              aria-label="ByteSpace Home"
            >
              <img
                src="/assets/logo_icon_auth.png"
                alt="ByteSpace"
                className="h-[22px] w-[20px] object-contain transition-transform duration-200 group-hover:scale-110"
                draggable={false}
              />
              <span className="text-[12px] font-medium text-white/80 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                ← Home
              </span>
            </Link>
          </header>

          {/* 2. Left Side: Title & Subtitle (Left: 88px, Top: 90px) */}
          <div className="absolute left-[88px] top-[90px] z-10 w-[352px]">
            <h1 className="text-[18px] font-bold tracking-tight text-white leading-tight">
              {title}
            </h1>
            <p className="mt-2 text-[12px] leading-[1.5] text-white/80 max-w-[340px]">
              {subtitle}
            </p>
          </div>

          {/* 3. Left Side: Individual 3D Graphic Components (Left: 87px, Top: 217px) */}
          <div className="absolute left-[87px] top-[217px] z-20">
            <AuthVisualGraphics />
          </div>

          {/* 4. Right Side: White Card Form (X=527px, Y=86px, W=411px, H=557px) */}
          <div className="absolute left-[527px] top-[86px] z-30 h-[557px] w-[411px] rounded-[28px] bg-white px-[45px] pt-[47px] pb-[34px] shadow-[0_20px_60px_rgba(7,18,67,0.18)] flex flex-col justify-between">
            {children}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE & TABLET RESPONSIVE FALLBACK (< 1024px)
          ======================================================== */}
      <div className="relative flex w-full max-w-[480px] sm:max-w-[540px] flex-col px-5 py-6 sm:py-8 lg:hidden">
        {/* Top-Left Logo */}
        <header className="mb-6 flex items-center justify-between">
          <Link to="/" className="group inline-flex items-center gap-2">
            <img
              src="/assets/logo_icon_auth.png"
              alt="ByteSpace"
              className="h-[22px] w-[20px] object-contain transition-transform duration-200 group-hover:scale-110"
              draggable={false}
            />
            <span className="text-[13px] font-medium text-white/90">← Home</span>
          </Link>
        </header>

        {/* Title & Subtitle */}
        <div className="mb-6">
          <h1 className="text-[22px] sm:text-[26px] font-bold text-white">{title}</h1>
          <p className="mt-1 text-[13px] sm:text-[14px] text-white/80">{subtitle}</p>
        </div>

        {/* Scaled Preview Graphics */}
        <div className="mb-6 flex justify-center overflow-hidden py-2 scale-[0.78] sm:scale-[0.88] origin-top">
          <AuthVisualGraphics />
        </div>

        {/* Mobile / Tablet White Card */}
        <div className="w-full rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-9 shadow-xl">
          {children}
        </div>
      </div>
    </div>
  )
}
