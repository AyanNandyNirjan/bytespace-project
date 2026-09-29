import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

export default function Hero3DShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
      {/* 1. Top-Left: Lime 3D Coil */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: -20 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -14, 0],
          rotate: [0, 4, -3, 0]
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.1 },
          x: { duration: 0.8, delay: 0.1 },
          y: { duration: 5.2, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
        }}
        whileHover={{ scale: 1.1 }}
        onClick={() => toast('Creativity in motion ✨', { icon: '🌀' })}
        className="pointer-events-auto absolute left-0 top-[26%] w-[15%] max-w-[115px] min-w-[55px] cursor-pointer drop-shadow-[0_14px_24px_rgba(0,0,0,0.22)]"
      >
        <img
          src="/assets/shape_lime_coil_2x.png"
          alt="3D Lime Coil"
          className="h-auto w-full object-contain select-none"
          draggable={false}
        />
      </motion.div>

      {/* 2. Mid-Left: White 3D Zigzag */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, 10, 0],
          rotate: [-12, -7, -15, -12]
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.2 },
          scale: { duration: 0.8, delay: 0.2 },
          y: { duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
          rotate: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }
        }}
        whileHover={{ scale: 1.15 }}
        onClick={() => toast('Step up your skills!', { icon: '⚡' })}
        className="pointer-events-auto absolute left-[12%] sm:left-[14%] top-[46%] sm:top-[48%] w-[9%] max-w-[70px] min-w-[36px] cursor-pointer drop-shadow-[0_12px_20px_rgba(0,0,0,0.18)]"
      >
        <img
          src="/assets/shape_white_zigzag_2x.png"
          alt="3D White Zigzag"
          className="h-auto w-full object-contain select-none"
          draggable={false}
        />
      </motion.div>

      {/* 3. Bottom-Left: White 3D Torus Ring */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -15 }}
        animate={{
          opacity: 1,
          y: [0, -12, 0],
          rotate: [0, 6, -4, 0]
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.3 },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
          rotate: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }
        }}
        whileHover={{ scale: 1.1, rotate: 12 }}
        onClick={() => toast('Complete 360° learning cycle', { icon: '⭕' })}
        className="pointer-events-auto absolute left-[2%] sm:left-[4%] bottom-[10%] sm:bottom-[13%] w-[17%] max-w-[130px] min-w-[68px] cursor-pointer drop-shadow-[0_18px_32px_rgba(0,0,0,0.25)]"
      >
        <img
          src="/assets/shape_white_torus_2x.png"
          alt="3D White Torus"
          className="h-auto w-full object-contain select-none"
          draggable={false}
        />
      </motion.div>

      {/* 4. Top-Right: Lime 3D Cylinder */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -20 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -14, 0],
          rotate: [12, 17, 8, 12]
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.15 },
          x: { duration: 0.8, delay: 0.15 },
          y: { duration: 5.6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
          rotate: { duration: 6.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }
        }}
        whileHover={{ scale: 1.1 }}
        onClick={() => toast('Solid foundations for career growth', { icon: '🟢' })}
        className="pointer-events-auto absolute right-0 top-[26%] w-[12%] max-w-[95px] min-w-[50px] cursor-pointer drop-shadow-[0_16px_28px_rgba(0,0,0,0.22)]"
      >
        <img
          src="/assets/shape_lime_cylinder_2x.png"
          alt="3D Lime Cylinder"
          className="h-auto w-full object-contain select-none"
          draggable={false}
        />
      </motion.div>

      {/* 5. Mid-Right: White 3D Pyramid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, 10, 0],
          rotate: [0, -5, 5, 0]
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.25 },
          scale: { duration: 0.8, delay: 0.25 },
          y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
          rotate: { duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
        }}
        whileHover={{ scale: 1.15 }}
        onClick={() => toast('Reach the peak of your craft', { icon: '🔺' })}
        className="pointer-events-auto absolute right-[11%] sm:right-[13%] top-[44%] sm:top-[46%] w-[10%] max-w-[80px] min-w-[40px] cursor-pointer drop-shadow-[0_14px_24px_rgba(0,0,0,0.2)]"
      >
        <img
          src="/assets/shape_white_pyramid_2x.png"
          alt="3D White Pyramid"
          className="h-auto w-full object-contain select-none"
          draggable={false}
        />
      </motion.div>

      {/* 6. Bottom-Right: White 3D Wavy Coil */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: [0, -10, 0],
          rotate: [0, 4, -3, 0]
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.35 },
          y: { duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 0.7 },
          rotate: { duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }
        }}
        whileHover={{ scale: 1.1 }}
        onClick={() => toast('Flexible, self-paced learning', { icon: '〰️' })}
        className="pointer-events-auto absolute right-[2%] sm:right-[4%] bottom-[10%] sm:bottom-[13%] w-[14%] max-w-[105px] min-w-[58px] cursor-pointer drop-shadow-[0_16px_28px_rgba(0,0,0,0.2)]"
      >
        <img
          src="/assets/shape_white_coil_2x.png"
          alt="3D White Wavy Coil"
          className="h-auto w-full object-contain select-none"
          draggable={false}
        />
      </motion.div>
      </div>
    </div>
  )
}
