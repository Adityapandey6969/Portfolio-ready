'use client';

import { useState } from 'react';
import { projects } from '@/src/data/projects';
import GameCard from '@/src/components/ui/GameCard';
import Link from 'next/link';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { isValidExternalUrl } from '@/src/lib/utils';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = ['all', 'data-science', 'full-stack', 'analytics'];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="w-full">
      <section className="section-padding bg-gradient-to-b from-gray-900 to-gray-800 pt-40">
        <div className="container-custom">
          <h1 className="section-heading gradient-text text-center mb-4">My Projects</h1>
          <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto">
            Real-world solutions combining data science, machine learning, and full-stack development
          </p>
        </div>
      </section>

      <section className="section-padding container-custom">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <GameCard key={project.id} delay={idx * 100}>
              <Link href={`/projects/${project.id}`}>
                <div className="project-card bg-gray-800 p-6 rounded-xl h-full flex flex-col cursor-pointer group">
                  <div className="h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                    <span className="text-lg font-bold tracking-[0.3em] text-cyan-300 group-hover:scale-110 transition-transform">
                      {project.category === 'data-science'
                        ? 'DATA'
                        : project.category === 'full-stack'
                        ? 'WEB'
                        : 'ANL'}
                    </span>
                  </div>

                  <span className="inline-block w-fit text-xs bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full mb-3">
                    {project.category.replace('-', ' ')}
                  </span>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 flex-grow">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-gray-700">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 text-center text-sm text-cyan-400 hover:text-cyan-300 py-2 transition-colors"
                    >
                      Github
                    </a>
                    {isValidExternalUrl(project.liveUrl) && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 text-center text-sm text-cyan-400 hover:text-cyan-300 py-2 transition-colors border-l border-gray-700"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>

                  <div className="text-cyan-400 flex items-center gap-1 font-semibold text-sm mt-2">
                    Read More <HiArrowNarrowRight />
                  </div>
                </div>
              </Link>
            </GameCard>
          ))}
        </div>
      </section>
    </div>
  );
}
