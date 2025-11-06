export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-slate-950/70">
      <div className="container-px py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-white/70">© {new Date().getFullYear()} Praveen Dedigama. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="https://github.com/Praveendedigama" target="_blank" className="text-white/80 hover:text-white transition">GitHub</a>
          <a href="https://www.linkedin.com/in/praveen-dedigama-479b96161/" target="_blank" className="text-white/80 hover:text-white transition">LinkedIn</a>
          {/* <a href="mailto:mailtopraveenhansa@gmail.com" className="text-white/80 hover:text-white transition">mailtopraveenhansa@gmail.com</a> */}
        </div>
      </div>
    </footer>
  )
}


