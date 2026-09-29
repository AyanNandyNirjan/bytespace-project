export default function ReviewCard({
  name,
  role,
  time,
  avatar,
  text,
  rating = 5
}) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt={name}
            className="h-10 w-10 rounded-full object-cover shadow-sm"
          />
          <div>
            <p className="text-sm font-bold text-ink">{name}</p>
            <p className="text-xs text-muted">{role}</p>
          </div>
        </div>
        <span className="text-xs text-muted">{time}</span>
      </div>
      <div className="mt-3 flex items-center text-black">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-xs">★</span>
        ))}
      </div>
      <p className="mt-3 text-xs leading-relaxed text-[#4B5563] sm:text-sm sm:leading-6">
        {text}
      </p>
    </article>
  )
}
