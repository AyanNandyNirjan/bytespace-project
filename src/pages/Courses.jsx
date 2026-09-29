import Header from '../components/Header'
import Footer from '../components/Footer'
import FilterBar from '../components/FilterBar'
import CourseCard from '../components/CourseCard'
import SearchBar from '../components/SearchBar'
import { categories, courses } from '../data'

export default function Courses() {
  const listed = Array.from({length:18}, (_,i)=>courses[i%courses.length])
  return (
    <div>
      <section className="brand-grid text-white">
        <Header />
        <div className="container-page pb-12 pt-7 text-center sm:pb-14 sm:pt-10">
          <h1 className="text-4xl font-extrabold tracking-[-0.04em]">Find Your Next Course</h1>
          <div className="mt-7"><SearchBar /></div>
        </div>
      </section>
      <main className="py-14 sm:py-16">
        <div className="container-page">
          <FilterBar />
          <div className="no-scrollbar mt-7 flex gap-2 overflow-x-auto pb-2 lg:flex-wrap">
            {categories.slice(0,9).map((cat,i)=><button key={cat} className={`chip shrink-0 ${i===0?'chip-active':''}`}>{cat}</button>)}
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listed.map((course,i)=><CourseCard key={`${course.id}-${i}`} course={course} dense />)}
          </div>
          <div className="mt-12 flex items-center justify-center gap-4 text-sm">
            <button className="h-10 w-10 rounded-full border border-black/15">‹</button>
            {[1,2,3,4,5].map(n=><button key={n} className={`h-8 w-8 rounded-full ${n===2?'font-bold text-brand':''}`}>{n}</button>)}
            <button className="h-10 w-10 rounded-full border border-black/15">›</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
