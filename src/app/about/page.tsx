'use client';

import Image from 'next/image';
import { aboutContent, personalInfo } from '@/src/data/personal';
import { educationData, certificationsData, extracurricularData } from '@/src/data/education';
import GameCard from '@/src/components/ui/GameCard';

export default function About() {
  return (
    <div className="w-full">
      <section className="section-padding bg-gradient-to-b from-gray-900 to-gray-800 pt-40">
        <div className="container-custom">
          <h1 className="section-heading gradient-text text-center mb-4">About Me</h1>
          <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto">
            Turning raw data into real-world decisions
          </p>
        </div>
      </section>

      <section className="section-padding container-custom">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-start">
          <GameCard>
            <div className="rounded-[2rem] border border-cyan-500/20 bg-gray-900/70 p-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="rounded-2xl bg-gray-950/70 p-4 border border-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Location</p>
                  <p className="text-sm text-gray-100">{personalInfo.location}</p>
                </div>
                <div className="rounded-2xl bg-gray-950/70 p-4 border border-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Semester</p>
                  <p className="text-sm text-gray-100">{personalInfo.semester}</p>
                </div>
                <div className="rounded-2xl bg-gray-950/70 p-4 border border-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Graduation</p>
                  <p className="text-sm text-gray-100">{personalInfo.graduationYear}</p>
                </div>
                <div className="rounded-2xl bg-gray-950/70 p-4 border border-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Focus</p>
                  <p className="text-sm text-gray-100">Data Science</p>
                </div>
              </div>
            </div>
          </GameCard>

          <div className="max-w-3xl">
            <div className="prose prose-invert max-w-none">
              {aboutContent.longVersion.split('\n\n').map((paragraph, idx) => (
                <GameCard key={idx} delay={idx * 100}>
                  <p className="text-gray-300 leading-relaxed mb-6 whitespace-pre-line">
                    {paragraph}
                  </p>
                </GameCard>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              {personalInfo.resumes.map((resume) => (
                <a
                  key={resume.url}
                  href={resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary"
                >
                  {resume.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-800/50">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-12">Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {educationData.map((edu, idx) => (
              <GameCard key={idx} delay={idx * 150}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">ED</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
                    <p className="text-cyan-400 text-sm mb-2">{edu.school}</p>
                    <div className="flex justify-between text-gray-400 text-sm">
                      <span>{edu.year}</span>
                      <span>{edu.percentage}</span>
                    </div>
                  </div>
                </div>
              </GameCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding container-custom">
        <h2 className="section-heading text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificationsData.map((cert, idx) => (
            <GameCard key={idx} delay={idx * 150}>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/40"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="text-2xl font-bold text-cyan-300">{cert.icon}</div>
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500">PDF</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                <p className="text-cyan-400 text-sm mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-5">{cert.date}</p>
                <span className="inline-flex items-center text-sm text-cyan-300">
                  View certificate
                </span>
              </a>
            </GameCard>
          ))}
        </div>
      </section>

      <section className="section-padding bg-gray-800/50">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-12">Extracurricular Activities</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {extracurricularData.map((activity, idx) => (
              <GameCard key={idx} delay={idx * 150}>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                    {activity.organization}
                  </h3>
                  <p className="text-sm font-semibold text-gray-300 mb-3">{activity.role}</p>
                  <p className="text-gray-400">{activity.description}</p>
                </div>
              </GameCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
