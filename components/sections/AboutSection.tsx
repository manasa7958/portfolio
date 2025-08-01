export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="pastel-gradient text-gray-800 py-16 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-blue-900">About Me</h2>
        <p className="text-lg leading-relaxed mb-4">
          Hey there! I’m <span className="accent font-semibold">Manasa Praveen</span>, currently double majoring in 
          <span className="text-blue-800 font-medium"> Computer Science (Data Science concentration) </span> 
          and <span className="text-blue-800 font-medium">Mathematics</span> at the University of Massachusetts - Lowell, 
          with a side quest in <span className="text-blue-800 font-medium">Economics</span>.  
        </p>
        <p className="text-lg leading-relaxed mb-4">
          My love for math goes way back—there’s something so satisfying about cracking logic puzzles and 
          games like Sudoku that makes my brain light up. That same thrill of solving puzzles is what led me into 
          data science and fintech: every messy dataset feels like a riddle waiting to be solved, and every model 
          I build is one step closer to making real-world decisions smarter and faster.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          When I’m not diving into code or wrangling numbers, you’ll probably find me exploring new 
          cafes around town, doodling dashboard ideas on napkins, or going down rabbit holes on how 
          AI is reshaping healthcare and finance. My ultimate goal? To keep building clever, data-powered 
          solutions that make complex problems a little less complicated—and maybe even fun to tackle. 
        </p>
        <p className="text-lg leading-relaxed">
          TL;DR: I’m a curious builder with a love for math, puzzles, and turning abstract data 
          into something that actually helps people in the real world. 
        </p>
      </div>
    </section>
  )
}