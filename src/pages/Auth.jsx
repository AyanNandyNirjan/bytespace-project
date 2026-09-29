import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'

export default function Auth({mode}){
  const register = mode==='register'
  const navigate=useNavigate()
  const submit=e=>{e.preventDefault();toast.success(register?'Account created successfully':'Welcome back to ByteSpace');setTimeout(()=>navigate('/'),450)}
  return <div className="brand-grid min-h-screen bg-brand p-4 text-white sm:p-8 lg:p-12">
    <div className="mx-auto grid min-h-[calc(100vh-32px)] max-w-[1600px] items-stretch gap-7 lg:grid-cols-[1.05fr_.95fr]">
      <section className="relative hidden overflow-hidden rounded-[36px] lg:block">
        <div className="absolute left-7 top-0"><Logo inverse compact/></div>
        <div className="absolute left-7 top-28 max-w-xl"><h1 className="text-3xl font-extrabold">{register?'Sign up and come in':'Sign in with ease'}</h1><p className="mt-4 text-xl leading-8 text-white/85">{register?'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost':'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.'}</p></div>
        <motion.img animate={{y:[0,-8,0]}} transition={{duration:5,repeat:Infinity}} src="/assets/auth-visual.jpg" alt="ByteSpace courses" className="absolute bottom-3 left-3 w-[86%] max-w-[780px] rounded-[28px] object-cover shadow-float"/>
      </section>
      <section className="flex items-center justify-center py-8">
        <motion.form initial={{opacity:0,scale:.985}} animate={{opacity:1,scale:1}} onSubmit={submit} className="w-full max-w-[720px] rounded-[38px] bg-white px-7 py-10 text-ink shadow-float sm:px-14 sm:py-14 lg:px-20 lg:py-20">
          <p className="text-xl font-medium text-brand">{register?'Create an Account':'Sign In'}</p>
          <h2 className="mt-2 text-5xl font-extrabold leading-tight tracking-[-0.045em] sm:text-6xl">{register?'Welcome to ByteSpace':'Welcome Back'}</h2>
          <div className="mt-10 space-y-7">
            {register&&<label className="block"><span className="mb-2 block text-base font-medium">Full Name</span><input required placeholder="Jamie Davis" className="w-full rounded-2xl border border-black/15 px-5 py-4 text-lg outline-none focus:border-brand"/></label>}
            <label className="block"><span className="mb-2 block text-base font-medium">Email</span><input required type="email" placeholder="designer@example.com" className="w-full rounded-2xl border border-black/15 px-5 py-4 text-lg outline-none focus:border-brand"/></label>
            <label className="block"><span className="mb-2 block text-base font-medium">Password</span><input required type="password" placeholder="********" className="w-full rounded-2xl border border-black/15 px-5 py-4 text-lg outline-none focus:border-brand"/></label>
          </div>
          <div className="mt-8 flex justify-end"><button className="lime-btn px-8 py-3 text-lg">{register?'Continue':'Sign In'}</button></div>
          {!register&&<><div className="my-10 flex items-center gap-4 text-muted"><span className="h-px flex-1 bg-black/15"/><span>or</span><span className="h-px flex-1 bg-black/15"/></div><div className="flex justify-center gap-5"><button type="button" onClick={()=>toast('Facebook sign-in demo')} className="grid h-16 w-16 place-items-center rounded-2xl border border-black/15 text-3xl font-extrabold">f</button><button type="button" onClick={()=>toast('Google sign-in demo')} className="grid h-16 w-16 place-items-center rounded-2xl border border-black/15 text-3xl font-extrabold">G</button></div></>}
          <p className={`${register?'mt-24':'mt-12'} text-center text-base text-muted`}>{register?'Already have an account? ':'New user? '}<Link className="text-brand" to={register?'/login':'/register'}>{register?'Login':'Create an account'}</Link></p>
        </motion.form>
      </section>
    </div>
  </div>
}
