'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { GithubIcon, FacebookIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isActivationNotice, setIsActivationNotice] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Please enter a subject.';
    } else if (formData.subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    // Spam honeypot trap
    if (formData.honeypot) {
      setSubmitStatus('success');
      setStatusMessage('Thank you for reaching out!');
      setIsSubmitting(false);
      return;
    }

    try {
      const targetEmail = personalInfo.email || 'Kusalaravinda2004@gmail.com';
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _replyto: formData.email.trim(),
          _subject: `[Portfolio Contact] ${formData.subject.trim()} (from ${formData.name.trim()})`,
          message: formData.message.trim(),
          _captcha: 'false',
          _template: 'table',
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data) {
        const isSuccess = data.success === true || data.success === 'true';
        const msg = String(data.message || '');
        const isActivation = msg.toLowerCase().includes('activate') || msg.toLowerCase().includes('activation');

        if (isSuccess || isActivation) {
          setSubmitStatus('success');
          setIsActivationNotice(isActivation);
          setStatusMessage(
            isActivation
              ? `Message dispatched! FormSubmit sent a 1-time activation link to ${targetEmail}. Please check your inbox and click "Activate Form" once to enable instant delivery.`
              : 'Thank you! Your message has been delivered directly to Kusal\'s inbox. He will reply shortly.'
          );
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            honeypot: '',
          });
        } else {
          setSubmitStatus('error');
          setStatusMessage(msg || 'Unable to deliver message. Please reach out directly via email.');
        }
      } else {
        setSubmitStatus('error');
        setStatusMessage(data?.message || 'Unable to deliver your message. Please reach out directly via email.');
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      setSubmitStatus('error');
      setStatusMessage(`Network connection error. Please email me directly at ${personalInfo.email}.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border-violet-500/30 text-xs font-mono text-violet-300">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>06 // Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gradient">
            Let&apos;s Build Something Impactful
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Interested in data science internships, UI/UX collaborations, or discussing projects? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-slate-100">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Reach out directly through any of these verified channels.
                </p>
              </div>

              {/* Contact list */}
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-violet-500/30 transition-all text-slate-200 group"
                >
                  <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono uppercase text-slate-400">Email</span>
                    <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-violet-300 transition-colors">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                {personalInfo.phone && (
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-sky-500/30 transition-all text-slate-200 group"
                  >
                    <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 group-hover:scale-105 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-mono uppercase text-slate-400">Phone</span>
                      <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-sky-300 transition-colors">
                        {personalInfo.phone}
                      </span>
                    </div>
                  </a>
                )}

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5 text-slate-200">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono uppercase text-slate-400">Location</span>
                    <span className="text-xs sm:text-sm font-medium text-slate-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold block">
                  Professional Networks
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kusal Aravinda on GitHub"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-medium hover:border-violet-500/40 transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-violet-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kusal Aravinda on Facebook"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-medium hover:border-sky-500/40 transition-all"
                  >
                    <FacebookIcon className="w-4 h-4 text-sky-400" />
                    <span>Facebook</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kusal Aravinda on LinkedIn"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-medium hover:border-indigo-500/40 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Accessible Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
              
              <h3 className="text-xl font-bold text-slate-100 mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below. All submissions are processed securely through the backend.
              </p>

              {/* Status Banner */}
              {submitStatus === 'success' && (
                <div className={`mb-6 p-4 rounded-xl border flex items-start gap-3 text-xs sm:text-sm ${
                  isActivationNotice
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                    : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                }`}>
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-semibold block">
                      {isActivationNotice ? 'One-Time Activation Link Sent!' : 'Message Sent!'}
                    </span>
                    <span className="leading-relaxed block">{statusMessage}</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-300 text-xs sm:text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
                  <div className="space-y-2 flex-1">
                    <div>
                      <span className="font-semibold block text-red-200">Delivery Error</span>
                      <span className="leading-relaxed block mt-0.5">{statusMessage}</span>
                    </div>
                    {personalInfo.email && (
                      <div className="pt-1">
                        <a
                          href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(
                            formData.subject || 'Portfolio Inquiry'
                          )}&body=${encodeURIComponent(
                            `Hi Kusal,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
                          )}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-200 text-xs font-medium border border-red-500/30 transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Open in Email App with Your Drafted Message</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Honeypot for spam bot prevention */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300">
                      Your Name <span className="text-violet-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Maya Silva"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all ${
                        formErrors.name ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-[11px] text-red-400">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300">
                      Your Email <span className="text-violet-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all ${
                        formErrors.email ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-red-400">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-300">
                    Subject <span className="text-violet-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Data Science Internship Opportunity / UI Project"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all ${
                      formErrors.subject ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                  {formErrors.subject && (
                    <p className="text-[11px] text-red-400">{formErrors.subject}</p>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300">
                    Message <span className="text-violet-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all ${
                      formErrors.message ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-[11px] text-red-400">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
