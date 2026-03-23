'use client';

import { useState } from 'react';
import { personalInfo } from '@/src/data/personal';
import { BsGithub, BsLinkedin, BsEnvelope, BsGeo } from 'react-icons/bs';
import GameCard from '@/src/components/ui/GameCard';

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export default function Contact() {
  const hasFormEndpoint = Boolean(FORM_ENDPOINT);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const openEmailDraft = async () => {
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    try {
      await navigator.clipboard.writeText(
        `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.message}`
      );
    } catch {
      // Clipboard support is not guaranteed, so we still continue to the mail client.
    }

    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    if (!hasFormEndpoint) {
      await openEmailDraft();
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(FORM_ENDPOINT!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).catch(() => {
        return null;
      });

      if (response?.ok) {
        setSubmitMessage("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        await openEmailDraft();
        setSubmitMessage('The form backend is unavailable, so I opened an email draft instead.');
      }
    } catch {
      await openEmailDraft();
      setSubmitMessage('The form backend is unavailable, so I opened an email draft instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <section className="section-padding bg-gradient-to-b from-gray-900 to-gray-800 pt-40">
        <div className="container-custom">
          <h1 className="section-heading gradient-text text-center mb-4">Get In Touch</h1>
          <p className="text-gray-300 text-center text-lg max-w-2xl mx-auto">
            Have a project in mind, a question, or just want to say hi? I&apos;d love to hear from you!
          </p>
        </div>
      </section>

      <section className="section-padding container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <GameCard delay={100}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitMessage && (
                  <div className="bg-green-500/20 border border-green-500 text-green-400 p-4 rounded-lg">
                    {submitMessage}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-primary w-full disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : hasFormEndpoint ? 'Send Message' : 'Open Email Draft'}
                </button>
              </form>
            </GameCard>

            <div className="space-y-6">
              <GameCard delay={200}>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 flex items-start gap-4">
                  <BsEnvelope className="text-cyan-400 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </GameCard>

              <GameCard delay={250}>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 flex items-start gap-4">
                  <BsGeo className="text-cyan-400 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-400">{personalInfo.location}</p>
                  </div>
                </div>
              </GameCard>

              <GameCard delay={300}>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                  <h3 className="font-semibold mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    <a
                      href={personalInfo.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-all transform hover:scale-110"
                    >
                      <BsGithub size={28} />
                    </a>
                    <a
                      href={personalInfo.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-all transform hover:scale-110"
                    >
                      <BsLinkedin size={28} />
                    </a>
                  </div>
                </div>
              </GameCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
