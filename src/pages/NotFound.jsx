import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-ink">
      {/* Blue Grid Hero */}
      <section className="brand-grid relative flex min-h-[740px] flex-col justify-between text-white sm:min-h-[820px]">
        <Navbar />

        <div className="container-page flex flex-1 flex-col items-center justify-center pb-20 pt-8 text-center sm:pb-28">
          {/* Giant Lime Gradient 404 */}
          <div className="select-none bg-gradient-to-b from-[#C7FF00] via-[#A8FF35] to-[#4ECB71]/30 bg-clip-text text-[160px] font-black leading-none tracking-[-0.07em] text-transparent sm:text-[260px] lg:text-[340px]">
            404
          </div>

          {/* Heading */}
          <h1 className="-mt-6 max-w-4xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:-mt-10 sm:text-5xl lg:text-[56px]">
            The page you are looking
            <br />
            for doesn’t exist
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-md text-sm text-white/80 sm:text-base">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Back to Home Button */}
          <Link
            to="/"
            className="mt-8 inline-block rounded-full bg-lime px-8 py-3.5 text-sm font-bold text-black shadow-md transition-all hover:brightness-105 active:scale-95 sm:text-base"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Standard Footer */}
      <Footer />
    </div>
  )
}
