"use client";
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap, Code2, Database, ShieldAlert } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Team Lead",
      company: "iSyra",
      period: "Jul 2025 – Present",
      location: "Pune, India (Remote)",
      type: "Full-time",
      achievements: [
        "Drive end-to-end product development with a strong focus on secure architecture, business alignment, and team mentorship.",
        "Translate complex business requirements into high-performance, scalable technical solutions.",
        "Oversee secure development practices using Django REST Framework and Next.js, ensuring compliance and data safety.",
        "Led a SaaS-based Skill Tracking Platform from initial system design to production deployment.",
        "Heading technical delivery of a strategic enterprise-grade platform featuring advanced multi-tenant capabilities."
      ],
      skills: ["Next.js", "React.js", "Django", "Django REST Framework", "PostgreSQL", "SaaS Development", "Small Team Management", "Web Application Security"]
    },
    {
      title: "Fullstack JavaScript Developer",
      company: "iSyra",
      period: "May 2024 – Jul 2025",
      location: "Pune, India (Remote)",
      type: "Full-time",
      achievements: [
        "Involved in end-to-end application lifecycle: database modeling, custom API development, authentication, and responsive UI building.",
        "Contributed to the development and deployment of an enterprise Calibration Management System for a manufacturing client.",
        "Built responsive dashboards and analytics components using Tailwind CSS, Tabulator, and React.",
        "Implemented stateless SimpleJWT authentication on the backend and custom frontend token refresh interceptors.",
        "Received performance-based salary appraisal in May 2025 in recognition of project ownership and delivery speed."
      ],
      skills: ["React.js", "Next.js", "Django REST", "PostgreSQL", "JWT Authentication", "Tailwind CSS", "Tabulator"]
    }
  ];

  const education = [
    {
      degree: "Master of Science (M.Sc.) in Computer Science",
      institution: "P.V.G's College Of Science, Pune",
      period: "Jun 2021 – Feb 2024",
      grade: "Grade: A+ (77.25% | CGPA: 8.35)"
    },
    {
      degree: "Bachelor of Science (B.Sc.) in Computer Science",
      institution: "P.V.G's College Of Science, Pune",
      period: "Jan 2018 – Mar 2021",
      grade: "Grade: A+ (76.42% | CGPA: 8.14)"
    }
  ];

  return (
    <PageWrapper>
      <div className="px-6 py-16 max-w-5xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Experience & Education
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl text-base md:text-lg leading-relaxed">
            My professional journey building scalable SaaS products, leading engineering teams, and academic foundation.
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-8 space-y-12 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-2.5 top-2.5 w-5 h-5 rounded-full bg-indigo-600 border-4 border-slate-50 dark:border-slate-950 flex items-center justify-center shadow-lg shadow-indigo-500/30" />

              <div className="glass-panel premium-card p-6 md:p-8 rounded-2xl border hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-indigo-600 dark:text-blue-400" />
                      {exp.title}
                    </h2>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-lg text-indigo-600 dark:text-blue-400 font-semibold">{exp.company}</span>
                      <span className="px-2.5 py-0.5 bg-indigo-500/10 text-indigo-700 dark:text-blue-300 rounded-lg text-xs font-semibold border border-indigo-500/20">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 md:text-right">
                    <div className="font-bold flex items-center md:justify-end gap-1 text-slate-700 dark:text-slate-300">
                      <Calendar className="w-4 h-4 text-indigo-500" />
                      {exp.period}
                    </div>
                    <div className="mt-1">{exp.location}</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      <span className="text-indigo-600 dark:text-blue-400 mt-1 flex-shrink-0">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-slate-900/60">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-blue-300 rounded-full text-xs font-semibold border border-slate-200 dark:border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 border-t border-slate-200 dark:border-slate-900 pt-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
            <GraduationCap className="w-7 h-7 text-indigo-600 dark:text-blue-400" />
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="glass-panel p-6 rounded-2xl border hover:border-indigo-500/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-indigo-600 dark:text-blue-400 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{edu.degree}</h3>
                  <p className="text-slate-550 dark:text-slate-400 text-sm mb-4">{edu.institution}</p>
                </div>
                <div>
                  <span className="px-3 py-1 bg-indigo-500/10 text-indigo-700 dark:text-blue-300 rounded-lg text-xs font-bold border border-indigo-500/25">
                    {edu.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills & Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 border-t border-slate-200 dark:border-slate-900 pt-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
            <Code2 className="w-7 h-7 text-indigo-600 dark:text-blue-400" />
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
               <div className="p-6 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl border border-slate-200 dark:border-slate-900">
              <h3 className="text-lg font-bold text-indigo-600 dark:text-blue-400 mb-4 flex items-center gap-2 border-b border-slate-200 dark:border-slate-900 pb-2">
                <Code2 className="w-4 h-4 text-indigo-600" />
                Frontend
              </h3>
              <div className="space-y-2.5 text-slate-600 dark:text-slate-400 text-sm">
                <div>Next.js (App Router), React.js</div>
                <div>JavaScript (ES6+), HTML5, CSS3</div>
                <div>Tailwind CSS, Bootstrap, jQuery</div>
                <div>Tabulator, Chart.js</div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl border border-slate-200 dark:border-slate-900">
              <h3 className="text-lg font-bold text-indigo-600 dark:text-blue-400 mb-4 flex items-center gap-2 border-b border-slate-200 dark:border-slate-900 pb-2">
                <Database className="w-4 h-4 text-indigo-600" />
                Backend & Database
              </h3>
              <div className="space-y-2.5 text-slate-600 dark:text-slate-400 text-sm">
                <div>Django, Django REST Framework</div>
                <div>Java, JDBC</div>
                <div>PostgreSQL, MySQL</div>
                <div>RESTful APIs, JWT Auth</div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl border border-slate-200 dark:border-slate-900">
              <h3 className="text-lg font-bold text-indigo-600 dark:text-blue-400 mb-4 flex items-center gap-2 border-b border-slate-200 dark:border-slate-900 pb-2">
                <ShieldAlert className="w-4 h-4 text-indigo-600" />
                Tools & Methods
              </h3>
              <div className="space-y-2.5 text-slate-600 dark:text-slate-400 text-sm">
                <div>Git, GitHub</div>
                <div>Gunicorn, WhiteNoise</div>
                <div>Service Workers, Web Push API</div>
                <div>Team Management & Agile</div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
