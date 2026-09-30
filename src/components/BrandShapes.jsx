import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

const springHover = { type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }

export default function BrandShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden select-none">
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
        {/* 1. Top-Left: Lime 3D Spring / Coil */}
        <motion.div
          initial={{ opacity: 0, x: -25, y: -20 }}
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
          className="transform-gpu pointer-events-auto absolute -left-1 top-0 w-[16%] max-w-[160px] min-w-[65px] cursor-pointer drop-shadow-[0_16px_28px_rgba(0,0,0,0.22)]"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.94 }}
            transition={springHover}
            onClick={() => toast('Empower your teaching journey 🚀', { icon: '✨' })}
            className="transform-gpu will-change-transform"
          >
            <img
              src="/assets/cta_shape_1_lime_coil.png"
              srcSet="/assets/cta_shape_1_lime_coil@2x.png 2x"
              alt="3D Lime Coil"
              className="h-auto w-full object-contain select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>

        {/* 2. Mid-Left: White 3D Zigzag */}
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
          className="transform-gpu pointer-events-auto absolute left-[13%] sm:left-[14%] lg:left-[15%] top-[7%] sm:top-[6%] w-[8%] max-w-[85px] min-w-[36px] cursor-pointer drop-shadow-[0_12px_20px_rgba(0,0,0,0.18)]"
        >
          <motion.div
            whileHover={{ scale: 1.14 }}
            whileTap={{ scale: 0.94 }}
            transition={springHover}
            onClick={() => toast('Step up to global reach ⚡', { icon: '📈' })}
            className="transform-gpu will-change-transform"
          >
            <img
              src="/assets/cta_shape_2_white_zigzag.png"
              srcSet="/assets/cta_shape_2_white_zigzag@2x.png 2x"
              alt="3D White Zigzag"
              className="h-auto w-full object-contain select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>

        {/* 3. Bottom-Left: White 3D Cone */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: 15 }}
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
          className="transform-gpu pointer-events-auto absolute -left-1 sm:left-0 top-[48%] sm:top-[47%] w-[8.5%] max-w-[98px] min-w-[40px] cursor-pointer drop-shadow-[0_14px_24px_rgba(0,0,0,0.20)]"
        >
          <motion.div
            whileHover={{ scale: 1.14 }}
            whileTap={{ scale: 0.94 }}
            transition={springHover}
            onClick={() => toast('Aim high with your courses 📐', { icon: '🎯' })}
            className="transform-gpu will-change-transform"
          >
            <img
              src="/assets/cta_shape_3_white_cone.png"
              srcSet="/assets/cta_shape_3_white_cone@2x.png 2x"
              alt="3D White Cone"
              className="h-auto w-full object-contain select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>

        {/* 4. Bottom-Left: Lime 3D Torus */}
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
          className="transform-gpu pointer-events-auto absolute left-[3%] sm:left-[3.5%] lg:left-[4%] bottom-[-2%] sm:bottom-[-1%] lg:bottom-0 w-[17%] max-w-[180px] min-w-[78px] cursor-pointer drop-shadow-[0_18px_32px_rgba(0,0,0,0.22)]"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.94 }}
            transition={springHover}
            onClick={() => toast('Complete creator ecosystem ⭕', { icon: '🌐' })}
            className="transform-gpu will-change-transform"
          >
            <img
              src="/assets/cta_shape_4_lime_torus.png"
              srcSet="/assets/cta_shape_4_lime_torus@2x.png 2x"
              alt="3D Lime Torus"
              className="h-auto w-full object-contain select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>

        {/* 5. Top-Right: Lime 3D Pyramid */}
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
          className="transform-gpu pointer-events-auto absolute right-[21%] sm:right-[22%] lg:right-[23%] top-[4%] sm:top-[3%] w-[9%] max-w-[95px] min-w-[40px] cursor-pointer drop-shadow-[0_14px_24px_rgba(0,0,0,0.20)]"
        >
          <motion.div
            whileHover={{ scale: 1.14 }}
            whileTap={{ scale: 0.94 }}
            transition={springHover}
            onClick={() => toast('Reach peak potential 🔺', { icon: '🚀' })}
            className="transform-gpu will-change-transform"
          >
            <img
              src="/assets/cta_shape_5_lime_pyramid.png"
              srcSet="/assets/cta_shape_5_lime_pyramid@2x.png 2x"
              alt="3D Lime Pyramid"
              className="h-auto w-full object-contain select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>

        {/* 6. Far-Right: White 3D Cylinder */}
        <motion.div
          initial={{ opacity: 0, x: 25, y: -15 }}
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
          className="transform-gpu pointer-events-auto absolute -right-2 sm:-right-1 lg:right-0 top-[6%] sm:top-[7%] w-[15%] max-w-[165px] min-w-[68px] cursor-pointer drop-shadow-[0_16px_28px_rgba(0,0,0,0.22)]"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.94 }}
            transition={springHover}
            onClick={() => toast('Solid foundation for your knowledge 🟢', { icon: '💡' })}
            className="transform-gpu will-change-transform"
          >
            <img
              src="/assets/cta_shape_6_white_cylinder.png"
              srcSet="/assets/cta_shape_6_white_cylinder@2x.png 2x"
              alt="3D White Cylinder"
              className="h-auto w-full object-contain select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>

        {/* 7. Bottom-Right: Lime 3D Spring */}
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
          className="transform-gpu pointer-events-auto absolute right-[4%] sm:right-[5%] lg:right-[6%] bottom-[-2%] sm:bottom-[-1%] lg:bottom-0 w-[13.5%] max-w-[145px] min-w-[62px] cursor-pointer drop-shadow-[0_16px_28px_rgba(0,0,0,0.20)]"
        >
          <motion.div
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.94 }}
            transition={springHover}
            onClick={() => toast('Continuous growth & monetization 〰️', { icon: '💰' })}
            className="transform-gpu will-change-transform"
          >
            <img
              src="/assets/cta_shape_7_lime_spring.png"
              srcSet="/assets/cta_shape_7_lime_spring@2x.png 2x"
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
