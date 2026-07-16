import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-green-600">
          Nexcent
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-gray-700 hover:text-green-600 transition"
          >
            Home
          </a>

          <a
            href="#"
            className="text-gray-700 hover:text-green-600 transition"
          >
            Features
          </a>

          <a
            href="#"
            className="text-gray-700 hover:text-green-600 transition"
          >
            Community
          </a>

          <a
            href="#"
            className="text-gray-700 hover:text-green-600 transition"
          >
            Blog
          </a>

          <a
            href="#"
            className="text-gray-700 hover:text-green-600 transition"
          >
            Pricing
          </a>

          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md transition">
            Register Now →
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-gray-700"
        >
          {isOpen ? <HiXMark /> : <HiBars3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center gap-6 py-6">
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-green-600"
            >
              Home
            </a>

            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-green-600"
            >
              Features
            </a>

            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-green-600"
            >
              Community
            </a>

            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-green-600"
            >
              Blog
            </a>

            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-green-600"
            >
              Pricing
            </a>

            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md">
              Register Now →
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;