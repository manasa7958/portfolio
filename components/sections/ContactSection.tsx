import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

export default function ContactSection() {
  return (
    <section id="contact" className="bg-blue-100 text-gray-800 py-12 px-6">
      <h2 className="text-3xl mb-6 font-bold text-blue-900">Let's Connect</h2>
      <div className="max-w-xl mx-auto space-y-4">
        <p className="text-lg mb-6">Open to chats about fintech, healthcare, or just cool data ideas 🚀</p>

        <div className="space-y-3 text-lg">
          <p className="flex items-center gap-3"><FaMapMarkerAlt /> Chelmsford, MA 01824</p>
          <p className="flex items-center gap-3"><FaPhone /> 484-477-6678</p>
          <p className="flex items-center gap-3"><FaEnvelope /> 
            <a href="mailto:manasapraveen.work@gmail.com" className="text-blue-700 hover:underline">
              manasapraveen.work@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-3"><FaLinkedin /> 
            <a href="https://www.linkedin.com/in/manasapraveen" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              linkedin.com/in/manasapraveen
            </a>
          </p>
          <p className="flex items-center gap-3"><FaGithub /> 
            <a href="https://github.com/manasa7958" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              github.com/manasa7958
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
