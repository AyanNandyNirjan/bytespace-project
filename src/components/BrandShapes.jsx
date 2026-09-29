export default function BrandShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {/* Left 3D Shapes */}
      {/* Lime Squiggle (Far Left) */}
      <div className="animate-float-1 absolute -left-6 top-8 h-28 w-28 sm:left-4 sm:top-6 sm:h-36 sm:w-36 lg:left-8 lg:h-44 lg:w-44">
        <img
          src="/assets/hero_shape_lime_squiggle.png"
          alt=""
          className="h-full w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)]"
          draggable={false}
        />
      </div>

      {/* White Zigzag (Middle Left) */}
      <div className="animate-float-2 absolute left-16 top-16 h-16 w-16 sm:left-32 sm:top-12 sm:h-20 sm:w-20 lg:left-40 lg:h-24 lg:w-24">
        <img
          src="/assets/hero_shape_white_squiggle.png"
          alt=""
          className="h-full w-full object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.20)]"
          draggable={false}
        />
      </div>

      {/* Lime Torus Ring (Bottom Left) */}
      <div className="animate-float-3 absolute -bottom-10 left-6 h-28 w-28 sm:bottom-0 sm:left-14 sm:h-36 sm:w-36 lg:left-24 lg:h-40 lg:w-40">
        <img
          src="/assets/hero_shape_white_ring.png"
          alt=""
          className="h-full w-full object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.25)]"
          style={{ filter: 'hue-rotate(75deg) saturate(3.5) brightness(1.15)' }}
          draggable={false}
        />
      </div>

      {/* Right 3D Shapes */}
      {/* Lime Pyramid (Top Right) */}
      <div className="animate-float-4 absolute right-24 top-6 h-20 w-20 sm:right-40 sm:top-8 sm:h-28 sm:w-28 lg:right-56 lg:h-32 lg:w-32">
        <img
          src="/assets/hero_shape_white_triangle.png"
          alt=""
          className="h-full w-full object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.20)]"
          style={{ filter: 'hue-rotate(75deg) saturate(3.5) brightness(1.2)' }}
          draggable={false}
        />
      </div>

      {/* White Cone / Cylinder (Far Right) */}
      <div className="animate-float-5 absolute -right-8 -top-6 h-32 w-32 sm:right-4 sm:top-0 sm:h-44 sm:w-44 lg:right-10 lg:h-52 lg:w-52">
        <img
          src="/assets/hero_shape_lime_cylinder.png"
          alt=""
          className="h-full w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)]"
          draggable={false}
        />
      </div>

      {/* Lime Squiggle (Bottom Right) */}
      <div className="animate-float-6 absolute -bottom-10 right-8 h-28 w-28 sm:bottom-0 sm:right-20 sm:h-36 sm:w-36 lg:right-28 lg:h-40 lg:w-40">
        <img
          src="/assets/hero_shape_lime_squiggle.png"
          alt=""
          className="h-full w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)]"
          draggable={false}
        />
      </div>
    </div>
  )
}
