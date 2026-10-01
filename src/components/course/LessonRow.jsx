import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { HugeiconsIcon } from '@hugeicons/react'
import { Video01Icon } from '@hugeicons/core-free-icons'

export default function LessonRow({ module, desc }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 450, damping: 28, mass: 0.5 }}
      onClick={() => toast(`Playing lesson: ${module.split(':')[1]?.trim() || module}`, { icon: '▶️' })}
      className="group -mx-3 flex cursor-pointer items-start gap-4 rounded-2xl p-3 transition-[background-color,box-shadow] duration-200 hover:bg-[#F9FAFB] hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lime text-black shadow-sm transition-transform duration-200 ease-out group-hover:scale-105 group-hover:shadow-[0_4px_12px_rgba(212,255,0,0.3)]">
        <HugeiconsIcon icon={Video01Icon} size={22} />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-bold text-ink transition-colors duration-150 group-hover:text-brand sm:text-base">
          {module}
        </h4>
        <p className="mt-1 text-xs leading-relaxed text-[#5F6570] sm:text-sm sm:leading-6">
          {desc}
        </p>
      </div>
    </motion.div>
  )
}

