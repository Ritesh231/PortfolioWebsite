import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Copy, Check, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/personal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject';
    if (!formData.message.trim()) {
      errs.message = 'Please write a message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate sending preparation & compose mailto draft for authentic delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      const mailtoUrl = `mailto:${personalData.contact.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.open(mailtoUrl, '_blank');
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Contact Information & Availability */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light text-accent text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Get in Touch
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
                Have a Project in Mind?
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                Let's discuss your idea and turn it into something meaningful.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              {/* Email Card with 1-click copy */}
              <div className="p-5 rounded-2xl bg-background border border-border flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-accent-light text-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted">Email</div>
                    <a
                      href={`mailto:${personalData.contact.email}`}
                      className="text-sm font-bold text-foreground hover:text-accent transition-colors truncate block"
                    >
                      {personalData.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-surface border border-border text-muted hover:text-foreground transition-all flex items-center gap-1.5 text-xs font-medium flex-shrink-0 shadow-subtle"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-success" />
                      <span className="text-success text-xs font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn & GitHub Links */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={personalData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-background border border-border hover:border-accent/40 flex items-center gap-3 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-semibold text-muted uppercase">LinkedIn</div>
                    <div className="text-xs font-bold text-foreground truncate">Connect</div>
                  </div>
                </a>

                <a
                  href={personalData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-background border border-border hover:border-accent/40 flex items-center gap-3 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-semibold text-muted uppercase">GitHub</div>
                    <div className="text-xs font-bold text-foreground truncate">Repositories</div>
                  </div>
                </a>
              </div>

              {/* Availability Notice */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-center gap-3">
                <span className="relative flex h-3 w-3 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                </span>
                <div className="text-xs text-slate-700">
                  <span className="font-bold text-slate-900">Open for opportunities:</span> Freelance contracts, full-time engineering roles, and web consultations.
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-background rounded-2xl border border-border p-6 sm:p-8 shadow-card">
              
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-success flex items-center justify-center mx-auto shadow-subtle">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Message Prepared!
                  </h3>
                  <p className="text-sm text-muted max-w-md mx-auto">
                    Your message has been formatted and opened in your email client to send to <span className="font-semibold text-foreground">{personalData.contact.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-accent bg-accent-light rounded-xl hover:bg-indigo-100 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-foreground placeholder:text-muted/60 transition-all focus:outline-none focus:ring-2 ${
                          errors.name
                            ? 'border-rose-400 focus:ring-rose-400/20'
                            : 'border-border focus:border-accent focus:ring-accent/20'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-foreground placeholder:text-muted/60 transition-all focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-rose-400 focus:ring-rose-400/20'
                            : 'border-border focus:border-accent focus:ring-accent/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity"
                      className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-foreground placeholder:text-muted/60 transition-all focus:outline-none focus:ring-2 ${
                        errors.subject
                          ? 'border-rose-400 focus:ring-rose-400/20'
                          : 'border-border focus:border-accent focus:ring-accent/20'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, or requirements..."
                      className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-foreground placeholder:text-muted/60 transition-all focus:outline-none focus:ring-2 resize-y ${
                        errors.message
                          ? 'border-rose-400 focus:ring-rose-400/20'
                          : 'border-border focus:border-accent focus:ring-accent/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover disabled:bg-accent/60 rounded-xl shadow-card shadow-accent/25 hover:shadow-card-hover transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Composing Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-muted">
                    This triggers a formatted draft directly to <span className="font-medium text-foreground">{personalData.contact.email}</span>.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
