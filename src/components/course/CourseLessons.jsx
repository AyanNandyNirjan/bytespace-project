import LessonRow from './LessonRow'

export default function CourseLessons() {
  const lessonModules = [
    {
      module: 'Module 1: Introduction to Digital Assets',
      desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools'. Dive into the essentials of digital asset creation."
    },
    {
      module: 'Module 2: Design Principles for Impact',
      desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials'. Elevate your visual communication skills."
    },
    {
      module: 'Module 4: User-Centric Design Strategies',
      desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials'. Craft digital assets with a focus on user-centric design."
    },
    {
      module: 'Module 5: Interactive Media and Engagement',
      desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements'. Master the art of crafting immersive digital experiences."
    },
    {
      module: 'Module 6: Project Showcase and Critique',
      desc: "Reflect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration'. Showcase your work with confidence."
    },
    {
      module: 'Module 7: Optimizing Digital Assets for Various Platforms',
      desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media'. Ensure widespread accessibility and engagement across diverse digital landscapes."
    }
  ]

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Heading & Subtitle */}
      <div>
        <h2 className="text-xl font-extrabold tracking-[-0.03em] text-ink sm:text-2xl">
          Explore the Modules
        </h2>
        <p className="mt-3 text-xs leading-relaxed text-[#4B5563] sm:text-sm sm:leading-7">
          Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
        </p>
      </div>

      {/* Lesson List */}
      <div>
        <h3 className="text-lg font-extrabold tracking-[-0.03em] text-ink sm:text-xl">
          Lesson List
        </h3>
        <div className="mt-5 space-y-6">
          {lessonModules.map(item => (
            <LessonRow
              key={item.module}
              module={item.module}
              desc={item.desc}
            />
          ))}
        </div>
      </div>

      {/* Lesson Content */}
      <div>
        <h3 className="text-lg font-extrabold tracking-[-0.03em] text-ink sm:text-xl">
          Lesson Content
        </h3>
        <p className="mt-3 text-xs leading-relaxed text-[#4B5563] sm:text-sm sm:leading-7">
          Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
        </p>
      </div>

      {/* Lesson Progress Tracking */}
      <div>
        <h3 className="text-lg font-extrabold tracking-[-0.03em] text-ink sm:text-xl">
          Lesson Progress Tracking
        </h3>
        <p className="mt-3 text-xs leading-relaxed text-[#4B5563] sm:text-sm sm:leading-7">
          Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
        </p>
        <div className="mt-5 rounded-[22px] border border-[#E5E7EB] bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-[border-color,box-shadow] duration-200 hover:border-black/20 hover:shadow-[0_14px_36px_rgba(7,18,67,0.09)]">
          <span className="text-xs font-semibold text-muted">Learning Progress</span>
          <div className="mt-1 text-3xl font-extrabold text-ink sm:text-4xl">55%</div>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-[55%] rounded-full bg-lime transition-all duration-500" />
          </div>
        </div>
      </div>
    </div>
  )
}
