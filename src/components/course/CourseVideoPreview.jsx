import toast from 'react-hot-toast'

export default function CourseVideoPreview({
  thumbnail = '/assets/course-hero.jpg',
  alt = 'Build Digital Asset Preview'
}) {
  return (
    <div className="group relative aspect-[1.55/1] w-full overflow-hidden rounded-[24px] bg-black/10 shadow-2xl">
      <img
        src={thumbnail}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-101"
      />
      <button
        type="button"
        onClick={() => toast.success('Playing course introduction preview...')}
        aria-label="Play course video"
        className="absolute inset-0 flex items-center justify-center bg-black/5 transition-colors hover:bg-black/15"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black/40 backdrop-blur-md shadow-2xl transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
          <div className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md sm:h-12 sm:w-12">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-black"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  )
}
