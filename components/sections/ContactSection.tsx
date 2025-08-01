export default function ContactSection() {
  return (
    <section id="contact" className="bg-blue-100 text-gray-800">
      <h2 className="text-3xl mb-4">Let's Connect</h2>
      <p className="mb-4">Open to chats about fintech, healthcare, or just cool data ideas.</p>
      <a href="mailto:your.email@example.com" 
         className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
        Email Me
      </a>
    </section>
  )
}
