export default function ProjectsSection() {
  const projects = [
    {
      title: "Multi-Stream Event Log Analyzer",
      description:
        "Boost.Regex-powered C++ parser that processes 2K+ log entries/file in <5ms latency across 10+ simulated servers. Automated diagnostics pipeline cut manual review time by 70%.",
      link: "https://github.com/manasa7958/Projects/tree/main/Kronos%20Log%20Parsing",
      image: "/project-logs.png",
    },
    {
      title: "High-Performance Genetic Data Aligner",
      description:
        "Optimized Hirschberg’s algorithm to align 100K+ DNA sequences under strict memory limits, achieving 99% lower memory usage than baseline solutions.",
      link: "https://github.com/manasa7958/Projects/tree/main/DNA%20Alignment",
      image: "/project-dna.png",
    },
    {
      title: "Sokoban Puzzle Game",
      description:
        "Classic box-pushing puzzle game built in C++ with SFML graphics engine. Interactive and expandable to a web-playable version in future iterations.",
      link: "https://github.com/manasa7958/Projects/tree/main/Sokoban%20Game",
      image: "/project-sokoban.png",
    },
    {
      title: "Interactive Fractal Art Generator",
      description:
        "A creative coding project that generates triangle-based fractal art patterns. Users can select the recursion depth to create unique, mesmerizing designs on demand.",
      link: "https://github.com/manasa7958/Projects/tree/main/Triangle%20Fractal%20Simulator",
      image: "/project-fractal.png",
    },
  ]

  return (
    <section id="projects" className="bg-blue-50 text-gray-800 py-16 px-6">
      <h2 className="text-4xl mb-8 font-bold text-blue-900">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            )}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}