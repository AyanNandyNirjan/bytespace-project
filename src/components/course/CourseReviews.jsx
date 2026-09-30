import { useState } from 'react'
import toast from 'react-hot-toast'
import RatingSummary from './RatingSummary'
import ReviewCard from './ReviewCard'

export default function CourseReviews() {
  const [activeFilter, setActiveFilter] = useState('All rating')

  const reviewsList = [
    {
      name: 'PurePearl Studio',
      role: 'UI/UX Designer',
      time: 'a year ago',
      avatar: '/assets/creator-avatar.jpg',
      text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were incredibly practical, and I'm immediately applicable to my work. Highly recommended!"
    },
    {
      name: 'Albert Flores',
      role: 'UI/UX Designer',
      time: 'a year ago',
      avatar: '/assets/student_cutout.png',
      text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!"
    },
    {
      name: 'Cody Fisher',
      role: 'UI/UX Designer',
      time: 'a year ago',
      avatar: '/assets/course-figma.jpg',
      text: "The project showcase and critique sessions created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. Added a unique and valuable dimension to the learning process."
    },
    {
      name: 'Brooklyn Simmons',
      role: 'UI/UX Designer',
      time: 'a year ago',
      avatar: '/assets/course-money.jpg',
      text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapted to the evolving digital landscape, and the engaging content kept me motivated throughout."
    }
  ]

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Heading & Subtitle */}
      <div>
        <h2 className="text-xl font-extrabold tracking-[-0.03em] text-ink sm:text-2xl">
          What Learners Are Saying
        </h2>
        <p className="mt-3 text-xs leading-relaxed text-[#4B5563] sm:text-sm sm:leading-7">
          Discover what our learners have to say about their experience with “Build Digital Assets: A Comprehensive Guide.” Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
        </p>
      </div>

      {/* Ratings Breakdown Summary Box */}
      <RatingSummary score="4.7" />

      {/* Individual Reviews Section */}
      <div>
        <h3 className="text-base font-extrabold tracking-[-0.03em] text-ink sm:text-lg">
          Individual Reviews:
        </h3>

        {/* Filter Pills */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {['All rating', '★ 5', '★ 4', '★ 3', '★ 2', '★ 1'].map(f => (
            <button
              key={f}
              type="button"
              onClick={() => {
                setActiveFilter(f)
                toast.success(`Filter: ${f}`)
              }}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-150 ${
                activeFilter === f
                  ? 'bg-lime text-black shadow-sm'
                  : 'bg-[#F3F4F6] text-[#4B5563] hover:bg-gray-200 hover:text-ink'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Review Cards */}
        <div className="mt-6 space-y-4">
          {reviewsList.map(review => (
            <ReviewCard
              key={review.name}
              {...review}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
