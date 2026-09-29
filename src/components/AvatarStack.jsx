const defaultAvatars = [
  '/assets/avatar-sarah.jpg',
  '/assets/avatar-james.jpg',
  '/assets/avatar-alex.jpg',
  '/assets/creator-avatar.jpg'
]

export default function AvatarStack({
  avatars = defaultAvatars,
  count = '26+',
  className = ''
}) {
  return (
    <div className={`flex items-center -space-x-2 ${className}`}>
      {avatars.slice(0, 4).map((src, i) => (
        <img
          key={i}
          src={src}
          alt="Student avatar"
          className="h-6 w-6 rounded-full border-2 border-white object-cover shadow-sm"
          draggable={false}
        />
      ))}
      <span className="flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-lime px-1.5 text-[9px] font-bold text-black shadow-sm">
        {count}
      </span>
    </div>
  )
}
