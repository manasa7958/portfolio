import Image from "next/image"

export default function HomeSection({ scrollToSection }: any) {
  return (
    <section 
      id="home" 
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-blue-200 text-center md:text-left px-6"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* LEFT SIDE - Text */}
        <div className="flex-1 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4 text-blue-900">
            Hi, I'm <span className="accent">Manasa</span> 👋
          </h1>
          <p className="text-lg text-gray-700 max-w-md">
            CS + Math double major, Econ minor.  
            I turn messy data into smart tools that actually help people—especially in fintech and healthcare.
          </p>
          <button 
            onClick={() => scrollToSection("projects")} 
            className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
          >
            See My Work
          </button>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-blue-300 shadow-lg">
            <Image
              src="/Headshot.png"
              alt="Manasa Praveen headshot"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
