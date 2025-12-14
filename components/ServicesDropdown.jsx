import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function ServicesDropdown({ services, isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Cierra al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={toggleDropdown}
        className={`flex items-center hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
      >
        Servicios
        <ChevronDown className="ml-1 w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50">
          <Link
            href="/servicios"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-colors"
          >Todos los Servicios</Link>
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {service.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}