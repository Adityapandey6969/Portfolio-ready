'use client';

import { projects } from '@/src/data/projects';
import GameCard from '@/src/components/ui/GameCard';
import Link from 'next/link';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { isValidExternalUrl } from '@/src/lib/utils';

interface ProjectDetailsProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
  const project = projects.find((entry) => entry.id === params.slug);

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2 justify-center">
            <HiArrowNarrowLeft /> Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="w-full">
      <section className="pt-32 pb-8 container-custom">
        <Link href="/projects" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2 inline-block">
          <HiArrowNarrowLeft /> Back to Projects
        </Link>
      </section>

      <section className="section-padding container-custom">
        <GameCard>
          <div className="mb-8">
            <span className="inline-block text-xs bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full mb-4">
              {project.category.replace('-', ' ')}
            </span>
            <h1 className="section-heading gradient-text mb-4">{project.title}</h1>
            <p className="text-gray-400 text-lg max-w-3xl">{project.fullDescription}</p>
          </div>
        </GameCard>
      </section>

      <section className="section-padding container-custom">
        <div className="max-w-3xl mx-auto space-y-8">
          <GameCard delay={100}>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4">Problem Statement</h2>
              <p className="text-gray-300 leading-relaxed">{project.problemStatement}</p>
            </div>
          </GameCard>

          <GameCard delay={200}>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4">Solution Approach</h2>
              <p className="text-gray-300 leading-relaxed">{project.solutionApproach}</p>
            </div>
          </GameCard>

          <GameCard delay={300}>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span key={tech} className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 px-4 py-2 rounded-lg border border-cyan-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </GameCard>

          <GameCard delay={400}>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-cyan-400 font-bold">+</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GameCard>

          <GameCard delay={500}>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4">Outcomes</h2>
              <ul className="space-y-3">
                {project.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-green-400 font-bold">&gt;</span>
                    <span className="text-gray-300">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GameCard>

          <GameCard delay={600}>
            <div className="flex gap-4 justify-center">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="button-primary">
                View on GitHub
              </a>
              {isValidExternalUrl(project.liveUrl) && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="button-secondary">
                  Live Demo
                </a>
              )}
            </div>
          </GameCard>
        </div>
      </section>
    </div>
  );
}
