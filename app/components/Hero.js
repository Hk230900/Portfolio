"use client";
import { motion } from "framer-motion";
import projects from "../data/projects";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "SaaS Projects", value: "2" },
    { label: "Tech Stack Skills", value: "12+" }
  ];

  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center justify-center py-12 md:py-20 z-10">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Info Panel */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            
            {/* Pulsing Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full shadow-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300 tracking-wide uppercase">
                Available for Projects & Collaboration
              </span>
            </motion.div>

            {/* Core Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Architecting <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Scalable SaaS Products
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                Technical Leader & Full-Stack Developer specializing in secure backend engineering, 
                high-concurrency notification dispatch systems, and responsive user experiences using 
                <span className="text-slate-950 dark:text-white font-medium"> Next.js</span>, 
                <span className="text-slate-950 dark:text-white font-medium"> Django REST</span>, and 
                <span className="text-slate-950 dark:text-white font-medium"> PostgreSQL</span>.
              </p>
            </div>

            {/* Metrics Grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="grid grid-cols-3 gap-4 max-w-lg bg-slate-100/50 dark:bg-slate-950/45 border border-slate-200 dark:border-slate-900 p-5 rounded-2xl shadow-inner"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left space-y-1 select-none">
                  <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-blue-400 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="/resume.pdf"
                className="px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl text-sm transition-all duration-200 shadow-lg shadow-indigo-500/25 active:scale-95 cursor-pointer"
              >
                Download CV
              </a>
              <Link
                href="/projects"
                className="px-6 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-xl text-sm transition-all duration-200 active:scale-95 shadow-sm"
              >
                View Personal Projects
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 hover:bg-slate-200 dark:hover:bg-slate-900 text-slate-500 dark:text-slate-400 font-semibold rounded-xl text-sm transition-all duration-200 active:scale-95"
              >
                Get in Touch
              </Link>
            </motion.div>

          </div>

          {/* Right Column: Code Editor Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-5 w-full"
          >
            <div className="w-full bg-slate-900/90 dark:bg-[#080d19]/90 border border-slate-250 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-300">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-200 dark:bg-[#03060c] border-b border-slate-300 dark:border-slate-900/60 select-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-slate-500" />
                  developer_profile.js
                </span>
                <span className="w-10" />
              </div>

              {/* Code Panel Body */}
              <div className="p-5 overflow-x-auto space-y-1.5 leading-relaxed text-slate-500 dark:text-slate-400">
                <div>
                  <span className="text-purple-600 dark:text-purple-400">const</span>{" "}
                  <span className="text-blue-600 dark:text-blue-400">developer</span> = {"{"}
                </div>
                <div className="pl-5">
                  <span className="text-slate-500">name:</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">"Harshada Bhalchandra Kale"</span>,
                </div>
                <div className="pl-5">
                  <span className="text-slate-500">title:</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">"Technical Leader & Full-Stack Engineer"</span>,
                </div>
                <div className="pl-5">
                  <span className="text-slate-500">location:</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">"Pune, India"</span>,
                </div>
                <div className="pl-5">
                  <span className="text-slate-500">coreStack:</span> [
                </div>
                <div className="pl-10">
                  <span className="text-amber-600 dark:text-amber-400">"Next.js"</span>,{" "}
                  <span className="text-amber-600 dark:text-amber-400">"React 19"</span>,{" "}
                  <span className="text-amber-600 dark:text-amber-400">"Django"</span>,
                </div>
                <div className="pl-10">
                  <span className="text-amber-600 dark:text-amber-400">"DRF"</span>,{" "}
                  <span className="text-amber-600 dark:text-amber-400">"PostgreSQL"</span>,{" "}
                  <span className="text-amber-600 dark:text-amber-400">"Tailwind CSS"</span>
                </div>
                <div className="pl-5">],</div>
                <div className="pl-5">
                  <span className="text-slate-500">specialization:</span> {"{"}
                </div>
                <div className="pl-10">
                  <span className="text-slate-500">architecture:</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">"Multi-Tenant SaaS Platforms"</span>,
                </div>
                <div className="pl-10">
                  <span className="text-slate-500">realTimeData:</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">"Web Push Notifications & Service Workers"</span>,
                </div>
                <div className="pl-10">
                  <span className="text-slate-500">concurrency:</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">"Postgres DB locks (select_for_update)"</span>
                </div>
                <div className="pl-5">{"}"},</div>
                <div className="pl-5">
                  <span className="text-slate-500">openToWork:</span>{" "}
                  <span className="text-purple-600 dark:text-purple-400">true</span>
                </div>
                <div>{"};"}</div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Featured Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-24 border-t border-slate-200 dark:border-slate-900 pt-16"
        >
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-wide">
                Personal Projects
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                Custom platforms built independently to solve workspace and service coordination challenges.
              </p>
            </div>
            <Link
              href="/projects"
              className="text-sm font-semibold text-indigo-600 dark:text-blue-400 hover:text-indigo-700 dark:hover:text-blue-300 hover:underline flex items-center gap-1 group"
            >
              All Projects <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.slice(0, 2).map((p, index) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <Link 
                  href={`/projects/${p.slug}`} 
                  className="glass-panel premium-card block p-6 rounded-2xl border hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-block text-[9px] font-bold text-indigo-600 dark:text-blue-400 uppercase tracking-wider bg-indigo-500/10 dark:bg-blue-500/10 border border-indigo-500/20 dark:border-blue-500/20 px-2.5 py-1 rounded-full">
                          {p.category}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-blue-400 transition-colors mt-3">
                        {p.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 line-clamp-2 leading-relaxed">
                        {p.short}
                      </p>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {p.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] md:text-xs px-2.5 py-1 bg-slate-200/55 dark:bg-slate-900 text-slate-700 dark:text-blue-300 rounded-lg border border-slate-300/60 dark:border-slate-800 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
