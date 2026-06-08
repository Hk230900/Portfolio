import PageWrapper from '../../components/PageWrapper';
import projects from '../../data/projects';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <PageWrapper>
        <div className="px-6 py-16 max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Project not found</h1>
          <p className="text-slate-500">We couldn't find the requested project case study.</p>
          <Link href="/projects" className="inline-block text-sm text-indigo-600 dark:text-blue-400 hover:underline">
            Back to projects
          </Link>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="px-6 py-16 max-w-4xl mx-auto z-10 relative">
        {/* Back Link */}
        <div className="mb-8">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-blue-400 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Selected Work
          </Link>
        </div>

        {/* Title Section */}
        <div className="border-b border-slate-200 dark:border-slate-900 pb-8 mb-8 space-y-4">
          <span className="inline-block text-[10px] font-bold text-indigo-600 dark:text-blue-400 uppercase tracking-wider bg-indigo-500/10 dark:bg-blue-500/10 border border-indigo-500/20 dark:border-blue-500/20 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {project.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            {project.short}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-blue-300 rounded-full text-xs font-semibold border border-slate-200 dark:border-slate-800">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed case study */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main text (Col 2) */}
          <div className="lg:col-span-2 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Project Overview</h2>
              <p className="whitespace-pre-wrap">{project.description}</p>
            </div>

            {project.liveLink && (
              <div className="pt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-bold text-sm shadow-md shadow-indigo-500/20 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                >
                  Visit Live Web Application
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>

          {/* Sidebar (Col 1) */}
          <div className="space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-900">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-850 pb-2">
                Key Deliverables
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </PageWrapper>
  );
}
