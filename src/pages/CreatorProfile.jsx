import toast from 'react-hot-toast'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FilterBar from '../components/FilterBar'
import CourseCard from '../components/CourseCard'
import { courses } from '../data'

export default function CreatorProfile(){
  return <div>
    <section className="brand-grid text-white">
      <Header/>
      <div className="container-page pb-14 pt-8 sm:pb-16">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-center">
          <img src="/assets/creator-avatar.jpg" alt="PurePearl Studio" className="h-24 w-24 rounded-[24px] object-cover"/>
          <div><div className="flex flex-wrap items-center gap-3"><h1 className="text-4xl font-extrabold tracking-[-0.04em]">PurePearl Studio</h1><span className="rounded-full bg-lime px-5 py-2 text-sm font-semibold text-black">Creator</span></div><p className="mt-2 text-lg text-white/80">Passionate UI/UX, Web designer</p></div>
        </div>
        <p className="mt-7 max-w-5xl text-sm leading-7 text-white/82">Welcome to the creative world of [Creator’s Name]. Here, you’ll discover the passion, expertise, and inspiration that drive my creative journey. Let’s explore and learn together!<br/>Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.</p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-6"><div className="flex gap-4"><span className="rounded-full bg-white px-5 py-2.5 text-black"><b className="text-brand">3</b>&nbsp; Products</span><span className="rounded-full bg-white px-5 py-2.5 text-black"><b className="text-brand">12</b>&nbsp; Followers</span></div><button onClick={()=>toast.success('Now following PurePearl Studio')} className="lime-btn px-8">Follow</button></div>
      </div>
    </section>
    <main className="py-14 sm:py-16"><div className="container-page"><FilterBar/><div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{courses.map(c=><CourseCard key={c.id} course={c}/>)}</div></div></main>
    <Footer/>
  </div>
}
