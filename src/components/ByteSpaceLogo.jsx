import { Link } from 'react-router-dom'

export default function ByteSpaceLogo({
  inverse = false,
  compact = false,
  className = '',
  iconOnly = false
}) {
  if (compact || iconOnly) {
    return (
      <Link to="/" className={`inline-flex items-center select-none group ${className}`}>
        <img
          src="/assets/logo_icon_2x.png"
          alt="ByteSpace"
          className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          draggable={false}
        />
      </Link>
    )
  }

  if (inverse) {
    return (
      <Link to="/" className={`inline-flex items-center select-none group ${className}`}>
        <img
          src="/assets/bytespace_logo_target_2x.png"
          alt="ByteSpace"
          className="w-[170px] h-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          draggable={false}
        />
      </Link>
    )
  }

  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 font-bold tracking-tight text-xl group select-none ${className}`}>
      <img
        src="/assets/logo_icon_2x.png"
        alt="ByteSpace"
        className="h-7 w-auto shrink-0 object-contain transition-transform duration-200 group-hover:scale-105"
        draggable={false}
      />
      <span className="text-[22px] font-bold tracking-[-0.03em] text-ink">
        ByteSpace
      </span>
    </Link>
  )
}
