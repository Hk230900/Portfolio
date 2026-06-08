"use client";
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Send, AlertCircle, CheckCircle } from 'lucide-react';

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

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    else if (formState.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const subject = encodeURIComponent(`Portfolio Message from ${formState.name}`);
      const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
      window.location.href = `mailto:harshadbk2309@gmail.com?subject=${subject}&body=${body}`;
      setSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-indigo-600 dark:text-blue-400" />,
      title: "Email",
      value: "harshadbk2309@gmail.com",
      link: "mailto:harshadbk2309@gmail.com"
    },
    {
      icon: <LinkedinIcon className="w-6 h-6 text-indigo-600 dark:text-blue-400" />,
      title: "LinkedIn",
      value: "harshada-kale-a2b279199",
      link: "https://www.linkedin.com/in/harshada-kale-a2b279199"
    },
    {
      icon: <GithubIcon className="w-6 h-6 text-indigo-600 dark:text-blue-400" />,
      title: "GitHub",
      value: "github.com/Hk230900",
      link: "https://github.com/Hk230900"
    }
  ];

  return (
    <PageWrapper>
      <div className="px-6 py-16 max-w-6xl mx-auto z-10 relative">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 rounded-2xl border shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h2>
              
              {sent && (
                <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl text-sm flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Your email client has been opened to send the message. Thank you!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-700 dark:text-slate-350 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full p-4 bg-slate-50 dark:bg-slate-950/60 rounded-xl border ${
                      errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                    } focus:border-indigo-500 focus:outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 dark:text-slate-350 uppercase tracking-wider mb-2">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full p-4 bg-slate-50 dark:bg-slate-950/60 rounded-xl border ${
                      errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                    } focus:border-indigo-500 focus:outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 dark:text-slate-350 uppercase tracking-wider mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, team, or opportunity..."
                    rows={6}
                    className={`w-full p-4 bg-slate-50 dark:bg-slate-950/60 rounded-xl border ${
                      errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                    } focus:border-indigo-500 focus:outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400 resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-sm shadow-md shadow-indigo-500/25 hover:from-indigo-700 hover:to-purple-700 transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Other Ways to Connect</h2>
              <div className="space-y-4">
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
            </div>

            <div className="bg-gradient-to-br from-indigo-500/5 to-purple-500/5 p-8 rounded-2xl border border-slate-200 dark:border-slate-900">
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
