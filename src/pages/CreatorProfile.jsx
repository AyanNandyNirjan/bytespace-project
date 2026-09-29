import { useState } from 'react'
import toast from 'react-hot-toast'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FilterBar from '../components/FilterBar'
import CourseGrid from '../components/CourseGrid'
import Button from '../components/Button'
import { courses } from '../data'

export default function CreatorProfile() {
  const [isFollowing, setIsFollowing] = useState(false)
  const [followersCount, setFollowersCount] = useState(12)

  const handleFollowToggle = () => {
    if (isFollowing) {
      setIsFollowing(false)
      setFollowersCount(c => c - 1)
      toast('Unfollowed PurePearl Studio', { icon: '👋' })
    } else {
      setIsFollowing(true)
      setFollowersCount(c => c + 1)
      toast.success('Now following PurePearl Studio! 🎉')
    }
  }

  return (
    <div className="min-h-screen bg-white text-ink">
      {/* ========================================================
          BLUE GRID HERO / CREATOR HEADER
          ======================================================== */}
      <section className="brand-grid relative overflow-hidden text-white">
        <Navbar />

        <div className="container-page pb-12 pt-8 sm:pb-16 sm:pt-10 lg:pb-20">
          {/* Creator Profile Header */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-7">
            <img
              src="/assets/creator-avatar.jpg"
              alt="PurePearl Studio"
              className="h-20 w-20 rounded-[20px] object-cover shadow-lg sm:h-24 sm:w-24"
              draggable={false}
            />
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl lg:text-[40px]">
                  PurePearl Studio
                </h1>
                <span className="rounded-full bg-lime px-3.5 py-1 text-xs font-bold text-black shadow-sm">
                  Creator
                </span>
              </div>
              <p className="mt-1 text-sm font-normal text-white/90 sm:text-base">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>

          {/* Bio Description */}
          <div className="mt-6 max-w-4xl text-sm leading-relaxed text-white/85 sm:mt-7 sm:text-[15px] sm:leading-7">
            <p>
              Welcome to the creative world of PurePearl Studio. Here, you’ll discover the passion,
              expertise, and inspiration that drive my creative journey. Let’s explore and learn together!
            </p>
            <p className="mt-2.5">
              Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From
              digital designs to multimedia projects, each piece tells a unique story. Explore the world of
              creativity with me.
            </p>
          </div>

          {/* Stats & Follow Button Row */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="inline-flex items-center rounded-full bg-white px-5 py-2 text-xs font-medium text-black shadow-sm sm:text-sm">
                <b className="mr-1.5 font-bold text-brand">3</b> Products
              </span>
              <span className="inline-flex items-center rounded-full bg-white px-5 py-2 text-xs font-medium text-black shadow-sm sm:text-sm">
                <b className="mr-1.5 font-bold text-brand">{followersCount}</b> Followers
              </span>
            </div>

            <Button
              type="button"
              variant={isFollowing ? 'white' : 'lime'}
              onClick={handleFollowToggle}
              className="w-full px-8 py-2.5 text-sm font-bold text-black sm:w-auto sm:text-[15px]"
            >
              {isFollowing ? 'Following' : 'Follow'}
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================
          WHITE COURSE LISTING SECTION
          ======================================================== */}
      <main className="py-10 sm:py-14 lg:py-16">
        <div className="container-page">
          <FilterBar />

          <div className="mt-8 sm:mt-10">
            <CourseGrid courses={courses} />
          </div>
        </div>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  )
}
