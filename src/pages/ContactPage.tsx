import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              TBridge
            </Link>
            <div className="flex gap-4">
              <Link
                to="/"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-blue-600 font-semibold"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Contact Us
          </h1>
          <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-400">
            Get in touch with our team
          </p>

          <form className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Other Ways to Reach Us
            </h2>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>Email: info@tbridge.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Main Street, City, State 12345</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ContactPage

