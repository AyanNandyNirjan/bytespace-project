export default function BlueGridBackground({
  children,
  className = '',
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      className={`brand-grid relative overflow-hidden text-white ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
