export default function ProjectCard({ project, onOpen }) {
  return (
    <div className="group relative overflow-hidden rounded-xl ring-1 ring-white/10 bg-white/5">
      <a href={project.url} target="_blank" rel="noreferrer" className="block">
        <div className="aspect-video overflow-hidden">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <p className="mt-1 text-sm text-white/75">{project.description}</p>
        </div>
      </a>
    </div>
  )
}


