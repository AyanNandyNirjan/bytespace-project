import CourseCard from './CourseCard'

export default function CourseGrid({ courses = [], dense = false, className = '' }) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {courses.map(course => (
        <CourseCard key={course.id} course={course} dense={dense} />
      ))}
    </div>
  )
}
