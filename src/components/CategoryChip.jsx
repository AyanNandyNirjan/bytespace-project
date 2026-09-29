export default function CategoryChip({
  children,
  active = false,
  onClick,
  className = ''
}) {
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
