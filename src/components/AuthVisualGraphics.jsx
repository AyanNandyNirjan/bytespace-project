import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const springHover = { type: 'spring', stiffness: 450, damping: 26, mass: 0.6 }

export default function AuthVisualGraphics() {
  const navigate = useNavigate()

  return (
    <div className="relative h-[420px] w-[460px] select-none">
      {/* ========================================================
          1. 3D SHAPE: Lime Torus (Ring / Donut)
          Top-left corner, overlapping back card and edge of front card
          Figma coordinate: (121px, 240px) -> in graphics box: (34px, 23px)
          ======================================================== */}
      <motion.div
        animate={{
          y: [0, -5, 0],
          rotate: [0, 4, 0]
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        whileHover={{
          scale: 1.12,
          rotate: -8,
          transition: springHover
        }}
        className="absolute left-[34px] top-[23px] z-[25] h-[76px] w-[76px] cursor-pointer"
        onClick={() => toast('3D Geometric Element: Lime Torus', { icon: '🍩' })}
        title="Lime Torus"
      >
        <img
          src="/assets/auth_shape_lime_torus_angled.png"
          alt="Lime Torus Ring"
          className="h-full w-full object-contain drop-shadow-[0_8px_16px_rgba(7,18,67,0.22)]"
          draggable={false}
        />
      </motion.div>

      {/* ========================================================
          2. BACK CARD: "Build Digital Asset"
          Figma coordinate: (87px, 281px) -> in graphics box: (0px, 64px)
          ======================================================== */}
      <motion.div
        animate={{
          y: [0, -3, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.6
        }}
        whileHover={{
          y: -6,
          scale: 1.025,
          zIndex: 35,
          transition: springHover
        }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          navigate('/course/build-digital-asset')
          toast.success('Opening Build Digital Asset course')
        }}
        className="absolute left-0 top-[64px] z-[10] w-[264px] cursor-pointer rounded-[28px] shadow-[0_16px_36px_rgba(7,18,67,0.20)] transition-shadow duration-200 hover:shadow-[0_22px_48px_rgba(7,18,67,0.32)]"
        title="Click to view Build Digital Asset course"
      >
        <img
          src="/assets/auth_card_build_digital_asset.png"
          alt="Build Digital Asset Card"
          className="h-auto w-full rounded-[28px] object-contain"
          draggable={false}
        />
      </motion.div>

      {/* ========================================================
          3. 3D SHAPE: White Zigzag (Spring / Ribbon)
          Right side between cards and form
          Figma coordinate: (322px, 402px) -> in graphics box: (235px, 185px)
          ======================================================== */}
      <motion.div
        animate={{
          y: [0, -4, 0],
          rotate: [0, -2, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.2
        }}
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: springHover
        }}
        className="absolute left-[235px] top-[185px] z-[15] h-[115px] w-[110px] cursor-pointer"
        onClick={() => toast('3D Geometric Element: White Spring', { icon: '🌀' })}
        title="White Spring"
      >
        <img
          src="/assets/auth_shape_white_zigzag_clean.png"
          alt="White Zigzag Coil"
          className="h-full w-full object-contain drop-shadow-[0_10px_20px_rgba(7,18,67,0.24)]"
          draggable={false}
        />
      </motion.div>

      {/* ========================================================
          4. FRONT CARD: "the Power of Big Data"
          Figma coordinate: (166px, 217px) -> in graphics box: (79px, 0px)
          ======================================================== */}
      <motion.div
        animate={{
          y: [0, -4, 0]
        }}
        transition={{
          duration: 5.8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        whileHover={{
          y: -7,
          scale: 1.03,
          zIndex: 35,
          transition: springHover
        }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          navigate('/courses')
          toast.success('Viewing the Power of Big Data course')
        }}
        className="absolute left-[79px] top-0 z-[20] w-[264px] cursor-pointer rounded-[28px] shadow-[0_20px_44px_rgba(7,18,67,0.26)] transition-shadow duration-200 hover:shadow-[0_26px_56px_rgba(7,18,67,0.38)]"
        title="Click to view the Power of Big Data course"
      >
        <img
          src="/assets/auth_card_power_big_data.png"
          alt="the Power of Big Data Card"
          className="h-auto w-full rounded-[28px] object-contain"
          draggable={false}
        />
      </motion.div>

      {/* ========================================================
          5. 3D SHAPE: Lime Pyramid (Tetrahedron)
          Bottom-left corner
          Figma coordinate: (84px, 517px) -> in graphics box: (-3px, 300px)
          ======================================================== */}
      <motion.div
        animate={{
          y: [0, -5, 0],
          rotate: [0, -4, 0]
        }}
        transition={{
          duration: 5.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.8
        }}
        whileHover={{
          scale: 1.12,
          rotate: 8,
          transition: springHover
        }}
        className="absolute -left-[3px] top-[300px] z-[25] h-[95px] w-[85px] cursor-pointer"
        onClick={() => toast('3D Geometric Element: Lime Pyramid', { icon: '📐' })}
        title="Lime Pyramid"
      >
        <img
          src="/assets/auth_shape_lime_pyramid_clean.png"
          alt="Lime Pyramid"
          className="h-full w-full object-contain drop-shadow-[0_12px_24px_rgba(7,18,67,0.26)]"
          draggable={false}
        />
      </motion.div>

      {/* ========================================================
          6. BOTTOM CARD: "Happy Students"
          Bright Lime Green Rating Card
          Figma coordinate: (247px, 526px) -> in graphics box: (160px, 309px)
          ======================================================== */}
      <motion.div
        animate={{
          y: [0, -3.5, 0]
        }}
        transition={{
          duration: 5.4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.4
        }}
        whileHover={{
          y: -6,
          scale: 1.05,
          zIndex: 40,
          transition: springHover
        }}
        whileTap={{ scale: 0.98 }}
        onClick={() => toast('Over 2,000+ happy students rated 4.5/5 stars! ⭐', { icon: '🎉' })}
        className="absolute left-[160px] top-[309px] z-[30] w-[184px] cursor-pointer rounded-[20px] shadow-[0_16px_34px_rgba(7,18,67,0.25)] transition-shadow duration-200 hover:shadow-[0_20px_42px_rgba(7,18,67,0.35)]"
        title="Over 2,000+ Happy Students"
      >
        <img
          src="/assets/auth_card_happy_students.png"
          alt="Happy Students Card"
          className="h-auto w-full rounded-[20px] object-contain"
          draggable={false}
        />
      </motion.div>
    </div>
  )
}
