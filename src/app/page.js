"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";

function SkillCard({ title, skills, theme }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h3
        className={`font-semibold mb-2 transition-colors duration-300 ease-in-out ${
          theme === "dark" ? "text-gray-200" : "text-gray-900"
        }`}
      >
        {title}
      </h3>
      <ul
        className={`space-y-1 transition-colors duration-300 ease-in-out ${
          theme === "dark" ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark"); // Default to dark

  useEffect(() => {
    // Load saved theme on mount, fallback to dark
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }
  }, []);

  useEffect(() => {
    // Save theme to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex flex-col w-full font-inter transition-colors duration-300 ease-in-out ${
        isDark ? "bg-gray-900 text-gray-200" : "bg-white text-gray-900"
      }`}
    >
      <Head>
        <title>Shejil – Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Shejil, JavaScript and Next.js developer. Specialized in building scalable frontend apps, with full-stack and Flutter exploration."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 ease-in-out ${
          isDark
            ? "bg-gray-900/80 border-gray-800"
            : "bg-white/80 border-gray-200"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-violet-400">
            Shejil
          </Link>
          {/* Desktop Nav */}
          <div
            className={`hidden md:flex space-x-5 text-sm transition-colors duration-300 ease-in-out ${
              isDark ? "text-gray-200" : "text-gray-900"
            }`}
          >
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-violet-400 cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="hover:text-violet-400 cursor-pointer"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="experience"
              smooth={true}
              duration={500}
              className="hover:text-violet-400 cursor-pointer"
            >
              Experience
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-violet-400 cursor-pointer"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="growth"
              smooth={true}
              duration={500}
              className="hover:text-violet-400 cursor-pointer"
            >
              Growth
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-violet-400 cursor-pointer"
            >
              Contact
            </ScrollLink>
          </div>
          {/* Toggle and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-violet-400 hover:text-violet-300 p-1 rounded transition-colors duration-200 ease-in-out"
              aria-label="Toggle theme"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
            <button
              className="md:hidden text-violet-400 hover:text-violet-300 transition-colors duration-200 ease-in-out"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {/* Mobile Nav */}
        {isMenuOpen && (
          <div
            className={`md:hidden flex flex-col space-y-4 px-4 py-3 border-t transition-all duration-300 ease-in-out ${
              isDark
                ? "bg-gray-900 border-gray-800 text-gray-200"
                : "bg-white border-gray-200 text-gray-900"
            }`}
          >
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-violet-400 cursor-pointer transition-colors duration-200 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="hover:text-violet-400 cursor-pointer transition-colors duration-200 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="experience"
              smooth={true}
              duration={500}
              className="hover:text-violet-400 cursor-pointer transition-colors duration-200 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-violet-400 cursor-pointer transition-colors duration-200 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="growth"
              smooth={true}
              duration={500}
              className="hover:text-violet-400 cursor-pointer transition-colors duration-200 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Growth
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-violet-400 cursor-pointer transition-colors duration-200 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </ScrollLink>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-24 flex-grow">
        {/* Hero Section */}
        <section
          className={`text-center px-6 py-16 transition-all duration-300 ease-in-out ${
            isDark
              ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700"
              : "bg-gradient-to-b from-gray-50 via-gray-100 to-white"
          }`}
          id="hero"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Profile Picture */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/propic_1.jpg"
                alt="Shejil Profile Picture - A professional headshot of Shejil, a JavaScript developer"
                width={150}
                height={150}
                className="rounded-full border-4 border-violet-500 shadow-lg mb-6 object-cover"
              />
            </motion.div>

            {/* Name & Tagline */}
            <h1
              className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ease-in-out ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Hi, I’m <span className="text-violet-400">Shejil</span>
            </h1>
            <p
              className={`text-lg md:text-xl max-w-2xl leading-relaxed transition-colors duration-300 ease-in-out ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Frontend-focused JavaScript developer specialized in{" "}
              <span
                className={`font-semibold transition-colors duration-300 ease-in-out ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                React & Next.js
              </span>
              . Experienced in building production-scale web solutions, with
              hands-on exposure to{" "}
              <span
                className={`font-semibold transition-colors duration-300 ease-in-out ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                Go APIs
              </span>
              and{" "}
              <span
                className={`font-semibold transition-colors duration-300 ease-in-out ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                PostgreSQL queries
              </span>
              . Also published a mobile app for SSC aspirants on{" "}
              <span
                className={`font-semibold transition-colors duration-300 ease-in-out ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                Google Play Store
              </span>
              .
            </p>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="max-w-4xl mx-auto px-6 py-12">
          <h2
            className={`text-2xl font-bold mb-4 transition-colors duration-300 ease-in-out ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            About Me
          </h2>
          <p
            className={`leading-relaxed transition-colors duration-300 ease-in-out ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I started my career as a React.js developer and have been working as
            a Next.js developer for the last 2 years. At the Department of Posts
            (CEPT), I contributed to migrating from legacy TCS systems to modern
            in-house web solutions. I have also explored backend APIs in Go and
            built a mobile app for SSC aspirants using Flutter & Firebase. My
            strongest area is{" "}
            <span
              className={`font-semibold transition-colors duration-300 ease-in-out ${
                isDark ? "text-gray-200" : "text-gray-900"
              }`}
            >
              JavaScript and Next.js
            </span>
            .
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="max-w-4xl mx-auto px-6 py-12">
          <h2
            className={`text-2xl font-bold mb-4 transition-colors duration-300 ease-in-out ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <SkillCard
              title="Core"
              skills={["JavaScript (ES6+)", "React.js", "Next.js"]}
              theme={theme}
            />
            <SkillCard
              title="Secondary"
              skills={["Go (APIs)", "Flutter (Firebase)"]}
              theme={theme}
            />
            <SkillCard
              title="Tools"
              skills={["GitHub & GitLab", "Firebase", "REST APIs"]}
              theme={theme}
            />
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="max-w-4xl mx-auto px-6 py-12">
          <h2
            className={`text-2xl font-bold mb-4 transition-colors duration-300 ease-in-out ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Experience
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className={`font-semibold transition-colors duration-300 ease-in-out ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                Department of Posts (CEPT) – Frontend → Full Stack
              </h3>
              <p
                className={`text-sm mb-2 transition-colors duration-300 ease-in-out ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                1.5 years
              </p>
              <ul
                className={`list-disc pl-5 space-y-1 transition-colors duration-300 ease-in-out ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <li>
                  Built React & Next.js frontend modules for in-house CEPT
                  solution.
                </li>
                <li>Developed APIs in Go with guidance from AI tools.</li>
                <li>Collaborated in migration from legacy TCS software.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-4xl mx-auto px-6 py-12">
          <h2
            className={`text-2xl font-bold mb-8 text-center transition-colors duration-300 ease-in-out ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Projects
          </h2>

          {/* India Post Web Solution */}
          <motion.div
            whileHover={{ scale: 1.05, borderColor: "#c084fc" }}
            transition={{ duration: 0.3 }}
            className={`rounded-lg p-6 shadow-lg mt-8 cursor-pointer border transition-all duration-300 ease-in-out ${
              isDark ? "border-gray-700" : "border-gray-300"
            }`}
          >
            <h3
              className={`font-semibold text-xl mb-3 transition-colors duration-300 ease-in-out ${
                isDark ? "text-gray-200" : "text-gray-900"
              }`}
            >
              💻 India Post – Nationwide Web Solution (Next.js + Go +
              PostgreSQL)
            </h3>

            <p
              className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ease-in-out ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Worked as a{" "}
              <span
                className={`font-semibold transition-colors duration-300 ease-in-out ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                Full Stack Developer
              </span>
              on the complete in-house web solution for{" "}
              <span
                className={`font-semibold transition-colors duration-300 ease-in-out ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                India Post
              </span>
              , one of the world’s largest organizations handling data and
              services. The system is deployed across{" "}
              <span
                className={`font-semibold transition-colors duration-300 ease-in-out ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                1.5 lakh+ offices nationwide
              </span>
              , serving millions of customers daily.
            </p>

            <p
              className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ease-in-out ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              The platform powers critical services including booking, tracking,
              Postal Life Insurance (PLI), delivery of consignments, and the
              sale of stamps and related services.
            </p>

            <ul
              className={`list-disc list-inside text-sm space-y-2 mb-4 transition-colors duration-300 ease-in-out ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <li>
                Specialized in{" "}
                <span
                  className={`font-medium transition-colors duration-300 ease-in-out ${
                    isDark ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  Next.js
                </span>
                for developing scalable, responsive, and production-ready
                frontend modules.
              </li>
              <li>
                Wrote optimized{" "}
                <span
                  className={`font-medium transition-colors duration-300 ease-in-out ${
                    isDark ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  PostgreSQL queries
                </span>
                to handle massive datasets at national scale.
              </li>
              <li>
                Developed and integrated secure{" "}
                <span
                  className={`font-medium transition-colors duration-300 ease-in-out ${
                    isDark ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  Go APIs
                </span>
                for high-performance backend operations.
              </li>
              <li>
                Contributed to one of the{" "}
                <span
                  className={`font-medium transition-colors duration-300 ease-in-out ${
                    isDark ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  largest data-driven systems in the world
                </span>
                , ensuring reliable digital services for citizens across India.
              </li>
            </ul>
            <div className="flex space-x-2 mt-4">
              <span className="bg-violet-500 text-white px-2 py-1 rounded text-xs">
                Next.js
              </span>
              <span className="bg-violet-500 text-white px-2 py-1 rounded text-xs">
                Go
              </span>
              <span className="bg-violet-500 text-white px-2 py-1 rounded text-xs">
                PostgreSQL
              </span>
            </div>
            <a
              href="https://your-live-demo-link.com"
              className="mt-4 inline-block bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600"
            >
              View Live Demo
            </a>
          </motion.div>

          {/* SSC Aspirant App */}
          <motion.div
            whileHover={{ scale: 1.05, borderColor: "#c084fc" }}
            transition={{ duration: 0.3 }}
            className={`rounded-lg p-6 shadow-lg mt-12 cursor-pointer border transition-all duration-300 ease-in-out ${
              isDark ? "border-gray-700" : "border-gray-300"
            }`}
          >
            <h3
              className={`font-semibold text-xl mb-3 flex items-center transition-colors duration-300 ease-in-out ${
                isDark ? "text-gray-200" : "text-gray-900"
              }`}
            >
              📱 SSC Aspirant App (Flutter + Firebase)
            </h3>
            <p
              className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ease-in-out ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A mobile application for exam aspirants with{" "}
              <span
                className={`font-semibold transition-colors duration-300 ease-in-out ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                Firebase Authentication
              </span>
              and{" "}
              <span
                className={`font-semibold transition-colors duration-300 ease-in-out ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                Realtime Database
              </span>
              . Features quiz practice, progress tracking, and secure login.
              Published on{" "}
              <a
                href="https://play.google.com/store/apps/details?id=your_app_id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:underline"
              >
                Google Play Store
              </a>
              .
            </p>

            {/* Screenshots */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              {[
                "screen_shot_1.jpg",
                "screen_shot_2.jpg",
                "screen_shot_3.jpg",
              ].map((src, i) => (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden border shadow-lg transition-all duration-300 ease-in-out ${
                    isDark
                      ? "border-gray-700 bg-gray-900"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  <Image
                    src={`/${src}`}
                    alt={`App Screenshot ${
                      i + 1
                    } - Demonstrating features of SSC Aspirant App`}
                    width={300}
                    height={600}
                    className="object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>
            <div className="flex space-x-2 mt-4">
              <span className="bg-violet-500 text-white px-2 py-1 rounded text-xs">
                Flutter
              </span>
              <span className="bg-violet-500 text-white px-2 py-1 rounded text-xs">
                Firebase
              </span>
            </div>
            <a
              href="https://your-app-demo-link.com"
              className="mt-4 inline-block bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600"
            >
              View Live Demo
            </a>
          </motion.div>
        </section>

        {/* Growth */}
        <section id="growth" className="max-w-4xl mx-auto px-6 py-12">
          <h2
            className={`text-2xl font-bold mb-4 transition-colors duration-300 ease-in-out ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Learning & Growth
          </h2>
          <ul
            className={`list-disc pl-5 space-y-2 transition-colors duration-300 ease-in-out ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <li>Strengthened core expertise in JavaScript and Next.js.</li>
            <li>Exploring backend development with Go APIs.</li>
            <li>Learning mobile development via Flutter & Firebase.</li>
            <li>
              Use AI tools like ChatGPT for faster learning and productivity.
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="max-w-4xl mx-auto px-6 py-12 text-center"
        >
          <h2
            className={`text-2xl font-bold mb-4 transition-colors duration-300 ease-in-out ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Contact
          </h2>
          <p
            className={`mb-6 transition-colors duration-300 ease-in-out ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Interested in working together? Let’s connect.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:youremail@example.com"
              className={`hover:text-violet-400 transition-colors duration-200 ease-in-out ${
                isDark ? "text-gray-200" : "text-gray-900"
              }`}
            >
              📧 Email
            </a>
            <a
              href="https://github.com/yourusername"
              className={`hover:text-violet-400 transition-colors duration-200 ease-in-out ${
                isDark ? "text-gray-200" : "text-gray-900"
              }`}
            >
              GitHub
            </a>
            <a
              href="https://gitlab.com/yourusername"
              className={`hover:text-violet-400 transition-colors duration-200 ease-in-out ${
                isDark ? "text-gray-200" : "text-gray-900"
              }`}
            >
              GitLab
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className={`hover:text-violet-400 transition-colors duration-200 ease-in-out ${
                isDark ? "text-gray-200" : "text-gray-900"
              }`}
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className={`border-t py-6 text-center text-sm transition-all duration-300 ease-in-out ${
          isDark
            ? "border-gray-800 text-gray-500"
            : "border-gray-200 text-gray-500"
        }`}
      >
        © {new Date().getFullYear()} Shejil. All rights reserved.
      </footer>
    </div>
  );
}
