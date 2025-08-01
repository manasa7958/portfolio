export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-blue-50 text-gray-800">
      <h2 className="text-3xl mb-6">Projects</h2>
      <div className="grid gap-6 max-w-3xl">
        <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold">Why 1 in 5 Patients Miss Appointments</h3>
          <p>Tableau dashboard exploring hospital appointment no-shows and potential interventions.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold">Customer Churn Analysis</h3>
          <p>SQL + Excel dashboard evaluating ROI, cash flow, and churn KPIs for smarter decision-making.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold">Predicting Patient Disease Progression</h3>
          <p>Machine learning model mapping cancer progression timelines to improve treatment strategies.</p>
        </div>
      </div>
    </section>
  )
}
