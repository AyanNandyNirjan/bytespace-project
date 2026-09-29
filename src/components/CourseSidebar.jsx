import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

export default function CourseSidebar() {
  return (
    <aside className="rounded-[24px] border border-black/15 bg-white p-6 shadow-card lg:sticky lg:top-7">
      <h3 className="text-lg font-extrabold tracking-[-0.03em]">112 Lessons (24 hours)</h3>
      <div className="mt-5 space-y-4 text-sm">
        {[
          ['01', 'Introduction to Digital Assets', '12 mins'],
          ['02', 'Design Principles for Impacts', '21 mins'],
          ['03', 'Advanced Techniques in Digital Creation', '16 mins']
        ].map(([n,t,m]) => (
          <div key={n} className="grid grid-cols-[26px_1fr_auto] gap-2">
            <span>{n}</span><span className="leading-5">{t}</span><span className="text-brand">{m}</span>
          </div>
        ))}
        <p className="text-xs text-muted">99 more videos</p>
      </div>
      <p className="mt-6 text-sm leading-6 text-muted">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
      <div className="mt-4 flex items-end gap-1"><span className="text-3xl font-extrabold text-brand">$25</span><span className="mb-1 text-xs text-muted">/lifetime</span></div>
      <button onClick={() => toast.success('Enrollment flow opened')} className="lime-btn mt-4 w-full">Enroll Now</button>
      <h4 className="mt-5 text-base font-extrabold">This course include</h4>
      <ul className="mt-4 space-y-3 text-sm text-[#575d66]">
        <li>▣ &nbsp;Learning Resources</li>
        <li>▣ &nbsp;Quality Lesson Videos</li>
        <li>♙ &nbsp;Certificate of Completion</li>
        <li>⌁ &nbsp;Private Consultation</li>
      </ul>
      <div className="mt-6 border-t border-black/10 pt-5">
        <div className="flex items-center gap-3">
          <img src="/assets/creator-avatar.jpg" alt="PurePearl Studio" className="h-11 w-11 rounded-full object-cover" />
          <div><p className="font-semibold">PurePearl Studio</p><p className="text-xs text-muted">Professional Creator</p></div>
        </div>
        <p className="mt-4 text-sm leading-6 text-muted">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
        <Link to="/creator/purepearl-studio" className="outline-btn mt-4 px-4 py-2 text-xs">See Full Profile</Link>
      </div>
    </aside>
  )
}
