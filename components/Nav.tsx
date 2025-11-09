"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/Ui";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#product", label: "Product" },
    { href: "#briefs", label: "Briefs" },
    { href: "#signals", label: "Signals" },
    { href: "#how-it-works", label: "How it works" },
  ];

  const handleGetStarted = () => {
    if (calendlyUrl) {
      window.open(calendlyUrl, "_blank");
    }
  };

  const handleContact = () => {
    if (calendlyUrl) {
      window.open(calendlyUrl, "_blank");
    } else {
      // Scroll to contact section or open email
      window.location.href = "mailto:contact@nexora.com";
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent-2 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-bold text-text">Nexora</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-black transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={handleContact}
              className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-900 transition-all duration-200"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-line"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-600 hover:text-black transition-colors py-2 text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={handleContact}
                className="w-full bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-900 transition-all duration-200"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

