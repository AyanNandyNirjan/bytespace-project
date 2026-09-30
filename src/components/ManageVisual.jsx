import { motion } from 'framer-motion'

const springHover = {
  type: 'spring',
  stiffness: 500,
  damping: 28,
  mass: 0.5
}

export default function ManageVisual() {
  return (
    <div className="relative mx-auto flex h-[430px] w-full max-w-[480px] items-center justify-center select-none sm:h-[460px] lg:h-[480px]">
      {/* 1. Behind Left: Total Revenue Card */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: -10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        whileHover={{
          y: -6,
          scale: 1.03,
          transition: springHover
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="transform-gpu absolute top-8 left-2 z-10 w-[145px] cursor-pointer rounded-2xl bg-[#0A43E6] p-3.5 text-white shadow-[0_15px_35px_rgba(10,67,230,0.32)] transition-shadow duration-150 hover:shadow-[0_22px_45px_rgba(10,67,230,0.45)] sm:top-10 sm:left-4 sm:w-[160px]"
      >
        <p className="text-[11px] font-medium text-white/85">Total Revenue</p>
        <p className="text-[9px] text-white/60">July 1-28</p>
        <p className="mt-1 text-[18px] font-bold text-white sm:text-[20px]">$120.29</p>
        <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '70%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-full bg-[#D4FF00]"
          />
        </div>
      </motion.div>

      {/* 2. Behind Left Lower: Year to Date Card */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        whileHover={{
          y: -6,
          scale: 1.03,
          transition: springHover
        }}
        transition={{ duration: 0.35, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="transform-gpu absolute top-36 left-2 z-10 w-[130px] cursor-pointer rounded-2xl bg-[#0A43E6] p-3 text-white shadow-[0_15px_35px_rgba(10,67,230,0.32)] transition-shadow duration-150 hover:shadow-[0_22px_45px_rgba(10,67,230,0.45)] sm:top-40 sm:left-4 sm:w-[145px]"
      >
        <p className="text-[10px] font-medium text-white/85">Year to Date</p>
        <p className="text-[8.5px] text-white/60">2023</p>
        <p className="mt-0.5 text-[16px] font-bold text-white sm:text-[18px]">$1,200.38</p>
        <span className="mt-2 inline-flex items-center rounded-full bg-[#D4FF00] px-2 py-0.5 text-[9.5px] font-bold text-black shadow-sm">
          +12$
        </span>
      </motion.div>

      {/* 3. Behind Right: Full 3D Lime Spring Floating behind Girl */}
      <motion.div
        className="pointer-events-auto absolute top-20 right-4 z-10 w-[105px] cursor-pointer sm:top-24 sm:right-6 sm:w-[125px]"
        animate={{
          y: [0, 8, 0],
          rotate: [12, 16, 12]
        }}
        transition={{
          y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <motion.div
          whileHover={{
            scale: 1.12,
            rotate: 22,
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

      {/* 4. Middle Layer: Girl with Tablet Cutout */}
      <motion.div
        whileHover={{
          scale: 1.015,
          y: -2,
          transition: springHover
        }}
        className="transform-gpu relative z-20 translate-y-3 cursor-pointer sm:translate-y-5"
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          src="/assets/girl_tablet_cutout.png"
          alt="Course creator with tablet"
          draggable={false}
          className="w-[260px] object-contain sm:w-[310px] lg:w-[335px]"
        />
      </motion.div>

      {/* 5. Foreground Layer: Floating 'Happy Students' Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{
          y: -6,
          scale: 1.03,
          transition: springHover
        }}
        transition={{ duration: 0.35, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        className="transform-gpu absolute right-0 bottom-8 z-30 min-w-[195px] cursor-pointer rounded-[20px] border border-[#E5E7EB] bg-white p-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow] duration-200 hover:border-black/20 hover:shadow-[0_14px_36px_rgba(7,18,67,0.09)] sm:right-2 sm:bottom-10 sm:min-w-[215px]"
      >
        <div className="flex items-center justify-between">
          <p className="text-[12px] font-bold text-gray-900">Happy Students</p>
          <div className="flex items-center gap-1">
            <span className="text-[10.5px] font-bold text-gray-700">4.5</span>
            <span className="text-[9.5px] font-normal text-gray-400">(240)</span>
            <span className="text-xs text-yellow-400">★</span>
          </div>
        </div>
        <div className="mt-2.5">
          <img
            src="/assets/target_avatars_row.png"
            alt="Happy students avatars"
            className="h-6 w-auto object-contain select-none"
            draggable={false}
          />
        </div>
      </motion.div>
    </div>
  )
}
