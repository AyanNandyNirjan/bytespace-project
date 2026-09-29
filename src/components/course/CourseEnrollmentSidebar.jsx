import toast from 'react-hot-toast'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  BookOpen01Icon,
  Video01Icon,
  Award01Icon,
  CustomerServiceIcon
} from '@hugeicons/core-free-icons'
import CourseCreatorCard from './CourseCreatorCard'

export default function CourseEnrollmentSidebar({
  lessonCount = '112 Lessons (24 hours)',
  price = '$25',
  billingPeriod = '/lifetime',
  creator
}) {
  const previewLessons = [
    { num: '01', title: 'Introduction to Digital Assets', duration: '12 mins' },
    { num: '02', title: 'Design Principles for Impacts', duration: '21 mins' },
    { num: '03', title: 'Advanced Techniques in Digital Creation', duration: '15 mins' }
  ]

  const includedFeatures = [
    { icon: BookOpen01Icon, label: 'Learning Resources' },
    { icon: Video01Icon, label: 'Quality Lesson Videos' },
    { icon: Award01Icon, label: 'Certificate of Completion' },
    { icon: CustomerServiceIcon, label: 'Private Consultation' }
  ]

  return (
    <aside className="w-full rounded-[28px] border border-gray-200/90 bg-white p-6 sm:p-7 shadow-[0_16px_40px_rgba(7,18,67,0.08)]">
      {/* Lessons Heading */}
      <h3 className="text-lg font-extrabold tracking-[-0.03em] text-ink sm:text-xl">
        {lessonCount}
      </h3>

      {/* Lesson Previews List */}
      <div className="mt-5 space-y-3.5 text-xs sm:text-sm">
        {previewLessons.map(item => (
          <div key={item.num} className="grid grid-cols-[24px_1fr_auto] items-center gap-2">
            <span className="font-semibold text-gray-500">{item.num}</span>
            <span className="font-medium text-ink leading-snug">{item.title}</span>
            <span className="font-semibold text-brand">{item.duration}</span>
          </div>
        ))}
        <p className="pt-1 text-xs text-muted">99 more videos</p>
      </div>

      {/* Dive-in Prompt */}
      <p className="mt-6 text-xs leading-relaxed text-muted sm:text-[13px]">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      {/* Price */}
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-3xl font-extrabold text-brand sm:text-4xl">{price}</span>
        <span className="text-xs text-muted">{billingPeriod}</span>
      </div>

      {/* Enroll Button */}
      <button
        type="button"
        onClick={() => toast.success('Enrolled successfully! Enjoy the course.')}
        className="mt-4 w-full rounded-full bg-lime py-3 text-center text-sm font-bold text-black transition-all hover:brightness-105 active:scale-98 shadow-sm"
      >
        Enroll Now
      </button>

      {/* Features Included */}
      <h4 className="mt-7 text-sm font-extrabold text-ink sm:text-base">
        This course include
      </h4>
      <ul className="mt-4 space-y-3 text-xs sm:text-sm text-[#4B5563]">
        {includedFeatures.map(feat => (
          <li key={feat.label} className="flex items-center gap-3">
            <HugeiconsIcon icon={feat.icon} size={18} className="text-brand shrink-0" />
            <span>{feat.label}</span>
          </li>
        ))}
      </ul>

      {/* Creator Profile Card */}
      <CourseCreatorCard {...creator} />
    </aside>
  )
}
