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
          className="transform-gpu h-8 w-auto object-contain transition-transform duration-150 ease-out group-hover:scale-105"
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
          className="transform-gpu w-[170px] h-auto object-contain transition-transform duration-150 ease-out group-hover:scale-[1.02]"
          draggable={false}
        />
      </Link>
    )
  }

  return (
    <Link to="/" className={`inline-flex items-center select-none group ${className}`}>
      <img
        src="/assets/bytespace_logo_dark_transparent_4x.png"
        alt="ByteSpace"
        className="transform-gpu h-7 w-auto object-contain transition-transform duration-150 ease-out group-hover:scale-105"
        draggable={false}
      />
    </Link>
  )
}
