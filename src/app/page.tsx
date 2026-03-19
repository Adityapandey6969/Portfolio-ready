'use client';

import Image from 'next/image';
import { personalInfo } from '@/src/data/personal';
import { projects } from '@/src/data/projects';
import { stats } from '@/src/data/skills';
import { TypeAnimation } from 'react-type-animation';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiArrowNarrowRight } from 'react-icons/hi';
import GameCard from '@/src/components/ui/GameCard';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function parseStatValue(value: string) {
  const numericValue = Number.parseFloat(value.replace(/[^\d.]/g, '')) || 0;
  const decimals = value.includes('.') ? value.split('.')[1]?.replace(/[^\d]/g, '').length ?? 0 : 0;
  const suffix = value.replace(/[\d.]/g, '');

  return { numericValue, decimals, suffix };
}

export default function Home() {
  const [displayStats, setDisplayStats] = useState(() =>
    stats.map((stat) => {
      const { numericValue } = parseStatValue(stat.value);
      return { ...stat, current: 0, target: numericValue };
    })
  );

  useEffect(() => {
    const timers = stats.map((stat, idx) => {
      const { numericValue, decimals } = parseStatValue(stat.value);
      const step = decimals > 0 ? 0.01 : 1;

      return setInterval(() => {
        setDisplayStats((prev) => {
          const newStats = [...prev];

          if (newStats[idx].current < numericValue) {
            newStats[idx].current = Math.min(
              Number((newStats[idx].current + step).toFixed(Math.max(decimals, 0))),
              numericValue
            );
          }

          return newStats;
        });
      }, 30);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  return (
    <div className="w-full">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="container-custom z-10 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="text-center lg:text-left">
            <div className="mb-8 animate-fadeIn">
              <p className="text-cyan-400 text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4">
                Portfolio
              </p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Hi, I&apos;m <span className="gradient-text">Aditya Pandey</span>
              </h1>
            </div>

            <div className="text-xl md:text-3xl text-gray-300 mb-8 h-16 md:h-20">
              <TypeAnimation
                sequence={[
                  ...personalInfo.typewriterRoles.flatMap((role) => [role, 1000]),
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(to right, #06B6D4, #2563EB)',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              />
            </div>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8 mx-auto lg:mx-0">
              {personalInfo.shortBio}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {[
                { label: 'Based In', value: personalInfo.location },
                { label: 'Degree', value: personalInfo.degree },
                { label: 'Semester', value: personalInfo.semester },
                { label: 'Graduation', value: String(personalInfo.graduationYear) },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-cyan-500/20 bg-gray-900/70 px-4 py-4 text-left">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">{item.label}</p>
                  <p className="text-sm text-gray-200">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Link href="/projects" className="button-primary flex items-center gap-2 justify-center">
                View My Projects <HiArrowNarrowRight />
              </Link>
              {personalInfo.resumes.map((resume) => (
                <a
                  key={resume.url}
                  href={resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary flex items-center gap-2 justify-center"
                >
                  {resume.shortLabel}
                </a>
              ))}
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
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

          <GameCard delay={150}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-gray-900/80 p-4 shadow-2xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {personalInfo.resumes.map((resume) => (
                    <a
                      key={resume.label}
                      href={resume.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl border border-cyan-500/20 bg-gray-950/70 px-4 py-4 hover:border-cyan-400/40"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Resume</p>
                      <p className="text-sm text-gray-100">{resume.label}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </GameCard>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8">
          {displayStats.map((stat, idx) => {
            const { decimals, suffix } = parseStatValue(stat.value);

            return (
              <GameCard key={idx} delay={idx * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.current.toFixed(decimals)}
                    {suffix}
                  </div>
                  <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
                </div>
              </GameCard>
            );
          })}
        </div>
      </section>

      <section className="section-padding container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my best work in Data Science, Machine Learning, and Full-Stack Development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, idx) => (
            <GameCard key={project.id} delay={idx * 150}>
              <div className="project-card bg-gray-800 p-6 rounded-xl">
                <div className="h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold tracking-[0.2em] text-cyan-300">
                    {project.emoji ?? 'PRJ'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs bg-gray-700 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${project.id}`} className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2">
                  Read More <HiArrowNarrowRight />
                </Link>
              </div>
            </GameCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects" className="button-primary inline-flex items-center gap-2">
            View All Projects <HiArrowNarrowRight />
          </Link>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-blue-600/10 border-y border-gray-800">
        <div className="container-custom text-center">
          <h2 className="section-heading mb-4">Let&apos;s Build Something Together</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities.
          </p>
          <Link href="/contact" className="button-primary inline-flex items-center gap-2">
            Get In Touch <HiArrowNarrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
