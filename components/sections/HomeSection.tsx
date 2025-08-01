export default function HomeSection({ scrollToSection }: any) {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-blue-200 text-center">
      <h1 className="text-5xl mb-4 text-blue-900">Hi, I'm <span className="accent">Manasa</span> 👋</h1>
      <p className="text-lg text-gray-700 max-w-xl">
        CS + Math double major, Econ minor. I love turning messy data into smart tools that actually help people—especially in fintech and healthcare.
      </p>
      <button 
        onClick={() => scrollToSection("projects")} 
        className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
        See My Work
      </button>
    </section>
  )
}
