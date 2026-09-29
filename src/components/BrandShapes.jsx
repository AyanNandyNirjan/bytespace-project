import { motion } from 'framer-motion'

export default function BrandShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {/* Left 3D Shapes */}
      {/* Lime Squiggle (Far Left) */}
      <motion.img
        animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        src="/assets/hero_shape_lime_squiggle.png"
        alt=""
        className="absolute -left-6 top-8 h-28 w-28 object-contain sm:left-4 sm:top-6 sm:h-36 sm:w-36 lg:left-8 lg:h-44 lg:w-44"
        draggable={false}
      />

      {/* White Zigzag (Middle Left) */}
      <motion.img
        animate={{ y: [0, 6, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        src="/assets/hero_shape_white_squiggle.png"
        alt=""
        className="absolute left-16 top-16 h-16 w-16 object-contain sm:left-32 sm:top-12 sm:h-20 sm:w-20 lg:left-40 lg:h-24 lg:w-24"
        draggable={false}
      />

      {/* Lime Torus Ring (Bottom Left) */}
      <motion.img
        animate={{ y: [0, -6, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        src="/assets/hero_shape_white_ring.png"
        alt=""
        className="absolute -bottom-10 left-6 h-28 w-28 object-contain sm:bottom-0 sm:left-14 sm:h-36 sm:w-36 lg:left-24 lg:h-40 lg:w-40"
        style={{ filter: 'hue-rotate(75deg) saturate(3.5) brightness(1.15)' }}
        draggable={false}
      />

      {/* Right 3D Shapes */}
      {/* Lime Pyramid (Top Right) */}
      <motion.img
        animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}
        src="/assets/hero_shape_white_triangle.png"
        alt=""
        className="absolute right-24 top-6 h-20 w-20 object-contain sm:right-40 sm:top-8 sm:h-28 sm:w-28 lg:right-56 lg:h-32 lg:w-32"
        style={{ filter: 'hue-rotate(75deg) saturate(3.5) brightness(1.2)' }}
        draggable={false}
      />

      {/* White Cone / Cylinder (Far Right) */}
      <motion.img
        animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
        src="/assets/hero_shape_lime_cylinder.png"
        alt=""
        className="absolute -right-8 -top-6 h-32 w-32 object-contain sm:right-4 sm:top-0 sm:h-44 sm:w-44 lg:right-10 lg:h-52 lg:w-52"
        draggable={false}
      />

      {/* Lime Squiggle (Bottom Right) */}
      <motion.img
        animate={{ y: [0, 6, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        src="/assets/hero_shape_lime_squiggle.png"
        alt=""
        className="absolute -bottom-10 right-8 h-28 w-28 object-contain sm:bottom-0 sm:right-20 sm:h-36 sm:w-36 lg:right-28 lg:h-40 lg:w-40"
        draggable={false}
      />
    </div>
  )
}
