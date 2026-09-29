import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import CourseCard from '../components/CourseCard'
import BrandShapes from '../components/BrandShapes'
import Hero3DShapes from '../components/Hero3DShapes'
import { categories, courses } from '../data'

const pathCards = [
  ['✦', 'Design'], ['⌘', 'Development'], ['▣', 'IT & Software'], ['▦', 'Business'], ['◉', 'Marketing'], ['◌', 'Photography']
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="bg-white">
      <section className="brand-grid relative overflow-hidden text-white">
        <Header />
        <Hero3DShapes />
        <div className="container-page relative z-20 flex flex-col items-center pt-8 text-center sm:pt-12 lg:pt-14">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[68px]"
          >
            Get Access to Hundreds<br className="hidden sm:block" /> Courses Available
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-white/80"
          >
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 sm:mt-8 w-full flex justify-center"
          >
            <SearchBar compact />
          </motion.div>

          {/* Centerpiece Artwork */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-8 sm:mt-10 w-full max-w-[820px] select-none"
          >
            <img
              src="/assets/hero_student_3x.png"
              alt="ByteSpace student learning online"
              className="mx-auto w-full h-auto object-contain block drop-shadow-[0_20px_45px_rgba(0,0,0,0.2)]"
              draggable={false}
            />

            {/* Interactive Card Hotspot 1: UI/UX Design */}
            <motion.button
              type="button"
              onClick={() => {
                navigate('/courses')
                toast.success('Browsing 200+ UI/UX Design courses')
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="absolute left-[13%] top-[19%] w-[27%] h-[20%] rounded-2xl cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-white/50 hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)]"
              title="UI/UX Design - 200 Courses, 1000+ Students"
              aria-label="UI/UX Design Courses"
            />

            {/* Interactive Card Hotspot 2: Learning Progress */}
            <motion.button
              type="button"
              onClick={() => toast('Your learning progress: 55% completed! 🎯', { icon: '📈' })}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="absolute right-[11%] top-[20%] w-[27%] h-[28%] rounded-2xl cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-white/50 hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)]"
              title="Learning Progress: 55%"
              aria-label="Learning Progress"
            />

            {/* Interactive Card Hotspot 3: Happy Students */}
            <motion.button
              type="button"
              onClick={() => toast('Over 2,000+ students rated 4.5/5 stars! ⭐', { icon: '🎉' })}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="absolute left-[7%] bottom-[12%] w-[31%] h-[28%] rounded-2xl cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-white/50 hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)]"
              title="Happy Students: 4.5 rating from 2,000+ students"
              aria-label="Happy Students"
            />
          </motion.div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f7f7] py-6">
        <div className="container-page grid grid-cols-2 gap-5 text-center text-sm font-semibold text-[#7b7f87] sm:grid-cols-5">
          {['Logipsum','Logipsum','Logipsum','Logipsum','Logipsum'].map((item,i)=><div key={i}>◉ {item}</div>)}
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <h2 className="section-title">Discover Your Passion,<br/>Build Your Skills</h2>
          <p className="section-copy">Explore a diverse selection of courses designed to help you create, learn, grow and move confidently toward your goals.</p>
          <div className="no-scrollbar mx-auto mt-7 flex max-w-5xl gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center">
            {categories.slice(0,16).map((cat,i)=><button key={cat} className={`chip shrink-0 ${i===0?'chip-active':''}`}>{cat}</button>)}
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map(course => <CourseCard key={course.id} course={course} />)}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <h2 className="section-title text-2xl sm:text-3xl">Explore Diverse Learning Paths at Bytespace</h2>
          <p className="section-copy max-w-4xl">All courses are organized into focused learning paths so you can move from foundations to confident application.</p>
          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {pathCards.map(([icon,label]) => (
              <motion.button whileHover={{y:-5}} onClick={()=>toast.success(`${label} courses selected`)} key={label} className="rounded-[18px] border border-black/10 bg-white px-4 py-7 text-center shadow-[0_12px_35px_rgba(11,24,70,.03)]">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lime text-xl">{icon}</span>
                <span className="mt-3 block text-sm font-bold">{label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="soft-section py-20 sm:py-24">
        <div className="container-page space-y-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.045em]">Your Path to Professional<br/>Growth Starts Here!</h2>
              <p className="mt-5 text-sm leading-7 text-muted">Explore creator-led courses built around practical learning. Follow structured lessons, sharpen your skills, and turn your curiosity into progress.</p>
              <div className="mt-8 flex gap-10"><div><b className="text-3xl text-brand">12K</b><p className="text-xs text-muted">Students</p></div><div><b className="text-3xl text-brand">70+</b><p className="text-xs text-muted">Courses</p></div><div><b className="text-3xl text-brand">16</b><p className="text-xs text-muted">Creators</p></div></div>
            </div>
            <motion.div whileHover={{scale:1.015}} className="justify-self-center"><img src="/assets/feature-growth.jpg" alt="Professional growth" className="max-h-[430px] rounded-[26px] shadow-float" /></motion.div>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div whileHover={{scale:1.015}} className="order-2 justify-self-center lg:order-1"><img src="/assets/feature-create.jpg" alt="Course creator" className="max-h-[430px] rounded-[26px] shadow-float" /></motion.div>
            <div className="order-1 max-w-xl lg:order-2">
              <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.045em]">Create & Manage<br/>Courses Easily.</h2>
              <p className="mt-5 text-sm leading-7 text-muted">ByteSpace gives creators intuitive tools to publish, organize and improve learning experiences without unnecessary complexity.</p>
              <ul className="mt-6 space-y-3 text-sm font-medium"><li>✓ Share Your Expertise</li><li>✓ Monetize Your Passion</li><li>✓ Visibility and Accuracy</li><li>✓ Build a Community</li></ul>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-grid relative overflow-hidden py-20 text-center text-white sm:py-24">
        <BrandShapes />
        <div className="container-page relative z-10">
          <h2 className="text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Unlock Your Potential as a<br/>Creator with ByteSpace</h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/75">Join a growing community of creators, publish meaningful courses and build learning experiences people are excited to come back to.</p>
          <button onClick={()=>toast.success('Creator onboarding opened')} className="lime-btn mt-7">Join as Creator</button>
        </div>
      </section>

      <section className="soft-section py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em]">Discover What Our<br/>Community Is Saying</h2>
            <p className="text-sm leading-7 text-muted">Meet learners and creators who use ByteSpace to build confidence, discover new skills and stay inspired through practical online learning.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ['/assets/avatar-sarah.jpg','Sarah N.','Enthusiast Learner','ByteSpace has made learning feel flexible and approachable. The course structure is clean, practical and easy to follow.'],
              ['/assets/avatar-james.jpg','James L.','UI/UX Learner','The lessons are practical enough to apply right away. I especially like the way topics are broken down.'],
              ['/assets/avatar-alex.jpg','Alex B.','Aspiring Creator','The creator-focused approach makes this platform feel modern, useful and built around real growth.']
            ].map(([img,name,role,copy])=>(
              <motion.div whileHover={{y:-5}} key={name} className="rounded-[24px] bg-white p-6 shadow-card">
                <img src={img} alt="" className="h-11 w-11 rounded-full object-cover"/><p className="mt-4 font-bold">{name}</p><p className="text-xs font-medium text-brand">{role}</p><p className="mt-4 text-sm leading-6 text-muted">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
