import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "RTSPro",
    description:
      "Trucking web application used for fuel discounts, route planning, and more.",
    image: `${import.meta.env.BASE_URL}projects/rtsproimg.jpg`,
    tags: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
    link: "https://rtspro.com",
    ghlink: "https://github.com/SebastianAlturckCarlos",
  },
  {
    id: 2,
    title: "KSU R6 Website",
    description:
      "Kansas State University's Rainbow Six Siege esports team website.",
    image: `${import.meta.env.BASE_URL}projects/ksur6.png`,
    tags: ["HTML", "CSS", "GitHub Pages"],
    link: "https://ksur6.orgs",
    ghlink: "https://github.com/SebastianAlturckCarlos/ksur6.org",
  },
  {
    id: 3,
    title: "CS Job Search",
    description:
      "Computer Science job search platform for students looking for internships.",
    image: `${import.meta.env.BASE_URL}projects/csjobs.png`,
    tags: ["React", "Node.js", "MongoDB", "JavaScript"],
    link: "https://csjobs.lol",
    ghlink: "https://github.com/w1lt/csjobs",
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-centerß">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was crafted
          carefully with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl tont-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.ghlink}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/SebastianAlturckCarlos"
          >
            Checkout My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
