import { motion } from 'framer-motion'

const springHover = {
  type: 'spring',
  stiffness: 500,
  damping: 28,
  mass: 0.5
}

export default function GrowthVisual() {
  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-[480px] items-center justify-center select-none sm:h-[450px] lg:h-[470px]">
      {/* 1. Behind Layer: Course Card ('Learn Figma...') */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        whileHover={{
          y: -6,
          scale: 1.025,
          transition: springHover
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="transform-gpu absolute top-4 left-2 z-10 w-[220px] cursor-pointer rounded-[20px] border border-[#E5E7EB] bg-white p-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow] duration-200 hover:border-black/20 hover:shadow-[0_14px_36px_rgba(7,18,67,0.09)] sm:top-6 sm:left-4 sm:w-[245px]"
      >
        <div className="relative overflow-hidden rounded-xl">
          <img
            src="/assets/course-figma.jpg"
            alt="Learn Figma"
            className="h-[120px] w-full object-cover transition-transform duration-200 ease-out hover:scale-105 sm:h-[135px]"
            draggable={false}
          />
        </div>

        <div className="mt-3">
          <h4 className="truncate text-[13.5px] font-bold text-gray-900 sm:text-[14px]">
            Learn Figma fr...
          </h4>
          <p className="mt-0.5 text-[11px] font-medium text-[#0A43E6]">
            by purepearl studio
          </p>

          <div className="mt-2.5 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-semibold text-gray-600">
              <svg className="h-3 w-3 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 19h2v-4H4v4zm5 0h2v-8H9v8zm5 0h2V7h-2v12zm5 0h2V3h-2v16z" />
              </svg>
              Beginner
            </span>
            <img
              src="/assets/creator-avatar.jpg"
              alt="purepearl studio"
              className="h-5 w-5 rounded-full object-cover ring-1 ring-gray-200"
            />
          </div>

          <div className="mt-2 text-[14.5px] font-bold text-[#0A43E6]">
            $25<span className="text-[10.5px] font-normal text-gray-400">/lifetime</span>
          </div>
        </div>
      </motion.div>

      {/* 2. Behind Layer: Full 3D Lime Spring Floating on Right */}
      <motion.div
        className="pointer-events-auto absolute top-8 right-2 z-10 w-[110px] cursor-pointer sm:top-10 sm:right-6 sm:w-[130px]"
        animate={{
          y: [0, -10, 0],
          rotate: [-12, -7, -12]
        }}
        transition={{
          y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <motion.div
          whileHover={{
            scale: 1.12,
            rotate: 4,
            transition: springHover
          }}
          whileTap={{ scale: 0.95 }}
          className="transform-gpu will-change-transform"
        >
          <img
            src="/assets/lime_spring_complete.png"
            alt="Decorative 3D coil"
            draggable={false}
            className="transform-gpu h-auto w-full object-contain filter drop-shadow-[0_12px_24px_rgba(212,255,0,0.3)]"
          />
        </motion.div>
      </motion.div>

      {/* 3. Middle Layer: Guy with Laptop Cutout */}
      <motion.div
        whileHover={{
          scale: 1.015,
          y: -2,
          transition: springHover
        }}
        className="transform-gpu relative z-20 translate-x-4 translate-y-3 cursor-pointer sm:translate-x-8 sm:translate-y-5"
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          src="/assets/guy_laptop_cutout.png"
          alt="Student with laptop"
          draggable={false}
          className="w-[290px] object-contain sm:w-[350px] lg:w-[380px]"
        />
      </motion.div>

      {/* 4. Foreground Layer: Floating 'Learning Progress 55%' Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{
          y: -6,
          scale: 1.03,
          transition: springHover
        }}
        transition={{ duration: 0.35, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="transform-gpu absolute right-1 bottom-14 z-30 min-w-[165px] cursor-pointer rounded-[20px] border border-[#E5E7EB] bg-white p-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow] duration-200 hover:border-black/20 hover:shadow-[0_14px_36px_rgba(7,18,67,0.09)] sm:right-4 sm:bottom-18 sm:min-w-[185px] sm:p-4"
      >
        <p className="text-[11px] font-medium text-gray-500 sm:text-[11.5px]">
          Learning Progress
        </p>
        <p className="mt-1 text-[26px] font-black leading-none text-gray-900 sm:text-[28px]">
          55%
        </p>
        <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '55%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-full bg-[#D4FF00]"
          />
        </div>
      </motion.div>
    </div>
  )
}
