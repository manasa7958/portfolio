import Image from "next/image"

export default function HomeSection({ scrollToSection }: any) {
  return (
    <section 
      id="home" 
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-blue-200 px-6"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* LEFT SIDE - Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-blue-900 leading-tight">
            Hi, I'm <span className="accent">Manasa</span> 👋
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-lg">
            CS + Math double major, Econ minor.<br />
            I build smart, data-driven tools for fintech and healthcare that make life a little easier.
          </p>
          <button 
            onClick={() => scrollToSection("projects")} 
            className="mt-8 px-8 py-4 text-lg bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
          >
            See My Work
          </button>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-300 shadow-xl">
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
