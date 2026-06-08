"use client";
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsappIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.002-2.632-1.023-5.105-2.887-6.974C16.582 1.916 14.11.89 11.477.89c-5.442 0-9.866 4.415-9.869 9.85-.001 1.636.452 3.235 1.311 4.645l-.992 3.613 3.7-.971zm11.367-6.233c-.333-.167-1.972-.974-2.278-1.085-.306-.113-.53-.168-.752.167-.223.334-.862 1.085-1.057 1.307-.194.223-.39.25-.723.083-1.343-.672-2.316-1.183-3.236-2.759-.243-.415-.243-.37.067-.681.279-.279.333-.334.5-.5.166-.167.222-.278.333-.5.11-.223.056-.417-.028-.584-.083-.167-.752-1.812-1.03-2.48-.27-.648-.545-.56-.752-.57h-.642c-.222 0-.584.083-.89.417-.306.334-1.169 1.141-1.169 2.783 0 1.643 1.197 3.23 1.363 3.453.167.223 2.355 3.597 5.706 5.048.797.345 1.42.551 1.905.707.8.254 1.528.218 2.102.133.64-.095 1.972-.807 2.25-1.587.279-.779.279-1.447.195-1.587-.084-.14-.306-.223-.639-.39z" />
  </svg>
);

export default function Contact() {
  const whatsappNumber = "919689247843";
  const whatsappMessage = encodeURIComponent("Hi Harshada, I saw your portfolio and wanted to connect!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-indigo-600 dark:text-blue-400" />,
      title: "Email Address",
      value: "harshadbk2309@gmail.com",
      link: "mailto:harshadbk2309@gmail.com"
    },
    {
      icon: <LinkedinIcon className="w-6 h-6 text-indigo-600 dark:text-blue-400" />,
      title: "LinkedIn Profile",
      value: "harshada-kale-a2b279199",
      link: "https://www.linkedin.com/in/harshada-kale-a2b279199"
    },
    {
      icon: <GithubIcon className="w-6 h-6 text-indigo-600 dark:text-blue-400" />,
      title: "GitHub Portfolio",
      value: "github.com/Hk230900",
      link: "https://github.com/Hk230900"
    }
  ];

  return (
    <PageWrapper>
      <div className="px-6 py-16 max-w-6xl mx-auto z-10 relative">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Get In Touch
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            I&apos;m always open to discussing new opportunities, collaborations, or technical challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* WhatsApp Primary Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 flex"
          >
            <div className="glass-panel p-8 rounded-3xl border shadow-lg flex flex-col justify-between w-full relative overflow-hidden group">
              {/* Background glowing gradient */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500" />
              
              <div className="space-y-6">
                <div className="inline-flex p-4 bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-500 rounded-2xl border border-emerald-500/25 relative">
                  <span className="absolute top-0 right-0 flex h-3 w-3 -mt-1 -mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <WhatsappIcon className="w-8 h-8" />
                </div>
                
                <div className="space-y-3">
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Chat on WhatsApp
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                    Looking for a quick response? Connect with me directly on WhatsApp for instant discussions about roles, project collaborations, or recruitment opportunities.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 select-none">
                  <div className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-350">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Direct access to messaging
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-350">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Fast and direct communication channel
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-350">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    No emails or configuration forms required
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold rounded-2xl text-sm transition-all duration-200 active:scale-[0.98] shadow-lg shadow-emerald-500/25 cursor-pointer"
                >
                  Start WhatsApp Chat
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Other Connection Methods */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4 flex-grow">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 pl-1">Other Channels</h2>
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-5 rounded-2xl border hover:border-indigo-500/20 transition-all flex items-center gap-4 group cursor-pointer"
                >
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 group-hover:scale-105 transition-transform flex items-center justify-center">
                    {method.icon}
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-indigo-600 dark:group-hover:text-blue-400 transition-colors">
                      {method.title}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 truncate mt-1">
                      {method.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-br from-indigo-500/5 to-purple-500/5 p-8 rounded-2xl border border-slate-200 dark:border-slate-900 select-none">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Let&apos;s Build Something Great</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Whether you have an interesting codebase challenge, team lead opportunity, or want to discuss full-stack performance tuning, I&apos;m always excited to connect.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-700 dark:text-blue-300 rounded-lg text-xs font-semibold border border-indigo-500/25">
                  Full-time
                </span>
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-700 dark:text-blue-300 rounded-lg text-xs font-semibold border border-indigo-500/25">
                  SaaS Dev
                </span>
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-700 dark:text-blue-300 rounded-lg text-xs font-semibold border border-indigo-500/25">
                  Team Lead
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </PageWrapper>
  );
}
