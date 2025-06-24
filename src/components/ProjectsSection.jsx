import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Blockchain Voting System",
    description: "An Ethereum based voting system built on voter security ,anonymity and  transparency.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Ganache","Geth","MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/vits03/Blockhain-voting-system",
  },
  {
    id: 2,
    title: "DressMauPays.com",
    description:
      "A civic platform that allows mauritians to report any issue in their community.",
    image: "/projects/project2.png",
    tags: ["NextJs", "Typescript", "TailwindCSS", "Firebase"],
    demoUrl: "https://www.dressmaupays.com",
    githubUrl: "https://github.com/vits03/DressMauPays",
  },
  {
    id: 3,
    title: "PermisMoris.com",
    description:
      "A platform that allows mauritians to easily practice for their Learner's oral test with multiple questions and answers ",
    image: "/projects/project3.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://permismoris.com",
    githubUrl: "https://github.com/vits03/permismoris",
  },
  {
    id: 4,
    title: "SplitTheTab",
    description:
      "Easily calculate your fair share of the Bills with your friends and create an itemized bill.",
    image: "/projects/project4.png",
    tags: ["React", "TailwindCSS", "React-pdf"],
    demoUrl: "https://splitthetab.netlify.app",
    githubUrl: "https://github.com/vits03/splitthetab",
  },
   {
    id: 5,
    title: "Cake shop",
    description:
      "Customized cake shop hybrid ecommerce website for client",
          image: "/projects/project5.png",

    tags: ["NextJS", "TailwindCSS", "Shadcn","ThreeJS","Framer-motion"],
    demoUrl: "https://cake-shop-mu.vercel.app/",
    githubUrl: "https://github.com/vits03/cake-shop",
  },
   {
    id: 6,
    title: "Jewelry shop",
    description:
      " Simplisitic jewelry shop website for client",
          image: "/projects/project6.png",

    tags: ["NextJS", "TailwindCSS",],
    demoUrl: "https://jewelry-shop-eight.vercel.app/",
    githubUrl: "https://github.com/vits03/jewelry-shop",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-gray-900 rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="px-6  h-6/10 py-3">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag,index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium border bg-white text-gray-700 rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl text-primary font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
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
            href="https://github.com/vits03"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
