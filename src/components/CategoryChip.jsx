export default function CategoryChip({
  children,
  active = false,
  onClick,
  className = ''
}) {
  const isMore = typeof children === 'string' && children.trim() === '+ More'

  if (isMore) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`inline-flex shrink-0 items-center justify-center px-2 py-1.5 text-xs sm:text-[13px] font-semibold text-[#1E52E5] transition-all duration-150 hover:underline hover:opacity-80 active:scale-95 ${className}`}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full px-5 py-2 text-xs sm:text-[13px] font-medium transition-all duration-150 ${
        active
          ? 'bg-lime font-bold text-black shadow-sm'
          : 'bg-[#F4F4F6] text-[#45484F] hover:bg-[#EAECEF] hover:text-black'
      } ${className}`}
    >
      {children}
    </button>
  )
}
