import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return <div>
    <section className="brand-grid min-h-[780px] text-white">
      <Header/>
      <div className="container-page flex flex-col items-center pb-24 pt-12 text-center sm:pt-16">
        <div className="select-none bg-gradient-to-b from-lime via-lime/80 to-white/20 bg-clip-text text-[180px] font-extrabold leading-[.9] tracking-[-.08em] text-transparent sm:text-[280px] lg:text-[360px]">404</div>
        <h1 className="-mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-6xl">The page you are looking<br/>for doesn’t exist</h1>
        <p className="mt-8 text-base text-white/75">Try to use a correct url or go back to homepage to start again</p>
        <Link to="/" className="lime-btn mt-8 px-8">Back to Home</Link>
      </div>
    </section>
    <Footer/>
  </div>
}
