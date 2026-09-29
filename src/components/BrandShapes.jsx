import { motion } from 'framer-motion'

export default function BrandShapes() {
  return (
    <>
      <motion.div animate={{ rotate: [0, 7, -5, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute left-[2%] top-[30%] h-16 w-16 rounded-full border-[16px] border-white/95 opacity-95 sm:h-24 sm:w-24 sm:border-[22px]" />
      <motion.div animate={{ y: [0,-8,0] }} transition={{ duration: 3.8, repeat: Infinity }} className="absolute right-[3%] top-[21%] h-16 w-16 rotate-12 rounded-[16px] bg-lime sm:h-24 sm:w-24" />
      <motion.div animate={{ rotate: [22, 38, 22] }} transition={{ duration: 5.4, repeat: Infinity }} className="absolute left-[8%] bottom-[15%] h-12 w-12 rotate-[22deg] bg-lime [clip-path:polygon(50%_0,100%_100%,0_100%)] sm:h-20 sm:w-20" />
      <div className="absolute right-[8%] bottom-[17%] h-20 w-8 rotate-45 rounded-full border-[9px] border-white sm:h-28 sm:w-10" />
    </>
  )
}
