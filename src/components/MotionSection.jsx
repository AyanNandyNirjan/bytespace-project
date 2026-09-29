import { motion, useReducedMotion } from 'framer-motion'

export default function MotionSection({
  children,
  className = '',
  delay = 0,
  yOffset = 24,
  duration = 0.5,
  as: Component = 'section',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()

  const MotionComponent = motion[Component] || motion.section

  if (shouldReduceMotion) {
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    )
  }

  return (
    <MotionComponent
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05, margin: '150px 0px 150px 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
