import { HugeiconsIcon } from '@hugeicons/react'
import { Video01Icon } from '@hugeicons/core-free-icons'

export default function LessonRow({ module, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lime text-black shadow-sm">
        <HugeiconsIcon icon={Video01Icon} size={22} />
      </div>
      <div>
        <h4 className="text-sm font-bold text-ink sm:text-base">
          {module}
        </h4>
        <p className="mt-1 text-xs leading-relaxed text-[#5F6570] sm:text-sm sm:leading-6">
          {desc}
        </p>
      </div>
    </div>
  )
}
