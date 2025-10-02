"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200 w-full">
      <Head>
        <title>Shejil – Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Shejil, JavaScript and Next.js developer. Specialized in building scalable frontend apps, with full-stack and Flutter exploration."
        />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-violet-400">
            Shejil
          </Link>
          <div className="flex space-x-5 text-sm">
            <a href="#about" className="hover:text-violet-400">
              About
            </a>
            <a href="#skills" className="hover:text-violet-400">
              Skills
            </a>
            <a href="#experience" className="hover:text-violet-400">
              Experience
            </a>
            <a href="#projects" className="hover:text-violet-400">
              Projects
            </a>
            <a href="#growth" className="hover:text-violet-400">
              Growth
            </a>
            <a href="#contact" className="hover:text-violet-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 flex-grow">
        {/* Hero */}
        <section className="text-center px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I’m <span className="text-violet-400">Shejil</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Frontend-focused JavaScript developer specialized in{" "}
            <span className="text-gray-200 font-semibold">React & Next.js</span>
            . Exploring Go APIs and Flutter mobile apps.
          </p>
        </section>

        {/* About */}
        <section id="about" className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            I started my career as a React.js developer and have been working as
            a Next.js developer for the last 2 years. At the Department of Posts
            (CEPT), I contributed to migrating from legacy TCS systems to modern
            in-house web solutions. I have also explored backend APIs in Go and
            built a mobile app for SSC aspirants using Flutter & Firebase. My
            strongest area is{" "}
            <span className="font-semibold text-gray-200">
              JavaScript and Next.js
            </span>
            .
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-300">
            <div>
              <h3 className="font-semibold mb-2 text-gray-200">Core</h3>
              <ul className="space-y-1">
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-200">Secondary</h3>
              <ul className="space-y-1">
                <li>Go (APIs)</li>
                <li>Flutter (Firebase)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-200">Tools</h3>
              <ul className="space-y-1">
                <li>GitHub & GitLab</li>
                <li>Firebase</li>
                <li>REST APIs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-200">
                Department of Posts (CEPT) – Frontend → Full Stack
              </h3>
              <p className="text-gray-400 text-sm mb-2">1.5 years</p>
              <ul className="list-disc pl-5 text-gray-400 space-y-1">
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
          <h2 className="text-2xl font-bold mb-8 text-center">Projects</h2>

          {/* SSC Aspirant App */}
          <div className="border border-gray-700 rounded-lg p-6 shadow-lg">
            <h3 className="font-semibold text-xl text-gray-200 mb-3 flex items-center">
              📱 SSC Aspirant App (Flutter + Firebase)
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              A mobile application for exam aspirants with{" "}
              <span className="font-semibold text-gray-200">
                Firebase Authentication
              </span>
              and{" "}
              <span className="font-semibold text-gray-200">
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
                  className="rounded-2xl overflow-hidden border border-gray-700 shadow-lg bg-black"
                >
                  <Image
                    src={`/${src}`}
                    alt={`App Screenshot ${i + 1}`}
                    width={300}
                    height={600}
                    className="object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>
          </div>

       {/* India Post Web Solution */}
<div className="border border-gray-700 rounded-lg p-6 shadow-lg mt-8">
  <h3 className="font-semibold text-xl text-gray-200 mb-3">
    💻 India Post – Nationwide Web Solution (Next.js + Go + PostgreSQL)
  </h3>

  <p className="text-gray-400 text-sm leading-relaxed mb-4">
    Worked as a <span className="font-semibold text-gray-200">Full Stack Developer</span> 
    on the complete in-house web solution for{" "}
    <span className="font-semibold text-gray-200">India Post</span>, 
    one of the world’s largest organizations handling data and services.  
    The system is deployed across{" "}
    <span className="font-semibold text-gray-200">1.5 lakh+ offices nationwide</span>, 
    serving millions of customers daily.
  </p>

  <p className="text-gray-400 text-sm leading-relaxed mb-4">
    The platform powers critical services including booking, tracking, 
    Postal Life Insurance (PLI), delivery of consignments, and 
    the sale of stamps and related services.
  </p>

  <ul className="list-disc list-inside text-gray-400 text-sm space-y-2 mb-4">
    <li>
      Specialized in <span className="text-gray-200 font-medium">Next.js</span> 
      for developing scalable, responsive, and production-ready frontend modules.
    </li>
    <li>
      Wrote optimized <span className="text-gray-200 font-medium">PostgreSQL queries</span> 
      to handle massive datasets at national scale.
    </li>
    <li>
      Developed and integrated secure <span className="text-gray-200 font-medium">Go APIs</span> 
      for high-performance backend operations.
    </li>
    <li>
      Contributed to one of the{" "}
      <span className="text-gray-200 font-medium">largest data-driven systems in the world</span>, 
      ensuring reliable digital services for citizens across India.
    </li>
  </ul>
</div>

        </section>

        {/* Growth */}
        <section id="growth" className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold mb-4">Learning & Growth</h2>
          <ul className="list-disc pl-5 text-gray-400 space-y-2">
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
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-gray-400 mb-6">
            Interested in working together? Let’s connect.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:youremail@example.com"
              className="hover:text-violet-400"
            >
              📧 Email
            </a>
            <a
              href="https://github.com/yourusername"
              className="hover:text-violet-400"
            >
              GitHub
            </a>
            <a
              href="https://gitlab.com/yourusername"
              className="hover:text-violet-400"
            >
              GitLab
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="hover:text-violet-400"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Shejil. All rights reserved.
      </footer>
    </div>
  );
}
