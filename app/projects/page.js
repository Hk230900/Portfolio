"use client";
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import projects from '../data/projects';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Projects() {
  return (
    <PageWrapper>
      <div className="px-6 py-16 max-w-6xl mx-auto z-10 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Selected Projects
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl text-base md:text-lg leading-relaxed">
            A showcase of custom engineering projects, highlighting standalone product design, real-time alert architecture, and database configuration.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, index) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                href={`/projects/${p.slug}`}
                className="glass-panel premium-card p-8 flex flex-col justify-between h-full group hover:no-underline"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-block text-[9px] font-bold text-indigo-600 dark:text-blue-400 uppercase tracking-wider bg-indigo-500/10 dark:bg-blue-500/10 border border-indigo-500/20 dark:border-blue-500/20 px-2.5 py-1 rounded-full">
                      {p.category}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-blue-400 transition-colors mt-3">
                    {p.title}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 mt-3 text-sm leading-relaxed">
                    {p.short}
                  </p>
                </div>

                {/* Card footer */}
                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800/60 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] md:text-xs px-2.5 py-1 bg-slate-200 dark:bg-slate-900 text-slate-700 dark:text-blue-300 rounded-lg border border-slate-300 dark:border-slate-850 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-indigo-600 dark:text-blue-400 group-hover:text-indigo-700 dark:group-hover:text-blue-350 transition-colors">
                    Read case study
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
