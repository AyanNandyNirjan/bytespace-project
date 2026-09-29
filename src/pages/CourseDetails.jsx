import toast from 'react-hot-toast'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CourseSidebar from '../components/CourseSidebar'
import CourseTabs from '../components/CourseTabs'
import { lessons, reviews } from '../data'

function AboutContent(){
  return <div>
    <h2 className="text-2xl font-extrabold">Description</h2>
    <div className="mt-5 space-y-5 text-sm leading-7 text-[#5f6570]">
      <p>Embark on an enlightening exploration into the world of digital creation with our comprehensive course, “Build Digital Assets: A Comprehensive Guide.” This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content.</p>
      <p>In the initial modules, you’ll establish a solid foundation by immersing yourself in foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.</p>
      <p>As you progress through the course, you’ll ascend to higher levels of expertise, delving into design principles, user-centered workflows, typography and layout strategies that elevate your digital assets to new heights.</p>
    </div>
    <h3 className="mt-8 text-xl font-extrabold">Sneak Peak</h3>
    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {['/assets/course-figma.jpg','/assets/course-digital.jpg','/assets/course-money.jpg','/assets/course-startup.jpg'].map((src,i)=><img key={i} src={src} alt="" className="aspect-[1.45/1] w-full rounded-xl object-cover"/>)}
    </div>
    <h3 className="mt-8 text-xl font-extrabold">Key Points</h3>
    <ul className="mt-5 space-y-3 text-sm text-[#5f6570]">
      {['Foundational Concepts','Design Principles Mastery','Advanced Techniques in Digital Creation','Project Showcase and Critique','Optimizing for Various Platforms','Digital Asset Management Best Practices','Monetization Strategies','Capstone Project: Building Your Portfolio'].map(x=><li key={x} className="flex items-center gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[10px] text-white">✓</span>{x}</li>)}
    </ul>
  </div>
}

function LessonsContent(){
  return <div>
    <h2 className="text-2xl font-extrabold">Explore the Modules</h2>
    <p className="mt-4 text-sm leading-7 text-muted">Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.</p>
    <h3 className="mt-7 text-xl font-extrabold">Lesson List</h3>
    <div className="mt-5 space-y-6">
      {lessons.map(([title,copy],i)=><div key={title} className="flex gap-4"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lime text-xl">▣</span><div><h4 className="font-bold">{title}</h4><p className="mt-1 text-sm leading-6 text-muted">{copy}</p></div></div>)}
    </div>
    <h3 className="mt-8 text-xl font-extrabold">Lesson Content</h3><p className="mt-3 text-sm leading-7 text-muted">Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.</p>
    <h3 className="mt-8 text-xl font-extrabold">Lesson Progress Tracking</h3><p className="mt-3 text-sm leading-7 text-muted">Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.</p>
    <div className="mt-5 rounded-2xl border border-black/15 p-5"><span className="text-xs text-muted">Learning Progress</span><div className="mt-1 text-3xl font-extrabold">55%</div><div className="mt-4 h-2 rounded-full bg-[#e8eaed]"><div className="h-2 w-[55%] rounded-full bg-lime"/></div></div>
  </div>
}

function ReviewsContent(){
  return <div>
    <h2 className="text-2xl font-extrabold">What Learners Are Saying</h2>
    <p className="mt-4 text-sm leading-7 text-muted">Discover what our learners have to say about their experience with “Build Digital Assets: A Comprehensive Guide.” Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.</p>
    <div className="mt-6 grid gap-5 rounded-2xl border border-black/15 p-6 sm:grid-cols-[150px_1fr] sm:items-center">
      <div className="rounded-xl bg-lime p-6 text-center"><p className="text-xs">Ratings</p><p className="text-4xl font-extrabold">4.7</p></div>
      <div className="space-y-3">{[[5,78],[4,31],[3,12],[2,7],[1,4]].map(([star,w])=><div key={star} className="grid grid-cols-[30px_1fr_80px] items-center gap-3"><span className="text-sm">{star}</span><div className="h-2 rounded-full bg-[#e7e8eb]"><div className="h-2 rounded-full bg-lime" style={{width:`${w}%`}}/></div><span className="text-sm">★★★★★</span></div>)}</div>
    </div>
    <h3 className="mt-7 text-lg font-extrabold">Individual Reviews:</h3>
    <div className="mt-4 flex flex-wrap gap-2">{['All rating','★ 5','★ 4','★ 3','★ 2','★ 1'].map((x,i)=><button key={x} className={`chip ${i===0?'chip-active':''}`}>{x}</button>)}</div>
    <div className="mt-5 space-y-5">{reviews.map(([name,role,copy],i)=><article key={name} className="rounded-2xl border border-black/15 p-6"><div className="flex items-start justify-between"><div className="flex items-center gap-3"><span className="h-11 w-11 rounded-full bg-gradient-to-br from-orange-200 to-blue-300"/><div><p className="font-bold">{name}</p><p className="text-xs text-muted">{role}</p></div></div><span className="text-xs text-muted">a year ago</span></div><p className="mt-4 tracking-[.16em]">★★★★★</p><p className="mt-4 text-sm leading-7 text-muted">{copy}</p></article>)}</div>
  </div>
}

export default function CourseDetails({tab='about'}) {
  return <div>
    <section className="brand-grid text-white">
      <Header />
      <div className="container-page pb-10 pt-8 lg:pb-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">Build Digital Asset: A Comprehensive Guide</h1>
            <p className="mt-2 text-lg font-semibold">Unlock the Power of Digital Creation with Expert Guidance</p>
            <p className="mt-5 text-sm">by <span className="font-semibold text-lime">purepearl studio</span></p>
            <div className="mt-5 flex flex-wrap gap-3"><span className="rounded-full bg-white px-5 py-2 text-sm text-black">▥ &nbsp; Intermediate</span><span className="rounded-full bg-white px-5 py-2 text-sm text-black">★ &nbsp; 4.8 (172 reviews)</span><span className="rounded-full bg-white px-5 py-2 text-sm text-black">♙ &nbsp; 199 Students</span></div>
          </div>
          <button onClick={()=>toast.success('Course link copied')} className="lime-btn self-start px-6 py-2.5 text-sm">⌯ &nbsp; Share</button>
        </div>
        <div className="relative mt-10 lg:pr-[380px]">
          <button onClick={()=>toast.success('Preview video opened')} className="group relative w-full overflow-hidden rounded-[24px] bg-[#e7e7e7] text-left shadow-float"><img src="/assets/course-hero.jpg" alt="Course preview" className="aspect-[1.55/1] w-full object-cover transition duration-300 group-hover:scale-[1.01]"/></button>
          <div className="absolute right-0 top-0 hidden w-[340px] text-ink lg:block"><CourseSidebar /></div>
        </div>
      </div>
    </section>
    <main className="py-14 sm:py-16 lg:min-h-[700px]">
      <div className="container-page lg:pr-[420px]">
        <section><CourseTabs/><div className="mt-8">{tab==='about'?<AboutContent/>:tab==='lessons'?<LessonsContent/>:<ReviewsContent/>}</div></section>
        <div className="mt-10 lg:hidden"><CourseSidebar /></div>
      </div>
    </main>
    <Footer />
  </div>
}
