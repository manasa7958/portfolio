export default function SkillsSection() {
  return (
    <section id="skills" className="bg-blue-100 text-gray-800 py-12 px-6">
      <h2 className="text-3xl mb-6 font-bold text-blue-900">Skills</h2>
      
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Languages</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <li>Python</li>
            <li>SQL</li>
            <li>C++</li>
            <li>Java</li>
            <li>C</li>
            <li>Lean 4 (Theorem Prover)</li>
            <li>Assembly (MIPS, Intel x86)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Tools & Frameworks</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <li>Git</li>
            <li>Jupyter Notebooks</li>
            <li>Excel</li>
            <li>Tableau</li>
            <li>Pandas</li>
            <li>NumPy</li>
            <li>Linux Shell/Bash</li>
            <li>scikit-learn</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Concepts</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <li>Algorithm Design</li>
            <li>Data Modeling</li>
            <li>Statistical Analysis</li>
            <li>Optimization Techniques</li>
            <li>Data Visualization</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
