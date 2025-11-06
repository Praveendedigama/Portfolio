import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ProjectCard from './components/ProjectCard.jsx'

const projects = [
  {
    id: 1,
    title: 'Crystal Beauty Collection',
    description: 'Full-stack e-commerce site for CBC Beauty, built with React, Node.js, and MongoDB, featuring product management, order management and user authentication.',
    image: './cbclogo.png',
    url: 'https://cbc-beauty-frontend.vercel.app/',
  },
  {
    id: 2,
    title: 'Fuel Management System',
    description: 'Fuel Management System is a group project focused on efficiently tracking fuel usage and inventory for optimized operations.',
    image: './fuellogo.png',
    url: 'https://github.com/lakshitha779988/Fuel-Management-System.git',
  },
  {
    id: 3,
    title: 'To Do List App',
    description: 'A React Native app for managing tasks with features like adding, editing, deleting, and marking tasks as complete, offering a simple and efficient user experience.',
    image: './todologo.png',
    url: 'https://github.com/Praveendedigama/To-Do-List-App.git',
  },
]

function App() {
  const [openProjectId, setOpenProjectId] = useState(null)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Home/Hero */}
      <header id="home" className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-600/30 via-fuchsia-500/10 to-emerald-500/20" />
        <div className="container-px section-py">
          <div className="mx-auto max-w-5xl grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sky-400 font-semibold tracking-wide">Hello, I'm</p>
              <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Praveen <span className="text-primary">Dedigama</span>
              </h1>
              <p className="mt-4 text-lg text-white/80">
                I am an undergraduate Software Engineer at the University of Kelaniya, passionate about full-stack development, problem-solving, and creating impactful applications. I am committed to continuous learning and staying updated with industry trends.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center rounded-md bg-sky-500 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
                >
                  Contact Me
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop"
                  alt="workspace"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="section-py container-px">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              Hi, I’m Praveen Dedigama, a passionate Full Stack Developer and
              an undergraduate Software Engineer at the University of Kelaniya.
              I specialize in building dynamic web applications using technologies like React,
              Node.js, MongoDB, HTML, CSS, JavaScript, PHP, and SQL.
              I have worked on several personal projects and group projects that have allowed me to sharpen my skills and develop a strong understanding of both front-end and back-end technologies. My goal is to become a smart software engineer, always striving to create efficient and innovative solutions that make a real difference. I'm dedicated to continuous learning, and I’m excited to keep growing as a developer and solving complex problems.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square w-full max-w-sm lg:ml-auto overflow-hidden rounded-xl ring-1 ring-white/10 shadow-2xl">
              <img
                src="/profile.jpg"
                alt="Portrait of Praveen Dedigama"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-py container-px bg-white/5">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
          <p className="mt-3 text-white/75">A selection of things I’ve built recently.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} onOpen={() => setOpenProjectId(p.id)} />)
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-py container-px">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Contact</h2>
          <p className="mt-3 text-white/75">Have a project in mind? Let’s talk.</p>
          <ContactForm />
          <div className="mt-8 flex items-center gap-4">
            <a href="https://github.com/" target="_blank" className="text-white/80 hover:text-white transition">GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" className="text-white/80 hover:text-white transition">LinkedIn</a>
            <a href="mailto:mailtopraveenhansa@gmail.com" className="text-white/80 hover:text-white transition">Email</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:mailtopraveenhansa@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`
    window.location.href = mailto
  }
  return (
    <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/80">Name</label>
        <input id="name" name="name" required value={form.name} onChange={onChange}
          className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-500" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/80">Email</label>
        <input id="email" type="email" name="email" required value={form.email} onChange={onChange}
          className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-500" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/80">Message</label>
        <textarea id="message" name="message" rows="5" required value={form.message} onChange={onChange}
          className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-500" />
      </div>
      <div>
        <button type="submit" className="inline-flex items-center rounded-md bg-sky-500 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-950">
          Send Message
        </button>
      </div>
    </form>
  )
}

export default App
