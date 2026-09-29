export default function CourseAbout() {
  const sneakPeakItems = [
    { src: '/assets/course-figma.jpg', alt: 'Design Sketching' },
    { src: '/assets/course-digital.jpg', alt: 'Development IDE' },
    { src: '/assets/course-money.jpg', alt: 'Analytics Dashboard' },
    { src: '/assets/course-startup.jpg', alt: 'Mobile App Mockup' }
  ]

  const keyPoints = [
    'Foundational Concepts',
    'Design Principles Mastery',
    'Advanced Techniques in Digital Creation',
    'Project Showcase and Critique',
    'Optimizing for Various Platforms',
    'Digital Asset Management Best Practices',
    'Monetization Strategies',
    'Capstone Project: Building Your Portfolio'
  ]

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Description */}
      <div>
        <h2 className="text-xl font-extrabold tracking-[-0.03em] text-ink sm:text-2xl">
          Description
        </h2>
        <div className="mt-4 space-y-4 text-xs leading-relaxed text-[#4B5563] sm:text-sm sm:leading-7">
          <p>
            Embark on an enlightening exploration into the world of digital creation with our comprehensive course, “Build Digital Assets: A Comprehensive Guide.” This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
          </p>
          <p>
            In the initial modules, you’ll establish a solid foundation by immersing yourself in key foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
          </p>
          <p>
            As you progress through the course, you’ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
          </p>
        </div>
      </div>

      {/* Sneak Peak */}
      <div>
        <h3 className="text-lg font-extrabold tracking-[-0.03em] text-ink sm:text-xl">
          Sneak Peak
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {sneakPeakItems.map((item, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-50 shadow-sm"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="aspect-[1.35/1] w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Key Points */}
      <div>
        <h3 className="text-lg font-extrabold tracking-[-0.03em] text-ink sm:text-xl">
          Key Points
        </h3>
        <ul className="mt-4 space-y-3">
          {keyPoints.map(point => (
            <li key={point} className="flex items-center gap-3 text-xs sm:text-sm text-ink font-medium">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-sm">
                <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
