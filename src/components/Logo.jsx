import { Link } from 'react-router-dom'

export default function Logo({ inverse = false, compact = false }) {
  return (
    <Link to="/" className="inline-flex items-center gap-2.5 font-bold tracking-tight text-xl group select-none">
      <img
        src="/assets/logo_icon_2x.png"
        alt="ByteSpace"
        className="h-6 w-auto shrink-0 object-contain transition-transform duration-200 group-hover:scale-105"
        draggable={false}
      />
      {!compact && (
        <span className={`text-[21px] font-bold tracking-[-0.03em] ${inverse ? 'text-white' : 'text-ink'}`}>
          ByteSpace
        </span>
      )}
    </Link>
  )
}
