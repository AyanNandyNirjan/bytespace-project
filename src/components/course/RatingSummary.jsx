export default function RatingSummary({
  score = '4.7',
  breakdown = [
    { stars: 5, pct: 85, count: 250 },
    { stars: 4, pct: 45, count: 130 },
    { stars: 3, pct: 20, count: 54 },
    { stars: 2, pct: 8, count: 10 },
    { stars: 1, pct: 5, count: 14 }
  ]
}) {
  return (
    <div className="grid gap-6 rounded-2xl border border-gray-200 bg-white p-5 sm:grid-cols-[140px_1fr] sm:items-center sm:p-7 shadow-sm">
      {/* Left Lime Rating Badge */}
      <div className="flex flex-col items-center justify-center rounded-2xl bg-lime p-5 text-center shadow-sm">
        <p className="text-xs font-bold text-black">Ratings</p>
        <p className="mt-1 text-4xl font-extrabold text-black">{score}</p>
      </div>

      {/* Right Bars Breakdown */}
      <div className="space-y-2.5">
        {breakdown.map(row => (
          <div key={row.stars} className="flex items-center gap-3 text-xs sm:text-sm">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-lime"
                style={{ width: `${row.pct}%` }}
              />
            </div>
            <div className="flex items-center text-black">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-xs">★</span>
              ))}
            </div>
            <span className="w-8 text-right font-medium text-gray-500">{row.count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
