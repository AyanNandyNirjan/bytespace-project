import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

const springHover = { type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }

export default function BrandShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden select-none">
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
        {/* 1. Top-Left: Lime 3D Spring / Coil (100% COMPLETE UNROUNDED SHAPE) */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: -15 }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
            rotate: [0, 3, -2, 0]
          }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.35, delay: 0.04, ease: [0.16, 1, 0.3, 1] },
            x: { duration: 0.35, delay: 0.04, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 5.2, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="transform-gpu pointer-events-auto absolute left-[2%] sm:left-[3%] top-[4%] sm:top-[5%] w-[13%] max-w-[140px] min-w-[65px] cursor-pointer drop-shadow-[0_16px_28px_rgba(0,0,0,0.22)]"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 6 }}
            whileTap={{ scale: 0.94 }}
            transition={springHover}
            onClick={() => toast('Empower your teaching journey 🚀', { icon: '✨' })}
            className="transform-gpu will-change-transform"
          >
            <img
              src="/assets/creator_cta_shape_1_lime_coil.png"
              alt="3D Lime Coil"
              className="h-auto w-full object-contain select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>

        {/* 2. Mid-Left: White 3D Zigzag (100% COMPLETE UNROUNDED SHAPE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: [0, 8, 0],
            rotate: [0, -5, 3, 0]
          }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.35, delay: 0.08, ease: [0.16, 1, 0.3, 1] },
            scale: { duration: 0.35, delay: 0.08, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
            rotate: { duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }
          }}
          className="transform-gpu pointer-events-auto absolute left-[13%] sm:left-[14%] lg:left-[15%] top-[10%] sm:top-[9%] w-[7.5%] max-w-[80px] min-w-[36px] cursor-pointer drop-shadow-[0_12px_20px_rgba(0,0,0,0.18)]"
        >
          <motion.div
            whileHover={{ scale: 1.14, rotate: -8 }}
            whileTap={{ scale: 0.94 }}
            transition={springHover}
            onClick={() => toast('Step up to global reach ⚡', { icon: '📈' })}
            className="transform-gpu will-change-transform"
          >
            <img
              src="/assets/creator_cta_shape_2_white_zigzag.png"
              alt="3D White Zigzag"
              className="h-auto w-full object-contain select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>

        {/* 3. Bottom-Left: White 3D Cone / Pyramid (100% COMPLETE UNROUNDED SHAPE) */}
        <motion.div
          initial={{ opacity: 0, x: -15, y: 15 }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: [0, -8, 0],
            rotate: [0, 3, -2, 0]
          }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.35, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
            x: { duration: 0.35, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 5.0, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
            rotate: { duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }
          }}
          className="transform-gpu pointer-events-auto absolute left-[2.5%] sm:left-[3.5%] top-[45%] sm:top-[43%] w-[7.5%] max-w-[85px] min-w-[38px] cursor-pointer drop-shadow-[0_14px_24px_rgba(0,0,0,0.20)]"
        >
          <motion.div
            whileHover={{ scale: 1.14, rotate: 6 }}
            whileTap={{ scale: 0.94 }}
            transition={springHover}
            onClick={() => toast('Aim high with your courses 📐', { icon: '🎯' })}
            className="transform-gpu will-change-transform"
          >
            <img
              src="/assets/creator_cta_shape_3_white_cone.png"
              alt="3D White Cone"
              className="h-auto w-full object-contain select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>

        {/* 4. Bottom-Left: Lime 3D Torus (100% COMPLETE UNROUNDED SHAPE) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: [0, -7, 0],
            rotate: [0, 4, -3, 0]
          }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.35, delay: 0.12, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 5.6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
            rotate: { duration: 6.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }
          }}
          className="transform-gpu pointer-events-auto absolute left-[3.5%] sm:left-[4.5%] bottom-[4%] sm:bottom-[5%] w-[14%] max-w-[155px] min-w-[70px] cursor-pointer drop-shadow-[0_18px_32px_rgba(0,0,0,0.22)]"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: -10 }}
            whileTap={{ scale: 0.94 }}
            transition={springHover}
            onClick={() => toast('Complete creator ecosystem ⭕', { icon: '🌐' })}
            className="transform-gpu will-change-transform"
          >
            <img
              src="/assets/creator_cta_shape_4_lime_torus.png"
              alt="3D Lime Torus"
              className="h-auto w-full object-contain select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>

        {/* 5. Top-Right: Lime 3D Pyramid (100% COMPLETE UNROUNDED SHAPE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: [0, 8, 0],
            rotate: [0, -4, 3, 0]
          }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.35, delay: 0.06, ease: [0.16, 1, 0.3, 1] },
            scale: { duration: 0.35, delay: 0.06, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.15 },
            rotate: { duration: 5.6, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }
          }}
          className="transform-gpu pointer-events-auto absolute right-[19%] sm:right-[20%] lg:right-[21%] top-[6%] sm:top-[5%] w-[8%] max-w-[85px] min-w-[38px] cursor-pointer drop-shadow-[0_14px_24px_rgba(0,0,0,0.20)]"
        >
          <motion.div
            whileHover={{ scale: 1.14, rotate: 8 }}
            whileTap={{ scale: 0.94 }}
            transition={springHover}
            onClick={() => toast('Reach peak potential 🔺', { icon: '🚀' })}
            className="transform-gpu will-change-transform"
          >
            <img
              src="/assets/creator_cta_shape_5_lime_pyramid.png"
              alt="3D Lime Pyramid"
              className="h-auto w-full object-contain select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>

        {/* 6. Far-Right: White 3D Cylinder (100% COMPLETE UNROUNDED SHAPE) */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: -15 }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: [0, -9, 0],
            rotate: [0, -3, 2, 0]
          }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.35, delay: 0.08, ease: [0.16, 1, 0.3, 1] },
            x: { duration: 0.35, delay: 0.08, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 0.25 },
            rotate: { duration: 6.0, repeat: Infinity, ease: 'easeInOut', delay: 0.25 }
          }}
          className="transform-gpu pointer-events-auto absolute right-[2%] sm:right-[3%] top-[8%] sm:top-[9%] w-[12%] max-w-[135px] min-w-[60px] cursor-pointer drop-shadow-[0_16px_28px_rgba(0,0,0,0.22)]"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: -6 }}
            whileTap={{ scale: 0.94 }}
            transition={springHover}
            onClick={() => toast('Solid foundation for your knowledge 🟢', { icon: '💡' })}
            className="transform-gpu will-change-transform"
          >
            <img
              src="/assets/cta_shape_white_cylinder.png"
              alt="3D White Cylinder"
              className="h-auto w-full object-contain select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>

        {/* 7. Bottom-Right: Lime 3D Spring (100% COMPLETE UNROUNDED SHAPE) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: [0, -8, 0],
            rotate: [0, 3, -2, 0]
          }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.35, delay: 0.12, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 5.0, repeat: Infinity, ease: 'easeInOut', delay: 0.35 },
            rotate: { duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 0.35 }
          }}
          className="transform-gpu pointer-events-auto absolute right-[3%] sm:right-[4%] bottom-[4%] sm:bottom-[5%] w-[12%] max-w-[130px] min-w-[58px] cursor-pointer drop-shadow-[0_16px_28px_rgba(0,0,0,0.20)]"
        >
          <motion.div
            whileHover={{ scale: 1.12, rotate: 8 }}
            whileTap={{ scale: 0.94 }}
            transition={springHover}
            onClick={() => toast('Continuous growth & monetization 〰️', { icon: '💰' })}
            className="transform-gpu will-change-transform"
          >
            <img
              src="/assets/lime_spring_complete.png"
              alt="3D Lime Spring"
              className="h-auto w-full object-contain select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
